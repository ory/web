(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{329:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(8),o=(r(0),r(568)),i={id:"hydra-token",title:"hydra token",description:"hydra token Issue and Manage OAuth2 tokens"},c={unversionedId:"cli/hydra-token",id:"version-v1.10/cli/hydra-token",isDocsHomePage:!1,title:"hydra token",description:"hydra token Issue and Manage OAuth2 tokens",source:"@site/versioned_docs/version-v1.10/cli/hydra-token.md",slug:"/cli/hydra-token",permalink:"/hydra/docs/cli/hydra-token",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/cli/hydra-token.md",version:"v1.10",lastUpdatedBy:"aeneasr",lastUpdatedAt:1616672187,formattedLastUpdatedAt:"3/25/2021",sidebar:"version-v1.10/docs",previous:{title:"hydra serve public",permalink:"/hydra/docs/cli/hydra-serve-public"},next:{title:"hydra token client",permalink:"/hydra/docs/cli/hydra-token-client"}},l=[{value:"hydra token",id:"hydra-token",children:[{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],d={toc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hydra-token"},"hydra token"),Object(o.b)("p",null,"Issue and Manage OAuth2 tokens"),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   fake tls termination by adding &#34;X-Forwarded-Proto: https&#34; to http headers\n  -h, --help                   help for token\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unknown certificate authorities\n")),Object(o.b)("h3",{id:"see-also"},"SEE ALSO"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"hydra"},"hydra")," - Run and manage ORY Hydra"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"hydra-token-client"},"hydra token client")," - An exemplary OAuth 2.0 Client\nperforming the OAuth 2.0 Client Credentials Flow"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"hydra-token-delete"},"hydra token delete")," - Deletes access tokens of a client"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"hydra-token-flush"},"hydra token flush")," - Removes inactive access tokens from\nthe database"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"hydra-token-introspect"},"hydra token introspect")," - Introspect an access or\nrefresh token"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"hydra-token-revoke"},"hydra token revoke")," - Revoke an access or refresh token"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"hydra-token-user"},"hydra token user")," - An exemplary OAuth 2.0 Client\nperforming the OAuth 2.0 Authorize Code Flow")))}s.isMDXComponent=!0},568:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),s=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),h=n,y=p["".concat(i,".").concat(h)]||p[h]||u[h]||o;return r?a.a.createElement(y,c(c({ref:t},d),{},{components:r})):a.a.createElement(y,c({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);