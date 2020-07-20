(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{258:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(9),i=(n(0),n(291)),r={id:"faq",title:"FAQ"},s={id:"version-v1.6/faq",isDocsHomePage:!1,title:"FAQ",description:"This file keeps track of questions and discussions from Gitter and general help",source:"@site/versioned_docs/version-v1.6/faq.md",permalink:"/hydra/docs/faq",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.6/faq.md",version:"v1.6",sidebar:"version-v1.6/docs",previous:{title:"Security Architecture",permalink:"/hydra/docs/security-architecture"}},c=[{value:"How can I control SQL connection limits?",id:"how-can-i-control-sql-connection-limits",children:[]},{value:"Why is the Resource Owner Password Credentials grant not supported?",id:"why-is-the-resource-owner-password-credentials-grant-not-supported",children:[]},{value:"Should I use OAuth2 tokens for authentication?",id:"should-i-use-oauth2-tokens-for-authentication",children:[]},{value:"How to deal with mobile apps?",id:"how-to-deal-with-mobile-apps",children:[]},{value:"How should I run migrations?",id:"how-should-i-run-migrations",children:[]},{value:"What does the installation process look like?",id:"what-does-the-installation-process-look-like",children:[]},{value:"What does a migration process look like?",id:"what-does-a-migration-process-look-like",children:[]},{value:"How can I do this in docker?",id:"how-can-i-do-this-in-docker",children:[]},{value:"Can I set the log level to warn, error, debug, ...?",id:"can-i-set-the-log-level-to-warn-error-debug-",children:[]},{value:"How can I import TLS certificates?",id:"how-can-i-import-tls-certificates",children:[]},{value:"Is there an HTTP API Documentation?",id:"is-there-an-http-api-documentation",children:[]},{value:"How can I disable HTTPS for testing?",id:"how-can-i-disable-https-for-testing",children:[]},{value:"MySQL gives <code>unsupported Scan, storing driver.Value type []uint8 into type *time.Time</code>",id:"mysql-gives-unsupported-scan-storing-drivervalue-type-uint8-into-type-timetime",children:[]},{value:"The docker image exits immediately",id:"the-docker-image-exits-immediately",children:[]},{value:"Insufficient Entropy",id:"insufficient-entropy",children:[]},{value:"I get compile errors!",id:"i-get-compile-errors",children:[]},{value:"Refreshing tokens",id:"refreshing-tokens",children:[]},{value:"Hydra won&#39;t remember my login",id:"hydra-wont-remember-my-login",children:[]},{value:"Where can I get documentation on running multiple instances of Hydra?",id:"where-can-i-get-documentation-on-running-multiple-instances-of-hydra",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This file keeps track of questions and discussions from Gitter and general help\nwith various issues."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Please be aware that some things noted here might be highly outdated. If you\nfind an outdated section, please create a PR which removes or updates it!")),Object(i.b)("h2",{id:"how-can-i-control-sql-connection-limits"},"How can I control SQL connection limits?"),Object(i.b)("p",null,"You can configure SQL connection limits by appending parameters ",Object(i.b)("inlineCode",{parentName:"p"},"max_conns"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"max_idle_conns"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"max_conn_lifetime")," to the DSN:\n",Object(i.b)("inlineCode",{parentName:"p"},"postgres://foo:bar@host:port/database?max_conns=12"),"."),Object(i.b)("h2",{id:"why-is-the-resource-owner-password-credentials-grant-not-supported"},"Why is the Resource Owner Password Credentials grant not supported?"),Object(i.b)("p",null,"The following is a copy of the original\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/hydra/pull/297#issuecomment-294282671"}),"comment on GitHub"),":"),Object(i.b)("p",null,'I took a long time for this issue, primarily because I felt very uncomfortable\nimplementing it. The ROCP grant is something from the "dark ages" of OAuth2 and\nthere are suitable replacements for mobile clients, such as public oauth2\nclients, which are supported by Hydra:\n',Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://tools.ietf.org/html/draft-ietf-oauth-native-apps-09"}),"https://tools.ietf.org/html/draft-ietf-oauth-native-apps-09")),Object(i.b)("p",null,"The OAuth2 Thread Model explicitly states that the ROPC grant is commonly used\nin legacy/migration scenarios, and"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This grant type has higher risk because it maintains the UID/password\nanti-pattern. Additionally, because the user does not have control over the\nauthorization process, clients using this grant type are not limited by scope\nbut instead have potentially the same capabilities as the user themselves. As\nthere is no authorization step, the ability to offer token revocation is\nbypassed.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Because passwords are often used for more than 1 service, this anti-pattern\nmay also put at risk whatever else is accessible with the supplied credential.\nAdditionally, any easily derived equivalent (e.g., ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:joe@example.com"}),"joe@example.com")," and\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:joe@example.net"}),"joe@example.net"),") might easily allow someone to guess that the same password\ncan be used elsewhere.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Impact: The resource server can only differentiate scope based on the access\ntoken being associated with a particular client. The client could also acquire\nlong-lived tokens and pass them up to an attacker's web service for further\nabuse. The client, eavesdroppers, or endpoints could eavesdrop the user id and\npassword.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"o Except for migration reasons, minimize use of this grant type.")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://tools.ietf.org/html/rfc6819#section-4.4.3"}),"source"))),Object(i.b)("p",null,"Thus, I decided to not implement the ROPC grant in Hydra. Over time, I will add\ndocumentation how to deal with mobile scenarios and similar."),Object(i.b)("h2",{id:"should-i-use-oauth2-tokens-for-authentication"},"Should I use OAuth2 tokens for authentication?"),Object(i.b)("p",null,"OAuth2 tokens are like money. It allows you to buy stuff, but the cashier does\nnot really care if the money is yours or if you stole it, as long as it's valid\nmoney. Depending on what you understand as authentication, this is a yes and no\nanswer:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Yes:"),' You can use access tokens to find out which user ("subject") is\nperforming an action in a resource provider (blog article service, shopping\nbasket, ...). Coming back to the money example: ',Object(i.b)("em",{parentName:"li"},"You"),", the subject, receives a\ncappuccino from the vendor (resource provider) in exchange for money (access\ntoken)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"No:")," Never use access tokens for logging people in, for example\n",Object(i.b)("inlineCode",{parentName:"li"},"http://myapp.com/login?access_token=..."),'. Coming back to the money example:\nThe police officer ("authentication server") will not accept money ("access\ntoken") as a proof of identity ("it\'s really you"). Unless he is corrupt\n("vulnerable"), of course.')),Object(i.b)("p",null,'In the second example ("authentication server"), you must use OpenID Connect ID\nTokens.'),Object(i.b)("h2",{id:"how-to-deal-with-mobile-apps"},"How to deal with mobile apps?"),Object(i.b)("p",null,"Read ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/oauth2-for-mobile-app-spa-browser"}),"this article"),"."),Object(i.b)("h2",{id:"how-should-i-run-migrations"},"How should I run migrations?"),Object(i.b)("p",null,"Since ORY Hydra 0.8.0, migrations are no longer run automatically on boot. This\nis required in production environments, because:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Although SQL migrations are tested, migrating schemas can cause data loss and\nshould only be done consciously with prior back ups."),Object(i.b)("li",{parentName:"ol"},"Running a production system with a user that has right such as ALTER TABLE is\na security anti-pattern.")),Object(i.b)("p",null,"Thus, to initialize the database schemas, it is required to run\n",Object(i.b)("inlineCode",{parentName:"p"},"hydra migrate sql driver://user:password@host:port/db")," before running\n",Object(i.b)("inlineCode",{parentName:"p"},"hydra host"),"."),Object(i.b)("h2",{id:"what-does-the-installation-process-look-like"},"What does the installation process look like?"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"hydra migrate sql ...")," on a host close to the database (e.g. a virtual\nmachine with access to the SQL instance).")),Object(i.b)("h2",{id:"what-does-a-migration-process-look-like"},"What does a migration process look like?"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Make sure a database update is required by checking the release notes."),Object(i.b)("li",{parentName:"ol"},"Make a back up of the database."),Object(i.b)("li",{parentName:"ol"},"Run the migration script on a host close to the database (e.g. a virtual\nmachine with access to the SQL instance). Schemas are usually backwards\ncompatible, so instances running previous versions of ORY Hydra should keep\nworking fine. If backwards compatibility is not given, this will be addressed\nin the patch notes."),Object(i.b)("li",{parentName:"ol"},"Upgrade all ORY Hydra instances.")),Object(i.b)("h2",{id:"how-can-i-do-this-in-docker"},"How can I do this in docker?"),Object(i.b)("p",null,"Many deployments of ORY Hydra use Docker. Although several options are\navailable, we advise to extend the ORY Hydra Docker image"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Dockerfile")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"FROM oryd/hydra:<tag>\n\nENTRYPOINT hydra migrate sql --yes $DATABASE_URL\n")),Object(i.b)("p",null,"and run it in your infrastructure once."),Object(i.b)("p",null,"Additionally, ",Object(i.b)("em",{parentName:"p"},"but not recommended"),", it is possible to override the entry point\nof the ORY Hydra Docker image using CLI flag\n",Object(i.b)("inlineCode",{parentName:"p"},'--entrypoint "hydra migrate sql --yes $DATABASE_URL; hydra host"')," or with\n",Object(i.b)("inlineCode",{parentName:"p"},"entrypoint: hydra migrate sql $DATABASE_URL; hydra host")," set in your docker\ncompose config."),Object(i.b)("h2",{id:"can-i-set-the-log-level-to-warn-error-debug-"},"Can I set the log level to warn, error, debug, ...?"),Object(i.b)("p",null,"Yes, you can do so by setting the environment variable ",Object(i.b)("inlineCode",{parentName:"p"},"LOG_LEVEL=<level>"),".\nThere are various levels supported:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"debug"),Object(i.b)("li",{parentName:"ul"},"info"),Object(i.b)("li",{parentName:"ul"},"warn"),Object(i.b)("li",{parentName:"ul"},"error"),Object(i.b)("li",{parentName:"ul"},"fatal"),Object(i.b)("li",{parentName:"ul"},"panic")),Object(i.b)("h2",{id:"how-can-i-import-tls-certificates"},"How can I import TLS certificates?"),Object(i.b)("p",null,"You can import TLS certificates when running ",Object(i.b)("inlineCode",{parentName:"p"},"hydra host"),". This can be done by\nsetting the following environment variables:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Read from file")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"HTTPS_TLS_CERT_PATH"),": The path to the TLS certificate (pem encoded)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"HTTPS_TLS_KEY_PATH"),": The path to the TLS private key (pem encoded).")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Embedded")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"HTTPS_TLS_CERT"),": A pem encoded TLS certificate passed as string. Can be used\ninstead of TLS_CERT_PATH."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"HTTPS_TLS_KEY"),": A pem encoded TLS key passed as string. Can be used instead\nof TLS_KEY_PATH.")),Object(i.b)("p",null,"Or by specifying the following flags:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"--https-tls-cert-path string   Path to the certificate file for HTTP/2 over TLS (https). You can set HTTPS_TLS_KEY_PATH or HTTPS_TLS_KEY instead.\n--https-tls-key-path string    Path to the key file for HTTP/2 over TLS (https). You can set HTTPS_TLS_KEY_PATH or HTTPS_TLS_KEY instead.\n")),Object(i.b)("h2",{id:"is-there-an-http-api-documentation"},"Is there an HTTP API Documentation?"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/docs/api/hydra"}),"Yes"),"."),Object(i.b)("h2",{id:"how-can-i-disable-https-for-testing"},"How can I disable HTTPS for testing?"),Object(i.b)("p",null,"You can do so by running ",Object(i.b)("inlineCode",{parentName:"p"},"hydra host --dangerous-force-http"),"."),Object(i.b)("h2",{id:"mysql-gives-unsupported-scan-storing-drivervalue-type-uint8-into-type-timetime"},"MySQL gives ",Object(i.b)("inlineCode",{parentName:"h2"},"unsupported Scan, storing driver.Value type []uint8 into type *time.Time")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"did a quick test to get mysql running, but run into migrate sql issue - seems\nmysql related An error occurred while running the migrations: Could not apply\nladon SQL migrations: Could not migrate sql schema, applied 0 migrations: sql:\nScan error on column index 0: unsupported Scan, storing driver.Value type\n[]uint8 into type ","*","time.Time is this a known bug ? or any specific mysql\nversion which is required (running 5.7) ?")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ hydra help host\n...\n   - MySQL: If DATABASE_URL is a DSN starting with mysql:// MySQL will be used as storage backend.\n        Example: DATABASE_URL=mysql://user:password@tcp(host:123)/database?parseTime=true\n\n        Be aware that the ?parseTime=true parameter is mandatory, or timestamps will not work.\n...\n")),Object(i.b)("h2",{id:"the-docker-image-exits-immediately"},"The docker image exits immediately"),Object(i.b)("p",null,"Check the logs using ",Object(i.b)("inlineCode",{parentName:"p"},"docker logs <container-id>"),"."),Object(i.b)("h2",{id:"insufficient-entropy"},"Insufficient Entropy"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'Hey there , I am getting this error when I try request an access token "The\nrequest used a security parameter (e.g., anti-replay, anti-csrf) with\ninsufficient entropy (minimum of 8 characters)"')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Kareem Diaa @kimooz Jun 07 16:41",Object(i.b)("br",{parentName:"p"}),"\n",'Hey there , I am getting this error when I try request an access token "The\nrequest used a security parameter (e.g., anti-replay, anti-csrf) with\ninsufficient entropy (minimum of 8 characters)"')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Aeneas @arekkas Jun 07 16:41",Object(i.b)("br",{parentName:"p"}),"\n","@kimooz make sure state and nonce are set in your auth code url\n(http://hydra/oauth2/auth?client_id=...&nonce=THIS_NEEDS_TO_BE_SET&state=THIS_ALSO_NEEDS_TO_BE_SET")),Object(i.b)("h2",{id:"i-get-compile-errors"},"I get compile errors!"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"I would try deleting the vendor dir and glide\u2019s files and try glide init again\nor clear Glide\u2019s global cache.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"follow the steps in the readme\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/hydra#building-from-source"}),"https://github.com/ory/hydra#building-from-source"))),Object(i.b)("h2",{id:"refreshing-tokens"},"Refreshing tokens"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Kareem Diaa @kimooz 15:48",Object(i.b)("br",{parentName:"p"}),"\n","One last question if you don't mind from your experience do you think that\nsaving the user access token in a session and validating it from the client on\never refresh does that make sense or not? using the introspect endpoint")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Aeneas @arekkas 15:51",Object(i.b)("br",{parentName:"p"}),"\n","nah, simply write your http calls in a way that if a 401 or 403 occurs, the\ntoken is refreshed that's the easiest and cleanest")),Object(i.b)("h2",{id:"hydra-wont-remember-my-login"},"Hydra won't remember my login"),Object(i.b)("p",null,"Hydra only keeps track of the session if you set the ",Object(i.b)("inlineCode",{parentName:"p"},"remember_me")," parameter in\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"accept login request"),". Otherwise the login challenge will always instruct\nyou to show the login UI."),Object(i.b)("h2",{id:"where-can-i-get-documentation-on-running-multiple-instances-of-hydra"},"Where can I get documentation on running multiple instances of Hydra?"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"@killa#7335 20190103 01:06",Object(i.b)("br",{parentName:"p"}),"\n","My company is thinking about adopting Hydra. There is a performance benchmark\nincluding data at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/docs/next/performance/hydra"}),"https://www.ory.sh/docs/next/performance/hydra")," and some\ninformation on how to scale hydra. Where can I get documentation on running\nmultiple instances of Hydra?",Object(i.b)("br",{parentName:"p"}),"\n","Source: Discord/ory/general")),Object(i.b)("p",null,"Hydra scales according to 12 factor principles. Just add another instance with\nthe same config.",Object(i.b)("br",{parentName:"p"}),"\n","Please check the documentation section for 12 factor principles for more\ninformation: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/docs/ecosystem/cloud-native"}),"https://www.ory.sh/docs/ecosystem/cloud-native"),". There is also some\ninformation on collecting statistics in the section on\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/prometheus"}),"prometheus")," in the five minute tutorial:\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/docs/hydra/5min-tutorial"}),"https://www.ory.sh/docs/hydra/5min-tutorial")))}b.isMDXComponent=!0},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,h=p["".concat(r,".").concat(d)]||p[d]||u[d]||i;return n?o.a.createElement(h,s(s({ref:t},l),{},{components:n})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);