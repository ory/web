(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{353:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(570)),i={id:"limitations",title:"Limitations"},s={unversionedId:"limitations",id:"version-v1.6/limitations",isDocsHomePage:!1,title:"Limitations",description:"ORY Hydra tries to solve all of OAuth 2.0 and OpenID Connect uses. There are,",source:"@site/versioned_docs/version-v1.6/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/hydra/docs/v1.6/limitations",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.6/limitations.md",version:"v1.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1595248858,formattedLastUpdatedAt:"7/20/2020",frontMatter:{id:"limitations",title:"Limitations"},sidebar:"version-v1.6/docs",previous:{title:"JSON Web Key Sets",permalink:"/hydra/docs/v1.6/jwks"},next:{title:"Implementing the Login Endpoint",permalink:"/hydra/docs/v1.6/guides/login"}},c=[{value:"MySQL &lt;= 5.6 / MariaDB",id:"mysql--56--mariadb",children:[]},{value:"OAuth 2.0 Client Secret Length",id:"oauth-20-client-secret-length",children:[]},{value:"Resource Owner Password Credentials Grant Type (ROCP)",id:"resource-owner-password-credentials-grant-type-rocp",children:[{value:"Overview",id:"overview",children:[]},{value:"Legacy &amp; Bad Security",id:"legacy--bad-security",children:[]},{value:"What about Auth0, Okta, ...?",id:"what-about-auth0-okta-",children:[]}]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"ORY Hydra tries to solve all of OAuth 2.0 and OpenID Connect uses. There are,\nhowever, some limitations."),Object(o.b)("h2",{id:"mysql--56--mariadb"},"MySQL <= 5.6 / MariaDB"),Object(o.b)("p",null,"ORY Hydra has issues with MySQL <= 5.6 (but not MySQL 5.7+) and certain MariaDB\nversions. Read more about this ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/hydra/issues/377"},"here"),".\nOur recommendation is to use MySQL 5.7+ or PostgreSQL."),Object(o.b)("h2",{id:"oauth-20-client-secret-length"},"OAuth 2.0 Client Secret Length"),Object(o.b)("p",null,'OAuth 2.0 Client Secrets are hashed using BCrypt. BCrypt has, by design, an\nmaximum password length. The Golang BCrypt library has a maximum password length\nof 73 bytes. Any password longer will be "truncated":'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ hydra clients create --id long-secret \\\n    --secret 525348e77144a9cee9a7471a8b67c50ea85b9e3eb377a3c1a3a23db88f9150eefe76e6a339fdbc62b817595f53d72549d9ebe36438f8c2619846b963e9f43a94 \\\n    --endpoint http://localhost:4445 \\\n    --token-endpoint-auth-method client_secret_post \\\n    --grant-types client_credentials\n\n$ hydra token client --client-id long-secret \\\n    --client-secret 525348e77144a9cee9a7471a8b67c50ea85b9e3eb377a3c1a3a23db88f9150eefe76e6a3 \\\n    --endpoint http://localhost:4444\n")),Object(o.b)("p",null,"For more information on this topic we recommend reading:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://security.stackexchange.com/questions/39849/does-bcrypt-have-a-maximum-password-length"},"https://security.stackexchange.com/questions/39849/does-bcrypt-have-a-maximum-password-length")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://security.stackexchange.com/questions/6623/pre-hash-password-before-applying-bcrypt-to-avoid-restricting-password-length"},"https://security.stackexchange.com/questions/6623/pre-hash-password-before-applying-bcrypt-to-avoid-restricting-password-length"))),Object(o.b)("h2",{id:"resource-owner-password-credentials-grant-type-rocp"},"Resource Owner Password Credentials Grant Type (ROCP)"),Object(o.b)("p",null,"ORY Hydra does not and will not implement the Resource Owner Password\nCredentials Grant Type. Read on for context."),Object(o.b)("h3",{id:"overview"},"Overview"),Object(o.b)("p",null,"This grant type allows OAuth 2.0 Clients to exchange user credentials (username,\npassword) for an access token."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"POST /oauth2/token HTTP/1.1\nHost: server.example.com\nAuthorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=password&username=johndoe&password=A3ddj3w\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Response:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nContent-Type: application/json;charset=UTF-8\nCache-Control: no-store\nPragma: no-cache\n\n{\n  "access_token":"2YotnFZFEjr1zCsicMWpAA",\n  "token_type":"example",\n  "expires_in":3600,\n  "refresh_token":"tGzv3JOkF0XG5Qx2TlKWIA",\n  "example_parameter":"example_value"\n}\n')),Object(o.b)("p",null,"You might think that this is the perfect grant type for your first-party\napplication. This grant type is most commonly used in mobile authentication for\nfirst-party apps. If you plan on doing this, stop right now and read\n",Object(o.b)("a",{parentName:"p",href:"https://www.ory.sh/oauth2-for-mobile-app-spa-browser"},"this blog article"),"."),Object(o.b)("h3",{id:"legacy--bad-security"},"Legacy & Bad Security"),Object(o.b)("p",null,'The ROCP grant type is discouraged by developers, professionals, and the IETF\nitself. It was originally added because big legacy corporations (not dropping\nany names, but they are part of the IETF consortium) did not want to migrate\ntheir authentication infrastructure to the modern web but instead do what\nthey\'ve been doing all along "but OAuth 2.0" and for systems that want to\nupgrade from OAuth (1.0) to OAuth 2.0.'),Object(o.b)("p",null,"There are a ton of good reasons why this is a bad flow, they are summarized in\n",Object(o.b)("a",{parentName:"p",href:"https://www.scottbrady91.com/OAuth/Why-the-Resource-Owner-Password-Credentials-Grant-Type-is-not-Authentication-nor-Suitable-for-Modern-Applications"},"this excellent blog article as well"),"."),Object(o.b)("h3",{id:"what-about-auth0-okta-"},"What about Auth0, Okta, ...?"),Object(o.b)("p",null,"Auth0, Okta, Stormpath started early with OAuth 2.0 SaaS and adopted the ROPC\ngrant too. They since deprecated these old flows but still have them active as\nexisting apps rely on them."))}p.isMDXComponent=!0},570:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,b=d["".concat(i,".").concat(h)]||d[h]||u[h]||o;return n?a.a.createElement(b,s(s({ref:t},l),{},{components:n})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);