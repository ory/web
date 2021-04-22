---
path: '/keto-zanzibar-evolution/'
banner: '/images/blog-banner-keto.png'
title: >
  The Evolution of Ory Keto: A Consistent, Global Authorization System

seo:
  description: >
    Run your own OAuth2 Server and OpenID Connect Provider (OIDC) using scalable
    and secure open source software in under 10 minutes.
  title: >
    Low latency, consistent, open source access control system

publishedAt: '2020-22-04'
author: vinckr
overline: >
  Next-Generation Ory Keto - An Open Source Google Zanzibar

category: Article

teaser:
  This article discusses the pioneering efforts by Ory to build the open source
  implementation of Google Zanzibar called Ory Keto. It will outline the
  motivation, challenges and concepts of building a global, low latency
  consistent access control system.
---

---

## Introduction

This article discusses the pioneering efforts by Ory to build the open source
implementation of Google Zanzibar called Ory Keto.

In 2017 Google was facing an increasingly complex problem. The
[Zanzibar paper](https://research.google/pubs/pub48190) describes the challenge
as follows:

> "Zanzibar provides a uniform data model and configuration language for
> expressing a wide range of access control policies from hundreds of client
> services at Google, including Calendar, Cloud, Drive, Maps, Photos, and
> YouTube. Its authorization decisions respect causal ordering of user actions
> and thus provide external consistency amid changes to access control lists and
> object contents. Zanzibar scales to trillions of access control lists and
> millions of authorization requests per second to support services used by
> billions of people. It has maintained 95th-percentile latency of less than 10
> milliseconds and availability of greater than 99.999% over 3 years of
> production use."

Authorization is the process of determining wo is allowed to do what in an
application. It is still a hard problem to solve.  
Especially in critical global systems featuring human and machine actors with
different sets of permissions.

The challenge is to process billions of permission checks fast and without
downtime across many different environments.

A solution would have to enable Google to continue to grow at a massive scale,
and work in milliseconds - independent of location around the globe. There are a
number of hard requirements for such a solution, it had to be:

- flexible,
- low latency;
- always available and
- consistent.

A highly qualified team of researchers came up with a new type of access system,
codenamed Zanzibar (it was originally
[called "Spice"](https://mobile.twitter.com/LeaKissner/status/1136631437514272768)
). This substance from the space saga “Dune” makes it possible to safely travel
to other planets and grants superhuman powers. For cloud based services in
particular, a globally spanning low latency access control system is nothing
short of a superpower.

At Ory, we knew we had to unlock this superpower as well!

With the previous approach based on [OPA](https://www.openpolicyagent.org/)
prior to 2019, Ory Keto reached some boundary conditions in both complexity and
scalability.  
Many developers within our own community were also looking for a solution;
prompting us to study alternatives. There is also work in progress on some other
proprietary implementations of the Zanzibar paper, most notably by
[authzed](https://docs.authzed.com/) and
[auth0](https://sandman-86.herokuapp.com/). We believe this shows that there is
great demand for such a solution.

Building upon the knowledge that was available publicly, the Ory team devised a
new generation of Ory Keto, with input and hard work from the open source
community.

## Flexible

Ory Keto is designed with the goal to serve hundreds or thousands of different
clients. Each client may have different access control patterns, so it is
crucial it works for all possible patterns.

Cloud services, for instance small applications with few users and integrations,
or massive multi-national cloud access control systems with millions of users
for a giant enterprise, must create and organize access control policies
independent of internal data structure. Ory Keto needs to be able to understand
and work with all policies.

It does not matter how your internal data structure looks, if you are a small
application with few users and integrations or a massive multi-national cloud
access control system for a giant enterprise; Keto needs to be able to
understand and work with your policies, regardless of how you create and
organize access control policies.

A simple, but powerful data model using JSON Schema forms the basis for this,
combined with effective configuration capabilities.

This allows to define relationships between digital objects and users e.g.
owners, editors, bots etc.  
In Ory Keto Access Control Lists (ACLs) contain information on
`is _subject_ allowed to do _relation_ on _object_`.  
`object`, `relation` and `subject` are all variables that can be defined as
required, together they form a
"[relation tuple](https://www.ory.sh/keto/docs/concepts/relation-tuples)".

## Low latency and high availability

> "Delay is as dangerous as the wrong answer." - _Frank Herbert, Dune_

Access control systems need to be secure and consistent and they must be
flexible enough to meet the myriad of user demands.  
They also serve high numbers of users around the planet; while being almost
unnoticeable and available at all times.

Authorization checks are usually in the path of the most critical parts of our
interaction with digital systems.  
When a service wants to do something that could have dire consequences, delete a
table for instance, authorization checks should assure that the task and
initiator are really allowed to perform that action.

( If the request comes from a person, is it the right person?
[Ory Kratos](https://www.ory.sh/kratos/) solves login,creates credentials, and
provides the ID management system )

In sophisticated cloud systems this can mean that dozens of authorization checks
are made, before even starting a quick search service, for example.  
If each of those checks takes only tenths of a second, round trips and waiting
times can range in the minutes. This is bothersome when searching for something,
but not acceptable when running critical infrastructure.

Worse, if your system goes offline, all access requests would have to be
denied - completely blocking even basic interactions. Ory Keto was designed to
be able to meet these demands spanning across clouds and environments.

## Consistency

One concern is strong consistency. In distributed systems this means you always
get the same response if you send the same requests to different parts of your
system. This is opposed to
["eventual consistency"](https://en.wikipedia.org/wiki/Eventual_consistency),
which simplified means that you will get the same response when there are no
more updates to a data item.

In an ideal world all access control systems would be a strongly consistent
system.  
The problem is, that this is clashing with other requirements, especially low
latency and high availability.  
In a strongly consistent system you can not simply duplicate data in different
physical locations as you would need to achieve low latency worldwide.  
Also your access control policies are probably not in the same physical place as
the data you want to protect. Furthermore, whenever a write to the system fails,
it will be unavailable until it is successful.

The solution are version tokens called “Zookies”.  
They allow us to provide a strongly consistent response from an eventually
consistent system.  
Basically all digital objects (that can be defined as needed) are versioned.
This means that you store a version token (aka zookie) next to every object
version. When you ask Keto if a user is allowed to access a given object, the
request contains the stored token. The system only answers `allow` if access to
this specific version is granted. When you receive a successful response, you
get a new token that you store with the new version of that object.  
This guarantees that an entity can only access objects they currently have
access to and the exact versions of the objects they used to have access to.

For example a common scenario is that a user had access to a previous object
version, but then access was revoked to the object. So the system still answers
`allow` for the old version as defined in your version token. But when newer
object versions are requested, it will always be denied.

Similarly, the system might answer `deny` for older object versions if access
was granted later on, but will always answer `allow` for object versions younger
than the last ACL update.

This means that the system is not only consistent within itself - same requests
lead to the same response in different parts of your system - but also in sync
with data object changes.

One important point is that Keto can be operated locally as well, which means
there are no database sync delays.

Currently Zookies are not implemented in Ory Keto, but they have been considered
in the design.

## Conclusion

So far the Ory Keto effort implements:

- [Access Control Language](https://www.ory.sh/keto/docs/concepts/relation-tuples)
- Data model
- [Example configurations](https://www.ory.sh/keto/docs/quickstart)
- [Read](https://github.com/ory/keto/pull/269) /
  [Write](https://github.com/ory/keto/pull/275) /
  [Check](https://github.com/ory/keto/pull/277) /
  [Expand](https://github.com/ory/keto/pull/285) API
- [Namespaces](https://www.ory.sh/keto/docs/concepts/namespaces)

  In the near future:

- Consistency guarantees using Zookies
- Simulation tests using planet scale key value store
- Interoperability with other Ory products including Hydra and Kratos

Also check our
[Implemented and Planned Features](https://www.ory.sh/keto/docs/implemented-planned-features)
documentation for more information.

If you are interested in seeing what this software package can do, you might
want to check out the
[quickstart example](https://www.ory.sh/keto/docs/quickstart) and the
[full feature example](https://www.ory.sh/keto/docs/examples/olymp-file-sharing).  
Also read more about the
[concepts implemented](https://www.ory.sh/keto/docs/concepts/relation-tuples) in
Ory Keto.

Ory, a multi-cloud SaaS platform, aims to advance the state of zero trust
security by making it easier and safer for developers to implement a number of
boilerplate services such as ID management, credentials, service authorisation,
authentication, rule based reverse proxy and access control in a low latency
access system.  
Ory has years of open source software experience with a global community of
contributors, leading zero trust security products such as
[Ory Hydra](https://www.ory.sh/hydra/), and tens of thousands of satisfied users
worldwide.
