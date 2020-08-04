(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{279:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var o=n(2),r=n(9),a=(n(0),n(291)),i=n(293),s={id:"csrf",title:"Common CSRF Pitfalls"},c={id:"version-v1.6/debug/csrf",isDocsHomePage:!1,title:"Common CSRF Pitfalls",description:"Because ORY Hydra is not just an API, but instead talks to your users' browsers",source:"@site/versioned_docs/version-v1.6/debug/csrf.mdx",permalink:"/hydra/docs/debug/csrf",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.6/debug/csrf.mdx",version:"v1.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1595248858,sidebar:"version-v1.6/docs",previous:{title:"Common Problems",permalink:"/hydra/docs/debug"},next:{title:"Wrong Token Endpoint Auth Method",permalink:"/hydra/docs/debug/token-endpoint-auth-method"}},l=[{value:"Common Pitfalls",id:"common-pitfalls",children:[{value:"ORY Hydra Running Over HTTP Without dev-mode Enabled",id:"ory-hydra-running-over-http-without-dev-mode-enabled",children:[]},{value:"Mixing up <code>127.0.0.1</code> and <code>localhost</code>",id:"mixing-up-127001-and-localhost",children:[]},{value:"Reverse Proxy / Load Balancers",id:"reverse-proxy--load-balancers",children:[]},{value:"Running Flows in Separate Browsers or Browser Windows",id:"running-flows-in-separate-browsers-or-browser-windows",children:[]},{value:"Running Multiple OAuth2 Flows Simultaneously",id:"running-multiple-oauth2-flows-simultaneously",children:[]},{value:"Cookie Same-Site Mode",id:"cookie-same-site-mode",children:[]},{value:"Using AJAX to call <code>/oauth2/auth</code>",id:"using-ajax-to-call-oauth2auth",children:[]}]}],u={rightToc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Because ORY Hydra is not just an API, but instead talks to your users' browsers\ndirectly, several security measures have been implemented in ORY Kratos. One of\nthem is protection against CSRF:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"CSRF is an attack that tricks the victim into submitting a malicious request.\nIt inherits the identity and privileges of the victim to perform an undesired\nfunction on the victim\u2019s behalf. For most sites, browser requests\nautomatically include any credentials associated with the site, such as the\nuser\u2019s session cookie, IP address, Windows domain credentials, and so forth.\nTherefore, if the user is currently authenticated to the site, the site will\nhave no way to distinguish between the forged request sent by the victim and a\nlegitimate request sent by the victim."),Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://owasp.org/www-community/attacks/csrf"}),"Source"))),Object(a.b)("h2",{id:"common-pitfalls"},"Common Pitfalls"),Object(a.b)("p",null,"Sometimes, cookies and CSRF just wont work - all requests end up with a 401\nUnauthorized or 400 Bad Request. Here are some common causes and easy fixes if\nthat happens to you!"),Object(a.b)("p",null,"Before starting to debug cookie and CSRF issues, make sure to check out the\nChrome Developer Tools (or any comparable technology) Cookies tabs in the\nApplication tab"),Object(a.b)("img",{alt:"Google Chrome Developer Tools - Application Tab - Cookies",src:Object(i.a)("img/docs/csrf_app_tab.png")}),Object(a.b)("p",null,"as well as the network tab - look for ",Object(a.b)("inlineCode",{parentName:"p"},"Cookie")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Set-Cookie")," HTTP Headers:"),Object(a.b)("img",{alt:"Google Chrome Developer Tools - Network Tab - Cookies",src:Object(i.a)("img/docs/csrf_network_tab.png")}),Object(a.b)("h3",{id:"ory-hydra-running-over-http-without-dev-mode-enabled"},"ORY Hydra Running Over HTTP Without dev-mode Enabled"),Object(a.b)("p",null,"You are running ORY Hydra via HTTP but are missing the ",Object(a.b)("inlineCode",{parentName:"p"},"--dangerous-force-http")," CLI flag:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"$ hydra serve all -c path/to/config.yml --dangerous-force-http\n")),Object(a.b)("h3",{id:"mixing-up-127001-and-localhost"},"Mixing up ",Object(a.b)("inlineCode",{parentName:"h3"},"127.0.0.1")," and ",Object(a.b)("inlineCode",{parentName:"h3"},"localhost")),Object(a.b)("p",null,"Use either ",Object(a.b)("inlineCode",{parentName:"p"},"127.0.0.1")," (and in general IPs) or ",Object(a.b)("inlineCode",{parentName:"p"},"localhost")," (and in general hostnames)\nconsistently throughout your flow because cookies from an IP are not available to the\nhostname and vice-versa."),Object(a.b)("h3",{id:"reverse-proxy--load-balancers"},"Reverse Proxy / Load Balancers"),Object(a.b)("p",null,"You are running ORY Hydra behind a Reverse Proxy (e.g. Load Balancer) that\nstrips the Cookie header. If the reverse proxy supports path rewrites that\nmight also cause issues!"),Object(a.b)("h3",{id:"running-flows-in-separate-browsers-or-browser-windows"},"Running Flows in Separate Browsers or Browser Windows"),Object(a.b)("p",null,'You are running the OAuth2 flow in separate browsers, or in a browser with\nincognito mode. The Brave browser is also known for notoriously discarding\ncookies when used in "No-Tracking" mode.'),Object(a.b)("h3",{id:"running-multiple-oauth2-flows-simultaneously"},"Running Multiple OAuth2 Flows Simultaneously"),Object(a.b)("p",null,"You are trying to do two OAuth2 flows at the same time in the same Browser."),Object(a.b)("h3",{id:"cookie-same-site-mode"},"Cookie Same-Site Mode"),Object(a.b)("p",null,"You have changed the Cookie SameSite behavior. If this is the default value\n(you did not change it), this should not be an issue."),Object(a.b)("h3",{id:"using-ajax-to-call-oauth2auth"},"Using AJAX to call ",Object(a.b)("inlineCode",{parentName:"h3"},"/oauth2/auth")),Object(a.b)("p",null,"You ",Object(a.b)("strong",{parentName:"p"},"cannot")," call ",Object(a.b)("inlineCode",{parentName:"p"},"/oauth2/auth")," using an AJAX request. It is not allowed and\nnot possible with OAuth2. This endpoint can only be accessed using a normal\nbrowser request by clicking a link or redirecting the end-user's browser\nto that endpoint."))}d.isMDXComponent=!0},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,h=d["".concat(i,".").concat(p)]||d[p]||b[p]||a;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},292:function(e,t,n){"use strict";var o=n(0),r=n(52);t.a=function(){return Object(o.useContext)(r.a)}},293:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(76);var o=n(292),r=n(294);function a(e,t){var n=void 0===t?{}:t,a=n.forcePrependBaseUrl,i=void 0!==a&&a,s=n.absolute,c=void 0!==s&&s,l=Object(o.a)().siteConfig,u=(l=void 0===l?{}:l).baseUrl,d=void 0===u?"/":u,b=l.url;if(!e)return e;if(i)return d+e;if(!Object(r.a)(e))return e;var p=d+e.replace(/^\//,"");return c?b+p:p}},294:function(e,t,n){"use strict";function o(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return o}))}}]);