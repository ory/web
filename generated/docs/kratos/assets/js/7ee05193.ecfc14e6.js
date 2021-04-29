(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{249:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),o=(n(0),n(454)),i=n(456),s=n(455),c={id:"quickstart",title:"Quickstart"},l={unversionedId:"quickstart",id:"version-v0.4/quickstart",isDocsHomePage:!1,title:"Quickstart",description:"ORY Kratos has several moving parts and getting everything right from the",source:"@site/versioned_docs/version-v0.4/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/kratos/docs/v0.4/quickstart",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/quickstart.mdx",version:"v0.4",lastUpdatedBy:"Bengt Hagemeister",lastUpdatedAt:1617434174,formattedLastUpdatedAt:"4/3/2021",frontMatter:{id:"quickstart",title:"Quickstart"},sidebar:"version-v0.4/docs",previous:{title:"Introduction",permalink:"/kratos/docs/v0.4/"},next:{title:"Installation",permalink:"/kratos/docs/v0.4/install"}},d=[{value:"Use Case: Application Login and Registration",id:"use-case-application-login-and-registration",children:[]},{value:"Setup",id:"setup",children:[{value:"Clone ORY Kratos and Run it in Docker",id:"clone-ory-kratos-and-run-it-in-docker",children:[]},{value:"Network Architecture",id:"network-architecture",children:[]}]},{value:"Perform Registration, Login, and Logout",id:"perform-registration-login-and-logout",children:[{value:"Understanding How Login and Registration Works",id:"understanding-how-login-and-registration-works",children:[]},{value:"Email Verification",id:"email-verification",children:[]},{value:"Account Recovery",id:"account-recovery",children:[]}]},{value:"Cleaning Up Docker",id:"cleaning-up-docker",children:[]}],b={toc:d};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"ORY Kratos has several moving parts and getting everything right from the\nbeginning can be challenging. This getting started guide will help you install\nORY Kratos and some additional dependencies so that you can see how it works."),Object(o.b)("p",null,"Please be aware that this guide is not a replacement for studying the docs. You\nmust understand core concepts and APIs to use ORY Kratos productively. This is\nmerely a guide to get you set up with some examples."),Object(o.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/JhlIZ3aChXc",frameborder:"0",allowfullscreen:!0}),Object(o.b)("h2",{id:"use-case-application-login-and-registration"},"Use Case: Application Login and Registration"),Object(o.b)("p",null,"This section gives you some context on what we want to achieve and what tools we\nneed for that. You will also learn about the network set up we picked for this\nguide."),Object(o.b)("p",null,"This quickstart guide operates on the assumption that we are writing a NodeJS\napp called ",Object(o.b)("strong",{parentName:"p"},"SecureApp"),". This app is using nothing fancy - some ExpressJS and a\nbit of HTML Templating using Handlebars. We do want to use TypeScript, but only\nbecause it's more readable - not because we're doing anything out of the\nordinary!"),Object(o.b)("p",null,"You could pick any technology here, of course. This works with Swift, ReactJS,\nor Angular (client side) as well as with PHP, Ruby, Python, Java (server side) -\nyou name it! We picked NodeJS + TypeScript because we believe it is the easiest\nto understand, and because JavaScript and NodeJS are universally understood and\neasy to install."),Object(o.b)("p",null,"We know that SecureApp will need to have some type of dashboard and that it\nneeds users. Therefore, we need:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Login"),Object(o.b)("li",{parentName:"ul"},"Logout"),Object(o.b)("li",{parentName:"ul"},"Registration"),Object(o.b)("li",{parentName:"ul"},'Profile management ("update first name", "update avatar", etc.)'),Object(o.b)("li",{parentName:"ul"},'Credentials Management ("add a new recovery email", "change password", etc.)'),Object(o.b)("li",{parentName:"ul"},'Account Recovery ("password reset")'),Object(o.b)("li",{parentName:"ul"},"Two Factor Authentication with Google Authenticator"),Object(o.b)("li",{parentName:"ul"},'"Sign in with Google" and "Sign in with GitHub"')),Object(o.b)("p",null,"and of course:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'A dashboard that shows "Hello {{ firstName }} {{ lastName }}, your birthday is\non {{ birthday }}!" which is only visible when the user is signed in.')),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("p",null,'As you might already know, ORY Kratos is API-only; it does not have a UI or HTML\ntemplating engine. We will implement all the user-facing UIs like "dashboard",\n"login", and "registration" in our NodeJS SecureApp!'),Object(o.b)("p",null,"To ensure that no one can access the dashboard without prior authentication\n(login), we can use a small piece of code (here ExpressJS) to do that:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// Import the ORY Kratos SDK. SDKs are available for all popular programming\n// languages! We will add examples for other programming languages here soon.\nimport { AdminApi, PublicApi } from '@oryd/kratos-client'\n\nconst publicEndpoint = new PublicApi('https://public.ory-kratos')\nconst adminEndpoint = new AdminApi('https://admin.ory-kratos')\n\nconst needsLogin = (req, res, next) => {\n  new publicEndpoint.whoami(req)\n    .then(({ body }) => {\n      req.user = { session: body }\n      next()\n    })\n    .catch(() => {\n      res.redirect('/login')\n    })\n}\n\n// You can use `needsLogin` as a middleware for Express or any other web framework:\n//   import express from 'express'\n//   const app = express()\n//\n//   app.get(\"/dashboard\", needsLogin, dashboard)\n//\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"ORY Kratos is not just an API: it uses cookies, HTTP redirects, anti-CSRF tokens\nand more so you don't have to."))),Object(o.b)("p",null,"Because our SecureApp and ORY Kratos need to share cookies, in order for\nanti-CSRF tokens and login sessions to work, we will set up a path which\nforwards requests to ORY Kratos' Public API so that both SecureApp and ORY\nKratos have the same hostname."),Object(o.b)("p",null,"If an HTTP request is made to"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"https://my-secureapp/.ory/kratos/public/self-service/browser/flows/login\n")),Object(o.b)("p",null,"we forward the request (like a proxy) to"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"https://public.ory-kratos/self-service/browser/flows/login\n")),Object(o.b)("p",null,"and pipe the response back to the initial HTTP Request:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import express from 'express'\nimport request from 'request'\nconst app = express()\n\nconst pathPrefix = '/.ory/kratos/public'\napp.use(pathPrefix + '/', (req, res) => {\n  const url = 'https://public.ory-kratos' + req.url.replace(pathPrefix, '')\n\n  // Uses the `request` library to forward the request to ORY Kratos\n  req.pipe(request(url, { followRedirect: false })).pipe(res)\n})\n\n// ...\n// app.get(\"/dashboard\", needsLogin, dashboard)\n// ...\n")),Object(o.b)("p",null,"ORY Kratos does not ship with an administrative user interface. You must\nimplement that yourself or choose the ORY Cloud offering (to be announced). In\nthis quickstart we will use ORY Kratos' CLI to interact with ORY Kratos' APIs."),Object(o.b)("p",null,"The quickstart also comes with ",Object(o.b)("a",{parentName:"p",href:"https://mailslurper.com"},"MailSlurper"),", a mock\nSMTP server the demo uses to show how email verification works."),Object(o.b)("h3",{id:"clone-ory-kratos-and-run-it-in-docker"},"Clone ORY Kratos and Run it in Docker"),Object(o.b)("p",null,"To get this example working, you will need Git,\n",Object(o.b)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker"),", and\n",Object(o.b)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose")," installed on your\nsystem. No other dependencies are required. Before you start, make sure that\nDocker has enough disk space."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This tutorial uses Docker-Compose volumes which have reported to run out of disk\nspace. Check the remaining disk space using ",Object(o.b)("inlineCode",{parentName:"p"},"docker system df"),". If the volumes\nare above the 85% threshold,\n",Object(o.b)("a",{parentName:"p",href:"https://docs.docker.com/config/pruning/"},"prune old Docker objects")," before you\nstart!"))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If you encounter build errors (e.g. network timeout), make sure that the network\nis running correctly and run ",Object(o.b)("inlineCode",{parentName:"p"},"make docker")," again. If the problem persists, feel\nfree to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/new/choose"},"open an issue"),"."))),Object(o.b)("p",null,"Let's clone ORY Kratos and run ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"git clone https://github.com/ory/kratos.git\ncd kratos\ngit checkout v0.4.6-alpha.1\n\ndocker-compose -f quickstart.yml -f quickstart-standalone.yml up --build --force-recreate\n")),Object(o.b)("p",null,"This might take a minute or two. Once the output slows down and logs indicate a\nhealthy system you're ready to roll! A healthy system will show something along\nthe lines of (the order of messages might be reversed):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'kratos_1 | time="2020-01-20T14:52:13Z" level=info msg="Starting the admin httpd on: 0.0.0.0:4434"\nkratos_1 | time="2020-01-20T14:52:13Z" level=info msg="Starting the public httpd on: 0.0.0.0:4433"\n')),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"There are two important factors to get a fully functional system:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"You need to make sure that ports ",Object(o.b)("inlineCode",{parentName:"li"},"4455"),", ",Object(o.b)("inlineCode",{parentName:"li"},"4433"),", ",Object(o.b)("inlineCode",{parentName:"li"},"4434"),", and ",Object(o.b)("inlineCode",{parentName:"li"},"4436"),"\xa0",Object(o.b)("a",{parentName:"li",href:"https://serverfault.com/questions/309052/check-if-port-is-open-or-closed-on-a-linux-server"},"are free"),"."),Object(o.b)("li",{parentName:"ul"},"Make sure to always use ",Object(o.b)("inlineCode",{parentName:"li"},"127.0.0.1")," as the hostname; never use ",Object(o.b)("inlineCode",{parentName:"li"},"localhost"),"!\nThis is important because browsers treat these two as separate domains and\nwill therefore have issues with setting and using cookies correctly.")))),Object(o.b)("p",null,"You might notice that no database is being used in this example. ORY Kratos\nsupports SQLite, PostgreSQL, MySQL, and CockroachDB as database backends. For\nthe quickstart, we're mounting a persistent volume to store the SQLite database\nin."),Object(o.b)("p",null,"Future guides will explain how to set up a production system."),Object(o.b)("h3",{id:"network-architecture"},"Network Architecture"),Object(o.b)("p",null,"This demo makes use of several services:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://github.com/ory/kratos"},"ORY Kratos"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Public ("Browser") API (port 4433)'),Object(o.b)("li",{parentName:"ul"},"Admin API (port 4434) - This is only made public so we can test via the CLI.")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"http://github.com/ory/kratos-selfservice-ui-node"},"SecureApp"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Public (port 4455) - an example application written in NodeJS that implements\nthe login, registration, logout, dashboard, and other UIs.")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://github.com/mailslurper"},"MailSlurper"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Public (port 4436) - a development SMTP server which ORY Kratos will use to\nsend emails.")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"ORY Kratos' Public (\"Browser\") and Admin APIs are exactly the same, except the\nPublic API will make use of extra browser-related security features. All\nrequests from a web browser should use ORY Kratos' Public API, while everything\nelse should use the Admin API."))),Object(o.b)("p",null,"To better understand the application architecture, let's take a look at the\nnetwork configuration. This assumes that you have at least some understanding of\nhow Docker networks work:"),Object(o.b)(s.a,{chart:'\ngraph TD\nsubgraph hn[Host Network]\n    B[Browser]\n    B--\x3e|Can access URLs via 127.0.0.1:4455|OKPHN\n    B--\x3e|Can access UI via 127.0.0.1:4436|SMTPUI\n    OKPHN([SecureApp exposed at :4455])\n    SMTPUI([MailSlurper UI exposed at :4436])\nend\nsubgraph dn["Internal Docker Network (intranet)"]\n    OKPHN-.->SA\n    SMTPUI-.->SMTP\n    SA--\x3e|Proxies URLs /.ory/kratos/public/* to|OK\n    SA--\x3e|Talks to and validates login sessions using|OK\n    OK--\x3e|Sends mail via|SMTP\n    OK[ORY Kratos]\n    SA["SecureApp (ORY Kratos SelfService UI Node Example)"]\n    SMTP["SMTP Server (MailSlurper)"]\nend\n',mdxType:"Mermaid"}),Object(o.b)("p",null,"In order to avoid common cross-domain issues with cookies, we're proxying\nrequests to ORY Kratos' Public API so that all requests come from the same\nhostname."),Object(o.b)("h2",{id:"perform-registration-login-and-logout"},"Perform Registration, Login, and Logout"),Object(o.b)("p",null,"Enough theory, it's time to get this thing going! Let's start by trying to open\nthe dashboard - ",Object(o.b)("strong",{parentName:"p"},"go to\n",Object(o.b)("a",{parentName:"strong",href:"http://127.0.0.1:4455/dashboard"},"127.0.0.1:4455/dashboard")),"."),Object(o.b)("p",null,"You should notice that you're ending up at the login endpoint instead of the\ndashboard:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Login screen of your secured app",src:Object(i.a)("img/docs/secureapp-login.png")})),Object(o.b)("p",null,"Looking at the network stack, you can see two redirects happening:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Network trace of your secured app",src:Object(i.a)("img/docs/secureapp-login-ntrace.png")})),Object(o.b)("p",null,"Here's a play-by-play of what happened:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"SecureApp used the ORY Kratos JavaScript language client to\n",Object(o.b)("a",{parentName:"li",href:"https://github.com/ory/kratos-selfservice-ui-node/blob/v0.4.6-alpha.1/src/index.ts#L111"},"guard the ",Object(o.b)("inlineCode",{parentName:"a"},"/dashboard")),"\nroute. The ORY Kratos client checked the cookies from the request and saw you\nwere not logged in."),Object(o.b)("li",{parentName:"ol"},"The route guard redirected you from ",Object(o.b)("inlineCode",{parentName:"li"},"/dashboard")," to ",Object(o.b)("inlineCode",{parentName:"li"},"/auth/login"),". ORY\nKratos' browser API requires a ",Object(o.b)("inlineCode",{parentName:"li"},"request-id")," in order to log you in. It looked\nfor this ID in the URL as a query parameter but\n",Object(o.b)("a",{parentName:"li",href:"https://github.com/ory/kratos-selfservice-ui-node/blob/2f097b519644d2663e277398213aaa1103b74cf9/src/routes/auth.ts#L26"},"couldn't find it"),",\nso it decided to generate one for you."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"/auth/login")," redirected you to\n",Object(o.b)("inlineCode",{parentName:"li"},"/.ory/kratos/public/self-service/browser/flows/login"),", which is one of ORY\nKratos' APIs used for logging in browser-based applications. This route is\njust forwarded from SecureApp to ORY Kratos."),Object(o.b)("li",{parentName:"ol"},"ORY Kratos performed some security checks, prepared form data, created a\n",Object(o.b)("inlineCode",{parentName:"li"},"csrf_token"),", and redirected the browser to\n",Object(o.b)("inlineCode",{parentName:"li"},"/auth/login?request=<request-id>"),"."),Object(o.b)("li",{parentName:"ol"},"SecureApp handled the ",Object(o.b)("inlineCode",{parentName:"li"},"/auth/login")," route, found the ",Object(o.b)("inlineCode",{parentName:"li"},"request-id")," in the URL\nquery parameter, and used it to make an HTTP request to\n",Object(o.b)("inlineCode",{parentName:"li"},"http://kratos:4434/self-service/browser/flows/requests/login?request=<request-id>"),".\nNotice the URI is ",Object(o.b)("inlineCode",{parentName:"li"},"kratos:4434")," because SecureApp is making a server-side\nHTTP request via Docker's private network to ORY Kratos' Admin API."),Object(o.b)("li",{parentName:"ol"},"ORY Kratos responded with data which SecureApp used to render the HTML login\nform.")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Your rendered login form should be a standard HTML ",Object(o.b)("inlineCode",{parentName:"p"},"<form>"),". AJAX requests will\nnot work!"))),Object(o.b)("p",null,"Because we exposed ORY Kratos' Admin API on port ",Object(o.b)("inlineCode",{parentName:"p"},"4434")," of our host, we can use\n",Object(o.b)("inlineCode",{parentName:"p"},"curl")," to see what ORY Kratos responds with. Try visiting\n",Object(o.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:4455/auth/login"),", copying the generated ",Object(o.b)("inlineCode",{parentName:"p"},"request-id"),", and\nmaking the request yourself:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ curl "http://127.0.0.1:4434/self-service/browser/flows/requests/login?request=<request-id>" | jq\n{\n  "id": "4392b0ef-647a-4cf8-8045-57917b98e406",\n  "expires_at": "2020-05-15T21:23:41.3220299Z",\n  "issued_at": "2020-05-15T21:13:41.3220454Z",\n  "request_url": "http://kratos:4433/self-service/browser/flows/login",\n  "methods": {\n    "oidc": {\n      "method": "oidc",\n      "config": {\n        "action": "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/registration/strategies/oidc/auth/4392b0ef-647a-4cf8-8045-57917b98e406",\n        "method": "POST",\n        "fields": [\n          {\n            "name": "csrf_token",\n            "type": "hidden",\n            "required": true,\n            "value": "L3SmxtBF71wd6QLOqIdHbhg9OTLRrxyXm1LVWRfPlUAdxwNKwpy9wPe/pKtJqnpqnAB8ZfZp5yJypVTk+7wRuA=="\n          }\n        ]\n      }\n    },\n    "password": {\n      "method": "password",\n      "config": {\n        "action": "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/login/strategies/password?request=4392b0ef-647a-4cf8-8045-57917b98e406",\n        "method": "POST",\n        "fields": [\n          {\n            "name": "identifier",\n            "type": "text",\n            "required": true,\n            "value": ""\n          },\n          {\n            "name": "password",\n            "type": "password",\n            "required": true\n          },\n          {\n            "name": "csrf_token",\n            "type": "hidden",\n            "required": true,\n            "value": "L3SmxtBF71wd6QLOqIdHbhg9OTLRrxyXm1LVWRfPlUAdxwNKwpy9wPe/pKtJqnpqnAB8ZfZp5yJypVTk+7wRuA=="\n          }\n        ]\n      }\n    }\n  },\n  "forced": false\n}\n')),Object(o.b)("p",null,"This flow also works with Single Page Apps (SPA) and frameworks like Angular or\nReactJS. For more details about the specific flows (login, registration, logout,\netc.), head over to the ",Object(o.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/concepts/index"},"concept")," chapter."),Object(o.b)("p",null,'Let\'s move on to the next flow - registration! Click on "Register new account",\nwhich initiates a flow similar to the one we just used:'),Object(o.b)("p",null,Object(o.b)("img",{alt:"Registration screen of your secured app",src:Object(i.a)("img/docs/secureapp-registration.png")})),Object(o.b)("p",null,"The network trace should look familiar by now:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Registration with network trace screen of your secured app",src:Object(i.a)("img/docs/secureapp-registration-ntrace.png")})),Object(o.b)("p",null,"If we try to sign up using a password like ",Object(o.b)("inlineCode",{parentName:"p"},"123456"),", Krato's password policy\nwill complain:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Registration with network trace screen of your secured app",src:Object(i.a)("img/docs/secureapp-registration-pwpolicy.png")})),Object(o.b)("p",null,"The error message is coming directly from ORY Kratos' Admin API:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ curl "http://127.0.0.1:4434/self-service/browser/flows/requests/registration?request=<request-id>" | jq\n{\n  "id": "53e4b68a-5f85-4e41-997f-d8d1f4113f0d",\n  "expires_at": "2020-05-15T21:48:38.5044374Z",\n  "issued_at": "2020-05-15T21:38:38.5044557Z",\n  "request_url": "http://kratos:4433/self-service/browser/flows/registration",\n  "methods": {\n    "oidc": {\n      "method": "oidc",\n      "config": {\n        "action": "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/registration/strategies/oidc/auth/53e4b68a-5f85-4e41-997f-d8d1f4113f0d",\n        "method": "POST",\n        "fields": [\n          {\n            "name": "csrf_token",\n            "type": "hidden",\n            "required": true,\n            "value": "tZUvp+2dSThQr0uklkfgWPRtPiYEyZQlBItc2RcIYdSHJoor/0QbpLr57cF3at1ccFB7cSMPb5DtfN1k+3vlLA=="\n          }\n        ]\n      }\n    },\n    "password": {\n      "method": "password",\n      "config": {\n        "action": "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/registration/strategies/password?request=53e4b68a-5f85-4e41-997f-d8d1f4113f0d",\n        "method": "POST",\n        "fields": [\n          {\n            "name": "csrf_token",\n            "type": "hidden",\n            "required": true,\n            "value": "M0/Koo7AEdU6O/FqfFP5uPxTCSTeiCvI1Wms37ZKsyIB/G8unBlDSdBtVw+dfsS8eG5Mc/lO0H08ni1iWjk32g=="\n          },\n          {\n            "name": "password",\n            "type": "password",\n            "required": true,\n            "errors": [\n              {\n                "message": "the password does not fulfill the password policy because: the password has been found in at least 23547453 data breaches and must no longer be used."\n              }\n            ]\n          },\n          {\n            "name": "traits.email",\n            "type": "text",\n            "required": false,\n            "value": "hello@ory.sh"\n          }\n        ]\n      }\n    }\n  }\n}\n')),Object(o.b)("p",null,"Setting a password that doesn't violate these policies, we will be immediately\nredirected to the dashboard:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"SecureApp Dashboard",src:Object(i.a)("img/docs/secureapp-dashboard.png")})),Object(o.b)("p",null,'By clicking the "logout" icon in the top right, you will be redirected to the\nlogin screen again where you will be able to use your credentials to log back in\nagain. Exciting!'),Object(o.b)("h3",{id:"understanding-how-login-and-registration-works"},"Understanding How Login and Registration Works"),Object(o.b)("p",null,"Head over to the ",Object(o.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/self-service"},"Self-Service Flows Chapter")," for\nan in-depth explanation of how each individual flow works."),Object(o.b)("h3",{id:"email-verification"},"Email Verification"),Object(o.b)("p",null,"As you've signed up, an email was sent to the email address you used. Because\nthe quickstart uses a fake SMTP server, the email did not arrive in your inbox.\nYou can retrieve the email however by opening the MailSlurper UI at\n",Object(o.b)("a",{parentName:"p",href:"http://127.0.0.1:4436"},"127.0.0.1:4436"),"."),Object(o.b)("p",null,"You should see something like this:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"User Email Verification",src:Object(i.a)("img/docs/mailslurper-quickstart.png")})),Object(o.b)("p",null,"If not, hard refresh the tab or click on the home icon in the menu bar."),Object(o.b)("p",null,"Next, click the verification link. You will end up at the dashboard, with a\nverified email address (check the ",Object(o.b)("inlineCode",{parentName:"p"},"verified")," and ",Object(o.b)("inlineCode",{parentName:"p"},"verified_at")," field in the JSON\nresponse):"),Object(o.b)("p",null,Object(o.b)("img",{alt:"SecureApp Dashboard",src:Object(i.a)("img/docs/secureapp-verified-dashboard.png")})),Object(o.b)("p",null,"To re-request the verification email, fill out the form at\n",Object(o.b)("a",{parentName:"p",href:"http://127.0.0.1:4455/verify"},"127.0.0.1:4455/verify"),"."),Object(o.b)("p",null,"To learn more about verification recovery, head over to the\n",Object(o.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/self-service/flows/verify-email-account-activation"},"Email and Phone Verification and Account Activation Documentation"),"."),Object(o.b)("h3",{id:"account-recovery"},"Account Recovery"),Object(o.b)("p",null,'The quickstart has account recovery enabled. To recover an account, log out and\nclick on "Recover account":'),Object(o.b)("p",null,Object(o.b)("img",{alt:"Click on 'recover account'",src:Object(i.a)("img/docs/quickstart-recover-i.png")})),Object(o.b)("p",null,"The next screen shows a HTML form where you enter your email address:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Enter your email address",src:Object(i.a)("img/docs/quickstart-recover-ii.png")})),Object(o.b)("p",null,'Hit "submit" and check the emails for the account recovery message:'),Object(o.b)("p",null,Object(o.b)("img",{alt:"Check your email for the password reset email",src:Object(i.a)("img/docs/quickstart-recover-iii.png")})),Object(o.b)("p",null,"Click the link, and change your password:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Change your password",src:Object(i.a)("img/docs/quickstart-recover-iv.png")})),Object(o.b)("p",null,"You are now able to sign in with the new password. To learn more about account\nrecovery, head over to the\n",Object(o.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/self-service/flows/account-recovery"},"Account Recovery Documentation"),"."),Object(o.b)("h4",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"You can find all configuration files used for this quickstart guide in\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/tree/v0.4.6-alpha.1/contrib/quickstart/kratos/email-password"},Object(o.b)("inlineCode",{parentName:"a"},"./contrib/quickstart/kratos")),"\n,\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/blob/v0.4.6-alpha.1/quickstart.yml"},Object(o.b)("inlineCode",{parentName:"a"},"./quickstart.yml")),",\nand\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/blob/v0.4.6-alpha.1/quickstart-standalone.yml"},Object(o.b)("inlineCode",{parentName:"a"},"./quickstart-standalone.yml")),".\nTo understand what each of those configuration files does, consult the other\nchapters of this documentation."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"To get a minimal version of ORY Kratos running, you need to set configuration\nvalues for\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/blob/v0.4.6-alpha.1/contrib/quickstart/kratos/email-password/kratos.yml#L67"},Object(o.b)("inlineCode",{parentName:"a"},"identity.default_schema_url")),"\nand\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/blob/v0.4.6-alpha.1/quickstart.yml#L42"},Object(o.b)("inlineCode",{parentName:"a"},"DSN")),".\nYou should also configure\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/blob/v0.4.6-alpha.1/contrib/quickstart/kratos/email-password/kratos.yml#L40"},Object(o.b)("inlineCode",{parentName:"a"},"selfservice.flows.*.ui_url")),"\nor else Kratos will use fallback URLs."))),Object(o.b)("p",null,"In the future, this guide will support more use cases such as:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"GitHub to login and registration")),Object(o.b)("h2",{id:"cleaning-up-docker"},"Cleaning Up Docker"),Object(o.b)("p",null,"To clean everything up, you need to bring down the Docker Compose environment\nand remove all mounted volumes."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"docker-compose -f quickstart.yml down -v\ndocker-compose -f quickstart.yml rm -fsv\n")))}p.isMDXComponent=!0},455:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(473),i=n.n(o),s=n(57),c=n.n(s),l=n(471),d=n.n(l);i.a.initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});t.a=function(e){var t,n=e.chart,o=Object(a.useState)(!1),s=o[0],l=o[1],b=Object(a.useState)(void 0),p=b[0],u=b[1],h=Object(a.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],m=function(){return l(!s)};return Object(a.useEffect)((function(){i.a.render(h,n,(function(e){u(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onClick:m,className:d()(c.a.graph,c.a.pointer),dangerouslySetInnerHTML:{__html:p}}),r.a.createElement("div",{onClick:m,className:d()(c.a.overlay,c.a.pointer,c.a.graph,(t={},t[c.a.visible]=s,t))},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:d()(c.a.backdrop,c.a.graph),dangerouslySetInnerHTML:{__html:p}})))}},456:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(16),r=n(457);function o(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,s=void 0!==i&&i,c=o.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(s)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+d:d}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},457:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},475:function(e,t,n){var a={"./locale":462,"./locale.js":462};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=475}}]);