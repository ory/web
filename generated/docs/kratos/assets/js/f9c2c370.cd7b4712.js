(window.webpackJsonp=window.webpackJsonp||[]).push([[463],{527:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(8),o=(r(0),r(553)),i={id:"sdk",title:"SDKs",sidebar_label:"Overview"},s={unversionedId:"sdk",id:"sdk",isDocsHomePage:!1,title:"SDKs",description:"All SDKs use automated code generation provided by",source:"@site/docs/sdk.md",sourceDirName:".",slug:"/sdk",permalink:"/kratos/docs/next/sdk",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/sdk.md",version:"current",lastUpdatedBy:"frederikhors",lastUpdatedAt:1620122590,formattedLastUpdatedAt:"5/4/2021",sidebar_label:"Overview",frontMatter:{id:"sdk",title:"SDKs",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Performance Problems and Out Of Memory Panics Caused by Password Hashing",permalink:"/kratos/docs/next/debug/performance-out-of-memory-password-hashing-argon2"},next:{title:"Milestones and Roadmap",permalink:"/kratos/docs/next/milestones"}},c=[],p={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All SDKs use automated code generation provided by\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator"},Object(o.b)("inlineCode",{parentName:"a"},"openapi-generator")),".\nUnfortunately, ",Object(o.b)("inlineCode",{parentName:"p"},"openapi-generator")," has serious breaking changes in the generated\ncode when upgrading versions. Therefore, we do not make backwards compatibility\npromises with regards to the generated SDKs. We hope to improve this process in\nthe future."),Object(o.b)("p",null,"Before you check out the SDKs, head over to the ",Object(o.b)("a",{parentName:"p",href:"reference/api"},"REST API"),"\ndocumentation documentation which includes code samples for common programming\nlanguages for each REST endpoint."),Object(o.b)("p",null,"We publish our SDKs for popular languages in their respective package\nrepositories:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://pub.dev/packages/ory_kratos_client"},"Dart")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.nuget.org/packages/Ory.Kratos.Client/"},".NET")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/ory/kratos-client-go"},"Go")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://search.maven.org/artifact/sh.ory.kratos/kratos-client"},"Java")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@ory/kratos-client"},"JavaScript")," with TypeScript\ndefinitions and compatible with: NodeJS, ReactJS, AngularJS, Vue.js, and many\nmore."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://packagist.org/packages/ory/kratos-client"},"PHP")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://pypi.org/project/ory-kratos-client/"},"Python")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://rubygems.org/gems/ory-kratos-client"},"Ruby")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://crates.io/crates/ory-kratos-client"},"Rust"))),Object(o.b)("p",null,"Take a look at the source:\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/sdk/tree/master/clients/kratos/"},"Generated SDKs for Ory Kratos")),Object(o.b)("p",null,"Missing your programming language?\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues"},"Create an issue")," and help us build, test\nand publish the SDK for your programming language!"))}l.isMDXComponent=!0},553:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,s(s({ref:t},p),{},{components:r})):a.a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);