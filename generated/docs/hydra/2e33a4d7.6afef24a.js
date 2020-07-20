(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(9),a=(n(0),n(291)),i=(n(293),{id:"oauth2-token-introspection",title:"OAuth 2.0 Token Introspection"}),c={id:"guides/oauth2-token-introspection",isDocsHomePage:!1,title:"OAuth 2.0 Token Introspection",description:"The Token Introspection extension defines a mechanism for resource servers to",source:"@site/docs/guides/oauth2-token-introspection.mdx",permalink:"/hydra/docs/next/guides/oauth2-token-introspection",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/guides/oauth2-token-introspection.mdx",version:"next",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594381209,sidebar:"docs",previous:{title:"Using OAuth2",permalink:"/hydra/docs/next/guides/using-oauth2"},next:{title:"Mobile & Browser (Single-Page-App) with OAuth2",permalink:"/hydra/docs/next/guides/oauth2-public-spa-mobile"},latestVersionMainDocPermalink:"/hydra/docs"},s=[{value:"Examples",id:"examples",children:[{value:"NodeJS",id:"nodejs",children:[]}]}],u={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Token Introspection extension defines a mechanism for resource servers to\nobtain information about access tokens. With this spec, resource servers can\ncheck the validity of access tokens, and find out other information such as\nwhich user and which scopes are associated with the token."),Object(a.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Token Introspection is meant for first-party / internal use only. The endpoint\nshould not be exposed publicly."))),Object(a.b)("p",null,"You can find more details on this endpoint in the\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.ory.sh/docs/"}),"ORY Hydra API Docs"),". You can also use the CLI command\n",Object(a.b)("inlineCode",{parentName:"p"},"hydra token introspect <token>"),"."),Object(a.b)("p",null,"Another helpful resource is\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.oauth.com/oauth2-servers/token-introspection-endpoint/"}),"Token Introspection Endpoint"),"."),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("h3",{id:"nodejs"},"NodeJS"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"const token = 'the access token'\nconst body = qs.stringify({ token })\n\nfetch('http://ory-hydra/oauth2/introspect', {\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n      'Content-Length': body.length\n    },\n    method: 'POST', body\n}).then(body => {\n    if (!body.active) {\n        // Token is not active/valid\n    }\n\n    // token is active\n})\n")),Object(a.b)("h4",{id:"curl"},"CURL"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ curl -X POST \\\n    -d 'token=<the-token>' \\\n    http://localhost:4445/oauth2/introspect\n")))}p.isMDXComponent=!0},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,h=d["".concat(i,".").concat(b)]||d[b]||l[b]||a;return n?o.a.createElement(h,c(c({ref:t},u),{},{components:n})):o.a.createElement(h,c({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},292:function(e,t,n){"use strict";var r=n(0),o=n(52);t.a=function(){return Object(r.useContext)(o.a)}},293:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(76);var r=n(292),o=n(294);function a(e,t){var n=void 0===t?{}:t,a=n.forcePrependBaseUrl,i=void 0!==a&&a,c=n.absolute,s=void 0!==c&&c,u=Object(r.a)().siteConfig,p=(u=void 0===u?{}:u).baseUrl,d=void 0===p?"/":p,l=u.url;if(!e)return e;if(i)return d+e;if(!Object(o.a)(e))return e;var b=d+e.replace(/^\//,"");return s?l+b:b}},294:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return r}))}}]);