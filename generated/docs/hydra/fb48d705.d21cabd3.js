(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{384:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return s})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return l}));var t=r(2),a=r(6),i=(r(0),r(393)),o={id:"hydra-serve-admin",title:"hydra serve admin",description:"hydra serve admin Serves Administrative HTTP/2 APIs"},s={unversionedId:"cli/hydra-serve-admin",id:"cli/hydra-serve-admin",isDocsHomePage:!1,title:"hydra serve admin",description:"hydra serve admin Serves Administrative HTTP/2 APIs",source:"@site/docs/cli/hydra-serve-admin.md",slug:"/cli/hydra-serve-admin",permalink:"/hydra/docs/next/cli/hydra-serve-admin",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/cli/hydra-serve-admin.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1603198549,sidebar:"docs",previous:{title:"hydra serve",permalink:"/hydra/docs/next/cli/hydra-serve"},next:{title:"hydra serve all",permalink:"/hydra/docs/next/cli/hydra-serve-all"}},c=[{value:"hydra serve admin",id:"hydra-serve-admin",children:[{value:"Synopsis",id:"synopsis",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],d={rightToc:c};function l(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},d,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hydra-serve-admin"},"hydra serve admin"),Object(i.b)("p",null,"Serves Administrative HTTP/2 APIs"),Object(i.b)("h3",{id:"synopsis"},"Synopsis"),Object(i.b)("p",null,"This command opens one port and listens to HTTP/2 API requests. The exposed API handles administrative\nrequests like managing OAuth 2.0 Clients, JSON Web Keys, login and consent sessions, and others."),Object(i.b)("p",null,'This command is configurable using the same options available to "serve public" and "serve all".'),Object(i.b)("p",null,"It is generally recommended to use this command only if you require granular control over the administrative and public APIs.\nFor example, you might want to run different TLS certificates or CORS settings on the public and administrative API."),Object(i.b)("p",null,'This command does not work with the "memory" database. Both services (administrative, public) MUST use the same database\nconnection to be able to synchronize.'),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"ORY Hydra can be configured using environment variables as well as a configuration file. For more information\non configuration options, open the configuration documentation:"),Object(i.b)("blockquote",null,Object(i.b)("blockquote",{parentName:"blockquote"},Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/ory/hydra/blob/undefined/docs/docs/reference/configuration.md"}),"https://github.com/ory/hydra/blob/undefined/docs/docs/reference/configuration.md")," <<"))),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"hydra serve admin [flags]\n")),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"  -h, --help   help for admin\n")),Object(i.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"  -c, --config string                                    Config file (default is $HOME/hydra.yaml)\n      --dangerous-allow-insecure-redirect-urls strings   DO NOT USE THIS IN PRODUCTION - Disable HTTPS enforcement for the provided redirect URLs\n      --dangerous-force-http                             DO NOT USE THIS IN PRODUCTION - Disables HTTP/2 over TLS (HTTPS) and serves HTTP instead\n      --disable-telemetry                                Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n      --sqa-opt-out                                      Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n")),Object(i.b)("h3",{id:"see-also"},"SEE ALSO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"hydra-serve"}),"hydra serve")," - Parent command for starting public and administrative HTTP/2 APIs")))}l.isMDXComponent=!0},393:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return b}));var t=r(0),a=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),l=function(e){var n=a.a.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=l(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=t,b=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return r?a.a.createElement(b,s(s({ref:n},d),{},{components:r})):a.a.createElement(b,s({ref:n},d))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);