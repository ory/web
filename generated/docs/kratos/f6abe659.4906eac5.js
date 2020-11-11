(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{316:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var s=n(2),r=n(6),a=(n(0),n(333)),i=n(338),o={id:"user-settings",title:"User Settings",sidebar_label:"Overview"},l={unversionedId:"self-service/flows/user-settings",id:"version-v0.4/self-service/flows/user-settings",isDocsHomePage:!1,title:"User Settings",description:"ORY Kratos allows users to update their own settings and profile information",source:"@site/versioned_docs/version-v0.4/self-service/flows/user-settings.mdx",slug:"/self-service/flows/user-settings",permalink:"/kratos/docs/self-service/flows/user-settings",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/self-service/flows/user-settings.mdx",version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594198226,sidebar_label:"Overview",sidebar:"version-v0.4/docs",previous:{title:"Social Sign In with OpenID Connect and OAuth2",permalink:"/kratos/docs/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2"},next:{title:"User Profile Management",permalink:"/kratos/docs/self-service/flows/user-settings/user-profile-management"}},c=[{value:"Self-Service User Settings for Browser Applications",id:"self-service-user-settings-for-browser-applications",children:[{value:"The Settings User Interface",id:"the-settings-user-interface",children:[]},{value:"Code",id:"code",children:[]},{value:"Server-Side Browser Applications",id:"server-side-browser-applications",children:[]},{value:"Client-Side Browser Applications",id:"client-side-browser-applications",children:[]}]},{value:"Self-Service User Settings for API Clients",id:"self-service-user-settings-for-api-clients",children:[]},{value:"Hooks",id:"hooks",children:[]}],d={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(s.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"ORY Kratos allows users to update their own settings and profile information\nusing two principal flows:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Browser-based (easy): This flow works for all applications running on top of a\nbrowser. Websites, single-page apps, Cordova/Ionic, and so on."),Object(a.b)("li",{parentName:"ul"},"API-based (advanced): This flow works for native applications like iOS\n(Swift), Android (Java), Microsoft (.NET), React Native, Electron, and others.")),Object(a.b)("p",null,"The flow described here is implemented by the\n",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"/kratos/docs/self-service/flows/user-settings/user-profile-management"}),"profile"),",\n",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"/kratos/docs/self-service/flows/user-login-user-registration/username-email-password"}),"password"),", and\n",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"/kratos/docs/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2"}),"oidc"),"\nstrategy."),Object(a.b)("h2",{id:"self-service-user-settings-for-browser-applications"},"Self-Service User Settings for Browser Applications"),Object(a.b)("p",null,"ORY Kratos supports browser applications that run on server-side (e.g. Java,\nNodeJS, PHP) as well as client-side (e.g. JQuery, ReactJS, AngularJS, ...)."),Object(a.b)("p",null,"Browser-based user settings management makes use of three core HTTP\ntechnologies:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"HTTP Redirects"),Object(a.b)("li",{parentName:"ul"},"HTTP POST (",Object(a.b)("inlineCode",{parentName:"li"},"application/json"),", ",Object(a.b)("inlineCode",{parentName:"li"},"application/x-www-urlencoded"),") and RESTful GET\nrequests."),Object(a.b)("li",{parentName:"ul"},"HTTP Cookies to prevent CSRF and Session Hijaking attack vectors.")),Object(a.b)("p",null,"The browser flow is the easiest and most secure to set up and integrated with.\nORY Kratos takes care of all required session and CSRF cookies and ensures that\nall security requirements are fulfilled."),Object(a.b)("p",null,"This flow is not suitable for scenarios where you use purely programmatic\nclients that do not work well with HTTP Cookies and HTTP Redirects."),Object(a.b)("h3",{id:"the-settings-user-interface"},"The Settings User Interface"),Object(a.b)("p",null,"The Settings User Interface is a route (page / site) in your application that\nrenders the user settings / profile management User Interface / HTML Form:"),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- Profile management --\x3e\n<form action="..." method="POST">\n  <input type="hidden" name="csrf_token" value="cdef..." />\n  <input type="string" name="first_name" />\n  <input type="string" name="last_name" />\n  <input type="string" name="address" />\n  <input type="..." name="..." />\n  <input type="submit" />\n</form>\n\n\x3c!-- Password management --\x3e\n<form action="..." method="POST">\n  <input type="hidden" name="csrf_token" value="cdef..." />\n  <input\n    type="password"\n    name="password"\n    placeholder="Enter your new password here"\n  />\n</form>\n\n\x3c!-- Social Sign in  management --\x3e\n<form action="..." method="POST">\n  <input type="hidden" name="csrf_token" value="cdef..." />\n  \x3c!-- ... --\x3e\n</form>\n')),Object(a.b)("p",null,"Reference these UI endpoints your ORY Kratos config file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/kratos/config.yml"',title:'"path/to/kratos/config.yml"'}),"selfservice:\n  flows:\n    settings:\n      ui_url: https://.../settings\n")),Object(a.b)("p",null,"In stark contrast to other Identity Systems, ORY Kratos does not render this\nHTML. Instead, you need to implement the HTML code in your application (e.g.\nNodeJS + ExpressJS, Java, PHP, ReactJS, ...), which gives you extreme\nflexibility and customizability in your user interface flows and designs."),Object(a.b)("p",null,"Each Settings Strategy (",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"/kratos/docs/self-service/flows/user-settings/user-profile-management"}),"Profile"),",\n",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"/kratos/docs/self-service/flows/user-login-user-registration/username-email-password"}),"Username and Password"),",\n",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"/kratos/docs/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2"}),"Social Sign In"),",\nPasswordless, ...) works a bit different but they all boil down to the same\nabstract sequence:"),Object(a.b)(i.a,{chart:"\nsequenceDiagram\n  participant B as Browser\n  participant K as ORY Kratos\n  participant A as Your Application\n  B->>K: Initialize Settings Flow\n  K->>B: Redirects to your Application's /settings_ui endpoint\n  B->>A: Calls /settings_ui\n  A--\x3e>K: Fetches data to render forms etc\n  B--\x3e>A: Fills out forms, clicks e.g. \"Save Changes\"\n  B->>K: POSTs data to\n  K--\x3e>K: Processes Settings Info\n  alt Settings data valid\n    K--\x3e>B: Updates Identity Settings\n    K->>B: Redirects to e.g. Dashboard\n  else Setings data invalid\n    K--\x3e>B: Redirects to your Applicaiton's /settings_ui endpoint\n    B->>A: Calls /settings_ui\n    A--\x3e>K: Fetches data to render form fields and errors\n    B--\x3e>A: Fills out forms again, corrects errors\n    B->>K: POSTs data again - and so on...\n  end\n",mdxType:"Mermaid"}),Object(a.b)("h3",{id:"code"},"Code"),Object(a.b)("p",null,"The code example used here is universal and does not use an SDK because we want\nyou to understand the fundamentals of how this flow works."),Object(a.b)("p",null,"While this example assumes a Server-Side Application, a Client-Side (e.g.\nReactJS) Application would work the same, but use ORY Kratos' Public API\ninstead."),Object(a.b)("h4",{id:"server-side-route"},"Server-side route"),Object(a.b)("p",null,"You will notice that this endpoint is very similar to the one documented for\n",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"/kratos/docs/self-service/flows/user-login-user-registration"}),"User Login and Registration"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-js"}),"// Uses the ORY Kratos NodeJS SDK - for more SDKs check:\n//\n//  https://www.ory.sh/kratos/docs/sdk/index\nconst { CommonApi } = require('@oryd/kratos-client')\n\n// The browser config key is used to redirect the user. It reflects where ORY Kratos' Public API\n// is accessible from. Here, we're assuming traffic going to `http://example.org/.ory/kratos/public/`\n// will be forwarded to ORY Kratos' Public API.\nconst kratosBrowserUrl = 'http://example.org/.ory/kratos/public/'\n\n// Initializes the SDK with ORY Kratos' Admin API.\nconst commonApi = new CommonApi('https://ory-kratos-admin.example-org.vpc/')\n\n// This route would be used like:\n//\n//    app.get('/user/settings', settingsHandler)\n//\nexport const settingsHandler = (req, res, next) => {\n  // The request ID is used to identify User Settings Request and\n  // return data like the csrf_token and so on.\n  const request = req.query.request\n  if (!request) {\n    console.log('No request found in URL, initializing flow.')\n    res.redirect(`${kratosBrowserUrl}/self-service/browser/flows/settings`)\n    return\n  }\n\n  commonApi\n    .getSelfServiceBrowserSettingsRequest(request)\n    .then(({ body, response }) => {\n      if (response.statusCode !== 200) {\n        res.redirect(`${kratosBrowserUrl}/self-service/browser/flows/settings`)\n        return\n      }\n\n      // \"body\" contains all the request data for this User Settings Request.\n      // You can process that data here, if you want.\n\n      // Lastly, you probably want to render the data using a view (e.g. Jade Template):\n      res.render('settings', body)\n    })\n  // Handle errors using ExpressJS' next functionality:\n  //\n  //    .catch(next)\n}\n")),Object(a.b)("h4",{id:"views"},"Views"),Object(a.b)("p",null,"Implementing the view is simple as ORY Kratos provides you with all the\ninformation you need for rendering the forms. The following example illustrates\na generic form generator (we use handlebars here) that works with ORY Kratos:"),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-handlebars",metastring:'name="views/partials/form.hbs"',name:'"views/partials/form.hbs"'}),'<form action="{{form.action}}" method="{{form.method}}">\n    {{~#each form.errors~}}\n        \x3c!-- global form validation errors --\x3e\n        <div class="error">{{message}}</div>\n    {{~/each~}}\n\n    {{#each form.fields}}\n        {{~#each errors~}}\n            \x3c!-- validation errors for this specific field --\x3e\n            <div class="error">{{message}}</div>\n        {{~/each~}}\n        <input name="{{name}}" type="{{type}}" value="{{value}}" {{#if disabled}}disabled{{/if}}>\n    {{/each}}\n\n    <button type="submit">Save</button>\n</form>\n')),Object(a.b)("p",null,'In your main "Settings" view you would then consume this template for all the\nmethods you want to support:'),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-handlebars",metastring:'name="views/settings.hbs"',name:'"views/settings.hbs"'}),"\x3c!-- Make profile changes form: --\x3e\n{{#if methods.profile.config}}\n    {{> form form=methods.profile.config}}\n{{/if}}\n\n\x3c!-- Change passowrd form: --\x3e\n{{#if methods.password.config}}\n    {{> form form=methods.password.config}}\n{{/if}}\n\n\x3c!-- ... form: --\x3e\n\x3c!-- ... --\x3e\n")),Object(a.b)("p",null,"For details on payloads and potential HTML snippets consult the individual\nSelf-Service Strategies for:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(s.a)({parentName:"li"},{href:"/kratos/docs/self-service/flows/user-login-user-registration/username-email-password"}),"Username and Password Strategy")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(s.a)({parentName:"li"},{href:"/kratos/docs/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2"}),"Social Sign In Strategy")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(s.a)({parentName:"li"},{href:"/kratos/docs/self-service/flows/user-settings/user-profile-management"}),"Profile"))),Object(a.b)("h3",{id:"server-side-browser-applications"},"Server-Side Browser Applications"),Object(a.b)("p",null,"Let's take a look at the concrete network topologies, calls, and payloads. Here,\nwe're assuming that you're running a server-side browser application (written in\ne.g. PHP, Java, NodeJS) to render the settings screen on the server and make all\nAPI calls from that server code. The counterpart to this would be a client-side\nbrowser application (written in e.g. Vanilla JavaScript, JQuery, ReactJS,\nAngularJS, ...) that uses AJAX requests to fetch data. For these type of\napplications, read this section first and go to section\n",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"#client-side-browser-applications"}),"Client-Side Browser Applications")," next."),Object(a.b)("h4",{id:"network-architecture"},"Network Architecture"),Object(a.b)("p",null,"We recommend checking out the\n",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"/kratos/docs/quickstart#network-architecture"}),"Quickstart Network Architecture")," for\na high-level, exemplary, overview of the network. In summary:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The SecureApp (your application) is exposed at ",Object(a.b)("a",Object(s.a)({parentName:"li"},{href:"http://127.0.0.1:4455"}),"http://127.0.0.1:4455")," and\nproxies requests matching path ",Object(a.b)("inlineCode",{parentName:"li"},"./ory/kratos/public/*")," to ORY Krato's Public\nAPI Port."),Object(a.b)("li",{parentName:"ol"},"ORY Kratos exposes (for debugging only!!) the Public API at\n",Object(a.b)("a",Object(s.a)({parentName:"li"},{href:"http://127.0.0.1:4433"}),"http://127.0.0.1:4433")," and Admin API at ",Object(a.b)("a",Object(s.a)({parentName:"li"},{href:"http://127.0.0.1:4434"}),"http://127.0.0.1:4434"),"."),Object(a.b)("li",{parentName:"ol"},'Within the "intranet" or "private network", ORY Kratos is exposed at\nhttp://kratos:4433 and http://kratos:4434. These URLs are be used by the\nSecureApp to communicate with ORY Kratos.')),Object(a.b)("p",null,"Keep in mind that his architecture is just one of many possible network\narchitectures. It is however one of the simplest as well and it works locally.\nFor production deployments you would probably use an Reverse Proxy such as\nNginx, Kong, Envoy, ORY Oathkeeper, or others."),Object(a.b)("h4",{id:"user-settings-process-sequence"},"User Settings Process Sequence"),Object(a.b)("p",null,"The User Settings Flow is composed of several high-level steps summarized in\nthis state diagram:"),Object(a.b)(i.a,{chart:'\nstateDiagram\n  s1: User browses app\n  s3: User ends up at settings_ui which renders the User Settings Form\n  s4: Execute "After Settings Hook(s)"\n  s5: Update "Settings Request" with Error Context(s)\n  s6: Settings update successful\n\t[*] --\x3e s1\n  s1 --\x3e s3 : User clicks "Manage Account" and is redirected to Settings Init Endpoint\n  s3 --\x3e s4 : User provides valid profile data\n  s3 --\x3e s5 : User provides invalid profile data\n  s5 --\x3e s3 : User is redirected to Settings UI URL\n  s4 --\x3e Error : A Hook fails\n  s4 --\x3e s6\n  s6 --\x3e [*]\n  Error --\x3e [*]\n',mdxType:"Mermaid"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The flow is initiated by directing the user's browser to\n",Object(a.b)("inlineCode",{parentName:"li"},"http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/settings"),"."),Object(a.b)("li",{parentName:"ol"},"ORY Kratos does some internal processing (e.g. checks if a session cookie is\nset, generates payloads for form fields, sets CSRF token, ...) and redirects\nthe user's browser to the Settings UI URL which is defined using the\n",Object(a.b)("inlineCode",{parentName:"li"},"selfservice.flows.settings.ui_url")," config or\n",Object(a.b)("inlineCode",{parentName:"li"},"SELFSERVICE_FLOWS_SETTINGS_UI_URL")," environment variable, which is set to the\nui endpoints - for example ",Object(a.b)("inlineCode",{parentName:"li"},"https://127.0.0.1:4455/settings"),". The user's\nbrowser is thus redirected to\n",Object(a.b)("inlineCode",{parentName:"li"},"https://127.0.0.1:4455/settings?request=abcde"),". The ",Object(a.b)("inlineCode",{parentName:"li"},"request")," query\nparameter includes a unique ID which will be used to fetch contextual data\nfor this settings request."),Object(a.b)("li",{parentName:"ol"},"Your Server-Side Application makes a ",Object(a.b)("inlineCode",{parentName:"li"},"GET")," request to\n",Object(a.b)("inlineCode",{parentName:"li"},"http://kratos:4434/self-service/browser/flows/requests/settings?request=abcde"),".\nORY Kratos responds with a JSON Payload that contains data (form fields,\nerror messages, ...) for all enabled User Profile Strategies:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-json5"}),"{\n  id: 'abcde',\n  request_url: '...',\n  methods: {\n    profile: { method: 'profile', config: { action: '...', fields: [] } },\n    password: { method: 'password', config: { action: '...', fields: [] } },\n    oidc: { method: 'oidc', config: { action: '...', fields: [] } }\n  }\n}\n"))),Object(a.b)("li",{parentName:"ol"},"Your Server-Side applications renders the data however you see fit. The User\ninteracts with it and completes the flow by e.g. updating the password or\nsome other profile data."),Object(a.b)("li",{parentName:"ol"},"The User's browser makes a request to one of ORY Kratos' Strategy URLs (e.g.\n",Object(a.b)("inlineCode",{parentName:"li"},"http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/settings/strategies/profile?request=abcde"),"\nor ",Object(a.b)("inlineCode",{parentName:"li"},"/self-service/browser/flows/settings/strategies/password?request=abcde"),").\nORY Kratos validates the data:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"If the form data is invalid, the Settings Request's JSON Payload is\nupdated - for example with",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-json5"}),"{\n  id: 'abcde',\n  methods: {\n    oidc: {\n      method: 'oidc',\n      config: {\n        /* ... */\n      }\n    },\n    password: {\n      method: 'password',\n      config: {\n        /* ... */\n        messages: [\n          {\n            id: 4000006,\n            text: 'The provided credentials are invalid. Check for spelling mistakes in your password or username, email address, or phone number.',\n            type: 'error'\n          }\n        ]\n      }\n    }\n  }\n}\n")),"and the user's Browser is redirected back to the Settings UI:\n",Object(a.b)("inlineCode",{parentName:"li"},"https://127.0.0.1:4455/settings_ui?request=abcde"),"."),Object(a.b)("li",{parentName:"ul"},"If the data is valid but the modifications require proof of identity (e.g.\nbecause the primary email address or the password was changed), a settings\nflow is executed. Only after a successful settings flow will the changed\ndata be stored!"),Object(a.b)("li",{parentName:"ul"},"If data is valid, ORY Kratos proceeds with the next step."))),Object(a.b)("li",{parentName:"ol"},"ORY Kratos executes hooks defined in the ",Object(a.b)("strong",{parentName:"li"},"After Settings Hooks"),". If a\nfailure occurs, the whole flow is aborted."),Object(a.b)("li",{parentName:"ol"},"The client receives the expected response. For browsers, this is a HTTP\nRedirection, for API clients it will be a JSON response containing the\nsession and/or identity. For more information on this topic check\n",Object(a.b)("a",Object(s.a)({parentName:"li"},{href:"/kratos/docs/concepts/browser-redirect-flow-completion"}),"Self-Service Flow Completion"),".")),Object(a.b)(i.a,{chart:'\nsequenceDiagram\n  participant B as Browser\n  participant A as Your Server-Side Application\n  participant KP as ORY Kratos Public API\n  participant KA as ORY Kratos Admin API\n  B->>+A: GET /.ory/kratos/public/self-service/browser/flows/settings\n  A->>+KP: GET /self-service/browser/flows/settings\n  KP--\x3e>-A: HTTP 302 Found /settings?request=abcde\n  A--\x3e>-B: HTTP 302 Found /settings?request=abcde\n  B->>+A: GET /settings?request=abcde\n  A->>+KA: GET /self-service/browser/flows/requests/settings?request=abcde\n  KA->>-A: Sends Settings Request JSON Payload\n  Note over A,KA:  {"methods":{"password":...,"oidc":..}}\n  A--\x3e>A: Generate and render HTML\n  A--\x3e>-B: Return HTML (Form, ...)\n  B--\x3e>B: Fill out HTML\n  B->>+KP: POST HTML Form\n  KP--\x3e>KP: Checks profile data\n  alt Setting updates are valid\n    KP--\x3e>-KP: Execute Jobs defined in "After Settings Workflow(s)"\n    KP--\x3e>A: HTTP 302 Found /dashboard\n  else Setting updates require re-authentication\n    Note over KP,B: User is asked to login in again. If the login is valid, the data is updated.\n    KP--\x3e>B: HTTP 302 Found /settings?request=abcde\n  else Setting updates are invalid\n    Note over KP,B: User retries settings flow\n    KP--\x3e>B: HTTP 302 Found /settings?request=abcde\n  end\n',mdxType:"Mermaid"}),Object(a.b)("h3",{id:"client-side-browser-applications"},"Client-Side Browser Applications"),Object(a.b)("p",null,"Because Client-Side Browser Applications do not have access to ORY Kratos' Admin\nAPI, they must use the ORY Kratos Public API instead. The flow for a Client-Side\nBrowser Application is almost the exact same as the one for Server-Side\nApplications, with the small difference that\n",Object(a.b)("inlineCode",{parentName:"p"},"https://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/requests/settings?request=abcde"),"\nwould be called via AJAX instead of making a request to\n",Object(a.b)("inlineCode",{parentName:"p"},"https://kratos:4434/self-service/browser/flows/requests/settings?request=abcde"),"."),Object(a.b)("p",null,"To prevent brute force, guessing, session injection, and other attacks, it is\nrequired that cookies are working for this endpoint. The cookie set in the\ninitial HTTP request made to\n",Object(a.b)("inlineCode",{parentName:"p"},"https://127.0.0.1:4455/.ory/kratos/public/self-service/browser/settings")," MUST\nbe set and available when calling this endpoint!"),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(s.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(s.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(s.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(s.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"The initialization request\n(",Object(a.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/settings"),")\n",Object(a.b)("strong",{parentName:"p"},"cannot")," be made via AJAX or API requests. You ",Object(a.b)("strong",{parentName:"p"},"must")," open that URL in the\nuser's browser using e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"window.open")," ",Object(a.b)("inlineCode",{parentName:"p"},"location.href")," or plain and simple old\n",Object(a.b)("inlineCode",{parentName:"p"},"<a href=...>"),"."))),Object(a.b)("h4",{id:"user-settings-request-state"},"User Settings Request State"),Object(a.b)("p",null,"The Settings Request contains a state with two possible values:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"show_form"),": No user data has been collected, or it is invalid, and thus the\nform should be shown."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"successful"),": Indicates that the settings request has been updated\nsuccessfully with the provided data. The state will stay ",Object(a.b)("inlineCode",{parentName:"li"},"successful")," when\nrepeatedly checking. If the form is still displayed and the user adds more\ndata, the state will revert back to ",Object(a.b)("inlineCode",{parentName:"li"},"show_form")," on validation errors.")),Object(a.b)(i.a,{chart:"stateDiagram-v2\n[*] --\x3e show_form\nshow_form --\x3e show_form: Validation fails\nshow_form --\x3e success: Identity was updated\nsuccess --\x3e show_form: Validation fails\nsuccess --\x3e [*]\n",mdxType:"Mermaid"}),Object(a.b)("h2",{id:"self-service-user-settings-for-api-clients"},"Self-Service User Settings for API Clients"),Object(a.b)("p",null,"Will be addressed in a future release."),Object(a.b)("h2",{id:"hooks"},"Hooks"),Object(a.b)("p",null,"ORY Kratos allows you to configure hooks that run before and after a profile\nupdate was successful. For more information about hooks please read the\n",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"../hooks/index"}),"Hook Documentation"),"."))}p.isMDXComponent=!0},338:function(e,t,n){"use strict";var s=n(0),r=n.n(s),a=n(355),i=n.n(a),o=n(48),l=n.n(o),c=n(347),d=n.n(c);i.a.initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});t.a=function(e){var t,n=e.chart,a=Object(s.useState)(!1),o=a[0],c=a[1],p=Object(s.useState)(void 0),u=p[0],b=p[1],h=Object(s.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],f=function(){return c(!o)};return Object(s.useEffect)((function(){i.a.render(h,n,(function(e){b(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onClick:f,className:d()(l.a.graph,l.a.pointer),dangerouslySetInnerHTML:{__html:u}}),r.a.createElement("div",{onClick:f,className:d()(l.a.overlay,l.a.pointer,l.a.graph,(t={},t[l.a.visible]=o,t))},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:d()(l.a.backdrop,l.a.graph),dangerouslySetInnerHTML:{__html:u}})))}},356:function(e,t){},357:function(e,t){},358:function(e,t){},359:function(e,t){},360:function(e,t){},361:function(e,t){},362:function(e,t){},363:function(e,t){},364:function(e,t){},365:function(e,t){},366:function(e,t){},367:function(e,t){},368:function(e,t){},369:function(e,t,n){var s={"./locale":341,"./locale.js":341};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=a,e.exports=r,r.id=369}}]);