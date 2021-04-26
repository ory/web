(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{1035:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/oauth2-consumer-47a7db778f7f12ab7492fd69e6b2f091.png"},231:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return h})),n.d(t,"default",(function(){return u}));var i=n(3),o=n(8),a=(n(0),n(570)),r=n(577),s=n(574),l=n(575),c={id:"login",title:"Login Flow"},d={unversionedId:"concepts/login",id:"version-v1.9/concepts/login",isDocsHomePage:!1,title:"Login Flow",description:"OAuth2 and OpenID Connect require an authenticated End-User session for all",source:"@site/versioned_docs/version-v1.9/concepts/login.mdx",sourceDirName:"concepts",slug:"/concepts/login",permalink:"/hydra/docs/v1.9/concepts/login",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/concepts/login.mdx",version:"v1.9",lastUpdatedBy:"aeneasr",lastUpdatedAt:1611740481,formattedLastUpdatedAt:"1/27/2021",frontMatter:{id:"login",title:"Login Flow"},sidebar:"version-v1.9/docs",previous:{title:"OpenID Connect (OIDC)",permalink:"/hydra/docs/v1.9/concepts/openid-connect-oidc"},next:{title:"Consent Flow",permalink:"/hydra/docs/v1.9/concepts/consent"}},h=[{value:"Initiating the OAuth 2.0 / OpenID Connect Flow",id:"initiating-the-oauth-20--openid-connect-flow",children:[]},{value:"Redirection to the Login Endpoint",id:"redirection-to-the-login-endpoint",children:[{value:"Login Sessions, <code>prompt</code>, <code>max_age</code>, <code>id_token_hint</code>",id:"login-sessions-prompt-max_age-id_token_hint",children:[]}]},{value:"The Login Endpoint",id:"the-login-endpoint",children:[{value:"Accepting the Login Flow",id:"accepting-the-login-flow",children:[]},{value:"Rejecting the Login Flow",id:"rejecting-the-login-flow",children:[]}]},{value:"Redirection to the Consent Endpoint",id:"redirection-to-the-consent-endpoint",children:[]},{value:"Revoking ORY Hydra Login Sessions",id:"revoking-ory-hydra-login-sessions",children:[]}],p={toc:h};function u(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"OAuth2 and OpenID Connect require an authenticated End-User session for all\nOAuth2 / OpenID Connect flows except the ",Object(a.b)("inlineCode",{parentName:"p"},"client_credentials")," flow which does\nnot involve End-Users."),Object(a.b)("p",null,'ORY Hydra does not contain a database with End-Users but instead uses HTTP\nRedirection to "delegate" the login flow to another app - we call this the Login\n& Consent App.'),Object(a.b)("p",null,"The following short video shows the flow from an End-User's perspective - it\nincludes both login and consent."),Object(a.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/txUmfORzu8Y",frameborder:"0",allowfullscreen:!0}),Object(a.b)("p",null,"The following sequence diagram describes the different API calls and HTTP\nRedirects when performing the OAuth2 flow:"),Object(a.b)(r.a,{chart:"sequenceDiagram\n    OAuth2 Client->>ORY Hydra: Initiates OAuth2 Authorize Code or Implicit Flow\n    ORY Hydra--\x3e>ORY Hydra: No end user session available (not authenticated)\n    ORY Hydra->>Login Endpoint: Redirects end user with login challenge\n    Login Endpoint--\x3eORY Hydra: Fetches login info\n    Login Endpoint--\x3e>Login Endpoint: Authenticates user with credentials\n    Login Endpoint--\x3eORY Hydra: Transmits login info and receives redirect url with login verifier\n    Login Endpoint->>ORY Hydra: Redirects end user to redirect url with login verifier\n    ORY Hydra--\x3e>ORY Hydra: First time that client asks user for permissions\n    ORY Hydra->>Consent Endpoint: Redirects end user with consent challenge\n    Consent Endpoint--\x3eORY Hydra: Fetches consent info (which user, what app, what scopes)\n    Consent Endpoint--\x3e>Consent Endpoint: Asks for end user's permission to grant application access\n    Consent Endpoint--\x3eORY Hydra: Transmits consent result and receives redirect url with consent verifier\n    Consent Endpoint->>ORY Hydra: Redirects to redirect url with consent verifier\n    ORY Hydra--\x3e>ORY Hydra: Verifies grant\n    ORY Hydra->>OAuth2 Client: Transmits authorization code/token",mdxType:"Mermaid"}),Object(a.b)("h2",{id:"initiating-the-oauth-20--openid-connect-flow"},"Initiating the OAuth 2.0 / OpenID Connect Flow"),Object(a.b)("p",null,"The OAuth2 2.0 / OpenID Connect Flow is initiated by pointing the End-User's\nbrowser to the ",Object(a.b)("inlineCode",{parentName:"p"},"/oauth2/auth"),' endpoint. Depending on which flow ("Authorize Code\nFlow", "Implicit Flow", ...) you want to use some of the query parameters (e.g.\n',Object(a.b)("inlineCode",{parentName:"p"},"/oauth2/auth?response_type=code"),", ",Object(a.b)("inlineCode",{parentName:"p"},"/oauth2/auth?response_type=token"),", ...)\nmight change but the overall initiation works always by sending the browser to\nthat URL."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"This guide uses URLs from the ",Object(a.b)("a",{parentName:"p",href:"/hydra/docs/v1.9/5min-tutorial"},"5 Minute Tutorial"),":"),Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},"ORY Hydra Public Endpoint: ",Object(a.b)("a",{parentName:"li",href:"http://127.0.0.1:4444"},"http://127.0.0.1:4444")),Object(a.b)("li",{parentName:"ul"},"ORY Hydra Admin Endpoint: ",Object(a.b)("a",{parentName:"li",href:"http://127.0.0.1:4445"},"http://127.0.0.1:4445"))),Object(a.b)("p",{parentName:"div"},"When translating this guide into your own environment, make sure to use the\ncorrect endpoint for your interactions."))),Object(a.b)(s.a,{defaultValue:"ui",values:[{label:"UI",value:"ui"},{label:"HTML",value:"html"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"ui",mdxType:"TabItem"},Object(a.b)("p",null,Object(a.b)("img",{alt:"OAuth 2.0 Client",src:n(1035).default}))),Object(a.b)(l.a,{value:"html",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<a\n  href="https://<hydra-public>/oauth2/auth?client_id=...&response_type=...&scope=..."\n>\n  Login in with ORY Hydra</a\n>\n'))),Object(a.b)(l.a,{value:"js",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"// ...\nwindow.location.href =\n  'https://public.hydra.url/oauth2/auth?client_id=...&response_type=...&scope=...'\n")))),Object(a.b)("h2",{id:"redirection-to-the-login-endpoint"},"Redirection to the Login Endpoint"),Object(a.b)("p",null,"The next task for ORY Hydra is to know the user of the request. To achieve that,\nORY Hydra checks if a session cookie is set containing information about a\npreviously successful login. Additionally, OpenID Connect parameters\n",Object(a.b)("inlineCode",{parentName:"p"},"id_token_hint"),", ",Object(a.b)("inlineCode",{parentName:"p"},"prompt"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"max_age")," are evaluated and processed. Depending\non their values and the login state, the user might need to re-authenticate or\nthe flow will fail completely."),Object(a.b)("p",null,'To authenticate the user (this happens regardless of whether a session exists\nfor the user or not), ORY Hydra redirects the browser to the "Login Endpoint"\nestablished in your config:'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="hydra serve all -c path/to/hydra/config.yml',title:'"hydra',serve:!0,all:!0,"-c":!0,"path/to/hydra/config.yml":!0},"# Can also be set using the environment variable:\n#   URLS_LOGIN=https://login-app/login\nurls:\n  login: https://login-app/login\n")),Object(a.b)("p",null,"ORY Hydra appends a ",Object(a.b)("inlineCode",{parentName:"p"},"login_challenge")," query parameter to the url. The value is a\nID which should later be used by the Login Endpoint to fetch important\ninformation about the request."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"https://login-app/login?login_challenge=7bb518c4eec2454dbb289f5fdb4c0ee2\n")),Object(a.b)("h3",{id:"login-sessions-prompt-max_age-id_token_hint"},"Login Sessions, ",Object(a.b)("inlineCode",{parentName:"h3"},"prompt"),", ",Object(a.b)("inlineCode",{parentName:"h3"},"max_age"),", ",Object(a.b)("inlineCode",{parentName:"h3"},"id_token_hint")),Object(a.b)("p",null,"ORY Hydra keeps track of user sessions. It does so by issuing a cookie which\ncontains the user ID. On subsequent OAuth2 / OpenID Connect flows, the session\nwill be checked and the Login Endpoint will be instructed to, for example, show\nthe Login HTML Form or skip the Login HTML Form."),Object(a.b)("p",null,"ORY Hydra supports the following OpenID Connect query parameters:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"prompt")," (optional). Space delimited, case sensitive list of ASCII string\nvalues that specifies whether the Authorization Server prompts the End-User\nfor reauthentication and consent.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"prompt=none")," instructs ORY Hydra to not display the login or consent user\ninterface pages. An error is returned if an End-User is not already\nauthenticated or the Client does not have pre-configured consent for the\nrequested Claims or does not fulfill other conditions for processing the\nrequest. The error code will typically be ",Object(a.b)("inlineCode",{parentName:"li"},"login_required"),",\n",Object(a.b)("inlineCode",{parentName:"li"},"interaction_required"),", or another code. This can be used as a method to\ncheck for existing authentication and/or consent."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"prompt=login")," instructs ORY Hydra to force the End-User to log in using the\nLogin HTML Form in the Login Endpoint."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"prompt=consent")," instructs ORY Hydra to force the End-User to re-authorize\n(give consent) the OAuth2 Client using the\n",Object(a.b)("a",{parentName:"li",href:"/hydra/docs/v1.9/concepts/consent"},"Consent HTML Form in the Consent Endpoint"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"prompt=select_account")," is currently not supported in ORY Hydra, see ","[#]","."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"max_age")," (optional) specifies the allowable elapsed time in seconds since the\nlast time the End-User was actively authenticated by ORY Hydra. If the elapsed\ntime is greater than this value, the Login HTML Form must be shown and the\nEnd-User must re-authenticate."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"id_token_hint")," (optional) - ID Token previously issued by ORY Hydra being\npassed as a hint about the End-User's current or past authenticated session\nwith the Client. If the End-User identified by the ID Token is logged in or is\nlogged in by the request, then the Authorization Server returns a positive\nresponse; otherwise, it returns an error, typically ",Object(a.b)("inlineCode",{parentName:"li"},"login_required"),". It does\nnot matter if the ID Token is expired or not.")),Object(a.b)("p",null,"To specify these parameters add them to the OAuth2 Auth Endpoint URL Query:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"https://<hydra-public>/oauth2/auth?prompt=login&max_age=60&id_token_hint=...'\n")),Object(a.b)("h2",{id:"the-login-endpoint"},"The Login Endpoint"),Object(a.b)("p",null,"The Login Endpoint (set by ",Object(a.b)("inlineCode",{parentName:"p"},"urls.login"),") is an application written by you. You\ncan find an exemplary\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/ory/hydra-login-consent-node"},"NodeJS reference implementation on our GitHub"),"."),Object(a.b)("p",null,"The Login Endpoint uses the ",Object(a.b)("inlineCode",{parentName:"p"},"login_challenge")," value in the URL to fetch\ninformation about the login request by making a HTTP GET request to:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"http(s)://<HYDRA_ADMIN_URL>/oauth2/auth/requests/login?login_challenge=<challenge>\n")),Object(a.b)("p",null,'The response (see below in "Login Challenge Response" tab) contains information\nabout the login request. The body contains a ',Object(a.b)("inlineCode",{parentName:"p"},"skip")," value. If the value is\n",Object(a.b)("inlineCode",{parentName:"p"},"false"),", the user interface must be shown. If ",Object(a.b)("inlineCode",{parentName:"p"},"skip")," is true, you should not\nshow the user interface but instead just accept or reject the login request! For\nmore details about the implementation check the\n",Object(a.b)("a",{parentName:"p",href:"/hydra/docs/v1.9/guides/login"},'"Implementing the Login Endpoint" Guide'),"."),Object(a.b)(s.a,{defaultValue:"ui",values:[{label:"UI",value:"ui"},{label:"curl",value:"curl"},{label:"Login Challenge Response",value:"json"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"ui",mdxType:"TabItem"},Object(a.b)("p",null,Object(a.b)("img",{alt:"OAuth 2.0 Login UI Screen",src:n(681).default}))),Object(a.b)(l.a,{value:"curl",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'curl "http://127.0.0.1:4445/oauth2/auth/requests/login?login_challenge=7bb518c4eec2454dbb289f5fdb4c0ee2"\n')),Object(a.b)("p",null,"Check the ",Object(a.b)("a",{parentName:"p",href:"/hydra/docs/v1.9/guides/login"},'"Implementing the Login Endpoint" Guide')," for\nexamples using the ORY Hydra SDK in different languages.")),Object(a.b)(l.a,{value:"json",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "challenge": "7bb518c4eec2454dbb289f5fdb4c0ee2",\n  "requested_scope": ["openid", "offline"],\n  "requested_access_token_audience": null,\n  "skip": false,\n  "subject": "",\n  "oidc_context": {},\n  "client": {\n    "client_id": "auth-code-client",\n    "client_name": "",\n    "redirect_uris": ["http://127.0.0.1:5555/callback"],\n    "grant_types": ["authorization_code", "refresh_token"],\n    "response_types": ["code", "id_token"],\n    "scope": "openid offline",\n    "audience": null,\n    "owner": "",\n    "policy_uri": "",\n    "allowed_cors_origins": null,\n    "tos_uri": "",\n    "client_uri": "",\n    "logo_uri": "",\n    "contacts": null,\n    "client_secret_expires_at": 0,\n    "subject_type": "public",\n    "token_endpoint_auth_method": "client_secret_basic",\n    "userinfo_signed_response_alg": "none",\n    "created_at": "2020-07-08T12:31:47Z",\n    "updated_at": "2020-07-08T12:31:47Z"\n  },\n  "request_url": "http://127.0.0.1:4444/oauth2/auth?audience=&client_id=auth-code-client&max_age=0&nonce=hognfveoohhddoralbeygsjg&prompt=&redirect_uri=http%3A%2F%2F127.0.0.1%3A5555%2Fcallback&response_type=code&scope=openid+offline&state=imnweycejbfpyrmnahgqzcmm",\n  "session_id": "d3c98aa6-67ae-478b-bc30-f7887b58f630"\n}\n')))),Object(a.b)("p",null,"The way you authenticate the End-User is up to you. In most cases, you will show\nan HTML form similar to:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<form action="/login" method="post">\n  <input type="hidden" name="csrf_token" value="...." />\n  \x3c!-- Use CSRF tokens in your HTML forms! --\x3e\n  <input\n    type="email"\n    name="login_email"\n    placeholder="Please enter your email address to log in"\n  />\n  <input type="password" name="login_password" />\n  <input type="checkbox" name="remember" value="Remember me on this device" />\n  <input type="submit" value="Log in" />\n</form>\n')),Object(a.b)("p",null,"Once the End-User authenticated successfully, you either ",Object(a.b)("strong",{parentName:"p"},"accept")," the login\nchallenge, or you ",Object(a.b)("strong",{parentName:"p"},"reject")," (e.g. the user is not allowed to perform OAuth2\nflows) the login challenge."),Object(a.b)("h3",{id:"accepting-the-login-flow"},"Accepting the Login Flow"),Object(a.b)("p",null,"To accept the Login Challenge, make a HTTP PUT request with\n",Object(a.b)("inlineCode",{parentName:"p"},"Content-Type: application/json")," and a JSON payload (see\n",Object(a.b)("a",{parentName:"p",href:"/hydra/docs/v1.9/reference/api#schemaacceptloginrequest"},"Accept Login Request HTTP API Reference"),")"),Object(a.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"The subject must be an immutable user ID, it should never be an email address, a\nusername, or something else that may change over time."))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  // Subject is the user ID of the end-user that authenticated.\n  "subject": "string", // required!\n\n  // All values below are optional!\n\n  // Remember, if set to true, tells ORY Hydra to remember this user by telling the user agent (browser) to store\n  // a cookie with authentication data. If the same user performs another OAuth 2.0 Authorization Request, he/she will not be asked to log in again.\n  "remember": true,\n\n  // RememberFor sets how long the authentication should be remembered for in seconds. If set to 0,\n  // the authorization will be remembered for the duration of the browser session (using a session cookie).\n  "remember_for": 0,\n\n  // ACR sets the Authentication AuthorizationContext Class Reference value for this authentication session. You can use it to express that, for example, a user authenticated using two factor authentication.\n  "acr": "string",\n\n  // Context is an optional object which can hold arbitrary data. The data will be made available when fetching the\n  // consent request under the "context" field. This is useful in scenarios where login and consent endpoints share\n  // data.\n  "context": {\n    // "foo": "bar"\n  },\n\n  // ForceSubjectIdentifier forces the "pairwise" user ID of the end-user that authenticated. The "pairwise"\n  // user ID refers to the (Pairwise Identifier Algorithm)[http://openid.net/specs/openid-connect-core-1_0.html#PairwiseAlg]\n  // of the OpenID Connect specification. It allows you to set an obfuscated subject ("user") identifier that is unique\n  // to the client. Please note that this changes the user ID on endpoint /userinfo and sub claim of the ID Token.\n  // It does not change the sub claim in the OAuth 2.0 Introspection. Per default, ORY Hydra handles this value with its own algorithm.\n  // In case you want to set this yourself you can use this field. Please note that setting this field has no effect if pairwise is not\n  // configured in ORY Hydra or the OAuth 2.0 Client does not expect a pairwise identifier (set via subject_type key in the client\'s configuration).\n  // Please also be aware that ORY Hydra is unable to properly compute this value during authentication. This implies that\n  // you have to compute this value on every authentication process (probably depending on the client ID or some other unique value).\n  // If you fail to compute the proper value, then authentication processes which have id_token_hint set might fail.\n  "force_subject_identifier": "string"\n}\n')),Object(a.b)("p",null,"With ",Object(a.b)("inlineCode",{parentName:"p"},"curl")," this might look like the following request:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ curl --location --request PUT \'http://127.0.0.1:4445/oauth2/auth/requests/login/accept?login_challenge=7bb518c4eec2454dbb289f5fdb4c0ee2\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "subject": "the-user-id-that-just-logged-in",\n    "remember": true,\n    "remember_for": 3600\n}\'\n')),Object(a.b)("p",null,"The server responds with JSON"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'{\n  "redirect_to": "http://127.0.0.1:4445/oauth2/auth..."\n}\n')),Object(a.b)("p",null,"which is the URL your application must redirect the End-User's browser to."),Object(a.b)("p",null,"Check the ",Object(a.b)("a",{parentName:"p",href:"/hydra/docs/v1.9/guides/login"},'"Implementing the Login Endpoint" Guide')," for\nexamples using the ORY Hydra SDK in different languages."),Object(a.b)("h3",{id:"rejecting-the-login-flow"},"Rejecting the Login Flow"),Object(a.b)("p",null,"To reject the Login Challenge, make a HTTP PUT request with\n",Object(a.b)("inlineCode",{parentName:"p"},"Content-Type: application/json")," and a JSON payload (see\n",Object(a.b)("a",{parentName:"p",href:"/hydra/docs/v1.9/reference/api#schemarejectrequest"},"Reject Login Request HTTP API Reference"),")"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  // The error should follow the OAuth2 error format (e.g. `invalid_request`, `login_required`).\n  "error": "user_banned",\n\n  // Description of the error in a human readable format.\n  "error_description": "You are banned!",\n\n  // Hint to help resolve the error.\n  "error_hint": "Contact the site administrator.",\n\n  // Debug contains information to help resolve the problem as a developer. Usually not exposed\n  // to the public but only in the server logs.\n  "error_debug": "The user was marked banned in the database.",\n\n  // Represents the HTTP status code of the error (e.g. 401 or 403)\n  //\n  // Defaults to 400\n  "status_code": 403\n}\n')),Object(a.b)("p",null,"With ",Object(a.b)("inlineCode",{parentName:"p"},"curl")," this might look like the following request:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ curl --location --request PUT \'http://127.0.0.1:4445/oauth2/auth/requests/login/reject?login_challenge=7bb518c4eec2454dbb289f5fdb4c0ee2\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "error": "user_banned",\n  "error_debug": "The user was marked banned in the database.",\n  "error_description": "You are banned!",\n  "error_hint": "Contact the site administrator.",\n  "status_code": 403\n}\'\n')),Object(a.b)("p",null,"The server responds with JSON"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "redirect_to": "http://127.0.0.1:4445/oauth2/auth..."\n}\n')),Object(a.b)("p",null,"which is the URL your application must the End-User's browser to."),Object(a.b)("p",null,"Check the ",Object(a.b)("a",{parentName:"p",href:"/hydra/docs/v1.9/guides/login"},'"Implementing the Login Endpoint" Guide')," for\nexamples using the ORY Hydra SDK in different languages."),Object(a.b)("h2",{id:"redirection-to-the-consent-endpoint"},"Redirection to the Consent Endpoint"),Object(a.b)("p",null,"Please head over to ",Object(a.b)("a",{parentName:"p",href:"/hydra/docs/v1.9/concepts/consent"},"Consent Flow"),"!"),Object(a.b)("h2",{id:"revoking-ory-hydra-login-sessions"},"Revoking ORY Hydra Login Sessions"),Object(a.b)("p",null,"Revoking a login session will remove all of the user's cookies at ORY Hydra and\nwill require the user to re-authenticate when performing the next OAuth 2.0\nAuthorize Code Flow. Be aware that this option will remove all cookies from all\ndevices."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Revoking a login session does not invalidate any Access, Refresh, or ID Tokens!\nIf you log out of GitHub, you will not be logged out of CircleCI/TravisCI."))),Object(a.b)("p",null,"Revoking the login sessions of a user is as easy as sending ",Object(a.b)("inlineCode",{parentName:"p"},"DELETE")," to\n",Object(a.b)("inlineCode",{parentName:"p"},"/oauth2/auth/sessions/login?subject={subject}")," (see\n",Object(a.b)("a",{parentName:"p",href:"/hydra/docs/v1.9/reference/api#opIdrevokeAuthenticationSession"},"full API documentation"),")."),Object(a.b)("p",null,"This endpoint is not compatible with OpenID Connect Front-/Backchannel logout\nand does not revoke any tokens."))}u.isMDXComponent=!0},577:function(e,t,n){"use strict";var i=n(0),o=n.n(i),a=n(582),r=n.n(a),s=n(56),l=n.n(s),c=n(581),d=n.n(c);r.a.initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});t.a=function(e){var t,n=e.chart,a=Object(i.useState)(!1),s=a[0],c=a[1],h=Object(i.useState)(void 0),p=h[0],u=h[1],b=Object(i.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],m=function(){return c(!s)};return Object(i.useEffect)((function(){r.a.render(b,n,(function(e){u(e)}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{onClick:m,className:d()(l.a.graph,l.a.pointer),dangerouslySetInnerHTML:{__html:p}}),o.a.createElement("div",{onClick:m,className:d()(l.a.overlay,l.a.pointer,l.a.graph,(t={},t[l.a.visible]=s,t))},o.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:d()(l.a.backdrop,l.a.graph),dangerouslySetInnerHTML:{__html:p}})))}},584:function(e,t,n){var i={"./locale":576,"./locale.js":576};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}o.keys=function(){return Object.keys(i)},o.resolve=a,e.exports=o,o.id=584},681:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/login-endpoint-d8b7426a7ea23b027a042b62f13fc7d8.png"}}]);