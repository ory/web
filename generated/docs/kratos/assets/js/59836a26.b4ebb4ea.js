(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[1712],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=n.createContext({}),c=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},l=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,s(s({ref:e},l),{},{components:r})):n.createElement(f,s({ref:e},l))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6083:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u},default:function(){return l}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),s={id:"kratos-remote-status",title:"kratos remote status",description:"kratos remote status Print the alive and readiness status of a Ory Kratos instance"},i={unversionedId:"cli/kratos-remote-status",id:"version-v0.6/cli/kratos-remote-status",isDocsHomePage:!1,title:"kratos remote status",description:"kratos remote status Print the alive and readiness status of a Ory Kratos instance",source:"@site/versioned_docs/version-v0.6/cli/kratos-remote-status.md",sourceDirName:"cli",slug:"/cli/kratos-remote-status",permalink:"/kratos/docs/cli/kratos-remote-status",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/cli/kratos-remote-status.md",version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619690398,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"kratos-remote-status",title:"kratos remote status",description:"kratos remote status Print the alive and readiness status of a Ory Kratos instance"},sidebar:"version-v0.6/docs",previous:{title:"kratos remote",permalink:"/kratos/docs/cli/kratos-remote"},next:{title:"kratos remote version",permalink:"/kratos/docs/cli/kratos-remote-version"}},u=[{value:"kratos remote status",id:"kratos-remote-status",children:[{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],c={toc:u};function l(t){var e=t.components,r=(0,o.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"kratos-remote-status"},"kratos remote status"),(0,a.kt)("p",null,"Print the alive and readiness status of a Ory Kratos instance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kratos remote status [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help   help for status\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -e, --endpoint string   The URL of Ory Kratos&#39; Admin API. Alternatively set using the KRATOS_ADMIN_URL environmental variable.\n  -f, --format string     Set the output format. One of table, json, and json-pretty. (default &#34;default&#34;)\n  -q, --quiet             Be quiet with output printing.\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"kratos-remote"},"kratos remote")," - Helpers and management for remote Ory Kratos\ninstances")))}l.isMDXComponent=!0}}]);