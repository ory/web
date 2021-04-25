(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{272:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(8),a=(n(0),n(570)),i=(n(571),{id:"using-oauth2",title:"Using OAuth2"}),u={unversionedId:"guides/using-oauth2",id:"version-v1.6/guides/using-oauth2",isDocsHomePage:!1,title:"Using OAuth2",description:"Please, do not write your own code to interact with OAuth 2.0. Use open",source:"@site/versioned_docs/version-v1.6/guides/using-oauth2.mdx",sourceDirName:"guides",slug:"/guides/using-oauth2",permalink:"/hydra/docs/v1.6/guides/using-oauth2",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.6/guides/using-oauth2.mdx",version:"v1.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1595248858,formattedLastUpdatedAt:"7/20/2020",frontMatter:{id:"using-oauth2",title:"Using OAuth2"},sidebar:"version-v1.6/docs",previous:{title:"Using Common OAuth2 and OpenID Connect Flows",permalink:"/hydra/docs/v1.6/guides/common-oauth2-openid-connect-flows"},next:{title:"OAuth 2.0 Token Introspection",permalink:"/hydra/docs/v1.6/guides/oauth2-token-introspection"}},c=[],s={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Please, do not write your own code to interact with OAuth 2.0"),". Use open\nsource & battle-tested libraries instead. Here are some examples:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"NodeJS",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"http://www.passportjs.org/"},"passport")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/lelylan/simple-oauth2"},"simple-oauth2")))),Object(a.b)("li",{parentName:"ul"},"Golang",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/golang/oauth2"},"golang/oauth2")," ","*",Object(a.b)("em",{parentName:"li"},"recommended")))),Object(a.b)("li",{parentName:"ul"},"PHP",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/thephpleague/oauth2-client"},"oauth2-client")))),Object(a.b)("li",{parentName:"ul"},"Java",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://spring.io/projects/spring-security-oauth"},"Spring Security OAuth"))))),Object(a.b)("p",null,"For a full list of client libraries go ",Object(a.b)("a",{parentName:"p",href:"https://oauth.net/code/"},"here"),"."))}l.isMDXComponent=!0},570:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(f,u(u({ref:t},s),{},{components:n})):o.a.createElement(f,u({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},571:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(16),o=n(572);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,u=void 0!==i&&i,c=a.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},572:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))}}]);