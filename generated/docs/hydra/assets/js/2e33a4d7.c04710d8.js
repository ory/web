(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var o=n(3),r=n(8),a=(n(0),n(570)),i={id:"oauth2-token-introspection",title:"OAuth 2.0 Token Introspection"},c={unversionedId:"guides/oauth2-token-introspection",id:"guides/oauth2-token-introspection",isDocsHomePage:!1,title:"OAuth 2.0 Token Introspection",description:"The Token Introspection extension defines a mechanism for resource servers to",source:"@site/docs/guides/oauth2-token-introspection.mdx",sourceDirName:"guides",slug:"/guides/oauth2-token-introspection",permalink:"/hydra/docs/next/guides/oauth2-token-introspection",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/guides/oauth2-token-introspection.mdx",version:"current",lastUpdatedBy:"Vincent",lastUpdatedAt:1613485800,formattedLastUpdatedAt:"2/16/2021",frontMatter:{id:"oauth2-token-introspection",title:"OAuth 2.0 Token Introspection"},sidebar:"docs",previous:{title:"Configuring Expiration",permalink:"/hydra/docs/next/guides/token-expiration"},next:{title:"Mobile & Browser (Single-Page-App) with OAuth2",permalink:"/hydra/docs/next/guides/oauth2-public-spa-mobile"}},s=[{value:"Examples",id:"examples",children:[{value:"NodeJS",id:"nodejs",children:[]}]}],p={toc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Token Introspection extension defines a mechanism for resource servers to\nobtain information about access tokens. With this spec, resource servers can\ncheck the validity of access tokens, and find out other information such as\nwhich user and which scopes are associated with the token."),Object(a.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Token Introspection is meant for first-party / internal use only. The endpoint\nshould not be exposed publicly."))),Object(a.b)("p",null,"You can find more details on this endpoint in the\n",Object(a.b)("a",{parentName:"p",href:"https://www.ory.sh/hydra/docs/reference/api"},"ORY Hydra API Docs"),". You can also\nuse the CLI command ",Object(a.b)("inlineCode",{parentName:"p"},"hydra token introspect <token>"),"."),Object(a.b)("p",null,"Another helpful resource is\n",Object(a.b)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/token-introspection-endpoint/"},"Token Introspection Endpoint"),"."),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("h3",{id:"nodejs"},"NodeJS"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"const token = 'the access token'\nconst body = qs.stringify({ token })\n\nfetch('http://ory-hydra/oauth2/introspect', {\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n      'Content-Length': body.length\n    },\n    method: 'POST', body\n}).then(body => {\n    if (!body.active) {\n        // Token is not active/valid\n    }\n\n    // token is active\n})\n")),Object(a.b)("h4",{id:"curl"},"CURL"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ curl -X POST \\\n    -d 'token=<the-token>' \\\n    http://localhost:4445/oauth2/introspect\n")))}d.isMDXComponent=!0},570:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=o,b=u["".concat(i,".").concat(h)]||u[h]||l[h]||a;return n?r.a.createElement(b,c(c({ref:t},p),{},{components:n})):r.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);