(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[36900],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(l,".").concat(u)]||d[u]||h[u]||i;return n?o.createElement(f,r(r({ref:t},p),{},{components:n})):o.createElement(f,r({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91981:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(22122),a=n(19756),i=(n(67294),n(3905)),r=["components"],s={id:"hooks",title:"Hooks"},l=void 0,c={unversionedId:"self-service/hooks",id:"version-v0.7/self-service/hooks",isDocsHomePage:!1,title:"Hooks",description:"Hooks execute logic after a flow (login, registration, settings, ...):",source:"@site/versioned_docs/version-v0.7/self-service/hooks.mdx",sourceDirName:"self-service",slug:"/self-service/hooks",permalink:"/kratos/docs/self-service/hooks",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.7/self-service/hooks.mdx",version:"v0.7",lastUpdatedBy:"aeneasr",lastUpdatedAt:1626195872,formattedLastUpdatedAt:"7/13/2021",frontMatter:{id:"hooks",title:"Hooks"},sidebar:"version-v0.7/docs",previous:{title:"MFA / 2FA",permalink:"/kratos/docs/self-service/flows/2fa-mfa-multi-factor-authentication"},next:{title:"Managing Users and Identities",permalink:"/kratos/docs/admin/managing-users-identities"}},p=[{value:"All flows",id:"all-flows",children:[{value:"Web-Hooks",id:"web-hooks",children:[]}]},{value:"Login",id:"login",children:[{value:"Before",id:"before",children:[]},{value:"After",id:"after",children:[]}]},{value:"Registration",id:"registration",children:[{value:"Before",id:"before-1",children:[]},{value:"After",id:"after-1",children:[]},{value:"Registration Flow via Browser",id:"registration-flow-via-browser",children:[]},{value:"Registration Flow via API",id:"registration-flow-via-api",children:[]}]},{value:"Settings",id:"settings",children:[{value:"After",id:"after-2",children:[]}]}],h={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hooks execute logic after a flow (login, registration, settings, ...):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Before login:")," is executed when a login flow starts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"After login:")," is executed after a login was successful."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Before registration:")," is executed when a registration flow starts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"After registration:")," is executed when a registration was successful:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Before persisting:")," runs before the identity is saved in the database."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"After persisting:")," runs after the identity was saved in the database."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"After recovery:")," is executed after a password has been successfully\nrecovered."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"After settings:")," is executed when a settings was successful:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Before persisting:")," runs before the identity is saved in the database."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"After persisting:")," runs after the identity was saved in the database."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"After verification:")," is executed when the verification of an account was\nsuccessful.")),(0,i.kt)("p",null,"There are hooks, which can be configured only for a particular flow (login,\nregistration, settings, ...) method (password, oidc, profile) and hooks, which\ncan be configured for all methods of any flow."),(0,i.kt)("p",null,"To configure hooks for all methods of a particular flow, following pattern must\nbe used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml',title:'"path/to/my/kratos.config.yml'},"selfservice:\n  flows:\n    <login|registration|recovery|...>:\n      <before|after>:\n        hooks:\n          - hook: <hook 1 name>\n            <hook 1 specific configuration>\n          - hook: <hook 2 name>\n            <hook 2 specific configuration>\n          ...\n")),(0,i.kt)("p",null,"Following pattern must be followed to configure hooks for a particular flow\nmethod:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml',title:'"path/to/my/kratos.config.yml'},"selfservice:\n  flows:\n    <login|registration|recovery|...>:\n      <before or after>:\n        <particular method>:\n          hooks:\n            - hook: <hook 1 name>\n              <hook 1 specific configuration>\n            - hook: <hook 2 name>\n              <hook 2 specific configuration>\n            ...\n")),(0,i.kt)("p",null,"Hooks configured on a particular method level always override the hooks\nconfigured on the flow level. So given the following example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml',title:'"path/to/my/kratos.config.yml'},"selfservice:\n  flows:\n    login:\n      before:\n        hooks:\n          - hook: hook_1\n            # hook_1 specific configuration\n      after:\n        hooks:\n          - hook: hook_2\n            # hook_2 specific configuration\n        password:\n          hooks:\n            - hook: hook_3\n              # hook_3 specific configuration\n        # ...\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"hook_1")," is always run when the flow is started. On the finalization of the\nflow, ",(0,i.kt)("inlineCode",{parentName:"p"},"hook_2")," is not run for the ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," method, but for the ",(0,i.kt)("inlineCode",{parentName:"p"},"oidc")," method\n(for example). If the ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," method is used, then ",(0,i.kt)("inlineCode",{parentName:"p"},"hook_3")," will run."),(0,i.kt)("h2",{id:"all-flows"},"All flows"),(0,i.kt)("p",null,"Following hooks can be configured for all flows."),(0,i.kt)("h3",{id:"web-hooks"},"Web-Hooks"),(0,i.kt)("p",null,"Web-Hooks can be configured for every, but error and logout flow and can be\nconfigured on either the before/after level or at the level of a particular\nmethod. Support for Web-Hooks before execution of a method is currently\nsupported only for registration and login methods."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"As of today Web-Hooks cannot control the execution of the flow by\npatching/updating particular properties of flow specific object upon Web-Hook\ncompletion. It will however cancel the execution of the flow if the call to the\nWeb-Hook end point fails either due to a network error or if the end point\nresponses with an HTTP code > 300."))),(0,i.kt)("p",null,"The configuration for a web-hook goes into the ",(0,i.kt)("inlineCode",{parentName:"p"},"hooks")," property either on the\nflow before/after, or the method level and has the following structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-.yaml"},"  - hook: web_hook\n    config:\n      url: https://test.kratos.ory.sh/after_verification_hook\n      method: POST # GET, DELETE, etc\n      body: /link/to/my/jsonnet/file\n      auth:\n        type: <some-type>\n        config:\n          <type-specific-config>\n")),(0,i.kt)("p",null,"The configuration section of a web-hook consists of"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"url")," - the url, the web-hook should call (mandatory)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"method")," - the HTTP method (GET, POST, ...), the web-hook should use\n(mandatory)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"body")," - path to a jsonnet template, used by the web-hook to render the\npayload to send (optional). This property is ignored for HTTP ",(0,i.kt)("inlineCode",{parentName:"li"},"method"),"s, which\ndo not support sending of HTTP body payloads."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"auth")," - configuration of authentication and authorization mechanisms to be\nused by the web-hook")),(0,i.kt)("p",null,"Web-Hooks bind the ",(0,i.kt)("inlineCode",{parentName:"p"},"flow"),", as well as request headers (",(0,i.kt)("inlineCode",{parentName:"p"},"request_headers"),"),\nrequest method (",(0,i.kt)("inlineCode",{parentName:"p"},"request_method"),"), and the request url (",(0,i.kt)("inlineCode",{parentName:"p"},"request_url"),") of the\nflow into the jsonnet template for all methods and execution paths (before and\nafter). For the ",(0,i.kt)("inlineCode",{parentName:"p"},"after")," execution path of all flows, it binds the ",(0,i.kt)("inlineCode",{parentName:"p"},"identity"),"\nobject into the jsonnet template as well. These objects are available through a\n",(0,i.kt)("inlineCode",{parentName:"p"},"ctx")," object. E.g. to create a body looking like ",(0,i.kt)("inlineCode",{parentName:"p"},"{ user_id: <some-id> }")," to be\nsend to the web hook end point, the jsonnet template would look like this:\n",(0,i.kt)("inlineCode",{parentName:"p"},"function(ctx) { user_id: ctx.identity.id }")),(0,i.kt)("h4",{id:"web-hook-authentication-and-authorization-mechanisms"},"Web-Hook Authentication and Authorization Mechanisms"),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," following mechanisms are supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Authentication via an Api Key. Type must be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"api_key"),"."),(0,i.kt)("li",{parentName:"ul"},"Authentication via Basic Authentication. Type must be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"basic_auth"),".")),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"api_key")," the config looks as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-.yaml"},"name: Some-Name\nvalue: The-Value-of-My-Key\nin: header # alternatively cookie\n")),(0,i.kt)("p",null,"All properties are mandatory."),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"basic_auth")," the config looks as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-.yaml"},"user: My-User\npassword: My-Pass-Value\n")),(0,i.kt)("p",null,"All properties are mandatory."),(0,i.kt)("h2",{id:"login"},"Login"),(0,i.kt)("p",null,"Hooks running before or after successful user login are defined per Self-Service\nRegistration Method in ORY Kratos' configuration file."),(0,i.kt)("h3",{id:"before"},"Before"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    login:\n      before:\n        hooks:\n          - hook: web_hook\n            # web-hook specific configuration\n")),(0,i.kt)("h3",{id:"after"},"After"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    login:\n      after:\n        password:\n          hooks:\n            - hook: revoke_active_sessions\n")),(0,i.kt)("h4",{id:"revoke_active_sessions"},(0,i.kt)("inlineCode",{parentName:"h4"},"revoke_active_sessions")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"revoke_active_sessions")," will delete all active sessions for that user on\nsuccessful login:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    login:\n      after:\n        <method>:\n          hooks:\n            - hook: revoke_active_sessions\n              # can not be configured\n")),(0,i.kt)("h2",{id:"registration"},"Registration"),(0,i.kt)("p",null,"Hooks running before or after successful user registration are defined per\nSelf-Service Registration Method in ORY Kratos' configuration file."),(0,i.kt)("h3",{id:"before-1"},"Before"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    registration:\n      before:\n        hooks:\n          - hook: web_hook\n            # web-hook specific configuration\n")),(0,i.kt)("h3",{id:"after-1"},"After"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    registration:\n      after:\n        oidc:\n          hooks:\n            - hook: session\n        password:\n          hooks:\n            - hook: session\n")),(0,i.kt)("h4",{id:"session"},(0,i.kt)("inlineCode",{parentName:"h4"},"session")),(0,i.kt)("p",null,"Adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"session")," hook signs the user immediately in once the account has\nbeen created. It runs after the identity has been saved to the database."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Using this job as part of your post-registration workflow makes your system\nvulnerable to\n",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/concepts/security#account-enumeration-attacks"},"Account Enumeration Attacks"),"\nbecause a threat agent can distinguish between existing and non-existing\naccounts by checking if ",(0,i.kt)("inlineCode",{parentName:"p"},"Set-Cookie")," was sent as part of the registration\nresponse."))),(0,i.kt)("p",null,'To use this hook, you must first define one or more (for secret rotation)\nsecrets. You can either choose to use the "default" secrets or the more specific\n"cookie" secrets. The other required config is setting the hook in ',(0,i.kt)("inlineCode",{parentName:"p"},"after")," work\nflows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'},'secrets:\n  cookie:\n    - something-super-secret # The first entry will be used to sign and verify session cookies\n\n    # All other entries will be used to verify session cookies that were signed before "something-super-secret" became\n    # the current signing secret.\n    - old-session-secret\n    - older-session-secret\n    - ancient-session-secret\n\nselfservice:\n  flows:\n    registration:\n      after:\n        <method>:\n          hooks:\n            - hook: session\n              # can not be configured\n')),(0,i.kt)("p",null,"Depending on the registration flow type the behavior changes."),(0,i.kt)("h3",{id:"registration-flow-via-browser"},"Registration Flow via Browser"),(0,i.kt)("p",null,"When performing a registration flow with a Browser, this hook sends a\n",(0,i.kt)("inlineCode",{parentName:"p"},"Set-Cookie")," HTTP header which contains the session cookie."),(0,i.kt)("p",null,"Therefore, the user is logged in immediately."),(0,i.kt)("h3",{id:"registration-flow-via-api"},"Registration Flow via API"),(0,i.kt)("p",null,"When performing a registration flow with an API client (e.g. mobile apo), this\nhook creates a session and returns the session token and the session itself in\nthe response body as application/json:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "session": {\n    "id": "..."\n    // ...\n  },\n  "session_token": "...",\n  "identity": {\n    "id": "..."\n    // ...\n  }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Because the HTTP reply is handled by the hook itself, no other hooks can be\nexecuted because the HTTP reply can not be modified further (e.g. HTTP Status\nCode was already sent as 200 and cannot be changed to 301). You must ensure that\nthe session hook is the last hook in your configuration!"))),(0,i.kt)("h2",{id:"settings"},"Settings"),(0,i.kt)("p",null,"Hooks running after successfully updating user settings and are defined per\nSelf-Service Settings Method in Ory Kratos' configuration file."),(0,i.kt)("h3",{id:"after-2"},"After"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    settings:\n      after:\n")),(0,i.kt)("p",null,"Only Web-Hooks hooks are available for this flow at the moment."))}d.isMDXComponent=!0}}]);