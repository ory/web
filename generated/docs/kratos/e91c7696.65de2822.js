(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{395:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(441)),i=(n(443),n(442)),s={id:"zero-trust-iap-proxy-identity-access-proxy",title:"Zero Trust with IAP Proxy"},c={unversionedId:"guides/zero-trust-iap-proxy-identity-access-proxy",id:"guides/zero-trust-iap-proxy-identity-access-proxy",isDocsHomePage:!1,title:"Zero Trust with IAP Proxy",description:"The Quickstart covers a basic set up that uses client-side",source:"@site/docs/guides/zero-trust-iap-proxy-identity-access-proxy.mdx",slug:"/guides/zero-trust-iap-proxy-identity-access-proxy",permalink:"/kratos/docs/next/guides/zero-trust-iap-proxy-identity-access-proxy",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/guides/zero-trust-iap-proxy-identity-access-proxy.mdx",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1607456241,sidebar:"docs",previous:{title:"Setting up Account Activation and E-Mail Verification",permalink:"/kratos/docs/next/guides/account-activation-email-verification"},next:{title:"Multitenancy",permalink:"/kratos/docs/next/guides/multi-tenancy-multitenant"}},l=[{value:"Running ORY Kratos and the ORY Oathkeeper Identity and Access Proxy",id:"running-ory-kratos-and-the-ory-oathkeeper-identity-and-access-proxy",children:[{value:"Network Architecture",id:"network-architecture",children:[]}]},{value:"Perform Registration, Login, and Logout",id:"perform-registration-login-and-logout",children:[]},{value:"Configuration",id:"configuration",children:[{value:"ORY Oathkeeper: Identity and Access Proxy",id:"ory-oathkeeper-identity-and-access-proxy",children:[]},{value:"ID Token Mutator",id:"id-token-mutator",children:[]},{value:"Error Handling",id:"error-handling",children:[]},{value:"Access Rules",id:"access-rules",children:[]}]},{value:"Cleaning up Docker",id:"cleaning-up-docker",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/quickstart"}),"Quickstart")," covers a basic set up that uses client-side\nrouting in ",Object(o.b)("inlineCode",{parentName:"p"},"SecureApp")," to forward requests to ORY Kratos."),Object(o.b)("p",null,"Systems that have more than a few components often use reverse proxies such as\nNginx, Envoy, or Kong to route and authorize traffic to applications. ORY Kratos\nworks very well in such environments. The purpose of this guide is to clarify\nhow to use an IAP (Identity and Access Proxy) to authorize incoming requests. In\nthis tutorial we will be using\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/oathkeeper"}),"ORY Oathkeeper")," to achieve this."),Object(o.b)("p",null,"This guide expects that you have familiarized yourself with ORY Kratos' concepts\nintroduced in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/quickstart"}),"Quickstart"),"."),Object(o.b)("p",null,"To ensure that no one can access the dashboard without prior authentication, we\nare making use of our reverse proxy\n(",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/oathkeeper"}),"ORY Oathkeeper"),") denying all\nunauthenticated traffic to ",Object(o.b)("inlineCode",{parentName:"p"},"http://secure-app/dashboard")," and redirecting the\nuser to the login page at ",Object(o.b)("inlineCode",{parentName:"p"},"http://secure-app/auth/login"),". Further, we will\nconfigure access to ",Object(o.b)("inlineCode",{parentName:"p"},"http://secure-app/auth/login")," in such a way that access\nonly works if one is not yet authenticated."),Object(o.b)("h2",{id:"running-ory-kratos-and-the-ory-oathkeeper-identity-and-access-proxy"},"Running ORY Kratos and the ORY Oathkeeper Identity and Access Proxy"),Object(o.b)("p",null,"Clone the ORY Kratos repository and fetch the latest images:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"git clone https://github.com/ory/kratos.git\ncd kratos\ngit checkout v0.5.5-alpha.1.pre.1\n\ndocker pull oryd/kratos:latest-sqlite\ndocker pull oryd/kratos-selfservice-ui-node:latest\n")),Object(o.b)("p",null,"Next, run the quickstart and add the ORY Oathkeeper config:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"docker-compose \\\n  -f quickstart.yml \\\n  -f quickstart-oathkeeper.yml \\\n  up --build --force-recreate\n")),Object(o.b)("p",null,"This might take a minute or two. Once the output slows down and logs indicate a\nhealthy system you're ready to roll! A healthy system will show something along\nthe lines of (the order of messages might be reversed):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'kratos_1      | time="2020-01-20T14:52:13Z" level=info msg="Starting the admin httpd on: 0.0.0.0:4434"\nkratos_1      | time="2020-01-20T14:52:13Z" level=info msg="Starting the public httpd on: 0.0.0.0:4433"\noathkeeper_1  | {"level":"info","msg":"TLS has not been configured for api, skipping","time":"2020-01-20T09:22:09Z"}\noathkeeper_1  | {"level":"info","msg":"Listening on http://:4456","time":"2020-01-20T09:22:09Z"}\noathkeeper_1  | {"level":"info","msg":"TLS has not been configured for proxy, skipping","time":"2020-01-20T09:22:09Z"}\noathkeeper_1  | {"level":"info","msg":"Listening on http://:4455","time":"2020-01-20T09:22:09Z"}\n')),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"There are two important factors to get a fully functional system:")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"You need to make sure that ports ",Object(o.b)("inlineCode",{parentName:"li"},"4433"),", ",Object(o.b)("inlineCode",{parentName:"li"},"4434"),", ",Object(o.b)("inlineCode",{parentName:"li"},"4436"),", ",Object(o.b)("inlineCode",{parentName:"li"},"4455"),", and\n",Object(o.b)("inlineCode",{parentName:"li"},"4456"),"\xa0",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://serverfault.com/questions/309052/check-if-port-is-open-or-closed-on-a-linux-server"}),"are free"),"."),Object(o.b)("li",{parentName:"ul"},"Make sure to always use ",Object(o.b)("inlineCode",{parentName:"li"},"127.0.0.1")," as the hostname; never use ",Object(o.b)("inlineCode",{parentName:"li"},"localhost"),"!\nThis is important because browsers treat these two as separate domains and\nwill therefore have issues with setting and using the right cookies.")))),Object(o.b)("h3",{id:"network-architecture"},"Network Architecture"),Object(o.b)("p",null,"This demo makes use of several services:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ory/kratos"}),"ORY Kratos"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Public ("Browser") API (port 4433)'),Object(o.b)("li",{parentName:"ul"},"Admin API (port 4434) - This is made public only so we can test via the CLI.")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://github.com/ory/kratos-selfservice-ui-node"}),"SecureApp"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An example application written in NodeJS that implements the login,\nregistration, logout, dashboard, and other UIs. Because we are accessing this\nvia a proxy, its port (4435) is not publicly exposed.")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper"}),"ORY Oathkeeper"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Reverse proxy (port 4455) - a reverse proxy to protect the ",Object(o.b)("strong",{parentName:"li"},"SecureApp"),"."),Object(o.b)("li",{parentName:"ul"},"API (port 4456) - Oathkeeper's API. This is made public only so we can test\nvia the CLI.")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/mailslurper"}),"MailSlurper"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Public (port 4436) - a development SMTP server with which ORY Kratos sends\nemails.")),Object(o.b)("p",null,"To better understand the application architecture, let's take a look at the\nnetwork configuration. This assumes that you have at least some understanding of\nhow Docker networks work:"),Object(o.b)(i.a,{chart:'\ngraph TD\nsubgraph hn[Host Network]\n    B[Browser]\n    B--\x3e|Can access URLs via 127.0.0.1:4455|OKPHN\n    B--\x3e|Can access UI via 127.0.0.1:4436|SMTPUI\n    OKPHN([Reverse Proxy exposed at :4455])\n    SMTPUI([MailSlurper UI exposed at :4436])\nend\nsubgraph dn["Internal Docker Network (intranet)"]\n    OKPHN--\x3eOO\n    SMTPUI--\x3eSMTP\n    OO--\x3e|Proxies URLss /.ory/kratos/public/* to|OK\n    OO--\x3e|"Proxies /auth/login, /auth/registration, /dashboard, ... to"|SA\n    SA--\x3e|Talks to|OK\n    OK--\x3e|Sends mail via|SMTP\n    OO--\x3e|Validates auth sessions using|OK\n    OK[ORY Kratos]\n    OO["Reverse Proxy (ORY Oathkeeper)"]\n    SA["SecureApp (ORY Kratos SelfService UI Node Example)"]\n    SMTP["SMTP Server (MailSlurper)"]\nend\n',mdxType:"Mermaid"}),Object(o.b)("p",null,"As you can see, all requests except for our demo mail server are proxied through\nORY Oathkeeper."),Object(o.b)("p",null,"The next diagram shows how we've configured the routes in ORY Oathkeeper:"),Object(o.b)(i.a,{chart:'\ngraph TD\nsubgraph pi[Public Internet]\n    B[Browser]\nend\nsubgraph vpc[VPC / Cloud / Docker Network]\nsubgraph "Demilitarized Zone / DMZ"\n    OK[ORY Oathkeeper :4455]\n    B --\x3e OK\nend\n    OK --\x3e|"Forwards {/,/dashboard} to"| SAD\n    OK --\x3e|"Forwards /auth/logout to"| SALU\n    OK --\x3e|"Forwards /auth/login to"| SALI\n    OK --\x3e|"Forwards /auth/registration to"| SAR\n    OK --\x3e|"Forwards /auth/* to"| SAA\n    OK --\x3e|"Forwards /.ory/kratos/public/* to"| KP\n    subgraph "Private Subnet / Intranet"\n    K[ ORY Kratos ]\n    KP([ ORY Kratos Public API ])\n    KA([ ORY Kratos Admin API ])\n    SA --\x3e KA\n    KA -.belongs to.-> K\n    KP -.belongs to.-> K\n    subgraph sa["SecureApp / kratos-selfservice-ui-node Example"]\n        SA[SecureApp]\n        SAD -.belongs to.-> SA\n        SALU -.belongs to.-> SA\n        SALI -.belongs to.-> SA\n        SAR -.belongs to.-> SA\n        SAA -.belongs to.-> SA\n        subgraph "Has active login session"\n            SAD([Route /dashboard])\n            SALU([Route /auth/logout])\n        end\n        subgraph "No active login session"\n            SALI([Route /auth/login])\n            SAR([Route /auth/registration])\n            SAA([Route /auth/...])\n        end\n    end\n    end\nend\n',mdxType:"Mermaid"}),Object(o.b)("p",null,"In order to avoid common cross-domain issues with cookies, we're using ORY\nOathkeeper to proxy requests to ORY Kratos' Public API so that all requests come\nfrom the same hostname."),Object(o.b)("h2",{id:"perform-registration-login-and-logout"},"Perform Registration, Login, and Logout"),Object(o.b)("p",null,"Enough theory! Let's start by opening the dashboard: go to\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://127.0.0.1:4455/dashboard"}),"127.0.0.1:4455/dashboard"),"."),Object(o.b)("p",null,"Check the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/quickstart"}),"Quickstart")," for the other flows!"),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"You can find all configuration files used for this quickstart guide in\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/kratos/tree/v0.3.0-alpha.1/contrib/quickstart/kratos/email-password"}),Object(o.b)("inlineCode",{parentName:"a"},"./contrib/quickstart/kratos")),"\n,\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/kratos/blob/v0.3.0-alpha.1/quickstart.yml"}),Object(o.b)("inlineCode",{parentName:"a"},"./quickstart.yml")),",\nand\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/kratos/blob/v0.3.0-alpha.1/quickstart-oathkeeper.yml"}),Object(o.b)("inlineCode",{parentName:"a"},"./quickstart-oathkeeper.yml")),"."),Object(o.b)("h3",{id:"ory-oathkeeper-identity-and-access-proxy"},"ORY Oathkeeper: Identity and Access Proxy"),Object(o.b)("p",null,"All configuration for ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/oathkeeper/"}),"ORY Oathkeeper")," resides\nin\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/kratos/blob/v0.3.0-alpha.1/contrib/quickstart/oathkeeper"}),Object(o.b)("inlineCode",{parentName:"a"},"./contrib/quickstart/oathkeeper")),"."),Object(o.b)("h4",{id:"configuration-1"},"Configuration"),Object(o.b)("p",null,"We define several configuration options for ORY Oathkeeper such as the port for\nthe proxy and where to load the access rules from."),Object(o.b)("h4",{id:"cookie-session-authenticator"},"Cookie Session Authenticator"),Object(o.b)("p",null,"The\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/docs/oathkeeper/pipeline/authn#cookie_session"}),"Cookie Session Authenticator"),"\nis enabled and points to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../reference/api"}),"ORY Kratos' ",Object(o.b)("inlineCode",{parentName:"a"},"/sessions/whoami")," API"),".\nIt uses the ",Object(o.b)("inlineCode",{parentName:"p"},"ory_kratos_session")," cookie to identify if a request contains a\nsession or not:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/.oathkeeper.yml"',title:'"contrib/quickstart/oathkeeper/.oathkeeper.yml"'}),'# ...\nauthenticators\n  cookie_session:\n    enabled: true\n    config:\n      check_session_url: http://kratos:4433/sessions/whoami\n      preserve_path: true\n      extra_from: "@this"\n      subject_from: "identity.id"\n      only:\n        - ory_kratos_session\n# ...\n')),Object(o.b)("p",null,"It's doing what the ",Object(o.b)("inlineCode",{parentName:"p"},"needsLogin")," function did in the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/quickstart"}),"Quickstart"),"."),Object(o.b)("h4",{id:"anonymous-authenticator"},"Anonymous Authenticator"),Object(o.b)("p",null,"The\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/docs/oathkeeper/pipeline/authn#anonymous"}),"Anonymous Authenticator"),"\nis useful for endpoints that do not need login, such as the registration screen:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/.oathkeeper.yml"',title:'"contrib/quickstart/oathkeeper/.oathkeeper.yml"'}),"# ...\nauthenticators\n  anonymous:\n    enabled: true\n    config:\n      subject: guest\n# ...\n")),Object(o.b)("h4",{id:"allowed-authorizer"},"Allowed Authorizer"),Object(o.b)("p",null,"The\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/docs/oathkeeper/pipeline/authz#allowed"}),"Allowed Authenticator"),"\nsimply allows all users to access the URL. Since we don't have Role-based access\ncontrol (RBAC) or an Access Control list (ACL) in place for this example, this\nwill be enough."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/.oathkeeper.yml"',title:'"contrib/quickstart/oathkeeper/.oathkeeper.yml"'}),"# ...\nauthorizers\n  allowed:\n    enabled: true\n# ...\n")),Object(o.b)("h3",{id:"id-token-mutator"},"ID Token Mutator"),Object(o.b)("p",null,"The\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/docs/oathkeeper/pipeline/mutator#id_token"}),"ID Token Mutator"),"\ntakes all the available session information and puts it into a JSON Web Token\n(JWT). The protected ",Object(o.b)("inlineCode",{parentName:"p"},"SecureApp")," will now receive"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Authorization: bearer <jwt...>")),Object(o.b)("p",null,"in the HTTP Header instead of"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Cookie: ory_kratos_session=...")),Object(o.b)("p",null,"The JWT is signed using a RS256 key. To verify the JWT we can use the public key\nprovided by ORY Oathkeeper's JWKS API:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:4456/.well-known/jwks.json")),Object(o.b)("p",null,"You can generate the RS256 key yourself by running\n",Object(o.b)("inlineCode",{parentName:"p"},"oathkeeper credentials generate --alg RS256 > id_token.jwks.json"),"."),Object(o.b)("p",null,"We also enabled the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/docs/oathkeeper/pipeline/mutator#"}),"NoOp Mutator")," for the\nvarious other endpoints such as login and registration:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/.oathkeeper.yml"',title:'"contrib/quickstart/oathkeeper/.oathkeeper.yml"'}),'mutators:\n  noop:\n    enabled: true\n\n  id_token:\n    enabled: true\n    config:\n      issuer_url: http://127.0.0.1:4455/\n      jwks_url: file:///etc/config/oathkeeper/id_token.jwks.json\n      claims: |\n        {\n          "session": {{ .Extra | toJson }}\n        }\n')),Object(o.b)("p",null,"You could obviously also use other mutators such as the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/docs/oathkeeper/pipeline/mutator#header"}),"Header Mutator")," and\nuse headers such as ",Object(o.b)("inlineCode",{parentName:"p"},"X-User-ID")," instead of the JWT."),Object(o.b)("h3",{id:"error-handling"},"Error Handling"),Object(o.b)("p",null,"We configure the error handling in such a way that a missing or invalid login\nsession (when accessed from a browser) redirects to ",Object(o.b)("inlineCode",{parentName:"p"},"/auth/login"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/.oathkeeper.yml"',title:'"contrib/quickstart/oathkeeper/.oathkeeper.yml"'}),"errors:\n  fallback:\n    - json\n\n  handlers:\n    redirect:\n      enabled: true\n      config:\n        to: http://127.0.0.1:4455/auth/login\n        when:\n          - error:\n              - unauthorized\n              - forbidden\n            request:\n              header:\n                accept:\n                  # We don't want this for application/json requests, only browser requests!\n                  - text/html\n    json:\n      enabled: true\n      config:\n        verbose: true\n")),Object(o.b)("h3",{id:"access-rules"},"Access Rules"),Object(o.b)("p",null,"We use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/gobwas/glob"}),"glob matching")," to match the HTTP\nrequests for our access rules:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/.oathkeeper.yml"',title:'"contrib/quickstart/oathkeeper/.oathkeeper.yml"'}),"access_rules:\n  matching_strategy: glob\n  repositories:\n    - file:///etc/config/oathkeeper/access-rules.yml\n")),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"access-rules.yml")," we define three rules. The first rule forwards all traffic\nmatching ",Object(o.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:4455/.ory/kratos/public/")," to ORY Kratos' Public API:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/access-rules.yml"',title:'"contrib/quickstart/oathkeeper/access-rules.yml"'}),"- id: 'ory:kratos:public'\n  upstream:\n    preserve_host: true\n    url: 'http://kratos:4433'\n    strip_path: /.ory/kratos/public\n  match:\n    url: 'http://127.0.0.1:4455/.ory/kratos/public/<**>'\n    methods:\n      - GET\n      - POST\n      - PUT\n      - DELETE\n      - PATCH\n  authenticators:\n    - handler: noop\n  authorizer:\n    handler: allow\n  mutators:\n    - handler: noop\n")),Object(o.b)("p",null,"The second rule allows anonymous requests to the error page, website assets,\nlogin, registration, and the page for resending the verification email:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/access-rules.yml"',title:'"contrib/quickstart/oathkeeper/access-rules.yml"'}),"# ...\n- id: 'ory:kratos-selfservice-ui-node:anonymous'\n  upstream:\n    preserve_host: true\n    url: 'http://kratos-selfservice-ui-node:4435'\n  match:\n    url: 'http://127.0.0.1:4455/<{error,verify,auth/*,**.css,**.js}{/,}>'\n    methods:\n      - GET\n  authenticators:\n    - handler: anonymous\n  authorizer:\n    handler: allow\n  mutators:\n    - handler: noop\n")),Object(o.b)("p",null,"The final rule requires a valid session before allowing requests to the\ndashboard and user settings:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/access-rules.yml"',title:'"contrib/quickstart/oathkeeper/access-rules.yml"'}),"# ...\n- id: 'ory:kratos-selfservice-ui-node:protected'\n  upstream:\n    preserve_host: true\n    url: 'http://kratos-selfservice-ui-node:4435'\n  match:\n    url: 'http://127.0.0.1:4455/<{,debug,dashboard,settings}{/,}>'\n    methods:\n      - GET\n  authenticators:\n    - handler: cookie_session\n  authorizer:\n    handler: allow\n  mutators:\n    - handler: id_token\n  errors:\n    - handler: redirect\n      config:\n        to: http://127.0.0.1:4455/auth/login\n")),Object(o.b)("h2",{id:"cleaning-up-docker"},"Cleaning up Docker"),Object(o.b)("p",null,"To clean everything up, you need to bring down the Docker Compose environment\nand remove all mounted volumes."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"docker-compose -f quickstart.yml -f quickstart-oathkeeper.yml down -v\ndocker-compose -f quickstart.yml -f quickstart-oathkeeper.yml rm -f -s -v\n")))}p.isMDXComponent=!0},442:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(458),i=n.n(o),s=n(54),c=n.n(s),l=n(455),u=n.n(l);i.a.initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});t.a=function(e){var t,n=e.chart,o=Object(a.useState)(!1),s=o[0],l=o[1],p=Object(a.useState)(void 0),b=p[0],h=p[1],d=Object(a.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],m=function(){return l(!s)};return Object(a.useEffect)((function(){i.a.render(d,n,(function(e){h(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onClick:m,className:u()(c.a.graph,c.a.pointer),dangerouslySetInnerHTML:{__html:b}}),r.a.createElement("div",{onClick:m,className:u()(c.a.overlay,c.a.pointer,c.a.graph,(t={},t[c.a.visible]=s,t))},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:u()(c.a.backdrop,c.a.graph),dangerouslySetInnerHTML:{__html:b}})))}},443:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(20),r=n(444);function o(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,s=void 0!==i&&i,c=o.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},444:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},459:function(e,t){},460:function(e,t){},461:function(e,t){},462:function(e,t){},463:function(e,t){},464:function(e,t){},465:function(e,t){},466:function(e,t){},467:function(e,t){},468:function(e,t){},469:function(e,t){},470:function(e,t){},472:function(e,t,n){var a={"./locale":448,"./locale.js":448};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=472}}]);