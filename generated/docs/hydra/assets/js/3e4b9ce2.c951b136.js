(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{202:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),i=(n(0),n(570)),a=(n(571),{id:"secrets-key-rotation",title:"Secrets and Key Rotation"}),s={unversionedId:"guides/secrets-key-rotation",id:"version-v1.8/guides/secrets-key-rotation",isDocsHomePage:!1,title:"Secrets and Key Rotation",description:"There are two types of key rotation:",source:"@site/versioned_docs/version-v1.8/guides/secrets-key-rotation.mdx",sourceDirName:"guides",slug:"/guides/secrets-key-rotation",permalink:"/hydra/docs/v1.8/guides/secrets-key-rotation",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.8/guides/secrets-key-rotation.mdx",version:"v1.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601676726,formattedLastUpdatedAt:"10/2/2020",frontMatter:{id:"secrets-key-rotation",title:"Secrets and Key Rotation"},sidebar:"version-v1.8/docs",previous:{title:"Distributed Tracing",permalink:"/hydra/docs/v1.8/guides/tracing"},next:{title:"Kubernetes Helm Chart",permalink:"/hydra/docs/v1.8/guides/kubernetes-helm-chart"}},c=[{value:"Rotation of JSON Web Token Signing Keys",id:"rotation-of-json-web-token-signing-keys",children:[]},{value:"Rotation of HMAC Token Signing and Database and Cookie Encryption Keys",id:"rotation-of-hmac-token-signing-and-database-and-cookie-encryption-keys",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are two types of key rotation:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Rotation of JSON Web Token Signing Keys"),Object(i.b)("li",{parentName:"ul"},"Rotation of HMAC Token Signing and Database and Cookie Encryption Keys")),Object(i.b)("h3",{id:"rotation-of-json-web-token-signing-keys"},"Rotation of JSON Web Token Signing Keys"),Object(i.b)("p",null,"JSON Web Token Signing Key rotation is simple with ORY Hydra. You can rotate\nOpenID Connect ID Token and OAuth 2.0 Access Tokens, when using the JSON Web\nToken strategy, keys with one simple command."),Object(i.b)("p",null,"ORY Hydra takes the latest key from the key store to sign JSON Web Tokens. All\npublic keys will be shown at\n",Object(i.b)("inlineCode",{parentName:"p"},"http://ory-hydra-public-api/.well-known/jwks.json"),"."),Object(i.b)("h4",{id:"openid-connect-id-token"},"OpenID Connect ID Token"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"hydra keys create --endpoint=http://ory-hydra-admin-api/ hydra.openid.id-token -a RS256\n")),Object(i.b)("h4",{id:"oauth-20-access-tokens-json-web-token"},"OAuth 2.0 Access Tokens (JSON Web Token)"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This will only work when using the JWT access token strategy. Otherwise, this\nwill have no effect.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"hydra keys create --endpoint=http://ory-hydra-admin-api/ hydra.jwt.access-token -a RS256\n")),Object(i.b)("h3",{id:"rotation-of-hmac-token-signing-and-database-and-cookie-encryption-keys"},"Rotation of HMAC Token Signing and Database and Cookie Encryption Keys"),Object(i.b)("p",null,"Rotating database encryption keys is done by prepending the new encryption key\nto the respective configuration value. Assuming configuration"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"secrets:\n  cookie:\n    - the-old-cookie-encryption-key\n  system:\n    - the-old-system-encryption-key\n")),Object(i.b)("p",null,"one would add the new keys as follows"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"secrets:\n  cookie:\n    - the-new-cookie-encryption-key # the new key must be the first entry\n    - the-old-cookie-encryption-key\n  system:\n    - the-new-system-encryption-key # the new key must be the first entry\n    - the-old-system-encryption-key\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"It is very important that the new key is the first entry in the list as only\nthe first key is used for encryption while all keys from the list are used for\ndecryption. Please note that existing data will not be automatically\nre-encrypted using the new key. Only new data will be signed and encrypted\nusing the new key. It is therefore imperative that the old key is added to the\nlist, unless you want to also invalidate all data that was signed or encrypted\nusing the old key.")))}u.isMDXComponent=!0},570:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,b=d["".concat(a,".").concat(p)]||d[p]||y[p]||i;return n?o.a.createElement(b,s(s({ref:t},l),{},{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},571:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(16),o=n(572);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,s=void 0!==a&&a,c=i.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},572:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))}}]);