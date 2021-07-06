(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[1061],{3905:function(t,e,i){"use strict";i.d(e,{Zo:function(){return c},kt:function(){return f}});var n=i(67294);function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t,e){if(null==t)return{};var i,n,r=function(t,e){if(null==t)return{};var i,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}var l=n.createContext({}),d=function(t){var e=n.useContext(l),i=e;return t&&(i="function"==typeof t?t(e):o(o({},e),t)),i},c=function(t){var e=d(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var i=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=d(i),f=r,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return i?n.createElement(m,o(o({ref:e},c),{},{components:i})):n.createElement(m,o({ref:e},c))}));function f(t,e){var i=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=i.length,o=new Array(a);o[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var d=2;d<a;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},20379:function(t,e,i){"use strict";i.r(e),i.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=i(22122),r=i(19756),a=(i(67294),i(3905)),o=["components"],s={id:"kratos-identities-validate",title:"kratos identities validate",description:"kratos identities validate Validate local identity files"},l=void 0,d={unversionedId:"cli/kratos-identities-validate",id:"cli/kratos-identities-validate",isDocsHomePage:!1,title:"kratos identities validate",description:"kratos identities validate Validate local identity files",source:"@site/docs/cli/kratos-identities-validate.md",sourceDirName:"cli",slug:"/cli/kratos-identities-validate",permalink:"/kratos/docs/next/cli/kratos-identities-validate",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/cli/kratos-identities-validate.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619624197,formattedLastUpdatedAt:"4/28/2021",frontMatter:{id:"kratos-identities-validate",title:"kratos identities validate",description:"kratos identities validate Validate local identity files"},sidebar:"docs",previous:{title:"kratos identities patch",permalink:"/kratos/docs/next/cli/kratos-identities-patch"},next:{title:"kratos jsonnet",permalink:"/kratos/docs/next/cli/kratos-jsonnet"}},c=[{value:"kratos identities validate",id:"kratos-identities-validate",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],p={toc:c};function u(t){var e=t.components,i=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"kratos-identities-validate"},"kratos identities validate"),(0,a.kt)("p",null,"Validate local identity files"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"This command allows validation of identity files. It validates against the\npayload of the API and the identity schema as configured in Ory Kratos.\nIdentities can be supplied via STD_IN or JSON files containing a single or an\narray of identities."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kratos identities validate &lt;file.json [file-2.json [file-3.json] ...]&gt; [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help   help for validate\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -e, --endpoint string   The URL of Ory Kratos&#39; Admin API. Alternatively set using the KRATOS_ADMIN_URL environmental variable.\n  -f, --format string     Set the output format. One of table, json, and json-pretty. (default &#34;default&#34;)\n  -q, --quiet             Be quiet with output printing.\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"kratos-identities"},"kratos identities")," - Tools to interact with remote\nidentities")))}u.isMDXComponent=!0}}]);