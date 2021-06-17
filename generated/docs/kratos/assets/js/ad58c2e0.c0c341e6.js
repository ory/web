(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[6233],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=o.createContext({}),u=function(e){var t=o.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(a.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(a,".").concat(d)]||p[d]||f[d]||s;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=p;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<s;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},74371:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return a},default:function(){return c}});var o=r(22122),n=r(19756),s=(r(67294),r(3905)),i={id:"user-logout",title:"User Logout"},l={unversionedId:"self-service/flows/user-logout",id:"self-service/flows/user-logout",isDocsHomePage:!1,title:"User Logout",description:"Ory Kratos supports two logout flows:",source:"@site/docs/self-service/flows/user-logout.md",sourceDirName:"self-service/flows",slug:"/self-service/flows/user-logout",permalink:"/kratos/docs/next/self-service/flows/user-logout",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/self-service/flows/user-logout.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619624197,formattedLastUpdatedAt:"4/28/2021",frontMatter:{id:"user-logout",title:"User Logout"},sidebar:"docs",previous:{title:"Email and Phone Verification and Account Activation",permalink:"/kratos/docs/next/self-service/flows/verify-email-account-activation"},next:{title:"User-Facing Errors",permalink:"/kratos/docs/next/self-service/flows/user-facing-errors"}},a=[{value:"Self-Service User Logout for Browser Applications",id:"self-service-user-logout-for-browser-applications",children:[]},{value:"Self-Service User Logout for API Clients",id:"self-service-user-logout-for-api-clients",children:[]}],u={toc:a};function c(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Ory Kratos supports two logout flows:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Browser-based (easy): This flow works for all applications running on top of a\nbrowser. Websites, single-page apps, Cordova/Ionic, and so on."),(0,s.kt)("li",{parentName:"ul"},"API-based (advanced): This flow works for native applications like iOS\n(Swift), Android (Java), Microsoft (.NET), React Native, Electron, and others.")),(0,s.kt)("h2",{id:"self-service-user-logout-for-browser-applications"},"Self-Service User Logout for Browser Applications"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"WARNING - This flow is currently vulnerable to CSRF attacks because anyone can\ndirect your users to the logout endpoint. A future release of Ory Kratos will\nuse POST Forms with Anti-CSRF Tokens to prevent this problem. This is tracked\nas ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/142"},"kratos#142"),".")),(0,s.kt)("p",null,"To log a user out, all you have to do is to direct the browser to\n",(0,s.kt)("inlineCode",{parentName:"p"},"http://ory-kratos-public/self-service/browser/flows/logout"),". After successful\nlogout, the browser will be redirected either to the ",(0,s.kt)("inlineCode",{parentName:"p"},"return_to")," query parameter\nfrom the initial request URL, or fall back to the ",(0,s.kt)("inlineCode",{parentName:"p"},"default_browser_return_url"),"\nvalue set in Ory Kratos' configuration file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"selfservice:\n  flows:\n    logout:\n      after:\n        default_browser_return_url: http://test.kratos.ory.sh:4000/\n")),(0,s.kt)("h2",{id:"self-service-user-logout-for-api-clients"},"Self-Service User Logout for API Clients"),(0,s.kt)("p",null,"This will be addressed in a future release of Ory Kratos."))}c.isMDXComponent=!0}}]);