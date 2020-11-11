(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{182:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var o=r(2),n=r(6),s=(r(0),r(422)),i={id:"user-logout",title:"User Logout"},a={unversionedId:"self-service/flows/user-logout",id:"version-v0.3/self-service/flows/user-logout",isDocsHomePage:!1,title:"User Logout",description:"ORY Kratos supports two logout flows:",source:"@site/versioned_docs/version-v0.3/self-service/flows/user-logout.md",slug:"/self-service/flows/user-logout",permalink:"/kratos/docs/v0.3/self-service/flows/user-logout",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.3/self-service/flows/user-logout.md",version:"v0.3",lastUpdatedBy:"aeneasr",lastUpdatedAt:1589548840,sidebar:"version-v0.3/docs",previous:{title:"Link and Unlink OpenID Connect and OAuth2 Connections",permalink:"/kratos/docs/v0.3/self-service/flows/user-settings/link-unlink-openid-connect-oauth2"},next:{title:"Account Recovery",permalink:"/kratos/docs/v0.3/self-service/flows/password-reset-account-recovery"}},l=[{value:"Self-Service User Logout for Browser Applications",id:"self-service-user-logout-for-browser-applications",children:[]},{value:"Self-Service User Logout for API Clients",id:"self-service-user-logout-for-api-clients",children:[]}],c={rightToc:l};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"ORY Kratos supports two logout flows:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Browser-based (easy): This flow works for all applications running on top of a\nbrowser. Websites, single-page apps, Cordova/Ionic, and so on."),Object(s.b)("li",{parentName:"ul"},"API-based (advanced): This flow works for native applications like iOS\n(Swift), Android (Java), Microsoft (.NET), React Native, Electron, and others.")),Object(s.b)("h2",{id:"self-service-user-logout-for-browser-applications"},"Self-Service User Logout for Browser Applications"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"WARNING - This flow is currently vulnerable to CSRF attacks because anyone can\ndirect your users to the logout endpoint. A future release of ORY Kratos will\nuse POST Forms with Anti-CSRF Tokens to prevent this problem. This is tracked\nas ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/ory/kratos/issues/142"}),"kratos#142"),".")),Object(s.b)("p",null,"To log a user out, all you have to do is to direct the browser to\n",Object(s.b)("inlineCode",{parentName:"p"},"http://ory-kratos-public/auth/browser/logout"),". After successful logout, the\nbrowser will be redirected to the ",Object(s.b)("inlineCode",{parentName:"p"},"redirect_to")," value set in ORY Krato's\nconfiguration file:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{}),"selfservice:\n  logout:\n    redirect_to: http://test.kratos.ory.sh:4000/\n")),Object(s.b)("h2",{id:"self-service-user-logout-for-api-clients"},"Self-Service User Logout for API Clients"),Object(s.b)("p",null,"This will be addressed in a future release of ORY Kratos."))}u.isMDXComponent=!0},422:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var o=r(0),n=r.n(o);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=o,d=p["".concat(i,".").concat(b)]||p[b]||f[b]||s;return r?n.a.createElement(d,a(a({ref:t},c),{},{components:r})):n.a.createElement(d,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=b;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=r[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);