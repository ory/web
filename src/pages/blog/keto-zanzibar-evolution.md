---
path: '/keto-zanzibar-evolution/'
banner: '/images/blog-banner-keto.png'
title: >
  The Evolution of Ory Keto: A Consistent, Global Authorization System

seo:
  description: >
    Authorize billions of requests secure, consistent, low latency and no
    downtime using Ory Keto, the open source implementation of Google Zanzibar
    access control.
  title: >
    Low latency, consistent, open source access control system

publishedAt: '2021-04-26'
author: vinckr
overline: >
  Next-Generation Ory Keto - An Open Source Google Zanzibar

category: Article

teaser: >
  This article discusses the pioneering efforts by Ory to build the open source
  implementation of Google Zanzibar called Ory Keto. It will outline the
  motivation, challenges and concepts of building a global, low latency
  consistent access control system.
---

This article discusses the pioneering efforts by Ory to build the open source
implementation of Google Zanzibar authorization system called Ory Keto.

Authorization is the process of determining who is allowed to do what in an
application. Especially in critical global systems featuring human and machine
actors with different sets of permissions it is still a hard problem to solve.
In such a system, billions of permission checks have to be processed fast,
reliably and consistently across many different environments.

The [research paper](https://research.google/pubs/pub48190) describes how Google
solved authorization globally and across all products:

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

## Problem Statement

Google needed a solution that would enabled them to continue to grow at a
massive scale, but still respond within milliseconds - independent of location
around the globe. They had a number of hard requirements for this to work, it
had to be:

- flexible;
- low latency;
- large scale;
- always available and
- consistent.

A highly qualified team of researchers came up with a new type of access system,
later codenamed Zanzibar (originally it was
[called ”Spice”](https://mobile.twitter.com/LeaKissner/status/1136631437514272768)).  
”Spice” from the space saga “Dune” makes it possible to safely travel to other
planets and grants superhuman powers.  
For cloud based services a globally spanning low latency access control system
is nothing short of a superpower.

At Ory, we knew we had to unlock this superpower free and open for everyone!

With the previous approach based on [OPA](https://www.openpolicyagent.org/)
prior to 2019, Ory Keto reached some boundary conditions in both complexity and
scalability.  
Many developers within our own community were also looking for a solution;
prompting us to study alternatives. There is also work in progress on some other
proprietary implementations of the Zanzibar paper, most notably by
[authzed](https://docs.authzed.com/) and
[auth0](https://sandman-86.herokuapp.com/). We believe this shows that there is
great demand for an open source solution that is community vetted and
transparent.

Building upon the knowledge that was available publicly, the Ory team devised a
new generation of Ory Keto, with input and hard work from our awesome open
source community.

Ory uses Keto as part of the Ory Platform, a comprehensive security system
designed to meet the needs of sophisticated application developers seeking to
provide cloud identity and access management in low latency infrastructure at
scale.

## Flexible

> “When strangers meet, great allowances should be made for differences in
> custom and training.”- _Frank Herbert, Dune_

Ory Keto is designed with the goal to serve hundreds or thousands of different
applications and services (it's clients). Each client may have different access
control patterns, so it is crucial it works for all possible patterns.

Small applications with few users, resources and integrations have vastly
different requirements than massive multi-national cloud services with millions
of users. All kinds of services must be able to manage access control policies
at any detail and in compliance with their internal data structure. Ory Keto
needs to be able to understand and work with all policies.

A simple, but powerful data model provides the basis for this, combined with
effective configuration capabilities.

This data model allows to define arbitrary relationships such as `owner`,
`editor`, and `pays for` between digital objects and subjects (like users).

In Ory Keto, Access Control Lists (ACLs) contain information on
`is _subject_ allowed to do _relation_ on _object_`.

`object`, `relation` and `subject` are all variables that can be defined as
required, together they form a
"[relation tuple](https://www.ory.sh/keto/docs/concepts/relation-tuples)".

For the simplest case a relation tuple would be "user X has the relation Y to
object Z". But ACLs can become much more complex for example "set of users X has
the relation Y to object Z", while this set of users is defined as another
relation tuple. So ACLs can contain other ACLs, for example to define that a set
of users that can view a document is made up of the users that have been granted
rights to modify that specific document as well as those who have viewing
permissions for the whole folder of documents.

## Low latency and high availability

> ”Delay is as dangerous as the wrong answer.” - _Frank Herbert, Dune_

Access control systems need to be secure, consistent and flexible enough to meet
the myriad of user demands.  
They also have to serve high numbers of users around the planet, while ideally
being unnoticed and available at all times.

Authorization checks are usually in the path of the most critical parts of our
interaction with digital systems.  
When a service wants to do something that could have dire consequences, delete a
table for instance, authorization checks should assure that the initiator are
really allowed to perform that action.

It is important to not confuse this with authorization (is this person who they
pretend to be?). This question can be answered by
[Ory Kratos](https://www.ory.sh/kratos/), which is a fully fledged modern
identity management system.

In sophisticated cloud systems this can mean that thousands of authorization
checks have to be made to serve a basic search response. If each of those checks
takes only tenths of a second, round trips and waiting times can range in the
minutes. This is bothersome when searching for something, but not acceptable
when running critical infrastructure.

Worse, if the authorization system is offline, all requests have to be denied -
completely blocking even basic interactions. Ory Keto was designed to be able to
meet these demands spanning across clouds and environments.

## Consistency

> ”A place is only a place.”- _Frank Herbert, Dune_

One concern is strong consistency. In distributed systems this means you always
get the same response if you send the same requests to different parts of your
system. This is opposed to
["eventual consistency"](https://en.wikipedia.org/wiki/Eventual_consistency),
which simplified means that you will get the same response once all updates are
propagated.

In an ideal world all access control systems would be a strongly consistent
system.  
The problem is, that this is clashing with other requirements, especially low
latency and high availability.  
Because of the required strict data duplication, a strongly consistent system
can not achieve low latency worldwide. Also your access control policies are
probably not in the same physical place as the data you want to protect.

The solution is to use version snapshot tokens (short "snaptokens"). They allow
us to provide a strongly consistent response from an eventually consistent
system.  
The basic idea is that all digital objects are versioned. Keto only answers
`allow` if access to this specific version is granted. After an ACL update is
issued (grant or revoke permissions), there is a short period until the update
propagates. The snaptokens ensure that the system only ever wrongly answers
`allowed` if the permission on the requested version was previously granted.
This requires the application to store the snaptoken next to every object
version and provide it on every access check request. In essence, Keto
guarantees that an entity can only access objects they currently have access to
and the exact versions of the objects they used to have access to.

For example a common scenario is that a user had access to a previous object
version, but then access was revoked to the object. During the propagation time
the system can still answer `allow` for the old version as defined by the
snaptoken. But when newer object versions are requested, it will always be
denied.

Similarly, the system might answer `deny` for older object versions if access
was granted later on, but will always answer `allow` for object versions younger
than the last ACL update.

This means that the system is not only consistent within itself - same requests
lead to the same response in different parts of your system - but also in sync
with data object changes.

One important point is that Keto can be operated locally as well, which means
there are no database sync delays.

Currently snaptokens are not implemented in Ory Keto, but all the concepts have
been worked out and integrated into the design already. Actual consistency
guarantees will be added soon.

## Conclusion

> ”The spice must flow.” - _Frank Herbert, Dune_

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

- Consistency guarantees using snaptokens
- Globe spanning cluster operation mode
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
