(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[803],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=m(n),c=i,h=d["".concat(s,".").concat(c)]||d[c]||p[c]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5586:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o={id:"deployment",title:"Deployment Fundamentals and Requirements"},l={unversionedId:"ecosystem/deployment",id:"ecosystem/deployment",isDocsHomePage:!1,title:"Deployment Fundamentals and Requirements",description:"Integrates with Kubernetes",source:"@site/docs/ecosystem/deployment.md",sourceDirName:"ecosystem",slug:"/ecosystem/deployment",permalink:"/docs/ecosystem/deployment",editUrl:"https://github.com/ory/docs/edit/master/docs/docs/ecosystem/deployment.md",version:"current",lastUpdatedBy:"Arthur Knoepflin",lastUpdatedAt:1622568643,formattedLastUpdatedAt:"6/1/2021",frontMatter:{id:"deployment",title:"Deployment Fundamentals and Requirements"}},s=[{value:"Integrates with Kubernetes",id:"integrates-with-kubernetes",children:[]},{value:"Data Storage and Persistence",id:"data-storage-and-persistence",children:[{value:"In-memory (ephemeral)",id:"in-memory-ephemeral",children:[]},{value:"SQL (persistent)",id:"sql-persistent",children:[]}]},{value:"Prometheus",id:"prometheus",children:[]}],m={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"integrates-with-kubernetes"},"Integrates with Kubernetes"),(0,r.kt)("p",null,"Ory technology is cloud first and runs natively on Docker and Kubernetes and\nnaturally supports Kubernetes Helm Charts. Head over to our\n",(0,r.kt)("a",{parentName:"p",href:"https://k8s.ory.sh/helm"},"Kubernetes Helm Chart Repository")," for Charts and\naccompanying Documentation."),(0,r.kt)("h2",{id:"data-storage-and-persistence"},"Data Storage and Persistence"),(0,r.kt)("p",null,"All Ory projects support storing data in memory and in relational databases\n(PostgreSQL, MySQL)."),(0,r.kt)("p",null,"Ory Hydra additionally supports CockroachDB, but still beta, use it at your own\nrisk!"),(0,r.kt)("h3",{id:"in-memory-ephemeral"},"In-memory (ephemeral)"),(0,r.kt)("p",null,"Storing data in-memory helps you get started quickly without worrying about\nsetting up a database first. Keep in mind that all data is ephemeral and will be\nremoved when the service is killed."),(0,r.kt)("p",null,"Using in-memory storage is usually achieved by setting configuration key ",(0,r.kt)("inlineCode",{parentName:"p"},"dsn"),"\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"memory"),"."),(0,r.kt)("h3",{id:"sql-persistent"},"SQL (persistent)"),(0,r.kt)("p",null,"All Ory projects support PostgreSQL and MySQL as first-class citizens."),(0,r.kt)("p",null,"Ory Hydra additionally supports CockroachDB, but still beta, use it at your own\nrisk!"),(0,r.kt)("p",null,"Ory Kratos additionally supports SQLite."),(0,r.kt)("h5",{id:"sqlite"},"SQLite"),(0,r.kt)("p",null,"If configuration key ",(0,r.kt)("inlineCode",{parentName:"p"},"dsn")," (Data Source Name) is prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"sqlite://"),", then\nSQLite will be used as storage backend."),(0,r.kt)("p",null,"An exemplary configuration would look like this:\n",(0,r.kt)("inlineCode",{parentName:"p"},"DSN=sqlite:///tmp/some-db.sqlite?_fk=true")),(0,r.kt)("p",null,"The following DSN parameters are required:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_fk")," (bool): Must be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," (",(0,r.kt)("inlineCode",{parentName:"li"},"?_fk=true"),") for foreign keys to work.")),(0,r.kt)("p",null,"For a list of all supported query parameters, head over to\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mattn/go-sqlite3#connection-string"},"github.com/mattn/go-sqlite3"),"."),(0,r.kt)("h5",{id:"postgresql"},"PostgreSQL"),(0,r.kt)("p",null,"If configuration key ",(0,r.kt)("inlineCode",{parentName:"p"},"dsn")," (Data Source Name) is prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres://"),",\nthen PostgreSQL will be used as storage backend. An exemplary configuration\nwould look like this: ",(0,r.kt)("inlineCode",{parentName:"p"},"DSN=postgres://user:password@host:123/database")),(0,r.kt)("p",null,"Additionally, the following DSN parameters are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_conns")," (number): Sets the maximum number of open connections to the\ndatabase. Defaults to the number of CPU cores times 2."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_idle_conns")," (number): Sets the maximum number of connections in the idle.\nDefaults to the number of CPU cores."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_conn_lifetime"),' (duration): Sets the maximum amount of time ("ms", "s",\n"m", "h") a connection may be reused.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_conn_idle_time"),' (duration): Sets the maximum amount of time ("ms", "s",\n"m", "h") a connection can be kept alive.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sslmode")," (string): Whether or not to use SSL (default is require)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"disable")," - No SSL"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"require")," - Always SSL (skip verification)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"verify-ca")," - Always SSL (verify that the certificate presented by the\n",(0,r.kt)("inlineCode",{parentName:"li"},"server")," was signed by a trusted CA)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"verify-full")," - Always SSL (verify that the certification presented by the\nserver was signed by a trusted CA and the server host name matches the one\nin the certificate)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fallback_application_name")," (string): An application_name to fall back to if\none isn't provided."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connect_timeout")," (number): Maximum wait for connection, in seconds. Zero or\nnot specified means wait indefinitely."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sslcert")," (string): Cert file location. The file must contain PEM encoded\ndata."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sslkey")," (string): Key file location. The file must contain PEM encoded data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sslrootcert")," (string): The location of the root certificate file. The file\nmust contain PEM encoded data.")),(0,r.kt)("p",null,"To set such a parameter, append it to the DSN query, for example:\n",(0,r.kt)("inlineCode",{parentName:"p"},"postgres://user:password@host:123/database?sslmode=verify-full")),(0,r.kt)("h5",{id:"mysql"},"MySQL"),(0,r.kt)("p",null,"If configuration key ",(0,r.kt)("inlineCode",{parentName:"p"},"dsn")," (Data Source Name) is prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql://"),", then\nMySQL will be used as storage backend. An exemplary configuration would look\nlike this: ",(0,r.kt)("inlineCode",{parentName:"p"},"DSN=mysql://user:password@tcp(host:123)/database?parseTime=true")),(0,r.kt)("p",null,"Additionally, the following DSN parameters are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_conns")," (number): Sets the maximum number of open connections to the\ndatabase. Defaults to the number of CPU cores times 2."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_idle_conns")," (number): Sets the maximum number of connections in the idle.\nDefaults to the number of CPU cores."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_conn_lifetime"),' (duration): Sets the maximum amount of time ("ms", "s",\n"m", "h") a connection may be reused. Defaults to 0s (disabled).'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_conn_idle_time"),' (duration): Sets the maximum amount of time ("ms", "s",\n"m", "h") a connection can be kept alive.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"collation")," (string): Sets the collation used for client-server interaction on\nconnection. In contrast to charset, collation does not issue additional\nqueries. If the specified collation is unavailable on the target server, the\nconnection will fail."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"loc")," (string): Sets the location for time.Time values. Note that this sets\nthe location for time.Time values but does not change MySQL's time_zone\nsetting. For that set the time_zone DSN parameter. Please keep in mind, that\nparam values must be url.QueryEscape'ed. Alternatively you can manually\nreplace the / with %2F. For example US/Pacific would be loc=US%2FPacific."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxAllowedPacket")," (number): Max packet size allowed in bytes. The default\nvalue is 4 MiB and should be adjusted to match the server settings.\nmaxAllowedPacket=0 can be used to automatically fetch the max_allowed_packet\nvariable from server on every connection."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"readTimeout"),' (duration): I/O read timeout. The value must be a decimal number\nwith a unit suffix ("ms", "s", "m", "h"), such as "30s", "0.5m" or "1m30s".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeout"),' (duration): Timeout for establishing connections, aka dial timeout.\nThe value must be a decimal number with a unit suffix ("ms", "s", "m", "h"),\nsuch as "30s", "0.5m" or "1m30s".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tls")," (bool / string): tls=true enables TLS / SSL encrypted connection to the\nserver. Use skip-verify if you want to use a self-signed or invalid\ncertificate (server side)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"writeTimeout"),' (duration): I/O write timeout. The value must be a decimal\nnumber with a unit suffix ("ms", "s", "m", "h"), such as "30s", "0.5m" or\n"1m30s".')),(0,r.kt)("p",null,"To set such a parameter, append it to the DSN query, for example:\n",(0,r.kt)("inlineCode",{parentName:"p"},"mysql://user:password@tcp(host:123)/database?parseTime=true&writeTimeout=123s")),(0,r.kt)("h5",{id:"cockroachdb-beta"},"CockroachDB (beta)"),(0,r.kt)("p",null,"If configuration key ",(0,r.kt)("inlineCode",{parentName:"p"},"dsn")," (Data Source Name) is prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"cockroach://"),",\nthen CockroachDB will be used as storage backend. An exemplary configuration\nwould look like this: ",(0,r.kt)("inlineCode",{parentName:"p"},"DSN=cockroach://user:password@host:123/database")),(0,r.kt)("p",null,"Additionally, the following DSN parameters are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sslmode")," (string): Whether or not to use SSL (default is require)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"disable")," - No SSL"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"require")," - Always SSL (skip verification)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"verify-ca")," - Always SSL (verify that the certificate presented by the\n",(0,r.kt)("inlineCode",{parentName:"li"},"server")," was signed by a trusted CA)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"verify-full")," - Always SSL (verify that the certification presented by the\nserver was signed by a trusted CA and the server host name matches the one\nin the certificate)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"application_name")," (string): An initial value for the application_name session\nvariable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sslcert")," (string): Cert file location. The file must contain PEM encoded\ndata."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sslkey")," (string): Key file location. The file must contain PEM encoded data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sslrootcert")," (string): The location of the root certificate file. The file\nmust contain PEM encoded data.")),(0,r.kt)("p",null,"To set such a parameter, append it to the DSN query, for example:\n",(0,r.kt)("inlineCode",{parentName:"p"},"cockroach://user:password@host:123/database?sslmode=verify-full")),(0,r.kt)("h2",{id:"prometheus"},"Prometheus"),(0,r.kt)("p",null,"Ory technology exposes an endpoint for snapshot Prometheus data. This endpoint\nis usually found at the administrative port for Ory Kratos, Ory Hydra under the\n",(0,r.kt)("inlineCode",{parentName:"p"},"/metrics/prometheus")," path. If you run the default configuration, it will be\nexposed at:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ory Hydra: ",(0,r.kt)("inlineCode",{parentName:"li"},"http://<host>:4445/metrics/prometheus")),(0,r.kt)("li",{parentName:"ul"},"Ory Kratos: ",(0,r.kt)("inlineCode",{parentName:"li"},"http://<host>:4434/metrics/prometheus"))))}u.isMDXComponent=!0}}]);