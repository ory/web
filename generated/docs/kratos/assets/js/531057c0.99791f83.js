(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{186:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(8),o=(r(0),r(454)),a={id:"ui-user-interface",title:"User Interface"},s={unversionedId:"concepts/ui-user-interface",id:"version-v0.2/concepts/ui-user-interface",isDocsHomePage:!1,title:"User Interface",description:"ORY Kratos has no user interface included. Instead, it defines HTTP flows and",source:"@site/versioned_docs/version-v0.2/concepts/ui-user-interface.md",sourceDirName:"concepts",slug:"/concepts/ui-user-interface",permalink:"/kratos/docs/v0.2/concepts/ui-user-interface",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.2/concepts/ui-user-interface.md",version:"v0.2",lastUpdatedBy:"aeneasr",lastUpdatedAt:1588605498,formattedLastUpdatedAt:"5/4/2020",frontMatter:{id:"ui-user-interface",title:"User Interface"},sidebar:"version-v0.2/docs",previous:{title:"Overview",permalink:"/kratos/docs/v0.2/concepts/index"},next:{title:"Identity Data Model",permalink:"/kratos/docs/v0.2/concepts/identity-user-model"}},c=[{value:"Administrative User Interface (Admin UI)",id:"administrative-user-interface-admin-ui",children:[]},{value:"Self-service User Interface (SSUI)",id:"self-service-user-interface-ssui",children:[]}],u={toc:c};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"ORY Kratos has no user interface included. Instead, it defines HTTP flows and\nAPIs that make it simple to write your own UI in a variety of languages and\nframeworks."),Object(o.b)("p",null,"The following two examples are typical UIs used in connection with ORY Kratos."),Object(o.b)("h2",{id:"administrative-user-interface-admin-ui"},"Administrative User Interface (Admin UI)"),Object(o.b)("p",null,"The AUI might show all of the identities in the system and provide features to\nadministrators such as editing profiles, resetting passwords, and so on."),Object(o.b)("p",null,"At present, there is no Open Source AUI for ORY Kratos."),Object(o.b)("h2",{id:"self-service-user-interface-ssui"},"Self-service User Interface (SSUI)"),Object(o.b)("p",null,'The SSUI shows screens such as "login", "Registration", "Update your profile",\n"Recover your account", and others. The following provides more reference for\nSSUI at\n',Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/kratos-selfservice-ui-node"},"github.com/ory/kratos-selfservice-ui-node"),"."),Object(o.b)("p",null,"The SSUI can be built in any programming language including Java, Node, or\nPython and can be run both a server or a end-user device for example a browser,\nor a mobile phone. Implementing a SSUI is simple and straight forward. There is\nno complex authentication mechanism required and no need to worry about possible\nattack vectors such as CSRF or Session Attacks since ORY Kratos provides the\npreventive measures built in."),Object(o.b)("p",null,"Chapter ",Object(o.b)("a",{parentName:"p",href:"/kratos/docs/v0.2/self-service/flows/index"},"Self-Service Flows")," contains further\ninformation on APIs and flows related to the SSUI, and build self service\napplications."))}l.isMDXComponent=!0},454:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||o;return r?i.a.createElement(m,s(s({ref:t},u),{},{components:r})):i.a.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);