(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{309:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return m}));var t=n(0),a=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var r=a.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=d(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),b=t,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return n?a.a.createElement(m,s(s({ref:r},l),{},{components:n})):a.a.createElement(m,s({ref:r},l))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},63:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return s})),n.d(r,"rightToc",(function(){return c})),n.d(r,"default",(function(){return d}));var t=n(2),a=n(6),i=(n(0),n(309)),o={id:"hydra-serve",title:"hydra serve",description:"hydra serve Parent command for starting public and administrative HTTP/2 APIs"},s={unversionedId:"cli/hydra-serve",id:"version-v1.7/cli/hydra-serve",isDocsHomePage:!1,title:"hydra serve",description:"hydra serve Parent command for starting public and administrative HTTP/2 APIs",source:"@site/versioned_docs/version-v1.7/cli/hydra-serve.md",permalink:"/hydra/docs/cli/hydra-serve",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.7/cli/hydra-serve.md",version:"v1.7",lastUpdatedBy:"aeneasr",lastUpdatedAt:1597407772,sidebar:"version-v1.7/docs",previous:{title:"hydra migrate sql",permalink:"/hydra/docs/cli/hydra-migrate-sql"},next:{title:"hydra serve admin",permalink:"/hydra/docs/cli/hydra-serve-admin"}},c=[{value:"hydra serve",id:"hydra-serve",children:[{value:"Synopsis",id:"synopsis",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={rightToc:c};function d(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hydra-serve"},"hydra serve"),Object(i.b)("p",null,"Parent command for starting public and administrative HTTP/2 APIs"),Object(i.b)("h3",{id:"synopsis"},"Synopsis"),Object(i.b)("p",null,"ORY Hydra exposes two ports, a public and an administrative port. The public\nport is responsible for handling requests from the public internet, such as the\nOAuth 2.0 Authorize and Token URLs. The administrative port handles\nadministrative requests like creating OAuth 2.0 Clients, managing JSON Web Keys,\nand managing User Login and Consent sessions."),Object(i.b)("p",null,'It is recommended to run "hydra serve all". If you need granular control over\nCORS settings or similar, you may want to run "hydra serve admin" and "hydra\nserve public" separately.'),Object(i.b)("p",null,"To learn more about each individual command, run:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"hydra help serve all"),Object(i.b)("li",{parentName:"ul"},"hydra help serve admin"),Object(i.b)("li",{parentName:"ul"},"hydra help serve public")),Object(i.b)("p",null,"All sub-commands share command line flags and configuration options."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"ORY Hydra can be configured using environment variables as well as a\nconfiguration file. For more information on configuration options, open the\nconfiguration documentation:"),Object(i.b)("blockquote",null,Object(i.b)("blockquote",{parentName:"blockquote"},Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/ory/hydra/blob/undefined/docs/config.yaml"}),"https://github.com/ory/hydra/blob/undefined/docs/config.yaml")," <<"))),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"      --dangerous-allow-insecure-redirect-urls strings   DO NOT USE THIS IN PRODUCTION - Disable HTTPS enforcement for the provided redirect URLs\n      --dangerous-force-http                             DO NOT USE THIS IN PRODUCTION - Disables HTTP/2 over TLS (HTTPS) and serves HTTP instead\n      --disable-telemetry                                Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n  -h, --help                                             help for serve\n      --sqa-opt-out                                      Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n")),Object(i.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"      --config string     Config file (default is $HOME/.hydra.yaml)\n      --skip-tls-verify   Foolishly accept TLS certificates signed by unkown certificate authorities\n")),Object(i.b)("h3",{id:"see-also"},"SEE ALSO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"hydra"}),"hydra")," - Run and manage ORY Hydra"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"hydra-serve-admin"}),"hydra serve admin")," - Serves Administrative HTTP/2 APIs"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"hydra-serve-all"}),"hydra serve all")," - Serves both public and administrative\nHTTP/2 APIs"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"hydra-serve-public"}),"hydra serve public")," - Serves Public HTTP/2 APIs")))}d.isMDXComponent=!0}}]);