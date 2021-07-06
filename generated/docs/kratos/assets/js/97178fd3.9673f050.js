(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[763],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return f}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return n?i.createElement(m,s(s({ref:t},d),{},{components:n})):i.createElement(m,s({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},71093:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var i=n(22122),r=n(19756),o=(n(67294),n(3905)),s=["components"],a={id:"hooks",title:"Hooks"},l=void 0,c={unversionedId:"self-service/hooks",id:"version-v0.5/self-service/hooks",isDocsHomePage:!1,title:"Hooks",description:"Hooks execute logic after a flow (login, registration, settings, ...):",source:"@site/versioned_docs/version-v0.5/self-service/hooks.mdx",sourceDirName:"self-service",slug:"/self-service/hooks",permalink:"/kratos/docs/v0.5/self-service/hooks",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/self-service/hooks.mdx",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1602674546,formattedLastUpdatedAt:"10/14/2020",frontMatter:{id:"hooks",title:"Hooks"},sidebar:"version-v0.5/docs",previous:{title:"MFA / 2FA",permalink:"/kratos/docs/v0.5/self-service/flows/2fa-mfa-multi-factor-authentication"},next:{title:"Managing Users and Identities",permalink:"/kratos/docs/v0.5/admin/managing-users-identities"}},d=[{value:"Login",id:"login",children:[{value:"After",id:"after",children:[]}]},{value:"Registration",id:"registration",children:[{value:"After",id:"after-1",children:[]},{value:"Registration Flow via Browser",id:"registration-flow-via-browser",children:[]},{value:"Registration Flow via API",id:"registration-flow-via-api",children:[]}]},{value:"Settings",id:"settings",children:[{value:"After",id:"after-2",children:[]}]}],u={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hooks execute logic after a flow (login, registration, settings, ...):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"After login:")," is executed after a login was successful."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"After registration:")," is executed when a registration was successful:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Before persisting:")," runs before the identity is saved in the database."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"After persisting:")," runs after the identity was saved in the database."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"After settings:")," is executed when a settings was successful:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Before persisting:")," runs before the identity is saved in the database."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"After persisting:")," runs after the identity was saved in the database.")))),(0,o.kt)("h2",{id:"login"},"Login"),(0,o.kt)("h3",{id:"after"},"After"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    login:\n      after:\n        password:\n          - hook: revoke_active_sessions\n")),(0,o.kt)("h4",{id:"revoke_active_sessions"},(0,o.kt)("inlineCode",{parentName:"h4"},"revoke_active_sessions")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"revoke_active_sessions")," will delete all active sessions for that user on\nsuccessful login:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    login:\n      after:\n        <method>:\n          - hook: revoke_active_sessions\n            # can not be configured\n")),(0,o.kt)("h2",{id:"registration"},"Registration"),(0,o.kt)("p",null,"Hooks running after successful user registration are defined per Self-Service\nRegistration Method in ORY Kratos' configuration file."),(0,o.kt)("h3",{id:"after-1"},"After"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    registration:\n      after:\n        oidc:\n          - hook: session\n        password:\n          - hook: session\n")),(0,o.kt)("h4",{id:"session"},(0,o.kt)("inlineCode",{parentName:"h4"},"session")),(0,o.kt)("p",null,"Adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"session")," hook signs the user immediately in once the account has\nbeen created. It runs after the identity has been saved to the database."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Using this job as part of your post-registration workflow makes your system\nvulnerable to\n",(0,o.kt)("a",{parentName:"p",href:"/kratos/docs/v0.5/concepts/security#account-enumeration-attacks"},"Account Enumeration Attacks"),"\nbecause a threat agent can distinguish between existing and non-existing\naccounts by checking if ",(0,o.kt)("inlineCode",{parentName:"p"},"Set-Cookie")," was sent as part of the registration\nresponse."))),(0,o.kt)("p",null,'To use this hook, you must first define one or more (for secret rotation)\nsecrets. You can either choose to use the "default" secrets or the more specific\n"cookie" secrets. The other required config is setting the hook in ',(0,o.kt)("inlineCode",{parentName:"p"},"after")," work\nflows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'},'secrets:\n  cookie:\n    - something-super-secret # The first entry will be used to sign and verify session cookies\n\n    # All other entries will be used to verify session cookies that were signed before "something-super-secret" became\n    # the current signing secret.\n    - old-session-secret\n    - older-session-secret\n    - ancient-session-secret\n\nselfservice:\n  flows:\n    registration:\n      after:\n        <method>:\n          - hook: session\n            # can not be configured\n')),(0,o.kt)("p",null,"Depending on the registration flow type the behavior changes."),(0,o.kt)("h3",{id:"registration-flow-via-browser"},"Registration Flow via Browser"),(0,o.kt)("p",null,"When performing a registration flow with a Browser, this hook sends a\n",(0,o.kt)("inlineCode",{parentName:"p"},"Set-Cookie")," HTTP header which contains the session cookie."),(0,o.kt)("p",null,"Therefore, the user is logged in immediately."),(0,o.kt)("h3",{id:"registration-flow-via-api"},"Registration Flow via API"),(0,o.kt)("p",null,"When performing a registration flow with an API client (e.g. mobile apo), this\nhook creates a session and returns the session token and the session itself in\nthe response body as application/json:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "session": {\n    "id": "..."\n    // ...\n  },\n  "session_token": "...",\n  "identity": {\n    "id": "..."\n    // ...\n  }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Because the HTTP reply is handled by the hook itself, no other hooks can be\nexecuted because the HTTP reply can not be modified further (e.g. HTTP Status\nCode was already sent as 200 and cannot be changed to 301). You must ensure that\nthe session hook is the last hook in your configuration!"))),(0,o.kt)("h2",{id:"settings"},"Settings"),(0,o.kt)("p",null,"Hooks running after successfully updating user settings and are defined per\nSelf-Service Settings Method in ORY Kratos' configuration file."),(0,o.kt)("h3",{id:"after-2"},"After"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    settings:\n      after:\n")),(0,o.kt)("p",null,"No hooks are available for this flow at the moment."))}p.isMDXComponent=!0}}]);