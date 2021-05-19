(window.webpackJsonp=window.webpackJsonp||[]).push([[389],{455:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(8),a=(r(0),r(552)),s={id:"setting-up-password-hashing-parameters",title:"Setting up Password Hashing Parameters"},i={unversionedId:"guides/setting-up-password-hashing-parameters",id:"version-v0.5/guides/setting-up-password-hashing-parameters",isDocsHomePage:!1,title:"Setting up Password Hashing Parameters",description:"Currently, ORY Kratos supports password hashing using Argon2 in the Argon2id",source:"@site/versioned_docs/version-v0.5/guides/setting-up-password-hashing-parameters.md",sourceDirName:"guides",slug:"/guides/setting-up-password-hashing-parameters",permalink:"/kratos/docs/v0.5/guides/setting-up-password-hashing-parameters",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/guides/setting-up-password-hashing-parameters.md",version:"v0.5",lastUpdatedBy:"Vincent",lastUpdatedAt:1615204024,formattedLastUpdatedAt:"3/8/2021",frontMatter:{id:"setting-up-password-hashing-parameters",title:"Setting up Password Hashing Parameters"},sidebar:"version-v0.5/docs",previous:{title:"Docker Images",permalink:"/kratos/docs/v0.5/guides/docker"},next:{title:"Configuration",permalink:"/kratos/docs/v0.5/reference/configuration"}},c=[],p={toc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Currently, ORY Kratos supports password hashing using Argon2 in the Argon2id\nvariant. It is important to set up it's parameters to ensure a stable and\nreliable operation of ORY Kratos. In essence, you want to fulfill the following\nconstrains:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Duration: the execution time of one hashing operation - this translates to\nthe response time of ORY Kratos on login and registration."),Object(a.b)("li",{parentName:"ol"},"Memory: the amount of available memory on the server"),Object(a.b)("li",{parentName:"ol"},"Space: the amount of space for persistent storage")),Object(a.b)("p",null,"We recommend choosing a duration of 0.5s to 1s and as much memory as possible.\nTo determine the exact recommended values following security best practices, run\nthe CLI helper included in ORY Kratos:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"$ kratos hashers argon2 calibrate 1s\n")),Object(a.b)("p",null,"It will output the exact values to use in the\n",Object(a.b)("a",{parentName:"p",href:"/kratos/docs/v0.5/reference/configuration"},"configuration"),"."),Object(a.b)("p",null,"Head to ",Object(a.b)("a",{parentName:"p",href:"https://www.ory.sh/choose-recommended-argon2-parameters-password-hashing/"},"our blogpost"),"\nabout Argon2 parameters to learn how this command and password checking in ORY\nKratos works."),Object(a.b)("p",null,"If you encounter any problems like timeouts or out-of-memory errors, consolidate\nour\n",Object(a.b)("a",{parentName:"p",href:"/kratos/docs/v0.5/debug/performance-out-of-memory-password-hashing-argon2"},"troubleshooting guide"),"."))}u.isMDXComponent=!0},552:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return g}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),m=n,g=l["".concat(s,".").concat(m)]||l[m]||d[m]||a;return r?o.a.createElement(g,i(i({ref:t},p),{},{components:r})):o.a.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);