---
published: true
path: '/run-oauth2-server-open-source-api-security/'
title: >
  Run your own OAuth2 Server

metaDescription: >
  Run your own OAuth2 Server and OpenID Connect Provider (OIDC) using scalable
  and secure open source software in under 10 minutes.

metaTitle: >
  Run your own OAuth2 Server using open source - step by step

publishedAt: '2019-08-29'
author: 'Aeneas Rekkas'
overline: >
  API Security & OAuth Server

category: Tutorial
subtitle: >
  Run your own OAuth2 Server and OpenID Connect Provider using secure and
  scalable open source technology.

teaser:
  In this guide, you will set up a hardened, fully functional OAuth2 Server and
  OpenID Connect provider using open source only. It will take you about ~10
  minutes. We will use ORY Hydra (open source), a security-first OAuth2 and
  OpenID Connect server written in Golang.
---

In this guide you will set up a hardened, fully functional OAuth2 Server and
OpenID Connect Provider (OIDC / OP) using open source only. It will take you
about ~15 minutes. This guide is for you, if you are looking to do something
like in the gif on the right, or more specifically:

- You want to use OAuth2 for API security.
- You want to open up your API to third party developers like
  [GitHub](https://developer.github.com/v3/).
- You want to become an identity provider like
  [Google](https://developers.google.com/identity/) ,
  [Facebook](https://developers.facebook.com/docs/facebook-login) , or
  [Twitter](https://dev.twitter.com/web/sign-in).
- You need to federate (delegate) authentication or authorization.

We will use open source [ORY Hydra](https://github.com/ory/hydra) (7k+ GitHub
Stars, 5M+ Docker Downloads), a hardened production-ready, security-first OAuth2
Server and OpenID Connect Provider written in Go (Golang).

## Refresh your OAuth2 Knowledge

A OAuth2 Server, sometimes also referred to as an OAuth 2.0 Server, OAuth
Server, Authorization Server, is a software system that implements network
protocol flows that allow a client software application to act on behalf of a
user.

For example when using [CircleCI](https://circleci.com) (the OAuth2
Client, you perform an OAuth2 Flow to grant CircleCI access to your repositories
on GitHub (the OAuth2 Server, this would be ORY Hydra). GitHub will ask you what
repositories you want to grant access to and if it is ok to grant other data
(access to your email address, profile picture, ...) CircleCI has requested:

<p>
<figure>
  <video autoplay muted loop>
     <source src="../../images/articles/oauth2/oauth2-flow.mp4" type="video/mp4">
     <source src="../../images/articles/oauth2/oauth2-flow.webm" type="video/webm">
     <img src="../../images/articles/oauth2/oauth2-flow.gif" alt="GitHub OAuth2 visual flow" />
  </video>
  <figcaption>
    A typical OAuth2 Flow with GitHub acting as the OAuth2 Server
    and OpenID Connect Provider, and CircleCI as the OAuth2 Client.
  </figcaption>
</figure>
</p>

A more technical overview of the protocol and related terminologies - such
asOAuth2 Server, OAuth2 Client, OpenID Connect Provider - can be found in
written form:

- [DigitalOcean: An Introduction to OAuth 2](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2)
- [Aaron Parecki: OAuth2 Simplified](https://aaronparecki.com/2012/07/29/2/oauth2-simplified)

and in visual form in this video:

`youtube:https://www.youtube.com/embed/996OiexHze0`

### ORY Hydra: A Headless OAuth2 and OpenID Connect Provider

ORY Hydra is a OAuth2 Server and OpenID Certified™ OpenID Connect Provider
written in Go.

Compared to other OAuth2 and OpenID Connect Providers it does not implement its
own user database and management (for user login, user registration, password
reset, 2fa, ...), but uses the
[Login and Consent Flow](https://www.ory.sh/docs/hydra/implementing-consent) to
delegate rendering the Login UI ("Please enter your email and password") and
Consent UI ("Should application MyDropboxDownload be allowed to access all your
private Dropbox Documents?") to another application, typically written by you in
your favorite programming language for example Java, PHP, Go, NodeJS, etc., and UI framework for instance ReactJS, AngularJS, etc.

All
[ORY technology follows architecture principles](https://www.ory.sh/docs/ecosystem/software-architecture-philosophy)
that work best on oontainer orchestration systems such as Kubernetes,
CloudFoundry, OpenShift, and similar projects. While it is possible to run the
ORY stack on a RaspberryPI, the integration with the Docker and Container
ecosystem is best documented and supported. ORY's architecture is designed along several guiding principles:

- Minimal dependencies (no system dependencies; might need a database backend)
- Runs everywhere (Linux, macOS, FreeBSD, Windows; AMD64, i386, ARMv5, ...)
- Scales without effort (no memcached, etcd, required, ...)
- Minimize room for human and network errors

## Prepare Deployment in Docker

Before we head into it, you need to make sure that there are no conflicts with
existing docker containers or other open ports. Please make sure that ports
`9000, 9001, 9010, 9020` are open.

For Linux

```shell
$ sudo ss -atuln | grep '9000\|9001\|9010\|9020'
```

For Apple MacOS (`/bin/bash` and `/bin/zsh`)
 
```shell
$ sudo netstat -atuln | grep '9000\|9001\|9010\|9020'
```

Note 'netstat' on the MAC does not support all options used in Lunix and Windows. The 'lsof' command ($ man -k lsof) augments some of netstat missing functionality.


For Microsoft Windows 10, use the following command:
```shell
> netstat -an | findstr /r "9000 9001 9010 9020"
```

If the result of the command lists open ports, you must kill the command that
listens on that port first. Next you should check if any existing ORY Hydra
Docker container is running. If there is one, you should kill that Docker
container.

```shell
$ docker ps | grep 'hydra'
$ docker kill hydra
$ docker kill --signal=HUP hydra
```
For Microsoft Windows use
```shell
> docker ps | findstr "hydra"
```

## Create a Docker Network

Initially, a network must be created that attaches  all 
Docker containers so the containers can talk to one another.

```shell
$ docker network create hydraguide
```
The result will be something like:

```shell
641a26284ff2f8ee4580988371b91923d6711e20aa964ebbdf5b2e4b4f2592b8
```

The next section explains how to set up the PostgreSQL database system.


## Install and Run PostgreSQL in Docker

This docker command starts postgres container `ory-hydra-example--postgres` and
sets up a database called `hydra` with user `hydra` and password `secret`.

Note: Some code listings use `\` at the end of the line. Shells like bash
concatenate these to one line.

```shell
$ docker run --network hydraguide \
  --name ory-hydra-example--postgres \
  -e POSTGRES_USER=hydra \
  -e POSTGRES_PASSWORD=secret \
  -e POSTGRES_DB=hydra \
  -d postgres:9.6
```

By the way, we do not recommend deploying databases using Docker in production. It will make your life miserable. Use a managed solution like Amazon RDS (https://aws.amazon.com/rds/) or Google Cloud SQL (https://cloud.google.com/sql). Even
small instances will be able to serve large traffic numbers, check out some of the
[benchmarks](https://www.ory.sh/docs/guides/master/performance/1-hydra).

## Configure the ORY Hydra OAuth2 and OpenID Connect Provider

The **system secret** is used to **encrypt data at rest**, and to **sign tokens
and authorize codes**. Once a database is initialized with a system secret, 
that secret must be used to access the database.

```shell
## Linux / macOS ##
#
# The system secret can only be set against a fresh database. This
# secret is used to encrypt the database and needs to be set to the same value every time the process (re-)starts.
# You can use /dev/urandom to generate a secret. But make sure that the secret must be the same anytime you define it.
# You could, for example, store the value somewhere.

$ export SECRETS_SYSTEM=$(export LC_CTYPE=C; cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)

## Other systems ##
#
# While systems like Windows support creating random secrets, we will just use a fixed one for this example.
# Keep in mind that this assumes that you're running some type of linux-ish shell:
#
# $ export SECRETS_SYSTEM=this_needs_to_be_the_same_always_and_also_very_$3cuR3-._
```

### Define the Data Source Name (DSN)

The database URL must point to the Postgres container that was created above. The database will be used to persist and query data. **ORY Hydra prevents data leaks** as only token signatures are stored in the database. For a valid token, both payload and signature are required.

```shell
$ export DSN=postgres://hydra:secret@ory-hydra-example--postgres:5432/hydra?sslmode=disable
```
The result will be something like:

```shell
postgres://hydra:secret@ory-hydra-example--postgres:5432/hydra?sslmode=disable
```

### Run SQL Migrations

Next, the following `hydra migrate sql` command initialises the database. It pulls the latest Docker Image for ORY Hydra and runs
a container that executes the `hydra migrate sql` command.

```shell
$ docker run -it --rm \
  --network hydraguide \
  oryd/hydra:v1.8.5 \
  migrate sql --yes $DSN
```

For safety's sake, SQL migrations do not run without explicit instructions
This is the case for new and existing databases.

## Run the ORY Hydra OAuth2 and OpenID Connect Provider

Besides setting the system secret (`SECRETS_SYSTEM` ), the database URL (`DSN`
), the public URL (`URLS_SELF_ISSUER`) of the server, the user login endpoint (
`URLS_LOGIN`) and the user consent endpoint (`URLS_CONSENT`) are passed using
environment variables.

Both **user login and consent URLs** point to one or two web service(s) that
will be explained and set up in the next sections. For now, it connects ORY Hydra to an identity management system that handles user registration, profile
management, and user login.

In this example, ORY Hydra runs HTTP instead of
HTTPS. This simplifies the application. In a production scenario, HTTPS and more secure values would be used.

There are two exposed ports in this case: 9000 and 9001. The former
(9000) serves API requests coming from the public internet e.g.: 
`/oauth2/auth`
`/oauth2/token` 
while the latter (9001) serves administrative API requests
that should not be available, without administrator intention, to the public internet.

```shell
$ docker run -d \
  --name ory-hydra-example--hydra \
  --network hydraguide \
  -p 9000:4444 \
  -p 9001:4445 \
  -e SECRETS_SYSTEM=$SECRETS_SYSTEM \
  -e DSN=$DSN \
  -e URLS_SELF_ISSUER=http://127.0.0.1:9000/ \
  -e URLS_CONSENT=http://127.0.0.1:9020/consent \
  -e URLS_LOGIN=http://127.0.0.1:9020/login \
  oryd/hydra:v1.8.5 serve all --dangerous-force-http
```

### Is it alive?

This is easy to answer, just check the docker logs! Or,
[open the health check](http://127.0.0.1:9001/health/ready) , which should show
the following in the browser page:

```
{"status":"ok"}
```

```shell
$ docker logs ory-hydra-example--hydra

[...]

time="2017-06-29T21:26:34Z" level=info msg="Setting up http server on :4444"
```

### Get help

The Hydra Command Line Interface (CLI) manages the ORY Hydra REST APIs. To see the available commands, run the `help`
command.

```shell
$ docker run --rm -it \
  oryd/hydra:v1.8.5 \
  help
```
This command produces an overview of the CLI as follows:

```shell
Run and manage ORY Hydra
```

Usage:
  hydra [command]

Available Commands:
  clients     Manage OAuth 2.0 Clients
  help        Help about any command
  keys        Manage JSON Web Keys
  migrate     Various migration helpers
  serve       Parent command for starting public and administrative HTTP/2 APIs
  token       Issue and Manage OAuth2 tokens
  version     Display this binary's version, build time and git hash of this build

Flags:
      --config string     Config file (default is $HOME/.hydra.yaml)
  -h, --help              help for hydra
      --skip-tls-verify   Foolishly accept TLS certificates signed by unkown certificate authorities

Use "hydra [command] --help" for more information about a command.
```

## Performing the OAuth2 Client Credentials Flow

### Create an OAuth2 Client

```shell
$ docker run --rm -it \
  --network hydraguide \
  oryd/hydra:v1.8.5 \
  clients create \
    --endpoint http://ory-hydra-example--hydra:4445 \
    --id some-consumer \
    --secret some-secret \
    --grant-types client_credentials \
    --response-types token,code
```

Now the infrastructure is all set up, and it's time to perform the OAuth2
Client Credentials Flow. In this case the CLI will be used to create an OAuth2 Client that is able to perform this flow. 

The flags used here in the command 
`--grant-types client_credentials`  allow the client to perform the OAuth
2.0 Client Credentials grant.

### Issue an OAuth2 Access Token

```shell
$ docker run --rm -it \
  --network hydraguide \
  oryd/hydra:v1.8.5 \
  token client \
    --client-id some-consumer \
    --client-secret some-secret \
    --endpoint http://ory-hydra-example--hydra:4444

ZcE0YWqnxemENLyJrjjlAHlFkdwaHB6TzkSi0c289HI.GQmXJsAYcw5de97S6mqOL0yB2UyFEf4DiXEM05vdfdY
```

The ORY Hydra CLI offers a method (`hydra token client`) that performs the
OAuth2 Client Credentials flow. The newly created client can be used to perform
this flow!

The result will be an OAuth2 access token that will be used to validate in the next
step.

### Validate the OAuth2 Access Token

```shell
$ docker run --rm -it \
  --network hydraguide \
  oryd/hydra:v1.4.2 \
  token introspect \
    --client-id some-consumer \
    --client-secret some-secret \
    --endpoint http://ory-hydra-example--hydra:4445 \
    >INSERT-TOKEN-HERE<

{
        "active": true,
        "client_id": "some-consumer",
        "exp": 1528901511,
        "iat": 1528897911,
        "iss": "http://127.0.0.1:9000/",
        "sub": "facebook-photo-backup",
        "token_type": "access_token"
}
```

Using `hydra token introspect` it is possible to validate an access token, and
receive it's payload. ORY Hydra uses opaque tokens to greatly reduce attack
vectors. You can set arbitrary data in the token. For more
information on this head over to the
[developer guide](https://www.ory.sh/docs/guides/master/hydra/).

You can validate access tokens using the OAuth2 Introspection API, standardized
as [IETF OAuth2 Token Introspection](https://tools.ietf.org/html/rfc7662).

Please make sure to replace `>INSERT-TOKEN-HERE<` with the token you just
received.

## The User Login & Consent Flow

ORY Hydra is not an
[Identity Management](https://en.wikipedia.org/wiki/Identity_management)
solution. Instead it uses an existing Identity Management systems to reduce
adoption complexity. OAuth2 providers such as Keycloak, OpenAM, or
IdentityServer are usually full-stack enterprise identity and access management
solutions. They come with complex deployment dependencies, technologies not
particularly suited for cloud native environments, and subtle, but annoying
limitations at scale. ORY Hydra solves OAuth2 and OpenID Connect only, but it
solves it well and extremely scalable.

To authenticate users, ORY Hydra defines the
[user login & consent flow](https://www.ory.sh/docs/hydra/oauth2). You can find
an
[exemplary user login and consent application on our GitHub](https://github.com/ory/hydra-login-consent-node).

`youtube:https://www.youtube.com/embed/txUmfORzu8Y`

### Run the user login & consent app

In order to make this example easier to follow, we will use the already available
[user login and consent](https://github.com/ory/hydra-login-consent-node)
example app. It emulates a one user Identity Management application that integrates with ORY Hydra's User Login & Consent Flow.

```shell
$ docker run -d \
  --name ory-hydra-example--consent \
  -p 9020:3000 \
  --network hydraguide \
  -e HYDRA_ADMIN_URL=http://ory-hydra-example--hydra:4445 \
  -e NODE_TLS_REJECT_UNAUTHORIZED=0 \
  oryd/hydra-login-consent-node:v1.4.2
```

## OAuth2 with OpenID Connect (OIDC) Authorize Flow

### Create OAuth2 Consumer App

Awesome, the infrastructure is now set up! To perform the OAuth2 and OpenID
Connect flow, an OAuth2 Client (consumer app) is required.

The client must be able to request the `authorize_code` grant, scope `openid`
and `offline`, and response types `token`, `code`, and `id_token`.

```shell
$ docker run --rm -it \
  --network hydraguide \
  oryd/hydra:v1.8.5 \
  clients create \
    --endpoint http://ory-hydra-example--hydra:4445 \
    --id another-consumer \
    --secret consumer-secret \
    -g authorization_code,refresh_token \
    -r token,code,id_token \
    --scope openid,offline \
    --callbacks http://127.0.0.1:9010/callback

Client ID: another-consumer
Client Secret: consumer-secret
```

### Perform OAuth2 Authorize Code Flow

To initialize an OAuth2 authorize code flow, use the `hydra token user` command.
It will generate the authorization url which the user must open in the browser.
Requesting the authorization is the first step of the OAuth2 authorize code
flow.

Requesting OAuth2 Access and Refresh tokens is usually done using a library for
your programming language. Do not write this on your own. Here are some
libraries for different languages: [Golang](https://github.com/golang/oauth2),
[NodeJS](https://github.com/lelylan/simple-oauth2),
[PHP](https://github.com/thephpleague/oauth2-client).

```shell
$ docker run --rm -it \
  --network hydraguide \
  -p 9010:9010 \
  oryd/hydra:v1.4.2 \
  token user \
    --port 9010 \
    --auth-url http://127.0.0.1:9000/oauth2/auth \
    --token-url http://ory-hydra-example--hydra:4444/oauth2/token \
    --client-id another-consumer \
    --client-secret consumer-secret \
    --scope openid,offline \
    --redirect http://127.0.0.1:9010/callback

Setting up home route on http://127.0.0.1:9010/
Setting up callback listener on http://127.0.0.1:4445/callback
Press ctrl + c on Linux / Windows or cmd + c on OSX to end the process.
If your browser does not open automatically, navigate to:

        http://127.0.0.1:9010/
```

### User Login and User Consent

Open `http://127.0.0.1:9010/` in your browser and you will see a simple screen
asking you to authorize the application. If you remember the CircleCI example
from the beginning of the article, this would be the "Log In with GitHub"
button.

![Consent App showing the login screen](../../images/articles/oauth2/consent-1.png)

After clicking "Authorize application" you will be asked to log in. The screen
you are seeing is provided by the exemplary User Login & Consent app
("ory-hydra-example--consent"). The contents of these screens are under your
control and you can use any technology you like to implement them. As already
noted, the exemplary application has just one user. In a real-world scenario,
you could probably sign up for a new account or use a social login provider
(e.g. Google, Facebook) to sign in.

![Consent App showing the login screen](../../images/articles/oauth2/consent-2.png)

The consent screen is the second important screen shown by the User Login &
Consent app. It asks the end user for permission to authorize. If a user has
privacy concerns, he/she could not grant access to personal details. Since the
example only requests very basic permissions, so that all can be granted without concern.

![Consent App asking the user to grant the requested scopes to the application](../../images/articles/oauth2/consent-3.png)

Once logged in and authorized, ORY Hydra will issue an access, a refresh if
scope `offline` was granted, and an ID token if scope `openid` was granted.

## Continue Learning about ORY Hydra OAuth2 and OpenID Connect Server
That's it,  this article shows how to have a running OAuth2 server with an exemplary identity provider,
and perform an OAuth2 request. Using the token from the last request and
passing it to `hydra token introspect` as explained in earlier OAuth2 Client
Credentials flow provides further details about the token properties.

ORY Hydra is an Apache 2.0 licensed Go server solving OAuth2, OpenID Connect and
API security in general. It secures millions of requests per day and has a
vibrant and welcoming online community.

Check out [ORY Hydra at Github](https://github.com/ory/hydra) and the other Ory
[API Security](https://www.ory.sh/) products.
