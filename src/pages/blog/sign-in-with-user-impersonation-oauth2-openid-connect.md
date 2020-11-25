---
path: '/sign-in-with-user-impersonation-oauth2-openid-connect/'
publishedAt: '2018-11-27'
author: aeneasr

seo:
  description: >
    Several applications implementing “Sign in with GitHub” have been found to
    be using a mutable identifier (username) to match external users to the
    internal user management system. This allows attackers to completely take
    over accounts whose GitHub username has changed.

title: 'Impersonating users by abusing broken “Sign in with” implementations'

teaser: >
  Applications that implement a "Sign in with ..." flow must not use a mutable
  identifier to match external users to the internal user management system.
  Several web applications implementing "Sign in with GitHub" have been found to
  be vulnerable to this.

overline: Disclosure
---

Several applications implementing “Sign in with GitHub” have been found to be
using a mutable identifier (username) to match external users to the internal
user management system. This allows attackers to completely take over accounts
whose GitHub username has changed.

If you changed your GitHub username (or a username on any other "Sign in with
..." provider), you should create a new account with your old username
immediately. This will prevent attackers from claiming your old username and
gaining access to the application in your name.

Those applications we found vulnerable to this issue have been contacted.

## OAuth2 / OpenID Connect Sign In Flow

Using OAuth 2.0 or OpenID Connect for federated login is common practice, and
many web apps allow you to “Sign in with X”. The vulnerability that was found
applies specifically to applications that implement “Sign in with GitHub” and
that rely on the username to match the GitHub user with the internal user. Here
is what a vulnerable “Sign in with GitHub” looks like:

- User visit a web application that implements “Sign in with GitHub”.
- User hits “Sign in with GitHub”.
- After performing the OAuth2 / OpenID Connect flow, the user lands back at the
  web application, with proof of authorization (in case of OAuth2) /
  authentication (in case of OpenID Connect).
- The web application is using an endpoint, for example `/userinfo`, to access
  user information (emails, user id, username, …).
- The site chooses to use the GitHub username as the basis to match the GitHub
  user to the internal user. Internally, the app might keep information on
  payments, invoices, and other data.

Since the username is mutable on GitHub (you can change your username), and not
updated at the web application’s internal system, accounts that rename their
GitHub username will be locked out of their account at the web app. If someone
sets up a new account using the old GitHub username, it will look like it is the
right user. The attacker will have access to the full account without
limitations.

You can confirm that your/a web app is using a mutable identifier (e.g.
username) to match the external (e.g. GitHub) user to the internal (e.g. MyApp)
one with the following steps:

- Sign up a new user at GitHub with username foo.
- Sign in at MyApp using “Sign in with GitHub.
- Sign out of MyApp.
- Rename the GitHub username to bar.
- Try to sign back into MyApp using “Sign in with GitHub”. If you are locked out
  of your account, MyApp is vulnerable.

The following steps should be taken immediately:

- If you renamed your username (or email) at any web application that provides
  developers with “Sign in with …”, create a new account with your old
  username/email immediately. This will prevent attackers from “claiming” your
  old username and tricking the application that implements “Sign in with …”
  into believing it’s you.
- If your web application implements “Sign in with …”, make sure you are using
  an immutable property (like the user id) to match users with your internal
  user management. If you’re not doing that, change this immediately.

Why disclose this publicly:

- Most vulnerable apps don’t know it yet. By writing this blog post I want to
  give you the chance to claim your old username(s) immediately and mitigate
  this issue without waiting for apps to fix this.
- I am not a pentester and do not have time to scan all the sites that might be
  vulnerable to this. I hope that the community can rise to the challenge and
  let companies know if their "Sign in with ..." flow is broken.
- I have found open source technology implementing “OAuth2 Sign In” in such a
  way that makes it really easy to be vulnerable to this issue, implying this
  issue might be widespread. Where possible, I contacted the open source
  maintainers. But some projects have been abandoned for a while and there is
  little chance of this being fixed. I hope this blog post raises awareness for
  this issue.

If you want to avoid similar mistakes, we - ORY - are developing the
next-generation, open source identity infrastructure. You should check out our
[GitHub](https://github.com/ory).
