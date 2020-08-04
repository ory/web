(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{333:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return d})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(9),s=(r(0),r(390)),a=r(392),i=r(396),c={id:"account-recovery",title:"Account Recovery",sidebar_title:"Overview"},l={id:"version-v0.4/self-service/flows/account-recovery",isDocsHomePage:!1,title:"Account Recovery",description:"Account Recovery must be performed if access to an account needs to be",source:"@site/versioned_docs/version-v0.4/self-service/flows/account-recovery.mdx",permalink:"/kratos/docs/self-service/flows/account-recovery",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/self-service/flows/account-recovery.mdx",version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594198226,sidebar:"version-v0.4/docs",previous:{title:"Link and Unlink OpenID Connect and OAuth2 Connections",permalink:"/kratos/docs/self-service/flows/user-settings/link-unlink-openid-connect-oauth2"},next:{title:"Recovery Link and Password Reset",permalink:"/kratos/docs/self-service/flows/account-recovery/password-reset-recovery-link"}},d=[{value:"Self-Service Account Recovery for Browser Applications",id:"self-service-account-recovery-for-browser-applications",children:[{value:"The Account Recovery User Interface",id:"the-account-recovery-user-interface",children:[]},{value:"Code",id:"code",children:[]},{value:"Server-Side Browser Applications",id:"server-side-browser-applications",children:[]},{value:"Client-Side Browser Applications",id:"client-side-browser-applications",children:[]}]},{value:"Self-Service Account Recovery for API Clients",id:"self-service-account-recovery-for-api-clients",children:[]}],u={rightToc:d};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Account Recovery must be performed if access to an account needs to be\nrecovered. Common use cases include:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},'"Forgot password" flows'),Object(s.b)("li",{parentName:"ul"},'"Lost MFA device" flows'),Object(s.b)("li",{parentName:"ul"},"...")),Object(s.b)("p",null,"To recover an account, two principal flows are supported:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Browser-based (easy): This flow works for all applications running on top of a\nbrowser. Websites, single-page apps, Cordova/Ionic, and so on."),Object(s.b)("li",{parentName:"ul"},"API-based (advanced): This flow works for native applications like iOS\n(Swift), Android (Java), Microsoft (.NET), React Native, Electron, and others.")),Object(s.b)("p",null,"The flow described here is implemented by the\n",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"user-settings/password-reset-recovery-link.mdx"}),"link")," strategy."),Object(s.b)("h2",{id:"self-service-account-recovery-for-browser-applications"},"Self-Service Account Recovery for Browser Applications"),Object(s.b)("p",null,"ORY Kratos supports browser applications that run on server-side (e.g. Java,\nNodeJS, PHP) as well as client-side (e.g. JQuery, ReactJS, AngularJS, ...)."),Object(s.b)("p",null,"Browser-based account recovery makes use of three core HTTP technologies:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"HTTP Redirects"),Object(s.b)("li",{parentName:"ul"},"HTTP POST (",Object(s.b)("inlineCode",{parentName:"li"},"application/json"),", ",Object(s.b)("inlineCode",{parentName:"li"},"application/x-www-urlencoded"),") and RESTful GET\nrequests."),Object(s.b)("li",{parentName:"ul"},"HTTP Cookies to prevent CSRF and Session Hijaking attack vectors.")),Object(s.b)("p",null,"The browser flow is the easiest and most secure to set up and integrated with.\nORY Kratos takes care of all required session and CSRF cookies and ensures that\nall security requirements are fulfilled."),Object(s.b)("p",null,"This flow is not suitable for scenarios where you use purely programmatic\nclients that do not work well with HTTP Cookies and HTTP Redirects."),Object(s.b)("h3",{id:"the-account-recovery-user-interface"},"The Account Recovery User Interface"),Object(s.b)("p",null,"The Account Recovery User Interface is a route (page / site) in your application\nthat renders the account recovery User Interface / HTML Form."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- Recover account by sending recovery link to specified email --\x3e\n<form action="..." method="POST">\n  <input type="hidden" name="csrf_token" value="cdef..." />\n  <input type="email" name="email" />\n  <input type="submit" />\n</form>\n')),Object(s.b)("p",null,"Reference these UI endpoints your ORY Kratos config file:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/kratos/config.yml"',title:'"path/to/kratos/config.yml"'}),"selfservice:\n  flows:\n    recovery:\n      ui_url: https://.../recovery\n")),Object(s.b)("p",null,"You should also configure how long a session is privileged. The user will only\nbe able to update his/her password (or any other credential) for the specified\namount of time after completing the recovery flow."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/kratos/config.yml"',title:'"path/to/kratos/config.yml"'}),"selfservice:\n  flows:\n    settings:\n      privileged_session_max_age: 15m\n")),Object(s.b)("p",null,Object(s.b)("figure",null,Object(s.b)("img",{alt:"Recovery email sent to unknown address",src:Object(a.a)("img/docs/secureapp-recovery-change.png")}),Object(s.b)("figcaption",null,"The user is instructed to update her/his password or set up credentials such as Social Sign In."))),Object(s.b)("p",null,"In stark contrast to other Identity Systems, ORY Kratos does not render this\nHTML. Instead, you need to implement the HTML code in your application (e.g.\nNodeJS + ExpressJS, Java, PHP, ReactJS, ...), which gives you extreme\nflexibility and customizability in your user interface flows and designs."),Object(s.b)("p",null,"Each Recovery Strategy\n(",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/self-service/flows/account-recovery/password-reset-recovery-link"}),"Recovery Link"),", ...) is\ndifferent, but they all boil down to the same abstract sequence:"),Object(s.b)(i.a,{chart:"\nsequenceDiagram\n  participant B as Browser\n  participant K as ORY Kratos\n  participant A as Your Application\n  B->>K: Initiate Account Recovery\n  K->>B: Redirects to your Application's /recovery_ui endpoint\n  B->>A: Calls /recovery_ui\n  A--\x3e>K: Fetches data to render forms etc\n  B--\x3e>A: Fills out forms (e.g. email), clicks \"recover account\"\n  B->>K: POSTs data to\n  K--\x3e>K: Processes Account Recovery Info\n  alt Data is valid\n    K--\x3e>+B: Issues recovery challenge (e.g. send email)\n    K->>B: Shows in the UI that the user must e.g. click link in email\n    B->>-K: Completes challenge and recovers account(e.g. GET .../recover?token=abc)\n    K->>B: Redirects to Settings page to update e.g. password\n  else Post data is invalid\n    K--\x3e>B: Redirects to your Applicaiton's /recovery_ui endpoint\n    B->>A: Calls /recovery_ui\n    A--\x3e>K: Fetches data to render form fields and errors\n    B--\x3e>A: Fills out forms again, corrects errors\n    B->>K: POSTs data again - and so on...\n  end\n",mdxType:"Mermaid"}),Object(s.b)("h3",{id:"code"},"Code"),Object(s.b)("p",null,"The code example used here is universal and does not use an SDK because we want\nyou to understand the fundamentals of how this flow works."),Object(s.b)("p",null,"While this example assumes a Server-Side Application, a Client-Side (e.g.\nReactJS) Application would work the same, but use ORY Kratos' Public API\ninstead."),Object(s.b)("h4",{id:"server-side-route"},"Server-side route"),Object(s.b)("p",null,"You will notice that this endpoint is very similar to the one documented for\n",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/self-service/flows/user-settings"}),"User Settings"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Uses the ORY Kratos NodeJS SDK - for more SDKs check:\n//\n//  https://www.ory.sh/kratos/docs/sdk/index\nconst { CommonApi } = require('@oryd/kratos-client')\n\n// The browser config key is used to redirect the user. It reflects where ORY Kratos' Public API\n// is accessible from. Here, we're assuming traffic going to `http://example.org/.ory/kratos/public/`\n// will be forwarded to ORY Kratos' Public API.\nconst kratosBrowserUrl = 'http://example.org/.ory/kratos/public/'\n\n// Initializes the SDK with ORY Kratos' Admin API.\nconst commonApi = new CommonApi('https://ory-kratos-admin.example-org.vpc/')\n\n// This route would be used like:\n//\n//    app.get('/recover', recoveryHandler)\n//\nexport const recoveryHandler = (req, res, next) => {\n  // The request ID is used to identify the Account Recovery Request and\n  // return data like the csrf_token and so on.\n  const request = req.query.request\n  if (!request) {\n    console.log('No request found in URL, initializing flow.')\n    res.redirect(`${kratosBrowserUrl}/self-service/browser/flows/recovery`)\n    return\n  }\n\n  commonApi\n    .getSelfServiceBrowserRecoveryRequest(request)\n    .then(({ body, response }) => {\n      if (response.statusCode !== 200) {\n        res.redirect(`${kratosBrowserUrl}/self-service/browser/flows/recovery`)\n        return\n      }\n\n      // \"body\" contains all the request data for this Recovery request.\n      // You can process that data here, if you want.\n\n      // Lastly, you probably want to render the data using a view (e.g. Jade Template):\n      res.render('recovery', body)\n    })\n  // Handle errors using ExpressJS' next functionality:\n  //\n  //    .catch(next)\n}\n")),Object(s.b)("h4",{id:"views"},"Views"),Object(s.b)("p",null,"Implementing the view is simple as ORY Kratos provides you with all the\ninformation you need for rendering the forms. The following example illustrates\na generic form generator (we use handlebars here) that works with ORY Kratos:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-handlebars",metastring:'name="views/partials/form.hbs"',name:'"views/partials/form.hbs"'}),'<form action="{{form.action}}" method="{{form.method}}">\n    {{~#each form.errors~}}\n        \x3c!-- global form validation errors --\x3e\n        <div class="error">{{message}}</div>\n    {{~/each~}}\n\n    {{#each form.fields}}\n        {{~#each errors~}}\n            \x3c!-- validation errors for this specific field --\x3e\n            <div class="error">{{message}}</div>\n        {{~/each~}}\n        <input name="{{name}}" type="{{type}}" value="{{value}}" {{#if disabled}}disabled{{/if}}>\n    {{/each}}\n\n    <button type="submit">Save</button>\n</form>\n')),Object(s.b)("p",null,'In your main "Recovery" view you would then consume this template for all the\nmethods you want to support:'),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-handlebars",metastring:'name="views/recovery.hbs"',name:'"views/recovery.hbs"'}),"\x3c!-- Make profile changes form: --\x3e\n{{#if methods.link.config}}\n    {{> form form=methods.profile.config}}\n{{/if}}\n\n\x3c!-- ... form: --\x3e\n\x3c!-- ... --\x3e\n")),Object(s.b)("p",null,"For details on payloads and potential HTML snippets consult the individual\nSelf-Service Strategies for:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/kratos/docs/self-service/flows/account-recovery/password-reset-recovery-link"}),"Recovery Link"))),Object(s.b)("h3",{id:"server-side-browser-applications"},"Server-Side Browser Applications"),Object(s.b)("p",null,"Let's take a look at the concrete network topologies, calls, and payloads. Here,\nwe're assuming that you're running a server-side browser application (written in\ne.g. PHP, Java, NodeJS) to render the recovery screen on the server and make all\nAPI calls from that server code. The counterpart to this would be a client-side\nbrowser application (written in e.g. Vanilla JavaScript, JQuery, ReactJS,\nAngularJS, ...) that uses AJAX requests to fetch data. For these type of\napplications, read this section first and go to section\n",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"#client-side-browser-applications"}),"Client-Side Browser Applications")," next."),Object(s.b)("h4",{id:"network-architecture"},"Network Architecture"),Object(s.b)("p",null,"We recommend checking out the\n",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/quickstart#network-architecture"}),"Quickstart Network Architecture")," for\na high-level, exemplary, overview of the network. In summary:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"The SecureApp (your application) is exposed at ",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"http://127.0.0.1:4455"}),"http://127.0.0.1:4455")," and\nproxies requests matching path ",Object(s.b)("inlineCode",{parentName:"li"},"./ory/kratos/public/*")," to ORY Krato's Public\nAPI Port."),Object(s.b)("li",{parentName:"ol"},"ORY Kratos exposes (for debugging only!!) the Public API at\n",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"http://127.0.0.1:4433"}),"http://127.0.0.1:4433")," and Admin API at ",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"http://127.0.0.1:4434"}),"http://127.0.0.1:4434"),"."),Object(s.b)("li",{parentName:"ol"},'Within the "intranet" or "private network", ORY Kratos is exposed at\nhttp://kratos:4433 and http://kratos:4434. These URLs are be used by the\nSecureApp to communicate with ORY Kratos.')),Object(s.b)("p",null,"Keep in mind that his architecture is just one of many possible network\narchitectures. It is however one of the simplest as well and it works locally.\nFor production deployments you would probably use an Reverse Proxy such as\nNginx, Kong, Envoy, ORY Oathkeeper, or others."),Object(s.b)("h4",{id:"account-recovery-process-sequence"},"Account Recovery Process Sequence"),Object(s.b)("p",null,"The Account Recovery Flow is composed of several high-level steps summarized in\nthis state diagram:"),Object(s.b)(i.a,{chart:'\nstateDiagram\n  s1: User tries to log in but forgot e.g. password\n  s3: User ends up at recovery_ui which renders the Account Recovery Form\n  s4: Recovery over secondary channel (e.g. email) is initiated\n  s5: Update "Account Recovery Request" with Error Context(s)\n  s6: Settings update successful\n\t[*] --\x3e s1\n  s1 --\x3e s3 : User clicks "Recover Account" and is redirected to Recovery Init Endpoint\n  s3 --\x3e s4 : User provides valid form data\n  s3 --\x3e s5 : User provides invalid form data (e.g. not an email)\n  s5 --\x3e s3 : User is redirected to Settings UI URL\n  s4 --\x3e s6\n  s6 --\x3e [*]\n  Error --\x3e [*]\n',mdxType:"Mermaid"}),Object(s.b)("p",null,"First, the flow is initiated by directing the user's browser to\n",Object(s.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/recovery"),'.\nThis is called the "Account Recovery Init Endpoint".'),Object(s.b)("p",null,"Next, ORY Kratos does some internal processing (e.g. checks if a session cookie\nis set, generates payloads for form fields, sets CSRF token, ...) and redirects\nthe user's browser to the Recovery UI URL which is defined using the\n",Object(s.b)("inlineCode",{parentName:"p"},"selfservice.flows.recovery.ui_url")," config or\n",Object(s.b)("inlineCode",{parentName:"p"},"SELFSERVICE_FLOWS_RECOVERY_UI_URL")," environment variable, which is set to the ui\nendpoints - for example ",Object(s.b)("inlineCode",{parentName:"p"},"https://127.0.0.1:4455/recovery"),"."),Object(s.b)("p",null,"The user's browser is thus redirected to\n",Object(s.b)("inlineCode",{parentName:"p"},"https://127.0.0.1:4455/recovery?request=abcde"),". The ",Object(s.b)("inlineCode",{parentName:"p"},"request")," query parameter\nincludes a unique ID which will be used to fetch contextual data for this\nrecovery request."),Object(s.b)("p",null,"Your Server-Side Application makes a ",Object(s.b)("inlineCode",{parentName:"p"},"GET")," request to\n",Object(s.b)("inlineCode",{parentName:"p"},"http://kratos:4434/self-service/browser/flows/requests/recovery?request=abcde"),".\nORY Kratos responds with a JSON Payload that contains data (form fields, error\nmessages, ...) for all enabled Account Recovery Strategies:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json5"}),"{\n  id: '4f49fd6b-fd13-4de2-ac66-adeffa5e5fe3',\n  expires_at: '2020-07-02T15:41:22.1559315Z',\n  issued_at: '2020-07-02T14:41:22.1559545Z',\n  request_url: 'http://kratos:4433/self-service/browser/flows/recovery',\n  methods: {\n    link: {\n      /* ... */\n    }\n  },\n  state: 'sent_email'\n}\n")),Object(s.b)("p",null,"Once the strategy is completed successfully (e.g. an email has been entered into\nthe form and the user clicked submit), the user will be signed in and sent to\nthe ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/self-service/flows/user-settings"}),"User Settings")," page with a privileged session, meaning\nthat he/she is able to change the password in the next e.g. 15 minutes."),Object(s.b)(i.a,{chart:'\nsequenceDiagram\n  participant U as User\n  participant B as Browser\n  participant A as Your Server-Side Application\n  participant KP as ORY Kratos Public API\n  participant KA as ORY Kratos Admin API\n  B->>+A: GET /.ory/kratos/public/self-service/browser/flows/recovery\n  A->>+KP: GET /self-service/browser/flows/recovery\n  KP->>-A: HTTP 302 Found /recovery?request=abcde\n  A->>-B: HTTP 302 Found /recovery?request=abcde\n  B->>+A: GET /recovery?request=abcde\n  A->>+KA: GET /self-service/browser/flows/requests/recovery?request=abcde\n  KA->>-A: Sends Recovery Request JSON Payload\n  Note over A,KA:  {"methods":{"link":{...},...}, ...}\n  A->>A: Generate and render HTML\n  A->>-B: Return HTML (Form, ...)\n  B->>B: Fill out HTML\n  B->>+KP: POST HTML Form\n  KP--\x3e>KP: Check form data\n  alt Form data is valid\n    KP--\x3e>-U: Issue recovery challenge (e.g. send email)\n    KP->>A: HTTP 302 Found /recovery?request=abcde\n    Note over KP,A: State changes e.g. {"state": "email_sent", ...}\n    alt Recovery successful\n      U->>KP: Pass recovery challenge (e.g. click .../recover?token=abc)\n      KP->>B: HTTP 302 Found /settings\n      Note over KP,B: User is now logged in with privileged session and should be change the password before the privileged session expires.\n    end\n  else Form data is invalid\n    Note over KP,B: User must retry settings flow because of validation error\n    KP->>B: HTTP 302 Found /recovery?request=abcde\n  end\n',mdxType:"Mermaid"}),Object(s.b)("h3",{id:"client-side-browser-applications"},"Client-Side Browser Applications"),Object(s.b)("p",null,"Because Client-Side Browser Applications do not have access to ORY Kratos' Admin\nAPI, they must use the ORY Kratos Public API instead. The flow for a Client-Side\nBrowser Application is almost the exact same as the one for Server-Side\nApplications, with the small difference that\n",Object(s.b)("inlineCode",{parentName:"p"},"https://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/requests/recovery?request=abcde"),"\nwould be called via AJAX instead of making a request to\n",Object(s.b)("inlineCode",{parentName:"p"},"https://kratos:4434/self-service/browser/flows/requests/recovery?request=abcde"),"."),Object(s.b)("p",null,"To prevent brute force, guessing, session injection, and other attacks, it is\nrequired that cookies are working for this endpoint. The cookie set in the\ninitial HTTP request made to\n",Object(s.b)("inlineCode",{parentName:"p"},"https://127.0.0.1:4455/.ory/kratos/public/self-service/browser/recovery")," MUST\nbe set and available when calling this endpoint!"),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"The initialization request\n(",Object(s.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/recovery"),")\n",Object(s.b)("strong",{parentName:"p"},"cannot")," be made via AJAX or API requests. You ",Object(s.b)("strong",{parentName:"p"},"must")," open that URL in the\nuser's browser using e.g. ",Object(s.b)("inlineCode",{parentName:"p"},"window.open")," ",Object(s.b)("inlineCode",{parentName:"p"},"location.href")," or plain and simple old\n",Object(s.b)("inlineCode",{parentName:"p"},"<a href=...>"),"."))),Object(s.b)("h2",{id:"self-service-account-recovery-for-api-clients"},"Self-Service Account Recovery for API Clients"),Object(s.b)("p",null,"Will be addressed in a future release."))}p.isMDXComponent=!0},391:function(e,t,r){"use strict";var n=r(0),o=r(52);t.a=function(){return Object(n.useContext)(o.a)}},392:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));r(76);var n=r(391),o=r(393);function s(e,t){var r=void 0===t?{}:t,s=r.forcePrependBaseUrl,a=void 0!==s&&s,i=r.absolute,c=void 0!==i&&i,l=Object(n.a)().siteConfig,d=(l=void 0===l?{}:l).baseUrl,u=void 0===d?"/":d,p=l.url;if(!e)return e;if(a)return u+e;if(!Object(o.a)(e))return e;var b=u+e.replace(/^\//,"");return c?p+b:b}},393:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}r.d(t,"a",(function(){return n}))},396:function(e,t,r){"use strict";r(400),r(20);var n=r(0),o=r.n(n),s=r(402),a=r.n(s),i=r(131),c=r.n(i),l=r(398),d=r.n(l);a.a.initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});t.a=function(e){var t,r=e.chart,s=Object(n.useState)(!1),i=s[0],l=s[1],u=Object(n.useState)(void 0),p=u[0],b=u[1],h=Object(n.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],m=function(){return l(!i)};return Object(n.useEffect)((function(){a.a.render(h,r,(function(e){b(e)}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{onClick:m,className:d()(c.a.graph,c.a.pointer),dangerouslySetInnerHTML:{__html:p}}),o.a.createElement("div",{onClick:m,className:d()(c.a.overlay,c.a.pointer,c.a.graph,(t={},t[c.a.visible]=i,t))},o.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:d()(c.a.backdrop,c.a.graph),dangerouslySetInnerHTML:{__html:p}})))}},406:function(e,t,r){var n={"./locale":395,"./locale.js":395};function o(e){var t=s(e);return r(t)}function s(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=s,e.exports=o,o.id=406}}]);