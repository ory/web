(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[7668],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(y,o(o({ref:t},l),{},{components:n})):r.createElement(y,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49004:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],s={id:"multi-tenancy-multitenant",title:"Multitenancy"},c=void 0,u={unversionedId:"guides/multi-tenancy-multitenant",id:"version-v0.6/guides/multi-tenancy-multitenant",isDocsHomePage:!1,title:"Multitenancy",description:"Ory Kratos does not implement multi-tenancy in its application logic, but it is",source:"@site/versioned_docs/version-v0.6/guides/multi-tenancy-multitenant.md",sourceDirName:"guides",slug:"/guides/multi-tenancy-multitenant",permalink:"/kratos/docs/guides/multi-tenancy-multitenant",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/guides/multi-tenancy-multitenant.md",version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619690398,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"multi-tenancy-multitenant",title:"Multitenancy"},sidebar:"version-v0.6/docs",previous:{title:"Zero Trust with IAP Proxy",permalink:"/kratos/docs/guides/zero-trust-iap-proxy-identity-access-proxy"},next:{title:"Secret and Key Rotation",permalink:"/kratos/docs/guides/secret-key-rotation"}},l=[],p={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ory Kratos does not implement multi-tenancy in its application logic, but it is\npossible to implement multi-tenancy with Ory Kratos!"),(0,i.kt)("p",null,"The recommended approach is to run one or more (depending on your scale) SQL\ndatabases and create one database schema per tenant in these database instances.\nSo one PostgreSQL database instance could, for example, host 15000 tenants who\neach have access to one schema."),(0,i.kt)("p",null,"Ory Kratos itself should run as one instance per tenant with a configuration\ntailored for that specific tenant. The minimum required change is using\ndifferent secrets and the tenant's DSN\n(",(0,i.kt)("inlineCode",{parentName:"p"},"postgresql://user:pass@.../tenant-123"),"). Because Ory Kratos is very\nlightweight, the deployment overhead becomes negligible."),(0,i.kt)("p",null,"While deployment complexity increases - but is addressable with e.g.\nKubernetes - this approach has several advantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Absolute isolation of tenants which implies: better security, better privacy,\nmore control."),(0,i.kt)("li",{parentName:"ul"},"Easy sharding and partitioning because database schemas isolate tenants."),(0,i.kt)("li",{parentName:"ul"},"No complexity in Ory Kratos' business logic and security defenses.")))}d.isMDXComponent=!0}}]);