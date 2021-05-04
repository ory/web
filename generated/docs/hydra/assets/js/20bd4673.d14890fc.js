(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(8),o=(n(0),n(572)),a=(n(573),{id:"oauth2-public-spa-mobile",title:"Mobile & Browser (Single-Page-App) with OAuth2"}),c={unversionedId:"guides/oauth2-public-spa-mobile",id:"version-v1.8/guides/oauth2-public-spa-mobile",isDocsHomePage:!1,title:"Mobile & Browser (Single-Page-App) with OAuth2",description:"We have an",source:"@site/versioned_docs/version-v1.8/guides/oauth2-public-spa-mobile.mdx",sourceDirName:"guides",slug:"/guides/oauth2-public-spa-mobile",permalink:"/hydra/docs/v1.8/guides/oauth2-public-spa-mobile",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.8/guides/oauth2-public-spa-mobile.mdx",version:"v1.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601676726,formattedLastUpdatedAt:"10/2/2020",frontMatter:{id:"oauth2-public-spa-mobile",title:"Mobile & Browser (Single-Page-App) with OAuth2"},sidebar:"version-v1.8/docs",previous:{title:"OAuth 2.0 Token Introspection",permalink:"/hydra/docs/v1.8/guides/oauth2-token-introspection"},next:{title:"Configuration",permalink:"/hydra/docs/v1.8/reference/configuration"}},u=[{value:"Creating a public OAuth 2.0 Client",id:"creating-a-public-oauth-20-client",children:[]}],l={toc:u};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We have an\n",Object(o.b)("a",{parentName:"p",href:"https://www.ory.sh/oauth2-for-mobile-app-spa-browser"},"excellent blog post")," on\nthis topic. Read it now!"),Object(o.b)("h3",{id:"creating-a-public-oauth-20-client"},"Creating a public OAuth 2.0 Client"),Object(o.b)("p",null,"You can create a public OAuth 2.0 Client (e.g. for the authorize code + PKCE or\nimplicit flow) with the CLI"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"hydra clients create --endpoint http://ory-hydra-admin-api --token-endpoint-auth-method none\n")),Object(o.b)("p",null,"or by setting in the HTTP API JSON body when POSTing to ",Object(o.b)("inlineCode",{parentName:"p"},"/clients"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n  "client_id": "...",\n  "token_endpoint_auth_method": "none"\n}\n')),Object(o.b)("p",null,"Be aware that when making requests to ",Object(o.b)("inlineCode",{parentName:"p"},"/oauth2/token")," or ",Object(o.b)("inlineCode",{parentName:"p"},"/oauth2/revoke")," with a\npublic OAuth 2.0 Client, you cannot authenticate with the HTTP Basic\nAuthorization but must include the ",Object(o.b)("inlineCode",{parentName:"p"},"client_id")," in the POST body:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"POST /oauth2/token\n...\n\nclient_id=...&\n  ...\n")))}p.isMDXComponent=!0},572:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,f=s["".concat(a,".").concat(d)]||s[d]||b[d]||o;return n?i.a.createElement(f,c(c({ref:t},l),{},{components:n})):i.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},573:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(16),i=n(574);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,c=void 0!==a&&a,u=o.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},574:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))}}]);