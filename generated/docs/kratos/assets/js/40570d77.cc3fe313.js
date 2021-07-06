(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[1068],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(n),p=r,h=g["".concat(l,".").concat(p)]||g[p]||d[p]||a;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},13919:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return r}})},44996:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return o}});var i=n(52263),r=n(13919);function a(){var e=(0,i.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,o=a.forcePrependBaseUrl,s=void 0!==o&&o,l=a.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},84612:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var i=n(22122),r=n(19756),a=(n(67294),n(3905)),o=n(44996),s=["components"],l={id:"quickstart",title:"Quickstart"},c=void 0,u={unversionedId:"quickstart",id:"version-v0.1/quickstart",isDocsHomePage:!1,title:"Quickstart",description:"ORY Kratos has several moving parts and getting everything right from the",source:"@site/versioned_docs/version-v0.1/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/kratos/docs/v0.1/quickstart",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.1/quickstart.mdx",version:"v0.1",lastUpdatedBy:"Bengt Hagemeister",lastUpdatedAt:1617434174,formattedLastUpdatedAt:"4/3/2021",frontMatter:{id:"quickstart",title:"Quickstart"},sidebar:"version-v0.1/docs",previous:{title:"Introduction",permalink:"/kratos/docs/v0.1/"},next:{title:"Installation",permalink:"/kratos/docs/v0.1/install"}},d=[{value:"Use case: You want login and registration for your Application",id:"use-case-you-want-login-and-registration-for-your-application",children:[]},{value:"Setup",id:"setup",children:[{value:"Clone ORY Kratos and run it in Docker",id:"clone-ory-kratos-and-run-it-in-docker",children:[]},{value:"Network Architecture",id:"network-architecture",children:[]}]},{value:"Perform registration, logout, login",id:"perform-registration-logout-login",children:[{value:"Understanding how Login and Registration works",id:"understanding-how-login-and-registration-works",children:[]},{value:"Email Verification",id:"email-verification",children:[]}]},{value:"Cleaning up Docker",id:"cleaning-up-docker",children:[]}],g={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ORY Kratos has several moving parts and getting everything right from the\nbeginning can be challenging. This getting started guide will help you install\nORY Kratos and some additional dependencies so that you can see how ORY Kratos\nworks."),(0,a.kt)("p",null,"Please be aware that this guide is not a replacement for studying the docs. You\nmust understand core concepts and APIs to use ORY Kratos productively. This is\nmerely a guide to get you set up with some examples."),(0,a.kt)("h2",{id:"use-case-you-want-login-and-registration-for-your-application"},"Use case: You want login and registration for your Application"),(0,a.kt)("p",null,"This section gives you some context on what we want to achieve and what tools we\nneed for that. You will also learn about the network set up we picked for this\nguide."),(0,a.kt)("p",null,"This quickstart guide operates on the assumption that we are writing a NodeJS\napp called ",(0,a.kt)("strong",{parentName:"p"},"SecureApp"),". This app is using nothing fancy - some ExpressJS and a\nbit of HTML Templating using Handlebars. We do want to use TypeScript but only\nbecause it's more readable - not because we're doing anything out of the\nordinary!"),(0,a.kt)("p",null,"You could pick any technology here, of course. This works with Swift, ReactJS,\nor Angular (client side) as well as with PHP, Ruby, Python, Java (server side) -\nyou name it! We picked NodeJS + TypeScript because we believe it is the easiest\nto understand, and because JavaScript and NodeJS are universally understood and\neasy to install."),(0,a.kt)("p",null,"We don't really know what SecureApp should do one day. But we do know that it\nwill have some type of dashboard and that it needs users, therefore we need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Login"),(0,a.kt)("li",{parentName:"ul"},"Logout"),(0,a.kt)("li",{parentName:"ul"},"Registration"),(0,a.kt)("li",{parentName:"ul"},'Profile management ("update first name", "update avatar ...")'),(0,a.kt)("li",{parentName:"ul"},'Credentials Management ("add a new recovery email", "change password", "...")'),(0,a.kt)("li",{parentName:"ul"},'Account Recovery ("password reset")'),(0,a.kt)("li",{parentName:"ul"},"Two Factor Authentication with Google Authenticator"),(0,a.kt)("li",{parentName:"ul"},'"Sign in with Google" and "Sign in with GitHub"')),(0,a.kt)("p",null,"and of course:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'A dashboard that shows "Hello {{ firstName }} {{ lastName }}, your birthday is\non {{ birthday }}!". It is only visible when the user is signed in!')),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"As you might already know, ORY Kratos is API-only. It does not have a UI or HTML\nTemplating Engine. We will implement all the user-facing UIs (dashboard, login,\nregistration, ...) in our NodeJS SecureApp!"),(0,a.kt)("p",null,"To ensure that no one can access the dashboard without prior authentication\n(login), we will use a reverse proxy\n(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ory/oathkeeper"},"ORY Oathkeeper"),") to deny all\nunauthenticated traffic to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://secure-app/dashboard")," and redirect the user\nto the login page at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://secure-app/auth/login"),". Further, we will configure\naccess to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://secure-app/auth/login")," in such a way that access only works if\none is not yet authenticated."),(0,a.kt)("p",null,"ORY Kratos does not ship with an administrative user interface. You must\nimplement that yourself or choose the ORY Cloud offering (to be announced). In\nthis quickstart, we will use ORY Kratos CLI (Command Line Interface) to interact\nwith ORY Kratos' Administrative APIs."),(0,a.kt)("p",null,"The quickstart also comes with ",(0,a.kt)("a",{parentName:"p",href:"https://mailslurper.com"},"MailSlurper"),", a mock\nSMTP server the demo uses to show how e.g. email verification works."),(0,a.kt)("h3",{id:"clone-ory-kratos-and-run-it-in-docker"},"Clone ORY Kratos and run it in Docker"),(0,a.kt)("p",null,"To get this example working, you will need Git and\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker, and Docker Compose")," installed on\nyour system. No other dependencies are required. Let's clone ORY Kratos and run\n",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"git clone https://github.com/ory/kratos.git\n# or if you have git+ssh set up:\n#  git clone git@github.com:ory/kratos.git\ncd kratos\ngit checkout v0.1.1-alpha.1\nmake quickstart\n\n# or if you don't have make installed:\ndocker-compose -f quickstart.yml up --build --force-recreate\n")),(0,a.kt)("p",null,"This might take a minute or two. Once the output slows down and logs indicate a\nhealthy system you're ready to roll! A healthy system will show something along\nthe lines of (the order of messages might be reversed):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kratos_1                      | time="2020-01-20T14:52:13Z" level=info msg="Starting the admin httpd on: 0.0.0.0:4434"\nkratos_1                      | time="2020-01-20T14:52:13Z" level=info msg="Starting the public httpd on: 0.0.0.0:4433"\n\noathkeeper_1                  | {"level":"info","msg":"TLS has not been configured for api, skipping","time":"2020-01-20T09:22:09Z"}\noathkeeper_1                  | {"level":"info","msg":"Listening on http://:4456","time":"2020-01-20T09:22:09Z"}\noathkeeper_1                  | {"level":"info","msg":"TLS has not been configured for proxy, skipping","time":"2020-01-20T09:22:09Z"}\noathkeeper_1                  | {"level":"info","msg":"Listening on http://:4455","time":"2020-01-20T09:22:09Z"}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"There are two important factors to get a fully functional system:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"You need to make sure that ports ",(0,a.kt)("inlineCode",{parentName:"li"},"4435"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"4455"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"4456"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"4433"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"4434"),",\n",(0,a.kt)("inlineCode",{parentName:"li"},"4436")," >\n",(0,a.kt)("a",{parentName:"li",href:"https://serverfault.com/questions/309052/check-if-port-is-open-or-closed-on-a-linux-server"},"are free"),"."),(0,a.kt)("li",{parentName:"ul"},"Make sure to always use ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1")," as the hostname, never use ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost"),"!\nThis is important because browsers treat these two as separate domains and\nwill therefore have issues with setting and using the right cookies."))),(0,a.kt)("p",null,"You might notice that no database is being used in this example. ORY Kratos\nsupports SQLite, PostgreSQL, MySQL, and CockroachDB as database backends. For\nthe quickstart, we're mounting a persistent volume to store the SQLite database\nin. Future guides will explain how to set up a production system!"),(0,a.kt)("h4",{id:"mitigating-docker-errors"},"Mitigating Docker Errors"),(0,a.kt)("p",null,"If you encounter build errors (e.g. network timeout), make sure that the network\nis running correctly and run ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose -f quickstart.yml up --build"),"\nagain. If the problem persists, feel free to\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/new/choose"},"open an issue"),"."),(0,a.kt)("h3",{id:"network-architecture"},"Network Architecture"),(0,a.kt)("p",null,"This demo makes use of several services / Docker Images:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos"},"ORY Kratos")),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("strong",{parentName:"li"},"SecureApp")," - an\n",(0,a.kt)("a",{parentName:"li",href:"http://github.com/ory/kratos-selfservice-ui-node"},"example application written in NodeJS"),"\nthat implements the login, registration, logout, ..., and dashboard screen."),(0,a.kt)("li",{parentName:"ol"},"A reverse proxy (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper"},"ORY Oathkeeper"),") to\nprotect the ",(0,a.kt)("strong",{parentName:"li"},"SecureApp"),"."),(0,a.kt)("li",{parentName:"ol"},"An SMTP server with which ORY Kratos can send E-Mails with. We will use\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mailhog/MailHog"},"MailHog"),", a minimalistic SMTP throaway\nserver with an easy UI.")),(0,a.kt)("p",null,"To better understand how everything is wired, let's take a look at the network\nconfiguration. This assumes that you have at least some understanding of how\nDocker (Compose) Networks work:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcblxuc3ViZ3JhcGggaG5bSG9zdCBOZXR3b3JrXVxuICAgIEJbQnJvd3Nlcl1cbiAgICBCLS0-fENhbiBhY2Nlc3MgVVJMcyB2aWEgMTI3LjAuMC4xOjQ0NTV8T0tQSE5cbiAgICBCLS0-fENhbiBhY2Nlc3MgVUkgdmlhIDEyNy4wLjAuMTo0NDM2fFNNVFBVSVxuICAgIE9LUEhOKFtSZXZlcnNlIFByb3h5IGV4cG9zZWQgYXQgOjQ0NTVdKVxuICAgIFNNVFBVSShbTWFpbFNsdXJwZXIgVUkgZXhwb3NlZCBhdCA6NDQzNl0pXG5lbmRcblxuc3ViZ3JhcGggZG5bXCJJbnRlcm5hbCBEb2NrZXIgTmV0d29yayAoaW50cmFuZXQpXCJdXG4gICAgT0tQSE4tLT5PT1xuICAgIFNNVFBVSS0tPlNNVFBcbiAgICBPTy0tPnxQcm94aWVzIFVSTHNzIC8ub3J5L2tyYXRvcy9wdWJsaWMvKiB0b3xPS1xuICAgIE9PLS0-fFwiUHJveGllcyAvYXV0aC9sb2dpbiwgL2F1dGgvcmVnaXN0cmF0aW9uLCAvZGFzaGJvYXJkLCAuLi4gdG9cInxTQVxuICAgIFNBLS0-fFRhbGtzIHRvfE9LXG4gICAgT0stLT58U2VuZHMgbWFpbCB2aWF8U01UUFxuICAgIE9PLS0-fFZhbGlkYXRlcyBhdXRoIHNlc3Npb25zIHVzaW5nfE9LXG5cbiAgICBPS1tPUlkgS3JhdG9zXVxuICAgIE9PW1wiUmV2ZXJzZSBQcm94eSAoT1JZIE9hdGhrZWVwZXIpXCJdXG4gICAgU0FbXCJTZWN1cmVBcHAgKE9SWSBLcmF0b3MgU2VsZlNlcnZpY2UgVUkgTm9kZSBFeGFtcGxlKVwiXVxuICAgIFNNVFBbXCJTTVRQIFNlcnZlciAoTWFpbFNsdXJwZXIpXCJdXG5lbmRcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJuZXV0cmFsIiwiZmxvd2NoYXJ0Ijp7InJhbmtTcGFjaW5nIjo2NSwibm9kZVNwYWNpbmciOjMwLCJjdXJ2ZSI6ImJhc2lzIn19fQ"},(0,a.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcblxuc3ViZ3JhcGggaG5bSG9zdCBOZXR3b3JrXVxuICAgIEJbQnJvd3Nlcl1cbiAgICBCLS0-fENhbiBhY2Nlc3MgVVJMcyB2aWEgMTI3LjAuMC4xOjQ0NTV8T0tQSE5cbiAgICBCLS0-fENhbiBhY2Nlc3MgVUkgdmlhIDEyNy4wLjAuMTo0NDM2fFNNVFBVSVxuICAgIE9LUEhOKFtSZXZlcnNlIFByb3h5IGV4cG9zZWQgYXQgOjQ0NTVdKVxuICAgIFNNVFBVSShbTWFpbFNsdXJwZXIgVUkgZXhwb3NlZCBhdCA6NDQzNl0pXG5lbmRcblxuc3ViZ3JhcGggZG5bXCJJbnRlcm5hbCBEb2NrZXIgTmV0d29yayAoaW50cmFuZXQpXCJdXG4gICAgT0tQSE4tLT5PT1xuICAgIFNNVFBVSS0tPlNNVFBcbiAgICBPTy0tPnxQcm94aWVzIFVSTHNzIC8ub3J5L2tyYXRvcy9wdWJsaWMvKiB0b3xPS1xuICAgIE9PLS0-fFwiUHJveGllcyAvYXV0aC9sb2dpbiwgL2F1dGgvcmVnaXN0cmF0aW9uLCAvZGFzaGJvYXJkLCAuLi4gdG9cInxTQVxuICAgIFNBLS0-fFRhbGtzIHRvfE9LXG4gICAgT0stLT58U2VuZHMgbWFpbCB2aWF8U01UUFxuICAgIE9PLS0-fFZhbGlkYXRlcyBhdXRoIHNlc3Npb25zIHVzaW5nfE9LXG5cbiAgICBPS1tPUlkgS3JhdG9zXVxuICAgIE9PW1wiUmV2ZXJzZSBQcm94eSAoT1JZIE9hdGhrZWVwZXIpXCJdXG4gICAgU0FbXCJTZWN1cmVBcHAgKE9SWSBLcmF0b3MgU2VsZlNlcnZpY2UgVUkgTm9kZSBFeGFtcGxlKVwiXVxuICAgIFNNVFBbXCJTTVRQIFNlcnZlciAoTWFpbFNsdXJwZXIpXCJdXG5lbmRcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJuZXV0cmFsIiwiZmxvd2NoYXJ0Ijp7InJhbmtTcGFjaW5nIjo2NSwibm9kZVNwYWNpbmciOjMwLCJjdXJ2ZSI6ImJhc2lzIn19fQ",alt:"User Login and Registration Network Topology"}))),(0,a.kt)("p",null,"As you can see, most requests are proxied through the Reverse Proxy\n(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ory/oathkeeper"},"ORY Oathkeeper"),"). The ",(0,a.kt)("inlineCode",{parentName:"p"},"quickstart.yml")," file\nalso defines additional ports such as ",(0,a.kt)("inlineCode",{parentName:"p"},"4434"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"4456"),", and others. These ports\nare only there for debugging and playing around with and are not actually\nrequired for the demo to work."),(0,a.kt)("p",null,"The next diagram shows how we've configured the routes in our Reverse Proxy\n(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ory/oathkeeper"},"ORY Oathkeeper"),"):"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcblxuc3ViZ3JhcGggcGlbUHVibGljIEludGVybmV0XVxuICAgIEJbQnJvd3Nlcl1cbmVuZFxuXG5zdWJncmFwaCB2cGNbVlBDIC8gQ2xvdWQgLyBEb2NrZXIgTmV0d29ya11cbnN1YmdyYXBoIFwiRGVtaWxpdGFyaXplZCBab25lIC8gRE1aXCJcbiAgICBPS1tPUlkgT2F0aGtlZXBlciA6NDQ1NV1cbiAgICBCIC0tPiBPS1xuZW5kXG5cbiAgICBPSyAtLT58XCJGb3J3YXJkcyB7LywvZGFzaGJvYXJkfSB0b1wifCBTQURcbiAgICBPSyAtLT58XCJGb3J3YXJkcyAvYXV0aC9sb2dvdXQgdG9cInwgU0FMVVxuICAgIE9LIC0tPnxcIkZvcndhcmRzIC9hdXRoL2xvZ2luIHRvXCJ8IFNBTElcbiAgICBPSyAtLT58XCJGb3J3YXJkcyAvYXV0aC9yZWdpc3RyYXRpb24gdG9cInwgU0FSXG4gICAgT0sgLS0-fFwiRm9yd2FyZHMgL2F1dGgvKiB0b1wifCBTQUFcbiAgICBPSyAtLT58XCJGb3J3YXJkcyAvLm9yeS9rcmF0b3MvcHVibGljLyogdG9cInwgS1BcblxuICAgIHN1YmdyYXBoIFwiUHJpdmF0ZSBTdWJuZXQgLyBJbnRyYW5ldFwiXG4gICAgS1sgT1JZIEtyYXRvcyBdXG5cbiAgICBLUChbIE9SWSBLcmF0b3MgUHVibGljIEFQSSBdKVxuICAgIEtBKFsgT1JZIEtyYXRvcyBBZG1pbiBBUEkgXSlcbiAgICBTQSAtLT4gS0FcbiAgICBLQSAtLmJlbG9uZ3MgdG8uLT4gS1xuICAgIEtQIC0uYmVsb25ncyB0by4tPiBLXG5cbiAgICBzdWJncmFwaCBzYVtcIlNlY3VyZUFwcCAvIGtyYXRvcy1zZXJsZnNlcnZpY2UtdWktbm9kZSBFeGFtcGxlXCJdXG5cbiAgICAgICAgU0FbU2VjdXJlQXBwXVxuICAgICAgICBTQUQgLS5iZWxvbmdzIHRvLi0-IFNBXG4gICAgICAgIFNBTFUgLS5iZWxvbmdzIHRvLi0-IFNBXG4gICAgICAgIFNBTEkgLS5iZWxvbmdzIHRvLi0-IFNBXG4gICAgICAgIFNBUiAtLmJlbG9uZ3MgdG8uLT4gU0FcbiAgICAgICAgU0FBIC0uYmVsb25ncyB0by4tPiBTQVxuXG4gICAgICAgIHN1YmdyYXBoIFwiSGFzIGFjdGl2ZSBsb2dpbiBzZXNzaW9uXCJcbiAgICAgICAgICAgIFNBRChbUm91dGUgL2Rhc2hib2FyZF0pXG4gICAgICAgICAgICBTQUxVKFtSb3V0ZSAvYXV0aC9sb2dvdXRdKVxuICAgICAgICBlbmRcblxuICAgICAgICBzdWJncmFwaCBcIk5vIGFjdGl2ZSBsb2dpbiBzZXNzaW9uXCJcbiAgICAgICAgICAgIFNBTEkoW1JvdXRlIC9hdXRoL2xvZ2luXSkgXG4gICAgICAgICAgICBTQVIoW1JvdXRlIC9hdXRoL3JlZ2lzdHJhdGlvbl0pIFxuICAgICAgICAgICAgU0FBKFtSb3V0ZSAvYXV0aC8uLi5dKVxuICAgICAgICBlbmRcbiAgICBlbmRcbiAgICBlbmRcblxuZW5kXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoibmV1dHJhbCIsImZsb3djaGFydCI6eyJyYW5rU3BhY2luZyI6NzAsIm5vZGVTcGFjaW5nIjozMCwiY3VydmUiOiJiYXNpcyJ9fX0"},(0,a.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcblxuc3ViZ3JhcGggcGlbUHVibGljIEludGVybmV0XVxuICAgIEJbQnJvd3Nlcl1cbmVuZFxuXG5zdWJncmFwaCB2cGNbVlBDIC8gQ2xvdWQgLyBEb2NrZXIgTmV0d29ya11cbnN1YmdyYXBoIFwiRGVtaWxpdGFyaXplZCBab25lIC8gRE1aXCJcbiAgICBPS1tPUlkgT2F0aGtlZXBlciA6NDQ1NV1cbiAgICBCIC0tPiBPS1xuZW5kXG5cbiAgICBPSyAtLT58XCJGb3J3YXJkcyB7LywvZGFzaGJvYXJkfSB0b1wifCBTQURcbiAgICBPSyAtLT58XCJGb3J3YXJkcyAvYXV0aC9sb2dvdXQgdG9cInwgU0FMVVxuICAgIE9LIC0tPnxcIkZvcndhcmRzIC9hdXRoL2xvZ2luIHRvXCJ8IFNBTElcbiAgICBPSyAtLT58XCJGb3J3YXJkcyAvYXV0aC9yZWdpc3RyYXRpb24gdG9cInwgU0FSXG4gICAgT0sgLS0-fFwiRm9yd2FyZHMgL2F1dGgvKiB0b1wifCBTQUFcbiAgICBPSyAtLT58XCJGb3J3YXJkcyAvLm9yeS9rcmF0b3MvcHVibGljLyogdG9cInwgS1BcblxuICAgIHN1YmdyYXBoIFwiUHJpdmF0ZSBTdWJuZXQgLyBJbnRyYW5ldFwiXG4gICAgS1sgT1JZIEtyYXRvcyBdXG5cbiAgICBLUChbIE9SWSBLcmF0b3MgUHVibGljIEFQSSBdKVxuICAgIEtBKFsgT1JZIEtyYXRvcyBBZG1pbiBBUEkgXSlcbiAgICBTQSAtLT4gS0FcbiAgICBLQSAtLmJlbG9uZ3MgdG8uLT4gS1xuICAgIEtQIC0uYmVsb25ncyB0by4tPiBLXG5cbiAgICBzdWJncmFwaCBzYVtcIlNlY3VyZUFwcCAvIGtyYXRvcy1zZXJsZnNlcnZpY2UtdWktbm9kZSBFeGFtcGxlXCJdXG5cbiAgICAgICAgU0FbU2VjdXJlQXBwXVxuICAgICAgICBTQUQgLS5iZWxvbmdzIHRvLi0-IFNBXG4gICAgICAgIFNBTFUgLS5iZWxvbmdzIHRvLi0-IFNBXG4gICAgICAgIFNBTEkgLS5iZWxvbmdzIHRvLi0-IFNBXG4gICAgICAgIFNBUiAtLmJlbG9uZ3MgdG8uLT4gU0FcbiAgICAgICAgU0FBIC0uYmVsb25ncyB0by4tPiBTQVxuXG4gICAgICAgIHN1YmdyYXBoIFwiSGFzIGFjdGl2ZSBsb2dpbiBzZXNzaW9uXCJcbiAgICAgICAgICAgIFNBRChbUm91dGUgL2Rhc2hib2FyZF0pXG4gICAgICAgICAgICBTQUxVKFtSb3V0ZSAvYXV0aC9sb2dvdXRdKVxuICAgICAgICBlbmRcblxuICAgICAgICBzdWJncmFwaCBcIk5vIGFjdGl2ZSBsb2dpbiBzZXNzaW9uXCJcbiAgICAgICAgICAgIFNBTEkoW1JvdXRlIC9hdXRoL2xvZ2luXSkgXG4gICAgICAgICAgICBTQVIoW1JvdXRlIC9hdXRoL3JlZ2lzdHJhdGlvbl0pIFxuICAgICAgICAgICAgU0FBKFtSb3V0ZSAvYXV0aC8uLi5dKVxuICAgICAgICBlbmRcbiAgICBlbmRcbiAgICBlbmRcblxuZW5kXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoibmV1dHJhbCIsImZsb3djaGFydCI6eyJyYW5rU3BhY2luZyI6NzAsIm5vZGVTcGFjaW5nIjozMCwiY3VydmUiOiJiYXNpcyJ9fX0",alt:"User Login and Registration Routes"}))),(0,a.kt)("p",null,"You might notice that we're also proxying requests to ORY Kratos' Public API. We\nare doing this because that way all requests are going to and coming from the\nsame hostname. This avoids common cross-domain issues with cookies."),(0,a.kt)("h2",{id:"perform-registration-logout-login"},"Perform registration, logout, login"),(0,a.kt)("p",null,"Enough theory, it's time to get this thing going! Let's start by trying to open\nthe dashboard - ",(0,a.kt)("strong",{parentName:"p"},"go to\n",(0,a.kt)("a",{parentName:"strong",href:"http://127.0.0.1:4455/dashboard"},"127.0.0.1:4455/dashboard")),". You will probably\nnotice that you're ending up at the login endpoint:"),(0,a.kt)("img",{alt:"Login screen of your secured app",src:(0,o.Z)("img/docs/secureapp-login.png")}),";",(0,a.kt)("p",null,"Looking at the network stack, you can see two redirects happening:"),(0,a.kt)("img",{alt:"Network trace of your secured app",src:(0,o.Z)("img/docs/secureapp-login-ntrace.png")}),";",(0,a.kt)("p",null,"The first redirect from ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4445/dashboard")," to\n",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4455/.ory/kratos/public/auth/browser/login")," is initiated by\nthe Reverse Proxy (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ory/oathkeeper"},"ORY Oathkeeper"),") because\nthe browser does not have a valid authentication (login) session yet. The\nredirect points to one of ORY Kratos' APIs used for logging in browser-based\napplications. ORY Kratos does some security checks and prepares form data and\nredirects the browser to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4445/auth/login"),", appending a\n",(0,a.kt)("inlineCode",{parentName:"p"},"?request=...")," query parameter. The endpoint at ",(0,a.kt)("inlineCode",{parentName:"p"},"/auth/login")," (which belongs to\nour SecureApp) then fetches data important for rendering the forms from ORY\nKratos' Admin API:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ curl http://127.0.0.1:4434/self-service/browser/flows/requests/login?request=<request-id>\n{\n    "id": "27aa98bc-a074-418f-96fa-8b8146050209",\n    "expires_at": "2020-01-20T21:10:12.7365393Z",\n    "issued_at": "2020-01-20T21:00:12.7365532Z",\n    "request_url": "http://127.0.0.1:4455/auth/browser/login",\n    "methods": {\n        "password": {\n            "method": "password",\n            "config": {\n                "action": "http://127.0.0.1:4455/.ory/kratos/public/auth/browser/methods/password/login?request=27aa98bc-a074-418f-96fa-8b8146050209",\n                "method": "POST",\n                "fields": [\n                    {\n                        "name": "csrf_token",\n                        "type": "hidden",\n                        "required": true,\n                        "value": "Ii8iIEdnn12vVQ2vyz2YaHjmXMUK5eSQgw9pgENGxPjXi1PHC9gOG51x61o2GT9LGvC81ddvmNXYeLvlPxA04g=="\n                    },\n                    {\n                        "name": "identifier",\n                        "type": "text",\n                        "required": true\n                    },\n                    {\n                        "name": "password",\n                        "type": "password",\n                        "required": true\n                    }\n                ]\n            }\n        }\n    }\n}\n')),(0,a.kt)("p",null,"This data is then rendered as an HTML form. This flow also works with Single\nPage Apps (SPA) and Frameworks like Angular or ReactJS. For more details about\nthe specific flows (login, registration, logout, ...), head over to the\n",(0,a.kt)("a",{parentName:"p",href:"/kratos/docs/v0.1/concepts/index"},"concept")," chapter."),(0,a.kt)("p",null,'Let\'s move on to the next flow - registration! Click on "Create an account",\nwhich initiates a flow similar to the one we just used:'),(0,a.kt)("img",{alt:"Registration screen of your secured app",src:(0,o.Z)("img/docs/secureapp-registration.png")}),";",(0,a.kt)("p",null,"The network trace looks familiar by now:"),(0,a.kt)("img",{alt:"Registration with network trace screen of your secured app",src:(0,o.Z)("img/docs/secureapp-registration-ntrace.png")}),";",(0,a.kt)("p",null,"If we try to sign up using a password like ",(0,a.kt)("inlineCode",{parentName:"p"},"123456"),", ORY Kratos' password policy\nwill complain:"),(0,a.kt)("img",{alt:"Registration with network trace screen of your secured app",src:(0,o.Z)("img/docs/secureapp-registration-pwpolicy.png")}),";",(0,a.kt)("p",null,"The error message is coming directly from ORY Kratos' API:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ curl http://127.0.0.1:4434/self-service/browser/flows/requests/registration?request=<request-id>\n{\n    "id": "79349cbd-c785-476a-8db8-d0d71c5b003c",\n    "expires_at": "2020-01-20T21:17:00.5077381Z",\n    "issued_at": "2020-01-20T21:07:00.5077527Z",\n    "request_url": "http://127.0.0.1:4455/auth/browser/registration",\n    "methods": {\n        "password": {\n            "method": "password",\n            "config": {\n                "action": "http://127.0.0.1:4455/.ory/kratos/public/auth/browser/methods/password/registration?request=79349cbd-c785-476a-8db8-d0d71c5b003c",\n                "method": "POST",\n                "fields": [\n                    {\n                        "name": "csrf_token",\n                        "type": "hidden",\n                        "required": true,\n                        "value": "+ZQ8x5cVgdtt4xtPIRJXQPKMVU5c/S2Mj2MuudP32vsMME0g26oQnV/H/brcNvBjkJq1XoF3UcnUFPzcr6Eq4Q=="\n                    },\n                    {\n                        "name": "password",\n                        "type": "password",\n                        "required": true\n                    },\n                    {\n                        "name": "traits.email",\n                        "type": "text",\n                        "value": "hello@ory.sh"\n                    },\n                    {\n                        "name": "traits.full_name",\n                        "type": "text"\n                    }\n                ]\n            }\n        }\n    }\n}\n')),(0,a.kt)("p",null,"Setting a password that doesn't violate these policies, we will be immediately\nredirected to the Dashboard:"),(0,a.kt)("img",{alt:"SecureApp Dashboard",src:(0,o.Z)("img/docs/secureapp-dashboard.png")}),";",(0,a.kt)("p",null,'By using "logout" you will be redirected to the log in screen again an will be\nable to use the credentials just set up to log in!'),(0,a.kt)("h3",{id:"understanding-how-login-and-registration-works"},"Understanding how Login and Registration works"),(0,a.kt)("p",null,"Head over to the ",(0,a.kt)("a",{parentName:"p",href:"/kratos/docs/v0.1/self-service/flows/index"},"Self-Service Flows Chapter")," for\na in-depth explanation of how the individual flows work."),(0,a.kt)("h3",{id:"email-verification"},"Email Verification"),(0,a.kt)("p",null,"As you've signed up, an email was sent to the email address you used. Because\nthe quickstart uses a fake SMTP server, the email did not arrive in your inbox.\nYou can retrieve the email however by opening the MailSlurper UI at\n",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:4436"},"127.0.0.1:4436"),"."),(0,a.kt)("p",null,"You should see something like this:"),(0,a.kt)("img",{alt:"User Email Verification",src:(0,o.Z)("img/docs/mailslurper-quickstart.png")}),";",(0,a.kt)("p",null,"If not, hard refresh the tab or click on the home icon in the menu bar."),(0,a.kt)("p",null,"Next, click the verification link. You will end up at the dashboard, with a\nverified E-Mail Address (check the ",(0,a.kt)("inlineCode",{parentName:"p"},"verified")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"verified_at")," field in the\nJSON Payload):"),(0,a.kt)("img",{alt:"SecureApp Dashboard",src:(0,o.Z)("img/docs/secureapp-verified-dashboard.png")}),";",(0,a.kt)("p",null,"To re-request the verification email, fill out the form at\n",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:4455/verify"},"127.0.0.1:4455/verify"),"."),(0,a.kt)("h4",{id:"configuration-used"},"Configuration Used"),(0,a.kt)("p",null,"You can find all configuration files for this quickstart guide in\n",(0,a.kt)("inlineCode",{parentName:"p"},"./contrib/quickstart")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"./quickstart.yml"),". To understand what each of those\nindividual configuration files are doing, you must consult the other chapters of\nthis documentation."),(0,a.kt)("p",null,"In the future, this guide will support more use cases such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use GitHub to login in and sign up"),(0,a.kt)("li",{parentName:"ul"},"Use PostgreSQL / MySQL instead of SQLite")),(0,a.kt)("h2",{id:"cleaning-up-docker"},"Cleaning up Docker"),(0,a.kt)("p",null,"To clean everything up, you need to bring down the Docker Compose environment\nand remove all mounted volumes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"docker-compose -f quickstart.yml down -v\ndocker-compose -f quickstart.yml rm -f -s -v\n")))}p.isMDXComponent=!0}}]);