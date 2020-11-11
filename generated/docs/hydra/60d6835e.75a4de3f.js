(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{213:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return s}));var n=t(2),a=t(6),i=(t(0),t(470)),o={id:"hydra",title:"hydra",description:"hydra Run and manage ORY Hydra"},c={unversionedId:"cli/hydra",id:"version-v1.8/cli/hydra",isDocsHomePage:!1,title:"hydra",description:"hydra Run and manage ORY Hydra",source:"@site/versioned_docs/version-v1.8/cli/hydra.md",slug:"/cli/hydra",permalink:"/hydra/docs/v1.8/cli/hydra",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.8/cli/hydra.md",version:"v1.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601730608,sidebar:"version-v1.8/docs",previous:{title:"REST API",permalink:"/hydra/docs/v1.8/reference/api"},next:{title:"hydra clients",permalink:"/hydra/docs/v1.8/cli/hydra-clients"}},l=[{value:"hydra",id:"hydra",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],d={rightToc:l};function s(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hydra"},"hydra"),Object(i.b)("p",null,"Run and manage ORY Hydra"),Object(i.b)("h3",{id:"synopsis"},"Synopsis"),Object(i.b)("p",null,"Run and manage ORY Hydra"),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"      --config string     Config file (default is $HOME/.hydra.yaml)\n  -h, --help              help for hydra\n      --skip-tls-verify   Foolishly accept TLS certificates signed by unkown certificate authorities\n")),Object(i.b)("h3",{id:"see-also"},"SEE ALSO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"hydra-clients"}),"hydra clients")," - Manage OAuth 2.0 Clients"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"hydra-keys"}),"hydra keys")," - Manage JSON Web Keys"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"hydra-migrate"}),"hydra migrate")," - Various migration helpers"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"hydra-serve"}),"hydra serve")," - Parent command for starting public and\nadministrative HTTP/2 APIs"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"hydra-token"}),"hydra token")," - Issue and Manage OAuth2 tokens"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"hydra-version"}),"hydra version")," - Display this binary's version, build time and\ngit hash of this build")))}s.isMDXComponent=!0},470:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),s=function(e){var r=a.a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return a.a.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},y=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),y=n,b=p["".concat(o,".").concat(y)]||p[y]||u[y]||i;return t?a.a.createElement(b,c(c({ref:r},d),{},{components:t})):a.a.createElement(b,c({ref:r},d))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=y;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"}}]);