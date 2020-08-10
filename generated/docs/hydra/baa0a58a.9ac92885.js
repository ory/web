(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{173:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return d}));var n=t(2),a=t(6),o=(t(0),t(236)),i={id:"hydra-serve-all",title:"hydra serve all",description:"hydra serve all Serves both public and administrative HTTP/2 APIs"},s={unversionedId:"cli/hydra-serve-all",id:"cli/hydra-serve-all",isDocsHomePage:!1,title:"hydra serve all",description:"hydra serve all Serves both public and administrative HTTP/2 APIs",source:"@site/docs/cli/hydra-serve-all.md",permalink:"/hydra/docs/next/cli/hydra-serve-all",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/cli/hydra-serve-all.md",version:"next",lastUpdatedBy:"aeneasr",lastUpdatedAt:1597057981,sidebar:"docs",previous:{title:"hydra serve admin",permalink:"/hydra/docs/next/cli/hydra-serve-admin"},next:{title:"hydra serve public",permalink:"/hydra/docs/next/cli/hydra-serve-public"}},c=[{value:"hydra serve all",id:"hydra-serve-all",children:[{value:"Synopsis",id:"synopsis",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={rightToc:c};function d(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hydra-serve-all"},"hydra serve all"),Object(o.b)("p",null,"Serves both public and administrative HTTP/2 APIs"),Object(o.b)("h3",{id:"synopsis"},"Synopsis"),Object(o.b)("p",null,"Starts a process which listens on two ports for public and administrative HTTP/2\nAPI requests."),Object(o.b)("p",null,'If you want more granular control (e.g. different TLS settings) over each API\ngroup (administrative, public) you can run "serve admin" and "serve public"\nseparately.'),Object(o.b)("p",null,'This command exposes a variety of controls via environment variables. You can\nset environments using "export KEY=VALUE" (Linux/macOS) or "set KEY=VALUE"\n(Windows). On Linux, you can also set environments by prepending key value\npairs: "KEY=VALUE KEY2=VALUE2 hydra"'),Object(o.b)("p",null,"All possible controls are listed below. This command exposes exposes command\nline flags, which are listed below the controls section."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"ORY Hydra can be configured using environment variables as well as a\nconfiguration file. For more information on configuration options, open the\nconfiguration documentation:"),Object(o.b)("blockquote",null,Object(o.b)("blockquote",{parentName:"blockquote"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ory/hydra/blob/undefined/docs/config.yaml"}),"https://github.com/ory/hydra/blob/undefined/docs/config.yaml")," <<"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"hydra serve all [flags]\n")),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"  -h, --help   help for all\n")),Object(o.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"      --config string                                    Config file (default is $HOME/.hydra.yaml)\n      --dangerous-allow-insecure-redirect-urls strings   DO NOT USE THIS IN PRODUCTION - Disable HTTPS enforcement for the provided redirect URLs\n      --dangerous-force-http                             DO NOT USE THIS IN PRODUCTION - Disables HTTP/2 over TLS (HTTPS) and serves HTTP instead\n      --disable-telemetry                                Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n      --skip-tls-verify                                  Foolishly accept TLS certificates signed by unkown certificate authorities\n      --sqa-opt-out                                      Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n")),Object(o.b)("h3",{id:"see-also"},"SEE ALSO"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"hydra-serve"}),"hydra serve")," - Parent command for starting public and\nadministrative HTTP/2 APIs")))}d.isMDXComponent=!0},236:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),d=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=d(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(t),b=n,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return t?a.a.createElement(m,s(s({ref:r},l),{},{components:t})):a.a.createElement(m,s({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=b;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);