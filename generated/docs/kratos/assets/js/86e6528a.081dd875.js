(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{310:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var i=n(3),r=n(8),o=(n(0),n(549)),s={id:"kratos-identities-get",title:"kratos identities get",description:"kratos identities get Get one or more identities by ID"},a={unversionedId:"cli/kratos-identities-get",id:"version-v0.5/cli/kratos-identities-get",isDocsHomePage:!1,title:"kratos identities get",description:"kratos identities get Get one or more identities by ID",source:"@site/versioned_docs/version-v0.5/cli/kratos-identities-get.md",sourceDirName:"cli",slug:"/cli/kratos-identities-get",permalink:"/kratos/docs/v0.5/cli/kratos-identities-get",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/cli/kratos-identities-get.md",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1607456241,formattedLastUpdatedAt:"12/8/2020",frontMatter:{id:"kratos-identities-get",title:"kratos identities get",description:"kratos identities get Get one or more identities by ID"},sidebar:"version-v0.5/docs",previous:{title:"kratos identities delete",permalink:"/kratos/docs/v0.5/cli/kratos-identities-delete"},next:{title:"kratos identities import",permalink:"/kratos/docs/v0.5/cli/kratos-identities-import"}},c=[{value:"kratos identities get",id:"kratos-identities-get",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],d={toc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"kratos-identities-get"},"kratos identities get"),Object(o.b)("p",null,"Get one or more identities by ID"),Object(o.b)("h3",{id:"synopsis"},"Synopsis"),Object(o.b)("p",null,"This command gets all the details about an identity. To get an identity by some\nselector, e.g. the recovery email address, use the list command in combination\nwith jq."),Object(o.b)("p",null,"We have to admit, this is not easy if you don't speak jq fluently. What about\nopening an issue and telling us what predefined selectors you want to have?\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/new/choose"},"https://github.com/ory/kratos/issues/new/choose")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"kratos identities get <id-0 [id-1 ...]> [flags]\n")),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'To get the identities with the recovery email address at the domain "ory.sh", run:\n\n    $ kratos identities get $(kratos identities list --format json | jq -r \'map(select(.recovery_addresses[].value | endswith("@ory.sh"))) | .[].id\')\n')),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  -h, --help   help for get\n")),Object(o.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'  -c, --config string     Path to config file. Supports .json, .yaml, .yml, .toml. Default is "$HOME/.kratos.(yaml|yml|toml|json)"\n  -e, --endpoint string   The URL of ORY Kratos\' Admin API. Alternatively set using the KRATOS_ADMIN_URL environmental variable.\n  -f, --format string     Set the output format. One of table, json, and json-pretty.\n  -q, --quiet             Prints only IDs, one per line. Takes precedence over --format.\n')),Object(o.b)("h3",{id:"see-also"},"SEE ALSO"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"kratos-identities"},"kratos identities")," - Tools to interact with remote\nidentities")))}l.isMDXComponent=!0},549:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.a.createElement(b,a(a({ref:t},d),{},{components:n})):r.a.createElement(b,a({ref:t},d))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var d=2;d<o;d++)s[d]=n[d];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);