(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[523],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||l[f]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36260:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a={id:"production",title:"Going to Production"},u={unversionedId:"guides/production",id:"version-v0.6/guides/production",isDocsHomePage:!1,title:"Going to Production",description:"This document is still in development.",source:"@site/versioned_docs/version-v0.6/guides/production.md",sourceDirName:"guides",slug:"/guides/production",permalink:"/kratos/docs/guides/production",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/guides/production.md",version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619690398,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"production",title:"Going to Production"}},c=[{value:"Database",id:"database",children:[]},{value:"Security",id:"security",children:[{value:"Admin API",id:"admin-api",children:[]}]},{value:"Scaling",id:"scaling",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,":::warn"),(0,i.kt)("p",null,"This document is still in development."),(0,i.kt)("p",null,":::"),(0,i.kt)("h2",{id:"database"},"Database"),(0,i.kt)("p",null,"Ory Kratos requires a production-grade database such as PostgreSQL, MySQL,\nCockroachDB. Do not use SQLite in production!"),(0,i.kt)("h2",{id:"security"},"Security"),(0,i.kt)("p",null,"When preparing for production it is paramount to omit the ",(0,i.kt)("inlineCode",{parentName:"p"},"--dev")," flag from\n",(0,i.kt)("inlineCode",{parentName:"p"},"kratos serve"),"."),(0,i.kt)("h3",{id:"admin-api"},"Admin API"),(0,i.kt)("p",null,"Never expose the Ory Kratos Admin API to the internet unsecured. Always require\nauthorization. A good practice is to not expose the Admin API at all to the\npublic internet and use a Zero Trust Networking Architecture within your\nintranet."),(0,i.kt)("h2",{id:"scaling"},"Scaling"),(0,i.kt)("p",null,"There are no additional requirements for scaling Ory Kratos, just spin up\nanother container!"))}d.isMDXComponent=!0}}]);