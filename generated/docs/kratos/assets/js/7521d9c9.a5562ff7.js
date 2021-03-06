(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{232:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return l}));var o=t(3),n=t(8),a=(t(0),t(452)),s={id:"performance-out-of-memory-password-hashing-argon2",title:"Performance Problems and Out Of Memory Panics Caused by Password Hashing"},c={unversionedId:"debug/performance-out-of-memory-password-hashing-argon2",id:"version-v0.5/debug/performance-out-of-memory-password-hashing-argon2",isDocsHomePage:!1,title:"Performance Problems and Out Of Memory Panics Caused by Password Hashing",description:"To securely check if passwords match, ORY Kratos stores the Argon2 hash of every",source:"@site/versioned_docs/version-v0.5/debug/performance-out-of-memory-password-hashing-argon2.md",slug:"/debug/performance-out-of-memory-password-hashing-argon2",permalink:"/kratos/docs/debug/performance-out-of-memory-password-hashing-argon2",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/debug/performance-out-of-memory-password-hashing-argon2.md",version:"v0.5",lastUpdatedBy:"Vincent",lastUpdatedAt:1613999369,formattedLastUpdatedAt:"2/22/2021",sidebar:"version-v0.5/docs",previous:{title:"Common Cookie and CSRF Pitfalls",permalink:"/kratos/docs/debug/csrf"},next:{title:"SDKs",permalink:"/kratos/docs/sdk"}},i=[{value:"Common Errors",id:"common-errors",children:[]}],u={toc:i};function l(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To securely check if passwords match, ORY Kratos stores the Argon2 hash of every\npassword. This algorithm has to be tuned to match the desired security level as\nwell as responsiveness. Because it is not easy to determine the exact values\nwithout trying them out, ORY Kratos comes with a\n",Object(a.b)("a",{parentName:"p",href:"/kratos/docs/cli/kratos-hashers-argon2-calibrate"},"CLI")," that automatically calibrates\nthe values, following best practices. You can read more about these best\npractices in our\n",Object(a.b)("a",{parentName:"p",href:"https://www.ory.sh/choose-recommended-argon2-parameters-password-hashing/"},"blog post"),"."),Object(a.b)("h2",{id:"common-errors"},"Common Errors"),Object(a.b)("p",null,"There are some errors that indicate your Argon2 parameters need adjustment:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Very slow login and registration requests, might cause network timeouts;"),Object(a.b)("li",{parentName:"ol"},"ORY Kratos fails with ",Object(a.b)("inlineCode",{parentName:"li"},"fatal error: runtime: out of memory"),";"),Object(a.b)("li",{parentName:"ol"},"The host environment (e.g. Minikube, Docker, Kubernetes...) crashes or\nbecomes unresponsive;")),Object(a.b)("p",null,"In any of these cases, try reducing the resources used by Argon2 or increasing\nthe resources available to Kratos. Use the\n",Object(a.b)("a",{parentName:"p",href:"/kratos/docs/cli/kratos-hashers-argon2-calibrate"},"Argon2 calibrate CLI")," to detect the\nbest practice values for your server. Note that the calibration has to be done\nunder the exact same conditions that the server runs at."))}l.isMDXComponent=!0},452:function(e,r,t){"use strict";t.d(r,"a",(function(){return m})),t.d(r,"b",(function(){return b}));var o=t(0),n=t.n(o);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=n.a.createContext({}),l=function(e){var r=n.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},m=function(e){var r=l(e.components);return n.a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},d=n.a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return t?n.a.createElement(b,c(c({ref:r},u),{},{components:t})):n.a.createElement(b,c({ref:r},u))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=t[u];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);