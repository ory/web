(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[9275],{13919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},44996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(52263),a=n(13919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,s=void 0!==i&&i,l=o.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+p:p}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},32527:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(67294),a=n(21140),o=n.n(a),i="graph_1lrJ",s="pointer_3d8u",l="overlay_2fuY",u="visible_2Z3U",p="backdrop_2z5L",c=n(94184),h=n.n(c);o().initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});var d=function(e){var t,n=e.chart,a=(0,r.useState)(!1),c=a[0],d=a[1],k=(0,r.useState)(void 0),m=k[0],g=k[1],f=(0,r.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],y=function(){return d(!c)};return(0,r.useEffect)((function(){o().render(f,n,(function(e){g(e)}))}),[]),r.createElement(r.Fragment,null,r.createElement("div",{onClick:y,className:h()(i,s),dangerouslySetInnerHTML:{__html:m}}),r.createElement("div",{onClick:y,className:h()(l,s,i,(t={},t[u]=c,t))},r.createElement("div",{onClick:function(e){return e.stopPropagation()},className:h()(p,i),dangerouslySetInnerHTML:{__html:m}})))}},93707:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=(n(44996),n(32527)),s=["components"],l={id:"zero-trust-iap-proxy-identity-access-proxy",title:"Zero Trust with IAP Proxy"},u=void 0,p={unversionedId:"guides/zero-trust-iap-proxy-identity-access-proxy",id:"version-v0.5/guides/zero-trust-iap-proxy-identity-access-proxy",isDocsHomePage:!1,title:"Zero Trust with IAP Proxy",description:"The Quickstart covers a basic set up that uses client-side",source:"@site/versioned_docs/version-v0.5/guides/zero-trust-iap-proxy-identity-access-proxy.mdx",sourceDirName:"guides",slug:"/guides/zero-trust-iap-proxy-identity-access-proxy",permalink:"/kratos/docs/v0.5/guides/zero-trust-iap-proxy-identity-access-proxy",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/guides/zero-trust-iap-proxy-identity-access-proxy.mdx",version:"v0.5",lastUpdatedBy:"Seb",lastUpdatedAt:1617699755,formattedLastUpdatedAt:"4/6/2021",frontMatter:{id:"zero-trust-iap-proxy-identity-access-proxy",title:"Zero Trust with IAP Proxy"},sidebar:"version-v0.5/docs",previous:{title:"Setting up Account Activation and E-Mail Verification",permalink:"/kratos/docs/v0.5/guides/account-activation-email-verification"},next:{title:"Multitenancy",permalink:"/kratos/docs/v0.5/guides/multi-tenancy-multitenant"}},c=[{value:"Running ORY Kratos and the ORY Oathkeeper Identity and Access Proxy",id:"running-ory-kratos-and-the-ory-oathkeeper-identity-and-access-proxy",children:[{value:"Network Architecture",id:"network-architecture",children:[]}]},{value:"Perform Registration, Login, and Logout",id:"perform-registration-login-and-logout",children:[]},{value:"Configuration",id:"configuration",children:[{value:"ORY Oathkeeper: Identity and Access Proxy",id:"ory-oathkeeper-identity-and-access-proxy",children:[]},{value:"ID Token Mutator",id:"id-token-mutator",children:[]},{value:"Error Handling",id:"error-handling",children:[]},{value:"Access Rules",id:"access-rules",children:[]}]},{value:"Cleaning up Docker",id:"cleaning-up-docker",children:[]}],h={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/kratos/docs/v0.5/quickstart"},"Quickstart")," covers a basic set up that uses client-side\nrouting in ",(0,o.kt)("inlineCode",{parentName:"p"},"SecureApp")," to forward requests to ORY Kratos."),(0,o.kt)("p",null,"Systems that have more than a few components often use reverse proxies such as\nNginx, Envoy, or Kong to route and authorize traffic to applications. ORY Kratos\nworks very well in such environments. The purpose of this guide is to clarify\nhow to use an IAP (Identity and Access Proxy) to authorize incoming requests. In\nthis tutorial we will be using\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/oathkeeper"},"ORY Oathkeeper")," to achieve this."),(0,o.kt)("p",null,"This guide expects that you have familiarized yourself with ORY Kratos' concepts\nintroduced in the ",(0,o.kt)("a",{parentName:"p",href:"/kratos/docs/v0.5/quickstart"},"Quickstart"),"."),(0,o.kt)("p",null,"To ensure that no one can access the dashboard without prior authentication, we\nare making use of our reverse proxy\n(",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/oathkeeper"},"ORY Oathkeeper"),") denying all\nunauthenticated traffic to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://secure-app/dashboard")," and redirecting the\nuser to the login page at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://secure-app/auth/login"),". Further, we will\nconfigure access to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://secure-app/auth/login")," in such a way that access\nonly works if one is not yet authenticated."),(0,o.kt)("h2",{id:"running-ory-kratos-and-the-ory-oathkeeper-identity-and-access-proxy"},"Running ORY Kratos and the ORY Oathkeeper Identity and Access Proxy"),(0,o.kt)("p",null,"Clone the ORY Kratos repository and fetch the latest images:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"git clone https://github.com/ory/kratos.git\ncd kratos\ngit checkout v0.5.5-alpha.1\n\n")),(0,o.kt)("p",null,"Next, run the quickstart and add the ORY Oathkeeper config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"docker-compose \\\n  -f quickstart.yml \\\n  -f quickstart-oathkeeper.yml \\\n  up --build --force-recreate\n")),(0,o.kt)("p",null,"This might take a minute or two. Once the output slows down and logs indicate a\nhealthy system you're ready to roll! A healthy system will show something along\nthe lines of (the order of messages might be reversed):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'kratos_1      | time="2020-01-20T14:52:13Z" level=info msg="Starting the admin httpd on: 0.0.0.0:4434"\nkratos_1      | time="2020-01-20T14:52:13Z" level=info msg="Starting the public httpd on: 0.0.0.0:4433"\noathkeeper_1  | {"level":"info","msg":"TLS has not been configured for api, skipping","time":"2020-01-20T09:22:09Z"}\noathkeeper_1  | {"level":"info","msg":"Listening on http://:4456","time":"2020-01-20T09:22:09Z"}\noathkeeper_1  | {"level":"info","msg":"TLS has not been configured for proxy, skipping","time":"2020-01-20T09:22:09Z"}\noathkeeper_1  | {"level":"info","msg":"Listening on http://:4455","time":"2020-01-20T09:22:09Z"}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"There are two important factors to get a fully functional system:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"You need to make sure that ports ",(0,o.kt)("inlineCode",{parentName:"li"},"4433"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"4434"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"4436"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"4455"),", and\n",(0,o.kt)("inlineCode",{parentName:"li"},"4456"),"\xa0",(0,o.kt)("a",{parentName:"li",href:"https://serverfault.com/questions/309052/check-if-port-is-open-or-closed-on-a-linux-server"},"are free"),"."),(0,o.kt)("li",{parentName:"ul"},"Make sure to always use ",(0,o.kt)("inlineCode",{parentName:"li"},"127.0.0.1")," as the hostname; never use ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost"),"!\nThis is important because browsers treat these two as separate domains and\nwill therefore have issues with setting and using the right cookies.")))),(0,o.kt)("h3",{id:"network-architecture"},"Network Architecture"),(0,o.kt)("p",null,"This demo makes use of several services:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos"},"ORY Kratos"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Public ("Browser") API (port 4433)'),(0,o.kt)("li",{parentName:"ul"},"Admin API (port 4434) - This is made public only so we can test via the CLI.")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"http://github.com/ory/kratos-selfservice-ui-node"},"SecureApp"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An example application written in NodeJS that implements the login,\nregistration, logout, dashboard, and other UIs. Because we are accessing this\nvia a proxy, its port (4435) is not publicly exposed.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper"},"ORY Oathkeeper"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reverse proxy (port 4455) - a reverse proxy to protect the ",(0,o.kt)("strong",{parentName:"li"},"SecureApp"),"."),(0,o.kt)("li",{parentName:"ul"},"API (port 4456) - Oathkeeper's API. This is made public only so we can test\nvia the CLI.")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mailslurper"},"MailSlurper"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Public (port 4436) - a development SMTP server with which ORY Kratos sends\nemails.")),(0,o.kt)("p",null,"To better understand the application architecture, let's take a look at the\nnetwork configuration. This assumes that you have at least some understanding of\nhow Docker networks work:"),(0,o.kt)(i.Z,{chart:'\ngraph TD\nsubgraph hn[Host Network]\n    B[Browser]\n    B--\x3e|Can access URLs via 127.0.0.1:4455|OKPHN\n    B--\x3e|Can access UI via 127.0.0.1:4436|SMTPUI\n    OKPHN([Reverse Proxy exposed at :4455])\n    SMTPUI([MailSlurper UI exposed at :4436])\nend\nsubgraph dn["Internal Docker Network (intranet)"]\n    OKPHN--\x3eOO\n    SMTPUI--\x3eSMTP\n    OO--\x3e|Proxies URLss /.ory/kratos/public/* to|OK\n    OO--\x3e|"Proxies /auth/login, /auth/registration, /dashboard, ... to"|SA\n    SA--\x3e|Talks to|OK\n    OK--\x3e|Sends mail via|SMTP\n    OO--\x3e|Validates auth sessions using|OK\n    OK[ORY Kratos]\n    OO["Reverse Proxy (ORY Oathkeeper)"]\n    SA["SecureApp (ORY Kratos SelfService UI Node Example)"]\n    SMTP["SMTP Server (MailSlurper)"]\nend\n',mdxType:"Mermaid"}),(0,o.kt)("p",null,"As you can see, all requests except for our demo mail server are proxied through\nORY Oathkeeper."),(0,o.kt)("p",null,"The next diagram shows how we've configured the routes in ORY Oathkeeper:"),(0,o.kt)(i.Z,{chart:'\ngraph TD\nsubgraph pi[Public Internet]\n    B[Browser]\nend\nsubgraph vpc[VPC / Cloud / Docker Network]\nsubgraph "Demilitarized Zone / DMZ"\n    OK[ORY Oathkeeper :4455]\n    B --\x3e OK\nend\n    OK --\x3e|"Forwards {/,/dashboard} to"| SAD\n    OK --\x3e|"Forwards /auth/logout to"| SALU\n    OK --\x3e|"Forwards /auth/login to"| SALI\n    OK --\x3e|"Forwards /auth/registration to"| SAR\n    OK --\x3e|"Forwards /auth/* to"| SAA\n    OK --\x3e|"Forwards /.ory/kratos/public/* to"| KP\n    subgraph "Private Subnet / Intranet"\n    K[ ORY Kratos ]\n    KP([ ORY Kratos Public API ])\n    KA([ ORY Kratos Admin API ])\n    SA --\x3e KA\n    KA -.belongs to.-> K\n    KP -.belongs to.-> K\n    subgraph sa["SecureApp / kratos-selfservice-ui-node Example"]\n        SA[SecureApp]\n        SAD -.belongs to.-> SA\n        SALU -.belongs to.-> SA\n        SALI -.belongs to.-> SA\n        SAR -.belongs to.-> SA\n        SAA -.belongs to.-> SA\n        subgraph "Has active login session"\n            SAD([Route /dashboard])\n            SALU([Route /auth/logout])\n        end\n        subgraph "No active login session"\n            SALI([Route /auth/login])\n            SAR([Route /auth/registration])\n            SAA([Route /auth/...])\n        end\n    end\n    end\nend\n',mdxType:"Mermaid"}),(0,o.kt)("p",null,"In order to avoid common cross-domain issues with cookies, we're using ORY\nOathkeeper to proxy requests to ORY Kratos' Public API so that all requests come\nfrom the same hostname."),(0,o.kt)("h2",{id:"perform-registration-login-and-logout"},"Perform Registration, Login, and Logout"),(0,o.kt)("p",null,"Enough theory! Let's start by opening the dashboard: go to\n",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:4455/dashboard"},"127.0.0.1:4455/dashboard"),"."),(0,o.kt)("p",null,"Check the ",(0,o.kt)("a",{parentName:"p",href:"/kratos/docs/v0.5/quickstart"},"Quickstart")," for the other flows!"),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"You can find all configuration files used for this quickstart guide in\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/tree/v0.3.0-alpha.1/contrib/quickstart/kratos/email-password"},(0,o.kt)("inlineCode",{parentName:"a"},"./contrib/quickstart/kratos")),"\n,\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/blob/v0.3.0-alpha.1/quickstart.yml"},(0,o.kt)("inlineCode",{parentName:"a"},"./quickstart.yml")),",\nand\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/blob/v0.3.0-alpha.1/quickstart-oathkeeper.yml"},(0,o.kt)("inlineCode",{parentName:"a"},"./quickstart-oathkeeper.yml")),"."),(0,o.kt)("h3",{id:"ory-oathkeeper-identity-and-access-proxy"},"ORY Oathkeeper: Identity and Access Proxy"),(0,o.kt)("p",null,"All configuration for ",(0,o.kt)("a",{parentName:"p",href:"https://www.ory.sh/oathkeeper/"},"ORY Oathkeeper")," resides\nin\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/blob/v0.3.0-alpha.1/contrib/quickstart/oathkeeper"},(0,o.kt)("inlineCode",{parentName:"a"},"./contrib/quickstart/oathkeeper")),"."),(0,o.kt)("h4",{id:"configuration-1"},"Configuration"),(0,o.kt)("p",null,"We define several configuration options for ORY Oathkeeper such as the port for\nthe proxy and where to load the access rules from."),(0,o.kt)("h4",{id:"cookie-session-authenticator"},"Cookie Session Authenticator"),(0,o.kt)("p",null,"The\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ory.sh/docs/oathkeeper/pipeline/authn#cookie_session"},"Cookie Session Authenticator"),"\nis enabled and points to ",(0,o.kt)("a",{parentName:"p",href:"../reference/api"},"ORY Kratos' ",(0,o.kt)("inlineCode",{parentName:"a"},"/sessions/whoami")," API"),".\nIt uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"ory_kratos_session")," cookie to identify if a request contains a\nsession or not:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/.oathkeeper.yml"',title:'"contrib/quickstart/oathkeeper/.oathkeeper.yml"'},'# ...\nauthenticators:\n  cookie_session:\n    enabled: true\n    config:\n      check_session_url: http://kratos:4433/sessions/whoami\n      preserve_path: true\n      extra_from: "@this"\n      subject_from: "identity.id"\n      only:\n        - ory_kratos_session\n# ...\n')),(0,o.kt)("p",null,"It's doing what the ",(0,o.kt)("inlineCode",{parentName:"p"},"needsLogin")," function did in the\n",(0,o.kt)("a",{parentName:"p",href:"/kratos/docs/v0.5/quickstart"},"Quickstart"),"."),(0,o.kt)("h4",{id:"anonymous-authenticator"},"Anonymous Authenticator"),(0,o.kt)("p",null,"The\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ory.sh/docs/oathkeeper/pipeline/authn#anonymous"},"Anonymous Authenticator"),"\nis useful for endpoints that do not need login, such as the registration screen:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/.oathkeeper.yml"',title:'"contrib/quickstart/oathkeeper/.oathkeeper.yml"'},"# ...\nauthenticators:\n  anonymous:\n    enabled: true\n    config:\n      subject: guest\n# ...\n")),(0,o.kt)("h4",{id:"allowed-authorizer"},"Allowed Authorizer"),(0,o.kt)("p",null,"The\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ory.sh/docs/oathkeeper/pipeline/authz#allowed"},"Allowed Authenticator"),"\nsimply allows all users to access the URL. Since we don't have Role-based access\ncontrol (RBAC) or an Access Control list (ACL) in place for this example, this\nwill be enough."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/.oathkeeper.yml"',title:'"contrib/quickstart/oathkeeper/.oathkeeper.yml"'},"# ...\nauthorizers:\n  allowed:\n    enabled: true\n# ...\n")),(0,o.kt)("h3",{id:"id-token-mutator"},"ID Token Mutator"),(0,o.kt)("p",null,"The\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ory.sh/docs/oathkeeper/pipeline/mutator#id_token"},"ID Token Mutator"),"\ntakes all the available session information and puts it into a JSON Web Token\n(JWT). The protected ",(0,o.kt)("inlineCode",{parentName:"p"},"SecureApp")," will now receive"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Authorization: bearer <jwt...>")),(0,o.kt)("p",null,"in the HTTP Header instead of"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Cookie: ory_kratos_session=...")),(0,o.kt)("p",null,"The JWT is signed using a RS256 key. To verify the JWT we can use the public key\nprovided by ORY Oathkeeper's JWKS API:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4456/.well-known/jwks.json")),(0,o.kt)("p",null,"You can generate the RS256 key yourself by running\n",(0,o.kt)("inlineCode",{parentName:"p"},"oathkeeper credentials generate --alg RS256 > id_token.jwks.json"),"."),(0,o.kt)("p",null,"We also enabled the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ory.sh/docs/oathkeeper/pipeline/mutator#"},"NoOp Mutator")," for the\nvarious other endpoints such as login and registration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/.oathkeeper.yml"',title:'"contrib/quickstart/oathkeeper/.oathkeeper.yml"'},'mutators:\n  noop:\n    enabled: true\n\n  id_token:\n    enabled: true\n    config:\n      issuer_url: http://127.0.0.1:4455/\n      jwks_url: file:///etc/config/oathkeeper/id_token.jwks.json\n      claims: |\n        {\n          "session": {{ .Extra | toJson }}\n        }\n')),(0,o.kt)("p",null,"You could obviously also use other mutators such as the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ory.sh/docs/oathkeeper/pipeline/mutator#header"},"Header Mutator")," and\nuse headers such as ",(0,o.kt)("inlineCode",{parentName:"p"},"X-User-ID")," instead of the JWT."),(0,o.kt)("h3",{id:"error-handling"},"Error Handling"),(0,o.kt)("p",null,"We configure the error handling in such a way that a missing or invalid login\nsession (when accessed from a browser) redirects to ",(0,o.kt)("inlineCode",{parentName:"p"},"/auth/login"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/.oathkeeper.yml"',title:'"contrib/quickstart/oathkeeper/.oathkeeper.yml"'},"errors:\n  fallback:\n    - json\n\n  handlers:\n    redirect:\n      enabled: true\n      config:\n        to: http://127.0.0.1:4455/auth/login\n        when:\n          - error:\n              - unauthorized\n              - forbidden\n            request:\n              header:\n                accept:\n                  # We don't want this for application/json requests, only browser requests!\n                  - text/html\n    json:\n      enabled: true\n      config:\n        verbose: true\n")),(0,o.kt)("h3",{id:"access-rules"},"Access Rules"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gobwas/glob"},"glob matching")," to match the HTTP\nrequests for our access rules:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/.oathkeeper.yml"',title:'"contrib/quickstart/oathkeeper/.oathkeeper.yml"'},"access_rules:\n  matching_strategy: glob\n  repositories:\n    - file:///etc/config/oathkeeper/access-rules.yml\n")),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"access-rules.yml")," we define three rules. The first rule forwards all traffic\nmatching ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4455/.ory/kratos/public/")," to ORY Kratos' Public API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/access-rules.yml"',title:'"contrib/quickstart/oathkeeper/access-rules.yml"'},"- id: 'ory:kratos:public'\n  upstream:\n    preserve_host: true\n    url: 'http://kratos:4433'\n    strip_path: /.ory/kratos/public\n  match:\n    url: 'http://127.0.0.1:4455/.ory/kratos/public/<**>'\n    methods:\n      - GET\n      - POST\n      - PUT\n      - DELETE\n      - PATCH\n  authenticators:\n    - handler: noop\n  authorizer:\n    handler: allow\n  mutators:\n    - handler: noop\n")),(0,o.kt)("p",null,"The second rule allows anonymous requests to the error page, website assets,\nlogin, registration, and the page for resending the verification email:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/access-rules.yml"',title:'"contrib/quickstart/oathkeeper/access-rules.yml"'},"# ...\n- id: 'ory:kratos-selfservice-ui-node:anonymous'\n  upstream:\n    preserve_host: true\n    url: 'http://kratos-selfservice-ui-node:4435'\n  match:\n    url: 'http://127.0.0.1:4455/<{error,verify,auth/*,**.css,**.js}{/,}>'\n    methods:\n      - GET\n  authenticators:\n    - handler: anonymous\n  authorizer:\n    handler: allow\n  mutators:\n    - handler: noop\n")),(0,o.kt)("p",null,"The final rule requires a valid session before allowing requests to the\ndashboard and user settings:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/access-rules.yml"',title:'"contrib/quickstart/oathkeeper/access-rules.yml"'},"# ...\n- id: 'ory:kratos-selfservice-ui-node:protected'\n  upstream:\n    preserve_host: true\n    url: 'http://kratos-selfservice-ui-node:4435'\n  match:\n    url: 'http://127.0.0.1:4455/<{,debug,dashboard,settings}{/,}>'\n    methods:\n      - GET\n  authenticators:\n    - handler: cookie_session\n  authorizer:\n    handler: allow\n  mutators:\n    - handler: id_token\n  errors:\n    - handler: redirect\n      config:\n        to: http://127.0.0.1:4455/auth/login\n")),(0,o.kt)("h2",{id:"cleaning-up-docker"},"Cleaning up Docker"),(0,o.kt)("p",null,"To clean everything up, you need to bring down the Docker Compose environment\nand remove all mounted volumes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"docker-compose -f quickstart.yml -f quickstart-oathkeeper.yml down -v\ndocker-compose -f quickstart.yml -f quickstart-oathkeeper.yml rm -f -s -v\n")))}d.isMDXComponent=!0},11748:function(e,t,n){var r={"./locale":89234,"./locale.js":89234};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=11748}}]);