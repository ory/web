(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{293:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var i=n(2),r=n(9),a=(n(0),n(394)),o={id:"index",title:"Hooks"},s={id:"version-v0.2/self-service/hooks/index",isDocsHomePage:!1,title:"Hooks",description:"Hooks execute logic before or after a flow (login, registration, settings, ...):",source:"@site/versioned_docs/version-v0.2/self-service/hooks/index.mdx",permalink:"/kratos/docs/v0.2/self-service/hooks/index",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.2/self-service/hooks/index.mdx",version:"v0.2",lastUpdatedBy:"aeneasr",lastUpdatedAt:1588605498,sidebar:"version-v0.2/docs",previous:{title:"User Profile",permalink:"/kratos/docs/v0.2/self-service/strategies/user-settings-profile"},next:{title:"Zero Trust with IAP Proxy",permalink:"/kratos/docs/v0.2/guides/zero-trust-iap-proxy-identity-access-proxy"},latestVersionMainDocPermalink:"/kratos/docs"},c=[{value:"Login",id:"login",children:[{value:"Before",id:"before",children:[]},{value:"After",id:"after",children:[]}]},{value:"Registration",id:"registration",children:[{value:"Before",id:"before-1",children:[]},{value:"After",id:"after-1",children:[]},{value:"<code>verify</code>",id:"verify",children:[]}]},{value:"Settings",id:"settings",children:[{value:"Before",id:"before-2",children:[]},{value:"After",id:"after-2",children:[]}]}],l={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Hooks execute logic before or after a flow (login, registration, settings, ...):"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"Before login:")," is executed when a login is initiated."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"After login:")," is executed after a login was successful."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"Before registration:")," is executed when a registration is initiated."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"After registration:")," is executed when a registration was successful:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"Before persisting:")," runs before the identity is saved in the database."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"After persisting:")," runs after the identity was saved in the database."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"After settings:")," is executed when a settings was successful:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"Before persisting:")," runs before the identity is saved in the database."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"After persisting:")," runs after the identity was saved in the database.")))),Object(a.b)("h2",{id:"login"},"Login"),Object(a.b)("p",null,"Hooks running before & after successful user authentication are defined per\nSelf-Service Login Strategy in ORY Kratos' configuration file."),Object(a.b)("h3",{id:"before"},"Before"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  login:\n    before:\n      - hook: redirect\n        config:\n          to: https://www.ory.sh/maintenance\n")),Object(a.b)("h4",{id:"redirect"},Object(a.b)("inlineCode",{parentName:"h4"},"redirect")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"redirect")," job sends HTTP 302 Found and redirects the client\nto the specified endpoint. This is useful\nwhen you want to disable any settings functionality (e.g. due to maintenance)."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  login:\n    before:\n      - hook: redirect\n        config:\n          to: https://www.ory.sh/maintenance\n")),Object(a.b)("h3",{id:"after"},"After"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  login:\n    after:\n      oidc:\n        - hook: redirect\n          config:\n            to: https://www.ory.sh/\n      password:\n        - hook: revoke_active_sessions\n")),Object(a.b)("h4",{id:"redirect-1"},Object(a.b)("inlineCode",{parentName:"h4"},"redirect")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"redirect")," job sends HTTP 302 Found and redirects the client\nto the specified endpoint. This hook overrides the default redirection\nbehaviour and enforces the specified redirect URL."),Object(a.b)("p",null,"Using this hook should be an exception."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  login:\n    after:\n      <strategy>:\n        - hook: redirect\n          config:\n            to: https://url-to-redirect/to\n")),Object(a.b)("h4",{id:"revoke_active_sessions"},Object(a.b)("inlineCode",{parentName:"h4"},"revoke_active_sessions")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"revoke_active_sessions")," will delete all active sessions for that user on\nsuccessful login:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  login:\n    after:\n      <strategy>:\n        - hook: revoke_active_sessions\n          # can not be configured\n")),Object(a.b)("h2",{id:"registration"},"Registration"),Object(a.b)("p",null,"Hooks running before & after successful user registration are defined per\nSelf-Service Registration Strategy in ORY Kratos' configuration file."),Object(a.b)("h3",{id:"before-1"},"Before"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  registration:\n    before:\n    - hook: redirect\n      config:\n        to: https://www.ory.sh/maintenance\n")),Object(a.b)("h4",{id:"redirect-2"},Object(a.b)("inlineCode",{parentName:"h4"},"redirect")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"redirect")," job sends HTTP 302 Found and redirects the client\nto the specified endpoint. This is useful\nwhen you want to disable any settings functionality (e.g. due to maintenance)."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  registration:\n    before:\n    - hook: redirect\n      config:\n        to: https://www.ory.sh/maintenance\n")),Object(a.b)("h3",{id:"after-1"},"After"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  registration:\n    after:\n      oidc:\n        - hook: session\n      password:\n        - hook: session\n")),Object(a.b)("h4",{id:"session"},Object(a.b)("inlineCode",{parentName:"h4"},"session")),Object(a.b)("p",null,"Adding the ",Object(a.b)("inlineCode",{parentName:"p"},"session")," hook signs the user immediately in once the account has been created.\nIt runs after the identity has been saved to the database."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Using this job as part of your post-registration workflow makes your system\nvulnerable to\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"../../concepts/security.md#account-enumeration-attacks"}),"Account Enumeration Attacks"),"\nbecause a threat agent can distinguish between existing and non-existing\naccounts by checking if ",Object(a.b)("inlineCode",{parentName:"p"},"Set-Cookie")," was sent as part of the registration\nresponse."))),Object(a.b)("p",null,"It sends  a ",Object(a.b)("inlineCode",{parentName:"p"},"Set-Cookie")," header which contains the session\ncookie. To use it, you must first define one or more (for secret rotation)\nsession secrets and then use it in one of the ",Object(a.b)("inlineCode",{parentName:"p"},"after")," work flows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),'secrets:\n  session:\n    - something-super-secret # The first entry will be used to sign and verify session cookies\n\n    # All other entries will be used to verify session cookies that were signed before "something-super-secret" became\n    # the current signing secret.\n    - old-session-secret\n    - older-session-secret\n    - ancient-session-secret\n\nselfservice:\n  registration:\n    after:\n      <strategy>:\n        - hook: session\n          # can not be configured\n')),Object(a.b)("h4",{id:"redirect-3"},Object(a.b)("inlineCode",{parentName:"h4"},"redirect")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"redirect")," hook sends HTTP 302 Found and redirects the client\nto the specified endpoint."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Using this hook for registration disables user registration because it runs\nbefore the identity is saved to the database. It may\nbe useful in cases where you temporary suspend user registration."))),Object(a.b)("p",null,"Using this hook should be an exception."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  registration:\n    after:\n      <strategy>:\n        - hook: redirect\n          config:\n            to: https://url-to-redirect/to\n")),Object(a.b)("h3",{id:"verify"},Object(a.b)("inlineCode",{parentName:"h3"},"verify")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"verify")," hook checks for verifiable email addresses and sends a verification / activation\nemail. For more information,\nplease read ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/v0.2/self-service/flows/verify-email-account-activation"}),"User Verification and Account Activation"),"."),Object(a.b)("h2",{id:"settings"},"Settings"),Object(a.b)("p",null,"Hooks running before & after successfully updating user settings and are defined per\nSelf-Service Settings Strategy in ORY Kratos' configuration file."),Object(a.b)("h3",{id:"before-2"},"Before"),Object(a.b)("p",null,"Settings flows do not have before hooks."),Object(a.b)("h3",{id:"after-2"},"After"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  settings:\n    after:\n      - hook: redirect\n        config:\n         to: https://www.ory.sh/\n")),Object(a.b)("h4",{id:"redirect-4"},Object(a.b)("inlineCode",{parentName:"h4"},"redirect")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"redirect")," job sends HTTP 302 Found and redirects the client\nto the specified endpoint."),Object(a.b)("p",null,"Per default, the settings endpoint returns to the settings page\nwith the original settings request ID. This is useful\nwhen you want to show e.g. a success message indicating\nthat the data has successfully been saved."),Object(a.b)("p",null,"To override this behaviour, use this redirect hook."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  settings:\n    after:\n      <strategy>:\n        - hook: redirect\n          config:\n            to: https://www.ory.sh/settings-updated\n")))}b.isMDXComponent=!0},394:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(n),m=i,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||a;return n?r.a.createElement(f,s(s({ref:t},l),{},{components:n})):r.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);