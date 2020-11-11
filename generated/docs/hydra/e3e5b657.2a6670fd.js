(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{411:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(2),r=n(6),i=(n(0),n(470)),a={id:"logout",title:"Logout not Working as Expected"},c={unversionedId:"debug/logout",id:"version-v1.9/debug/logout",isDocsHomePage:!1,title:"Logout not Working as Expected",description:"Sometimes, calling /oauth2/sessions/logout does not behave as expected, for",source:"@site/versioned_docs/version-v1.9/debug/logout.mdx",slug:"/debug/logout",permalink:"/hydra/docs/debug/logout",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/debug/logout.mdx",version:"v1.9",sidebar:"version-v1.9/docs",previous:{title:"Wrong Token Endpoint Auth Method",permalink:"/hydra/docs/debug/token-endpoint-auth-method"},next:{title:"Software Development Kits (SDKs)",permalink:"/hydra/docs/sdk"}},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Sometimes, calling ",Object(i.b)("inlineCode",{parentName:"p"},"/oauth2/sessions/logout")," does not behave as expected, for\nexample:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An error occurs."),Object(i.b)("li",{parentName:"ul"},"You are being redirected directly to the post_logout_redirect_uri instead of\nthe logout UI.")),Object(i.b)("p",null,'First of all, there are two types of logout requests - one is called "OP (OpenID\nProvider) Initiated" and one "RP (Relying Party) Initiated". The first flow MUST\nNEITHER contain the ',Object(i.b)("inlineCode",{parentName:"p"},"id_token_hint"),", nor a ",Object(i.b)("inlineCode",{parentName:"p"},"state"),", nor\n",Object(i.b)("inlineCode",{parentName:"p"},"post_logout_redirect_uri"),"."),Object(i.b)("p",null,"If no active authentication session is set at ORY Hydra, the browser will be\nredirected immediately to the system-wide configured post logout redirect URI."),Object(i.b)("p",null,"An active session may be missing because:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You are mixing up domain names (e.g. 127.0.0.1 and localhost - ",Object(i.b)("strong",{parentName:"li"},"this is a\ncommon mistake"),")"),Object(i.b)("li",{parentName:"ul"},"You are running ORY Hydra behind a proxy that messes with Cookies"),Object(i.b)("li",{parentName:"ul"},"You are using a Browser with a very strict privacy policy which makes it\ndifficult or impossible for ORY Hydra to properly set cookies. We've observed\nthat the ",Object(i.b)("strong",{parentName:"li"},"Brave Browser")," is very, very difficult here."),Object(i.b)("li",{parentName:"ul"},"You did not set ",Object(i.b)("inlineCode",{parentName:"li"},"remember: true")," when accepting the login request")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Before filing a bug report, make sure you actually have a cookie named\n",Object(i.b)("inlineCode",{parentName:"strong"},"oauth2_authentication_session")," for the URL ORY Hydra is running on, and\nespecially for the domain that's in your ",Object(i.b)("inlineCode",{parentName:"strong"},"http://.../oauth2/sessions/logout"))),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"id_token_hint")," is set, you may define both ",Object(i.b)("inlineCode",{parentName:"p"},"state")," and\n",Object(i.b)("inlineCode",{parentName:"p"},"post_logout_redirect_uri"),". The same problems can cause this flow to behave\nunexpectedly as listed above, with the only difference that now ORY Hydra knows\nwho the user to be logged out is (from the ",Object(i.b)("inlineCode",{parentName:"p"},"id_token_hint"),") and if any\nFront-/Back-channel Logout is configured for that client, it will be executed\neven if there is no valid authentication session for that user in ORY Hydra."))}u.isMDXComponent=!0},470:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=o,m=d["".concat(a,".").concat(b)]||d[b]||p[b]||i;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);