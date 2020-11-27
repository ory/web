(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{350:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(481)),a={id:"oauth2-public-spa-mobile",title:"Mobile & Browser (Single-Page-App) with OAuth2"},c={unversionedId:"guides/oauth2-public-spa-mobile",id:"version-v1.9/guides/oauth2-public-spa-mobile",isDocsHomePage:!1,title:"Mobile & Browser (Single-Page-App) with OAuth2",description:"We have an",source:"@site/versioned_docs/version-v1.9/guides/oauth2-public-spa-mobile.mdx",slug:"/guides/oauth2-public-spa-mobile",permalink:"/hydra/docs/guides/oauth2-public-spa-mobile",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/guides/oauth2-public-spa-mobile.mdx",version:"v1.9",lastUpdatedBy:"aeneasr",lastUpdatedAt:1603200622,sidebar:"version-v1.9/docs",previous:{title:"OAuth 2.0 Token Introspection",permalink:"/hydra/docs/guides/oauth2-token-introspection"},next:{title:"Configuration",permalink:"/hydra/docs/reference/configuration"}},u=[{value:"Creating a public OAuth 2.0 Client",id:"creating-a-public-oauth-20-client",children:[]}],p={rightToc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"We have an\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.ory.sh/oauth2-for-mobile-app-spa-browser"}),"excellent blog post")," on\nthis topic. Read it now!"),Object(i.b)("h3",{id:"creating-a-public-oauth-20-client"},"Creating a public OAuth 2.0 Client"),Object(i.b)("p",null,"You can create a public OAuth 2.0 Client (e.g. for the authorize code + PKCE or\nimplicit flow) with the CLI"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"hydra clients create --endpoint http://ory-hydra-admin-api --token-endpoint-auth-method none\n")),Object(i.b)("p",null,"or by setting in the HTTP API JSON body when POSTing to ",Object(i.b)("inlineCode",{parentName:"p"},"/clients"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n  "client_id": "...",\n  "token_endpoint_auth_method": "none"\n}\n')),Object(i.b)("p",null,"Be aware that when making requests to ",Object(i.b)("inlineCode",{parentName:"p"},"/oauth2/token")," or ",Object(i.b)("inlineCode",{parentName:"p"},"/oauth2/revoke")," with a\npublic OAuth 2.0 Client, you cannot authenticate with the HTTP Basic\nAuthorization but must include the ",Object(i.b)("inlineCode",{parentName:"p"},"client_id")," in the POST body:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"POST /oauth2/token\n...\n\nclient_id=...&\n  ...\n")))}l.isMDXComponent=!0},481:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,h=b["".concat(a,".").concat(d)]||b[d]||s[d]||i;return n?o.a.createElement(h,c(c({ref:t},p),{},{components:n})):o.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);