(window.webpackJsonp=window.webpackJsonp||[]).push([[448],{520:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return s}));var n=t(3),a=t(8),i=(t(0),t(569)),o={id:"hydra-migrate",title:"hydra migrate",description:"hydra migrate Various migration helpers"},c={unversionedId:"cli/hydra-migrate",id:"version-v1.10/cli/hydra-migrate",isDocsHomePage:!1,title:"hydra migrate",description:"hydra migrate Various migration helpers",source:"@site/versioned_docs/version-v1.10/cli/hydra-migrate.md",slug:"/cli/hydra-migrate",permalink:"/hydra/docs/cli/hydra-migrate",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/cli/hydra-migrate.md",version:"v1.10",lastUpdatedBy:"aeneasr",lastUpdatedAt:1616672187,formattedLastUpdatedAt:"3/25/2021",sidebar:"version-v1.10/docs",previous:{title:"hydra keys get",permalink:"/hydra/docs/cli/hydra-keys-get"},next:{title:"hydra migrate sql",permalink:"/hydra/docs/cli/hydra-migrate-sql"}},l=[{value:"hydra migrate",id:"hydra-migrate",children:[{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],d={toc:l};function s(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hydra-migrate"},"hydra migrate"),Object(i.b)("p",null,"Various migration helpers"),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  -c, --config strings   Path to one or more .json, .yaml, .yml, .toml config files. Values are loaded in the order provided, meaning that the last config file overwrites values from the previous config file.\n  -h, --help             help for migrate\n")),Object(i.b)("h3",{id:"see-also"},"SEE ALSO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"hydra"},"hydra")," - Run and manage ORY Hydra"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"hydra-migrate-sql"},"hydra migrate sql")," - Create SQL schemas and apply\nmigration plans")))}s.isMDXComponent=!0},569:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return y}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),s=function(e){var r=a.a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return a.a.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=n,y=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return t?a.a.createElement(y,c(c({ref:r},d),{},{components:t})):a.a.createElement(y,c({ref:r},d))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);