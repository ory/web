(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),i=n(9),a=(n(0),n(393)),s={id:"index",title:"Hooks"},o={id:"version-v0.4/self-service/hooks/index",isDocsHomePage:!1,title:"Hooks",description:"Hooks execute logic after a flow (login, registration, settings, ...):",source:"@site/versioned_docs/version-v0.4/self-service/hooks/index.mdx",permalink:"/kratos/docs/self-service/hooks/index",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/self-service/hooks/index.mdx",version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594382386,sidebar:"version-v0.4/docs",previous:{title:"MFA / 2FA",permalink:"/kratos/docs/self-service/flows/2fa-mfa-multi-factor-authentication"},next:{title:"Sign in with GitHub, Google, Facebook, LinkedIn, Microsoft ...",permalink:"/kratos/docs/guides/sign-in-with-github-google-facebook-linkedin"}},c=[{value:"Login",id:"login",children:[{value:"After",id:"after",children:[]}]},{value:"Registration",id:"registration",children:[{value:"After",id:"after-1",children:[]}]},{value:"Settings",id:"settings",children:[{value:"After",id:"after-2",children:[]}]}],l={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Hooks execute logic after a flow (login, registration, settings, ...):"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"After login:")," is executed after a login was successful."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"After registration:")," is executed when a registration was successful:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"Before persisting:")," runs before the identity is saved in the database."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"After persisting:")," runs after the identity was saved in the database."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"After settings:")," is executed when a settings was successful:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"Before persisting:")," runs before the identity is saved in the database."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"After persisting:")," runs after the identity was saved in the database.")))),Object(a.b)("h2",{id:"login"},"Login"),Object(a.b)("h3",{id:"after"},"After"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  flows:\n    login:\n      after:\n        password:\n          - hook: revoke_active_sessions\n")),Object(a.b)("h4",{id:"revoke_active_sessions"},Object(a.b)("inlineCode",{parentName:"h4"},"revoke_active_sessions")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"revoke_active_sessions")," will delete all active sessions for that user on\nsuccessful login:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  flows:\n    login:\n      after:\n        <strategy>:\n          - hook: revoke_active_sessions\n            # can not be configured\n")),Object(a.b)("h2",{id:"registration"},"Registration"),Object(a.b)("p",null,"Hooks running after successful user registration are defined per\nSelf-Service Registration Strategy in ORY Kratos' configuration file."),Object(a.b)("h3",{id:"after-1"},"After"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  flows:\n    registration:\n      after:\n        oidc:\n          - hook: session\n        password:\n          - hook: session\n")),Object(a.b)("h4",{id:"session"},Object(a.b)("inlineCode",{parentName:"h4"},"session")),Object(a.b)("p",null,"Adding the ",Object(a.b)("inlineCode",{parentName:"p"},"session")," hook signs the user immediately in once the account has been created.\nIt runs after the identity has been saved to the database."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Using this job as part of your post-registration workflow makes your system\nvulnerable to\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../../concepts/security.md#account-enumeration-attacks"}),"Account Enumeration Attacks"),"\nbecause a threat agent can distinguish between existing and non-existing\naccounts by checking if ",Object(a.b)("inlineCode",{parentName:"p"},"Set-Cookie")," was sent as part of the registration\nresponse."))),Object(a.b)("p",null,"It sends  a ",Object(a.b)("inlineCode",{parentName:"p"},"Set-Cookie"),' header which contains the session\ncookie. To use it, you must first define one or more (for secret rotation)\nsecrets. You can either choose to use the "default" secrets or the more specific "cookie" secrets.\nThe other required config is setting the hook in ',Object(a.b)("inlineCode",{parentName:"p"},"after")," work flows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),'secrets:\n  cookie:\n    - something-super-secret # The first entry will be used to sign and verify session cookies\n\n    # All other entries will be used to verify session cookies that were signed before "something-super-secret" became\n    # the current signing secret.\n    - old-session-secret\n    - older-session-secret\n    - ancient-session-secret\n\nselfservice:\n  flows:\n    registration:\n      after:\n        <strategy>:\n          - hook: session\n            # can not be configured\n')),Object(a.b)("h2",{id:"settings"},"Settings"),Object(a.b)("p",null,"Hooks running after successfully updating user settings and are defined per\nSelf-Service Settings Strategy in ORY Kratos' configuration file."),Object(a.b)("h3",{id:"after-2"},"After"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  flows:\n    settings:\n      after:\n")),Object(a.b)("p",null,"No hooks are available for this flow at the moment."))}b.isMDXComponent=!0},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(n),p=r,d=u["".concat(s,".").concat(p)]||u[p]||f[p]||a;return n?i.a.createElement(d,o(o({ref:t},l),{},{components:n})):i.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);