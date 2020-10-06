(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{256:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),i=(n(0),n(393)),c={id:"hydra-clients",title:"hydra clients",description:"hydra clients Manage OAuth 2.0 Clients"},o={unversionedId:"cli/hydra-clients",id:"cli/hydra-clients",isDocsHomePage:!1,title:"hydra clients",description:"hydra clients Manage OAuth 2.0 Clients",source:"@site/docs/cli/hydra-clients.md",slug:"/cli/hydra-clients",permalink:"/hydra/docs/next/cli/hydra-clients",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/cli/hydra-clients.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601733106,sidebar:"docs",previous:{title:"hydra",permalink:"/hydra/docs/next/cli/hydra"},next:{title:"hydra clients create",permalink:"/hydra/docs/next/cli/hydra-clients-create"}},l=[{value:"hydra clients",id:"hydra-clients",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],s={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hydra-clients"},"hydra clients"),Object(i.b)("p",null,"Manage OAuth 2.0 Clients"),Object(i.b)("h3",{id:"synopsis"},"Synopsis"),Object(i.b)("p",null,"Manage OAuth 2.0 Clients"),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'      --access-token string    Set an access token to be used in the Authorization header, defaults to environment variable OAUTH2_ACCESS_TOKEN\n      --endpoint string        Set the URL where ORY Hydra is hosted, defaults to environment variable HYDRA_ADMIN_URL. A unix socket can be set in the form unix:///path/to/socket\n      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   Fake tls termination by adding "X-Forwarded-Proto: https" to http headers\n  -h, --help                   help for clients\n')),Object(i.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"      --config string     Config file (default is $HOME/.hydra.yaml)\n      --skip-tls-verify   Foolishly accept TLS certificates signed by unkown certificate authorities\n")),Object(i.b)("h3",{id:"see-also"},"SEE ALSO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"hydra"}),"hydra")," - Run and manage ORY Hydra"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"hydra-clients-create"}),"hydra clients create")," - Create a new OAuth 2.0 Client"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"hydra-clients-delete"}),"hydra clients delete")," - Delete an OAuth 2.0 Client"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"hydra-clients-get"}),"hydra clients get")," - Get an OAuth 2.0 Client"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"hydra-clients-import"}),"hydra clients import")," - Import OAuth 2.0 Clients from\none or more JSON files"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"hydra-clients-list"}),"hydra clients list")," - List OAuth 2.0 Clients"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"hydra-clients-update"}),"hydra clients update")," - Update an entire OAuth 2.0\nClient")))}d.isMDXComponent=!0},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,h=p["".concat(c,".").concat(b)]||p[b]||u[b]||i;return n?a.a.createElement(h,o(o({ref:t},s),{},{components:n})):a.a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);