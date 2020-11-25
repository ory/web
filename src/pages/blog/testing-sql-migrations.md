---
path: '/testing-sql-migrations/'
title: >
  Write Better Migrations with SQL Tests

publishedAt: '2020-04-27'
author: zepatrik

overline: >
  Testing and Continuous Integration

subtitle: >
  Start properly testing SQL migrations.

teaser:
  Learn how to test SQL migrations in any environment. This guide will point out
  all the considerations we at ORY make when implementing SQL migration tests
  for our open source products.
---

How do you test your SQL migrations? I am pretty sure you don't. Unless one
calls running the migration and checking if something broke a proper test. But
how could you possibly test migrations?

Why are database migration tests necessary in the first place? They can be buggy
like any other code you write and might introduce regression issues.

Our goal is to develop reliable, hardened, and lightweight services that
integrate well with other systems. As such they come with database migrations to
set up the database of your choice. The biggest challenge is ensuring people who
skip versions when upgrading will still be able to migrate their database.

This guide explains how we at ORY test all the migrations of our products.

## The General Idea

When applying a database migration you have two types of records:

1. ones that where already in the database complying to the old schema
2. others that will be added in the future complying to the new schema

Our tests now have to make sure data of any type will work accordingly after
applying the migration. So the obvious way to verify that assumption is to
insert both types of data and check if they work as expected.

The flow of such a basic test looks like this:

1. insert old schema record
2. run the migration
3. insert new schema record
4. check if both records are present as expected

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVEJcbiAgICBEQk8gLS0-fGFwcGx5IG1pZ3JhdGlvbnwgREJOXG4gICAgc3ViZ3JhcGggb2xkIHNjaGVtYVxuICAgIE9SW29sZCBzY2hlbWEgcmVjb3JkXSAtLT58aW5zZXJ0fCBEQk9bKGRhdGFiYXNlKV1cbiAgICBlbmRcbiAgICBzdWJncmFwaCBuZXcgc2NoZW1hXG4gICAgTlJbbmV3IHNjaGVtYSByZWNvcmRdIC0tPnxpbnNlcnR8IERCTlsoZGF0YWJhc2UpXVxuICAgIGVuZFxuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifX0)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVEJcbiAgICBEQk8gLS0-fGFwcGx5IG1pZ3JhdGlvbnwgREJOXG4gICAgc3ViZ3JhcGggb2xkIHNjaGVtYVxuICAgIE9SW29sZCBzY2hlbWEgcmVjb3JkXSAtLT58aW5zZXJ0fCBEQk9bKGRhdGFiYXNlKV1cbiAgICBlbmRcbiAgICBzdWJncmFwaCBuZXcgc2NoZW1hXG4gICAgTlJbbmV3IHNjaGVtYSByZWNvcmRdIC0tPnxpbnNlcnR8IERCTlsoZGF0YWJhc2UpXVxuICAgIGVuZFxuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifX0)

In a scenario where you just have to run one migration this would be possible
manually. Our requirements mandate fully automated tests that ensure reliable
schema migration across multiple steps.

The test from above can sequentially be run for every migration. Conveniently we
can use the post migration record as the next pre migration record. It also
makes sense to do all the assertions in the end and thus avoiding the need to
keep old data models around. This does not affect the validity of our test
because the latest migration always represents the schema a user upgrades to.

As it also is not possible to insert rows before the table is created we are
rendered with the following flow:

1. initialize the database with migration 1
1. insert record 1
1. apply migration 2
1. insert record 2
1. ...
1. apply migration n
1. insert record n
1. check assertions on all records

## Code example (GO)

Now let's have a look on some code examples written in GO
([open gist](https://gist.github.com/zepatrik/787ccfd19035e0859225ff79c9643435)):

```go
func TestMigrations(t *testing.T) {
	// start a test container and create the database connection
	connection := dockertest.ConnectToTestPostgreSQLPop(t)
	// The test migrator searches for testdata SQL files in the ./testdata directory.
	// After applying each migration it runs its corresponding testdata file.
	// This test migrator highly depends on the way you apply migrations.
	testMigrator := NewTestMigrator(t, connection, "../migrations", "./testdata")
	require.NoError(t, testMigrator.Up())

	// there are 10 migrations
	for i := 0; i < 10; i++ {
		// get the expected data for the migration
		expect := expectedData(i)
		// find the actual data
		var actual testData
		connection.Find(&actual, expect.ID)
		// check if the records are equal
		assert.Equal(t, expect, actual)
	}
}
```

An SQL migration might look like this:

```sql
ALTER TABLE hydra_oauth2_authentication_session ADD remember bool NOT NULL DEFAULT FALSE;

UPDATE hydra_oauth2_authentication_session SET remember=TRUE;
```

It's corresponding assertions could look like:

```go
assert.True(t, preMigrationSession.Remember)
assert.False(t, postMigrationSession.Remember)
```

## Conclusion

Our approach in testing migrations assures you can upgrade your database to any
version. Even when implementing this pattern in a private project with known
databases it will not only automate the testing of migrations but helps to
prevent regression issues and ensures your migrations follow your data models.

## Outlook

To strengthen the trust in our migrations we might choose to run full stack
integration tests using a database of an older schema. As this topic highly
depends on your application there is not a single way to approach this. It will
not be suitable in every case but is an interesting idea to consider.

## Continue reading

You can have a look on
[ORY Hydra's migration tests](https://github.com/ory/hydra/tree/v1.5.0-beta.1/persistence/sql/migratest)
to see a very verbose example. If you use
[github.com/gobuffalo/pop](https://github.com/gobuffalo/pop) as well you might
want to use their
[TestMigrator](https://github.com/ory/hydra/blob/v1.5.0-beta.1/persistence/sql/migratest/helpers.go)
as we do. To learn more about how to manage database changes with CI/CD you can
find some good advice on
[hackernoon](https://hackernoon.com/database-changes-can-be-scary-how-r1hy2gfe).
