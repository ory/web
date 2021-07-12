---
path: '/oauth2-for-mobile-app-spa-browser/'
banner: '/images/blog-banner-hydra.png'
title: >
  OAuth2 with PKCE for Mobile Apps and Single Page Apps

seo:
  description: >
    Implement OAuth2 and OpenID Connect on mobile apps and single page apps
    (SPA).

  title: >
    OAuth2 for Mobile Apps and Single Page Apps Best Practices (2020)

publishedAt: '2019-06-01'
author: aeneasr

teaser: >
  Read this guide to learn how to implement authentication and authorization for
  mobile, browser, and native apps with better user experience and buffed
  security.

overline: Mobile & Native App Security
---

In this article we will cover best practices for OAuth2- and OpenID Connect
flows for mobile apps and single page apps (SPA).

Before reading ahead, keep in mind that OAuth2 and OpenID Connect are delegation
protocols. OpenID Connect is useful when you want to become a "Sign in with ..."
provider like Google or Twitter. If you plan on allowing third party developers
access your user's data with their consent (e.g "Access to your private
repositories"), OAuth2 is the correct choice. Using these two protocols in
first-party scenario, for example OpenID Connect to attempt and solve "SSO", can
become quite complex
[due to several conceptual limitations](https://www.ory.sh/hydra/docs/concepts/before-oauth2).

If you are looking to solve authentication (login), sign up, profile management,
and more check out the
[Add Authentication to your React Native App article](https://www.ory.sh/react-native-authentication-login-signup).

## Choosing the Correct OAuth2 Flow

Read the
[introduction to OAuth2 and OpenID Connect](https://www.ory.sh/hydra/docs/concepts/oauth2)
if you need a refresher.

You can choose from several OAuth2 flows (e.g. Resource Owner Password
Credentials, Implicit, Authorize Code). Let's exclude the ones which should no
longer be used.

Second, you will be introduced to the OAuth2 Authorize Code flow with Proof Key
for Code Exchange (PKCE) for public clients. Third, you will be supplied with
links to open source software capable of solving the introduced flows and
features.

### Avoid the OAuth2 Resource Owner Password Credentials Flow

This flow was built into OAuth2 to help old systems migrate to OAuth2
authorization without changing the user experience flow. Because the user enters
his/her credentials directly into the client's UI, it would be possible for
third parties to phish the credentials. You should never allow third party
developers to use this flow. Additionally, OAuth 2.1
[is going to remove this flow](https://oauth.net/2.1/).

Second, the OAuth2 Resource Owner Password Credentials Flow is not compatible
with OpenID Connect. If you rely on OpenID Connect ID Tokens for your login
sequence, you can not use this flow.

Third, if you use OAuth2 as an SSO mechanism (e.g. having multiple mobile apps
which all use the same OAuth2 server to authorize), the OAuth2 Resource Owner
Password Credentials Flow opens up potential attack vectors such as phishing:
Let's assume you have published 15 mobile apps (e.g. "game cloud - world's best
freemium games") which all use the OAuth2 Resource Owner Password Credentials
Flow to access the user's profile and game data at "game cloud". Your users are
used to entering their "game cloud" credentials in the game's UI. An attacker
could write a 16th app, with a similar publisher name (e.g. "game cloud
enterprise"), and trick your users into entering their "game cloud" credentials
into the malicious app.

Similarly, an attacker could publish a counterfeit app with a similar name and
the same UI, which phishes for user's "game cloud" credentials. The user is not
able to distinguish the login screen in the counterfeit from legitimate apps,
because there is no domain name, no TLS certificate, and more broadly no trusted
environment (browser). If the attackers can push a counterfeit app to the app
store, users - used to enter their credentials in the app - will not become
suspicious.

Let’s take a look at an example. The two screenshots below are from two
different apps. The one on the left is the original app, the one on the right
the counterfeit one. Can you spot the difference? Me neither, it’s a perfect
replicate. There are, of course, some limitations to this attack. For one, the
counterfeit app has to make it on the user’s phone. Unfortunately, counterfeit
apps are so common, there’s even an article on
[Lifehacker (“How to Spot Fake Apps in Apple's App Store and Google Play”)](https://lifehacker.com/how-to-spot-fake-apps-in-apples-app-store-and-google-pl-1821428717)
on this topic.

<table width="100%">
    <tr>
        <td width="50%">
            <img loading="lazy" alt="Legitimate Application without Browser Authorization" src="../../images/articles/mobile-oauth2/login-app.png"/>
        </td>
        <td width="50%">
            <img loading="lazy" alt="Legitimate Application without Browser Authorization" src="../../images/articles/mobile-oauth2/login-app.png"/>
        </td>
    </tr>
    <tr align="center">
        <td colspan="2">
        <p>
            Without a browser address bar, there is no way to distinguish between a legitimate and an illegimitate app.
        </p>
        </td>
    </tr>
</table>

If a browser is involved, the user will see the URL and be able to validate the
TLS certificate if in doubt. Let’s take a look at the two login screens again,
but this time in a browser. You should be able to spot which one is the phishing
site and which one isn’t.

<table width="100%">
    <tr>
        <td width="50%">
            <img loading="lazy" alt="Legitimate Application with Browser Authorization" src="../../images/articles/mobile-oauth2/login-app-legitimate.png"/>
        </td>
        <td width="50%">
            <img loading="lazy" alt="Illegitimate Application with Browser Authorization" src="../../images/articles/mobile-oauth2/login-app-counterfeit.png"/>
        </td>
    </tr>
    <tr align="center">
        <td colspan="2">
            <p>
                Without the browser address bar, you can easily spot the illegitimate app (right).
            </p>
        </td>
    </tr>
</table>

It becomes apparent that you should train the user’s eye and opt for
authentication & authorization through a trusted environment: the browser.

### The OAuth2 Implicit Flow

The OAuth2 implicit Flow **was** the go-to flow for mobile apps, single page
apps, and native apps. The IETF summarizes this flow as follows:

> The implicit grant is a simplified authorization code flow optimized for
> clients implemented in a browser using a scripting language such as
> JavaScript. In the implicit flow, instead of issuing the client an
> authorization code, the client is issued an access token directly (as the
> result of the resource owner authorization). The grant type is implicit, as no
> intermediate credentials (such as an authorization code) are issued (and later
> used to obtain an access token). -
> [Source](https://tools.ietf.org/html/rfc6749%23section-1.3.1)

The most prominent downside to this flow is that no refresh tokens may be
issued. Every time an access token expires, the user must redo the whole
authorize dance (open browser -> authenticate -> authorize) - not a great user
experience.

Another issue is that Proof Key for Code Exchange (PKCE) can not protect the
OAuth2 Implicit Flow. The IETF explicitly states that this flow is not
recommended for use with native & mobile applications:

> The OAuth2 implicit grant authorization flow generally works with the practice
> of performing the authorization request in the browser and receiving the
> authorization response via URI-based inter-app communication. However, as the
> implicit flow cannot be protected by PKCE, the use of the Implicit Flow with
> native apps is NOT RECOMMENDED.

> Access tokens granted via the implicit flow also cannot be refreshed without
> user interaction, making the authorization code grant flow -- which can issue
> refresh tokens -- the more practical option for native app authorizations that
> require refreshing of access tokens.

In the context of browser apps (“single page apps”), the OAuth2 Implicit Flow
was designed when most browsers did not allow developers to modify the history
via, for example, \`pushState\`. Back then, using hashtags was the only way to
transmit data via URLs to JavaScript applications running in the browser. Today,
as browser APIs improved, it’s possible to use the OAuth2 Authorize Code Flow
for browser apps instead, and benefit from, e.g., refresh tokens.

Implicit flows are scheduled to be removed in the
[OAuth 2.1 specification](https://oauth.net/2.1/).

### Embedded User Agents

[The IETF encourages](https://tools.ietf.org/html/rfc8252%23section-4)
developers to avoid embedded user agents, sometimes referred to as web-views,
and use external user-agents, typically the browser. Here is why:

> Embedded user-agents are unsafe for use by third parties to the authorization
> server by definition, as the app that hosts the embedded user-agent can access
> the user's full authentication credential, not just the OAuth authorization
> grant that was intended for the app.

> In typical web-view-based implementations of embedded user-agents, the host
> application can record every keystroke entered in the login form to capture
> usernames and passwords, automatically submit forms to bypass user consent,
> and copy session cookies and use them to perform authenticated actions as the
> user. - [Source](https://tools.ietf.org/html/rfc8252%23section-8.12)

## Use OAuth2 with PKCE instead

Now you know what to avoid. Let’s talk about what to do instead!

### The OAuth2 Authorize Code Flow With Public Clients

The OAuth2 Authorize Code Flow provides the means for clients, which can not
keep passwords secret, to request authorization on a user’s behalf. This is
possible with a public client. The only differences between confidential
(regular) and public clients are that no secret was issued to that client, and
that the client is explicitly intended for use with mobile, browser, and native
apps.

Public clients are capable of performing all flows except the **Resource Owner
Password Credentials** flow and the **Client Credentials** flow. They are also
allowed to request OpenID Connect ID Tokens, and refresh expired access or ID
tokens. Other than the missing client secret, the flow is executed in the same
way as the regular OAuth2 Authorize Code flow. It is recommended to send the
client ID in the POST body or the URL query, as HTTP Basic Authorization does
not work well (if at all) with an empty password field

### Proof Key for Code Exchange (PKCE)

The OAuth2 Implicit and Authorize Code Flows are vulnerable in the context of
mobile and native apps, specifically when custom redirect URI schemes are used
that are not protected by Transport Layer Security (TLS).

If an attacker manages to register a malicious application on the client device
and registers a custom URI scheme that is also used by the legitimate
application, it is possible for the attacker to intercept the authorize code and
obtain its access token.

![Stylized PKCE Flow](../../images/articles/mobile-oauth2/pkce.png)

To mitigate this attack, the legitimate app generates a so-called code challenge
and code verifier. The code verifier is derived from the code challenge. There
are multiple ways of generating the code challenge, the most secure one is to
use SHA-256: `code_challenge = BASE64URL-ENCODE(SHA256(ASCII(code_verifier)))`

The code challenge is submitted to the OAuth2 Authorization Server during the
Authorization Request, when the browser hits the \`/oauth2/auth\` endpoint. The
code verifier, only known to the legitimate application, is transmitted when the
authorization code is exchanged for access and refresh tokens. The OAuth2
Authorization Server does not issue access and refresh tokens when an invalid
code verifier is submitted. The malicious app is therefore not able to use the
authorization code and thus the vulnerability is mitigated.

## Open Source Technology

OAuth2, OpenID Connect, PKCE, JWTs, … - these standards as useful as they are
complicated. It is well known that developers should never roll their own
crypto, unless of course they are a cryptographer. The same should apply to
these standards. I strongly encourage everyone in the community to rely on
adopted, tested, and reliable open source technology. These topics have been
covered in various programming languages and are easy to integrate.

Ok, so let’s take a look at what technology you can use to provide and consume
OAuth2, OpenID Connect, and Proof Key for Code Exchange (PKCE). Some of the
technology presented is written and maintained by ORY. Everything is licensed
with the Apache 2.0 License.

### OAuth2 Server and OpenID Connect Provider ORY Hydra

[ORY Hydra](https://www.ory.sh/hydra) is an OAuth2 and OpenID Connect server
that integrates with existing identity management solutions. It supports all
features presented in this article. To get started with ORY Hydra check out the
[5 Minute Quickstart](https://www.ory.sh/hydra/docs/5min-tutorial)!

### OAuth2 Client: AppAuth

[AppAuth](https://appauth.io/) is a Google-authored client library for
[Android](https://github.com/openid/AppAuth-Android) and
[iOS](https://github.com/openid/AppAuth-iOS) that supports public clients and
PKCE.

## Open Source and other Resources

Besides the obvious ones like Stackoverflow or Reddit, you can ask questions
related to these topics at
[ORY Hydra GitHub Discussions](https://github.com/ory/hydra/discussions) or in
the [Ory Community Slack](https://www.ory.sh/chat).

Thank you for reading! I hope you learned something useful! If this was of any
help, you can follow me on [GitHub](https://github.com/aeneasr) and
[Twitter](https://twitter.com/_aeneasr) and see what I’m up to next. If you wish
to support ORY’s mission of making secure developer tools affordable and
accessible, consider supporting us on [Patreon](https://www.patreon.com/_ory).
