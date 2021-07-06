(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[1843],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=s.createContext({}),l=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return n?s.createElement(m,a(a({ref:t},u),{},{components:n})):s.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2031:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var s=n(2122),r=n(9756),o=(n(7294),n(3905)),a=["components"],i={id:"software-architecture-philosophy",title:"Software Architecture and Philosophy"},c=void 0,l={unversionedId:"ecosystem/software-architecture-philosophy",id:"ecosystem/software-architecture-philosophy",isDocsHomePage:!1,title:"Software Architecture and Philosophy",description:"Ory's architecture is designed along several guiding principles:",source:"@site/docs/ecosystem/software-architecture-philosophy.md",sourceDirName:"ecosystem",slug:"/ecosystem/software-architecture-philosophy",permalink:"/docs/ecosystem/software-architecture-philosophy",editUrl:"https://github.com/ory/docs/edit/master/docs/docs/ecosystem/software-architecture-philosophy.md",version:"current",lastUpdatedBy:"Vincent",lastUpdatedAt:1617015841,formattedLastUpdatedAt:"3/29/2021",frontMatter:{id:"software-architecture-philosophy",title:"Software Architecture and Philosophy"},sidebar:"docs",previous:{title:"API Design",permalink:"/docs/ecosystem/api-design"},next:{title:"HTTP API",permalink:"/docs/reference/api"}},u=[{value:"Architecture Philosophy",id:"architecture-philosophy",children:[{value:"The Best System Dependency is no Dependency",id:"the-best-system-dependency-is-no-dependency",children:[]},{value:"The Platform is Responsible for Horizontal Scaling",id:"the-platform-is-responsible-for-horizontal-scaling",children:[]},{value:"Configuration from Environment Variables and Configuration Files",id:"configuration-from-environment-variables-and-configuration-files",children:[]},{value:"The Process is Stateless and Disposable",id:"the-process-is-stateless-and-disposable",children:[]},{value:"Maintenance tasks run as a one-off processes",id:"maintenance-tasks-run-as-a-one-off-processes",children:[]},{value:"External Services (PostgreSQL, MySQL, ...) are Attached Resources",id:"external-services-postgresql-mysql--are-attached-resources",children:[]},{value:"Concurrency as mandated by the UNIX Process Model",id:"concurrency-as-mandated-by-the-unix-process-model",children:[]}]}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ory's architecture is designed along several guiding principles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Minimal dependencies"),(0,o.kt)("li",{parentName:"ul"},"Runs everywhere"),(0,o.kt)("li",{parentName:"ul"},"Scales without effort"),(0,o.kt)("li",{parentName:"ul"},"Minimize room for human and network errors")),(0,o.kt)("p",null,"Our architecture leans on ",(0,o.kt)("a",{parentName:"p",href:"https://www.12factor.net"},"12factor.net principles"),"\nand is designed to run best on a Container Orchestration Systems such as\nKubernetes, CloudFoundry, OpenShift, and similar projects. While it is possible\nto run the Ory stack on a RaspberryPI, the integration with the Docker and\nContainer ecosystem is best documented and supported."),(0,o.kt)("h2",{id:"architecture-philosophy"},"Architecture Philosophy"),(0,o.kt)("p",null,"Our philosophy and assumption of how modern software works is summarized here."),(0,o.kt)("h3",{id:"the-best-system-dependency-is-no-dependency"},"The Best System Dependency is no Dependency"),(0,o.kt)("p",null,"The Ory stack does not rely on (operating) system-wide dependencies such as\nJava, Apache, or other libraries. The only system-wide dependency you may\nencounter is libc / libmusl, required for standard C and POSIX functions when\nusing SQLite."),(0,o.kt)("p",null,"Installing an Ory project is often just one binary away - on any architecture,\nand operating system. Our binaries are a couple of MB small and so are the\nDocker Images we distribute."),(0,o.kt)("p",null,"Ory exposes HTTP(s) ports and configuration of these ports. It does not need a\nwebserver such as NGINX or Apache HTTP Server."),(0,o.kt)("h3",{id:"the-platform-is-responsible-for-horizontal-scaling"},"The Platform is Responsible for Horizontal Scaling"),(0,o.kt)("p",null,"The Ory stack scales without the need for any additional external service\ndependencies (e.g. etcd, Memcached) except for a RDBMS (e.g. PostgreSQL, MySQL).\nScaling horizontally is as easy as starting another process."),(0,o.kt)("p",null,"The Ory Ecosystem assumes that the platform it's running on (e.g. Kubernetes,\nGoogle Cloud, Amazon Web Services, Azure, ...) is capable of Load Balancing and\ndoes not concern itself with things like Leader Election protocols or other\ncommunicating between process instances of the same project."),(0,o.kt)("h3",{id:"configuration-from-environment-variables-and-configuration-files"},"Configuration from Environment Variables and Configuration Files"),(0,o.kt)("p",null,"The Ory stack uses environment variables (often shortened to env vars or env)\nand files as a configuration source. All settings from a configuration file can\nalso be set using environment variables and vice versa."),(0,o.kt)("p",null,"This allows systems like Kubernetes to mount, and update, configuration files\nusing volume mounts sourced from ConfigMaps and other similar resources."),(0,o.kt)("p",null,"Our projects support hot-reloading of configuration files (support for hot\nreloading is not yet implemented everywhere)."),(0,o.kt)("p",null,"Configuration settings are validated using JSON Schema and we try to make it as\ndifficult as possible to misconfigure our software."),(0,o.kt)("h3",{id:"the-process-is-stateless-and-disposable"},"The Process is Stateless and Disposable"),(0,o.kt)("p",null,"Ory processes are stateless and share-nothing. Any data that needs to persist\nmust be stored in a stateful backing service, typically a RDBMS (SQL) database."),(0,o.kt)("p",null,"The processes are disposable, meaning they can be started or stopped at a\nmoment\u2019s notice. This facilitates fast elastic scaling, rapid deployment of code\nor config changes, and robustness of production deploys."),(0,o.kt)("p",null,"The Ory stack strives to minimize startup time, taking no more than a few\nmilliseconds to be ready. The processes shut down gracefully when they receive a\nSIGTERM signal from the process manager. For a web process, graceful shutdown is\nachieved by ceasing to listen on the service port (thereby refusing any new\nrequests), allowing any current requests to finish, and then exiting. Implicit\nin this model is that HTTP requests are short (no more than a few seconds), or\nin the case of long polling, the client should seamlessly attempt to reconnect\nwhen the connection is lost."),(0,o.kt)("h4",{id:"logs-are-stdout--stderr-streams"},"Logs are ",(0,o.kt)("inlineCode",{parentName:"h4"},"stdout")," / ",(0,o.kt)("inlineCode",{parentName:"h4"},"stderr")," Streams"),(0,o.kt)("p",null,"The Ory stack never concerns itself with routing or storage of its output\nstream. It does not attempt to write to or manage logfiles. Instead, each\nrunning process writes its event stream, unbuffered, to stdout and stderr.\nDuring local development, the developer will view this stream in the foreground\nof their terminal to observe the app\u2019s behavior."),(0,o.kt)("h3",{id:"maintenance-tasks-run-as-a-one-off-processes"},"Maintenance tasks run as a one-off processes"),(0,o.kt)("p",null,"The process formation is the array of processes that are used to do the app\u2019s\nregular business (such as handling web requests) as it runs. Separately,\ndevelopers will often wish to do one-off administrative or maintenance tasks for\nthe app, such as running database migrations (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra migrate sql"),")."),(0,o.kt)("p",null,"One-off admin processes should be run in an identical environment as the regular\nlong-running processes of the app. They run against a release, using the same\ncodebase and config as any process run against that release. Admin code must\nship with application code to avoid synchronization issues."),(0,o.kt)("h3",{id:"external-services-postgresql-mysql--are-attached-resources"},"External Services (PostgreSQL, MySQL, ...) are Attached Resources"),(0,o.kt)("p",null,"A backing service is any service the app consumes over the network as part of\nits normal operation. Examples include datastores (such as MySQL or CouchDB),\nmessaging/queueing systems (such as RabbitMQ or Beanstalkd), SMTP services for\noutbound email (such as Postfix), and caching systems (such as Memcached)."),(0,o.kt)("p",null,"The Ory code makes no distinction between local and third party services. To the\nprocess, both are attached resources, accessed via a URL or other\nlocator/credentials stored in the config. A deploy of a Ory project should be\nable to swap out a local MySQL database with one managed by a third party (such\nas Amazon RDS) without any changes to the app\u2019s code. Likewise, a local SMTP\nserver could be swapped with a third-party SMTP service (such as Postmark)\nwithout code changes. In both cases, only the resource handle in the config\nneeds to change."),(0,o.kt)("h3",{id:"concurrency-as-mandated-by-the-unix-process-model"},"Concurrency as mandated by the UNIX Process Model"),(0,o.kt)("p",null,"In the Ory Ecosystem, processes are a first class citizen. Processes take strong\ncues from the unix process model for running service daemons. Using this model,\nthe developer can architect their app to handle diverse workloads by assigning\neach type of work to a process type. For example, HTTP requests may be handled\nby a web process, and long-running background tasks handled by a worker process."))}p.isMDXComponent=!0}}]);