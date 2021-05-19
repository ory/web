(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{175:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return d}));var n=t(3),i=t(8),o=(t(0),t(572)),a={id:"hydra-serve-public",title:"hydra serve public",description:"hydra serve public Serves Public HTTP/2 APIs"},c={unversionedId:"cli/hydra-serve-public",id:"version-v1.7/cli/hydra-serve-public",isDocsHomePage:!1,title:"hydra serve public",description:"hydra serve public Serves Public HTTP/2 APIs",source:"@site/versioned_docs/version-v1.7/cli/hydra-serve-public.md",sourceDirName:"cli",slug:"/cli/hydra-serve-public",permalink:"/hydra/docs/v1.7/cli/hydra-serve-public",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.7/cli/hydra-serve-public.md",version:"v1.7",lastUpdatedBy:"aeneasr",lastUpdatedAt:1597407772,formattedLastUpdatedAt:"8/14/2020",frontMatter:{id:"hydra-serve-public",title:"hydra serve public",description:"hydra serve public Serves Public HTTP/2 APIs"},sidebar:"version-v1.7/docs",previous:{title:"hydra serve all",permalink:"/hydra/docs/v1.7/cli/hydra-serve-all"},next:{title:"hydra token",permalink:"/hydra/docs/v1.7/cli/hydra-token"}},s=[{value:"hydra serve public",id:"hydra-serve-public",children:[{value:"Synopsis",id:"synopsis",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={toc:s};function d(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hydra-serve-public"},"hydra serve public"),Object(o.b)("p",null,"Serves Public HTTP/2 APIs"),Object(o.b)("h3",{id:"synopsis"},"Synopsis"),Object(o.b)("p",null,"This command opens one port and listens to HTTP/2 API requests. The exposed API\nhandles requests coming from the public internet, like OAuth 2.0 Authorization\nand Token requests, OpenID Connect UserInfo, OAuth 2.0 Token Revokation, and\nOpenID Connect Discovery."),Object(o.b)("p",null,'This command is configurable using the same options available to "serve admin"\nand "serve all".'),Object(o.b)("p",null,"It is generally recommended to use this command only if you require granular\ncontrol over the privileged and public APIs. For example, you might want to run\ndifferent TLS certificates or CORS settings on the public and privileged API."),Object(o.b)("p",null,'This command does not work with the "memory" database. Both services\n(privileged, public) MUST use the same database connection to be able to\nsynchronize.'),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"ORY Hydra can be configured using environment variables as well as a\nconfiguration file. For more information on configuration options, open the\nconfiguration documentation:"),Object(o.b)("blockquote",null,Object(o.b)("blockquote",{parentName:"blockquote"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/undefined/docs/config.yaml"},"https://github.com/ory/hydra/blob/undefined/docs/config.yaml")," <<"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"hydra serve public [flags]\n")),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  -h, --help   help for public\n")),Object(o.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"      --config string                                    Config file (default is $HOME/.hydra.yaml)\n      --dangerous-allow-insecure-redirect-urls strings   DO NOT USE THIS IN PRODUCTION - Disable HTTPS enforcement for the provided redirect URLs\n      --dangerous-force-http                             DO NOT USE THIS IN PRODUCTION - Disables HTTP/2 over TLS (HTTPS) and serves HTTP instead\n      --disable-telemetry                                Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n      --skip-tls-verify                                  Foolishly accept TLS certificates signed by unkown certificate authorities\n      --sqa-opt-out                                      Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n")),Object(o.b)("h3",{id:"see-also"},"SEE ALSO"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"hydra-serve"},"hydra serve")," - Parent command for starting public and\nadministrative HTTP/2 APIs")))}d.isMDXComponent=!0},572:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),i=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),d=function(e){var r=i.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=d(e.components);return i.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},b=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(t),b=n,m=p["".concat(a,".").concat(b)]||p[b]||u[b]||o;return t?i.a.createElement(m,c(c({ref:r},l),{},{components:t})):i.a.createElement(m,c({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=b;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);