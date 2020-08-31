(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{191:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),i=(r(0),r(312)),c={id:"hydra",title:"hydra",description:"hydra Run and manage ORY Hydra"},o={unversionedId:"cli/hydra",id:"cli/hydra",isDocsHomePage:!1,title:"hydra",description:"hydra Run and manage ORY Hydra",source:"@site/docs/cli/hydra.md",permalink:"/hydra/docs/next/cli/hydra",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/cli/hydra.md",version:"next",lastUpdatedBy:"aeneasr",lastUpdatedAt:1598877184,sidebar:"docs",previous:{title:"REST API",permalink:"/hydra/docs/next/reference/api"},next:{title:"hydra clients",permalink:"/hydra/docs/next/cli/hydra-clients"}},l=[{value:"hydra",id:"hydra",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],d={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hydra"},"hydra"),Object(i.b)("p",null,"Run and manage ORY Hydra"),Object(i.b)("h3",{id:"synopsis"},"Synopsis"),Object(i.b)("p",null,"Run and manage ORY Hydra"),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"      --config string     Config file (default is $HOME/.hydra.yaml)\n  -h, --help              help for hydra\n      --skip-tls-verify   Foolishly accept TLS certificates signed by unkown certificate authorities\n")),Object(i.b)("h3",{id:"see-also"},"SEE ALSO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"hydra-clients"}),"hydra clients")," - Manage OAuth 2.0 Clients"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"hydra-keys"}),"hydra keys")," - Manage JSON Web Keys"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"hydra-migrate"}),"hydra migrate")," - Various migration helpers"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"hydra-serve"}),"hydra serve")," - Parent command for starting public and\nadministrative HTTP/2 APIs"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"hydra-token"}),"hydra token")," - Issue and Manage OAuth2 tokens"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"hydra-version"}),"hydra version")," - Display this binary's version, build time and\ngit hash of this build")))}s.isMDXComponent=!0},312:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),s=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,y=p["".concat(c,".").concat(b)]||p[b]||u[b]||i;return r?a.a.createElement(y,o(o({ref:t},d),{},{components:r})):a.a.createElement(y,o({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var d=2;d<i;d++)c[d]=r[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);