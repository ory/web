(window.webpackJsonp=window.webpackJsonp||[]).push([[367],{433:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var o=n(3),a=n(8),i=(n(0),n(551)),r={id:"hooks",title:"Hooks"},s={unversionedId:"self-service/hooks",id:"version-v0.6/self-service/hooks",isDocsHomePage:!1,title:"Hooks",description:"Hooks execute logic after a flow (login, registration, settings, ...):",source:"@site/versioned_docs/version-v0.6/self-service/hooks.mdx",sourceDirName:"self-service",slug:"/self-service/hooks",permalink:"/kratos/docs/self-service/hooks",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/self-service/hooks.mdx",version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619690398,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"hooks",title:"Hooks"},sidebar:"version-v0.6/docs",previous:{title:"MFA / 2FA",permalink:"/kratos/docs/self-service/flows/2fa-mfa-multi-factor-authentication"},next:{title:"Managing Users and Identities",permalink:"/kratos/docs/admin/managing-users-identities"}},l=[{value:"All flows",id:"all-flows",children:[{value:"Web-Hooks",id:"web-hooks",children:[]}]},{value:"Login",id:"login",children:[{value:"Before",id:"before",children:[]},{value:"After",id:"after",children:[]}]},{value:"Registration",id:"registration",children:[{value:"Before",id:"before-1",children:[]},{value:"After",id:"after-1",children:[]},{value:"Registration Flow via Browser",id:"registration-flow-via-browser",children:[]},{value:"Registration Flow via API",id:"registration-flow-via-api",children:[]}]},{value:"Settings",id:"settings",children:[{value:"After",id:"after-2",children:[]}]}],c={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Hooks execute logic after a flow (login, registration, settings, ...):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Before login:")," is executed when a login flow starts."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"After login:")," is executed after a login was successful."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Before registration:")," is executed when a registration flow starts."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"After registration:")," is executed when a registration was successful:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Before persisting:")," runs before the identity is saved in the database."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"After persisting:")," runs after the identity was saved in the database."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"After recovery:")," is executed after a password has been successfully\nrecovered."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"After settings:")," is executed when a settings was successful:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Before persisting:")," runs before the identity is saved in the database."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"After persisting:")," runs after the identity was saved in the database."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"After verification:")," is executed when the verification of an account was\nsuccessful.")),Object(i.b)("p",null,"There are hooks, which can be configured only for a particular flow (login,\nregistration, settings, ...) method (password, oidc, profile) and hooks, which\ncan be configured for all methods of any flow."),Object(i.b)("p",null,"To configure hooks for all methods of a particular flow, following pattern must\nbe used:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml',title:'"path/to/my/kratos.config.yml'},"selfservice:\n  flows:\n    <login|registration|recovery|...>:\n      <before|after>:\n        hooks:\n          - hook: <hook 1 name>\n            <hook 1 specific configuration>\n          - hook: <hook 2 name>\n            <hook 2 specific configuration>\n          ...\n")),Object(i.b)("p",null,"Following pattern must be followed to configure hooks for a particular flow\nmethod:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml',title:'"path/to/my/kratos.config.yml'},"selfservice:\n  flows:\n    <login|registration|recovery|...>:\n      <before or after>:\n        <particular method>:\n          hooks:\n            - hook: <hook 1 name>\n              <hook 1 specific configuration>\n            - hook: <hook 2 name>\n              <hook 2 specific configuration>\n            ...\n")),Object(i.b)("p",null,"Hooks configured on a particular method level always override the hooks\nconfigured on the flow level. So given the following example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml',title:'"path/to/my/kratos.config.yml'},"selfservice:\n  flows:\n    login:\n      before:\n        hooks:\n          - hook: hook_1\n            # hook_1 specific configuration\n      after:\n        hooks:\n          - hook: hook_2\n            # hook_2 specific configuration\n        password:\n          hooks:\n            - hook: hook_3\n              # hook_3 specific configuration\n        # ...\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"hook_1")," is always run when the flow is started. On the finalization of the\nflow, ",Object(i.b)("inlineCode",{parentName:"p"},"hook_2")," is not run for the ",Object(i.b)("inlineCode",{parentName:"p"},"password")," method, but for the ",Object(i.b)("inlineCode",{parentName:"p"},"oidc")," method\n(for example). If the ",Object(i.b)("inlineCode",{parentName:"p"},"password")," method is used, then ",Object(i.b)("inlineCode",{parentName:"p"},"hook_3")," will run."),Object(i.b)("h2",{id:"all-flows"},"All flows"),Object(i.b)("p",null,"Following hooks can be configured for all flows."),Object(i.b)("h3",{id:"web-hooks"},"Web-Hooks"),Object(i.b)("p",null,"Web-Hooks can be configured for every, but error and logout flow and can be\nconfigured on either the before/after level or at the level of a particular\nmethod. Support for Web-Hooks before execution of a method is currently\nsupported only for registration and login methods."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"As of today Web-Hooks cannot control the execution of the flow by\npatching/updating particular properties of flow specific object upon Web-Hook\ncompletion. It will however cancel the execution of the flow if the call to the\nWeb-Hook end point fails either due to a network error or if the end point\nresponses with an HTTP code > 300."))),Object(i.b)("p",null,"The configuration for a web-hook goes into the ",Object(i.b)("inlineCode",{parentName:"p"},"hooks")," property either on the\nflow before/after, or the method level and has the following structure:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-.yaml"},"  - hook: web_hook\n    config:\n      url: https://test.kratos.ory.sh/after_verification_hook\n      method: POST # GET, DELETE, etc\n      body: /link/to/my/jsonnet/file\n      auth:\n        type: <some-type>\n        config:\n          <type-specific-config>\n")),Object(i.b)("p",null,"The configuration section of a web-hook consists of"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"url")," - the url, the web-hook should call (mandatory)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"method")," - the HTTP method (GET, POST, ...), the web-hook should use\n(mandatory)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"body")," - path to a jsonnet template, used by the web-hook to render the\npayload to send (optional). This property is ignored for HTTP ",Object(i.b)("inlineCode",{parentName:"li"},"method"),"s, which\ndo not support sending of HTTP body payloads."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"auth")," - configuration of authentication and authorization mechanisms to be\nused by the web-hook")),Object(i.b)("p",null,"Web-Hooks bind the ",Object(i.b)("inlineCode",{parentName:"p"},"flow"),", as well as request headers (",Object(i.b)("inlineCode",{parentName:"p"},"request_headers"),"),\nrequest method (",Object(i.b)("inlineCode",{parentName:"p"},"request_method"),"), and the request url (",Object(i.b)("inlineCode",{parentName:"p"},"request_url"),") of the\nflow into the jsonnet template for all methods and execution paths (before and\nafter). For the ",Object(i.b)("inlineCode",{parentName:"p"},"after")," execution path of all flows, it binds the ",Object(i.b)("inlineCode",{parentName:"p"},"identity"),"\nobject into the jsonnet template as well. These objects are available through a\n",Object(i.b)("inlineCode",{parentName:"p"},"ctx")," object. E.g. to create a body looking like ",Object(i.b)("inlineCode",{parentName:"p"},"{ user_id: <some-id> }")," to be\nsend to the web hook end point, the jsonnet template would look like this:\n",Object(i.b)("inlineCode",{parentName:"p"},"function(ctx) { user_id: ctx.identity.id }")),Object(i.b)("h4",{id:"web-hook-authentication-and-authorization-mechanisms"},"Web-Hook Authentication and Authorization Mechanisms"),Object(i.b)("p",null,"For ",Object(i.b)("inlineCode",{parentName:"p"},"auth")," following mechanisms are supported:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Authentication via an Api Key. Type must be set to ",Object(i.b)("inlineCode",{parentName:"li"},"api_key"),"."),Object(i.b)("li",{parentName:"ul"},"Authentication via Basic Authentication. Type must be set to ",Object(i.b)("inlineCode",{parentName:"li"},"basic_auth"),".")),Object(i.b)("p",null,"For ",Object(i.b)("inlineCode",{parentName:"p"},"api_key")," the config looks as follows:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-.yaml"},"name: Some-Name\nvalue: The-Value-of-My-Key\nin: header # alternatively cookie\n")),Object(i.b)("p",null,"All properties are mandatory."),Object(i.b)("p",null,"For ",Object(i.b)("inlineCode",{parentName:"p"},"basic_auth")," the config looks as follows:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-.yaml"},"user: My-User\npassword: My-Pass-Value\n")),Object(i.b)("p",null,"All properties are mandatory."),Object(i.b)("h2",{id:"login"},"Login"),Object(i.b)("p",null,"Hooks running before or after successful user login are defined per Self-Service\nRegistration Method in ORY Kratos' configuration file."),Object(i.b)("h3",{id:"before"},"Before"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    login:\n      before:\n        hooks:\n          - hook: web_hook\n            # web-hook specific configuration\n")),Object(i.b)("h3",{id:"after"},"After"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    login:\n      after:\n        password:\n          hooks:\n            - hook: revoke_active_sessions\n")),Object(i.b)("h4",{id:"revoke_active_sessions"},Object(i.b)("inlineCode",{parentName:"h4"},"revoke_active_sessions")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"revoke_active_sessions")," will delete all active sessions for that user on\nsuccessful login:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    login:\n      after:\n        <method>:\n          hooks:\n            - hook: revoke_active_sessions\n              # can not be configured\n")),Object(i.b)("h2",{id:"registration"},"Registration"),Object(i.b)("p",null,"Hooks running before or after successful user registration are defined per\nSelf-Service Registration Method in ORY Kratos' configuration file."),Object(i.b)("h3",{id:"before-1"},"Before"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    registration:\n      before:\n        hooks:\n          - hook: web_hook\n            # web-hook specific configuration\n")),Object(i.b)("h3",{id:"after-1"},"After"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    registration:\n      after:\n        oidc:\n          hooks:\n            - hook: session\n        password:\n          hooks:\n            - hook: session\n")),Object(i.b)("h4",{id:"session"},Object(i.b)("inlineCode",{parentName:"h4"},"session")),Object(i.b)("p",null,"Adding the ",Object(i.b)("inlineCode",{parentName:"p"},"session")," hook signs the user immediately in once the account has\nbeen created. It runs after the identity has been saved to the database."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Using this job as part of your post-registration workflow makes your system\nvulnerable to\n",Object(i.b)("a",{parentName:"p",href:"/kratos/docs/concepts/security#account-enumeration-attacks"},"Account Enumeration Attacks"),"\nbecause a threat agent can distinguish between existing and non-existing\naccounts by checking if ",Object(i.b)("inlineCode",{parentName:"p"},"Set-Cookie")," was sent as part of the registration\nresponse."))),Object(i.b)("p",null,'To use this hook, you must first define one or more (for secret rotation)\nsecrets. You can either choose to use the "default" secrets or the more specific\n"cookie" secrets. The other required config is setting the hook in ',Object(i.b)("inlineCode",{parentName:"p"},"after")," work\nflows:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'},'secrets:\n  cookie:\n    - something-super-secret # The first entry will be used to sign and verify session cookies\n\n    # All other entries will be used to verify session cookies that were signed before "something-super-secret" became\n    # the current signing secret.\n    - old-session-secret\n    - older-session-secret\n    - ancient-session-secret\n\nselfservice:\n  flows:\n    registration:\n      after:\n        <method>:\n          hooks:\n            - hook: session\n              # can not be configured\n')),Object(i.b)("p",null,"Depending on the registration flow type the behavior changes."),Object(i.b)("h3",{id:"registration-flow-via-browser"},"Registration Flow via Browser"),Object(i.b)("p",null,"When performing a registration flow with a Browser, this hook sends a\n",Object(i.b)("inlineCode",{parentName:"p"},"Set-Cookie")," HTTP header which contains the session cookie."),Object(i.b)("p",null,"Therefore, the user is logged in immediately."),Object(i.b)("h3",{id:"registration-flow-via-api"},"Registration Flow via API"),Object(i.b)("p",null,"When performing a registration flow with an API client (e.g. mobile apo), this\nhook creates a session and returns the session token and the session itself in\nthe response body as application/json:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "session": {\n    "id": "..."\n    // ...\n  },\n  "session_token": "...",\n  "identity": {\n    "id": "..."\n    // ...\n  }\n}\n')),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Because the HTTP reply is handled by the hook itself, no other hooks can be\nexecuted because the HTTP reply can not be modified further (e.g. HTTP Status\nCode was already sent as 200 and cannot be changed to 301). You must ensure that\nthe session hook is the last hook in your configuration!"))),Object(i.b)("h2",{id:"settings"},"Settings"),Object(i.b)("p",null,"Hooks running after successfully updating user settings and are defined per\nSelf-Service Settings Method in Ory Kratos' configuration file."),Object(i.b)("h3",{id:"after-2"},"After"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    settings:\n      after:\n")),Object(i.b)("p",null,"Only Web-Hooks hooks are available for this flow at the moment."))}b.isMDXComponent=!0},551:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=o,f=p["".concat(r,".").concat(d)]||p[d]||h[d]||i;return n?a.a.createElement(f,s(s({ref:t},c),{},{components:n})):a.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);