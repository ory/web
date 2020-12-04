(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{441:function(e,t,i){"use strict";i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return b}));var n=i(0),r=i.n(n);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(i),u=n,b=d["".concat(a,".").concat(u)]||d[u]||m[u]||o;return i?r.a.createElement(b,s(s({ref:t},l),{},{components:i})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<o;l++)a[l]=i[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},91:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return a})),i.d(t,"metadata",(function(){return s})),i.d(t,"rightToc",(function(){return c})),i.d(t,"default",(function(){return p}));var n=i(3),r=i(7),o=(i(0),i(441)),a={id:"kratos-identities-import",title:"kratos identities import",description:"kratos identities import Import identities from files or STD_IN"},s={unversionedId:"cli/kratos-identities-import",id:"cli/kratos-identities-import",isDocsHomePage:!1,title:"kratos identities import",description:"kratos identities import Import identities from files or STD_IN",source:"@site/docs/cli/kratos-identities-import.md",slug:"/cli/kratos-identities-import",permalink:"/kratos/docs/next/cli/kratos-identities-import",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/cli/kratos-identities-import.md",version:"current",lastUpdatedBy:"zepatrik",lastUpdatedAt:1605629700,sidebar:"docs",previous:{title:"kratos identities get",permalink:"/kratos/docs/next/cli/kratos-identities-get"},next:{title:"kratos identities list",permalink:"/kratos/docs/next/cli/kratos-identities-list"}},c=[{value:"kratos identities import",id:"kratos-identities-import",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"kratos-identities-import"},"kratos identities import"),Object(o.b)("p",null,"Import identities from files or STD_IN"),Object(o.b)("h3",{id:"synopsis"},"Synopsis"),Object(o.b)("p",null,"Import identities from files or STD_IN."),Object(o.b)("p",null,'Files can contain only a single or an array of identities. The validity of files\ncan be tested beforehand using "... identities validate".'),Object(o.b)("p",null,"WARNING: Importing credentials is not yet supported."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"kratos identities import <file.json [file-2.json [file-3.json] ...]> [flags]\n")),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"$ kratos identities import file.json\n$ cat file.json | kratos identities import\n")),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"  -h, --help   help for import\n")),Object(o.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'  -c, --config string     Path to config file. Supports .json, .yaml, .yml, .toml. Default is "$HOME/.kratos.(yaml|yml|toml|json)"\n  -e, --endpoint string   The URL of ORY Kratos\' Admin API. Alternatively set using the KRATOS_ADMIN_URL environmental variable.\n  -f, --format string     Set the output format. One of table, json, and json-pretty.\n  -q, --quiet             Prints only IDs, one per line. Takes precedence over --format.\n')),Object(o.b)("h3",{id:"see-also"},"SEE ALSO"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"kratos-identities"}),"kratos identities")," - Tools to interact with remote\nidentities")))}p.isMDXComponent=!0}}]);