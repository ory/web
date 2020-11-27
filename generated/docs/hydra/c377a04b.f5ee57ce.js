(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{373:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(481)),i={id:"index",slug:"/",title:"ORY Hydra",sidebar_label:"Introduction"},s={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"ORY Hydra",description:"Hydra is an OAuth 2.0 and OpenID Connect Provider. In other words, an",source:"@site/docs/index.md",slug:"/",permalink:"/hydra/docs/next/",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/index.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601372836,sidebar_label:"Introduction",sidebar:"docs",next:{title:"5 Minute Tutorial",permalink:"/hydra/docs/next/5min-tutorial"}},c=[{value:"Flexible User Management",id:"flexible-user-management",children:[]},{value:"OpenID Certified",id:"openid-certified",children:[]},{value:"Cryptographic Key Storage",id:"cryptographic-key-storage",children:[]},{value:"Security First",id:"security-first",children:[]},{value:"High Performance",id:"high-performance",children:[]},{value:"Developer Friendly",id:"developer-friendly",children:[]},{value:"Limitations",id:"limitations",children:[]},{value:"Is ORY Hydra the right fit for you?",id:"is-ory-hydra-the-right-fit-for-you",children:[]},{value:"Other solutions",id:"other-solutions",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Hydra is an OAuth 2.0 and OpenID Connect Provider. In other words, an\nimplementation of the OAuth 2.0 Authorization Framework as well as the OpenID\nConnect Core 1.0 framework. As such, it issues OAuth 2.0 Access, Refresh, and ID\nTokens that enable third-parties to access your APIs in the name of your users."),Object(o.b)("h2",{id:"flexible-user-management"},"Flexible User Management"),Object(o.b)("p",null,'One of ORY Hydra\'s biggest advantages is that unlike other OAuth 2.0\nimplementations, it implements the OAuth and OpenID Connect standard without\nforcing you to use a "Hydra User Management" (login, logout, profile management,\nregistration), a particular template engine, or a predefined front-end.'),Object(o.b)("p",null,"This allows you to implement user management and login your way, in your\ntechnology stack, with authentication mechanisms required by your use case\n(token-based 2FA, SMS 2FA, etc). You can of course use existing solutions like\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/go-authboss/authboss"}),"authboss")," or\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://auth0.com/"}),"auth0.com"),". It provides you all the benefits of OAuth 2.0\nand OpenID Connect while being minimally invasive to your business logic and\ntechnology stack."),Object(o.b)("h2",{id:"openid-certified"},"OpenID Certified"),Object(o.b)("p",null,"ORY Hydra is a\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://openid.net/developers/certified/"}),"Certified OpenID Provider Server")," and\nimplements all the requirements stated by the OpenID Foundation. In particular,\nit correctly implements the various OAuth 2.0 and OpenID Connect flows specified\nby the IETF and OpenID Foundation."),Object(o.b)("h2",{id:"cryptographic-key-storage"},"Cryptographic Key Storage"),Object(o.b)("p",null,"In addition to the OAuth 2.0 functionality, ORY Hydra offers a safe storage for\ncryptographic keys (used for example to sign JSON Web Tokens) and can manage\nOAuth 2.0 Clients."),Object(o.b)("h2",{id:"security-first"},"Security First"),Object(o.b)("p",null,"ORY Hydra's architecture and work flows are designed to neutralize many common\n(OWASP TOP TEN) and uncommon attack vectors.\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.ory.sh/docs/guides/master/hydra/5-security/"}),"Learn more"),"."),Object(o.b)("h2",{id:"high-performance"},"High Performance"),Object(o.b)("p",null,"Hydra has a low CPU and memory footprint, short start-up time, and scales\neffortlessly up and down on many platforms including Heroku, Cloud Foundry,\nDocker, Google Container Engine, and others."),Object(o.b)("h2",{id:"developer-friendly"},"Developer Friendly"),Object(o.b)("p",null,"Hydra is available for all popular platforms including Linux, OSX and Windows.\nIt ships as a single binary without any additional dependencies. For further\nsimplicity, it is available as a\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/r/oryd/hydra/"}),"Docker Image"),"."),Object(o.b)("p",null,"Hydra also provides a developer-friendly CLI."),Object(o.b)("h2",{id:"limitations"},"Limitations"),Object(o.b)("p",null,"Hydra has a few limitations too:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"ORY Hydra does not manage user accounts, i.e. user registration, password\nreset, user login, sending confirmation emails, etc. In Hydra's architecture,\nthe ",Object(o.b)("em",{parentName:"li"},"Identity Provider")," is responsible for this."),Object(o.b)("li",{parentName:"ol"},"ORY Hydra doesn't support the OAuth 2.0 Resource Owner Password Credentials\nflow because it is legacy, discouraged, and insecure.")),Object(o.b)("h2",{id:"is-ory-hydra-the-right-fit-for-you"},"Is ORY Hydra the right fit for you?"),Object(o.b)("p",null,"OAuth 2.0 can be used in many environments for various purposes. This list might\nhelp you decide if OAuth 2.0 and Hydra are the right fit for a use case:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"enable third-party solutions to access to your APIs: This is what an OAuth2\nProvider does, Hydra is a perfect fit."),Object(o.b)("li",{parentName:"ol"},"be an Identity Provider like Google, Facebook, or Microsoft: OpenID Connect\nand thus Hydra is a perfect fit."),Object(o.b)("li",{parentName:"ol"},"enable your browser, mobile, or wearable applications to access your APIs:\nRunning an OAuth2 Provider can work great for this. You don't have to store\npasswords on the device and can revoke access tokens at any time. GMail\nlogins work this way."),Object(o.b)("li",{parentName:"ol"},"you want to limit what type of information your backend services can read\nfrom each other. For example, the ",Object(o.b)("em",{parentName:"li"},"comment service")," should only be allowed to\nfetch user profile updates but shouldn't be able to read user passwords.\nOAuth 2.0 might make sense for you.")),Object(o.b)("h2",{id:"other-solutions"},"Other solutions"),Object(o.b)("p",null,"If all you need is a library or SDKs that implements OAuth 2.0, take a look at\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ory/fosite"}),"fosite")," or\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/oauthjs/node-oauth2-server"}),"node-oauth2-server"),"."),Object(o.b)("p",null,"If you need a more fully featured identity solution including user management\nand user interfaces, those exist in the form of\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.keycloak.org"}),"Keycloak")," or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.okta.com"}),"Okta"),"."))}u.isMDXComponent=!0},481:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,b=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return n?a.a.createElement(b,s(s({ref:t},l),{},{components:n})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);