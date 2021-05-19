(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{572:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,h=b["".concat(o,".").concat(u)]||b[u]||p[u]||l;return n?r.a.createElement(h,s(s({ref:t},c),{},{components:n})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),l=(n(0),n(572)),o={id:"kubernetes-helm-chart",title:"Kubernetes Helm Chart"},s={unversionedId:"guides/kubernetes-helm-chart",id:"version-v1.10/guides/kubernetes-helm-chart",isDocsHomePage:!1,title:"Kubernetes Helm Chart",description:"The ORY Hydra Helm Chart helps you deploy ORY Hydra on Kubernetes using Helm.",source:"@site/versioned_docs/version-v1.10/guides/kubernetes-helm-chart.mdx",sourceDirName:"guides",slug:"/guides/kubernetes-helm-chart",permalink:"/hydra/docs/guides/kubernetes-helm-chart",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/guides/kubernetes-helm-chart.mdx",version:"v1.10",lastUpdatedBy:"Vincent",lastUpdatedAt:1619161392,formattedLastUpdatedAt:"4/23/2021",frontMatter:{id:"kubernetes-helm-chart",title:"Kubernetes Helm Chart"},sidebar:"version-v1.10/docs",previous:{title:"Secrets and Key Rotation",permalink:"/hydra/docs/guides/secrets-key-rotation"},next:{title:"SSL/TLS, HTTPS, Self-Signed Certificates",permalink:"/hydra/docs/guides/ssl-https-tls"}},i=[{value:"Installation",id:"installation",children:[{value:"With SQL Database",id:"with-sql-database",children:[]},{value:"With Google Cloud SQL",id:"with-google-cloud-sql",children:[]}]},{value:"Configuration",id:"configuration",children:[]},{value:"Examples",id:"examples",children:[{value:"Exemplary Login and Consent App",id:"exemplary-login-and-consent-app",children:[]},{value:"Hydra Maester",id:"hydra-maester",children:[]}]}],c={toc:i};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The ORY Hydra Helm Chart helps you deploy ORY Hydra on Kubernetes using Helm.\nThe source code is available on\n",Object(l.b)("a",{parentName:"p",href:"https://github.com/ory/k8s"},"github.com/ory/k8s"),"."),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("p",null,"To install ORY Hydra, the following\n",Object(l.b)("a",{parentName:"p",href:"/hydra/docs/reference/configuration"},"configuration values")," must be set:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"hydra.config.dsn")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"hydra.config.urls.self.issuer")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"hydra.config.urls.login")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"hydra.config.urls.consent")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"hydra.config.secrets.system"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"NOTE:")," If no ",Object(l.b)("inlineCode",{parentName:"p"},"hydra.config.secrets.system")," secrets is supplied and\n",Object(l.b)("inlineCode",{parentName:"p"},"hydra.existingSecret")," is empty, a secret is generated automatically. The\ngenerated secret is cryptographically secure, and 32 signs long.")),Object(l.b)("p",null,"If you wish to install ORY Hydra with an in-memory database, a cryptographically\nstrong secret, a Login and Consent provider located at ",Object(l.b)("inlineCode",{parentName:"p"},"https://my-idp/")," run:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ helm install \\\n    --set 'hydra.config.secrets.system=$(LC_ALL=C tr -dc 'A-Za-z0-9' < /dev/urandom | base64 | head -c 32)' \\\n    --set 'hydra.config.dsn=memory' \\\n    --set 'hydra.config.urls.self.issuer=https://my-hydra/' \\\n    --set 'hydra.config.urls.login=https://my-idp/login' \\\n    --set 'hydra.config.urls.consent=https://my-idp/consent' \\\n    ory/hydra\n")),Object(l.b)("p",null,"You can optionally also set the cookie secrets:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ helm install \\\n    ...\n    --set 'hydra.config.secrets.cookie=$(LC_ALL=C tr -dc 'A-Za-z0-9' < /dev/urandom | base64 | head -c 32)' \\\n    ...\n    ory/hydra\n")),Object(l.b)("p",null,"Alternatively, you can use an existing\n",Object(l.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"Kubernetes Secret"),"\ninstead of letting the Helm Chart create one for you:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"\n$ kubectl create secret generic my-secure-secret --from-literal=dsn=postgres://foo:bar@baz:1234/db \\\n    --from-literal=secretsCookie=$(LC_ALL=C tr -dc 'A-Za-z0-9' < /dev/urandom | base64 | head -c 32) \\\n    --from-literal=secretsSystem=$(LC_ALL=C tr -dc 'A-Za-z0-9' < /dev/urandom | base64 | head -c 32)\n\n$ helm install \\\n    ...\n    --set 'hydra.existingSecret=my-secure-secret' \\\n    ...\n    ory/hydra\n")),Object(l.b)("h3",{id:"with-sql-database"},"With SQL Database"),Object(l.b)("p",null,"To run ORY Hydra against a SQL database, set the connection string. For example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ helm install \\\n    ...\n    --set 'dsn=postgres://foo:bar@baz:1234/db' \\\n    ory/hydra\n")),Object(l.b)("p",null,"This chart does not require MySQL, PostgreSQL, or CockroachDB as dependencies\nbecause we strongly encourage you not to run a database in Kubernetes but\ninstead recommend to rely on a managed SQL database such as Google Cloud SQL or\nAWS Aurora."),Object(l.b)("h3",{id:"with-google-cloud-sql"},"With Google Cloud SQL"),Object(l.b)("p",null,"To connect to Google Cloud SQL, you could use the\n",Object(l.b)("a",{parentName:"p",href:"https://github.com/rimusz/charts/tree/master/stable/gcloud-sqlproxy"},Object(l.b)("inlineCode",{parentName:"a"},"gcloud-sqlproxy")),"\nchart:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ helm upgrade pg-sqlproxy rimusz/gcloud-sqlproxy --namespace sqlproxy \\\n    --set 'serviceAccountKey=\"$(cat service-account.json | base64 | tr -d '\\n')\"' \\\n    ...\n")),Object(l.b)("p",null,"When bringing up ORY Hydra, set the host to ",Object(l.b)("inlineCode",{parentName:"p"},"pg-sqlproxy-gcloud-sqlproxy")," as\ndocumented\n",Object(l.b)("a",{parentName:"p",href:"https://github.com/rimusz/charts/tree/master/stable/gcloud-sqlproxy#installing-the-chart"},"here"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ helm install \\\n    ...\n    --set 'dsn=postgres://foo:bar@pg-sqlproxy-gcloud-sqlproxy:5432/db' \\\n    ory/hydra\n")),Object(l.b)("h2",{id:"configuration"},"Configuration"),Object(l.b)("p",null,"You can pass your ",Object(l.b)("a",{parentName:"p",href:"/hydra/docs/reference/configuration"},"ORY Hydra configuration file"),"\nby creating a yaml file with key ",Object(l.b)("inlineCode",{parentName:"p"},"hydra.config")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"# hydra-config.yaml\n\nhydra:\n  config:\n    # e.g.:\n    ttl:\n      access_token: 1h\n    # ...\n")),Object(l.b)("p",null,"and passing that as a value override to helm:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ helm install -f ./path/to/hydra-config.yaml ory/hydra\n")),Object(l.b)("p",null,"Additionally, the following extra settings are available:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"autoMigrate")," (bool): If enabled, an ",Object(l.b)("inlineCode",{parentName:"li"},"initContainer")," running\n",Object(l.b)("inlineCode",{parentName:"li"},"hydra migrate sql")," will be created."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"dangerousForceHttp")," (bool): If enabled, sets the ",Object(l.b)("inlineCode",{parentName:"li"},"--dangerous-force-http"),"\nflag on ",Object(l.b)("inlineCode",{parentName:"li"},"hydra serve all"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"dangerousAllowInsecureRedirectUrls")," (string[]): Sets the\n",Object(l.b)("inlineCode",{parentName:"li"},"--dangerous-allow-insecure-redirect-urls")," flag on ",Object(l.b)("inlineCode",{parentName:"li"},"hydra serve all"),".")),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)("h3",{id:"exemplary-login-and-consent-app"},"Exemplary Login and Consent App"),Object(l.b)("p",null,"This tutorial assumes that you're running Minikube locally. If you're not\nrunning Kubernetes locally, please adjust the hostnames accordingly."),Object(l.b)("p",null,"Let's install the Login and Consent App first"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ helm install hydra-example-idp ory/example-idp \\\n    --set 'hydraAdminUrl=http://hydra-example-admin:4445/' \\\n    --set 'hydraPublicUrl=http://public.hydra.localhost/' \\\n    --set 'ingress.enabled=true'\n")),Object(l.b)("p",null,"with hostnames"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"http://hydra-example-admin:4445/")," corresponding to deployment name\n",Object(l.b)("inlineCode",{parentName:"li"},"--name hydra-example")," (see next code sample) with suffix ",Object(l.b)("inlineCode",{parentName:"li"},"-admin")," which is\nthe hostname of the ORY Hydra Admin API Service."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"https://public.hydra.localhost/")," which is the default value for\n",Object(l.b)("inlineCode",{parentName:"li"},"ingress.public.hosts[0].host")," from ",Object(l.b)("inlineCode",{parentName:"li"},"ory/hydra")," ( see next code sample).")),Object(l.b)("p",null,"Next install ORY Hydra. Please note that SSL is disabled using\n",Object(l.b)("inlineCode",{parentName:"p"},"--set hydra.dangerousForceHttp=true")," which should never be done when working\noutside of ",Object(l.b)("inlineCode",{parentName:"p"},"localhost")," and only for testing and demonstration purposes. Install\nthe ORY Hydra Helm Chart"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ helm install hydra-example ory/hydra \\\n    --set 'hydra.config.secrets.system=$(LC_ALL=C tr -dc 'A-Za-z0-9' < /dev/urandom | base64 | head -c 32)' \\\n    --set 'hydra.config.dsn=memory' \\\n    --set 'hydra.config.urls.self.issuer=http://public.hydra.localhost/' \\\n    --set 'hydra.config.urls.login=http://example-idp.localhost/login' \\\n    --set 'hydra.config.urls.consent=http://example-idp.localhost/consent' \\\n    --set 'hydra.config.urls.logout=http://example-idp.localhost/logout' \\\n    --set 'ingress.public.enabled=true' \\\n    --set 'ingress.admin.enabled=true' \\\n    --set 'hydra.dangerousForceHttp=true'\n")),Object(l.b)("p",null,"with hostnames"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"example-idp.localhost")," which is the default for ",Object(l.b)("inlineCode",{parentName:"li"},"ingress.hosts[0].host")," from\n",Object(l.b)("inlineCode",{parentName:"li"},"ory/example-idp"),".")),Object(l.b)("p",null,"If running Minikube, enable the Ingress addon"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ minikube addons enable ingress\n")),Object(l.b)("p",null,"and get the IP addresses for the Ingress controllers with (you may need to wait\na bit)"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get ing\nNAME                   HOSTS                    ADDRESS        PORTS   AGE\nhydra-example-idp      example-idp.localhost    192.168.64.3   80      3m47s\nhydra-example-public   public.hydra.localhost   192.168.64.3   80      35s\nhydra-example-admin    admin.hydra.localhost    192.168.64.3   80      35s\n")),Object(l.b)("p",null,"or alternatively with"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ minikube ip192.168.64.3\n\n")),Object(l.b)("p",null,"next route the hostnames to the IP Address from above by editing, for example\n",Object(l.b)("inlineCode",{parentName:"p"},"/etc/hosts"),". The result should look something like:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ cat /etc/hosts\n127.0.0.1       localhost\n255.255.255.255 broadcasthost\n::1             localhost\n# ...\n192.168.64.3    example-idp.localhost\n192.168.64.3    admin.hydra.localhost\n192.168.64.3    public.hydra.localhost\n")),Object(l.b)("p",null,"Please note that file contents will be different on every operating system and\nnetwork. Now, confirm that everything is working:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ curl http://example-idp.localhost/\nhttp://public.hydra.localhost/.well-known/openid-configuration\n")),Object(l.b)("p",null,"Next, you can follow the ",Object(l.b)("a",{parentName:"p",href:"/hydra/docs/5min-tutorial"},"5 Minute Tutorial"),", skipping the\n",Object(l.b)("inlineCode",{parentName:"p"},"git")," and ",Object(l.b)("inlineCode",{parentName:"p"},"docker-compose")," set up sections. Assuming you have ORY Hydra\ninstalled locally, you can rewrite commands from, for example,"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose -f quickstart.yml exec hydra \\\n      hydra clients create \\\n      --endpoint http://127.0.0.1:4445/ \\\n      --id my-client \\\n      --secret secret \\\n      -g client_credentials\n\n$ docker-compose -f quickstart.yml exec hydra \\\n      hydra token client \\\n      --endpoint http://127.0.0.1:4444/ \\\n      --client-id my-client \\\n      --client-secret secret\n")),Object(l.b)("p",null,"to"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ hydra clients create \\\n    --endpoint http://admin.hydra.localhost/ \\\n    --id my-client \\\n    --secret secret \\\n    -g client_credentials\n\n$ hydra token client \\\n    --endpoint http://public.hydra.localhost/ \\\n    --client-id my-client \\\n    --client-secret secret\n")),Object(l.b)("h3",{id:"hydra-maester"},"Hydra Maester"),Object(l.b)("p",null,"This chart includes a helper chart in the form of\n",Object(l.b)("a",{parentName:"p",href:"https://github.com/ory/k8s/blob/master/docs/helm/hydra-maester.md"},"Hydra Maester"),",\na Kubernetes controller, which manages OAuth2 clients using the\n",Object(l.b)("inlineCode",{parentName:"p"},"oauth2clients.hydra.ory.sh")," custom resource. By default, this component is\nenabled and installed together with Hydra. However, it can be disabled by\nsetting the proper flag:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ helm install \\\n    --set 'maester.enabled=false' \\\n    ory/hydra\n")),Object(l.b)("h4",{id:"using-fullnameoverride"},"Using fullnameOverride"),Object(l.b)("p",null,"If you use need to override the name of the hydra resources such as the\ndeployment or services, the traditional ",Object(l.b)("inlineCode",{parentName:"p"},"fullnameOverride")," value is available."),Object(l.b)("p",null,"If you use it and deploy maester as part of hydra, make sure you also set\n",Object(l.b)("inlineCode",{parentName:"p"},"maester.hydraFullnameOverride")," with the same value, so that the admin service\nname used by maester is properly computed with the new value."),Object(l.b)("p",null,"Should you forget, helm will fail and remind you to."))}d.isMDXComponent=!0}}]);