(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{1086:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/oauth2-flow-91331ef8391a97bddbc8154e6a1aa1fa.gif"},318:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(485)),c=n(556),i={id:"5min-tutorial",title:"5 Minute Tutorial"},s={unversionedId:"5min-tutorial",id:"version-v1.9/5min-tutorial",isDocsHomePage:!1,title:"5 Minute Tutorial",description:"This tutorial walks you through a quick setup of ORY Hydra, a PostgreSQL",source:"@site/versioned_docs/version-v1.9/5min-tutorial.mdx",slug:"/5min-tutorial",permalink:"/hydra/docs/5min-tutorial",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/5min-tutorial.mdx",version:"v1.9",lastUpdatedBy:"Vincent",lastUpdatedAt:1612511303,sidebar:"version-v1.9/docs",previous:{title:"ORY Hydra",permalink:"/hydra/docs/"},next:{title:"Installation",permalink:"/hydra/docs/install"}},l=[{value:"Quickstart Configuration",id:"quickstart-configuration",children:[]}],p={rightToc:l};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This tutorial walks you through a quick setup of ORY Hydra, a PostgreSQL\ninstance and an exemplary User Login & Consent App based on Docker Compose. You\nneed to have the latest ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.docker.com"}),"Docker")," and\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/compose"}),"Docker Compose")," version installed."),Object(o.b)("p",null,Object(o.b)("img",{alt:"OAuth2 Flow with Open Source OAuth2 Server ORY Hydra",src:n(1086).default})),Object(o.b)("p",{align:"center"},Object(o.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/tlO9p2E501A",frameborder:"0",allowfullscreen:!0})),Object(o.b)("p",null,"We will use the Docker Compose configuration in the ORY Hydra code base. Getting\nthe Hydra source code is easy:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"if you have Go 1.15+ installed: ",Object(o.b)("inlineCode",{parentName:"li"},"go get -d github.com/ory/hydra")),Object(o.b)("li",{parentName:"ul"},"if you have Git installed: ",Object(o.b)("inlineCode",{parentName:"li"},"git clone https://github.com/ory/hydra.git")),Object(o.b)("li",{parentName:"ul"},"otherwise: download the\n",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ory-am/hydra/archive/master.zip"}),"Hydra source code"),". and\nextract it somewhere")),Object(o.b)("p",null,"Change into the directory with the Hydra source code and run the following\ncommand to start the needed containers:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ docker-compose -f quickstart.yml \\\n    -f quickstart-postgres.yml \\\n    up --build\n\nStarting hydra_postgresd_1\nStarting hydra_hydra_1\n[...]\n")),Object(o.b)("p",null,"If you prefer to use MySQL as the database backend, run this command instead:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ docker-compose -f quickstart.yml \\\n    -f quickstart-mysql.yml \\\n    up --build\n")),Object(o.b)("p",null,"This command makes Docker Compose start up a database server and a basic base\nORY Hydra server that uses this database. If you need more details on this,\nplease examine the ",Object(o.b)("inlineCode",{parentName:"p"},"scripts/5-min-tutorial.sh")," and ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose*.yml")," files."),Object(o.b)("p",null,"You may also extend the command above to enable distributed tracing. The tracing\nUI is exposed at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://127.0.0.1:16686/search"}),"http://127.0.0.1:16686/search"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ docker-compose -f quickstart.yml \\\n    -f quickstart-postgres.yml \\\n    -f quickstart-tracing.yml \\\n    up --build\n")),Object(o.b)("p",null,"Hydra provides an endpoint for Prometheus to scrape as a target. You can run the\nfollowing command to start the needed containers, and status of Hydra is exposed\nat targets page in Prometheus\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:9090/targets"}),"http://localhost:9090/targets"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ docker-compose -f quickstart.yml \\\n  -f quickstart-prometheus.yml \\\n  up --build\n")),Object(o.b)("p",null,"Let's confirm that everything is working by creating an OAuth 2.0 Client."),Object(o.b)("p",null,"Note: The following commands run Hydra inside Docker. If you have the ORY Hydra\nCLI installed locally, you can omit\n",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose -f quickstart.yml exec /hydra")," in front of each command."),Object(o.b)("p",null,"The OAuth 2.0 client uses port ",Object(o.b)("inlineCode",{parentName:"p"},"4444")," and ",Object(o.b)("inlineCode",{parentName:"p"},"4445"),". The former is ORY Hydra's\npublic endpoint, the latter its administrative endpoint. For more information\nhead over to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"production"}),"Exposing Administrative and Public API Endpoints"),"."),Object(o.b)("p",null,"Let's create the OAuth 2.0 Client:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra clients create \\\n    --endpoint http://127.0.0.1:4445/ \\\n    --id my-client \\\n    --secret secret \\\n    -g client_credentials\n")),Object(o.b)("p",null,"Let's perform the client credentials grant:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra token client \\\n    --endpoint http://127.0.0.1:4444/ \\\n    --client-id my-client \\\n    --client-secret secret\n\nUDYMha9TwsMBejEvKfnDOXkhgkLsnmUNYVQDklT5bD8.ZNpuNRC85erbIYDjPqhMwTinlvQmNTk_UvttcLQxFJY\n")),Object(o.b)("p",null,"Let's perform token introspection on that token. Make sure to copy the token you\njust got and not the dummy value."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'$ docker-compose -f quickstart.yml exec hydra \\\n    hydra token introspect \\\n    --endpoint http://127.0.0.1:4445/ \\\n    UDYMha9TwsMBejEvKfnDOXkhgkLsnmUNYVQDklT5bD8.ZNpuNRC85erbIYDjPqhMwTinlvQmNTk_UvttcLQxFJY\n\n{\n    "active": true,\n    "client_id": "my-client",\n    "exp": 1527078658,\n    "iat": 1527075058,\n    "iss": "http://127.0.0.1:4444/",\n    "sub": "my-client",\n    "token_type": "access_token"\n}\n')),Object(o.b)("p",null,"Next, we will perform the OAuth 2.0 Authorization Code Grant. For that, we must\nfirst create a client that is capable of performing that grant:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra clients create \\\n    --endpoint http://127.0.0.1:4445 \\\n    --id auth-code-client \\\n    --secret secret \\\n    --grant-types authorization_code,refresh_token \\\n    --response-types code,id_token \\\n    --scope openid,offline \\\n    --callbacks http://127.0.0.1:5555/callback\n")),Object(o.b)("p",null,"Note that you need to add ",Object(o.b)("inlineCode",{parentName:"p"},"--token-endpoint-auth-method none")," if your clients\nare public (such as SPA apps and native apps) because the public clients cannot\nprovide client secrets."),Object(o.b)("p",null,"The following command starts a server that serves an example web application.\nThe application will perform the OAuth 2.0 Authorization Code Flow using ORY\nHydra. The web server runs on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://127.0.0.1:5555"}),"http://127.0.0.1:5555"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra token user \\\n    --client-id auth-code-client \\\n    --client-secret secret \\\n    --endpoint http://127.0.0.1:4444/ \\\n    --port 5555 \\\n    --scope openid,offline\n\nSetting up home route on http://127.0.0.1:5555/\nSetting up callback listener on http://127.0.0.1:5555/callback\nPress ctrl + c on Linux / Windows or cmd + c on OSX to end the process.\nIf your browser does not open automatically, navigate to:\n\n        http://127.0.0.1:5555/\n")),Object(o.b)("p",null,"Open the URL ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://127.0.0.1:5555"}),"http://127.0.0.1:5555"),", log in, and\nauthorize the application. Next, you should see at least an access token in the\nresponse. If you granted the ",Object(o.b)("inlineCode",{parentName:"p"},"offline")," scope, you will also see a refresh token.\nIf you granted the ",Object(o.b)("inlineCode",{parentName:"p"},"openid")," scope, you will get an ID Token as well."),Object(o.b)("p",null,"Great! You installed Ory Hydra, connected the CLI, created a client and\ncompleted two authentication flows! Before you continue, clean up this set up in\norder to avoid conflicts with other tutorials from this guide:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ docker-compose -f quickstart.yml kill\n$ docker-compose -f quickstart.yml rm -f -v\n")),Object(o.b)("h3",{id:"quickstart-configuration"},"Quickstart Configuration"),Object(o.b)("p",null,"In this tutorial we use a simplified configuration.",Object(o.b)("br",{parentName:"p"}),"\n","You can find it in\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/hydra/blob/master/contrib/quickstart/5-min/hydra.yml"}),Object(o.b)("inlineCode",{parentName:"a"},"contrib/quickstart/5-min/hydra.yml")),".",Object(o.b)("br",{parentName:"p"}),"\n","The configuration gets loaded in docker-compose as specified in the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/hydra/blob/master/quickstart.yml"}),Object(o.b)("inlineCode",{parentName:"a"},"quickstart.yml")),"."),Object(o.b)(c.a,{src:"https://github.com/ory/hydra/blob/master/contrib/quickstart/5-min/hydra.yml",mdxType:"CodeFromRemote"}),Object(o.b)("p",null,"Have a look at the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/hydra/docs/reference/configuration"}),"reference configuration")," for\nfurther information on all possible configuration options."))}u.isMDXComponent=!0},556:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(557),c=n.n(o),i=n(582),s=n(57),l=n.n(s),p=function(e,t){if(!e)return 0;var n=t.findIndex((function(t){return t.indexOf(e)>-1}));return-1===n?0:n};t.a=function(e){var t=e.src,n=Object(a.useState)(""),o=n[0],s=n[1];Object(a.useEffect)((function(){var n,a,r;c()(t.replace("github.com","raw.githubusercontent.com").replace("/blob/","/")).then((function(e){return e.text()})).then((n=e,a=n.startAt,r=n.endAt,function(e){var t=e.split("\n"),n=p(a,t);n>0&&(t=["// ..."].concat(t.slice(n,-1)));var o=p(r,t);return o>0&&(t=[].concat(t.slice(0,o+1),["// ..."])),t.join("\n")})).then(s).catch(console.error)}),[]);var u="language-"+function(e){var t=e.split(".").pop();switch(t){case"jsx":return"jsx";case"tsx":return"tsx";case"ts":return"typescript";case"go":return"go";case"yaml":case"yml":return"yaml";case"js":return"javascript";case"html":return"html";case"pug":return"pug";default:return t}}(t),d='title="'+function(e){var t=e.match(new RegExp("https://github.com/[^/]+/[^/]+/blob/[^/]+/(.+)","i"))||[];return t.length>=2?t[1]:e}(t)+'"';return r.a.createElement("div",{className:l.a.container},r.a.createElement(i.a,{metastring:d,className:u,children:o}))}},557:function(e,t,n){"use strict";var a=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==a)return a;throw new Error("unable to locate global object")}();e.exports=t=a.fetch,a.fetch&&(t.default=a.fetch.bind(a)),t.Headers=a.Headers,t.Request=a.Request,t.Response=a.Response}}]);