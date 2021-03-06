(window.webpackJsonp=window.webpackJsonp||[]).push([[408],{482:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(8),a=(r(0),r(572)),i={id:"hydra-keys-import",title:"hydra keys import",description:"hydra keys import Imports cryptographic keys of any format to the JSON Web Key Store"},s={unversionedId:"cli/hydra-keys-import",id:"version-v1.10/cli/hydra-keys-import",isDocsHomePage:!1,title:"hydra keys import",description:"hydra keys import Imports cryptographic keys of any format to the JSON Web Key Store",source:"@site/versioned_docs/version-v1.10/cli/hydra-keys-import.md",sourceDirName:"cli",slug:"/cli/hydra-keys-import",permalink:"/hydra/docs/cli/hydra-keys-import",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/cli/hydra-keys-import.md",version:"v1.10",lastUpdatedBy:"aeneasr",lastUpdatedAt:1616672187,formattedLastUpdatedAt:"3/25/2021",frontMatter:{id:"hydra-keys-import",title:"hydra keys import",description:"hydra keys import Imports cryptographic keys of any format to the JSON Web Key Store"}},p=[{value:"hydra keys import",id:"hydra-keys-import",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],c={toc:p};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"hydra-keys-import"},"hydra keys import"),Object(a.b)("p",null,"Imports cryptographic keys of any format to the JSON Web Key Store"),Object(a.b)("h3",{id:"synopsis"},"Synopsis"),Object(a.b)("p",null,"This command allows you to import cryptographic keys to the JSON Web Key Store."),Object(a.b)("p",null,"Currently supported formats are raw JSON Web Keys or PEM/DER encoded data. If\nthe JSON Web Key Set exists already, the imported keys will be added to that\nset. Otherwise, a new set will be created."),Object(a.b)("p",null,"Please be aware that importing a private key does not automatically import its\npublic key as well."),Object(a.b)("p",null,"Examples: hydra keys import my-set ./path/to/jwk.json ./path/to/jwk-2.json hydra\nkeys import my-set ./path/to/rsa.key ./path/to/rsa.pub"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"hydra keys import <set> <file-1> [<file-2> [<file-3 [<...>]]] [flags]\n")),Object(a.b)("h3",{id:"options"},"Options"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'  -h, --help         help for import\n      --use string   Sets the "use" value of the JSON Web Key if not "use" value was defined by the key itself (default "sig")\n')),Object(a.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'      --access-token string    Set an access token to be used in the Authorization header, defaults to environment variable OAUTH2_ACCESS_TOKEN\n      --endpoint string        Set the URL where ORY Hydra is hosted, defaults to environment variable HYDRA_ADMIN_URL\n      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   fake tls termination by adding "X-Forwarded-Proto: https" to http headers\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unknown certificate authorities\n')),Object(a.b)("h3",{id:"see-also"},"SEE ALSO"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"hydra-keys"},"hydra keys")," - Manage JSON Web Keys")))}d.isMDXComponent=!0},572:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=d(r),u=n,m=l["".concat(i,".").concat(u)]||l[u]||y[u]||a;return r?o.a.createElement(m,s(s({ref:t},c),{},{components:r})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);