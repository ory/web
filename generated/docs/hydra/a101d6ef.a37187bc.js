(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{316:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(481)),i={id:"oauth2-public-spa-mobile",title:"Mobile & Browser (Single-Page-App) with OAuth2"},c={unversionedId:"guides/oauth2-public-spa-mobile",id:"guides/oauth2-public-spa-mobile",isDocsHomePage:!1,title:"Mobile & Browser (Single-Page-App) with OAuth2",description:"We have an",source:"@site/docs/guides/oauth2-public-spa-mobile.mdx",slug:"/guides/oauth2-public-spa-mobile",permalink:"/hydra/docs/next/guides/oauth2-public-spa-mobile",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/guides/oauth2-public-spa-mobile.mdx",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1603198549,sidebar:"docs",previous:{title:"OAuth 2.0 Token Introspection",permalink:"/hydra/docs/next/guides/oauth2-token-introspection"},next:{title:"Configuration",permalink:"/hydra/docs/next/reference/configuration"}},u=[{value:"Creating a public OAuth 2.0 Client",id:"creating-a-public-oauth-20-client",children:[]}],p={rightToc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We have an\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.ory.sh/oauth2-for-mobile-app-spa-browser"}),"excellent blog post")," on\nthis topic. Read it now!"),Object(a.b)("h3",{id:"creating-a-public-oauth-20-client"},"Creating a public OAuth 2.0 Client"),Object(a.b)("p",null,"You can create a public OAuth 2.0 Client (e.g. for the authorize code + PKCE or\nimplicit flow) with the CLI"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"hydra clients create --endpoint http://ory-hydra-admin-api --token-endpoint-auth-method none\n")),Object(a.b)("p",null,"or by setting in the HTTP API JSON body when POSTing to ",Object(a.b)("inlineCode",{parentName:"p"},"/clients"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n  "client_id": "...",\n  "token_endpoint_auth_method": "none"\n}\n')),Object(a.b)("p",null,"Be aware that when making requests to ",Object(a.b)("inlineCode",{parentName:"p"},"/oauth2/token")," or ",Object(a.b)("inlineCode",{parentName:"p"},"/oauth2/revoke")," with a\npublic OAuth 2.0 Client, you cannot authenticate with the HTTP Basic\nAuthorization but must include the ",Object(a.b)("inlineCode",{parentName:"p"},"client_id")," in the POST body:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"POST /oauth2/token\n...\n\nclient_id=...&\n  ...\n")))}l.isMDXComponent=!0},481:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,h=b["".concat(i,".").concat(d)]||b[d]||s[d]||a;return n?o.a.createElement(h,c(c({ref:t},p),{},{components:n})):o.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);