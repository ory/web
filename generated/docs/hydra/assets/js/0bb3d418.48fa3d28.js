(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{568:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,b=p["".concat(a,".").concat(h)]||p[h]||s[h]||i;return n?r.a.createElement(b,c(c({ref:t},l),{},{components:n})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var o=n(3),r=n(8),i=(n(0),n(568)),a={id:"token-endpoint-auth-method",title:"Wrong Token Endpoint Auth Method"},c={unversionedId:"debug/token-endpoint-auth-method",id:"version-v1.10/debug/token-endpoint-auth-method",isDocsHomePage:!1,title:"Wrong Token Endpoint Auth Method",description:"There are multiple ways of authenticating OAuth 2.0 Clients at the",source:"@site/versioned_docs/version-v1.10/debug/token-endpoint-auth-method.mdx",slug:"/debug/token-endpoint-auth-method",permalink:"/hydra/docs/debug/token-endpoint-auth-method",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/debug/token-endpoint-auth-method.mdx",version:"v1.10",lastUpdatedBy:"aeneasr",lastUpdatedAt:1616672187,formattedLastUpdatedAt:"3/25/2021",sidebar:"version-v1.10/docs",previous:{title:"Debug Configuration",permalink:"/hydra/docs/debug/config"},next:{title:"Logout not Working as Expected",permalink:"/hydra/docs/debug/logout"}},u=[],l={toc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are multiple ways of authenticating OAuth 2.0 Clients at the\n",Object(i.b)("inlineCode",{parentName:"p"},"/oauth2/token"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"HTTP Basic Authorization (",Object(i.b)("inlineCode",{parentName:"li"},"client_secret_basic"),") - the OAuth 2.0 Client ID and\nsecret are sent in the HTTP Header (",Object(i.b)("inlineCode",{parentName:"li"},"Authorization: basic ...."),")"),Object(i.b)("li",{parentName:"ul"},"HTTP Body (",Object(i.b)("inlineCode",{parentName:"li"},"client_secret_post"),") - the OAuth 2.0 Client ID and secret are sent\nin the POST body (",Object(i.b)("inlineCode",{parentName:"li"},"Content-Type: application/x-www-form-urlencoded"),")")),Object(i.b)("p",null,"Both are valid schemes. But the OAuth 2.0 Client has to be configured to allow\neither of the one. Per default, the OAuth 2.0 Client allows HTTP Basic\nAuthorization only. You can check which method is allowed:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'hydra clients get --endpoint http://ory-hydra <the-client-id>\n{\n        // ...\n        "token_endpoint_auth_method": "client_secret_basic",\n        // ...\n}\n')),Object(i.b)("p",null,"As you can see, this client is allowed to authorize using HTTP Basic\nAuthorization. If you try to authorize with the client credentials in the POST\nbody, the authentication process will fail. To allow a client to perform the\nPOST authorization scheme, you must set\n",Object(i.b)("inlineCode",{parentName:"p"},'"token_endpoint_auth_method": "client_secret_post"'),". You can do this in the CLI\nwith the ",Object(i.b)("inlineCode",{parentName:"p"},"--token-endpoint-auth-method")," flag."))}d.isMDXComponent=!0}}]);