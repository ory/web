---
path: '/dockertest-gaen-google-apple-exposure-notification-covid-19/'
banner: '/images/blog-banner-dockertest.png'

title: |
  Keeping Covid-19 in check with ORY Dockertest

teaser: |
  This article gives a short introduction to Dockertest and how Google is using it against Covid19,
  also an overview about the open-source virus response in general.

seo:
  title: |
    Write tests like Google and Apple Exposure Notifications using Dockertest
  keywords: |
    docker, test, database testing, cloud development, auth, authentication, open source, Covid19, pandemic

publishedAt: '2020-12-02'
author: vinckr

overline: |
  Dockertest - Automated Database Testing in Docker
---

Test driven software development is built into the fundamentals in the GO
programming language.  
The ORY Open Source Software project Dockertest began with the aim to simplify
database testing and reduce the complexity in building unit tests.  
In this blogpost, I want to introduce Dockertest, and highlight how its
simplicity and utility in building cloud native database applications has made
it a widespread tool among developers.

## What is ORY Dockertest?

In today's cloud native software development, many engineers choose to use
containerization software such [Docker](https://docs.docker.com/) to test,
deploy, and ship database applications.  
And even though the whole development process has become much easier with
Docker, there are still cases that are hard to handle.  
One such case is when you want to test integration of services with databases.

When working with many mock database systems testing can be cumbersome because
the database abstraction layer is often tied to one database type. Using an API
abstraction simplifies the process. But for small changes to the table structure
you need to work on the mocks or deal with other ramifications in the API.  
You have the problem that the mock is not a real database. You also have to
rewrite the mock database and unit tests, when you make changes to your
configuration.  
This is where Docker and ORY Dockertest can help you create real databases for
your tests. You dont have to set up a whole database infrastructure.

[Dockertest](https://github.com/ory/Dockertest) automates your interactions with
the Docker API. This lets you test your services database integration in a
simple and straightforward way. You configure your specific test setup, create
the databases you want to test, ping to ensure connection and after testing
close and dispose of the database again.

In [Dockertest](https://github.com/ory/Dockertest) a pool represents a
connection to the Docker API and is used to handle docker images and resources
represent the docker containers. You can find examples for all common databases
on [github.com/ory/Dockertest](https://github.com/ory/Dockertest).

## How Dockertest is helping keeping Covid in check

The (Google/Apple) Exposure Notification (GAEN) system was developed by both
companies to help provide an effective framework for tracing Covid19 infections
with an emphasis on privacy. Goverments worldwide use it to provide their
citizens with a means of tracing infections or rather notifiying them of
exposure to the virus. Since most people either have an Apple or Android device
this approach covers a broad chunk of the population.

Now what does this have to do with
[Dockertest](https://github.com/ory/Dockertest)?

Google's
[open source reference implementation](https://github.com/google/exposure-notifications-server)
of an notification server uses [Dockertest](https://github.com/ory/Dockertest)
for
[database testing](https://github.com/google/exposure-notifications-server/blob/c35c97708dec0a8a3e2ac54f89f9033be5da22a6/internal/database/database_util.go).
It is amazing to see a tool that was written to ease the development process at
ORY is used by big tech organisations in the most impactful health operation in
modern times. It shows what a reliable and essential tool
[Dockertest](https://github.com/ory/Dockertest) has become over the years.

Here you can see the full code of the implementation:

```go
// NewTestDatabaseWithConfig creates a new database suitable for use in testing.
 // This should not be used outside of testing, but it is exposed in the main
 // package so it can be shared with other packages.
 //
 // All database tests can be skipped by running `go test -short` or by setting
 // the `SKIP_DATABASE_TESTS` environment variable.
 func NewTestDatabaseWithConfig(tb testing.TB) (*DB, *Config) {
	tb.Helper()

	if testing.Short() {
		tb.Skipf("🚧 Skipping database tests (short!")
	}

	if skip, _ := strconv.ParseBool(os.Getenv("SKIP_DATABASE_TESTS")); skip {
		tb.Skipf("🚧 Skipping database tests (SKIP_DATABASE_TESTS is set)!")
	}

	// Context.
	ctx := context.Background()

	// Create the pool (docker instance).
	pool, err := Dockertest.NewPool("")
	if err != nil {
		tb.Fatalf("failed to create Docker pool: %s", err)
	}

	// Start the container.
	dbname, username, password := "en-server", "my-username", "abcd1234"
	container, err := pool.RunWithOptions(&Dockertest.RunOptions{
		Repository: "postgres",
		Tag:        "12-alpine",
		Env: []string{
			"LANG=C",
			"POSTGRES_DB=" + dbname,
			"POSTGRES_USER=" + username,
			"POSTGRES_PASSWORD=" + password,
		},
	})
	if err != nil {
		tb.Fatalf("failed to start postgres container: %s", err)
	}

	// Ensure container is cleaned up.
	tb.Cleanup(func() {
		if err := pool.Purge(container); err != nil {
			tb.Fatalf("failed to cleanup postgres container: %s", err)
		}
	})

	// Get the host. On Mac, Docker runs in a VM.
	host := container.Container.NetworkSettings.IPAddress
	if runtime.GOOS == "darwin" {
		host = net.JoinHostPort(container.GetBoundIP("5432/tcp"), container.GetPort("5432/tcp"))
	}

	// Build the connection URL.
	connURL := &url.URL{
		Scheme: "postgres",
		User:   url.UserPassword(username, password),
		Host:   host,
		Path:   dbname,
	}
	q := connURL.Query()
	q.Add("sslmode", "disable")
	connURL.RawQuery = q.Encode()

	// Wait for the container to start - we'll retry connections in a loop below,
	// but there's no point in trying immediately.
	time.Sleep(1 * time.Second)

	b, err := retry.NewFibonacci(500 * time.Millisecond)
	if err != nil {
		tb.Fatalf("failed to configure backoff: %v", err)
	}
	b = retry.WithMaxRetries(10, b)
	b = retry.WithCappedDuration(10*time.Second, b)

	// Establish a connection to the database. Use a Fibonacci backoff instead of
	// exponential so wait times scale appropriately.
	var dbpool *pgxpool.Pool
	if err := retry.Do(ctx, b, func(ctx context.Context) error {
		var err error
		dbpool, err = pgxpool.Connect(ctx, connURL.String())
		if err != nil {
			return retry.RetryableError(err)
		}
		return nil
	}); err != nil {
		tb.Fatalf("failed to start postgres: %s", err)
	}

	// Run the migrations.
	if err := dbMigrate(connURL.String()); err != nil {
		tb.Fatalf("failed to migrate database: %s", err)
	}

	// Create the db instance.
	db := &DB{Pool: dbpool}

	// Close db when done.
	tb.Cleanup(func() {
		db.Close(context.Background())
	})

	return db, &Config{
		Name:     dbname,
		User:     username,
		Host:     container.GetBoundIP("5432/tcp"),
		Port:     container.GetPort("5432/tcp"),
		SSLMode:  "disable",
		Password: password,
	}
}
```

Health agencies around the world use this reference implementation of the
Exposure Notifications API to build a backend to their notification apps. The
server receives and validates the coded exposure keys from positive cases and
keys shared between mobile devices to determine if two devices were near each
other. It then stores the keys in a database and if there is a corresponding
match on a user's device, the app notifies the user that they have been exposed
to a positive case.

You can read more in depth about the server on
[Googles github documentation](https://google.github.io/exposure-notifications-server/).

## Open-source software drives innovative development

The whole GAEN project is open-source, as is
[Dockertest](https://github.com/ory/Dockertest). The whole concept of contact
tracing or exposure notification works great with open source, since it cuts
down complexity of the whole operation. Imagine how much slower and inconsistent
it would be if every country tried to build this software themselves. The sheer
scale and complexity of the project as well as the countless pitfalls of
security and privacy - that continue to cause controversy - is something that
only a collective effort can handle.

Following health measures, taking care of sorroundings and the people around us
is a collective effort. Building essential digital infrastructure also needs to
be a collective project.

This is not an utopia that can only be imagined in the distant future, it
becoming reality even now. If you follow the ongoing pandemic - as you are
probably forced to - you noticed that there are many open source projects
tackling every angle that can be imagined.

The most obvious are stats and APIs for public information, but also data
scraper and analytics tools, even hardware like open source ventilators. There
are efforts to use tools like
[machine learning](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7315944/) and
more exotic new technologies as well. The list compiled by the
[EU Joinup project](https://joinup.ec.europa.eu/collection/digital-response-covid-19/open-source-solutions)
is massive and growing.

The virus response is one field where open-source software (and to a smaller
scale hardware) will continue to drive collective action. Open-source holds a
massive potential of innovation and efficency, for all other fields of public
organisation, public infrastructure and services. It is time for citizens to
demand open-source solutions for essential and critical infrastructure and
services. This wont solve all - if any - problems of modern society, but it
would be a great step towards transparency and in the long run trust.

### Dockertest is an integral part of the ORY Ecosystem

ORY promises to produce high quality open source software.  
[Dockertest](https://github.com/ory/Dockertest) is just one example of how ORY
approaches advanced software development for cloud native applications.  
As this blogpost documents, ORY works with a dedicated worldwide community
assuring that developer friendly security tools, innovative product development
in identity infrastructure, and advanced cloud deployment using cloud platform
independent open source tools are broadly available.

### Conclusion

Thanks for taking the time to read this article! Check out (our
blog)[https://www.ory.sh/blog] for more articles and tutorials.

Should you have further questions or feedback, visit the
[ORY Community Forum](https://community.ory.sh/) or
[ORY Slack](https://www.ory.sh/chat).
[ORY Dockertest](https://github.com/ORY/Dockertest) is open-source and freely
available on [github](https://github.com/ORY/kratos), please consider starring
the repository.  
It is free and helps grow the project and community.

Sign up to
[the ORY newsletter](https://ORY.us10.list-manage.com/subscribe?u=ffb1a878e4ec6c0ed312a3480&id=f605a41b53)
and we will notify you of new updates to
[ORY Dockertest](https://github.com/ORY/Dockertest) and
[other ORY projects](https://github.com/ORY/).
