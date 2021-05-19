(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{460:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return a})),n.d(e,"metadata",(function(){return s})),n.d(e,"toc",(function(){return c})),n.d(e,"default",(function(){return d}));var i=n(3),r=n(8),o=(n(0),n(550)),a={id:"kratos-identities-patch",title:"kratos identities patch",description:"kratos identities patch Patch identities by ID (not yet implemented)"},s={unversionedId:"cli/kratos-identities-patch",id:"version-v0.6/cli/kratos-identities-patch",isDocsHomePage:!1,title:"kratos identities patch",description:"kratos identities patch Patch identities by ID (not yet implemented)",source:"@site/versioned_docs/version-v0.6/cli/kratos-identities-patch.md",sourceDirName:"cli",slug:"/cli/kratos-identities-patch",permalink:"/kratos/docs/cli/kratos-identities-patch",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/cli/kratos-identities-patch.md",version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619690398,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"kratos-identities-patch",title:"kratos identities patch",description:"kratos identities patch Patch identities by ID (not yet implemented)"},sidebar:"version-v0.6/docs",previous:{title:"kratos identities list",permalink:"/kratos/docs/cli/kratos-identities-list"},next:{title:"kratos identities validate",permalink:"/kratos/docs/cli/kratos-identities-validate"}},c=[{value:"kratos identities patch",id:"kratos-identities-patch",children:[{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],p={toc:c};function d(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(o.b)("wrapper",Object(i.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"kratos-identities-patch"},"kratos identities patch"),Object(o.b)("p",null,"Patch identities by ID (not yet implemented)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"kratos identities patch &lt;file.json [file-2.json [file-3.json] ...]&gt; [flags]\n")),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  -h, --help   help for patch\n")),Object(o.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  -e, --endpoint string   The URL of Ory Kratos&#39; Admin API. Alternatively set using the KRATOS_ADMIN_URL environmental variable.\n  -f, --format string     Set the output format. One of table, json, and json-pretty. (default &#34;default&#34;)\n  -q, --quiet             Be quiet with output printing.\n")),Object(o.b)("h3",{id:"see-also"},"SEE ALSO"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"kratos-identities"},"kratos identities")," - Tools to interact with remote\nidentities")))}d.isMDXComponent=!0},550:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}));var i=n(0),r=n.n(i);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=r.a.createContext({}),d=function(t){var e=r.a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},l=function(t){var e=d(t.components);return r.a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},m=r.a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,a=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),l=d(n),m=i,f=l["".concat(a,".").concat(m)]||l[m]||u[m]||o;return n?r.a.createElement(f,s(s({ref:e},p),{},{components:n})):r.a.createElement(f,s({ref:e},p))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);