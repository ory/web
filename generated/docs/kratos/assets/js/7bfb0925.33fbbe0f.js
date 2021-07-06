(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[519],{73295:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(67294),o=n(83300),r=n.n(o),i=n(11756),s="container_2x1S",l=n(25108),c=function(e,t){if(!e)return 0;var n=t.findIndex((function(t){return t.indexOf(e)>-1}));return-1===n?0:n},d=function(e){var t=e.src,n=e.title,o=(0,a.useState)(""),d=o[0],u=o[1];(0,a.useEffect)((function(){var n,a,o;r()(t.replace("github.com","raw.githubusercontent.com").replace("/blob/","/")).then((function(e){return e.text()})).then((n=e,a=n.startAt,o=n.endAt,function(e){var t=e.split("\n"),n=c(a,t);n>0&&(t=["// ..."].concat(t.slice(n,-1)));var r=c(o,t);return r>0&&(t=[].concat(t.slice(0,r+1),["// ..."])),t.join("\n")})).then(u).catch(l.error)}),[]);var p="language-"+function(e){var t=e.split(".").pop();switch(t){case"jsx":return"jsx";case"tsx":return"tsx";case"ts":return"typescript";case"go":return"go";case"yaml":case"yml":return"yaml";case"js":return"javascript";case"html":return"html";case"pug":return"pug";default:return t}}(t),m='title="'+(n||function(e){var t=e.match(new RegExp("https://github.com/[^/]+/[^/]+/blob/[^/]+/(.+)","i"))||[];return t.length>=2?t[1]:e}(t))+'"';return a.createElement("div",{className:s},a.createElement(i.Z,{metastring:m,className:p,children:d}))}},32527:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(67294),o=n(21140),r=n.n(o),i="graph_1lrJ",s="pointer_3d8u",l="overlay_2fuY",c="visible_2Z3U",d="backdrop_2z5L",u=n(94184),p=n.n(u);r().initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});var m=function(e){var t,n=e.chart,o=(0,a.useState)(!1),u=o[0],m=o[1],h=(0,a.useState)(void 0),k=h[0],g=h[1],f=(0,a.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],v=function(){return m(!u)};return(0,a.useEffect)((function(){r().render(f,n,(function(e){g(e)}))}),[]),a.createElement(a.Fragment,null,a.createElement("div",{onClick:v,className:p()(i,s),dangerouslySetInnerHTML:{__html:k}}),a.createElement("div",{onClick:v,className:p()(l,s,i,(t={},t[c]=u,t))},a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:p()(d,i),dangerouslySetInnerHTML:{__html:k}})))}},57080:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),i=n(32527),s=n(73295),l=["components"],c={id:"quickstart",title:"Quickstart"},d=void 0,u={unversionedId:"quickstart",id:"version-v0.5/quickstart",isDocsHomePage:!1,title:"Quickstart",description:"ORY Kratos has several moving parts and getting everything right from the",source:"@site/versioned_docs/version-v0.5/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/kratos/docs/v0.5/quickstart",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/quickstart.mdx",version:"v0.5",lastUpdatedBy:"Bengt Hagemeister",lastUpdatedAt:1617434174,formattedLastUpdatedAt:"4/3/2021",frontMatter:{id:"quickstart",title:"Quickstart"},sidebar:"version-v0.5/docs",previous:{title:"Introduction",permalink:"/kratos/docs/v0.5/"},next:{title:"Installation",permalink:"/kratos/docs/v0.5/install"}},p=[{value:"Use Case: Application Login and Registration",id:"use-case-application-login-and-registration",children:[]},{value:"Setup",id:"setup",children:[{value:"Clone ORY Kratos and Run it in Docker",id:"clone-ory-kratos-and-run-it-in-docker",children:[]},{value:"Network Architecture",id:"network-architecture",children:[]}]},{value:"Perform Registration, Login, and Logout",id:"perform-registration-login-and-logout",children:[{value:"Understanding How Login and Registration Works",id:"understanding-how-login-and-registration-works",children:[]},{value:"Email Verification",id:"email-verification",children:[]},{value:"Account Recovery",id:"account-recovery",children:[]}]},{value:"Cleaning Up Docker",id:"cleaning-up-docker",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],m={toc:p};function h(e){var t=e.components,c=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ORY Kratos has several moving parts and getting everything right from the\nbeginning can be challenging. This getting started guide will help you install\nORY Kratos and some additional dependencies so that you can see how it works."),(0,r.kt)("p",null,"Please be aware that this guide is not a replacement for studying the docs. You\nmust understand core concepts and APIs to use ORY Kratos productively. This is\nmerely a guide to get you set up with some examples."),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/JhlIZ3aChXc",frameborder:"0",allowfullscreen:!0}),(0,r.kt)("h2",{id:"use-case-application-login-and-registration"},"Use Case: Application Login and Registration"),(0,r.kt)("p",null,"This section gives you some context on what we want to achieve and what tools we\nneed for that. You will also learn about the network set up we picked for this\nguide."),(0,r.kt)("p",null,"This quickstart guide operates on the assumption that we are writing a NodeJS\napp called ",(0,r.kt)("strong",{parentName:"p"},"SecureApp"),". This app is using nothing fancy - some ExpressJS and a\nbit of HTML Templating using Handlebars. We do want to use TypeScript, but only\nbecause it's more readable - not because we're doing anything out of the\nordinary!"),(0,r.kt)("p",null,"You could pick any technology here, of course. This works with Swift, ReactJS,\nor Angular (client side) as well as with PHP, Ruby, Python, Java (server side) -\nyou name it! We picked NodeJS + TypeScript because we believe it is the easiest\nto understand, and because JavaScript and NodeJS are universally understood and\neasy to install."),(0,r.kt)("p",null,"We know that SecureApp will need to have some type of dashboard and that it\nneeds users. Therefore, we need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Login"),(0,r.kt)("li",{parentName:"ul"},"Logout"),(0,r.kt)("li",{parentName:"ul"},"Registration"),(0,r.kt)("li",{parentName:"ul"},'Profile management ("update first name", "update avatar", etc.)'),(0,r.kt)("li",{parentName:"ul"},'Credentials Management ("add a new recovery email", "change password", etc.)'),(0,r.kt)("li",{parentName:"ul"},'Account Recovery ("password reset")'),(0,r.kt)("li",{parentName:"ul"},"Email Verification"),(0,r.kt)("li",{parentName:"ul"},"Two Factor Authentication"),(0,r.kt)("li",{parentName:"ul"},'"Sign in with Google" and "Sign in with GitHub"')),(0,r.kt)("p",null,"and of course:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A dashboard that shows\n",(0,r.kt)("inlineCode",{parentName:"li"},"Hello {{ traits.name.first }} {{ traits.name.last }}}!")," which is only visible\nwhen the user is signed in.")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,'As you might already know, ORY Kratos is API-only; it does not have a UI or HTML\ntemplating engine. We will implement all the user-facing UIs like "dashboard",\n"login", and "registration" in our NodeJS SecureApp!'),(0,r.kt)("p",null,"To ensure that no one can access the dashboard without prior authentication\n(login), we can use a small piece of code (here ExpressJS) to do that:"),(0,r.kt)(s.Z,{lang:"js",link:"https://github.com/ory/kratos-selfservice-ui-node/blob/master/src/middleware/simple.ts",src:"https://raw.githubusercontent.com/ory/kratos-selfservice-ui-node/master/src/middleware/simple.ts",mdxType:"CodeFromRemote"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"ORY Kratos is not just an API: it uses cookies, HTTP redirects, anti-CSRF tokens\nand more so you don't have to."))),(0,r.kt)("p",null,"The SecureApp and ORY Kratos need to share cookies in order for anti-CSRF tokens\nand login sessions to work. Because the quickstart runs on different ports on\n",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," there is nothing we need to do to get this all working. In\nenvironments where you have multiple sub-domains or reverse proxies, the set up\nwill be a bit more sophisticated. You can find more information about the\ndifferent set up possibilities in the\n",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/v0.5/guides/multi-domain-cookies"},"Getting Cookies to Work on Multi-Domains Guide"),"."),(0,r.kt)("p",null,"ORY Kratos does not ship with an administrative user interface. You must\nimplement that yourself or choose the ORY Cloud offering (to be announced). In\nthis quickstart we will use ORY Kratos' CLI to interact with ORY Kratos' APIs."),(0,r.kt)("p",null,"The quickstart also comes with ",(0,r.kt)("a",{parentName:"p",href:"https://mailslurper.com"},"MailSlurper"),", a mock\nSMTP server the demo uses to show how email verification works."),(0,r.kt)("h3",{id:"clone-ory-kratos-and-run-it-in-docker"},"Clone ORY Kratos and Run it in Docker"),(0,r.kt)("p",null,"To get this example working, you will need Git,\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker"),", and\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose")," installed on your\nsystem. No other dependencies are required. Before you start, make sure that\nDocker has enough disk space."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This tutorial uses Docker-Compose volumes which have reported to run out of disk\nspace. Check the remaining disk space using ",(0,r.kt)("inlineCode",{parentName:"p"},"docker system df"),". If the volumes\nare above the 85% threshold,\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/pruning/"},"prune old Docker objects")," before you\nstart!"))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you encounter build errors (e.g. network timeout), make sure that the network\nis running correctly and run ",(0,r.kt)("inlineCode",{parentName:"p"},"make docker")," again. If the problem persists, feel\nfree to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/new/choose"},"open an issue"),"."))),(0,r.kt)("p",null,"Let's clone ORY Kratos and run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"git clone https://github.com/ory/kratos.git\ncd kratos\ngit checkout v0.5.5-alpha.1\n\ndocker-compose -f quickstart.yml -f quickstart-standalone.yml up --build --force-recreate\n# If you have SELinux, run:\ndocker-compose -f quickstart.yml -f quickstart-selinux.yml -f quickstart-standalone.yml up --build --force-recreate\n")),(0,r.kt)("p",null,"This might take a minute or two. Once the output slows down and logs indicate a\nhealthy system you're ready to roll! A healthy system will show something along\nthe lines of (the order of messages might be reversed):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'kratos_1 | time="2020-01-20T14:52:13Z" level=info msg="Starting the admin httpd on: 0.0.0.0:4434"\nkratos_1 | time="2020-01-20T14:52:13Z" level=info msg="Starting the public httpd on: 0.0.0.0:4433"\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There are two important factors to get a fully functional system:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"You need to make sure that ports ",(0,r.kt)("inlineCode",{parentName:"li"},"4455"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"4433"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"4434"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"4436"),"\xa0",(0,r.kt)("a",{parentName:"li",href:"https://serverfault.com/questions/309052/check-if-port-is-open-or-closed-on-a-linux-server"},"are free"),"."),(0,r.kt)("li",{parentName:"ul"},"Make sure to always use ",(0,r.kt)("inlineCode",{parentName:"li"},"127.0.0.1")," as the hostname; never use ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost"),"!\nThis is important because browsers treat these two as separate domains and\nwill therefore have issues with setting and using cookies correctly.")))),(0,r.kt)("p",null,"You might notice that no database is being used in this example. ORY Kratos\nsupports SQLite, PostgreSQL, MySQL, and CockroachDB as database backends. For\nthe quickstart, we're mounting a persistent volume to store the SQLite database\nin."),(0,r.kt)("p",null,"Future guides will explain how to set up a production system."),(0,r.kt)("h3",{id:"network-architecture"},"Network Architecture"),(0,r.kt)("p",null,"This demo makes use of several services:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos"},"ORY Kratos"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Public ("Browser") API (port 4433)'),(0,r.kt)("li",{parentName:"ul"},"Admin API (port 4434) - This is only made public so we can test via the\nCLI."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"http://github.com/ory/kratos-selfservice-ui-node"},"SecureApp"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Public (port 4455) - an example application written in NodeJS that\nimplements the login, registration, logout, dashboard, and other UIs."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mailslurper"},"MailSlurper"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Public (port 4436) - a development SMTP server which ORY Kratos will use to\nsend emails.")))),(0,r.kt)("p",null,"To better understand the application architecture, let's take a look at the\nnetwork configuration. This assumes that you have at least some understanding of\nhow Docker networks work:"),(0,r.kt)(i.Z,{chart:'\ngraph TD\nsubgraph hn[Host Network]\n    B[Browser]\n    B--\x3e|Can access URLs via 127.0.0.1:4455|OKPHN\n    B--\x3e|Can access URLs via 127.0.0.1:4433|PAPI\n    B--\x3e|Can access UI via 127.0.0.1:4436|SMTPUI\n    OKPHN([SecureApp exposed at :4455])\n    SMTPUI([MailSlurper UI exposed at :4436])\n    PAPI([ORY Kratos Public API exposed at :4433])\nend\nsubgraph dn["Internal Docker Network (intranet)"]\n    OKPHN-.->SA\n    SMTPUI-.->SMTP\n    PAPI-.->OK\n    SA--\x3e|Talks to and validates login sessions using|OK\n    OK--\x3e|Sends mail via|SMTP\n    OK[ORY Kratos]\n    SA["SecureApp (ORY Kratos SelfService UI Node Example)"]\n    SMTP["SMTP Server (MailSlurper)"]\nend\n',mdxType:"Mermaid"}),(0,r.kt)("h2",{id:"perform-registration-login-and-logout"},"Perform Registration, Login, and Logout"),(0,r.kt)("p",null,"Enough theory, it's time to get this thing going! Let's start by trying to open\nthe dashboard - ",(0,r.kt)("strong",{parentName:"p"},"go to\n",(0,r.kt)("a",{parentName:"strong",href:"http://127.0.0.1:4455/dashboard"},"127.0.0.1:4455/dashboard")),"."),(0,r.kt)("p",null,"You should notice that you're ending up at the login endpoint instead of the\ndashboard:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Login screen of your secured app",src:n(69706).Z})),(0,r.kt)("p",null,"Looking at the network stack, you can see two redirects happening:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Network trace of your secured app",src:n(26311).Z})),(0,r.kt)("p",null,"Here's a play-by-play of what happened:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"SecureApp used the ORY Kratos JavaScript language client to guard the\n",(0,r.kt)("inlineCode",{parentName:"li"},"/dashboard")," route. The ORY Kratos client checked the cookies from the\nrequest and saw you were not logged in."),(0,r.kt)("li",{parentName:"ol"},"The route guard redirected you from ",(0,r.kt)("inlineCode",{parentName:"li"},"/dashboard")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"/auth/login"),". ORY\nKratos' browser API requires a ",(0,r.kt)("inlineCode",{parentName:"li"},"<flow_id>")," in order to log you in. It looked\nfor this ID in the URL as a query parameter but couldn't find it."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"/auth/login")," redirected you to\n",(0,r.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:4433/self-service/login/browser"),", which is one of ORY\nKratos' APIs used for logging in browser-based applications."),(0,r.kt)("li",{parentName:"ol"},"ORY Kratos performed some security checks, prepared form data, created a\n",(0,r.kt)("inlineCode",{parentName:"li"},"csrf_token"),", and redirected the browser to ",(0,r.kt)("inlineCode",{parentName:"li"},"/auth/login?flow=<flow_id>"),"."),(0,r.kt)("li",{parentName:"ol"},"SecureApp handled the ",(0,r.kt)("inlineCode",{parentName:"li"},"/auth/login")," route, found the ",(0,r.kt)("inlineCode",{parentName:"li"},"<flow_id>")," in the URL\nquery parameter, and used it to make an HTTP request to\n",(0,r.kt)("inlineCode",{parentName:"li"},"http://kratos:4434/self-service/login/flows?id=<flow_id>"),". Notice the URI is\n",(0,r.kt)("inlineCode",{parentName:"li"},"kratos:4434")," because SecureApp is making a server-side HTTP request via\nDocker's private network to ORY Kratos' Admin API."),(0,r.kt)("li",{parentName:"ol"},"ORY Kratos responded with data which SecureApp used to render the HTML login\nform.")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Your rendered login form should be a standard HTML ",(0,r.kt)("inlineCode",{parentName:"p"},"<form>"),". AJAX requests will\nnot work!"))),(0,r.kt)("p",null,"We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," to see what ORY Kratos responds with. Try visiting\n",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4455/auth/login"),", copying the generated ",(0,r.kt)("inlineCode",{parentName:"p"},"<flow_id>"),", and\nmaking the request yourself:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'# curl -s "http://127.0.0.1:4434/self-service/login/flows?id=ee6e1565-d3c3-4f3a-a6ff-0ba6b3a6481b" \\\n$ curl -s "http://127.0.0.1:4434/self-service/login/flows?id=<flow_id>" \\\n  | jq\n\n{\n  "id": "ee6e1565-d3c3-4f3a-a6ff-0ba6b3a6481b",\n  "type": "browser",\n  "expires_at": "2020-09-13T10:49:54.8295242Z",\n  "issued_at": "2020-09-13T10:39:54.8295242Z",\n  "request_url": "http://127.0.0.1:4433/self-service/login/browser",\n  "methods": {\n    "password": {\n      "method": "password",\n      "config": {\n        "action": "http://127.0.0.1:4433/self-service/login/methods/password?flow=ee6e1565-d3c3-4f3a-a6ff-0ba6b3a6481b",\n        "method": "POST",\n        "fields": [\n          {\n            "name": "identifier",\n            "type": "text",\n            "required": true,\n            "value": ""\n          },\n          {\n            "name": "password",\n            "type": "password",\n            "required": true\n          },\n          {\n            "name": "csrf_token",\n            "type": "hidden",\n            "required": true,\n            "value": "lNrB8sW2fZY6xnnA91V7ISYrUVcJbmRCOoGHjsnsfI7MsIL5RTbuWFm5TRv1azQW+7IRCfnt2Ch6pC42/45sJQ=="\n          }\n        ]\n      }\n    }\n  },\n  "forced": false\n}\n')),(0,r.kt)("p",null,"This flow also works with Single Page Apps (SPA) and frameworks like Angular or\nReactJS. For more details about the specific flows (login, registration, logout,\netc.), head over to the ",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/v0.5/concepts/index"},"concept")," chapter."),(0,r.kt)("p",null,'Let\'s move on to the next flow - registration! Click on "Register new account",\nwhich initiates a flow similar to the one we just used:'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Registration screen of your secured app",src:n(41870).Z})),(0,r.kt)("p",null,"The network trace should look familiar by now:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Registration with network trace screen of your secured app",src:n(58845).Z})),(0,r.kt)("p",null,"If we try to sign up using a password like ",(0,r.kt)("inlineCode",{parentName:"p"},"123456"),", Krato's password policy\nwill complain:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Registration with network trace screen of your secured app",src:n(35302).Z})),(0,r.kt)("p",null,"The error message is coming directly from ORY Kratos' Admin API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'# curl -s "http://127.0.0.1:4433/self-service/registration/flows?id=2b1f8c5d-e830-4068-97b8-35f776df9217" \\\n$ curl -s "http://127.0.0.1:4433/self-service/registration/flows?id=<flow_id>" \\\n  | jq\n\n{\n  "id": "2b1f8c5d-e830-4068-97b8-35f776df9217",\n  "type": "browser",\n  "expires_at": "2020-09-13T10:53:15.1774019Z",\n  "issued_at": "2020-09-13T10:43:15.1774019Z",\n  "request_url": "http://127.0.0.1:4433/self-service/registration/browser",\n  "active": "password",\n  "messages": null,\n  "methods": {\n    "password": {\n      "method": "password",\n      "config": {\n        "action": "http://127.0.0.1:4433/self-service/registration/methods/password?flow=2b1f8c5d-e830-4068-97b8-35f776df9217",\n        "method": "POST",\n        "fields": [\n          {\n            "name": "csrf_token",\n            "type": "hidden",\n            "required": true,\n            "value": "1IlHWNjkAZxuYhO82WPgNTgujKsUSaW87j6og/20i2uM4wRTWGSSUg0dJ2fbXa8C5bfM9eTKGdauGwE7y9abwA=="\n          },\n          {\n            "name": "password",\n            "type": "password",\n            "required": true,\n            "messages": [\n              {\n                "id": 4000005,\n                "text": "The password can not be used because the password has been found in at least 23597311 data breaches and must no longer be used..",\n                "type": "error",\n                "context": {\n                  "reason": "the password has been found in at least 23597311 data breaches and must no longer be used."\n                }\n              }\n            ]\n          },\n          {\n            "name": "traits.email",\n            "type": "text",\n            "value": "foo@ory.sh"\n          },\n          {\n            "name": "traits.name.first",\n            "type": "text",\n            "value": "Ory"\n          },\n          {\n            "name": "traits.name.last",\n            "type": "text",\n            "value": "Corp"\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Setting a password that doesn't violate these policies, we will be immediately\nredirected to the dashboard:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SecureApp Dashboard",src:n(41337).Z})),(0,r.kt)("p",null,'By clicking the "logout" icon in the top right, you will be redirected to the\nlogin screen again where you will be able to use your credentials to log back in\nagain. Exciting!'),(0,r.kt)("h3",{id:"understanding-how-login-and-registration-works"},"Understanding How Login and Registration Works"),(0,r.kt)("p",null,"Head over to the ",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/v0.5/self-service"},"Self-Service Flows Chapter")," for an in-depth\nexplanation of how each individual flow works."),(0,r.kt)("h3",{id:"email-verification"},"Email Verification"),(0,r.kt)("p",null,"As you've signed up, an email was sent to the email address you used. Because\nthe quickstart uses a fake SMTP server, the email did not arrive in your inbox.\nYou can retrieve the email however by opening the MailSlurper UI at\n",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:4436"},"127.0.0.1:4436"),"."),(0,r.kt)("p",null,"You should see something like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"User Email Verification",src:n(79661).Z})),(0,r.kt)("p",null,"If not, hard refresh the tab or click on the home icon in the menu bar."),(0,r.kt)("p",null,"Next, click the verification link. You will end up at the dashboard, with a\nverified email address (check the ",(0,r.kt)("inlineCode",{parentName:"p"},"verified")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"verified_at")," field in the JSON\nresponse):"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SecureApp Dashboard",src:n(65874).Z})),(0,r.kt)("p",null,"To re-request the verification email, fill out the form at\n",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:4455/verify"},"127.0.0.1:4455/verify"),"."),(0,r.kt)("p",null,"To learn more about verification recovery, head over to the\n",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/v0.5/self-service/flows/verify-email-account-activation"},"Email and Phone Verification and Account Activation Documentation"),"."),(0,r.kt)("h3",{id:"account-recovery"},"Account Recovery"),(0,r.kt)("p",null,'The quickstart has account recovery enabled. To recover an account, log out and\nclick on "Reset password":'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Click on recover account",src:n(63182).Z})),(0,r.kt)("p",null,"The next screen shows a HTML form where you enter your email address:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Enter your email address",src:n(76051).Z})),(0,r.kt)("p",null,'Hit "submit" and check the emails for the account recovery message:'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Check your email for the password reset email",src:n(52074).Z})),(0,r.kt)("p",null,"Click the link, and change your password:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Change your password",src:n(42604).Z})),(0,r.kt)("p",null,"You are now able to sign in with the new password. To learn more about account\nrecovery, head over to the\n",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/v0.5/self-service/flows/account-recovery"},"Account Recovery Documentation"),"."),(0,r.kt)("h4",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You can find all configuration files used for this quickstart guide in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/tree/v0.5.5-alpha.1/contrib/quickstart/kratos/email-password"},(0,r.kt)("inlineCode",{parentName:"a"},"./contrib/quickstart/kratos")),"\n,\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/blob/v0.5.5-alpha.1/quickstart.yml"},(0,r.kt)("inlineCode",{parentName:"a"},"./quickstart.yml")),",\nand\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/blob/v0.5.5-alpha.1/quickstart-standalone.yml"},(0,r.kt)("inlineCode",{parentName:"a"},"./quickstart-standalone.yml")),".\nTo understand what each of those configuration files does, consult the other\nchapters of this documentation."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To get a minimal version of ORY Kratos running, you need to set configuration\nvalues for\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/blob/v0.5.5-alpha.1/contrib/quickstart/kratos/email-password/kratos.yml#L75"},(0,r.kt)("inlineCode",{parentName:"a"},"identity.default_schema_url")),"\nand\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/blob/v0.5.5-alpha.1/quickstart.yml#L42"},(0,r.kt)("inlineCode",{parentName:"a"},"DSN")),".\nYou should also configure\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/blob/v0.5.5-alpha.1/contrib/quickstart/kratos/email-password/kratos.yml#L24"},(0,r.kt)("inlineCode",{parentName:"a"},"selfservice.flows.*.ui_url")),"\nor else Kratos will use fallback URLs."))),(0,r.kt)("p",null,"In the future, this guide will support more use cases such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GitHub to login and registration")),(0,r.kt)("h2",{id:"cleaning-up-docker"},"Cleaning Up Docker"),(0,r.kt)("p",null,"To clean everything up, you need to bring down the Docker Compose environment\nand remove all mounted volumes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"docker-compose -f quickstart.yml down -v\ndocker-compose -f quickstart.yml rm -fsv\n")),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Here is some information if you want to modify the quickstart to test ORY Kratos\nin with different settings."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Using different databases")),(0,r.kt)("p",null,"If you want to run the quickstart with PostgreSQL, run the following\ndocker-compose:\n",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose -f quickstart.yml -f quickstart-standalone.yml -f quickstart-postgres.yml up --build --force-recreate")),(0,r.kt)("p",null,"If you want to run the quickstart with CockroachDB, run the following\ndocker-compose:\n",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose -f quickstart.yml -f quickstart-standalone.yml -f quickstart-crdb.yml up --build --force-recreate")),(0,r.kt)("p",null,"If you want to run the quickstart with MySQL, run the following docker-compose:\n",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose -f quickstart.yml -f quickstart-standalone.yml -f quickstart-mysql.yml up --build --force-recreate")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Changing ports")),(0,r.kt)("p",null,"If you want to change ports for the SelfService-UI, you need to change them in\n",(0,r.kt)("inlineCode",{parentName:"p"},"quickstart.yml")," as well as in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"contrib/quickstart/kratos/email-password/kratos.yml")," accordingly."),(0,r.kt)("p",null,"Note that you also need to change the ports for flows (error, settings,\nrecovery, verification, logout, login, registration)."),(0,r.kt)("p",null,"The same procedure applies if you want to change ports for the Public UI/Admin\nUI or the Mailslurper."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hooks")),(0,r.kt)("p",null,"If you want to change the redirects happening after registration,login or a\nsettings change, take a look at this document: ",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/v0.5/self-service/hooks"},"Hooks"),"."),(0,r.kt)("p",null,"If you delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"session")," hook from ",(0,r.kt)("inlineCode",{parentName:"p"},"kratos.yml"),", the user will ",(0,r.kt)("em",{parentName:"p"},"not")," be\nimmediately signed in after registration."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OIDC")),(0,r.kt)("p",null,"If you want to test ORY Kratos integration with different OIDC providers, you\nwill find more information in this document:\n",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/v0.5/guides/sign-in-with-github-google-facebook-linkedin"},"OIDC")))}h.isMDXComponent=!0},11748:function(e,t,n){var a={"./locale":89234,"./locale.js":89234};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=11748},83300:function(e,t){"use strict";var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,n.fetch&&(t.default=n.fetch.bind(n)),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response},79661:function(e,t,n){"use strict";t.Z=n.p+"assets/images/mailslurper-quickstart-956e96c6f57f93dc59fb6288fab220b9.png"},63182:function(e,t,n){"use strict";t.Z=n.p+"assets/images/quickstart-recover-i-1c1311d3f7a2ba75e6abf5548de57aa6.png"},76051:function(e,t,n){"use strict";t.Z=n.p+"assets/images/quickstart-recover-ii-3a213f3ca6d4963a6c472af37c801a0d.png"},52074:function(e,t,n){"use strict";t.Z=n.p+"assets/images/quickstart-recover-iii-531b1e0013432c60ff3546a10c4a9402.png"},42604:function(e,t,n){"use strict";t.Z=n.p+"assets/images/quickstart-recover-iv-900b407f650b56e181ea57ddbceb821b.png"},41337:function(e,t,n){"use strict";t.Z=n.p+"assets/images/secureapp-dashboard-17e618c35cf2d5bee1cb27532ef61cb2.png"},26311:function(e,t,n){"use strict";t.Z=n.p+"assets/images/secureapp-login-ntrace-528cfa7d906b7a218e442a85909fed33.png"},69706:function(e,t,n){"use strict";t.Z=n.p+"assets/images/secureapp-login-62bb1fd8642674c32a4ed197b0397641.png"},58845:function(e,t,n){"use strict";t.Z=n.p+"assets/images/secureapp-registration-ntrace-7628b52a112090f4e5dc461123f88adf.png"},35302:function(e,t,n){"use strict";t.Z=n.p+"assets/images/secureapp-registration-pwpolicy-61e8c6492d55b6fdde7e0fa71c56c13d.png"},41870:function(e,t,n){"use strict";t.Z=n.p+"assets/images/secureapp-registration-8d3897c8516f99648767a8e230fd9ed8.png"},65874:function(e,t,n){"use strict";t.Z=n.p+"assets/images/secureapp-verified-dashboard-84c4a536838adbcc6aad295a1865dc18.png"}}]);