(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[1245],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},17287:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return a},toc:function(){return l},default:function(){return u}});var n=r(22122),o=r(19756),i=(r(67294),r(3905)),s={id:"index",title:"Overview"},a={unversionedId:"self-service/flows/index",id:"version-v0.2/self-service/flows/index",isDocsHomePage:!1,title:"Overview",description:"ORY Kratos allows end-users to sign up, log in, log out, update profile",source:"@site/versioned_docs/version-v0.2/self-service/flows/index.md",sourceDirName:"self-service/flows",slug:"/self-service/flows/index",permalink:"/kratos/docs/v0.2/self-service/flows/index",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.2/self-service/flows/index.md",version:"v0.2",lastUpdatedBy:"aeneasr",lastUpdatedAt:1600065426,formattedLastUpdatedAt:"9/14/2020",frontMatter:{id:"index",title:"Overview"},sidebar:"version-v0.2/docs",previous:{title:"Before you start reading",permalink:"/kratos/docs/v0.2/self-service/index"},next:{title:"User Login and User Registration",permalink:"/kratos/docs/v0.2/self-service/flows/user-login-user-registration"}},l=[{value:"Network Flows for Browsers",id:"network-flows-for-browsers",children:[]}],c={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'ORY Kratos allows end-users to sign up, log in, log out, update profile\ninformation, recover accounts, and perform other important account management\ntasks without third party involvement ("self-service").'),(0,i.kt)("p",null,"The opposite to self-service management is someone using administrative\nprivileges to create, update, or delete accounts."),(0,i.kt)("h2",{id:"network-flows-for-browsers"},"Network Flows for Browsers"),(0,i.kt)("p",null,"All Self-Service Flows such as ",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/v0.2/self-service/flows/user-login-user-registration"},"User Login and User Registration"),",\n",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/v0.2/self-service/flows/user-settings-profile-management"},"Profile Management")," use the same template:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The Browser makes an HTTP request to the flow's initialization endpoint (e.g.\n",(0,i.kt)("inlineCode",{parentName:"li"},"/auth/browser/login"),");"),(0,i.kt)("li",{parentName:"ol"},"The initialization endpoint processes data and associates it with a request\nID and redirects the browser to the flow's configured UI URL (e.g.\n",(0,i.kt)("inlineCode",{parentName:"li"},"urls.login_ui"),"), appending the request ID as the ",(0,i.kt)("inlineCode",{parentName:"li"},"request")," URL Query\nParameter;"),(0,i.kt)("li",{parentName:"ol"},"The endpoint responsible for the UI URL uses the ",(0,i.kt)("inlineCode",{parentName:"li"},"request")," URL Query\nParameter (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"http://my-app/auth/login?request=abcde"),") to fetch the data\npreviously associated with the Request ID from either ORY Kratos's Public or\nAdmin API."),(0,i.kt)("li",{parentName:"ol"},"The UI endpoint renders the fetched data in any way it sees it fit. The flow\nis typically completed by the browser making another request to one of ORY\nKratos' endpoints, which is usually described in the fetched request data.")))}u.isMDXComponent=!0}}]);