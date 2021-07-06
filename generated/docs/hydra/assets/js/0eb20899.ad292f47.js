(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[8811],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||s[h]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20213:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a=["components"],u={id:"oauth2-public-spa-mobile",title:"Mobile & Browser (Single-Page-App) with OAuth2"},c=void 0,p={unversionedId:"guides/oauth2-public-spa-mobile",id:"version-v1.10/guides/oauth2-public-spa-mobile",isDocsHomePage:!1,title:"Mobile & Browser (Single-Page-App) with OAuth2",description:"We have an",source:"@site/versioned_docs/version-v1.10/guides/oauth2-public-spa-mobile.mdx",sourceDirName:"guides",slug:"/guides/oauth2-public-spa-mobile",permalink:"/hydra/docs/guides/oauth2-public-spa-mobile",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/guides/oauth2-public-spa-mobile.mdx",version:"v1.10",lastUpdatedBy:"aeneasr",lastUpdatedAt:1616672187,formattedLastUpdatedAt:"3/25/2021",frontMatter:{id:"oauth2-public-spa-mobile",title:"Mobile & Browser (Single-Page-App) with OAuth2"},sidebar:"version-v1.10/docs",previous:{title:"OAuth 2.0 Token Introspection",permalink:"/hydra/docs/guides/oauth2-token-introspection"},next:{title:"Configuration",permalink:"/hydra/docs/reference/configuration"}},l=[{value:"Creating a public OAuth 2.0 Client",id:"creating-a-public-oauth-20-client",children:[]}],s={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We have an\n",(0,i.kt)("a",{parentName:"p",href:"https://www.ory.sh/oauth2-for-mobile-app-spa-browser"},"excellent blog post")," on\nthis topic. Read it now!"),(0,i.kt)("h3",{id:"creating-a-public-oauth-20-client"},"Creating a public OAuth 2.0 Client"),(0,i.kt)("p",null,"You can create a public OAuth 2.0 Client (e.g. for the authorize code + PKCE or\nimplicit flow) with the CLI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hydra clients create --endpoint http://ory-hydra-admin-api --token-endpoint-auth-method none\n")),(0,i.kt)("p",null,"or by setting in the HTTP API JSON body when POSTing to ",(0,i.kt)("inlineCode",{parentName:"p"},"/clients"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "client_id": "...",\n  "token_endpoint_auth_method": "none"\n}\n')),(0,i.kt)("p",null,"Be aware that when making requests to ",(0,i.kt)("inlineCode",{parentName:"p"},"/oauth2/token")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"/oauth2/revoke")," with a\npublic OAuth 2.0 Client, you cannot authenticate with the HTTP Basic\nAuthorization but must include the ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id")," in the POST body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"POST /oauth2/token\n...\n\nclient_id=...&\n  ...\n")))}d.isMDXComponent=!0}}]);