(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(145)),i={id:"index",slug:"/",title:"Introduction"},s={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Introduction",description:"Ory Keto is the first and only open source implementation of \"Zanzibar: Google's",source:"@site/docs/index.md",slug:"/",permalink:"/keto/docs/next/",editUrl:"https://github.com/ory/keto/edit/master/docs/docs/index.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1617276209,sidebar:"docs",next:{title:"Installation",permalink:"/keto/docs/next/install"}},c=[],l={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,'Ory Keto is the first and only open source implementation of "Zanzibar: Google\'s\nConsistent, Global Authorization System":'),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Determining whether online users are authorized to access digital objects is\ncentral to preserving privacy. This paper presents the design, implementation,\nand deployment of Zanzibar, a global system for storing and evaluating access\ncontrol lists. Zanzibar provides a uniform data model and configuration\nlanguage for expressing a wide range of access control policies from hundreds\nof client services at Google, including Calendar, Cloud, Drive, Maps, Photos,\nand YouTube. Its authorization decisions respect causal ordering of user\nactions and thus provide external consistency amid changes to access control\nlists and object contents. Zanzibar scales to trillions of access control\nlists and millions of authorization requests per second to support services\nused by billions of people. It has maintained 95th-percentile latency of less\nthan 10 milliseconds and availability of greater than 99.999% over 3 years of\nproduction use."),Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://research.google/pubs/pub48190/"}),"Source"))),Object(a.b)("p",null,"If you need to know if a user (or robot, car, service) is allowed to do\nsomething - Ory Keto is the right fit for you."),Object(a.b)("p",null,'Currently, Ory Keto implements the basic API contracts for managing and checking\nrelations ("permissions") with HTTP and gRPC APIs. Future versions will include\nfeatures such as userset rewrites (e.g. RBAC-style role-permission models),\nZookies, and more. An overview of what is implemented and upcoming can be found\nat ',Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/keto/docs/next/implemented-planned-features"}),"Implemented and Planned Features"),"."))}u.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);