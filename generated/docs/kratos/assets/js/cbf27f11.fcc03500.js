(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[11214],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:e},p),{},{components:n})):r.createElement(m,i({ref:e},p))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28867:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],s={id:"kratos-jsonnet",title:"kratos jsonnet",description:"kratos jsonnet Helpers for linting and formatting JSONNet code"},l=void 0,c={unversionedId:"cli/kratos-jsonnet",id:"version-v0.5/cli/kratos-jsonnet",isDocsHomePage:!1,title:"kratos jsonnet",description:"kratos jsonnet Helpers for linting and formatting JSONNet code",source:"@site/versioned_docs/version-v0.5/cli/kratos-jsonnet.md",sourceDirName:"cli",slug:"/cli/kratos-jsonnet",permalink:"/kratos/docs/v0.5/cli/kratos-jsonnet",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/cli/kratos-jsonnet.md",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1605099704,formattedLastUpdatedAt:"11/11/2020",frontMatter:{id:"kratos-jsonnet",title:"kratos jsonnet",description:"kratos jsonnet Helpers for linting and formatting JSONNet code"},sidebar:"version-v0.5/docs",previous:{title:"kratos identities validate",permalink:"/kratos/docs/v0.5/cli/kratos-identities-validate"},next:{title:"kratos jsonnet format",permalink:"/kratos/docs/v0.5/cli/kratos-jsonnet-format"}},p=[{value:"kratos jsonnet",id:"kratos-jsonnet",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],u={toc:p};function d(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"kratos-jsonnet"},"kratos jsonnet"),(0,a.kt)("p",null,"Helpers for linting and formatting JSONNet code"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Helpers for linting and formatting JSONNet code"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help   help for jsonnet\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  -c, --config string   Path to config file. Supports .json, .yaml, .yml, .toml. Default is "$HOME/.kratos.(yaml|yml|toml|json)"\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"kratos"},"kratos")," -"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"kratos-jsonnet-format"},"kratos jsonnet format")," -"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"kratos-jsonnet-lint"},"kratos jsonnet lint")," -")))}d.isMDXComponent=!0}}]);