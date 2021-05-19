(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{274:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return s})),n.d(r,"default",(function(){return d}));var t=n(3),o=n(8),i=(n(0),n(571)),a={id:"hydra-serve-public",title:"hydra serve public",description:"hydra serve public Serves Public HTTP/2 APIs"},c={unversionedId:"cli/hydra-serve-public",id:"version-v1.9/cli/hydra-serve-public",isDocsHomePage:!1,title:"hydra serve public",description:"hydra serve public Serves Public HTTP/2 APIs",source:"@site/versioned_docs/version-v1.9/cli/hydra-serve-public.md",sourceDirName:"cli",slug:"/cli/hydra-serve-public",permalink:"/hydra/docs/v1.9/cli/hydra-serve-public",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/cli/hydra-serve-public.md",version:"v1.9",lastUpdatedBy:"aeneasr",lastUpdatedAt:1607427290,formattedLastUpdatedAt:"12/8/2020",frontMatter:{id:"hydra-serve-public",title:"hydra serve public",description:"hydra serve public Serves Public HTTP/2 APIs"},sidebar:"version-v1.9/docs",previous:{title:"hydra serve all",permalink:"/hydra/docs/v1.9/cli/hydra-serve-all"},next:{title:"hydra token",permalink:"/hydra/docs/v1.9/cli/hydra-token"}},s=[{value:"hydra serve public",id:"hydra-serve-public",children:[{value:"Synopsis",id:"synopsis",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={toc:s};function d(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hydra-serve-public"},"hydra serve public"),Object(i.b)("p",null,"Serves Public HTTP/2 APIs"),Object(i.b)("h3",{id:"synopsis"},"Synopsis"),Object(i.b)("p",null,"This command opens one port and listens to HTTP/2 API requests. The exposed API\nhandles requests coming from the public internet, like OAuth 2.0 Authorization\nand Token requests, OpenID Connect UserInfo, OAuth 2.0 Token Revokation, and\nOpenID Connect Discovery."),Object(i.b)("p",null,'This command is configurable using the same options available to "serve admin"\nand "serve all".'),Object(i.b)("p",null,"It is generally recommended to use this command only if you require granular\ncontrol over the privileged and public APIs. For example, you might want to run\ndifferent TLS certificates or CORS settings on the public and privileged API."),Object(i.b)("p",null,'This command does not work with the "memory" database. Both services\n(privileged, public) MUST use the same database connection to be able to\nsynchronize.'),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"ORY Hydra can be configured using environment variables as well as a\nconfiguration file. For more information on configuration options, open the\nconfiguration documentation:"),Object(i.b)("blockquote",null,Object(i.b)("blockquote",{parentName:"blockquote"},Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/undefined/docs/docs/reference/config.md"},"https://github.com/ory/hydra/blob/undefined/docs/docs/reference/config.md")," <<"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"hydra serve public [flags]\n")),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  -h, --help   help for public\n")),Object(i.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  -c, --config strings                                   Path to one or more .json, .yaml, .yml, .toml config files. Values are loaded in the order provided, meaning that the last config file overwrites values from the previous config file.\n      --dangerous-allow-insecure-redirect-urls strings   DO NOT USE THIS IN PRODUCTION - Disable HTTPS enforcement for the provided redirect URLs\n      --dangerous-force-http                             DO NOT USE THIS IN PRODUCTION - Disables HTTP/2 over TLS (HTTPS) and serves HTTP instead\n      --sqa-opt-out                                      Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n")),Object(i.b)("h3",{id:"see-also"},"SEE ALSO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"hydra-serve"},"hydra serve")," - Parent command for starting public and\nadministrative HTTP/2 APIs")))}d.isMDXComponent=!0},571:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return m}));var t=n(0),o=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var r=o.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=d(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=t,m=u["".concat(a,".").concat(b)]||u[b]||p[b]||i;return n?o.a.createElement(m,c(c({ref:r},l),{},{components:n})):o.a.createElement(m,c({ref:r},l))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);