(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[7211],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35801:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var n=r(22122),i=r(19756),a=(r(67294),r(3905)),o={id:"high-availability-ha",title:"High Availability"},s={unversionedId:"guides/high-availability-ha",id:"version-v0.6/guides/high-availability-ha",isDocsHomePage:!1,title:"High Availability",description:"This document explains how to set up Ory Kratos in for High Availability.",source:"@site/versioned_docs/version-v0.6/guides/high-availability-ha.md",sourceDirName:"guides",slug:"/guides/high-availability-ha",permalink:"/kratos/docs/guides/high-availability-ha",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/guides/high-availability-ha.md",version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619690398,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"high-availability-ha",title:"High Availability"},sidebar:"version-v0.6/docs",previous:{title:"Secret and Key Rotation",permalink:"/kratos/docs/guides/secret-key-rotation"},next:{title:"Docker Images",permalink:"/kratos/docs/guides/docker"}},l=[],u={toc:l};function c(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document explains how to set up Ory Kratos in for High Availability."),(0,a.kt)("h1",{id:"horizontal-scaling"},"Horizontal Scaling"),(0,a.kt)("p",null,"Ory Kratos scales effortlessly to thousands of pods without any additional work!"),(0,a.kt)("h1",{id:"mail-courier"},"Mail courier"),(0,a.kt)("p",null,"Ory Kratos processes emails by storing them in an email queue on your database\nand running a mail courier worker to handle this queue. To avoid processing the\nsame email multiple times, only one instance of this mail courier should be run\nat one time. For simple single-instance Kratos deployments, the courier can\nsimply be run as a background worker, but for multi-instance Kratos deployments,\nit needs to be run a distinct singleton foreground worker. For setup details,\nrefer to the ",(0,a.kt)("a",{parentName:"p",href:"/kratos/docs/concepts/email-sms"},"Out of Band Communication guide"),"."),(0,a.kt)("p",null,"Ory Kratos does not have any special requirements when it comes to High\nAvailability as it does not manage state itself but instead relies on the SQL\ndatabase for that."),(0,a.kt)("p",null,"It is therefore possible to use Ory Kratos with Auto-Scaling Groups (e.g. in\nKubernetes) without any additional configuration."))}c.isMDXComponent=!0}}]);