(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),c=(n(0),n(122)),o=n(125),i={id:"get-started",title:"Get Started"},s={unversionedId:"get-started",id:"get-started",isDocsHomePage:!1,title:"Get Started",description:"Ory Open Source documentation has moved in the navigation on the left. Ory (the",source:"@site/docs/get-started.mdx",sourceDirName:".",slug:"/get-started",permalink:"/docs/get-started",editUrl:"https://github.com/ory/docs/edit/master/docs/docs/get-started.mdx",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1621432379,formattedLastUpdatedAt:"5/19/2021",frontMatter:{id:"get-started",title:"Get Started"},sidebar:"docs",previous:{title:"Welcome to Ory",permalink:"/docs/"},next:{title:"Ory Open Source",permalink:"/docs/open-source"}},l=[{value:"Create Project",id:"create-project",children:[]},{value:"Create Personal Access Token",id:"create-personal-access-token",children:[]},{value:"Install the Ory CLI",id:"install-the-ory-cli",children:[{value:"Install on macOS",id:"install-on-macos",children:[]},{value:"Install on Linux",id:"install-on-linux",children:[]},{value:"Install on Windows",id:"install-on-windows",children:[]}]},{value:"Integration",id:"integration",children:[]}],b={toc:l};function d(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Ory Open Source documentation has moved in the navigation on the left. Ory (the\nSaaS product) is currently only available to Ory Insiders and\n",Object(c.b)("a",{parentName:"p",href:"/docs/early-access"},"haslimitations"),"."))),Object(c.b)("p",null,"To get started, head over to ",Object(c.b)("a",{parentName:"p",href:"https://console.ory.sh"},"console.ory.sh")," and sign\nup for an account."),Object(c.b)("p",null,Object(c.b)("img",{alt:"Sign up for Ory",src:n(204).default})),Object(c.b)("h2",{id:"create-project"},"Create Project"),Object(c.b)("p",null,"Once your account is set up, you will be greeted with your projects list."),Object(c.b)("p",null,Object(c.b)("img",{alt:"Empty Ory projects list",src:n(205).default})),Object(c.b)("p",null,"Next, ",Object(c.b)("a",{parentName:"p",href:"https://console.ory.sh/projects/create"},"create a project"),'. You will be\nprompted for an invite code. If you do not have an invite code but would like to\nbecome an Ory Insider, please click the "Contact Us" button. Once Ory is GA,\nthis step will no longer be needed.'),Object(c.b)("p",null,Object(c.b)("img",{alt:"Ory project creation requires invite code",src:n(206).default})),Object(c.b)("p",null,"Once entered, you will be greeted with the project creation screen."),Object(c.b)("p",null,Object(c.b)("img",{alt:"Ory project creation screen",src:n(207).default})),Object(c.b)("p",null,"Enter a project name and leave the application URL empty for now."),Object(c.b)("p",null,Object(c.b)("img",{alt:"Ory project creation screen",src:n(208).default})),Object(c.b)("p",null,"The Identity Model is a JSON Schema which describes your identity's (e.g. your\ncustomers / users / ...) fields. In Ory, every identity can have their own\nmodel, allowing you to separate between different customer types, user types\n(e.g. employees and customers)."),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/concepts/identity"},"Learn more about the Identity Model"),' and the available\nprofiles! For the quickstart, we will use the "Demo Profile" model.'),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},'The "Demo Profile" is a preset for technical demonstrations. Do not use it in\nreal applications as we will eventually change or delete this profile.'))),Object(c.b)("p",null,Object(c.b)("img",{alt:"Choose identity model for Ory project",src:n(209).default})),Object(c.b)("p",null,"For demo applications, we recommend enabling sign in after registration."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Enable sign in after registration disables account enumeration defeneses!"))),Object(c.b)("p",null,Object(c.b)("img",{alt:"Enable &quot;session after registration&quot; for Ory project",src:n(210).default})),Object(c.b)("p",null,'Next, hit "create" and fill out the details on the check out page. Your project\nshould come alive shortly after!'),Object(c.b)("p",null,Object(c.b)("img",{alt:"Created Ory project in the project list",src:n(211).default})),Object(c.b)("h2",{id:"create-personal-access-token"},"Create Personal Access Token"),Object(c.b)("p",null,"Personal Access Tokens are bound to a project. They are needed to access\nadministrative APIs (e.g. deleting an identity, using the Ory CLI, ...)."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Personal Access Tokens are an interim security mechanism. In the future, more\nsecure mechanisms such as JWT Assertions and mTLS will be supported."))),Object(c.b)("p",null,'Head over to the "Personal Access Token" page'),Object(c.b)("p",null,Object(c.b)("img",{alt:"Personal Access Token list",src:n(212).default})),Object(c.b)("p",null,"and click on the plus symbol to create a new token."),Object(c.b)("p",null,Object(c.b)("img",{alt:"CreatePersonal Access Token",src:n(213).default})),Object(c.b)("p",null,"Once created, a dialog will appear on the bottom left containing your personal\naccess token. Copy this into a password manager or another safe place. The token\nwill never be displayed again! If you forget it, you will need to create a new\ntoken."),Object(c.b)("p",null,Object(c.b)("img",{alt:"CreatePersonal Access Token",src:n(214).default})),Object(c.b)("h2",{id:"install-the-ory-cli"},"Install the Ory CLI"),Object(c.b)("p",null,"The Ory CLI (Command-Line-Interface) makes integrating and interfacing with Ory\neasy! For a more in-depth look at the CLI head over to\n",Object(c.b)("a",{parentName:"p",href:"/docs/guides/ory-cli-install-use"},"install and use the Ory CLI"),"!"),Object(c.b)("h3",{id:"install-on-macos"},"Install on macOS"),Object(c.b)("p",null,"You can install Ory CLI using ",Object(c.b)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew")," on macOS:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"$ brew tap ory/ory\n$ brew install ory/ory/ory\n$ ory help\n")),Object(c.b)("h3",{id:"install-on-linux"},"Install on Linux"),Object(c.b)("p",null,"On linux, you can use ",Object(c.b)("inlineCode",{parentName:"p"},"bash <(curl ...)")," to fetch the latest stable binary\nusing:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"$ bash <(curl https://raw.githubusercontent.com/ory/cli/master/install.sh) -b .\n$ ./ory help\n")),Object(c.b)("p",null,"You may want to move the Ory CLI to your ",Object(c.b)("inlineCode",{parentName:"p"},"$PATH"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"$ sudo mv ./ory /usr/local/bin/\n$ ory help\n")),Object(c.b)("h3",{id:"install-on-windows"},"Install on Windows"),Object(c.b)("p",null,"You can install Ory CLI using ",Object(c.b)("a",{parentName:"p",href:"https://scoop.sh"},"scoop")," on Windows:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"> scoop bucket add ory-cli https://github.com/ory/scoop-ory.git\n> scoop install ory\n> ory help\n")),Object(c.b)("h2",{id:"integration"},"Integration"),Object(c.b)("p",null,"Now it's time to choose your integration!"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,Object(c.b)("img",{alt:"Integrate Ory with NodeJS",width:100,src:Object(o.a)("images/get-started/nodejs.png")})),Object(c.b)("th",null))),Object(c.b)("tbody",null,Object(c.b)("td",null,Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/guides/integrate-nodejs"},"Integrate with ExpressJS"))),Object(c.b)("td",null,Object(c.b)("p",null,"More integrations soon!")))))}d.isMDXComponent=!0},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||c;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},125:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var a=n(16),r=n(129);function c(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var c=void 0===a?{}:a,o=c.forcePrependBaseUrl,i=void 0!==o&&o,s=c.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(i)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+b:b}(c,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},129:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},204:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/signup-27b3850da518cbcb42c7357e72479a41.png"},205:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/project-list-empty-a868be10df2e3901998e49b4a2791d0e.png"},206:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/create-project-invite-code-6b22b6f0926325949e02d08c97acde14.png"},207:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/project-create-09c0a743273a14e983f85bc2765d4e58.png"},208:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/project-create-details-550fec8f9419fe4206f010e901eb8d70.png"},209:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/project-create-identity-model-8a5ccbe8d839c4214f8c520ffc4af550.png"},210:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/project-create-session-hook-0b25bc4fd806c4013340d58a1ee1a868.png"},211:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/project-created-ff77270a853b75036c9a56cd5f6014c8.png"},212:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pat-list-3f4c6e66f4a5b57cd16a2a53085f327c.png"},213:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pat-create-38c92096176d85ba95cf40e1dc82e358.png"},214:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pat-ready-44f96995109b29c34f57644961e18cb2.png"}}]);