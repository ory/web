(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{364:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return s})),i.d(t,"metadata",(function(){return a})),i.d(t,"toc",(function(){return c})),i.d(t,"default",(function(){return p}));var r=i(3),n=i(8),o=(i(0),i(553)),s={id:"kratos-identities-import",title:"kratos identities import",description:"kratos identities import Import identities from files or STD_IN"},a={unversionedId:"cli/kratos-identities-import",id:"version-v0.5/cli/kratos-identities-import",isDocsHomePage:!1,title:"kratos identities import",description:"kratos identities import Import identities from files or STD_IN",source:"@site/versioned_docs/version-v0.5/cli/kratos-identities-import.md",sourceDirName:"cli",slug:"/cli/kratos-identities-import",permalink:"/kratos/docs/v0.5/cli/kratos-identities-import",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/cli/kratos-identities-import.md",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1607456241,formattedLastUpdatedAt:"12/8/2020",frontMatter:{id:"kratos-identities-import",title:"kratos identities import",description:"kratos identities import Import identities from files or STD_IN"},sidebar:"version-v0.5/docs",previous:{title:"kratos identities get",permalink:"/kratos/docs/v0.5/cli/kratos-identities-get"},next:{title:"kratos identities list",permalink:"/kratos/docs/v0.5/cli/kratos-identities-list"}},c=[{value:"kratos identities import",id:"kratos-identities-import",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={toc:c};function p(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"kratos-identities-import"},"kratos identities import"),Object(o.b)("p",null,"Import identities from files or STD_IN"),Object(o.b)("h3",{id:"synopsis"},"Synopsis"),Object(o.b)("p",null,"Import identities from files or STD_IN."),Object(o.b)("p",null,'Files can contain only a single or an array of identities. The validity of files\ncan be tested beforehand using "... identities validate".'),Object(o.b)("p",null,"WARNING: Importing credentials is not yet supported."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"kratos identities import <file.json [file-2.json [file-3.json] ...]> [flags]\n")),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ kratos identities import file.json\n$ cat file.json | kratos identities import\n")),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  -h, --help   help for import\n")),Object(o.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'  -c, --config string     Path to config file. Supports .json, .yaml, .yml, .toml. Default is "$HOME/.kratos.(yaml|yml|toml|json)"\n  -e, --endpoint string   The URL of ORY Kratos\' Admin API. Alternatively set using the KRATOS_ADMIN_URL environmental variable.\n  -f, --format string     Set the output format. One of table, json, and json-pretty.\n  -q, --quiet             Prints only IDs, one per line. Takes precedence over --format.\n')),Object(o.b)("h3",{id:"see-also"},"SEE ALSO"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"kratos-identities"},"kratos identities")," - Tools to interact with remote\nidentities")))}p.isMDXComponent=!0},553:function(e,t,i){"use strict";i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return f}));var r=i(0),n=i.n(r);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(i),u=r,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return i?n.a.createElement(f,a(a({ref:t},l),{},{components:i})):n.a.createElement(f,a({ref:t},l))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,s=new Array(o);s[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var l=2;l<o;l++)s[l]=i[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,i)}u.displayName="MDXCreateElement"}}]);