(window.webpackJsonp=window.webpackJsonp||[]).push([[460],{533:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(570)),i={id:"js",title:"JavaScript"},c={unversionedId:"sdk/js",id:"version-v1.9/sdk/js",isDocsHomePage:!1,title:"JavaScript",description:"To install the JavaScript SDK, run:",source:"@site/versioned_docs/version-v1.9/sdk/js.md",sourceDirName:"sdk",slug:"/sdk/js",permalink:"/hydra/docs/v1.9/sdk/js",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/sdk/js.md",version:"v1.9",lastUpdatedBy:"aeneasr",lastUpdatedAt:1611740481,formattedLastUpdatedAt:"1/27/2021",frontMatter:{id:"js",title:"JavaScript"},sidebar:"version-v1.9/docs",previous:{title:"Go",permalink:"/hydra/docs/v1.9/sdk/go"},next:{title:"PHP",permalink:"/hydra/docs/v1.9/sdk/php"}},s=[{value:"Configuration",id:"configuration",children:[]},{value:"API Usage",id:"api-usage",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To install the JavaScript SDK, run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm install --save @ory/hydra-client\n")),Object(o.b)("h3",{id:"configuration"},"Configuration"),Object(o.b)("h4",{id:"basic-configuration"},"Basic configuration"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { Configuration, PublicApi, AdminApi } from '@oryd/hydra-client'\n\nconst hydraPublic = new PublicApi(\n  new Configuration({\n    basePath: 'https://public.hydra:4444/'\n  })\n)\n\nconst hydraAdmin = new AdminApi(\n  new Configuration({\n    basePath: 'https://public.hydra:4445/'\n  })\n)\n")),Object(o.b)("h3",{id:"api-usage"},"API Usage"),Object(o.b)("p",null,"We recommend using TypeScript with auto-completion as API usage is not well\ndocumented currently."))}p.isMDXComponent=!0},570:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,b=l["".concat(i,".").concat(f)]||l[f]||d[f]||o;return n?a.a.createElement(b,c(c({ref:t},u),{},{components:n})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);