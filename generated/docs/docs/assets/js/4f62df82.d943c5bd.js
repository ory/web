(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{122:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return b}));var o=t(0),n=t.n(o);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),y=function(e){var r=n.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=y(e.components);return n.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},d=n.a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=y(t),d=o,b=s["".concat(a,".").concat(d)]||s[d]||u[d]||i;return t?n.a.createElement(b,c(c({ref:r},l),{},{components:t})):n.a.createElement(b,c({ref:r},l))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return y}));var o=t(3),n=t(8),i=(t(0),t(122)),a={id:"ory-proxy",title:"ory proxy",description:"ory proxy Easily protect applications with the Ory Proxy"},c={unversionedId:"cli/ory-proxy",id:"cli/ory-proxy",isDocsHomePage:!1,title:"ory proxy",description:"ory proxy Easily protect applications with the Ory Proxy",source:"@site/docs/cli/ory-proxy.md",sourceDirName:"cli",slug:"/cli/ory-proxy",permalink:"/docs/cli/ory-proxy",editUrl:"https://github.com/ory/docs/edit/master/docs/docs/cli/ory-proxy.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1621432416,formattedLastUpdatedAt:"5/19/2021",frontMatter:{id:"ory-proxy",title:"ory proxy",description:"ory proxy Easily protect applications with the Ory Proxy"},sidebar:"docs",previous:{title:"ory identities list",permalink:"/docs/cli/ory-identities-list"},next:{title:"ory proxy local",permalink:"/docs/cli/ory-proxy-local"}},p=[{value:"ory proxy",id:"ory-proxy",children:[{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={toc:p};function y(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"ory-proxy"},"ory proxy"),Object(i.b)("p",null,"Easily protect applications with the Ory Proxy"),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  -h, --help   help for proxy\n")),Object(i.b)("h3",{id:"see-also"},"SEE ALSO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"ory"},"ory")," - The ORY CLI"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"ory-proxy-local"},"ory proxy local")," - Develop an application locally and\nintegrate it with Ory")))}y.isMDXComponent=!0}}]);