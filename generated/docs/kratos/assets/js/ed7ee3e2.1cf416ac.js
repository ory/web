(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[5006],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return f}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||r;return t?i.createElement(m,s(s({ref:n},u),{},{components:t})):i.createElement(m,s({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<r;l++)s[l]=t[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58215:function(e,n,t){"use strict";var i=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},41395:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var i=t(67294),a=t(80944),r=t(86010),s="tabItem_1uMI",o="tabItemActive_2DSg";var c=37,l=39;var u=function(e){var n=e.lazy,t=e.block,u=e.defaultValue,d=e.values,p=e.groupId,f=e.className,m=(0,a.Z)(),h=m.tabGroupChoices,g=m.setTabGroupChoices,v=(0,i.useState)(u),k=v[0],b=v[1],y=i.Children.toArray(e.children),w=[];if(null!=p){var N=h[p];null!=N&&N!==k&&d.some((function(e){return e.value===N}))&&b(N)}var x=function(e){var n=e.currentTarget,t=w.indexOf(n),i=d[t].value;b(i),null!=p&&(g(p,i),setTimeout((function(){var e,t,i,a,r,s,c,l;(e=n.getBoundingClientRect(),t=e.top,i=e.left,a=e.bottom,r=e.right,s=window,c=s.innerHeight,l=s.innerWidth,t>=0&&r<=l&&a<=c&&i>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(o),setTimeout((function(){return n.classList.remove(o)}),2e3))}),150))},C=function(e){var n,t;switch(e.keyCode){case l:var i=w.indexOf(e.target)+1;t=w[i]||w[0];break;case c:var a=w.indexOf(e.target)-1;t=w[a]||w[w.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},f)},d.map((function(e){var n=e.value,t=e.label;return i.createElement("li",{role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,className:(0,r.Z)("tabs__item",s,{"tabs__item--active":k===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:x,onClick:x},t)}))),n?(0,i.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==k})}))))}},79443:function(e,n,t){"use strict";var i=(0,t(67294).createContext)(void 0);n.Z=i},80944:function(e,n,t){"use strict";var i=t(67294),a=t(79443);n.Z=function(){var e=(0,i.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},73295:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var i=t(67294),a=t(83300),r=t.n(a),s=t(50210),o="container_2x1S",c=function(e,n){if(!e)return 0;var t=n.findIndex((function(n){return n.indexOf(e)>-1}));return-1===t?0:t},l=function(e){var n=e.src,t=e.title,a=(0,i.useState)(""),l=a[0],u=a[1];(0,i.useEffect)((function(){var t,i,a;r()(n.replace("github.com","raw.githubusercontent.com").replace("/blob/","/")).then((function(e){return e.text()})).then((t=e,i=t.startAt,a=t.endAt,function(e){var n=e.split("\n"),t=c(i,n);t>0&&(n=["// ..."].concat(n.slice(t,-1)));var r=c(a,n);return r>0&&(n=[].concat(n.slice(0,r+1),["// ..."])),n.join("\n")})).then(u).catch(console.error)}),[]);var d="language-"+function(e){var n=e.split(".").pop();switch(n){case"jsx":return"jsx";case"tsx":return"tsx";case"ts":return"typescript";case"go":return"go";case"yaml":case"yml":return"yaml";case"js":return"javascript";case"html":return"html";case"pug":return"pug";default:return n}}(n),p='title="'+(t||function(e){var n=e.match(new RegExp("https://github.com/[^/]+/[^/]+/blob/[^/]+/(.+)","i"))||[];return n.length>=2?n[1]:e}(n))+'"';return i.createElement("div",{className:o},i.createElement(s.Z,{metastring:p,className:d,children:l}))}},739:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return f}});var i=t(22122),a=t(19756),r=(t(67294),t(3905)),s=t(73295),o=t(41395),c=t(58215),l={id:"login-session",title:"Configuring And Checking for Login Sessions"},u={unversionedId:"guides/login-session",id:"guides/login-session",isDocsHomePage:!1,title:"Configuring And Checking for Login Sessions",description:"A login session is created when a user signs in. The session is stored as a",source:"@site/docs/guides/login-session.mdx",sourceDirName:"guides",slug:"/guides/login-session",permalink:"/kratos/docs/next/guides/login-session",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/guides/login-session.mdx",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1623825106,formattedLastUpdatedAt:"6/16/2021",frontMatter:{id:"login-session",title:"Configuring And Checking for Login Sessions"},sidebar:"docs",previous:{title:"Sign in with GitHub, GitLab, Google, Facebook, LinkedIn, Microsoft ...",permalink:"/kratos/docs/next/guides/sign-in-with-github-google-facebook-linkedin"},next:{title:"Configuring Cookies",permalink:"/kratos/docs/next/guides/configuring-cookies"}},d=[{value:"Login Session Configuration",id:"login-session-configuration",children:[]},{value:"Checking for Login Sessions",id:"checking-for-login-sessions",children:[{value:"Browser Client",id:"browser-client",children:[]},{value:"API Client",id:"api-client",children:[]}]}],p={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A login session is created when a user signs in. The session is stored as a\ncookie or as a token, depending on the interaction type."),(0,r.kt)("h2",{id:"login-session-configuration"},"Login Session Configuration"),(0,r.kt)("p",null,"A session is valid for the session lifespan you specify in the Ory Kratos\nconfig:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'},"session:\n  lifespan: 720h # 30 days\n")),(0,r.kt)("p",null,"Per default the session cookie has the ",(0,r.kt)("inlineCode",{parentName:"p"},"max-age")," parameter set to the specified\nsession lifespan. You may disable this behavior by setting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'},"session:\n  cookie:\n    persistent: false\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The cookie ",(0,r.kt)("inlineCode",{parentName:"p"},"max-age")," parameter behaves as follows:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"The browser interprets the cookie to be removed when the session ends if\n",(0,r.kt)("inlineCode",{parentName:"li"},"max-age")," is not set as part of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Set-Cookie")," header. A session ends if the\nbrowser is terminated due to a reboot or when shutting down the browser."),(0,r.kt)("li",{parentName:"ul"},"The browser keeps the cookie until ",(0,r.kt)("inlineCode",{parentName:"li"},"max-age")," is reached otherwise.")))),(0,r.kt)("p",null,"Once the lifespan is reached, the user needs to sign in again."),(0,r.kt)("h2",{id:"checking-for-login-sessions"},"Checking for Login Sessions"),(0,r.kt)("h3",{id:"browser-client"},"Browser Client"),(0,r.kt)("p",null,"The easiest way to check if a user is signed in is to call the\n",(0,r.kt)("inlineCode",{parentName:"p"},"http(s)://<kratos-public/sessions/whoami")," endpoint which will return either a\n401 Unauthorized or HTTP 200 OK with the session."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure to include the Ory Kratos Session Cookie when calling this endpoint.\nIf you are calling this endpoint from a proxy or middleware, make sure to\nforward the cookies sent to the proxy/middleware. If you are calling this\nendpoint as an AJAX call, make sure to include credentials and configure CORS\nproperly."))),(0,r.kt)("p",null,"A typical session payload will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "8f660ce3-69ec-4aeb-9fda-f9230dc3243f",\n  "active": true,\n  "expires_at": "2020-08-25T13:42:15.7411522Z",\n  "authenticated_at": "2020-08-24T13:42:15.7411522Z",\n  "issued_at": "2020-08-24T13:42:15.7412042Z",\n  "identity": {\n    "id": "bf32596a-f853-47c4-91e6-a3f41cf4949d",\n    "schema_id": "default",\n    "schema_url": "http://127.0.0.1:4433/schemas/default",\n    "traits": {\n      "email": "api@user.org",\n      "name": {\n        "last": "User",\n        "first": "API"\n      }\n    },\n    "verifiable_addresses": [\n      {\n        "id": "f877db6c-7dfb-45e3-bbeb-ac8349348128",\n        "value": "api@user.org",\n        "verified": false,\n        "via": "email",\n        "verified_at": null,\n        "expires_at": "2020-08-24T14:35:59.125873Z"\n      }\n    ],\n    "recovery_addresses": [\n      {\n        "id": "065a908c-82be-4110-bf67-9910f36242b7",\n        "value": "api@user.org",\n        "via": "email"\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h4",{id:"code-examples"},"Code Examples"),(0,r.kt)(o.Z,{defaultValue:"nodejs",values:[{label:"ExpressJS",value:"nodejs"}],mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"nodejs",mdxType:"TabItem"},(0,r.kt)("p",null,"{' '}"),(0,r.kt)(s.Z,{lang:"js",link:"https://github.com/ory/kratos-selfservice-ui-node/blob/master/src/middleware/simple.ts",src:"https://raw.githubusercontent.com/ory/kratos-selfservice-ui-node/master/src/middleware/simple.ts",mdxType:"CodeFromRemote"}))),(0,r.kt)("p",null,"If you have the session cookie available from another source you can also use\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Session-Token")," header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/', function (req, res) {\n  // Cookies that have not been signed\n  const cookie = req.cookies['ory_kratos_session']\n\n  // Make a request and include the cookie in X-Session-Cookie\n  fetch(\n    'https://playground.projects.oryapis.com/api/kratos/public/sessions/whoami',\n    {\n      headers: { 'X-Session-Cookie': cookie }\n    }\n  )\n    .then((res) => res.json())\n    .then((session) => console.log(session))\n})\n")),(0,r.kt)("h3",{id:"api-client"},"API Client"),(0,r.kt)("p",null,"API clients receive and use Ory Kratos Session Tokens which can be checked by\ncalling the ",(0,r.kt)("inlineCode",{parentName:"p"},"/sessions/whoami")," endpoint and including the Ory Kratos Session\nToken as a bearer token in the HTTP Authorization Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ sessionToken=oFZzgLpsacUpUy2cvQPtrGa2046WcXCR\n$ curl -s -X POST -H  "Accept: application/json" \\\n    -H "Authorization: Bearer $sessionToken" \\\n    # OR: \\\n    # -H "X-Session-Token: $sessionToken" \\\n    http://127.0.0.1:4433/sessions/whoami | jq\n\n{\n  "id": "8f660ce3-69ec-4aeb-9fda-f9230dc3243f",\n  "active": true,\n  "expires_at": "2020-08-25T13:42:15.7411522Z",\n  "authenticated_at": "2020-08-24T13:42:15.7411522Z",\n  "issued_at": "2020-08-24T13:42:15.7412042Z",\n  "identity": {\n    "id": "bf32596a-f853-47c4-91e6-a3f41cf4949d",\n    "schema_id": "default",\n    "schema_url": "http://127.0.0.1:4433/schemas/default",\n    "traits": {\n      "email": "api@user.org",\n      "name": {\n        "last": "User",\n        "first": "API"\n      }\n    },\n    "verifiable_addresses": [\n      {\n        "id": "f877db6c-7dfb-45e3-bbeb-ac8349348128",\n        "value": "api@user.org",\n        "verified": false,\n        "via": "email",\n        "verified_at": null,\n        "expires_at": "2020-08-24T14:35:59.125873Z"\n      }\n    ],\n    "recovery_addresses": [\n      {\n        "id": "065a908c-82be-4110-bf67-9910f36242b7",\n        "value": "api@user.org",\n        "via": "email"\n      }\n    ]\n  }\n}\n')))}f.isMDXComponent=!0},83300:function(e,n){"use strict";var t=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("unable to locate global object")}();e.exports=n=t.fetch,t.fetch&&(n.default=t.fetch.bind(t)),n.Headers=t.Headers,n.Request=t.Request,n.Response=t.Response}}]);