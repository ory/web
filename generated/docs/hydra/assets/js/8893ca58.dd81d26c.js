(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{321:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(8),i=(r(0),r(572)),c={id:"hydra-clients",title:"hydra clients",description:"hydra clients Manage OAuth 2.0 Clients"},l={unversionedId:"cli/hydra-clients",id:"version-v1.10/cli/hydra-clients",isDocsHomePage:!1,title:"hydra clients",description:"hydra clients Manage OAuth 2.0 Clients",source:"@site/versioned_docs/version-v1.10/cli/hydra-clients.md",sourceDirName:"cli",slug:"/cli/hydra-clients",permalink:"/hydra/docs/cli/hydra-clients",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/cli/hydra-clients.md",version:"v1.10",lastUpdatedBy:"aeneasr",lastUpdatedAt:1616672187,formattedLastUpdatedAt:"3/25/2021",frontMatter:{id:"hydra-clients",title:"hydra clients",description:"hydra clients Manage OAuth 2.0 Clients"},sidebar:"version-v1.10/docs",previous:{title:"hydra",permalink:"/hydra/docs/cli/hydra"},next:{title:"hydra clients create",permalink:"/hydra/docs/cli/hydra-clients-create"}},o=[{value:"hydra clients",id:"hydra-clients",children:[{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],s={toc:o};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hydra-clients"},"hydra clients"),Object(i.b)("p",null,"Manage OAuth 2.0 Clients"),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"      --access-token string    Set an access token to be used in the Authorization header, defaults to environment variable OAUTH2_ACCESS_TOKEN\n      --endpoint string        Set the URL where ORY Hydra is hosted, defaults to environment variable HYDRA_ADMIN_URL. A unix socket can be set in the form unix:///path/to/socket\n      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   Fake tls termination by adding &#34;X-Forwarded-Proto: https&#34; to http headers\n  -h, --help                   help for clients\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unknown certificate authorities\n")),Object(i.b)("h3",{id:"see-also"},"SEE ALSO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"hydra"},"hydra")," - Run and manage ORY Hydra"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"hydra-clients-create"},"hydra clients create")," - Create a new OAuth 2.0 Client"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"hydra-clients-delete"},"hydra clients delete")," - Delete an OAuth 2.0 Client"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"hydra-clients-get"},"hydra clients get")," - Get an OAuth 2.0 Client"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"hydra-clients-import"},"hydra clients import")," - Import OAuth 2.0 Clients from\none or more JSON files"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"hydra-clients-import"},"hydra clients import")," - Import OAuth 2.0 Clients from\none or more JSON files"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"hydra-clients-import"},"hydra clients import")," - Imports cryptographic keys of\nany format to the JSON Web Key Store"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"hydra-clients-import"},"hydra clients import")," - Import OAuth 2.0 Clients from\none or more JSON files"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"hydra-clients-list"},"hydra clients list")," - List OAuth 2.0 Clients"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"hydra-clients-update"},"hydra clients update")," - Update an entire OAuth 2.0\nClient")))}d.isMDXComponent=!0},572:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(r),h=n,b=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return r?a.a.createElement(b,l(l({ref:t},s),{},{components:r})):a.a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<i;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);