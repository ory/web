(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{412:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=i,m=d["".concat(a,".").concat(b)]||d[b]||u[b]||o;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var i=n(2),r=n(6),o=(n(0),n(412)),a={id:"kratos-identities-patch",title:"kratos identities patch",description:"kratos identities patch Patch identities by ID (not yet implemented)"},c={unversionedId:"cli/kratos-identities-patch",id:"cli/kratos-identities-patch",isDocsHomePage:!1,title:"kratos identities patch",description:"kratos identities patch Patch identities by ID (not yet implemented)",source:"@site/docs/cli/kratos-identities-patch.md",slug:"/cli/kratos-identities-patch",permalink:"/kratos/docs/next/cli/kratos-identities-patch",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/cli/kratos-identities-patch.md",version:"current",lastUpdatedBy:"Patrik",lastUpdatedAt:1602148054,sidebar:"docs",previous:{title:"kratos identities list",permalink:"/kratos/docs/next/cli/kratos-identities-list"},next:{title:"kratos identities validate",permalink:"/kratos/docs/next/cli/kratos-identities-validate"}},s=[{value:"kratos identities patch",id:"kratos-identities-patch",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],p={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"kratos-identities-patch"},"kratos identities patch"),Object(o.b)("p",null,"Patch identities by ID (not yet implemented)"),Object(o.b)("h3",{id:"synopsis"},"Synopsis"),Object(o.b)("p",null,"Patch identities by ID (not yet implemented)"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"kratos identities patch <file.json [file-2.json [file-3.json] ...]> [flags]\n")),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"  -h, --help   help for patch\n")),Object(o.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"  -e, --endpoint string   The URL of ORY Kratos' Admin API. Alternatively set using the KRATOS_ADMIN_URL environmental variable.\n  -f, --format string     Set the output format. One of table, json, and json-pretty.\n  -q, --quiet             Prints only IDs, one per line. Takes precedence over --format.\n")),Object(o.b)("h3",{id:"see-also"},"SEE ALSO"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"kratos-identities"}),"kratos identities")," - Tools to interact with remote identities")))}l.isMDXComponent=!0}}]);