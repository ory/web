(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[8002],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},29190:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return l},default:function(){return u}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),s={id:"kratos-remote",title:"kratos remote",description:"kratos remote Helpers and management for remote Ory Kratos instances"},i={unversionedId:"cli/kratos-remote",id:"cli/kratos-remote",isDocsHomePage:!1,title:"kratos remote",description:"kratos remote Helpers and management for remote Ory Kratos instances",source:"@site/docs/cli/kratos-remote.md",sourceDirName:"cli",slug:"/cli/kratos-remote",permalink:"/kratos/docs/next/cli/kratos-remote",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/cli/kratos-remote.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619624197,formattedLastUpdatedAt:"4/28/2021",frontMatter:{id:"kratos-remote",title:"kratos remote",description:"kratos remote Helpers and management for remote Ory Kratos instances"},sidebar:"docs",previous:{title:"kratos migrate sql",permalink:"/kratos/docs/next/cli/kratos-migrate-sql"},next:{title:"kratos remote status",permalink:"/kratos/docs/next/cli/kratos-remote-status"}},l=[{value:"kratos remote",id:"kratos-remote",children:[{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],c={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"kratos-remote"},"kratos remote"),(0,a.kt)("p",null,"Helpers and management for remote Ory Kratos instances"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -e, --endpoint string   The URL of Ory Kratos&#39; Admin API. Alternatively set using the KRATOS_ADMIN_URL environmental variable.\n  -f, --format string     Set the output format. One of table, json, and json-pretty. (default &#34;default&#34;)\n  -h, --help              help for remote\n  -q, --quiet             Be quiet with output printing.\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"kratos"},"kratos")," -"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"kratos-remote-status"},"kratos remote status")," - Print the alive and readiness\nstatus of a Ory Kratos instance"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"kratos-remote-version"},"kratos remote version")," - Print the version of an Ory\nKratos instance")))}u.isMDXComponent=!0}}]);