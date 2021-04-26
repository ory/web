(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{337:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return s})),i.d(t,"toc",(function(){return l})),i.d(t,"default",(function(){return c}));var n=i(3),r=i(8),a=(i(0),i(453)),o={id:"kratos-identities-validate",title:"kratos identities validate",description:"kratos identities validate Validate local identity files"},s={unversionedId:"cli/kratos-identities-validate",id:"cli/kratos-identities-validate",isDocsHomePage:!1,title:"kratos identities validate",description:"kratos identities validate Validate local identity files",source:"@site/docs/cli/kratos-identities-validate.md",sourceDirName:"cli",slug:"/cli/kratos-identities-validate",permalink:"/kratos/docs/next/cli/kratos-identities-validate",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/cli/kratos-identities-validate.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1617992820,formattedLastUpdatedAt:"4/9/2021",frontMatter:{id:"kratos-identities-validate",title:"kratos identities validate",description:"kratos identities validate Validate local identity files"},sidebar:"docs",previous:{title:"kratos identities patch",permalink:"/kratos/docs/next/cli/kratos-identities-patch"},next:{title:"kratos jsonnet",permalink:"/kratos/docs/next/cli/kratos-jsonnet"}},l=[{value:"kratos identities validate",id:"kratos-identities-validate",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],d={toc:l};function c(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"kratos-identities-validate"},"kratos identities validate"),Object(a.b)("p",null,"Validate local identity files"),Object(a.b)("h3",{id:"synopsis"},"Synopsis"),Object(a.b)("p",null,"This command allows validation of identity files. It validates against the\npayload of the API and the identity schema as configured in Ory Kratos.\nIdentities can be supplied via STD_IN or JSON files containing a single or an\narray of identities."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"kratos identities validate &lt;file.json [file-2.json [file-3.json] ...]&gt; [flags]\n")),Object(a.b)("h3",{id:"options"},"Options"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"  -h, --help   help for validate\n")),Object(a.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"  -e, --endpoint string   The URL of ORY Kratos&#39; Admin API. Alternatively set using the KRATOS_ADMIN_URL environmental variable.\n  -f, --format string     Set the output format. One of table, json, and json-pretty. (default &#34;default&#34;)\n  -q, --quiet             Be quiet with output printing.\n")),Object(a.b)("h3",{id:"see-also"},"SEE ALSO"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"kratos-identities"},"kratos identities")," - Tools to interact with remote\nidentities")))}c.isMDXComponent=!0},453:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return b}));var n=i(0),r=i.n(n);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=r.a.createContext({}),c=function(e){var t=r.a.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=c(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(i),f=n,b=p["".concat(o,".").concat(f)]||p[f]||u[f]||a;return i?r.a.createElement(b,s(s({ref:t},d),{},{components:i})):r.a.createElement(b,s({ref:t},d))}));function b(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var d=2;d<a;d++)o[d]=i[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,i)}f.displayName="MDXCreateElement"}}]);