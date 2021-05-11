(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var i=n(3),a=n(8),r=(n(0),n(553)),o=n(556),c={id:"quickstart",title:"Quickstart"},s={unversionedId:"quickstart",id:"version-v0.1/quickstart",isDocsHomePage:!1,title:"Quickstart",description:"ORY Kratos has several moving parts and getting everything right from the",source:"@site/versioned_docs/version-v0.1/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/kratos/docs/v0.1/quickstart",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.1/quickstart.mdx",version:"v0.1",lastUpdatedBy:"Bengt Hagemeister",lastUpdatedAt:1617434174,formattedLastUpdatedAt:"4/3/2021",frontMatter:{id:"quickstart",title:"Quickstart"},sidebar:"version-v0.1/docs",previous:{title:"Introduction",permalink:"/kratos/docs/v0.1/"},next:{title:"Installation",permalink:"/kratos/docs/v0.1/install"}},l=[{value:"Use case: You want login and registration for your Application",id:"use-case-you-want-login-and-registration-for-your-application",children:[]},{value:"Setup",id:"setup",children:[{value:"Clone ORY Kratos and run it in Docker",id:"clone-ory-kratos-and-run-it-in-docker",children:[]},{value:"Network Architecture",id:"network-architecture",children:[]}]},{value:"Perform registration, logout, login",id:"perform-registration-logout-login",children:[{value:"Understanding how Login and Registration works",id:"understanding-how-login-and-registration-works",children:[]},{value:"Email Verification",id:"email-verification",children:[]}]},{value:"Cleaning up Docker",id:"cleaning-up-docker",children:[]}],b={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"ORY Kratos has several moving parts and getting everything right from the\nbeginning can be challenging. This getting started guide will help you install\nORY Kratos and some additional dependencies so that you can see how ORY Kratos\nworks."),Object(r.b)("p",null,"Please be aware that this guide is not a replacement for studying the docs. You\nmust understand core concepts and APIs to use ORY Kratos productively. This is\nmerely a guide to get you set up with some examples."),Object(r.b)("h2",{id:"use-case-you-want-login-and-registration-for-your-application"},"Use case: You want login and registration for your Application"),Object(r.b)("p",null,"This section gives you some context on what we want to achieve and what tools we\nneed for that. You will also learn about the network set up we picked for this\nguide."),Object(r.b)("p",null,"This quickstart guide operates on the assumption that we are writing a NodeJS\napp called ",Object(r.b)("strong",{parentName:"p"},"SecureApp"),". This app is using nothing fancy - some ExpressJS and a\nbit of HTML Templating using Handlebars. We do want to use TypeScript but only\nbecause it's more readable - not because we're doing anything out of the\nordinary!"),Object(r.b)("p",null,"You could pick any technology here, of course. This works with Swift, ReactJS,\nor Angular (client side) as well as with PHP, Ruby, Python, Java (server side) -\nyou name it! We picked NodeJS + TypeScript because we believe it is the easiest\nto understand, and because JavaScript and NodeJS are universally understood and\neasy to install."),Object(r.b)("p",null,"We don't really know what SecureApp should do one day. But we do know that it\nwill have some type of dashboard and that it needs users, therefore we need:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Login"),Object(r.b)("li",{parentName:"ul"},"Logout"),Object(r.b)("li",{parentName:"ul"},"Registration"),Object(r.b)("li",{parentName:"ul"},'Profile management ("update first name", "update avatar ...")'),Object(r.b)("li",{parentName:"ul"},'Credentials Management ("add a new recovery email", "change password", "...")'),Object(r.b)("li",{parentName:"ul"},'Account Recovery ("password reset")'),Object(r.b)("li",{parentName:"ul"},"Two Factor Authentication with Google Authenticator"),Object(r.b)("li",{parentName:"ul"},'"Sign in with Google" and "Sign in with GitHub"')),Object(r.b)("p",null,"and of course:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'A dashboard that shows "Hello {{ firstName }} {{ lastName }}, your birthday is\non {{ birthday }}!". It is only visible when the user is signed in!')),Object(r.b)("h2",{id:"setup"},"Setup"),Object(r.b)("p",null,"As you might already know, ORY Kratos is API-only. It does not have a UI or HTML\nTemplating Engine. We will implement all the user-facing UIs (dashboard, login,\nregistration, ...) in our NodeJS SecureApp!"),Object(r.b)("p",null,"To ensure that no one can access the dashboard without prior authentication\n(login), we will use a reverse proxy\n(",Object(r.b)("a",{parentName:"p",href:"https://github.com/ory/oathkeeper"},"ORY Oathkeeper"),") to deny all\nunauthenticated traffic to ",Object(r.b)("inlineCode",{parentName:"p"},"http://secure-app/dashboard")," and redirect the user\nto the login page at ",Object(r.b)("inlineCode",{parentName:"p"},"http://secure-app/auth/login"),". Further, we will configure\naccess to ",Object(r.b)("inlineCode",{parentName:"p"},"http://secure-app/auth/login")," in such a way that access only works if\none is not yet authenticated."),Object(r.b)("p",null,"ORY Kratos does not ship with an administrative user interface. You must\nimplement that yourself or choose the ORY Cloud offering (to be announced). In\nthis quickstart, we will use ORY Kratos CLI (Command Line Interface) to interact\nwith ORY Kratos' Administrative APIs."),Object(r.b)("p",null,"The quickstart also comes with ",Object(r.b)("a",{parentName:"p",href:"https://mailslurper.com"},"MailSlurper"),", a mock\nSMTP server the demo uses to show how e.g. email verification works."),Object(r.b)("h3",{id:"clone-ory-kratos-and-run-it-in-docker"},"Clone ORY Kratos and run it in Docker"),Object(r.b)("p",null,"To get this example working, you will need Git and\n",Object(r.b)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker, and Docker Compose")," installed on\nyour system. No other dependencies are required. Let's clone ORY Kratos and run\n",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"git clone https://github.com/ory/kratos.git\n# or if you have git+ssh set up:\n#  git clone git@github.com:ory/kratos.git\ncd kratos\ngit checkout v0.1.1-alpha.1\nmake quickstart\n\n# or if you don't have make installed:\ndocker-compose -f quickstart.yml up --build --force-recreate\n")),Object(r.b)("p",null,"This might take a minute or two. Once the output slows down and logs indicate a\nhealthy system you're ready to roll! A healthy system will show something along\nthe lines of (the order of messages might be reversed):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'kratos_1                      | time="2020-01-20T14:52:13Z" level=info msg="Starting the admin httpd on: 0.0.0.0:4434"\nkratos_1                      | time="2020-01-20T14:52:13Z" level=info msg="Starting the public httpd on: 0.0.0.0:4433"\n\noathkeeper_1                  | {"level":"info","msg":"TLS has not been configured for api, skipping","time":"2020-01-20T09:22:09Z"}\noathkeeper_1                  | {"level":"info","msg":"Listening on http://:4456","time":"2020-01-20T09:22:09Z"}\noathkeeper_1                  | {"level":"info","msg":"TLS has not been configured for proxy, skipping","time":"2020-01-20T09:22:09Z"}\noathkeeper_1                  | {"level":"info","msg":"Listening on http://:4455","time":"2020-01-20T09:22:09Z"}\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"There are two important factors to get a fully functional system:"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"You need to make sure that ports ",Object(r.b)("inlineCode",{parentName:"li"},"4435"),", ",Object(r.b)("inlineCode",{parentName:"li"},"4455"),", ",Object(r.b)("inlineCode",{parentName:"li"},"4456"),", ",Object(r.b)("inlineCode",{parentName:"li"},"4433"),", ",Object(r.b)("inlineCode",{parentName:"li"},"4434"),",\n",Object(r.b)("inlineCode",{parentName:"li"},"4436")," >\n",Object(r.b)("a",{parentName:"li",href:"https://serverfault.com/questions/309052/check-if-port-is-open-or-closed-on-a-linux-server"},"are free"),"."),Object(r.b)("li",{parentName:"ul"},"Make sure to always use ",Object(r.b)("inlineCode",{parentName:"li"},"127.0.0.1")," as the hostname, never use ",Object(r.b)("inlineCode",{parentName:"li"},"localhost"),"!\nThis is important because browsers treat these two as separate domains and\nwill therefore have issues with setting and using the right cookies."))),Object(r.b)("p",null,"You might notice that no database is being used in this example. ORY Kratos\nsupports SQLite, PostgreSQL, MySQL, and CockroachDB as database backends. For\nthe quickstart, we're mounting a persistent volume to store the SQLite database\nin. Future guides will explain how to set up a production system!"),Object(r.b)("h4",{id:"mitigating-docker-errors"},"Mitigating Docker Errors"),Object(r.b)("p",null,"If you encounter build errors (e.g. network timeout), make sure that the network\nis running correctly and run ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose -f quickstart.yml up --build"),"\nagain. If the problem persists, feel free to\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/new/choose"},"open an issue"),"."),Object(r.b)("h3",{id:"network-architecture"},"Network Architecture"),Object(r.b)("p",null,"This demo makes use of several services / Docker Images:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/ory/kratos"},"ORY Kratos")),Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("strong",{parentName:"li"},"SecureApp")," - an\n",Object(r.b)("a",{parentName:"li",href:"http://github.com/ory/kratos-selfservice-ui-node"},"example application written in NodeJS"),"\nthat implements the login, registration, logout, ..., and dashboard screen."),Object(r.b)("li",{parentName:"ol"},"A reverse proxy (",Object(r.b)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper"},"ORY Oathkeeper"),") to\nprotect the ",Object(r.b)("strong",{parentName:"li"},"SecureApp"),"."),Object(r.b)("li",{parentName:"ol"},"An SMTP server with which ORY Kratos can send E-Mails with. We will use\n",Object(r.b)("a",{parentName:"li",href:"https://github.com/mailhog/MailHog"},"MailHog"),", a minimalistic SMTP throaway\nserver with an easy UI.")),Object(r.b)("p",null,"To better understand how everything is wired, let's take a look at the network\nconfiguration. This assumes that you have at least some understanding of how\nDocker (Compose) Networks work:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcblxuc3ViZ3JhcGggaG5bSG9zdCBOZXR3b3JrXVxuICAgIEJbQnJvd3Nlcl1cbiAgICBCLS0-fENhbiBhY2Nlc3MgVVJMcyB2aWEgMTI3LjAuMC4xOjQ0NTV8T0tQSE5cbiAgICBCLS0-fENhbiBhY2Nlc3MgVUkgdmlhIDEyNy4wLjAuMTo0NDM2fFNNVFBVSVxuICAgIE9LUEhOKFtSZXZlcnNlIFByb3h5IGV4cG9zZWQgYXQgOjQ0NTVdKVxuICAgIFNNVFBVSShbTWFpbFNsdXJwZXIgVUkgZXhwb3NlZCBhdCA6NDQzNl0pXG5lbmRcblxuc3ViZ3JhcGggZG5bXCJJbnRlcm5hbCBEb2NrZXIgTmV0d29yayAoaW50cmFuZXQpXCJdXG4gICAgT0tQSE4tLT5PT1xuICAgIFNNVFBVSS0tPlNNVFBcbiAgICBPTy0tPnxQcm94aWVzIFVSTHNzIC8ub3J5L2tyYXRvcy9wdWJsaWMvKiB0b3xPS1xuICAgIE9PLS0-fFwiUHJveGllcyAvYXV0aC9sb2dpbiwgL2F1dGgvcmVnaXN0cmF0aW9uLCAvZGFzaGJvYXJkLCAuLi4gdG9cInxTQVxuICAgIFNBLS0-fFRhbGtzIHRvfE9LXG4gICAgT0stLT58U2VuZHMgbWFpbCB2aWF8U01UUFxuICAgIE9PLS0-fFZhbGlkYXRlcyBhdXRoIHNlc3Npb25zIHVzaW5nfE9LXG5cbiAgICBPS1tPUlkgS3JhdG9zXVxuICAgIE9PW1wiUmV2ZXJzZSBQcm94eSAoT1JZIE9hdGhrZWVwZXIpXCJdXG4gICAgU0FbXCJTZWN1cmVBcHAgKE9SWSBLcmF0b3MgU2VsZlNlcnZpY2UgVUkgTm9kZSBFeGFtcGxlKVwiXVxuICAgIFNNVFBbXCJTTVRQIFNlcnZlciAoTWFpbFNsdXJwZXIpXCJdXG5lbmRcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJuZXV0cmFsIiwiZmxvd2NoYXJ0Ijp7InJhbmtTcGFjaW5nIjo2NSwibm9kZVNwYWNpbmciOjMwLCJjdXJ2ZSI6ImJhc2lzIn19fQ"},Object(r.b)("img",{parentName:"a",src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcblxuc3ViZ3JhcGggaG5bSG9zdCBOZXR3b3JrXVxuICAgIEJbQnJvd3Nlcl1cbiAgICBCLS0-fENhbiBhY2Nlc3MgVVJMcyB2aWEgMTI3LjAuMC4xOjQ0NTV8T0tQSE5cbiAgICBCLS0-fENhbiBhY2Nlc3MgVUkgdmlhIDEyNy4wLjAuMTo0NDM2fFNNVFBVSVxuICAgIE9LUEhOKFtSZXZlcnNlIFByb3h5IGV4cG9zZWQgYXQgOjQ0NTVdKVxuICAgIFNNVFBVSShbTWFpbFNsdXJwZXIgVUkgZXhwb3NlZCBhdCA6NDQzNl0pXG5lbmRcblxuc3ViZ3JhcGggZG5bXCJJbnRlcm5hbCBEb2NrZXIgTmV0d29yayAoaW50cmFuZXQpXCJdXG4gICAgT0tQSE4tLT5PT1xuICAgIFNNVFBVSS0tPlNNVFBcbiAgICBPTy0tPnxQcm94aWVzIFVSTHNzIC8ub3J5L2tyYXRvcy9wdWJsaWMvKiB0b3xPS1xuICAgIE9PLS0-fFwiUHJveGllcyAvYXV0aC9sb2dpbiwgL2F1dGgvcmVnaXN0cmF0aW9uLCAvZGFzaGJvYXJkLCAuLi4gdG9cInxTQVxuICAgIFNBLS0-fFRhbGtzIHRvfE9LXG4gICAgT0stLT58U2VuZHMgbWFpbCB2aWF8U01UUFxuICAgIE9PLS0-fFZhbGlkYXRlcyBhdXRoIHNlc3Npb25zIHVzaW5nfE9LXG5cbiAgICBPS1tPUlkgS3JhdG9zXVxuICAgIE9PW1wiUmV2ZXJzZSBQcm94eSAoT1JZIE9hdGhrZWVwZXIpXCJdXG4gICAgU0FbXCJTZWN1cmVBcHAgKE9SWSBLcmF0b3MgU2VsZlNlcnZpY2UgVUkgTm9kZSBFeGFtcGxlKVwiXVxuICAgIFNNVFBbXCJTTVRQIFNlcnZlciAoTWFpbFNsdXJwZXIpXCJdXG5lbmRcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJuZXV0cmFsIiwiZmxvd2NoYXJ0Ijp7InJhbmtTcGFjaW5nIjo2NSwibm9kZVNwYWNpbmciOjMwLCJjdXJ2ZSI6ImJhc2lzIn19fQ",alt:"User Login and Registration Network Topology"}))),Object(r.b)("p",null,"As you can see, most requests are proxied through the Reverse Proxy\n(",Object(r.b)("a",{parentName:"p",href:"https://github.com/ory/oathkeeper"},"ORY Oathkeeper"),"). The ",Object(r.b)("inlineCode",{parentName:"p"},"quickstart.yml")," file\nalso defines additional ports such as ",Object(r.b)("inlineCode",{parentName:"p"},"4434"),", ",Object(r.b)("inlineCode",{parentName:"p"},"4456"),", and others. These ports\nare only there for debugging and playing around with and are not actually\nrequired for the demo to work."),Object(r.b)("p",null,"The next diagram shows how we've configured the routes in our Reverse Proxy\n(",Object(r.b)("a",{parentName:"p",href:"https://github.com/ory/oathkeeper"},"ORY Oathkeeper"),"):"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcblxuc3ViZ3JhcGggcGlbUHVibGljIEludGVybmV0XVxuICAgIEJbQnJvd3Nlcl1cbmVuZFxuXG5zdWJncmFwaCB2cGNbVlBDIC8gQ2xvdWQgLyBEb2NrZXIgTmV0d29ya11cbnN1YmdyYXBoIFwiRGVtaWxpdGFyaXplZCBab25lIC8gRE1aXCJcbiAgICBPS1tPUlkgT2F0aGtlZXBlciA6NDQ1NV1cbiAgICBCIC0tPiBPS1xuZW5kXG5cbiAgICBPSyAtLT58XCJGb3J3YXJkcyB7LywvZGFzaGJvYXJkfSB0b1wifCBTQURcbiAgICBPSyAtLT58XCJGb3J3YXJkcyAvYXV0aC9sb2dvdXQgdG9cInwgU0FMVVxuICAgIE9LIC0tPnxcIkZvcndhcmRzIC9hdXRoL2xvZ2luIHRvXCJ8IFNBTElcbiAgICBPSyAtLT58XCJGb3J3YXJkcyAvYXV0aC9yZWdpc3RyYXRpb24gdG9cInwgU0FSXG4gICAgT0sgLS0-fFwiRm9yd2FyZHMgL2F1dGgvKiB0b1wifCBTQUFcbiAgICBPSyAtLT58XCJGb3J3YXJkcyAvLm9yeS9rcmF0b3MvcHVibGljLyogdG9cInwgS1BcblxuICAgIHN1YmdyYXBoIFwiUHJpdmF0ZSBTdWJuZXQgLyBJbnRyYW5ldFwiXG4gICAgS1sgT1JZIEtyYXRvcyBdXG5cbiAgICBLUChbIE9SWSBLcmF0b3MgUHVibGljIEFQSSBdKVxuICAgIEtBKFsgT1JZIEtyYXRvcyBBZG1pbiBBUEkgXSlcbiAgICBTQSAtLT4gS0FcbiAgICBLQSAtLmJlbG9uZ3MgdG8uLT4gS1xuICAgIEtQIC0uYmVsb25ncyB0by4tPiBLXG5cbiAgICBzdWJncmFwaCBzYVtcIlNlY3VyZUFwcCAvIGtyYXRvcy1zZXJsZnNlcnZpY2UtdWktbm9kZSBFeGFtcGxlXCJdXG5cbiAgICAgICAgU0FbU2VjdXJlQXBwXVxuICAgICAgICBTQUQgLS5iZWxvbmdzIHRvLi0-IFNBXG4gICAgICAgIFNBTFUgLS5iZWxvbmdzIHRvLi0-IFNBXG4gICAgICAgIFNBTEkgLS5iZWxvbmdzIHRvLi0-IFNBXG4gICAgICAgIFNBUiAtLmJlbG9uZ3MgdG8uLT4gU0FcbiAgICAgICAgU0FBIC0uYmVsb25ncyB0by4tPiBTQVxuXG4gICAgICAgIHN1YmdyYXBoIFwiSGFzIGFjdGl2ZSBsb2dpbiBzZXNzaW9uXCJcbiAgICAgICAgICAgIFNBRChbUm91dGUgL2Rhc2hib2FyZF0pXG4gICAgICAgICAgICBTQUxVKFtSb3V0ZSAvYXV0aC9sb2dvdXRdKVxuICAgICAgICBlbmRcblxuICAgICAgICBzdWJncmFwaCBcIk5vIGFjdGl2ZSBsb2dpbiBzZXNzaW9uXCJcbiAgICAgICAgICAgIFNBTEkoW1JvdXRlIC9hdXRoL2xvZ2luXSkgXG4gICAgICAgICAgICBTQVIoW1JvdXRlIC9hdXRoL3JlZ2lzdHJhdGlvbl0pIFxuICAgICAgICAgICAgU0FBKFtSb3V0ZSAvYXV0aC8uLi5dKVxuICAgICAgICBlbmRcbiAgICBlbmRcbiAgICBlbmRcblxuZW5kXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoibmV1dHJhbCIsImZsb3djaGFydCI6eyJyYW5rU3BhY2luZyI6NzAsIm5vZGVTcGFjaW5nIjozMCwiY3VydmUiOiJiYXNpcyJ9fX0"},Object(r.b)("img",{parentName:"a",src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcblxuc3ViZ3JhcGggcGlbUHVibGljIEludGVybmV0XVxuICAgIEJbQnJvd3Nlcl1cbmVuZFxuXG5zdWJncmFwaCB2cGNbVlBDIC8gQ2xvdWQgLyBEb2NrZXIgTmV0d29ya11cbnN1YmdyYXBoIFwiRGVtaWxpdGFyaXplZCBab25lIC8gRE1aXCJcbiAgICBPS1tPUlkgT2F0aGtlZXBlciA6NDQ1NV1cbiAgICBCIC0tPiBPS1xuZW5kXG5cbiAgICBPSyAtLT58XCJGb3J3YXJkcyB7LywvZGFzaGJvYXJkfSB0b1wifCBTQURcbiAgICBPSyAtLT58XCJGb3J3YXJkcyAvYXV0aC9sb2dvdXQgdG9cInwgU0FMVVxuICAgIE9LIC0tPnxcIkZvcndhcmRzIC9hdXRoL2xvZ2luIHRvXCJ8IFNBTElcbiAgICBPSyAtLT58XCJGb3J3YXJkcyAvYXV0aC9yZWdpc3RyYXRpb24gdG9cInwgU0FSXG4gICAgT0sgLS0-fFwiRm9yd2FyZHMgL2F1dGgvKiB0b1wifCBTQUFcbiAgICBPSyAtLT58XCJGb3J3YXJkcyAvLm9yeS9rcmF0b3MvcHVibGljLyogdG9cInwgS1BcblxuICAgIHN1YmdyYXBoIFwiUHJpdmF0ZSBTdWJuZXQgLyBJbnRyYW5ldFwiXG4gICAgS1sgT1JZIEtyYXRvcyBdXG5cbiAgICBLUChbIE9SWSBLcmF0b3MgUHVibGljIEFQSSBdKVxuICAgIEtBKFsgT1JZIEtyYXRvcyBBZG1pbiBBUEkgXSlcbiAgICBTQSAtLT4gS0FcbiAgICBLQSAtLmJlbG9uZ3MgdG8uLT4gS1xuICAgIEtQIC0uYmVsb25ncyB0by4tPiBLXG5cbiAgICBzdWJncmFwaCBzYVtcIlNlY3VyZUFwcCAvIGtyYXRvcy1zZXJsZnNlcnZpY2UtdWktbm9kZSBFeGFtcGxlXCJdXG5cbiAgICAgICAgU0FbU2VjdXJlQXBwXVxuICAgICAgICBTQUQgLS5iZWxvbmdzIHRvLi0-IFNBXG4gICAgICAgIFNBTFUgLS5iZWxvbmdzIHRvLi0-IFNBXG4gICAgICAgIFNBTEkgLS5iZWxvbmdzIHRvLi0-IFNBXG4gICAgICAgIFNBUiAtLmJlbG9uZ3MgdG8uLT4gU0FcbiAgICAgICAgU0FBIC0uYmVsb25ncyB0by4tPiBTQVxuXG4gICAgICAgIHN1YmdyYXBoIFwiSGFzIGFjdGl2ZSBsb2dpbiBzZXNzaW9uXCJcbiAgICAgICAgICAgIFNBRChbUm91dGUgL2Rhc2hib2FyZF0pXG4gICAgICAgICAgICBTQUxVKFtSb3V0ZSAvYXV0aC9sb2dvdXRdKVxuICAgICAgICBlbmRcblxuICAgICAgICBzdWJncmFwaCBcIk5vIGFjdGl2ZSBsb2dpbiBzZXNzaW9uXCJcbiAgICAgICAgICAgIFNBTEkoW1JvdXRlIC9hdXRoL2xvZ2luXSkgXG4gICAgICAgICAgICBTQVIoW1JvdXRlIC9hdXRoL3JlZ2lzdHJhdGlvbl0pIFxuICAgICAgICAgICAgU0FBKFtSb3V0ZSAvYXV0aC8uLi5dKVxuICAgICAgICBlbmRcbiAgICBlbmRcbiAgICBlbmRcblxuZW5kXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoibmV1dHJhbCIsImZsb3djaGFydCI6eyJyYW5rU3BhY2luZyI6NzAsIm5vZGVTcGFjaW5nIjozMCwiY3VydmUiOiJiYXNpcyJ9fX0",alt:"User Login and Registration Routes"}))),Object(r.b)("p",null,"You might notice that we're also proxying requests to ORY Kratos' Public API. We\nare doing this because that way all requests are going to and coming from the\nsame hostname. This avoids common cross-domain issues with cookies."),Object(r.b)("h2",{id:"perform-registration-logout-login"},"Perform registration, logout, login"),Object(r.b)("p",null,"Enough theory, it's time to get this thing going! Let's start by trying to open\nthe dashboard - ",Object(r.b)("strong",{parentName:"p"},"go to\n",Object(r.b)("a",{parentName:"strong",href:"http://127.0.0.1:4455/dashboard"},"127.0.0.1:4455/dashboard")),". You will probably\nnotice that you're ending up at the login endpoint:"),Object(r.b)("img",{alt:"Login screen of your secured app",src:Object(o.a)("img/docs/secureapp-login.png")}),";",Object(r.b)("p",null,"Looking at the network stack, you can see two redirects happening:"),Object(r.b)("img",{alt:"Network trace of your secured app",src:Object(o.a)("img/docs/secureapp-login-ntrace.png")}),";",Object(r.b)("p",null,"The first redirect from ",Object(r.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:4445/dashboard")," to\n",Object(r.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:4455/.ory/kratos/public/auth/browser/login")," is initiated by\nthe Reverse Proxy (",Object(r.b)("a",{parentName:"p",href:"https://github.com/ory/oathkeeper"},"ORY Oathkeeper"),") because\nthe browser does not have a valid authentication (login) session yet. The\nredirect points to one of ORY Kratos' APIs used for logging in browser-based\napplications. ORY Kratos does some security checks and prepares form data and\nredirects the browser to ",Object(r.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:4445/auth/login"),", appending a\n",Object(r.b)("inlineCode",{parentName:"p"},"?request=...")," query parameter. The endpoint at ",Object(r.b)("inlineCode",{parentName:"p"},"/auth/login")," (which belongs to\nour SecureApp) then fetches data important for rendering the forms from ORY\nKratos' Admin API:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ curl http://127.0.0.1:4434/self-service/browser/flows/requests/login?request=<request-id>\n{\n    "id": "27aa98bc-a074-418f-96fa-8b8146050209",\n    "expires_at": "2020-01-20T21:10:12.7365393Z",\n    "issued_at": "2020-01-20T21:00:12.7365532Z",\n    "request_url": "http://127.0.0.1:4455/auth/browser/login",\n    "methods": {\n        "password": {\n            "method": "password",\n            "config": {\n                "action": "http://127.0.0.1:4455/.ory/kratos/public/auth/browser/methods/password/login?request=27aa98bc-a074-418f-96fa-8b8146050209",\n                "method": "POST",\n                "fields": [\n                    {\n                        "name": "csrf_token",\n                        "type": "hidden",\n                        "required": true,\n                        "value": "Ii8iIEdnn12vVQ2vyz2YaHjmXMUK5eSQgw9pgENGxPjXi1PHC9gOG51x61o2GT9LGvC81ddvmNXYeLvlPxA04g=="\n                    },\n                    {\n                        "name": "identifier",\n                        "type": "text",\n                        "required": true\n                    },\n                    {\n                        "name": "password",\n                        "type": "password",\n                        "required": true\n                    }\n                ]\n            }\n        }\n    }\n}\n')),Object(r.b)("p",null,"This data is then rendered as an HTML form. This flow also works with Single\nPage Apps (SPA) and Frameworks like Angular or ReactJS. For more details about\nthe specific flows (login, registration, logout, ...), head over to the\n",Object(r.b)("a",{parentName:"p",href:"/kratos/docs/v0.1/concepts/index"},"concept")," chapter."),Object(r.b)("p",null,'Let\'s move on to the next flow - registration! Click on "Create an account",\nwhich initiates a flow similar to the one we just used:'),Object(r.b)("img",{alt:"Registration screen of your secured app",src:Object(o.a)("img/docs/secureapp-registration.png")}),";",Object(r.b)("p",null,"The network trace looks familiar by now:"),Object(r.b)("img",{alt:"Registration with network trace screen of your secured app",src:Object(o.a)("img/docs/secureapp-registration-ntrace.png")}),";",Object(r.b)("p",null,"If we try to sign up using a password like ",Object(r.b)("inlineCode",{parentName:"p"},"123456"),", ORY Kratos' password policy\nwill complain:"),Object(r.b)("img",{alt:"Registration with network trace screen of your secured app",src:Object(o.a)("img/docs/secureapp-registration-pwpolicy.png")}),";",Object(r.b)("p",null,"The error message is coming directly from ORY Kratos' API:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ curl http://127.0.0.1:4434/self-service/browser/flows/requests/registration?request=<request-id>\n{\n    "id": "79349cbd-c785-476a-8db8-d0d71c5b003c",\n    "expires_at": "2020-01-20T21:17:00.5077381Z",\n    "issued_at": "2020-01-20T21:07:00.5077527Z",\n    "request_url": "http://127.0.0.1:4455/auth/browser/registration",\n    "methods": {\n        "password": {\n            "method": "password",\n            "config": {\n                "action": "http://127.0.0.1:4455/.ory/kratos/public/auth/browser/methods/password/registration?request=79349cbd-c785-476a-8db8-d0d71c5b003c",\n                "method": "POST",\n                "fields": [\n                    {\n                        "name": "csrf_token",\n                        "type": "hidden",\n                        "required": true,\n                        "value": "+ZQ8x5cVgdtt4xtPIRJXQPKMVU5c/S2Mj2MuudP32vsMME0g26oQnV/H/brcNvBjkJq1XoF3UcnUFPzcr6Eq4Q=="\n                    },\n                    {\n                        "name": "password",\n                        "type": "password",\n                        "required": true\n                    },\n                    {\n                        "name": "traits.email",\n                        "type": "text",\n                        "value": "hello@ory.sh"\n                    },\n                    {\n                        "name": "traits.full_name",\n                        "type": "text"\n                    }\n                ]\n            }\n        }\n    }\n}\n')),Object(r.b)("p",null,"Setting a password that doesn't violate these policies, we will be immediately\nredirected to the Dashboard:"),Object(r.b)("img",{alt:"SecureApp Dashboard",src:Object(o.a)("img/docs/secureapp-dashboard.png")}),";",Object(r.b)("p",null,'By using "logout" you will be redirected to the log in screen again an will be\nable to use the credentials just set up to log in!'),Object(r.b)("h3",{id:"understanding-how-login-and-registration-works"},"Understanding how Login and Registration works"),Object(r.b)("p",null,"Head over to the ",Object(r.b)("a",{parentName:"p",href:"/kratos/docs/v0.1/self-service/flows/index"},"Self-Service Flows Chapter")," for\na in-depth explanation of how the individual flows work."),Object(r.b)("h3",{id:"email-verification"},"Email Verification"),Object(r.b)("p",null,"As you've signed up, an email was sent to the email address you used. Because\nthe quickstart uses a fake SMTP server, the email did not arrive in your inbox.\nYou can retrieve the email however by opening the MailSlurper UI at\n",Object(r.b)("a",{parentName:"p",href:"http://127.0.0.1:4436"},"127.0.0.1:4436"),"."),Object(r.b)("p",null,"You should see something like this:"),Object(r.b)("img",{alt:"User Email Verification",src:Object(o.a)("img/docs/mailslurper-quickstart.png")}),";",Object(r.b)("p",null,"If not, hard refresh the tab or click on the home icon in the menu bar."),Object(r.b)("p",null,"Next, click the verification link. You will end up at the dashboard, with a\nverified E-Mail Address (check the ",Object(r.b)("inlineCode",{parentName:"p"},"verified")," and ",Object(r.b)("inlineCode",{parentName:"p"},"verified_at")," field in the\nJSON Payload):"),Object(r.b)("img",{alt:"SecureApp Dashboard",src:Object(o.a)("img/docs/secureapp-verified-dashboard.png")}),";",Object(r.b)("p",null,"To re-request the verification email, fill out the form at\n",Object(r.b)("a",{parentName:"p",href:"http://127.0.0.1:4455/verify"},"127.0.0.1:4455/verify"),"."),Object(r.b)("h4",{id:"configuration-used"},"Configuration Used"),Object(r.b)("p",null,"You can find all configuration files for this quickstart guide in\n",Object(r.b)("inlineCode",{parentName:"p"},"./contrib/quickstart")," and ",Object(r.b)("inlineCode",{parentName:"p"},"./quickstart.yml"),". To understand what each of those\nindividual configuration files are doing, you must consult the other chapters of\nthis documentation."),Object(r.b)("p",null,"In the future, this guide will support more use cases such as:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Use GitHub to login in and sign up"),Object(r.b)("li",{parentName:"ul"},"Use PostgreSQL / MySQL instead of SQLite")),Object(r.b)("h2",{id:"cleaning-up-docker"},"Cleaning up Docker"),Object(r.b)("p",null,"To clean everything up, you need to bring down the Docker Compose environment\nand remove all mounted volumes."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"docker-compose -f quickstart.yml down -v\ndocker-compose -f quickstart.yml rm -f -s -v\n")))}u.isMDXComponent=!0},553:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),g=i,p=u["".concat(o,".").concat(g)]||u[g]||d[g]||r;return n?a.a.createElement(p,c(c({ref:t},l),{},{components:n})):a.a.createElement(p,c({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},556:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var i=n(16),a=n(560);function r(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var r=void 0===i?{}:i,o=r.forcePrependBaseUrl,c=void 0!==o&&o,s=r.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+b:b}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},560:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}))}}]);