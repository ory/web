(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{219:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(8),a=(n(0),n(549)),i=n(552),s={id:"csrf",title:"Common Cookie and CSRF Pitfalls"},c={unversionedId:"debug/csrf",id:"version-v0.6/debug/csrf",isDocsHomePage:!1,title:"Common Cookie and CSRF Pitfalls",description:"Because Ory Kratos is not just an API, but instead talks to your users' browsers",source:"@site/versioned_docs/version-v0.6/debug/csrf.mdx",sourceDirName:"debug",slug:"/debug/csrf",permalink:"/kratos/docs/debug/csrf",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/debug/csrf.mdx",version:"v0.6",frontMatter:{id:"csrf",title:"Common Cookie and CSRF Pitfalls"},sidebar:"version-v0.6/docs",previous:{title:"kratos version",permalink:"/kratos/docs/cli/kratos-version"},next:{title:"Performance Problems and Out Of Memory Panics Caused by Password Hashing",permalink:"/kratos/docs/debug/performance-out-of-memory-password-hashing-argon2"}},l=[{value:"Common Pitfalls",id:"common-pitfalls",children:[{value:"SameSite Attribute",id:"samesite-attribute",children:[]},{value:"Ory Kratos running over HTTP without dev-mode enabled",id:"ory-kratos-running-over-http-without-dev-mode-enabled",children:[]},{value:"Running on separate (sub-)domains",id:"running-on-separate-sub-domains",children:[]},{value:"Mixing up 127.0.0.1 and localhost",id:"mixing-up-127001-and-localhost",children:[]},{value:"Trying to access Ory Kratos Cookies from client-side JavaScript",id:"trying-to-access-ory-kratos-cookies-from-client-side-javascript",children:[]},{value:"Accessing Ory Kratos APIs from client-side JavaScript / AJAX",id:"accessing-ory-kratos-apis-from-client-side-javascript--ajax",children:[]},{value:"Accessing Ory Kratos APIs from a server-side application",id:"accessing-ory-kratos-apis-from-a-server-side-application",children:[]}]}],u={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Because Ory Kratos is not just an API, but instead talks to your users' browsers\ndirectly, several security measures have been implemented in Ory Kratos. One of\nthem is protection against CSRF:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"CSRF is an attack that tricks the victim into submitting a malicious request.\nIt inherits the identity and privileges of the victim to perform an undesired\nfunction on the victim\u2019s behalf. For most sites, browser requests\nautomatically include any credentials associated with the site, such as the\nuser\u2019s session cookie, IP address, Windows domain credentials, and so forth.\nTherefore, if the user is currently authenticated to the site, the site will\nhave no way to distinguish between the forged request sent by the victim and a\nlegitimate request sent by the victim."),Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",{parentName:"p",href:"https://owasp.org/www-community/attacks/csrf"},"Source"))),Object(a.b)("p",null,"To protect against CSRF, several endpoints are protected by Anti-CSRF measures.\nTypically, endpoints accepting ",Object(a.b)("inlineCode",{parentName:"p"},"POST"),", ",Object(a.b)("inlineCode",{parentName:"p"},"DELTE"),", ",Object(a.b)("inlineCode",{parentName:"p"},"PUT")," actions have Anti-CSRF\nmeasures. When rendering a form for example, a\n",Object(a.b)("inlineCode",{parentName:"p"},'<input type="hidden" name="csrf_token" value="...">')," HTML Input Element is\nadded. Ory Kratos compares that value to the value set in the Anti-CSRF Cookie.\nIf the values match, the request is allowed."),Object(a.b)("p",null,"Ory Kratos uses HTTP Cookies to store login sessions when accessed via a\nbrowser."),Object(a.b)("h2",{id:"common-pitfalls"},"Common Pitfalls"),Object(a.b)("p",null,"Sometimes, cookies and CSRF just wont work - all requests end up with a 401\nUnauthorized or 400 Bad Request. Here are some common causes and easy fixes if\nthat happens to you!"),Object(a.b)("p",null,"Before starting to debug cookie and CSRF issues, make sure to check out the\nChrome Developer Tools (or any comparable technology) Cookies tabs in the\nApplication tab"),Object(a.b)("img",{alt:"Google Chrome Developer Tools - Application Tab - Cookies",src:Object(i.a)("img/docs/csrf_app_tab.png")}),Object(a.b)("p",null,"as well as the network tab - look for ",Object(a.b)("inlineCode",{parentName:"p"},"Cookie")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Set-Cookie")," HTTP Headers:"),Object(a.b)("img",{alt:"Google Chrome Developer Tools - Network Tab - Cookies",src:Object(i.a)("img/docs/csrf_network_tab.png")}),Object(a.b)("h3",{id:"samesite-attribute"},"SameSite Attribute"),Object(a.b)("p",null,"If you run Ory Kratos in ",Object(a.b)("inlineCode",{parentName:"p"},"--dev")," mode, it disables ",Object(a.b)("inlineCode",{parentName:"p"},"SameSite=Lax")," as Google\nChrome rejects all cookies that have ",Object(a.b)("inlineCode",{parentName:"p"},"SameSite=Lax")," but have ",Object(a.b)("inlineCode",{parentName:"p"},"secure")," set to\n",Object(a.b)("inlineCode",{parentName:"p"},"false"),". If you require ",Object(a.b)("inlineCode",{parentName:"p"},"SameSite=Lax"),", you need to run Ory Kratos with HTTPS\nand not use the ",Object(a.b)("inlineCode",{parentName:"p"},"--dev")," flag."),Object(a.b)("h3",{id:"ory-kratos-running-over-http-without-dev-mode-enabled"},"Ory Kratos running over HTTP without dev-mode enabled"),Object(a.b)("p",null,"Ory Kratos' cookies have the ",Object(a.b)("inlineCode",{parentName:"p"},"Secure")," flag enabled by default. This means that\nthe browser will not send the cookie unless the URL is a HTTPS URL. If you want\nOry Kratos to work with HTTP (e.g. on localhost) you can add the ",Object(a.b)("inlineCode",{parentName:"p"},"--dev")," flag:\n",Object(a.b)("inlineCode",{parentName:"p"},"kratos serve --dev"),"."),Object(a.b)("p",null,"Do not do this in production!"),Object(a.b)("h3",{id:"running-on-separate-sub-domains"},"Running on separate (sub-)domains"),Object(a.b)("p",null,"Cookies work best on the same domain. While it is possible to get cookies\nrunning on subdomains it is not possible to do that across Top Level Domains\n(TLDs)."),Object(a.b)("p",null,"Make sure that your application (e.g. the SecureApp from the quickstart) and Ory\nKrato's Public API are available on the same domain - preferably without\nsubdomains. Hosting both systems and routing paths with a Reverse Proxy such as\nNginx or Envoy or AWS API Gateway is the best solution. For example, routing\n",Object(a.b)("inlineCode",{parentName:"p"},"https://my-website/kratos/...")," to Ory Kratos and ",Object(a.b)("inlineCode",{parentName:"p"},"https://my-website/dashboard"),"\nto the SecureApp's Dashboard. Alternatively you can use piping in your app as we\ndo in the Quickstart guide."),Object(a.b)("p",null,"We do not recommend running them on separate subdomains, e.g.\n",Object(a.b)("inlineCode",{parentName:"p"},"https://kratos.my-website/")," and ",Object(a.b)("inlineCode",{parentName:"p"},"https://secureapp.my-website/"),")."),Object(a.b)("p",null,"Running the apps on different TLDs will not work at all, e.g. e.g.\n",Object(a.b)("inlineCode",{parentName:"p"},"https://kratos-my-website/")," and ",Object(a.b)("inlineCode",{parentName:"p"},"https://secureapp-my-website/"),"."),Object(a.b)("p",null,"Running the services on different ports however is ok, if the domain stays the\nsame."),Object(a.b)("h3",{id:"mixing-up-127001-and-localhost"},"Mixing up 127.0.0.1 and localhost"),Object(a.b)("p",null,"As already explained, make sure that the TLD stays the same. This is especially\ntrue for ",Object(a.b)("inlineCode",{parentName:"p"},"127.0.0.1")," and ",Object(a.b)("inlineCode",{parentName:"p"},"localhost")," which are both separate TLDs. Make sure\nthat you use ",Object(a.b)("inlineCode",{parentName:"p"},"127.0.0.1")," or ",Object(a.b)("inlineCode",{parentName:"p"},"localhost")," consistently across your configuration!"),Object(a.b)("h3",{id:"trying-to-access-ory-kratos-cookies-from-client-side-javascript"},"Trying to access Ory Kratos Cookies from client-side JavaScript"),Object(a.b)("p",null,"The cookies Ory Kratos sets cannot be accessed directly from Client-Side\nJavaScript because the ",Object(a.b)("inlineCode",{parentName:"p"},"HttpOnly")," flag is set. This flag cannot be modified!"),Object(a.b)("h3",{id:"accessing-ory-kratos-apis-from-client-side-javascript--ajax"},"Accessing Ory Kratos APIs from client-side JavaScript / AJAX"),Object(a.b)("p",null,"When implementing a Single Page App (SPA) using AngularJS or ReactJS you\nprobably want to access Ory Krato's Public APIs."),Object(a.b)("p",null,"To prevent several attack vectors, Ory Krato's Public API is protected - even\nfor some GET requests - with Anti-CSRF measures."),Object(a.b)("p",null,"Because AJAX does not send cookies per default, you need to configure your AJAX\nrequest to include cookies. Using the Browser's ",Object(a.b)("inlineCode",{parentName:"p"},"fetch")," function, you need to\nset\n",Object(a.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters"},Object(a.b)("inlineCode",{parentName:"a"},"credentials: 'include'")),"\nfor example."),Object(a.b)("h3",{id:"accessing-ory-kratos-apis-from-a-server-side-application"},"Accessing Ory Kratos APIs from a server-side application"),Object(a.b)("p",null,"When implementing a server-side application (e.g. in PHP, Java, Go, NodeJS, ...)\nmake sure to only call Ory Kratos' APIs through the Admin Port (default ",Object(a.b)("inlineCode",{parentName:"p"},"4434"),"),\n",Object(a.b)("strong",{parentName:"p"},"not")," the Public Port (default ",Object(a.b)("inlineCode",{parentName:"p"},"4433"),") as the Public Port requires CSRF\nCookies and the Admin Port doesn't! Since your server-side application does not\nuse a browser to interact with Kratos, CSRF Cookies will not be available which\ncauses API calls to fail."))}p.isMDXComponent=!0},549:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=o,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},552:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var o=n(16),r=n(556);function a(){var e=Object(o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var a=void 0===o?{}:o,i=a.forcePrependBaseUrl,s=void 0!==i&&i,c=a.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},556:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}))}}]);