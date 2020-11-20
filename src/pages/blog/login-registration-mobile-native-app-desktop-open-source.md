---
published: true
path: '/modern-application-architecture/'
title: 'Ory and Modern Application Architecture'
metaTitle: 'Modern application architecture at ORY'
publishedAt: '2020-09-03'
author: 'Lee Atchison'

subtitle: >
  From monoliths to service-based architectures 

overline: >
  Modern application architecture

teaser: >
  A short introduction into modern application architecture

metaDescription: >
  How ORY builds modern application architecture

category: Article
---

## Implementing User Login and Registration in React Native

This guide assumes that you have worked with React and React Native before as we
will not cover React fundamentals and focus mostly on implementing login,
registration, and so on.

## Create React Native Template

We will use the Expo CLI as it is the easiest to get started with. Set up your
project as follows:

```shell script
npm install -g expo-cli
expo init AwesomeProject
```

Use the `blank (TypeScript)` template.

#### Add React Native Navigation

To set up screen navigation, we use the standard React Native navigation
component. To install it, run:

```shell script
npm add @react-navigation/native @react-navigation/stack
expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

#### Add React Native / Expo Encrypted Credentials Storage

This application uses
[`expo-secure-store`](https://docs.expo.io/versions/latest/sdk/securestore/) to
securely store the user's session key in the encrypted device store (Android
Keystore / Expo Secure Store). To install it we'll run:

```shell script
expo install expo-secure-store @react-native-community/async-storage
# For iOS you also need to run:
npx pod-install
```

We're also adding `@react-native-community/async-storage` as `expo-secure-store`
does not work on the Web.

#### Add ORY Kratos SDKs

We also need to install the ORY Kratos SDK as well as the ORY Themes package and
some fonts to make the app beautiful:

```shell script
# The package "url" is needed as it is not natively available in React Native.
$ npm install @oryd/kratos-client@0.0.0-next.38fcb1e2e22c url
$ npm install @oryd/themes styled-components
$ expo install expo font @expo-google-fonts/rubik @expo-google-fonts/roboto
```

#### Set up Environment Variable Support

Next we want to set up support for environment variables which we will be using
in the next section. You can either
[follow the Expo guide on Environment Variables](https://docs.expo.io/guides/environment-variables/#using-babel-to-replace-variables)
or do the following:

```shell script
expo install expo-constants
```

We must also rename `app.json` to `app.config.js` and add a constant to the
manifest which will be the ORY Kratos Public API Endpoint:

<CodeFromRemote
  lang="js"
  link="https://github.com/ory/kratos-selfservice-ui-react-native/blob/master/src/helpers/sdk.tsx"
  src="https://raw.githubusercontent.com/ory/kratos-selfservice-ui-react-native/master/src/helpers/sdk.tsx"
/>

## Start the React Native Application and ORY Kratos

Now it's time to run the [ORY Kratos Quickstart](../quickstart.mdx) on your
local machine and ensure that URL
[127.0.0.1:4433/health/alive](http://127.0.0.1:4433/health/alive) shows
`{"status":"ok"}`.

To access ORY Krato's Public API in React Native, we will be using
[ngrok](https://ngrok.com/). Please
[download and install](https://ngrok.com/download) ngrok now. On macOS you can
use `brew cask install ngrok`.

Next we expose the ORY Kratos Public API using ngrok. The resulting URL is used
as an environment variable for our app:

```shell script
$ ngrok http 4433
[...]
Forwarding                    [the-ngrok-url]
[...]

$ cd AwesomeProject
$ KRATOS_URL=[the-ngrok-url] npm start
```

Assuming the URL is `https://d0b524f1fe66.ngrok.io`, the commands would look as
follows:

```shell script
$ ngrok http 4433
[...]
Forwarding                    https://d0b524f1fe66.ngrok.io
[...]

$ cd AwesomeProject
$ KRATOS_URL="https://d0b524f1fe66.ngrok.io" npm start
```

## Implement Mobile Application Screens

Our application has several screens:

- Can only be seen when signed in:
  - Home
    ([src/components/Home.tsx](https://github.com/ory/kratos-selfservice-ui-react-native/blob/master/src/components/Home.tsx))
    is the screen a user sees after login / registration.
  - User Settings
    ([src/components/Settings.tsx](https://github.com/ory/kratos-selfservice-ui-react-native/blob/master/src/components/Settings.tsx))
    allows the user to update their profile, password, change the email address,
    and perform other account related actions.
- Can only be seen when not signed in:
  - User Login
    ([src/components/Login.tsx](https://github.com/ory/kratos-selfservice-ui-react-native/blob/master/src/components/Login.tsx))
  - User Registration
    ([src/components/Registration.tsx](https://github.com/ory/kratos-selfservice-ui-react-native/blob/master/src/components/Registration.tsx))
  - ~Password Recovery / Account Recovery~ (work in progress)
  - Email / Phone Verification~ (work in progress)

The `App.tsx` entrypoint

<CodeFromRemote
  lang="js"
  link="https://github.com/ory/kratos-selfservice-ui-react-native/blob/master/App.tsx"
  src="https://raw.githubusercontent.com/ory/kratos-selfservice-ui-react-native/master/App.tsx"
/>

simply loads the Navigation component:

<CodeFromRemote
  lang="js"
  link="https://github.com/ory/kratos-selfservice-ui-react-native/blob/master/src/components/Navigation.tsx"
  src="https://raw.githubusercontent.com/ory/kratos-selfservice-ui-react-native/master/src/components/Navigation.tsx"
/>

As you can see, the Navigation component checks if an authenticated session
exists and sets the available screens accordingly.

To manage the authentication lifecycle, we have a few small and tidy helper
functions:

<CodeFromRemote
  lang="js"
  link="https://github.com/ory/kratos-selfservice-ui-react-native/blob/master/src/helpers/auth.tsx"
  src="https://raw.githubusercontent.com/ory/kratos-selfservice-ui-react-native/master/src/helpers/auth.tsx"
/>

## Mobile Login and Registration with Username or Email and Password

There is a common misconception that you need OAuth2 or OpenID Connect to
perform username / email and password login for your own users. Many online
resources get these things wrong:

Myth: The mobile app is "untrusted" because it can be modified by everyone and
is therefore a third-party in OAuth2 terms; Truth: The browser is as untrusted
as a mobile app. Both use HTTP and TCP to perform tasks against an API. One is
not more secure than the other.

Myth: OAuth2 is the only way to get secure "tokens"; Truth: OAuth2 is the only
secure way to get access to a third party's (a different company) API. OAuth2 is
not required to exchange e.g. a username and a password for a session token and
most popular mobile apps use this much simpler approach.

However, in some cases an OAuth2 dance for mobile apps is unavoidable. This is
especially true for mobile applications which use a third-party login provider
such as Google, Facebook (particularly difficult), Twitter, and other well-known
providers.

### HTTP Cookies do not work in React Native

React Native has trouble working with cookies. There are libraries such as
[react-native-cookies](https://github.com/react-native-community/cookies)
available but all approaches have limitations:

- React Native has several known issues and limitations as documented in
  [react-native#23185](https://github.com/facebook/react-native/issues/23185);
- `react-native-cookies` does not work with Expo, on macOS, Windows, Web.

Another approach approach would be to just load the login page in a WebView and
wait for the user to sign up / in and then extract the cookie as shown in this
snippet
[from the react-native-webview GitHub](https://github.com/react-native-community/react-native-webview/issues/629#issuecomment-516867912):

```jsx
const getCookiesJS = 'ReactNativeWebView.postMessage(document.cookie)'
return (
  <WebView
    injectedJavaScript={getCookiesJS}
    onMessage={(event) => console.log(event.nativeEvent.data)}
    source={{ uri: 'https://www.example.com/auth/login' }}
    javaScriptEnabled={true}
  />
)
```

Because ORY Kratos' cookies are `secure` and `httpOnly`, `document.cookie` does
not have access to the session cookie rendering this approach impossible.

## Mobile Login and Registration with Social Sign In / OAuth2 / OpenID Connect

:::note

Social Sign in is not yet implemented for API-based flows (see
[kratos#707](https://github.com/ory/kratos/issues/707))!

:::

When implementing social sign in / OAuth2 / OpenID Connect on mobile application
there are two possibilities:

1. Easy: You let ORY Kratos handle the third-party login (e.g. Sign in with
   Google).
2. Hard, better UX: Your mobile app uses the third-party's SDKs (e.g. Google
   Android SDK, LinkedIn iOS Mobile SDK, ...) to perform login and uses the
   result to exchange it for a ORY Kratos login session.

In some cases you may have to use a combination of the two. This is especially
true when using "Facebook Login" because
[Facebook's Platform Policy](https://developers.facebook.com/policy/) requires
you to use their SDK when implementing Facebook Login on mobile apps!

https://developers.facebook.com/docs/facebook-login/access-tokens/session-info-access-token/

You may still use the API-based flow for Username / Email and Password login
when having this method enabled.


