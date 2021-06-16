(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[1524],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,g=d["".concat(u,".").concat(f)]||d[f]||l[f]||i;return r?n.createElement(g,s(s({ref:t},p),{},{components:r})):n.createElement(g,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84366:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return a},toc:function(){return u},default:function(){return p}});var n=r(22122),o=r(19756),i=(r(67294),r(3905)),s={id:"setting-up-cors",title:"Setting up Cross-origin resource sharing (CORS)"},a={unversionedId:"guides/setting-up-cors",id:"guides/setting-up-cors",isDocsHomePage:!1,title:"Setting up Cross-origin resource sharing (CORS)",description:"Ory Kratos' Public API supports CORS out of the box. A reference for this",source:"@site/docs/guides/setting-up-cors.mdx",sourceDirName:"guides",slug:"/guides/setting-up-cors",permalink:"/kratos/docs/next/guides/setting-up-cors",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/guides/setting-up-cors.mdx",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619624197,formattedLastUpdatedAt:"4/28/2021",frontMatter:{id:"setting-up-cors",title:"Setting up Cross-origin resource sharing (CORS)"},sidebar:"docs",previous:{title:"Getting URLs and Cookies to Work on Multi-Domains",permalink:"/kratos/docs/next/guides/multi-domain-cookies"},next:{title:"Setting up Account Recovery and Password Reset",permalink:"/kratos/docs/next/guides/account-recovery-password-reset"}},u=[],c={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ory Kratos' Public API supports CORS out of the box. A reference for this\nconfiguration can be found in the\n",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/next/reference/configuration"},"Configuration Reference"),"."),(0,i.kt)("p",null,"For CORS to work properly, we encourage to set the following values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"serve:\n  public:\n    cors:\n      enabled: true\n      allowed_origins:\n        - https://example.org\n        - https://*.example.org\n      allowed_methods:\n        - POST\n        - GET\n        - PUT\n        - PATCH\n        - DELETE\n      allowed_headers:\n        - Authorization\n        - Cookie\n      exposed_headers:\n        - Content-Type\n        - Set-Cookie\n")))}p.isMDXComponent=!0}}]);