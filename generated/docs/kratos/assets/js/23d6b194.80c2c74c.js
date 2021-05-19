(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{137:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(8),i=(r(0),r(550)),s={id:"setting-up-cors",title:"Setting up Cross-origin resource sharing (CORS)"},a={unversionedId:"guides/setting-up-cors",id:"version-v0.5/guides/setting-up-cors",isDocsHomePage:!1,title:"Setting up Cross-origin resource sharing (CORS)",description:"ORY Kratos' Public API supports CORS out of the box. A reference for this",source:"@site/versioned_docs/version-v0.5/guides/setting-up-cors.mdx",sourceDirName:"guides",slug:"/guides/setting-up-cors",permalink:"/kratos/docs/v0.5/guides/setting-up-cors",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/guides/setting-up-cors.mdx",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1607456241,formattedLastUpdatedAt:"12/8/2020",frontMatter:{id:"setting-up-cors",title:"Setting up Cross-origin resource sharing (CORS)"},sidebar:"version-v0.5/docs",previous:{title:"Configuring Cookies",permalink:"/kratos/docs/v0.5/guides/configuring-cookies"},next:{title:"Setting up Account Recovery and Password Reset",permalink:"/kratos/docs/v0.5/guides/account-recovery-password-reset"}},c=[],u={toc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"ORY Kratos' Public API supports CORS out of the box. A reference for this\nconfiguration can be found in the\n",Object(i.b)("a",{parentName:"p",href:"/kratos/docs/v0.5/reference/configuration"},"Configuration Reference"),"."),Object(i.b)("p",null,"For CORS to work properly, we encourage to set the following values:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"serve:\n  public:\n    cors:\n      enabled: true\n      allowed_origins:\n        - https://example.org\n        - https://*.example.org\n      allowed_methods:\n        - POST\n        - GET\n        - PUT\n        - PATCH\n        - DELETE\n      allowed_headers:\n        - Authorization\n        - Cookie\n      exposed_headers:\n        - Content-Type\n        - Set-Cookie\n")))}p.isMDXComponent=!0},550:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return g}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(r),f=n,g=l["".concat(s,".").concat(f)]||l[f]||d[f]||i;return r?o.a.createElement(g,a(a({ref:t},u),{},{components:r})):o.a.createElement(g,a({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var u=2;u<i;u++)s[u]=r[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);