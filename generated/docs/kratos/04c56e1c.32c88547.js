(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var i=n(1),a=n(9),r=(n(0),n(323)),o={id:"user-login-user-registration",title:"User Login And Registration",sidebar_label:"Overview"},s={id:"version-v0.3/self-service/flows/user-login-user-registration",title:"User Login And Registration",description:"ORY Kratos supports two type of login and registration flows:",source:"@site/versioned_docs/version-v0.3/self-service/flows/user-login-user-registration.mdx",permalink:"/kratos/docs/self-service/flows/user-login-user-registration",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.3/self-service/flows/user-login-user-registration.mdx",version:"v0.3",sidebar_label:"Overview",sidebar:"version-v0.3/docs",previous:{title:"Self-Service Flows",permalink:"/kratos/docs/self-service"},next:{title:"Username or Email and Password",permalink:"/kratos/docs/self-service/flows/user-login-user-registration/username-email-password"}},c=[{value:"Self-Service User Login and User Registration for Browser Applications",id:"self-service-user-login-and-user-registration-for-browser-applications",children:[{value:"The Login and Registration User Interface",id:"the-login-and-registration-user-interface",children:[]},{value:"Code",id:"code",children:[]},{value:"Server-Side Browser Applications",id:"server-side-browser-applications",children:[]},{value:"Client-Side Browser Applications",id:"client-side-browser-applications",children:[]}]},{value:"Self-Service User Login and User Registration for API Clients",id:"self-service-user-login-and-user-registration-for-api-clients",children:[]},{value:"Hooks",id:"hooks",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"ORY Kratos supports two type of login and registration flows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Browser-based (easy): This flow works for all applications running on top of a\nbrowser. Websites, single-page apps, Cordova/Ionic, and so on."),Object(r.b)("li",{parentName:"ul"},"API-based (advanced): This flow works for native applications like iOS\n(Swift), Android (Java), Microsoft (.NET), React Native, Electron, and others.")),Object(r.b)("p",null,"The login and registration flows documented here are the foundation for the\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/self-service/flows/user-login-user-registration/username-email-password"}),"password")," and\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2"}),"social")," sign in and sign\nup strategies."),Object(r.b)("h2",{id:"self-service-user-login-and-user-registration-for-browser-applications"},"Self-Service User Login and User Registration for Browser Applications"),Object(r.b)("p",null,"ORY Kratos supports browser applications that run on server-side (e.g. Java,\nNodeJS, PHP) as well as client-side (e.g. JQuery, ReactJS, AngularJS, ...)."),Object(r.b)("p",null,"Browser-based login and registration makes use of three core HTTP technologies:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"HTTP Redirects"),Object(r.b)("li",{parentName:"ul"},"HTTP POST (",Object(r.b)("inlineCode",{parentName:"li"},"application/json"),", ",Object(r.b)("inlineCode",{parentName:"li"},"application/x-www-urlencoded"),") and RESTful GET\nrequests."),Object(r.b)("li",{parentName:"ul"},"HTTP Cookies to prevent CSRF and Session Hijaking attack vectors.")),Object(r.b)("p",null,"The browser flow is the easiest and most secure to set up and integrated with.\nORY Kratos takes care of all required session and CSRF cookies and ensures that\nall security requirements are fulfilled."),Object(r.b)("p",null,"Future versions of ORY Kratos will be able to deal with multi-domain\nenvironments that require SSO. For example, one account would be used to sign\ninto both ",Object(r.b)("inlineCode",{parentName:"p"},"mydomain.com")," and ",Object(r.b)("inlineCode",{parentName:"p"},"anotherdomain.org"),". A common real-world example is\nusing your Google account to seamlessly be signed into YouTube and Google at the\nsame time."),Object(r.b)("p",null,"This flow is not suitable for scenarios where you use purely programmatic\nclients that do not work well with HTTP Cookies and HTTP Redirects."),Object(r.b)("h3",{id:"the-login-and-registration-user-interface"},"The Login and Registration User Interface"),Object(r.b)("p",null,"The Login and Registration User Interface is a route (page / site) in your\napplication that should render a sign in and registration form:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- Login --\x3e\n<form action="..." method="POST">\n  <input type="text" name="identifier" placeholder="Enter your username" />\n  <input type="password" name="password" placeholder="Enter your password" />\n  <input type="hidden" name="csrf_token" value="cdef..." />\n  <input type="submit" />\n</form>\n\n\x3c!-- Registration --\x3e\n<form action="..." method="POST">\n  <input type="email" name="email" placeholder="Enter your E-Mail Address" />\n  <input type="password" name="password" placeholder="Enter your password" />\n  <input\n    type="first_name"\n    name="password"\n    placeholder="Enter your First Name"\n  />\n  <input type="last_name" name="password" placeholder="Enter your Last Name" />\n  <input type="hidden" name="csrf_token" value="cdef..." />\n  <input type="submit" />\n</form>\n')),Object(r.b)("p",null,"Once implemented (using e.g. our\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ory/kratos-selfservice-ui-node"}),"reference implementation"),")\nyou reference these routes in your ORY Kratos config file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/kratos/config.yml"',title:'"path/to/kratos/config.yml"'}),"urls:\n  login_ui: https://.../login\n  registration_ui: https://.../registration\n")),Object(r.b)("p",null,'Depending on the type of login flows you want to support, you may a also add a\n"Sign up/in with GitHub" flow:'),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- Login and Registration --\x3e\n<form action="..." method="POST">\n  <input type="hidden" name="csrf_token" value="cdef..." />\n\n  \x3c!-- Basically <a href="https://github.com/login/oauth/authorize?...">Sign up/in with GitHub</a> --\x3e\n  <input type="submit" name="provider" value="GitHub" />\n</form>\n')),Object(r.b)("p",null,"In stark contrast to other Identity Systems, ORY Kratos does not render this\nHTML. Instead, you need to implement the HTML code in your application (e.g.\nNodeJS + ExpressJS, Java, PHP, ReactJS, ...), which gives you extreme\nflexibility and customizability in your user interface flows and designs."),Object(r.b)("p",null,"Each Login and Registration Strategy (e.g.\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/self-service/flows/user-login-user-registration/username-email-password"}),"Username and Password"),",\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2"}),"Social Sign In"),",\nPasswordless, ...) works a bit different but they all boil down to the same\nabstract sequence:"),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gIHBhcnRpY2lwYW50IEIgYXMgQnJvd3NlclxuICBwYXJ0aWNpcGFudCBLIGFzIE9SWSBLcmF0b3NcbiAgcGFydGljaXBhbnQgQSBhcyBZb3VyIEFwcGxpY2F0aW9uXG5cblxuICBCLT4-SzogSW5pdGlhdGUgTG9naW5cbiAgSy0-PkI6IFJlZGlyZWN0cyB0byB5b3VyIEFwcGxpY2F0aW9uJ3MgL2xvZ2luIGVuZHBvaW50XG4gIEItPj5BOiBDYWxscyAvbG9naW5cbiAgQS0tPj5LOiBGZXRjaGVzIGRhdGEgdG8gcmVuZGVyIGZvcm1zIGV0Y1xuICBCLS0-PkE6IEZpbGxzIG91dCBmb3JtcywgY2xpY2tzIGUuZy4gXCJTdWJtaXQgTG9naW5cIlxuICBCLT4-SzogUE9TVHMgZGF0YSB0b1xuICBLLS0-Pks6IFByb2Nlc3NlcyBMb2dpbiBJbmZvXG5cbiAgYWx0IExvZ2luIGRhdGEgdmFsaWRcbiAgICBLLS0-PkI6IFNldHMgc2Vzc2lvbiBjb29raWVcbiAgICBLLT4-QjogUmVkaXJlY3RzIHRvIGUuZy4gRGFzaGJvYXJkXG4gIGVsc2UgTG9naW4gZGF0YSBpbnZhbGlkXG4gICAgSy0tPj5COiBSZWRpcmVjdHMgdG8geW91ciBBcHBsaWNhaXRvbidzIC9sb2dpbiBlbmRwb2ludFxuICAgIEItPj5BOiBDYWxscyAvbG9naW5cbiAgICBBLS0-Pks6IEZldGNoZXMgZGF0YSB0byByZW5kZXIgZm9ybSBmaWVsZHMgYW5kIGVycm9yc1xuICAgIEItLT4-QTogRmlsbHMgb3V0IGZvcm1zIGFnYWluLCBjb3JyZWN0cyBlcnJvcnNcbiAgICBCLT4-SzogUE9TVHMgZGF0YSBhZ2FpbiAtIGFuZCBzbyBvbi4uLlxuICBlbmRcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJuZXV0cmFsIiwic2VxdWVuY2VEaWFncmFtIjp7ImRpYWdyYW1NYXJnaW5YIjoxNSwiZGlhZ3JhbU1hcmdpblkiOjE1LCJib3hUZXh0TWFyZ2luIjowLCJub3RlTWFyZ2luIjoxNSwibWVzc2FnZU1hcmdpbiI6NDUsIm1pcnJvckFjdG9ycyI6dHJ1ZX19fQ"}),Object(r.b)("img",Object(i.a)({parentName:"a"},{src:"https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gIHBhcnRpY2lwYW50IEIgYXMgQnJvd3NlclxuICBwYXJ0aWNpcGFudCBLIGFzIE9SWSBLcmF0b3NcbiAgcGFydGljaXBhbnQgQSBhcyBZb3VyIEFwcGxpY2F0aW9uXG5cblxuICBCLT4-SzogSW5pdGlhdGUgTG9naW5cbiAgSy0-PkI6IFJlZGlyZWN0cyB0byB5b3VyIEFwcGxpY2F0aW9uJ3MgL2xvZ2luIGVuZHBvaW50XG4gIEItPj5BOiBDYWxscyAvbG9naW5cbiAgQS0tPj5LOiBGZXRjaGVzIGRhdGEgdG8gcmVuZGVyIGZvcm1zIGV0Y1xuICBCLS0-PkE6IEZpbGxzIG91dCBmb3JtcywgY2xpY2tzIGUuZy4gXCJTdWJtaXQgTG9naW5cIlxuICBCLT4-SzogUE9TVHMgZGF0YSB0b1xuICBLLS0-Pks6IFByb2Nlc3NlcyBMb2dpbiBJbmZvXG5cbiAgYWx0IExvZ2luIGRhdGEgdmFsaWRcbiAgICBLLS0-PkI6IFNldHMgc2Vzc2lvbiBjb29raWVcbiAgICBLLT4-QjogUmVkaXJlY3RzIHRvIGUuZy4gRGFzaGJvYXJkXG4gIGVsc2UgTG9naW4gZGF0YSBpbnZhbGlkXG4gICAgSy0tPj5COiBSZWRpcmVjdHMgdG8geW91ciBBcHBsaWNhaXRvbidzIC9sb2dpbiBlbmRwb2ludFxuICAgIEItPj5BOiBDYWxscyAvbG9naW5cbiAgICBBLS0-Pks6IEZldGNoZXMgZGF0YSB0byByZW5kZXIgZm9ybSBmaWVsZHMgYW5kIGVycm9yc1xuICAgIEItLT4-QTogRmlsbHMgb3V0IGZvcm1zIGFnYWluLCBjb3JyZWN0cyBlcnJvcnNcbiAgICBCLT4-SzogUE9TVHMgZGF0YSBhZ2FpbiAtIGFuZCBzbyBvbi4uLlxuICBlbmRcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJuZXV0cmFsIiwic2VxdWVuY2VEaWFncmFtIjp7ImRpYWdyYW1NYXJnaW5YIjoxNSwiZGlhZ3JhbU1hcmdpblkiOjE1LCJib3hUZXh0TWFyZ2luIjowLCJub3RlTWFyZ2luIjoxNSwibWVzc2FnZU1hcmdpbiI6NDUsIm1pcnJvckFjdG9ycyI6dHJ1ZX19fQ",alt:"Abstract Login and Registration User Flow"})))),Object(r.b)("p",null,"The exact data being fetched and the step ",Object(r.b)("em",{parentName:"p"},'"Processes Login / Registration\nInfo"')," depend, of course, on the actual Strategy being used. But it is important\nto understand that ",Object(r.b)("strong",{parentName:"p"},'"Your Application"'),' is responsible for rendering the\nactual Login and Registration HTML Forms. You can of course implement one app\nfor rendering all the Login, Registration, ... screens, and another app (think\n"Service Oriented Architecture", "Micro-Services" or "Service Mesh") is\nresponsible for rendering your Dashboards, Management Screens, and so on.'),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},'It is RECOMMENDED to put all applications (or "services"), including ORY Kratos,\nbehind a common API Gateway or Reverse Proxy. This greatly reduces the amount of\nwork you have to do to get all the Cookies working properly. We RECOMMEND using\n',Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"http://github.com/ory/oathkeeper"}),"ORY Oathkeeper")," for this as it integrates\nbest with the ORY Ecosystem and because all of our examples use ORY Oathkeeper.\nYou MAY of course use any other reverse proxy (Envoy, AWS API Gateway,\nAmbassador, Nginx, Kong, ...), but we do not have examples or guides for those\nat this time."))),Object(r.b)("h3",{id:"code"},"Code"),Object(r.b)("p",null,"Because Login and Registration are so similar, we can use one common piece of\ncode to cover both. A functioning example of the code and approach used here can\nbe found on\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ory/kratos-selfservice-ui-node"}),"github.com/ory/kratos-selfservice-ui-node"),"."),Object(r.b)("p",null,"The code example used here is universal and does not use an SDK because we want\nyou to understand the fundamentals of how this flow works."),Object(r.b)("h4",{id:"server-side-route"},"Server-side route"),Object(r.b)("p",null,"While this example assumes a Server-Side Application, a Client-Side (e.g.\nReactJS) Application would work the same, but use ORY Kratos' Public API\ninstead."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"// Uses the ORY Kratos NodeJS SDK - for more SDKs check:\n//\n//  https://www.ory.sh/kratos/docs/sdk/index\nconst { AdminApi } = require('@oryd/kratos-client');\n\n// The browser config key is used to redirect the user. It reflects where ORY Kratos' Public API\n// is accessible from. Here, we're assuming traffic going to `http://example.org/.ory/kratos/public/`\n// will be forwarded to ORY Kratos' Public API.\nconst kratosBrowserUrl = 'http://example.org/.ory/kratos/public/';\n\n// Initializes the SDK with ORY Kratos' Admin API.\nconst adminEndpoint = new AdminApi('https://ory-kratos-admin.example-org.vpc/');\n\n// The parameter \"flow\" can be \"login\" and \"registration\".\n// You would register the two routes in express js like this:\n//\n//  app.get('/auth/registration', authHandler('registration'))\n//  app.get('/auth/login', authHandler('login'))\n//\nexport const authHandler = (flow) => (req, res, next) => {\n  // The request ID is used to identify the login and registraion request and\n  // return data like the csrf_token and so on.\n  const request = req.query.request;\n  if (!request) {\n    console.log(`No request found in URL, initializing ${flow} flow.`);\n    res.redirect(`${kratosBrowserUrl}/self-service/browser/${flow}`);\n    return;\n  }\n\n  const authRequest =\n    type === 'login'\n      ? adminEndpoint.getSelfServiceBrowserLoginRequest(request)\n      : adminEndpoint.getSelfServiceBrowserRegistrationRequest(request);\n\n  authRequest.then(({ body, response }) => {\n    if (response.statusCode !== 200) {\n      res.redirect(\n        `${config.kratos.browser}/self-service/browser/flows/${type}`\n      );\n      return;\n    }\n\n    // \"body\" contains all the request data for this Registration request.\n    // You can process that data here, if you want.\n\n    // only show the form section that is \"active\" to avoid user confusion.\n    let password = body.methods.password.config;\n    let oidc = body.methods.oidc.config;\n    switch (body.active) {\n      case 'password':\n        oidc = undefined; // if password is active hide this\n        break;\n      case 'oidc':\n        password = undefined; // if oidc is active hide this\n        break;\n    }\n\n    // Lastly, you probably want to render the data using a view (e.g. Jade Template):\n    res.render(flow, { oidc, password });\n  });\n  // Handle errors using ExpressJS' next functionality:\n  //\n  //    .catch(next)\n};\n")),Object(r.b)("h4",{id:"views"},"Views"),Object(r.b)("p",null,"Your views can be rather simple, as ORY Kratos provides you with all the\ninformation you need for rendering the forms. The following example illustrates\na generic form generator (we use handlebars here) that works with ORY Kratos:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-handlebars",metastring:'name="views/partials/form.hbs"',name:'"views/partials/form.hbs"'}),'<form action="{{form.action}}" method="{{form.method}}">\n    {{~#each form.errors~}}\n        \x3c!-- global form validation errors --\x3e\n        <div class="error">{{message}}</div>\n    {{~/each~}}\n\n    {{#each form.fields}}\n        {{~#each errors~}}\n            \x3c!-- validation errors for this specific field --\x3e\n            <div class="error">{{message}}</div>\n        {{~/each~}}\n        <input name="{{name}}" type="{{type}}" value="{{value}}" {{#if disabled}}disabled{{/if}}>\n    {{/each}}\n\n    <button type="submit">Register</button>\n\n    \x3c!--\n        This example also works for the login screen:\n\n            <button type="submit">Sign in</button>\n    --\x3e\n</form>\n')),Object(r.b)("p",null,'In your main "Login" or "Sign Up" view you would then consume this template for\nall the methods you want to support:'),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-handlebars",metastring:'name="views/login_or_signup.hbs"',name:'"views/login_or_signup.hbs"'}),"\x3c!-- Username / Email and Password login / sign up form: --\x3e\n{{#if password}}\n    {{> form form=password}}\n{{/if}}\n\n\x3c!-- Social sign in/up form: --\x3e\n{{#if oidc}}\n    {{> form form=oidc}}\n{{/if}}\n\n\x3c!-- ... form: --\x3e\n\x3c!-- ... --\x3e\n")),Object(r.b)("p",null,"For details on payloads and potential HTML snippets consult the individual\nSelf-Service Strategies for:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/kratos/docs/self-service/flows/user-login-user-registration/username-email-password"}),"Username and Password Strategy")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/kratos/docs/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2"}),"Social Sign In Strategy"))),Object(r.b)("h3",{id:"server-side-browser-applications"},"Server-Side Browser Applications"),Object(r.b)("p",null,"Let's take a look at the concrete network topologies, calls, and payloads. Here,\nwe're assuming that you're running a server-side browser application (written in\ne.g. PHP, Java, NodeJS) to render the login and registration screen on the\nserver and make all API calls from that server code. The counterpart to this\nwould be a client-side browser application (written in e.g. Vanilla JavaScript,\nJQuery, ReactJS, AngularJS, ...) that uses AJAX requests to fetch data. For\nthese type of applications, read this section first and go to section\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"#client-side-browser-applications"}),"Client-Side Browser Applications")," next."),Object(r.b)("h4",{id:"network-architecture"},"Network Architecture"),Object(r.b)("p",null,"We recommend checking out the\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/quickstart#network-architecture"}),"Quickstart Network Architecture")," for\na high-level, exemplary, overview of the network. In summary:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The SecureApp (your application) is exposed at ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"http://127.0.0.1:4455"}),"http://127.0.0.1:4455")," and\nproxies requests matching path ",Object(r.b)("inlineCode",{parentName:"li"},"./ory/kratos/public/*")," to ORY Krato's Public\nAPI Port."),Object(r.b)("li",{parentName:"ol"},"ORY Kratos exposes (for debugging only!!) the Public API at\n",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"http://127.0.0.1:4433"}),"http://127.0.0.1:4433")," and Admin API at ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"http://127.0.0.1:4434"}),"http://127.0.0.1:4434"),"."),Object(r.b)("li",{parentName:"ol"},'Within the "intranet" or "private network", ORY Kratos is exposed at\n',Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"http://kratos:4433"}),"http://kratos:4433")," and ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"http://kratos:4434"}),"http://kratos:4434"),". These URLs are be used by the\nSecureApp to communicate with ORY Kratos.")),Object(r.b)("p",null,"Keep in mind that his architecture is just one of many possible network\narchitectures. It is however one of the simplest as well and it works locally.\nFor production deployments you would probably use an Reverse Proxy such as\nNginx, Kong, Envoy, ORY Oathkeeper, or others."),Object(r.b)("h4",{id:"user-login-and-user-registration-process-sequence"},"User Login and User Registration Process Sequence"),Object(r.b)("p",null,"The Login and Registration User Flow is composed of several high-level steps\nsummarized in this state diagram:"),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic3RhdGVEaWFncmFtXG4gIHMxOiBVc2VyIGJyb3dzZXMgYXBwXG4gIHMyOiBFeGVjdXRlIFwiQmVmb3JlIExvZ2luL1JlZ2lzdHJhdGlvbiBIb29rKHMpXCJcbiAgczM6IFVzZXIgSW50ZXJmYWNlIEFwcGxpY2F0aW9uIHJlbmRlcnMgXCJMb2dpbi9SZWdpc3RyYXRpb24gUmVxdWVzdFwiXG4gIHM0OiBFeGVjdXRlIFwiQWZ0ZXIgTG9naW4vUmVnaXN0cmF0aW9uIEhvb2socylcIlxuICBzNTogVXBkYXRlIFwiTG9naW4vUmVnaXN0cmF0aW9uIFJlcXVlc3RcIiB3aXRoIEVycm9yIENvbnRleHQocylcbiAgczY6IExvZ2luL1JlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsXG5cblxuXG5cdFsqXSAtLT4gczFcbiAgczEgLS0-IHMyIDogVXNlciBjbGlja3MgXCJMb2cgaW4gLyBTaWduIHVwXCJcbiAgczIgLS0-IEVycm9yIDogQSBob29rIGZhaWxzXG4gIHMyIC0tPiBzMyA6IFVzZXIgaXMgcmVkaXJlY3RlZCB0byBMb2dpbi9SZWdpc3RyYXRpb24gVUkgVVJMXG4gIHMzIC0tPiBzNCA6IFVzZXIgcHJvdmlkZXMgdmFsaWQgY3JlZGVudGlhbHMvcmVnaXN0cmF0aW9uIGRhdGFcbiAgczMgLS0-IHM1IDogVXNlciBwcm92aWRlcyBpbnZhbGlkIGNyZWRlbnRpYWxzL3JlZ2lzdHJhdGlvbiBkYXRhXG4gIHM1IC0tPiBzMyA6IFVzZXIgaXMgcmVkaXJlY3RlZCB0byBMb2dpbi9SZWdpc3RyYXRpb24gVUkgVVJMXG4gIHM0IC0tPiBFcnJvciA6IEEgSG9vayBmYWlsc1xuICBzNCAtLT4gczZcbiAgczYgLS0-IFsqXVxuXG4gIEVycm9yIC0tPiBbKl1cblxuXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ"}),Object(r.b)("img",Object(i.a)({parentName:"a"},{src:"https://mermaid.ink/img/eyJjb2RlIjoic3RhdGVEaWFncmFtXG4gIHMxOiBVc2VyIGJyb3dzZXMgYXBwXG4gIHMyOiBFeGVjdXRlIFwiQmVmb3JlIExvZ2luL1JlZ2lzdHJhdGlvbiBIb29rKHMpXCJcbiAgczM6IFVzZXIgSW50ZXJmYWNlIEFwcGxpY2F0aW9uIHJlbmRlcnMgXCJMb2dpbi9SZWdpc3RyYXRpb24gUmVxdWVzdFwiXG4gIHM0OiBFeGVjdXRlIFwiQWZ0ZXIgTG9naW4vUmVnaXN0cmF0aW9uIEhvb2socylcIlxuICBzNTogVXBkYXRlIFwiTG9naW4vUmVnaXN0cmF0aW9uIFJlcXVlc3RcIiB3aXRoIEVycm9yIENvbnRleHQocylcbiAgczY6IExvZ2luL1JlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsXG5cblxuXG5cdFsqXSAtLT4gczFcbiAgczEgLS0-IHMyIDogVXNlciBjbGlja3MgXCJMb2cgaW4gLyBTaWduIHVwXCJcbiAgczIgLS0-IEVycm9yIDogQSBob29rIGZhaWxzXG4gIHMyIC0tPiBzMyA6IFVzZXIgaXMgcmVkaXJlY3RlZCB0byBMb2dpbi9SZWdpc3RyYXRpb24gVUkgVVJMXG4gIHMzIC0tPiBzNCA6IFVzZXIgcHJvdmlkZXMgdmFsaWQgY3JlZGVudGlhbHMvcmVnaXN0cmF0aW9uIGRhdGFcbiAgczMgLS0-IHM1IDogVXNlciBwcm92aWRlcyBpbnZhbGlkIGNyZWRlbnRpYWxzL3JlZ2lzdHJhdGlvbiBkYXRhXG4gIHM1IC0tPiBzMyA6IFVzZXIgaXMgcmVkaXJlY3RlZCB0byBMb2dpbi9SZWdpc3RyYXRpb24gVUkgVVJMXG4gIHM0IC0tPiBFcnJvciA6IEEgSG9vayBmYWlsc1xuICBzNCAtLT4gczZcbiAgczYgLS0-IFsqXVxuXG4gIEVycm9yIC0tPiBbKl1cblxuXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ",alt:"User Login and Registration State Machine"})))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("strong",{parentName:"li"},"Login/Registration User Flow")," is initiated because a link was clicked\nor an action was performed that requires an active user session."),Object(r.b)("li",{parentName:"ol"},"ORY Kratos executes Jobs defined in the ",Object(r.b)("strong",{parentName:"li"},"Before Login/Registration\nWorkflow"),". If a failure occurs, the whole flow is aborted."),Object(r.b)("li",{parentName:"ol"},"The user's browser is redirected to\n",Object(r.b)("inlineCode",{parentName:"li"},"http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/requests/(login|registration)"),"\n(the notation ",Object(r.b)("inlineCode",{parentName:"li"},"(login|registration)")," expresses the two possibilities of\n",Object(r.b)("inlineCode",{parentName:"li"},"../self-service/browser/flows/requests/login")," or\n",Object(r.b)("inlineCode",{parentName:"li"},"../self-service/browser/flows/requests/registration"),")."),Object(r.b)("li",{parentName:"ol"},"ORY Kratos does some internal processing (e.g. checks if a session cookie is\nset, generates payloads for form fields, sets CSRF token, ...) and redirects\nthe user's browser to the Login UI URL which is defined using the\n",Object(r.b)("inlineCode",{parentName:"li"},"urls.login_ui")," (or ",Object(r.b)("inlineCode",{parentName:"li"},"urls.registration_ui"),") config or ",Object(r.b)("inlineCode",{parentName:"li"},"URLS_LOGIN_UI")," (or\n",Object(r.b)("inlineCode",{parentName:"li"},"URLS_REGISTRATION_UI"),") environment variable, which is set to the ui\nendpoints - for example ",Object(r.b)("inlineCode",{parentName:"li"},"https://127.0.0.1:4455/auth/login")," and\n",Object(r.b)("inlineCode",{parentName:"li"},"https://127.0.0.1:4455/auth/registration"),"). The user's browser is thus\nredirected to\n",Object(r.b)("inlineCode",{parentName:"li"},"https://127.0.0.1:4455/auth/(login|registration)?request=abcde"),". The\n",Object(r.b)("inlineCode",{parentName:"li"},"request")," query parameter includes a unique ID which will be used to fetch\ncontextual data for this login request."),Object(r.b)("li",{parentName:"ol"},"Your Server-Side Application makes a ",Object(r.b)("inlineCode",{parentName:"li"},"GET")," request to\n",Object(r.b)("inlineCode",{parentName:"li"},"http://kratos:4434/self-service/browser/flows/requests/(login|registration)?request=abcde"),".\nORY Kratos responds with a JSON Payload that contains data (form fields,\nerror messages, ...) for all enabled User Login Strategies:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json5"}),"{\n  id: 'abcde',\n  methods: {\n    password: { method: 'password', config: { action: '...', fields: [] } },\n    oidc: { method: 'oidc', config: { action: '...', fields: [] } },\n  },\n}\n"))),Object(r.b)("li",{parentName:"ol"},'Your Server-Side applications renders the data however you see fit. The User\ninteracts with it an completes the Login by clicking, for example, the\n"Login", the "Login with Google", ... button.'),Object(r.b)("li",{parentName:"ol"},"The User's browser makes a request to one of ORY Kratos' Strategy URLs (e.g.\n",Object(r.b)("inlineCode",{parentName:"li"},"http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/strategies/password/(login|registration)"),"\nor\n",Object(r.b)("inlineCode",{parentName:"li"},"https://127.0.0.1:4455/.ory/kratos/public/self-service/browser/strategies/oidc/auth/abcde"),").\nORY Kratos validates the User's credentials (when logging in - e.g. Username\nand Password, by performing an OpenID Connect flow, ...) or the registration\nform data (when signing up - e.g. is the E-Mail address valid, is the person\nat least 21 years old, ...):",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If the credentials / form data is invalid, the Login Request's JSON Payload\nis updated - for example with",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json5"}),"{\n  id: 'abcde',\n  methods: {\n    oidc: {\n      method: 'oidc',\n      config: {\n        /* ... */\n      },\n    },\n    password: {\n      method: 'password',\n      config: {\n        /* ... */\n        errors: [\n          {\n            message: 'The provided credentials are invalid. Check for spelling mistakes in your password or username, email address, or phone number.',\n          },\n        ],\n      },\n    },\n  },\n}\n")),"and the user's Browser is redirected back to the Login UI:\n",Object(r.b)("inlineCode",{parentName:"li"},"https://127.0.0.1:4455/auth/(login|registration)?request=abcde"),"."),Object(r.b)("li",{parentName:"ul"},"If credentials / data is valid, ORY Kratos proceeds with the next step."),Object(r.b)("li",{parentName:"ul"},"If the flow is a registration request and the registration data is valid,\nthe identity is created."))),Object(r.b)("li",{parentName:"ol"},"ORY Kratos executes hooks defined in the ",Object(r.b)("strong",{parentName:"li"},"After Login/Registration Hooks"),".\nIf a failure occurs, the whole flow is aborted."),Object(r.b)("li",{parentName:"ol"},"The client receives the expected response. For browsers, this is a HTTP\nRedirection, for API clients it will be a JSON response containing the\nsession and/or identity. For more information on this topic check\n",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/kratos/docs/concepts/selfservice-flow-completion"}),"Self-Service Flow Completion"),".")),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gIHBhcnRpY2lwYW50IEIgYXMgQnJvd3NlclxuICBwYXJ0aWNpcGFudCBBIGFzIFlvdXIgU2VydmVyLVNpZGUgQXBwbGljYXRpb25cbiAgcGFydGljaXBhbnQgS1AgYXMgT1JZIEtyYXRvcyBQdWJsaWMgQVBJXG4gIHBhcnRpY2lwYW50IEtBIGFzIE9SWSBLcmF0b3MgQWRtaW4gQVBJXG5cbiAgQi0-PitBOiBHRVQgLy5vcnkva3JhdG9zL3B1YmxpYy9zZWxmLXNlcnZpY2UvYnJvd3Nlci9mbG93cy8obG9naW58cmVnaXN0cmF0aW9uKVxuICBBLT4-K0tQOiBHRVQgL3NlbGYtc2VydmljZS9icm93c2VyL2Zsb3dzL2xvZ2luKGxvZ2lufHJlZ2lzdHJhdGlvbilcbiAgS1AtLT4-S1A6IEV4ZWN1dGUgSG9va3MgZGVmaW5lZCBpbiBcIkJlZm9yZSBMb2dpbi9SZWdpc3RyYXRpb25cIlxuICBLUC0tPj4tQTogSFRUUCAzMDIgRm91bmQgL2F1dGgvKGxvZ2lufHJlZ2lzdHJhdGlvbik_cmVxdWVzdD1hYmNkZVxuICBBLS0-Pi1COiBIVFRQIDMwMiBGb3VuZCAvYXV0aC8obG9naW58cmVnaXN0cmF0aW9uKT9yZXF1ZXN0PWFiY2RlXG5cbiAgQi0-PitBOiBHRVQgL2F1dGgvKGxvZ2lufHJlZ2lzdHJhdGlvbik_cmVxdWVzdD1hYmNkZVxuICBBLT4-K0tBOiBHRVQvc2VsZi1zZXJ2aWNlL2Jyb3dzZXIvZmxvd3MvcmVxdWVzdHMvKGxvZ2lufHJlZ2lzdHJhdGlvbik_cmVxdWVzdD1hYmNkZVxuICBLQS0-Pi1BOiBTZW5kcyBMb2dpbi9SZWdpc3RyYXRpb24gUmVxdWVzdCBKU09OIFBheWxvYWRcbiAgTm90ZSBvdmVyIEEsS0E6ICB7XCJtZXRob2RzXCI6e1wicGFzc3dvcmRcIjouLi4sXCJvaWRjXCI6Li59fVxuICBBLS0-PkE6IEdlbmVyYXRlIGFuZCByZW5kZXIgSFRNTFxuICBBLS0-Pi1COiBSZXR1cm4gSFRNTCAoRm9ybSwgLi4uKVxuXG4gIEItLT4-QjogRmlsbCBvdXQgSFRNTFxuXG4gIEItPj4rS1A6IFBPU1QgSFRNTCBGb3JtXG4gIEtQLS0-PktQOiBDaGVja3MgbG9naW4gLyByZWdpc3RyYXRpb24gZGF0YVxuXG5cbiAgYWx0IExvZ2luIGRhdGEgaXMgdmFsaWRcbiAgICBLUC0tPj4tS1A6IEV4ZWN1dGUgSm9icyBkZWZpbmVkIGluIFwiQWZ0ZXIgTG9naW4gV29ya2Zsb3cocylcIlxuICAgIEtQLS0-PkE6IEhUVFAgMzAyIEZvdW5kIC9kYXNoYm9hcmRcbiAgICBOb3RlIG92ZXIgS1AsQjogU2V0LUNvb2tpZTogYXV0aF9zZXNzaW9uPS4uLlxuICAgIEItPj4rQTogR0VUIC9kYXNoYm9hcmRcbiAgICBBLS0-S0E6IFZhbGlkYXRlcyBTZXNzaW9uIENvb2tpZVxuICAgIEEtPj4tQjogU2VuZCBEYXNoYm9hcmQgUmVzcG9uc2VcbiAgZWxzZSBMb2dpbiBkYXRhIGlzIGludmFsaWRcbiAgICBOb3RlIG92ZXIgS1AsQjogVXNlciByZXRyaWVzIGxvZ2luIC8gcmVnaXN0cmF0aW9uXG4gICAgS1AtLT4-QjogSFRUUCAzMDIgRm91bmQgL2F1dGgvKGxvZ2lufHJlZ2lzdHJhdGlvbik_cmVxdWVzdD1hYmNkZVxuICBlbmRcbiAgIiwibWVybWFpZCI6eyJ0aGVtZSI6Im5ldXRyYWwiLCJzZXF1ZW5jZURpYWdyYW0iOnsiZGlhZ3JhbU1hcmdpblgiOjE1LCJkaWFncmFtTWFyZ2luWSI6MTUsImJveFRleHRNYXJnaW4iOjEsIm5vdGVNYXJnaW4iOjEwLCJtZXNzYWdlTWFyZ2luIjo1NSwibWlycm9yQWN0b3JzIjp0cnVlfX0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9"}),Object(r.b)("img",Object(i.a)({parentName:"a"},{src:"https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gIHBhcnRpY2lwYW50IEIgYXMgQnJvd3NlclxuICBwYXJ0aWNpcGFudCBBIGFzIFlvdXIgU2VydmVyLVNpZGUgQXBwbGljYXRpb25cbiAgcGFydGljaXBhbnQgS1AgYXMgT1JZIEtyYXRvcyBQdWJsaWMgQVBJXG4gIHBhcnRpY2lwYW50IEtBIGFzIE9SWSBLcmF0b3MgQWRtaW4gQVBJXG5cbiAgQi0-PitBOiBHRVQgLy5vcnkva3JhdG9zL3B1YmxpYy9zZWxmLXNlcnZpY2UvYnJvd3Nlci9mbG93cy8obG9naW58cmVnaXN0cmF0aW9uKVxuICBBLT4-K0tQOiBHRVQgL3NlbGYtc2VydmljZS9icm93c2VyL2Zsb3dzL2xvZ2luKGxvZ2lufHJlZ2lzdHJhdGlvbilcbiAgS1AtLT4-S1A6IEV4ZWN1dGUgSG9va3MgZGVmaW5lZCBpbiBcIkJlZm9yZSBMb2dpbi9SZWdpc3RyYXRpb25cIlxuICBLUC0tPj4tQTogSFRUUCAzMDIgRm91bmQgL2F1dGgvKGxvZ2lufHJlZ2lzdHJhdGlvbik_cmVxdWVzdD1hYmNkZVxuICBBLS0-Pi1COiBIVFRQIDMwMiBGb3VuZCAvYXV0aC8obG9naW58cmVnaXN0cmF0aW9uKT9yZXF1ZXN0PWFiY2RlXG5cbiAgQi0-PitBOiBHRVQgL2F1dGgvKGxvZ2lufHJlZ2lzdHJhdGlvbik_cmVxdWVzdD1hYmNkZVxuICBBLT4-K0tBOiBHRVQvc2VsZi1zZXJ2aWNlL2Jyb3dzZXIvZmxvd3MvcmVxdWVzdHMvKGxvZ2lufHJlZ2lzdHJhdGlvbik_cmVxdWVzdD1hYmNkZVxuICBLQS0-Pi1BOiBTZW5kcyBMb2dpbi9SZWdpc3RyYXRpb24gUmVxdWVzdCBKU09OIFBheWxvYWRcbiAgTm90ZSBvdmVyIEEsS0E6ICB7XCJtZXRob2RzXCI6e1wicGFzc3dvcmRcIjouLi4sXCJvaWRjXCI6Li59fVxuICBBLS0-PkE6IEdlbmVyYXRlIGFuZCByZW5kZXIgSFRNTFxuICBBLS0-Pi1COiBSZXR1cm4gSFRNTCAoRm9ybSwgLi4uKVxuXG4gIEItLT4-QjogRmlsbCBvdXQgSFRNTFxuXG4gIEItPj4rS1A6IFBPU1QgSFRNTCBGb3JtXG4gIEtQLS0-PktQOiBDaGVja3MgbG9naW4gLyByZWdpc3RyYXRpb24gZGF0YVxuXG5cbiAgYWx0IExvZ2luIGRhdGEgaXMgdmFsaWRcbiAgICBLUC0tPj4tS1A6IEV4ZWN1dGUgSm9icyBkZWZpbmVkIGluIFwiQWZ0ZXIgTG9naW4gV29ya2Zsb3cocylcIlxuICAgIEtQLS0-PkE6IEhUVFAgMzAyIEZvdW5kIC9kYXNoYm9hcmRcbiAgICBOb3RlIG92ZXIgS1AsQjogU2V0LUNvb2tpZTogYXV0aF9zZXNzaW9uPS4uLlxuICAgIEItPj4rQTogR0VUIC9kYXNoYm9hcmRcbiAgICBBLS0-S0E6IFZhbGlkYXRlcyBTZXNzaW9uIENvb2tpZVxuICAgIEEtPj4tQjogU2VuZCBEYXNoYm9hcmQgUmVzcG9uc2VcbiAgZWxzZSBMb2dpbiBkYXRhIGlzIGludmFsaWRcbiAgICBOb3RlIG92ZXIgS1AsQjogVXNlciByZXRyaWVzIGxvZ2luIC8gcmVnaXN0cmF0aW9uXG4gICAgS1AtLT4-QjogSFRUUCAzMDIgRm91bmQgL2F1dGgvKGxvZ2lufHJlZ2lzdHJhdGlvbik_cmVxdWVzdD1hYmNkZVxuICBlbmRcbiAgIiwibWVybWFpZCI6eyJ0aGVtZSI6Im5ldXRyYWwiLCJzZXF1ZW5jZURpYWdyYW0iOnsiZGlhZ3JhbU1hcmdpblgiOjE1LCJkaWFncmFtTWFyZ2luWSI6MTUsImJveFRleHRNYXJnaW4iOjEsIm5vdGVNYXJnaW4iOjEwLCJtZXNzYWdlTWFyZ2luIjo1NSwibWlycm9yQWN0b3JzIjp0cnVlfX0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",alt:"User Login Sequence Diagram for Server-Side Applications"})))),Object(r.b)("h3",{id:"client-side-browser-applications"},"Client-Side Browser Applications"),Object(r.b)("p",null,"Because Client-Side Browser Applications do not have access to ORY Kratos' Admin\nAPI, they must use the ORY Kratos Public API instead. The flow for a Client-Side\nBrowser Application is almost the exact same as the one for Server-Side\nApplications, with the small difference that\n",Object(r.b)("inlineCode",{parentName:"p"},"https://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/requests/login?request=abcde"),"\nwould be called via AJAX instead of making a request to\n",Object(r.b)("inlineCode",{parentName:"p"},"https://kratos:4434/self-service/browser/flows/requests/login?request=abcde"),"."),Object(r.b)("p",null,"To prevent brute force, guessing, session injection, and other attacks, it is\nrequired that cookies are working for this endpoint. The cookie set in the\ninitial HTTP request made to\n",Object(r.b)("inlineCode",{parentName:"p"},"https://127.0.0.1:4455/.ory/kratos/public/self-service/browser/login")," MUST be\nset and available when calling this endpoint!"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The initialization request\n(",Object(r.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/(login|registration)"),")\n",Object(r.b)("strong",{parentName:"p"},"cannot")," be made via AJAX or API requests. You ",Object(r.b)("strong",{parentName:"p"},"must")," open that URL in the\nuser's browser using e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"window.open")," ",Object(r.b)("inlineCode",{parentName:"p"},"location.href")," or plain and simple old\n",Object(r.b)("inlineCode",{parentName:"p"},"<a href=...>"),"."))),Object(r.b)("h2",{id:"self-service-user-login-and-user-registration-for-api-clients"},"Self-Service User Login and User Registration for API Clients"),Object(r.b)("p",null,"Will be addressed in a future release."),Object(r.b)("h2",{id:"hooks"},"Hooks"),Object(r.b)("p",null,"ORY Kratos allows you to configure hooks that run before and after a Login or\nRegistration Request is generated. This may be helpful if you'd like to restrict\nlogins to IPs coming from your internal network or other logic."),Object(r.b)("p",null,"For more information about hooks please read the\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/self-service/hooks/index"}),"Hook Documentation"),"."))}b.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},d=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(n),g=i,u=d["".concat(o,".").concat(g)]||d[g]||p[g]||r;return n?a.a.createElement(u,s({ref:t},l,{components:n})):a.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);