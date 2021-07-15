(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[13731],{3905:function(t,e,i){"use strict";i.d(e,{Zo:function(){return c},kt:function(){return f}});var r=i(67294);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t,e){if(null==t)return{};var i,r,n=function(t,e){if(null==t)return{};var i,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)i=o[r],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var l=r.createContext({}),d=function(t){var e=r.useContext(l),i=e;return t&&(i="function"==typeof t?t(e):a(a({},e),t)),i},c=function(t){var e=d(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var i=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=d(i),f=n,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return i?r.createElement(m,a(a({ref:e},c),{},{components:i})):r.createElement(m,a({ref:e},c))}));function f(t,e){var i=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=i.length,a=new Array(o);a[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,a[1]=s;for(var d=2;d<o;d++)a[d]=i[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},42873:function(t,e,i){"use strict";i.r(e),i.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var r=i(22122),n=i(19756),o=(i(67294),i(3905)),a=["components"],s={id:"kratos-identities",title:"kratos identities",description:"kratos identities Tools to interact with remote identities"},l=void 0,d={unversionedId:"cli/kratos-identities",id:"version-v0.7/cli/kratos-identities",isDocsHomePage:!1,title:"kratos identities",description:"kratos identities Tools to interact with remote identities",source:"@site/versioned_docs/version-v0.7/cli/kratos-identities.md",sourceDirName:"cli",slug:"/cli/kratos-identities",permalink:"/kratos/docs/cli/kratos-identities",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.7/cli/kratos-identities.md",version:"v0.7",lastUpdatedBy:"aeneasr",lastUpdatedAt:1626195872,formattedLastUpdatedAt:"7/13/2021",frontMatter:{id:"kratos-identities",title:"kratos identities",description:"kratos identities Tools to interact with remote identities"},sidebar:"version-v0.7/docs",previous:{title:"kratos courier watch",permalink:"/kratos/docs/cli/kratos-courier-watch"},next:{title:"kratos identities delete",permalink:"/kratos/docs/cli/kratos-identities-delete"}},c=[{value:"kratos identities",id:"kratos-identities",children:[{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],p={toc:c};function u(t){var e=t.components,i=(0,n.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"kratos-identities"},"kratos identities"),(0,o.kt)("p",null,"Tools to interact with remote identities"),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -e, --endpoint string   The URL of Ory Kratos&#39; Admin API. Alternatively set using the KRATOS_ADMIN_URL environmental variable.\n  -f, --format string     Set the output format. One of table, json, and json-pretty. (default &#34;default&#34;)\n  -h, --help              help for identities\n  -q, --quiet             Be quiet with output printing.\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kratos"},"kratos")," -"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kratos-identities-delete"},"kratos identities delete")," - Delete identities by ID"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kratos-identities-get"},"kratos identities get")," - Get one or more identities by\nID"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kratos-identities-import"},"kratos identities import")," - Import identities from\nfiles or STD_IN"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kratos-identities-list"},"kratos identities list")," - List identities"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kratos-identities-patch"},"kratos identities patch")," - Patch identities by ID\n(not yet implemented)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kratos-identities-validate"},"kratos identities validate")," - Validate local\nidentity files")))}u.isMDXComponent=!0}}]);