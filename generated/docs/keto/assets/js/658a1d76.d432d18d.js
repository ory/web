(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[5972],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),k=o,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84289:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],l={id:"configure-deploy",title:"Configure and Deploy"},s=void 0,p={unversionedId:"configure-deploy",id:"version-v0.5/configure-deploy",isDocsHomePage:!1,title:"Configure and Deploy",description:"Like all other ORY services, ORY Keto is implemented following",source:"@site/versioned_docs/version-v0.5/configure-deploy.md",sourceDirName:".",slug:"/configure-deploy",permalink:"/keto/docs/v0.5/configure-deploy",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.5/configure-deploy.md",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1590665913,formattedLastUpdatedAt:"5/28/2020",frontMatter:{id:"configure-deploy",title:"Configure and Deploy"},sidebar:"version-v0.5/docs",previous:{title:"Installation",permalink:"/keto/docs/v0.5/install"},next:{title:"Secure",permalink:"/keto/docs/v0.5/secure"}},c=[{value:"Create a Network",id:"create-a-network",children:[]},{value:"Start the PostgreSQL Container",id:"start-the-postgresql-container",children:[]},{value:"Run the ORY Keto Service",id:"run-the-ory-keto-service",children:[]},{value:"Working with the CLI",id:"working-with-the-cli",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Like all other ORY services, ORY Keto is implemented following\n",(0,a.kt)("a",{parentName:"p",href:"https://12factor.net"},"12factor principles")," and completely stateless. To store\nstate, ORY Keto supports two types of storage adapters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"in-memory:"),' This adapter does not work with more than one instance\n("cluster") and any state is lost after restarting the instance.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SQL:")," This adapter works with more than one instance and state persists\nafter restarts.")),(0,a.kt)("p",null,"The SQL adapter supports two DBMS: PostgreSQL 9.6+ and MySQL 5.7+. Please note\nthat older MySQL versions may have issues with the database schema. We recommend\nworking with PostgreSQL as migrations will be faster."),(0,a.kt)("p",null,"This guide will:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download and run a PostgreSQL container in Docker."),(0,a.kt)("li",{parentName:"ol"},"Download and run ORY Keto using Docker.")),(0,a.kt)("h2",{id:"create-a-network"},"Create a Network"),(0,a.kt)("p",null,"As a first step, we create a network to which we connect all our Docker\ncontainers. This enables the containers to communicate with each other."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker network create ketoguide\n")),(0,a.kt)("h2",{id:"start-the-postgresql-container"},"Start the PostgreSQL Container"),(0,a.kt)("p",null,"For the purpose of this tutorial, we will use PostgreSQL as a database. As you\nprobably already know, don't run databases in Docker in production! For the sake\nof this tutorial however, let's use Docker to quickly deploy the database."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker run \\\n  --network ketoguide \\\n  --name ory-keto-example--postgres \\\n  -e POSTGRES_USER=keto \\\n  -e POSTGRES_PASSWORD=secret \\\n  -e POSTGRES_DB=keto \\\n  -d postgres:9.6\n")),(0,a.kt)("p",null,"This command wil start a postgres instance with name\n",(0,a.kt)("inlineCode",{parentName:"p"},"ory-keto-example--postgres"),", set up a database called ",(0,a.kt)("inlineCode",{parentName:"p"},"keto")," and create a user\n",(0,a.kt)("inlineCode",{parentName:"p"},"keto")," with password ",(0,a.kt)("inlineCode",{parentName:"p"},"secret"),"."),(0,a.kt)("h2",{id:"run-the-ory-keto-service"},"Run the ORY Keto Service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# The database url points us at the postgres instance.\n# This could also be an ephermal in-memory database (`export DSN=memory`)\n# or a MySQL URI.\n$ export DSN=postgres://keto:secret@ory-keto-example--postgres:5432/keto?sslmode=disable\n\n# ORY Keto does not do magic, it requires conscious decisions.\n# An example is running SQL migrations when setting up a new installation of ORY Keto\n# or upgrading an existing one.\n# This is equivalent to:\n# DSN=postgres://keto:secret@ory-keto-example--postgres:5432/keto?sslmode=disable keto migrate sql`\n$ docker run -it --rm \\\n  --network ketoguide \\\n  -e DSN=$DSN \\\n  oryd/keto:v0.5.6-alpha.1 \\\n  migrate sql -e\n\nApplying `client` SQL migrations...\n[...]\nMigration successful!\n\n# Let's run the server!\n$ docker run -d \\\n  --name ory-keto-example--keto \\\n  --network ketoguide \\\n  -p 4466:4466 \\\n  -e DSN=$DSN \\\n  oryd/keto:v0.5.6-alpha.1 \\\n  serve\n")),(0,a.kt)("p",null,"Great, the server is running now! Make sure to check the logs and see if there\nwere any errors or issues before moving on to the next step:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker logs ory-keto-example--keto\n")),(0,a.kt)("p",null,"You should see one line showing where the server is running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'time="2018-10-27T11:48:56Z" level=info msg="Listening on http://localhost:4466"\n')),(0,a.kt)("h2",{id:"working-with-the-cli"},"Working with the CLI"),(0,a.kt)("p",null,"Let's explore managing ORY Keto via the CLI. We will use the ORY Access Control\nPolicy Engine (",(0,a.kt)("inlineCode",{parentName:"p"},"/engines/acp/ory"),") with the ",(0,a.kt)("inlineCode",{parentName:"p"},"exact")," matcher, define policies,\nand check if particular users are allowed to do certain things. Let's create our\nfirst policy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ mkdir policies\n\n$ cat > policies/example-policy.json <<EOL\n[{\n    "id": "example-policy",\n    "subjects": ["alice"],\n    "resources": ["blog_posts:my-first-blog-post"],\n    "actions": ["delete"],\n    "effect": "allow"\n}]\nEOL\n\n$ docker run -it --rm \\\n  --network ketoguide \\\n  -v $(pwd)/policies:/policies \\\n  -e KETO_URL=http://ory-keto-example--keto:4466/ \\\n  oryd/keto:v0.5.6-alpha.1 \\\n  engines acp ory policies import exact /policies/example-policy.json\n')),(0,a.kt)("p",null,"Check if the policy has been created:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ docker run -it --rm \\\n  --network ketoguide \\\n  -e KETO_URL=http://ory-keto-example--keto:4466/ \\\n  oryd/keto:v0.5.6-alpha.1 \\\n  engines acp ory policies get exact example-policy\n{\n  "actions": [\n    "delete"\n  ],\n...\n')),(0,a.kt)("p",null,"Check if Alice is allowed to delete the blog post:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ docker run -it --rm \\\n  --network ketoguide \\\n  -e KETO_URL=http://ory-keto-example--keto:4466/ \\\n  oryd/keto:v0.5.6-alpha.1 \\\n  engines acp ory allowed exact alice blog_posts:my-first-blog-post delete\n{\n        "allowed": true\n}\n')),(0,a.kt)("p",null,"Other users like Bob can not delete it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ docker run -it --rm \\\n  --network ketoguide \\\n  -e KETO_URL=http://ory-keto-example--keto:4466/ \\\n  oryd/keto:v0.5.6-alpha.1 \\\n  engines acp ory allowed exact bob blog_posts:my-first-blog-post delete\n{\n        "allowed": false\n}\n')))}d.isMDXComponent=!0}}]);