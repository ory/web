(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[7369],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return l},kt:function(){return d}});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),u=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=u(e.components);return o.createElement(i.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(t),d=n,v=p["".concat(i,".").concat(d)]||p[d]||f[d]||s;return t?o.createElement(v,c(c({ref:r},l),{},{components:t})):o.createElement(v,c({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,c=new Array(s);c[0]=p;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var u=2;u<s;u++)c[u]=t[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58657:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var o=t(22122),n=t(19756),s=(t(67294),t(3905)),c=["components"],a={id:"password-reset-account-recovery",title:"Account Recovery"},i=void 0,u={unversionedId:"self-service/flows/password-reset-account-recovery",id:"version-v0.2/self-service/flows/password-reset-account-recovery",isDocsHomePage:!1,title:"Account Recovery",description:"Account Recovery must be performed if access to an account needs to be",source:"@site/versioned_docs/version-v0.2/self-service/flows/password-reset-account-recovery.md",sourceDirName:"self-service/flows",slug:"/self-service/flows/password-reset-account-recovery",permalink:"/kratos/docs/v0.2/self-service/flows/password-reset-account-recovery",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.2/self-service/flows/password-reset-account-recovery.md",version:"v0.2",lastUpdatedBy:"aeneasr",lastUpdatedAt:1588605498,formattedLastUpdatedAt:"5/4/2020",frontMatter:{id:"password-reset-account-recovery",title:"Account Recovery"},sidebar:"version-v0.2/docs",previous:{title:"User Settings and Profile Management",permalink:"/kratos/docs/v0.2/self-service/flows/user-settings-profile-management"},next:{title:"User-Facing Errors",permalink:"/kratos/docs/v0.2/self-service/flows/user-facing-errors"}},l=[{value:"Forgot Password",id:"forgot-password",children:[]}],f={toc:l};function p(e){var r=e.components,t=(0,n.Z)(e,c);return(0,s.kt)("wrapper",(0,o.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Account Recovery must be performed if access to an account needs to be\nrecovered. Common use cases include:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'"Forgot password" flows'),(0,s.kt)("li",{parentName:"ul"},'"Lost MFA device" flows'),(0,s.kt)("li",{parentName:"ul"},"...")),(0,s.kt)("h2",{id:"forgot-password"},"Forgot Password"),(0,s.kt)("p",null,"The forgot password flow is a work in progress and will be implemented in a\nfuture release of ORY Kratos."))}p.isMDXComponent=!0}}]);