(window.webpackJsonp=window.webpackJsonp||[]).push([[490],{564:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),o=(n(0),n(572)),i=n(573),s={title:"Installation and Setup",id:"configure-deploy"},l={unversionedId:"configure-deploy",id:"version-v1.4/configure-deploy",isDocsHomePage:!1,title:"Installation and Setup",description:"The goal of this chapter is to introduce you to a fully functional set up that",source:"@site/versioned_docs/version-v1.4/configure-deploy.mdx",sourceDirName:".",slug:"/configure-deploy",permalink:"/hydra/docs/v1.4/configure-deploy",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.4/configure-deploy.mdx",version:"v1.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1596803643,formattedLastUpdatedAt:"8/7/2020",frontMatter:{title:"Installation and Setup",id:"configure-deploy"},sidebar:"version-v1.4/docs",previous:{title:"OAuth 2.0 Case Study",permalink:"/hydra/docs/v1.4/case-study"},next:{title:"Database Setup and Configuration",permalink:"/hydra/docs/v1.4/dependencies-environment"}},c=[{value:"Create a Network",id:"create-a-network",children:[]},{value:"Deploy PostgreSQL",id:"deploy-postgresql",children:[]},{value:"Deploy ORY Hydra",id:"deploy-ory-hydra",children:[]},{value:"Deploy Login &amp; Consent App",id:"deploy-login--consent-app",children:[]},{value:"Perform OAuth 2.0 Flow",id:"perform-oauth-20-flow",children:[]}],d={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The goal of this chapter is to introduce you to a fully functional set up that\nincludes ORY Hydra as well as our User Login & Consent Provider reference\nimplementation."),Object(o.b)("p",null,"The goal of this section is to familiarize you with the specifics of setting up\nORY Hydra in your environment. Before starting with this section, please check\nout the ",Object(o.b)("a",{parentName:"p",href:"5min-tutorial"},"tutorial"),". It will teach you the most important\nflows and settings for Hydra."),Object(o.b)("p",null,"This guide will:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Download and run a PostgreSQL container in Docker."),Object(o.b)("li",{parentName:"ol"},"Download and run ORY Hydra in Docker."),Object(o.b)("li",{parentName:"ol"},"Download and run our reference User Login & Consent Provider."),Object(o.b)("li",{parentName:"ol"},"Create an OAuth 2.0 Client to perform the OAuth 2.0 Authorize Code Flow."),Object(o.b)("li",{parentName:"ol"},"Perform the OAuth 2.0 Authorize Code flow.")),Object(o.b)("p",null,"Before starting with this guide, please install the most recent version of\n",Object(o.b)("a",{parentName:"p",href:"https://www.docker.com/community-edition#/download"},"Docker"),". While docker is\nnot required for running ORY Hydra, we recommend using it for this tutorial as\nit will greatly reduce the complexity of setting up a database on your system\nwithout virtualization, installing Go, and compiling ORY Hydra."),Object(o.b)("h2",{id:"create-a-network"},"Create a Network"),Object(o.b)("p",null,"Before we can start, a network must be created which we will attach all our\nDocker containers to. That way, the containers can talk to one another."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ docker network create hydraguide\n")),Object(o.b)("h2",{id:"deploy-postgresql"},"Deploy PostgreSQL"),Object(o.b)("p",null,"For the purpose of this tutorial, we will use PostgreSQL as a database. As you\nprobably already know, don't run databases in Docker in production! For the sake\nof this tutorial however, let's use Docker to quickly deploy the database."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ docker run \\\n  --network hydraguide \\\n  --name ory-hydra-example--postgres \\\n  -e POSTGRES_USER=hydra \\\n  -e POSTGRES_PASSWORD=secret \\\n  -e POSTGRES_DB=hydra \\\n  -d postgres:9.6\n")),Object(o.b)("p",null,"This command wil start a postgres instance with name\n",Object(o.b)("inlineCode",{parentName:"p"},"ory-hydra-example--postgres"),", set up a database called ",Object(o.b)("inlineCode",{parentName:"p"},"hydra")," and create a\nuser ",Object(o.b)("inlineCode",{parentName:"p"},"hydra")," with password ",Object(o.b)("inlineCode",{parentName:"p"},"secret"),"."),Object(o.b)("h2",{id:"deploy-ory-hydra"},"Deploy ORY Hydra"),Object(o.b)("p",null,"We highly recommend using Docker to run Hydra, as installing, configuring and\nrunning Hydra is easiest with Docker. ORY Hydra is available on\n",Object(o.b)("a",{parentName:"p",href:"https://hub.docker.com/r/oryd/hydra/"},"Docker Hub"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'# The system secret can only be set against a fresh database. Key rotation is currently not supported. This\n# secret is used to encrypt the database and needs to be set to the same value every time the process (re-)starts.\n# You can use /dev/urandom to generate a secret. But make sure that the secret must be the same anytime you define it.\n# You could, for example, store the value somewhere.\n$ export SECRETS_SYSTEM=$(export LC_CTYPE=C; cat /dev/urandom | tr -dc \'a-zA-Z0-9\' | fold -w 32 | head -n 1)\n#\n# Alternatively you can obviously just set a secret:\n# $ export SECRETS_SYSTEM=this_needs_to_be_the_same_always_and_also_very_$3cuR3-._\n\n# The database url points us at the postgres instance. This could also be an ephermal in-memory database (`export DSN=memory`)\n# or a MySQL URI.\n$ export DSN=postgres://hydra:secret@ory-hydra-example--postgres:5432/hydra?sslmode=disable\n\n# Before starting, let\'s pull the latest ORY Hydra tag from docker.\n$ docker pull oryd/hydra:1.4.8\n\n# This command will show you all the environment variables that you can set. Read this carefully.\n# It is the equivalent to `hydra help serve`.\n$ docker run -it --rm --entrypoint hydra oryd/hydra:1.4.8 help serve\n\nStarts all HTTP/2 APIs and connects to a database backend.\n[...]\n\n# ORY Hydra does not do magic, it requires conscious decisions, for example running SQL migrations which is required\n# when installing a new version of ORY Hydra, or upgrading an existing installation.\n# It is the equivalent to `hydra migrate sql --yes postgres://hydra:secret@ory-hydra-example--postgres:5432/hydra?sslmode=disable`\n$ docker run -it --rm \\\n  --network hydraguide \\\n  oryd/hydra:1.4.8 \\\n  migrate sql --yes $DSN\n\nApplying `client` SQL migrations...\n[...]\nMigration successful!\n\n# Let\'s run the server (settings explained below):\n$ docker run -d \\\n  --name ory-hydra-example--hydra \\\n  --network hydraguide \\\n  -p 9000:4444 \\\n  -p 9001:4445 \\\n  -e SECRETS_SYSTEM=$SECRETS_SYSTEM \\\n  -e DSN=$DSN \\\n  -e URLS_SELF_ISSUER=https://localhost:9000/ \\\n  -e URLS_CONSENT=http://localhost:9020/consent \\\n  -e URLS_LOGIN=http://localhost:9020/login \\\n  oryd/hydra:1.4.8 serve all\n\n# And check if it\'s running:\n$ docker logs ory-hydra-example--hydra\n\ntime="2017-06-29T21:26:26Z" level=info msg="Connecting with postgres://*:*@postgres:5432/hydra?sslmode=disable"\ntime="2017-06-29T21:26:26Z" level=info msg="Connected to SQL!"\n[...]\ntime="2017-06-29T21:26:34Z" level=info msg="Setting up http server on :4444"\n')),Object(o.b)("p",null,"Let's dive into the various settings:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--network hydraguide")," connects this instance to the network and makes it\npossible to connect to the PostgreSQL database."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-p 9000:4444")," exposes ORY Hydra's public API on ",Object(o.b)("inlineCode",{parentName:"li"},"https://localhost:9000/"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-p 9001:4445")," exposes ORY Hydra's administrative API on\n",Object(o.b)("inlineCode",{parentName:"li"},"https://localhost:9001/"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-e SECRETS_SYSTEM=$SECRETS_SYSTEM")," sets the system secret environment\nvariable ",Object(o.b)("strong",{parentName:"li"},"(required)"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-e DSN=$DSN")," sets the database url environment variable ",Object(o.b)("strong",{parentName:"li"},"(required)"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-e URLS_SELF_ISSUER=https://localhost:9000/")," this value must be set to the\npublicly available URL of ORY Hydra ",Object(o.b)("strong",{parentName:"li"},"(required)"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-e URLS_CONSENT=http://localhost:9020/consent")," this sets the URL of the\nconsent provider ",Object(o.b)("strong",{parentName:"li"},"(required)"),". We will set up the service that handles\nrequests at that URL in the next sections."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-e URLS_LOGIN=http://localhost:9020/login")," this sets the URL of the login\nprovider ",Object(o.b)("strong",{parentName:"li"},"(required)"),". We will set up the service that handles requests at\nthat URL in the next sections.")),Object(o.b)("p",null,"Note: In this example we did not define a value for the optional setting\n",Object(o.b)("inlineCode",{parentName:"p"},"OAUTH2_ERROR_URL"),". This URL can be used to provide an endpoint which will\nreceive error messages from ORY Hydra that should be displayed to the end user.\nThe URL receives ",Object(o.b)("inlineCode",{parentName:"p"},"error")," and ",Object(o.b)("inlineCode",{parentName:"p"},"error_description")," parameters. If this value is\nnot set, Hydra uses the fallback endpoint ",Object(o.b)("inlineCode",{parentName:"p"},"/oauth2/fallbacks/error")," and displays\na default error message. In order to obtain a uniform UI, you might want to\ninclude such an endpoint in your login or consent provider."),Object(o.b)("p",null,"To confirm that the instance is running properly,\n",Object(o.b)("a",{parentName:"p",href:"https://localhost:9001/health/ready"},"open the health check"),". If asked, accept\nthe self signed certificate in your browser. You should simply see ",Object(o.b)("inlineCode",{parentName:"p"},"ok"),"."),Object(o.b)("p",null,"On start up, ORY Hydra is initializing some values. Let's take a look at the\nlogs:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'$ docker logs ory-hydra-example--hydra\ntime="2017-06-30T09:06:34Z" level=info msg="Connecting with postgres://*:*@postgres:5432/hydra?sslmode=disable"\ntime="2017-06-30T09:06:34Z" level=info msg="Connected to SQL!"\ntime="2017-06-30T09:06:34Z" level=info msg="Key pair for signing hydra.openid.id-token is missing. Creating new one."\ntime="2017-06-30T09:06:41Z" level=warning msg="No TLS Key / Certificate for HTTPS found. Generating self-signed certificate."\ntime="2017-06-30T09:06:41Z" level=info msg="Setting up http server on :4444"\n')),Object(o.b)("p",null,"As you can see, the following steps are performed when running ORY Hydra against\na fresh database:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"If no system secret was given (in our case we provided one), a random one is\ngenerated and emitted to the logs. Note this down, otherwise you won't be\nable to restart Hydra."),Object(o.b)("li",{parentName:"ol"},"Cryptographic keys are generated for the OpenID Connect ID Token, the consent\nchallenge and response, and TLS encryption using a self-signed certificate,\nwhich is why we need to run all commands using ",Object(o.b)("inlineCode",{parentName:"li"},"--skip-tls-verify"),".")),Object(o.b)("p",null,"ORY Hydra can be managed using the Hydra Command Line Interface (CLI), which is\nusing ORY Hydra's REST APIs. To see the available commands, run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ docker run --rm -it --entrypoint hydra oryd/hydra:1.4.8 help\nHydra is a cloud native high throughput OAuth2 and OpenID Connect provider\n\nUsage:\n  hydra [command]\n\n[...]\n")),Object(o.b)("h2",{id:"deploy-login--consent-app"},"Deploy Login & Consent App"),Object(o.b)("p",null,"The Login Provider and Consent Provider can be two separate web services. We\nprovide a\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/hydra-login-consent-node"},"reference implementation"),"\nwhich combines both features in one app. Here, we will use deploy that app using\nDocker."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ docker pull oryd/hydra-login-consent-node:v1.3.2\n$ docker run -d \\\n  --name ory-hydra-example--consent \\\n  -p 9020:3000 \\\n  --network hydraguide \\\n  -e HYDRA_ADMIN_URL=https://ory-hydra-example--hydra:4445 \\\n  -e NODE_TLS_REJECT_UNAUTHORIZED=0 \\\n  oryd/hydra-login-consent-node:v1.3.2\n\n# Let's check if it's running ok:\n$ docker logs ory-hydra-example--consent\n")),Object(o.b)("p",null,"Let's take a look at the arguments:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-p 9020:3000")," exposes this service at port 9020. If you remember, that's the\nport of the ",Object(o.b)("inlineCode",{parentName:"li"},"URLS_CONSENT")," and ",Object(o.b)("inlineCode",{parentName:"li"},"URLS_LOGIN")," value from the ORY Hydra docker\ncontainer (",Object(o.b)("inlineCode",{parentName:"li"},"URLS_CONSENT=http://localhost:9020/consent"),",\n",Object(o.b)("inlineCode",{parentName:"li"},"URLS_LOGIN=http://localhost:9020/login"),")."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"HYDRA_ADMIN_URL=http://hydra:4445")," point to the ORY Hydra Administrative API."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NODE_TLS_REJECT_UNAUTHORIZED=0")," disables TLS verification, because we are\nusing self-signed certificates.")),Object(o.b)("h2",{id:"perform-oauth-20-flow"},"Perform OAuth 2.0 Flow"),Object(o.b)("p",null,"Great! Our infrastructure is all set up! Next it's time to perform the OAuth 2.0\nAuthorize Code flow. For that purpose, the ORY Hydra CLI has a feature that sets\nup an OAuth 2.0 Consumer and an OAuth 2.0 callback URL. Typically, this would be\na third-party application that requests access to a user's resources on your\nservers - for example a Facebook App you wrote that backs up a user's photos and\nthus requires read access to the user's photos."),Object(o.b)("p",null,"Before we go ahead, the OAuth 2.0 Client that performs the request has to be set\nup. Let's call the client ",Object(o.b)("inlineCode",{parentName:"p"},"facebook-photo-backup"),". We have to specify which\nOAuth 2.0 Grant Types, OAuth 2.0 Scope, OAuth 2.0 Response Types, and Callback\nURLs the client may request:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ docker run --rm -it \\\n  -e HYDRA_ADMIN_URL=https://ory-hydra-example--hydra:4445 \\\n  --network hydraguide \\\n  oryd/hydra:1.4.8 \\\n  clients create --skip-tls-verify \\\n    --id facebook-photo-backup \\\n    --secret some-secret \\\n    --grant-types authorization_code,refresh_token,client_credentials,implicit \\\n    --response-types token,code,id_token \\\n    --scope openid,offline,photos.read \\\n    --callbacks http://127.0.0.1:9010/callback\n\nClient facebook-photo-backup\nClient Secret: some-secret\n")),Object(o.b)("p",null,"Let's dive into some of the arguments:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--skip-tls-verify")," is supported by all management commands\n(create/delete/update/... OAuth 2.0 Client, JSON Web Key, ...) and tells the\nCLI to trust any certificate authority - even self-signed ones. We need this\nflag because the server uses a self-signed certificate. In production\ndeployments, you would use a certificate signed by a trusted CA."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--grant-types authorize_code,refresh_token,client_credentials,implicit")," we\nwant to be able to perform all of these OAuth 2.0 flows."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--response-types token,code,id_token")," allows us to receive authorize codes,\naccess and refresh tokens, and OpenID Connect ID Tokens."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--scope openid,offline,photos.read")," allows the client to request various\npermissions:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"openid")," allows the client to perform the OpenID Connect flow and request an\nOpenID Connect ID Token."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"offline")," allows the client to request a refresh token. Because we want to\ncontinuously backup photos, the app must be able to refresh expired access\ntokens. This scope allows that."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"photos.read")," this is an imaginary scope that is not handled by ORY Hydra\nbut serves the purpose of making it clear that we could request read access\nto a user's photos. You can obviously omit this scope or use your own scope."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--callbacks http://localhost:9010/callback")," allows the client to request this\nredirect uri.")),Object(o.b)("p",null,"Perfect, let's perform an exemplary OAuth 2.0 Authorize Code Flow! To make this\neasy, the ORY Hydra CLI provides a helper command called ",Object(o.b)("inlineCode",{parentName:"p"},"hydra token user"),".\nJust imagine this being, for example, passport.js that is generating an auth\ncode url, redirecting the browser to it, and then exchanging the authorize code\nfor an access token. The same thing happens with this command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ docker run --rm -it \\\n  --network hydraguide \\\n  -p 9010:9010 \\\n  oryd/hydra:1.4.8 \\\n  token user --skip-tls-verify \\\n    --port 9010 \\\n    --auth-url https://localhost:9000/oauth2/auth \\\n    --token-url https://ory-hydra-example--hydra:4444/oauth2/token \\\n    --client-id facebook-photo-backup \\\n    --client-secret some-secret \\\n    --scope openid,offline,photos.read\n\nSetting up callback listener on http://localhost:9010/callback\nPress ctrl + c on Linux / Windows or cmd + c on OSX to end the process.\nIf your browser does not open automatically, navigate to:\n\n        https://localhost:9010/\n")),Object(o.b)("p",null,"open the link, as prompted, in your browser, and follow the steps shown there.\nYou might encounter a screen like the following one:"),Object(o.b)("img",{alt:"Insecure connection",src:Object(i.a)("/images/docs/hydra/insecure-connection.png")}),";",Object(o.b)("p",null,"This happens because we run ORY Hydra with a self-signed TLS certificate. In\nproduction deployments, you would probably use a certificate signed by a trusted\nCA and not see this screen."),Object(o.b)("p",null,'When you see this screen, click on "Advanced" and "Add Exception" to continue.\nIn some browsers, this might work differently, but it\'s always possible to\nproceed.'),Object(o.b)("p",null,"When completed, you should land at a screen that looks like this one:"),Object(o.b)("img",{alt:"OAuth 2.0 result",src:Object(i.a)("/images/docs/hydra/install-result.png")}),";")}p.isMDXComponent=!0},572:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,b=p["".concat(i,".").concat(h)]||p[h]||u[h]||o;return n?r.a.createElement(b,s(s({ref:t},c),{},{components:n})):r.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},573:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(16),r=n(574);function o(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,s=void 0!==i&&i,l=o.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(s)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+d:d}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},574:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))}}]);