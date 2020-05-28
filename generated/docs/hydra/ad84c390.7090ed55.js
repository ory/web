(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(9),a=(n(0),n(223)),c=n(225),i={id:"5min-tutorial",title:"5 Minute Tutorial"},s={id:"version-v1.5/5min-tutorial",title:"5 Minute Tutorial",description:"This tutorial walks you through a quick setup of ORY Hydra, a PostgreSQL",source:"@site/versioned_docs/version-v1.5/5min-tutorial.mdx",permalink:"/hydra/docs/5min-tutorial",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.5/5min-tutorial.mdx",version:"v1.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1588244570,sidebar:"version-v1.5/docs",previous:{title:"Hydra's User Login and Consent Flow",permalink:"/hydra/docs/login-consent-flow"},next:{title:"Implementing Login, Consent & Logout UI",permalink:"/hydra/docs/implementing-consent"}},l=[],p={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This tutorial walks you through a quick setup of ORY Hydra, a PostgreSQL\ninstance and an exemplary User Login & Consent App based on Docker Compose. You\nneed to have the latest ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.docker.com"}),"Docker")," and\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/compose"}),"Docker Compose")," version installed."),Object(a.b)("img",{alt:"OAuth2 Flow",src:Object(c.a)("img/docs/oauth2-flow.gif")}),";",Object(a.b)("p",null,"We will use the Docker Compose configuration in the ORY Hydra code base. Getting\nthe Hydra source code is easy:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"if you have Go 1.12+ installed: ",Object(a.b)("inlineCode",{parentName:"li"},"go get -d github.com/ory/hydra")),Object(a.b)("li",{parentName:"ul"},"if you have Git installed: ",Object(a.b)("inlineCode",{parentName:"li"},"git clone https://github.com/ory/hydra.git")),Object(a.b)("li",{parentName:"ul"},"otherwise: download the\n",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/ory-am/hydra/archive/master.zip"}),"Hydra source code"),". and\nextract it somewhere")),Object(a.b)("p",null,"Change into the directory with the Hydra source code and run the following\ncommand to start the needed containers:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker-compose -f quickstart.yml \\\n    -f quickstart-postgres.yml \\\n    up --build\nStarting hydra_postgresd_1\nStarting hydra_hydra_1\n[...]\n")),Object(a.b)("p",null,"If you prefer to use MySQL as the database backend, run this command instead:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker-compose -f quickstart.yml \\\n    -f quickstart-mysql.yml \\\n    up --build\n")),Object(a.b)("p",null,"This command makes Docker Compose start up a database server and a basic base\nORY Hydra server that uses this database. If you need more details on this,\nplease examine the ",Object(a.b)("inlineCode",{parentName:"p"},"scripts/5-min-tutorial.sh")," and ",Object(a.b)("inlineCode",{parentName:"p"},"docker-compose*.yml")," files."),Object(a.b)("p",null,"You may also extend the command above to enable distributed tracing. The tracing\nUI is exposed at ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://127.0.0.1:16686/search"}),"http://127.0.0.1:16686/search"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker-compose -f quickstart.yml \\\n    -f quickstart-postgres.yml \\\n    -f quickstart-tracing.yml \\\n    up --build\n")),Object(a.b)("p",null,"Hydra provides an endpoint for Prometheus to scrape as a target. You can run the\nfollowing command to start the needed containers, and status of Hydra is exposed\nat targets page in Prometheus\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:9090/targets"}),"http://localhost:9090/targets"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"docker-compose -f quickstart.yml \\\n  -f quickstart-prometheus.yml \\\n  up --build\n")),Object(a.b)("p",null,"Let's confirm that everything is working by creating an OAuth 2.0 Client."),Object(a.b)("p",null,"Note: The following commands run Hydra inside Docker. If you have the ORY Hydra\nCLI installed locally, you can omit\n",Object(a.b)("inlineCode",{parentName:"p"},"docker-compose -f quickstart.yml exec /hydra")," in front of each command."),Object(a.b)("p",null,"The OAuth 2.0 client uses port ",Object(a.b)("inlineCode",{parentName:"p"},"4444")," and ",Object(a.b)("inlineCode",{parentName:"p"},"4445"),". The former is ORY Hydra's\npublic endpoint, the latter its administrative endpoint. For more information\nhead over to\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"hydra/production.md"}),"Exposing Administrative and Public API Endpoints"),"."),Object(a.b)("p",null,"Let's create the OAuth 2.0 Client:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra clients create \\\n    --endpoint http://127.0.0.1:4445/ \\\n    --id my-client \\\n    --secret secret \\\n    -g client_credentials\n")),Object(a.b)("p",null,"If you get an error message about a config file not being found, you can ignore\nit for now:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'Config file not found because "Config File ".hydra" Not Found in "[/]""\nOAuth2 client my-client\n')),Object(a.b)("p",null,"Let's perform the client credentials grant:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra token client \\\n    --endpoint http://127.0.0.1:4444/ \\\n    --client-id my-client \\\n    --client-secret secret\n\nUDYMha9TwsMBejEvKfnDOXkhgkLsnmUNYVQDklT5bD8.ZNpuNRC85erbIYDjPqhMwTinlvQmNTk_UvttcLQxFJY\n")),Object(a.b)("p",null,"Let's perform token introspection on that token. Make sure to copy the token you\njust got and not the dummy value."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'$ docker-compose -f quickstart.yml exec hydra \\\n    hydra token introspect \\\n    --endpoint http://127.0.0.1:4445/ \\\n    --client-id my-client \\\n    --client-secret secret \\\n\nUDYMha9TwsMBejEvKfnDOXkhgkLsnmUNYVQDklT5bD8.ZNpuNRC85erbIYDjPqhMwTinlvQmNTk_UvttcLQxFJY\n\n{\n    "active": true,\n    "client_id": "my-client",\n    "exp": 1527078658,\n    "iat": 1527075058,\n    "iss": "http://127.0.0.1:4444/",\n    "sub": "my-client",\n    "token_type": "access_token"\n}\n')),Object(a.b)("p",null,"Next, we will perform the OAuth 2.0 Authorization Code Grant. For that, we must\nfirst create a client that is capable of performing that grant:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra clients create \\\n    --endpoint http://127.0.0.1:4445 \\\n    --id auth-code-client \\\n    --secret secret \\\n    --grant-types authorization_code,refresh_token \\\n    --response-types code,id_token \\\n    --scope openid,offline \\\n    --callbacks http://127.0.0.1:5555/callback\n")),Object(a.b)("p",null,"Note that you need to add ",Object(a.b)("inlineCode",{parentName:"p"},"--token-endpoint-auth-method none")," if your clients\nare public (such as SPA apps and native apps) because the public clients cannot\nprovide client secrets."),Object(a.b)("p",null,"The following command starts a server that serves an example web application.\nThe application will perform the OAuth 2.0 Authorization Code Flow using ORY\nHydra. The web server runs on ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://127.0.0.1:5555"}),"http://127.0.0.1:5555"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra token user \\\n    --client-id auth-code-client \\\n    --client-secret secret \\\n    --endpoint http://127.0.0.1:4444/ \\\n    --port 5555 \\\n    --scope openid,offline\n\nSetting up home route on http://127.0.0.1:4445/\nSetting up callback listener on http://127.0.0.1:4445/callback\nPress ctrl + c on Linux / Windows or cmd + c on OSX to end the process.\nIf your browser does not open automatically, navigate to:\n\n        http://127.0.0.1:5555/\n")),Object(a.b)("p",null,"Open the URL ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://127.0.0.1:5555"}),"http://127.0.0.1:5555"),", log in, and\nauthorize the application. Next, you should see at least an access token in the\nresponse. If you granted the ",Object(a.b)("inlineCode",{parentName:"p"},"offline")," scope, you will also see a refresh token.\nIf you granted the ",Object(a.b)("inlineCode",{parentName:"p"},"openid")," scope, you will get an ID Token as well."),Object(a.b)("p",null,"Great! You installed Ory Hydra, connected the CLI, created a client and\ncompleted two authentication flows! Before you continue, clean up this set up in\norder to avoid conflicts with other tutorials from this guide:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker-compose kill\n$ docker-compose rm -f\n")))}u.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,h=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(h,i(i({ref:t},l),{},{components:n})):o.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},224:function(e,t,n){"use strict";var r=n(0),o=n(52);t.a=function(){return Object(r.useContext)(o.a)}},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(226);var r=n(224);function o(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},226:function(e,t,n){"use strict";var r=n(12),o=n(25),a=n(227),c="".startsWith;r(r.P+r.F*n(228)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return c?c.call(t,r,n):t.slice(n,n+r.length)===r}})},227:function(e,t,n){var r=n(75),o=n(26);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},228:function(e,t,n){var r=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(o){}}return!0}}}]);