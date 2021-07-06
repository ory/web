(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[21145],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return c},kt:function(){return p}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=t.createContext({}),l=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),p=i,f=m["".concat(d,".").concat(p)]||m[p]||u[p]||a;return r?t.createElement(f,o(o({ref:n},c),{},{components:r})):t.createElement(f,o({ref:n},c))}));function p(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17434:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var t=r(22122),i=r(19756),a=(r(67294),r(3905)),o=["components"],s={id:"hydra-serve-admin",title:"hydra serve admin",description:"hydra serve admin Serves Administrative HTTP/2 APIs"},d=void 0,l={unversionedId:"cli/hydra-serve-admin",id:"cli/hydra-serve-admin",isDocsHomePage:!1,title:"hydra serve admin",description:"hydra serve admin Serves Administrative HTTP/2 APIs",source:"@site/docs/cli/hydra-serve-admin.md",sourceDirName:"cli",slug:"/cli/hydra-serve-admin",permalink:"/hydra/docs/next/cli/hydra-serve-admin",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/cli/hydra-serve-admin.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1616671249,formattedLastUpdatedAt:"3/25/2021",frontMatter:{id:"hydra-serve-admin",title:"hydra serve admin",description:"hydra serve admin Serves Administrative HTTP/2 APIs"},sidebar:"docs",previous:{title:"hydra serve",permalink:"/hydra/docs/next/cli/hydra-serve"},next:{title:"hydra serve all",permalink:"/hydra/docs/next/cli/hydra-serve-all"}},c=[{value:"hydra serve admin",id:"hydra-serve-admin",children:[{value:"Synopsis",id:"synopsis",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],u={toc:c};function m(e){var n=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"hydra-serve-admin"},"hydra serve admin"),(0,a.kt)("p",null,"Serves Administrative HTTP/2 APIs"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"This command opens one port and listens to HTTP/2 API requests. The exposed API\nhandles administrative requests like managing OAuth 2.0 Clients, JSON Web Keys,\nlogin and consent sessions, and others."),(0,a.kt)("p",null,"This command is configurable using the same options available to ",'"',"serve\npublic",'"'," and ",'"',"serve all",'"',"."),(0,a.kt)("p",null,"It is generally recommended to use this command only if you require granular\ncontrol over the administrative and public APIs. For example, you might want to\nrun different TLS certificates or CORS settings on the public and administrative\nAPI."),(0,a.kt)("p",null,"This command does not work with the ",'"',"memory",'"'," database. Both services\n(administrative, public) MUST use the same database connection to be able to\nsynchronize."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"ORY Hydra can be configured using environment variables as well as a\nconfiguration file. For more information on configuration options, open the\nconfiguration documentation:"),(0,a.kt)("p",null,">",">","\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/undefined/docs/docs/reference/config.md"},"https://github.com/ory/hydra/blob/undefined/docs/docs/reference/config.md"),"\n","<","<"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hydra serve admin [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help   help for admin\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -c, --config strings                                   Path to one or more .json, .yaml, .yml, .toml config files. Values are loaded in the order provided, meaning that the last config file overwrites values from the previous config file.\n      --dangerous-allow-insecure-redirect-urls strings   DO NOT USE THIS IN PRODUCTION - Disable HTTPS enforcement for the provided redirect URLs\n      --dangerous-force-http                             DO NOT USE THIS IN PRODUCTION - Disables HTTP/2 over TLS (HTTPS) and serves HTTP instead\n      --sqa-opt-out                                      Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"hydra-serve"},"hydra serve")," - Parent command for starting public and\nadministrative HTTP/2 APIs")))}m.isMDXComponent=!0}}]);