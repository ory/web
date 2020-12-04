(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||c;return n?o.a.createElement(m,a(a({ref:t},u),{},{components:n})):o.a.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var u=2;u<c;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),c=(n(0),n(441)),i={id:"terminology",title:"Terminology"},a={unversionedId:"concepts/terminology",id:"concepts/terminology",isDocsHomePage:!1,title:"Terminology",description:"The purpose of this document is to define terminology used through this",source:"@site/docs/concepts/terminology.mdx",slug:"/concepts/terminology",permalink:"/kratos/docs/next/concepts/terminology",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/concepts/terminology.mdx",version:"current",lastUpdatedBy:"hackerman",lastUpdatedAt:1603030051,sidebar:"docs",previous:{title:"Overview",permalink:"/kratos/docs/next/concepts/index"},next:{title:"User Interface",permalink:"/kratos/docs/next/concepts/ui-user-interface"}},s=[{value:"End-User",id:"end-user",children:[]},{value:"Identity",id:"identity",children:[]},{value:"Self-Service",id:"self-service",children:[]}],u={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The purpose of this document is to define terminology used through this\ndocumentation."),Object(c.b)("h2",{id:"end-user"},"End-User"),Object(c.b)("p",null,"The person who actually uses a particular product that uses ORY Kratos."),Object(c.b)("h2",{id:"identity"},"Identity"),Object(c.b)("p",null,'the "who" of a software system. It can be a customer, employee, user,\ncontractor, or even a programmatic identity such as an IoT device, application,\nor some other type of "robot."'),Object(c.b)("p",null,'Common aliases are "user", "user account", "account", "subject".'),Object(c.b)("h2",{id:"self-service"},"Self-Service"),Object(c.b)("p",null,"Interfaces and flows allowing customers to produce services independent of\ninvolvement of direct service employee."),Object(c.b)("p",null,"You perform self-service registration when signing up for a new Google account,\nbecause no one (e.g. support) else is involved in the process."))}l.isMDXComponent=!0}}]);