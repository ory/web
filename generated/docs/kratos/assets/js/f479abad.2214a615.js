(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[4852],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},44996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var a=n(52263),r=n(13919);function i(){var e=(0,a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,s=void 0!==o&&o,l=i.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(s)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+d:d}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},20905:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=n(44996),s={id:"quickstart",title:"Quickstart"},l={unversionedId:"quickstart",id:"version-v0.2/quickstart",isDocsHomePage:!1,title:"Quickstart",description:"ORY Kratos has several moving parts and getting everything right from the",source:"@site/versioned_docs/version-v0.2/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/kratos/docs/v0.2/quickstart",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.2/quickstart.mdx",version:"v0.2",lastUpdatedBy:"Bengt Hagemeister",lastUpdatedAt:1617434174,formattedLastUpdatedAt:"4/3/2021",frontMatter:{id:"quickstart",title:"Quickstart"},sidebar:"version-v0.2/docs",previous:{title:"Introduction",permalink:"/kratos/docs/v0.2/"},next:{title:"Installation",permalink:"/kratos/docs/v0.2/install"}},c=[{value:"Use case: You want login and registration for your Application",id:"use-case-you-want-login-and-registration-for-your-application",children:[]},{value:"Setup",id:"setup",children:[{value:"Clone ORY Kratos and run it in Docker",id:"clone-ory-kratos-and-run-it-in-docker",children:[]},{value:"Network Architecture",id:"network-architecture",children:[]}]},{value:"Perform registration, logout, login",id:"perform-registration-logout-login",children:[{value:"Understanding how Login and Registration works",id:"understanding-how-login-and-registration-works",children:[]},{value:"Email Verification",id:"email-verification",children:[]}]},{value:"Cleaning up Docker",id:"cleaning-up-docker",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ORY Kratos has several moving parts and getting everything right from the\nbeginning can be challenging. This getting started guide will help you install\nORY Kratos and some additional dependencies so that you can see how ORY Kratos\nworks."),(0,i.kt)("p",null,"Please be aware that this guide is not a replacement for studying the docs. You\nmust understand core concepts and APIs to use ORY Kratos productively. This is\nmerely a guide to get you set up with some examples."),(0,i.kt)("h2",{id:"use-case-you-want-login-and-registration-for-your-application"},"Use case: You want login and registration for your Application"),(0,i.kt)("p",null,"This section gives you some context on what we want to achieve and what tools we\nneed for that. You will also learn about the network set up we picked for this\nguide."),(0,i.kt)("p",null,"This quickstart guide operates on the assumption that we are writing a NodeJS\napp called ",(0,i.kt)("strong",{parentName:"p"},"SecureApp"),". This app is using nothing fancy - some ExpressJS and a\nbit of HTML Templating using Handlebars. We do want to use TypeScript but only\nbecause it's more readable - not because we're doing anything out of the\nordinary!"),(0,i.kt)("p",null,"You could pick any technology here, of course. This works with Swift, ReactJS,\nor Angular (client side) as well as with PHP, Ruby, Python, Java (server side) -\nyou name it! We picked NodeJS + TypeScript because we believe it is the easiest\nto understand, and because JavaScript and NodeJS are universally understood and\neasy to install."),(0,i.kt)("p",null,"We don't really know what SecureApp should do one day. But we do know that it\nwill have some type of dashboard and that it needs users, therefore we need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Login"),(0,i.kt)("li",{parentName:"ul"},"Logout"),(0,i.kt)("li",{parentName:"ul"},"Registration"),(0,i.kt)("li",{parentName:"ul"},'Profile management ("update first name", "update avatar ...")'),(0,i.kt)("li",{parentName:"ul"},'Credentials Management ("add a new recovery email", "change password", "...")'),(0,i.kt)("li",{parentName:"ul"},'Account Recovery ("password reset")'),(0,i.kt)("li",{parentName:"ul"},"Two Factor Authentication with Google Authenticator"),(0,i.kt)("li",{parentName:"ul"},'"Sign in with Google" and "Sign in with GitHub"')),(0,i.kt)("p",null,"and of course:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'A dashboard that shows "Hello {{ firstName }} {{ lastName }}, your birthday is\non {{ birthday }}!". It is only visible when the user is signed in!')),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"As you might already know, ORY Kratos is API-only. It does not have a UI or HTML\nTemplating Engine. We will implement all the user-facing UIs (dashboard, login,\nregistration, ...) in our NodeJS SecureApp!"),(0,i.kt)("p",null,"To ensure that no one can access the dashboard without prior authentication\n(login), we can use a small piece of code (here ExpressJS) to do that:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Import the ORY Kratos SDK. SDKs are available for all popular programming\n// languages!\n//\n// We will add examples for other programming languages here soon!\nimport { KratosPublicSDK } from '@oryd/kratos-client';\n\n// You can use protect as a middleware for expressJS:\n//\n//   import express from 'express'\n//   const app = express()\n//   app.get(\"/dashboard\", needsLogin, dashboard)\n//\nconst needsLogin = (req, res, next) => {\n  new KratosPublicSDK('https://public.ory-kratos')\n    .whoami(req)\n    .then(({ body }) => {\n      req.user = { session: body };\n      next();\n    })\n    .catch(() => {\n      res.redirect('/login');\n    });\n};\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"ORY Kratos is not just an API, it uses cookies, HTTP redirects, Anti-CSRF Tokens\nand more so you don't have to!"))),(0,i.kt)("p",null,"Because our SecureApp and ORY Kratos need to share cookies, in order for\nAnti-CSRF Tokens and Login Session to work, we will set up path with forwards\nrequests to ORY Krato's Public API. If a HTTP Request to\n",(0,i.kt)("inlineCode",{parentName:"p"},"https://my-secureap/.ory/kratos/public/self-service/browser/flows/login")," is\nmade, we forward (like a proxy) the request to\n",(0,i.kt)("inlineCode",{parentName:"p"},"https://public.ory-kratos/self-service/browser/flows/login")," and pipe the\nresponse back to the initial HTTP Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import express from 'express';\nimport request from 'request';\nconst app = express();\n\nconst pathPrefix = '/.ory/kratos/public';\napp.use(pathPrefix + '/', (req, res) => {\n  const url = 'https://public.ory-kratos' + req.url.replace(pathPrefix, '');\n\n  // Uses the request library to forward the request to ORY Kratos\n  req.pipe(request(url, { followRedirect: false })).pipe(res);\n});\n\n// ...\n// app.get(\"/dashboard\", needsLogin, dashboard)\n// ...\n")),(0,i.kt)("p",null,"ORY Kratos does not ship with an administrative user interface. You must\nimplement that yourself or choose the ORY Cloud offering (to be announced). In\nthis quickstart, we will use ORY Kratos CLI (Command Line Interface) to interact\nwith ORY Kratos' Administrative APIs."),(0,i.kt)("p",null,"The quickstart also comes with ",(0,i.kt)("a",{parentName:"p",href:"https://mailslurper.com"},"MailSlurper"),", a mock\nSMTP server the demo uses to show how e.g. email verification works."),(0,i.kt)("h3",{id:"clone-ory-kratos-and-run-it-in-docker"},"Clone ORY Kratos and run it in Docker"),(0,i.kt)("p",null,"To get this example working, you will need Git and\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker, and Docker Compose")," installed on\nyour system. No other dependencies are required. Before you start, make sure\nthat Docker has enough disk space."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This tutorial uses Docker-Compose volumes which have reported to run out of disk\nspace. Check the remaining disk space using ",(0,i.kt)("inlineCode",{parentName:"p"},"docker system df"),". If the volumes\nare above the 85% threshold,\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/pruning/"},"prune old Docker objects")," before you\nstart!"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you encounter build errors (e.g. network timeout), make sure that the network\nis running correctly and run ",(0,i.kt)("inlineCode",{parentName:"p"},"macke docker")," again. If the problem persists, feel\nfree to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/new/choose"},"open an issue"),"."))),(0,i.kt)("p",null,"Let's clone ORY Kratos and run ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"git clone https://github.com/ory/kratos.git\n# or if you have git+ssh set up:\n#  git clone git@github.com:ory/kratos.git\ncd kratos\ngit checkout v0.2.1-alpha.1\nmake quickstart\n\n# or if you don't have make installed:\ndocker-compose -f quickstart.yml -f quickstart-standalone.yml up --build --force-recreate\n")),(0,i.kt)("p",null,"This might take a minute or two. Once the output slows down and logs indicate a\nhealthy system you're ready to roll! A healthy system will show something along\nthe lines of (the order of messages might be reversed):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'kratos_1                      | time="2020-01-20T14:52:13Z" level=info msg="Starting the admin httpd on: 0.0.0.0:4434"\nkratos_1                      | time="2020-01-20T14:52:13Z" level=info msg="Starting the public httpd on: 0.0.0.0:4433"\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There are two important factors to get a fully functional system:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"You need to make sure that ports ",(0,i.kt)("inlineCode",{parentName:"li"},"4455"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"4433"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"4434"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"4436")," >\n",(0,i.kt)("a",{parentName:"li",href:"https://serverfault.com/questions/309052/check-if-port-is-open-or-closed-on-a-linux-server"},"are free"),"."),(0,i.kt)("li",{parentName:"ul"},"Make sure to always use ",(0,i.kt)("inlineCode",{parentName:"li"},"127.0.0.1")," as the hostname, never use ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost"),"!\nThis is important because browsers treat these two as separate domains and\nwill therefore have issues with setting and using the right cookies.")))),(0,i.kt)("p",null,"You might notice that no database is being used in this example. ORY Kratos\nsupports SQLite, PostgreSQL, MySQL, and CockroachDB as database backends. For\nthe quickstart, we're mounting a persistent volume to store the SQLite database\nin. Future guides will explain how to set up a production system!"),(0,i.kt)("h3",{id:"network-architecture"},"Network Architecture"),(0,i.kt)("p",null,"This demo makes use of several services / Docker Images:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos"},"ORY Kratos")),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"SecureApp")," - an\n",(0,i.kt)("a",{parentName:"li",href:"http://github.com/ory/kratos-selfservice-ui-node"},"example application written in NodeJS"),"\nthat implements the login, registration, logout, ..., and dashboard screen."),(0,i.kt)("li",{parentName:"ol"},"An SMTP server with which ORY Kratos can send E-Mails with. We will use\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mailhog/MailHog"},"MailHog"),", a minimalistic SMTP throaway\nserver with an easy UI.")),(0,i.kt)("p",null,"To better understand how everything is wired, let's take a look at the network\nconfiguration. This assumes that you have at least some understanding of how\nDocker (Compose) Networks work:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcblxuc3ViZ3JhcGggaG5bSG9zdCBOZXR3b3JrXVxuICAgIEJbQnJvd3Nlcl1cbiAgICBCLS0-fENhbiBhY2Nlc3MgVVJMcyB2aWEgMTI3LjAuMC4xOjQ0NTV8T0tQSE5cbiAgICBCLS0-fENhbiBhY2Nlc3MgVUkgdmlhIDEyNy4wLjAuMTo0NDM2fFNNVFBVSVxuICAgIE9LUEhOKFtTZWN1cmVBcHAgZXhwb3NlZCBhdCA6NDQ1NV0pXG4gICAgU01UUFVJKFtNYWlsU2x1cnBlciBVSSBleHBvc2VkIGF0IDo0NDM2XSlcbmVuZFxuXG5zdWJncmFwaCBkbltcIkludGVybmFsIERvY2tlciBOZXR3b3JrIChpbnRyYW5ldClcIl1cbiAgICBPS1BITi0uLT5TQVxuICAgIFNNVFBVSS0uLT5TTVRQXG4gICAgU0EtLT58UHJveGllcyBVUkxzIC8ub3J5L2tyYXRvcy9wdWJsaWMvKiB0b3xPS1xuICAgIFNBLS0-fFRhbGtzIHRvIGFuZCB2YWxpZGF0ZXMgbG9naW4gc2Vzc2lvbnMgdXNpbmd8T0tcbiAgICBPSy0tPnxTZW5kcyBtYWlsIHZpYXxTTVRQXG5cbiAgICBPS1tPUlkgS3JhdG9zXVxuICAgIFNBW1wiU2VjdXJlQXBwIChPUlkgS3JhdG9zIFNlbGZTZXJ2aWNlIFVJIE5vZGUgRXhhbXBsZSlcIl1cbiAgICBTTVRQW1wiU01UUCBTZXJ2ZXIgKE1haWxTbHVycGVyKVwiXVxuZW5kXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoibmV1dHJhbCIsImZsb3djaGFydCI6eyJyYW5rU3BhY2luZyI6NjUsIm5vZGVTcGFjaW5nIjozMCwiY3VydmUiOiJiYXNpcyJ9fSwidXBkYXRlRWRpdG9yIjpmYWxzZX0"},(0,i.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcblxuc3ViZ3JhcGggaG5bSG9zdCBOZXR3b3JrXVxuICAgIEJbQnJvd3Nlcl1cbiAgICBCLS0-fENhbiBhY2Nlc3MgVVJMcyB2aWEgMTI3LjAuMC4xOjQ0NTV8T0tQSE5cbiAgICBCLS0-fENhbiBhY2Nlc3MgVUkgdmlhIDEyNy4wLjAuMTo0NDM2fFNNVFBVSVxuICAgIE9LUEhOKFtTZWN1cmVBcHAgZXhwb3NlZCBhdCA6NDQ1NV0pXG4gICAgU01UUFVJKFtNYWlsU2x1cnBlciBVSSBleHBvc2VkIGF0IDo0NDM2XSlcbmVuZFxuXG5zdWJncmFwaCBkbltcIkludGVybmFsIERvY2tlciBOZXR3b3JrIChpbnRyYW5ldClcIl1cbiAgICBPS1BITi0uLT5TQVxuICAgIFNNVFBVSS0uLT5TTVRQXG4gICAgU0EtLT58UHJveGllcyBVUkxzIC8ub3J5L2tyYXRvcy9wdWJsaWMvKiB0b3xPS1xuICAgIFNBLS0-fFRhbGtzIHRvIGFuZCB2YWxpZGF0ZXMgbG9naW4gc2Vzc2lvbnMgdXNpbmd8T0tcbiAgICBPSy0tPnxTZW5kcyBtYWlsIHZpYXxTTVRQXG5cbiAgICBPS1tPUlkgS3JhdG9zXVxuICAgIFNBW1wiU2VjdXJlQXBwIChPUlkgS3JhdG9zIFNlbGZTZXJ2aWNlIFVJIE5vZGUgRXhhbXBsZSlcIl1cbiAgICBTTVRQW1wiU01UUCBTZXJ2ZXIgKE1haWxTbHVycGVyKVwiXVxuZW5kXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoibmV1dHJhbCIsImZsb3djaGFydCI6eyJyYW5rU3BhY2luZyI6NjUsIm5vZGVTcGFjaW5nIjozMCwiY3VydmUiOiJiYXNpcyJ9fSwidXBkYXRlRWRpdG9yIjpmYWxzZX0",alt:"User Login and Registration Network Topology"}))),(0,i.kt)("p",null,"As already explained, we're proxying requests to ORY Kratos' Public API. We are\ndoing this because that way all requests are going to and coming from the same\nhostname. This avoids common cross-domain issues with cookies."),(0,i.kt)("h2",{id:"perform-registration-logout-login"},"Perform registration, logout, login"),(0,i.kt)("p",null,"Enough theory, it's time to get this thing going! Let's start by trying to open\nthe dashboard - ",(0,i.kt)("strong",{parentName:"p"},"go to\n",(0,i.kt)("a",{parentName:"strong",href:"http://127.0.0.1:4455/dashboard"},"127.0.0.1:4455/dashboard")),". You will probably\nnotice that you're ending up at the login endpoint:"),(0,i.kt)("img",{alt:"Login screen of your secured app",src:(0,o.Z)("img/docs/secureapp-login.png")}),(0,i.kt)("p",null,"Looking at the network stack, you can see two redirects happening:"),(0,i.kt)("img",{alt:"Network trace of your secured app",src:(0,o.Z)("img/docs/secureapp-login-ntrace.png")}),(0,i.kt)("p",null,"The first redirect from ",(0,i.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4445/dashboard")," to\n",(0,i.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/login")," is\ninitiated because the browser does not have a valid authentication (login)\nsession yet. The redirect points to one of ORY Krato's APIs used for logging in\nbrowser-based applications. ORY Kratos does some security checks and prepares\nform data and redirects the browser to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4445/auth/login"),",\nappending a ",(0,i.kt)("inlineCode",{parentName:"p"},"?request=...")," query parameter. The endpoint at ",(0,i.kt)("inlineCode",{parentName:"p"},"/auth/login")," (which\nbelongs to our SecureApp) then fetches data important for rendering the forms\nfrom ORY Krato's Admin API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ curl http://127.0.0.1:4434/self-service/browser/flows/requests/login?request=<request-id>\n{\n    "id": "27aa98bc-a074-418f-96fa-8b8146050209",\n    "expires_at": "2020-01-20T21:10:12.7365393Z",\n    "issued_at": "2020-01-20T21:00:12.7365532Z",\n    "request_url": "http://127.0.0.1:4455/self-service/browser/flows/login",\n    "methods": {\n        "password": {\n            "method": "password",\n            "config": {\n                "action": "http://127.0.0.1:4455/.ory/kratos/public/auth/browser/methods/password/login?request=27aa98bc-a074-418f-96fa-8b8146050209",\n                "method": "POST",\n                "fields": [\n                    {\n                        "name": "csrf_token",\n                        "type": "hidden",\n                        "required": true,\n                        "value": "Ii8iIEdnn12vVQ2vyz2YaHjmXMUK5eSQgw9pgENGxPjXi1PHC9gOG51x61o2GT9LGvC81ddvmNXYeLvlPxA04g=="\n                    },\n                    {\n                        "name": "identifier",\n                        "type": "text",\n                        "required": true\n                    },\n                    {\n                        "name": "password",\n                        "type": "password",\n                        "required": true\n                    }\n                ]\n            }\n        }\n    }\n}\n')),(0,i.kt)("p",null,"This data is then rendered as an HTML form. This flow also works with Single\nPage Apps (SPA) and Frameworks like Angular or ReactJS. For more details about\nthe specific flows (login, registration, logout, ...), head over to the\n",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/v0.2/concepts/index"},"concept")," chapter."),(0,i.kt)("p",null,'Let\'s move on to the next flow - registration! Click on "Create an account",\nwhich initiates a flow similar to the one we just used:'),(0,i.kt)("img",{alt:"Registration screen of your secured app",src:(0,o.Z)("img/docs/secureapp-registration.png")}),(0,i.kt)("p",null,"The network trace looks familiar by now:"),(0,i.kt)("img",{alt:"Registration with network trace screen of your secured app",src:(0,o.Z)("img/docs/secureapp-registration-ntrace.png")}),(0,i.kt)("p",null,"If we try to sign up using a password like ",(0,i.kt)("inlineCode",{parentName:"p"},"123456"),", ORY Krato's password policy\nwill complain:"),(0,i.kt)("img",{alt:"Registration with network trace screen of your secured app",src:(0,o.Z)("img/docs/secureapp-registration-pwpolicy.png")}),(0,i.kt)("p",null,"The error message is coming directly from ORY Krato's API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ curl http://127.0.0.1:4434/self-service/browser/flows/requests/registration?request=<request-id>\n{\n    "id": "79349cbd-c785-476a-8db8-d0d71c5b003c",\n    "expires_at": "2020-01-20T21:17:00.5077381Z",\n    "issued_at": "2020-01-20T21:07:00.5077527Z",\n    "request_url": "http://127.0.0.1:4455/self-service/browser/flows/registration",\n    "methods": {\n        "password": {\n            "method": "password",\n            "config": {\n                "action": "http://127.0.0.1:4455/.ory/kratos/public/auth/browser/methods/password/registration?request=79349cbd-c785-476a-8db8-d0d71c5b003c",\n                "method": "POST",\n                "fields": [\n                    {\n                        "name": "csrf_token",\n                        "type": "hidden",\n                        "required": true,\n                        "value": "+ZQ8x5cVgdtt4xtPIRJXQPKMVU5c/S2Mj2MuudP32vsMME0g26oQnV/H/brcNvBjkJq1XoF3UcnUFPzcr6Eq4Q=="\n                    },\n                    {\n                        "name": "password",\n                        "type": "password",\n                        "required": true\n                    },\n                    {\n                        "name": "traits.email",\n                        "type": "text",\n                        "value": "hello@ory.sh"\n                    },\n                    {\n                        "name": "traits.full_name",\n                        "type": "text"\n                    }\n                ]\n            }\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Setting a password that doesn't violate these policies, we will be immediately\nredirected to the Dashboard:"),(0,i.kt)("img",{alt:"SecureApp Dashboard",src:(0,o.Z)("img/docs/secureapp-dashboard.png")}),(0,i.kt)("p",null,'By using "logout" you will be redirected to the log in screen again an will be\nable to use the credentials just set up to log in!'),(0,i.kt)("h3",{id:"understanding-how-login-and-registration-works"},"Understanding how Login and Registration works"),(0,i.kt)("p",null,"Head over to the ",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/v0.2/self-service/flows/index"},"Self-Service Flows Chapter")," for a\nin-depth explanation of how the individual flows work."),(0,i.kt)("h3",{id:"email-verification"},"Email Verification"),(0,i.kt)("p",null,"As you've signed up, an email was sent to the email address you used. Because\nthe quickstart uses a fake SMTP server, the email did not arrive in your inbox.\nYou can retrieve the email however by opening the MailSlurper UI at\n",(0,i.kt)("a",{parentName:"p",href:"http://127.0.0.1:4436"},"127.0.0.1:4436"),"."),(0,i.kt)("p",null,"You should see something like this:"),(0,i.kt)("img",{alt:"User Email Verification",src:(0,o.Z)("img/docs/mailslurper-quickstart.png")}),(0,i.kt)("p",null,"If not, hard refresh the tab or click on the home icon in the menu bar."),(0,i.kt)("p",null,"Next, click the verification link. You will end up at the dashboard, with a\nverified E-Mail Address (check the ",(0,i.kt)("inlineCode",{parentName:"p"},"verified")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"verified_at")," field in the\nJSON Payload):"),(0,i.kt)("img",{alt:"SecureApp Dashboard",src:(0,o.Z)("img/docs/secureapp-verified-dashboard.png")}),(0,i.kt)("p",null,"To re-request the verification email, fill out the form at\n",(0,i.kt)("a",{parentName:"p",href:"http://127.0.0.1:4455/verify"},"127.0.0.1:4455/verify"),"."),(0,i.kt)("h4",{id:"configuration-used"},"Configuration Used"),(0,i.kt)("p",null,"You can find all configuration files for this quickstart guide in\n",(0,i.kt)("inlineCode",{parentName:"p"},"./contrib/quickstart")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"./quickstart.yml"),". To understand what each of those\nindividual configuration files are doing, you must consult the other chapters of\nthis documentation."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To get a minimal version of ORY Kratos running, you need to set configuration\nitems ",(0,i.kt)("inlineCode",{parentName:"p"},"identity.traits.default_schema_url")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dsn"),". You should also configure\n",(0,i.kt)("inlineCode",{parentName:"p"},"urls.*_ui")," because your users will end up at fallbacks otherwise."))),(0,i.kt)("p",null,"In the future, this guide will support more use cases such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use GitHub to login in and sign up")),(0,i.kt)("h2",{id:"cleaning-up-docker"},"Cleaning up Docker"),(0,i.kt)("p",null,"To clean everything up, you need to bring down the Docker Compose environment\nand remove all mounted volumes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"docker-compose -f quickstart.yml down -v\ndocker-compose -f quickstart.yml rm -f -s -v\n")))}u.isMDXComponent=!0}}]);