(window.webpackJsonp=window.webpackJsonp||[]).push([[461],{534:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return s})),n.d(r,"default",(function(){return l}));var t=n(3),a=n(8),o=(n(0),n(570)),i={id:"scaling-hydra",title:"Scaling ORY Hydra"},c={unversionedId:"guides/scaling-hydra",id:"guides/scaling-hydra",isDocsHomePage:!1,title:"Scaling ORY Hydra",description:"ORY Hydra is running in high-scale production environments that do millions of",source:"@site/docs/guides/scaling-hydra.mdx",sourceDirName:"guides",slug:"/guides/scaling-hydra",permalink:"/hydra/docs/next/guides/scaling-hydra",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/guides/scaling-hydra.mdx",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1595248858,formattedLastUpdatedAt:"7/20/2020",frontMatter:{id:"scaling-hydra",title:"Scaling ORY Hydra"},sidebar:"docs",previous:{title:"Configuring Cookies",permalink:"/hydra/docs/next/guides/cookies"},next:{title:"Setting up Cross-origin resource sharing (CORS)",permalink:"/hydra/docs/next/guides/cors"}},s=[],u={toc:s};function l(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"ORY Hydra is running in high-scale production environments that do millions of\nrequests per day. To scale ORY Hydra, simply spin up another VM / Docker\nContainer / Pod of ORY Hydra with the same configuration. There is no need for\ncomplex key/value stores or message queues to serve high traffic environments!"),Object(o.b)("p",null,"If you use multiple SQL instances make use of HAProxy or similar technology to\ndo\n",Object(o.b)("a",{parentName:"p",href:"https://severalnines.com/resources/database-management-tutorials/mysql-load-balancing-haproxy-tutorial"},"SQL Load Balancing"),"."))}l.isMDXComponent=!0},570:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return f}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var r=a.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},d=function(e){var r=l(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},y=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),y=t,f=d["".concat(i,".").concat(y)]||d[y]||p[y]||o;return n?a.a.createElement(f,c(c({ref:r},u),{},{components:n})):a.a.createElement(f,c({ref:r},u))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=y;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);