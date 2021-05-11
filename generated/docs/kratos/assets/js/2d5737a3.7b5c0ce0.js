(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var o=n(3),r=n(8),i=(n(0),n(553)),a={id:"multi-domain-cookies",title:"Getting Cookies to Work on Multi-Domains"},s={unversionedId:"guides/multi-domain-cookies",id:"version-v0.5/guides/multi-domain-cookies",isDocsHomePage:!1,title:"Getting Cookies to Work on Multi-Domains",description:"ORY Kratos' browser features rely heavily on HTTP Cookies to mitigate common",source:"@site/versioned_docs/version-v0.5/guides/multi-domain-cookies.mdx",sourceDirName:"guides",slug:"/guides/multi-domain-cookies",permalink:"/kratos/docs/v0.5/guides/multi-domain-cookies",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/guides/multi-domain-cookies.mdx",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1602674546,formattedLastUpdatedAt:"10/14/2020",frontMatter:{id:"multi-domain-cookies",title:"Getting Cookies to Work on Multi-Domains"}},c=[],l={toc:c};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"ORY Kratos' browser features rely heavily on HTTP Cookies to mitigate common\nattack vectors and make the integration as easy as possible to use. Therefore it\nis important to know that"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://stackoverflow.com/questions/1612177/are-http-cookies-port-specific"},"HTTP Cookies ignore ports"),",\nmeaning the browser will send a cookie it received for\n",Object(i.b)("inlineCode",{parentName:"li"},"http://my-domain.com:1234")," to ",Object(i.b)("inlineCode",{parentName:"li"},"http://my-domain.com:4321")," as well."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://stackoverflow.com/questions/18492576/share-cookie-between-subdomain-and-domain"},"Subdomains can set HTTP Cookies for parent domains"),",\nmeaning a HTTP Cookie specifying ",Object(i.b)("inlineCode",{parentName:"li"},"domain=my-domain.com")," will be allowed to\nset even if the URL is ",Object(i.b)("inlineCode",{parentName:"li"},"http://sub.my-domain.com")," or\n",Object(i.b)("inlineCode",{parentName:"li"},"http://sub.sub.my-domain.com"),".")),Object(i.b)("p",null,"You can adjust the session cookie's domain using:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'},"session:\n  cookie:\n    domain: my-domain.com\n")),Object(i.b)("p",null,"What ",Object(i.b)("strong",{parentName:"p"},"is not")," currently possible is to set up ORY Kratos in a way where you\nget session cookies running on two separate top level domains (e.g.\n",Object(i.b)("inlineCode",{parentName:"p"},"my-domain.com")," and ",Object(i.b)("inlineCode",{parentName:"p"},"another-domain.com"),"). This is tracked as\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/662"},"kratos#662"),"."))}m.isMDXComponent=!0},553:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),m=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=m(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=m(n),d=o,b=u["".concat(a,".").concat(d)]||u[d]||p[d]||i;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);