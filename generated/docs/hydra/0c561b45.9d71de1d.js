(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{309:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),s=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,b=p["".concat(c,".").concat(h)]||p[h]||u[h]||a;return n?i.a.createElement(b,o(o({ref:t},d),{},{components:n})):i.a.createElement(b,o({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var d=2;d<a;d++)c[d]=n[d];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),i=n(6),a=(n(0),n(309)),c={id:"hydra-clients-delete",title:"hydra clients delete",description:"hydra clients delete Delete an OAuth 2.0 Client"},o={unversionedId:"cli/hydra-clients-delete",id:"cli/hydra-clients-delete",isDocsHomePage:!1,title:"hydra clients delete",description:"hydra clients delete Delete an OAuth 2.0 Client",source:"@site/docs/cli/hydra-clients-delete.md",permalink:"/hydra/docs/next/cli/hydra-clients-delete",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/cli/hydra-clients-delete.md",version:"next",lastUpdatedBy:"aeneasr",lastUpdatedAt:1597405950,sidebar:"docs",previous:{title:"hydra clients create",permalink:"/hydra/docs/next/cli/hydra-clients-create"},next:{title:"hydra clients get",permalink:"/hydra/docs/next/cli/hydra-clients-get"}},l=[{value:"hydra clients delete",id:"hydra-clients-delete",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],d={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"hydra-clients-delete"},"hydra clients delete"),Object(a.b)("p",null,"Delete an OAuth 2.0 Client"),Object(a.b)("h3",{id:"synopsis"},"Synopsis"),Object(a.b)("p",null,"This command deletes one or more OAuth 2.0 Clients by their respective IDs."),Object(a.b)("p",null,"Example: hydra clients delete client-1 client-2 client-3"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"hydra clients delete <id> [<id>...] [flags]\n")),Object(a.b)("h3",{id:"options"},"Options"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"  -h, --help   help for delete\n")),Object(a.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'      --access-token string    Set an access token to be used in the Authorization header, defaults to environment variable OAUTH2_ACCESS_TOKEN\n      --config string          Config file (default is $HOME/.hydra.yaml)\n      --endpoint string        Set the URL where ORY Hydra is hosted, defaults to environment variable HYDRA_ADMIN_URL. A unix socket can be set in the form unix:///path/to/socket\n      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   Fake tls termination by adding "X-Forwarded-Proto: https" to http headers\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unkown certificate authorities\n')),Object(a.b)("h3",{id:"see-also"},"SEE ALSO"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"hydra-clients"}),"hydra clients")," - Manage OAuth 2.0 Clients")))}s.isMDXComponent=!0}}]);