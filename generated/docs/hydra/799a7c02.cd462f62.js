(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{240:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(470)),o={id:"dependencies-environment",title:"Database Setup and Configuration"},s={unversionedId:"dependencies-environment",id:"version-v1.6/dependencies-environment",isDocsHomePage:!1,title:"Database Setup and Configuration",description:"ORY Hydra is built cloud native and implements",source:"@site/versioned_docs/version-v1.6/dependencies-environment.md",slug:"/dependencies-environment",permalink:"/hydra/docs/v1.6/dependencies-environment",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.6/dependencies-environment.md",version:"v1.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1595248858,sidebar:"version-v1.6/docs",previous:{title:"Run ORY Hydra in Docker",permalink:"/hydra/docs/v1.6/configure-deploy"},next:{title:"Preparing for Production",permalink:"/hydra/docs/v1.6/production"}},l=[{value:"SQL",id:"sql",children:[{value:"Configuration",id:"configuration",children:[]}]},{value:"Plugin",id:"plugin",children:[]}],c={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"ORY Hydra is built cloud native and implements\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.12factor.net/"}),"12factor")," principles. The Docker Image is 5 MB light\nand versioned with\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/hydra/blob/master/UPGRADE.md"}),"verbose upgrade instructions"),"\nand\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/hydra/blob/master/CHANGELOG.md"}),"detailed changelogs"),".\nAuto-scaling, migrations, health checks, it all works with zero additional work\nrequired. It is possible to run ORY Hydra on any platform, including but not\nlimited to OSX, Linux, Windows, ARM, FreeBSD and more."),Object(i.b)("p",null,"ORY Hydra has two operational modes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'In-memory: This mode does not work with more than one instance ("cluster") and\nany state is lost after restarting the instance.'),Object(i.b)("li",{parentName:"ul"},"SQL: This mode works with more than one instance and state is not lost after\nrestarts.")),Object(i.b)("p",null,"No further dependencies are required for a production-ready instance."),Object(i.b)("h2",{id:"sql"},"SQL"),Object(i.b)("p",null,"The SQL adapter supports two DBMS: PostgreSQL 9.6+ and MySQL 5.7+. Please note\nthat older MySQL versions have issues with ORY Hydra's database schema. For more\ninformation ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/hydra/issues/377"}),"go here"),"."),Object(i.b)("p",null,"If you do run the SQL adapter, you must first create the database schema. The\n",Object(i.b)("inlineCode",{parentName:"p"},"hydra serve")," command does not do this automatically, instead you must run\n",Object(i.b)("inlineCode",{parentName:"p"},"hydra migrate sql")," to create the schemas. The ",Object(i.b)("inlineCode",{parentName:"p"},"hydra migrate sql")," command also\nruns database migrations in case of an upgrade. Please follow the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/hydra/blob/master/UPGRADE.md"}),"upgrade instructions")," to\nsee when you need to run this command. Always create a backup before running\n",Object(i.b)("inlineCode",{parentName:"p"},"hydra migrate sql"),"!"),Object(i.b)("p",null,"Running SQL migrations in Docker is very easy, check out the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/hydra/blob/master/quickstart-postgres.yml"}),"docker-compose"),"\nexample to see how we did it!"),Object(i.b)("h3",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Both MySQL and PostgreSQL adapters support the following settings. You can\nmodify these settings by appending query parameters to your DSN\n(",Object(i.b)("inlineCode",{parentName:"p"},"postgres://user:pw@host:port/database?setting1=foo&setting2=bar"),"):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"max_conns")," sets the maximum number of open connections to the database.\nDefaults to the number of CPUs. Example\n",Object(i.b)("inlineCode",{parentName:"li"},"postgres://user:pw@host:port/database?max_conns=10"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"max_idle_conns")," sets the maximum number of connections in the idle connection\npool. Defaults to the number of CPUs. Example\n",Object(i.b)("inlineCode",{parentName:"li"},"postgres://user:pw@host:port/database?max_idle_conns=5"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"max_conn_lifetime")," sets the maximum amount of time (",Object(i.b)("inlineCode",{parentName:"li"},"ms"),", ",Object(i.b)("inlineCode",{parentName:"li"},"s"),", ",Object(i.b)("inlineCode",{parentName:"li"},"m"),", ",Object(i.b)("inlineCode",{parentName:"li"},"h"),") a\nconnection may be reused. Defaults to 0. Example\n",Object(i.b)("inlineCode",{parentName:"li"},"postgres://user:pw@host:port/database?max_conn_lifetime=10s"),".")),Object(i.b)("h4",{id:"mysql"},"MySQL"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"DSN Layout:\n",Object(i.b)("inlineCode",{parentName:"p"},"mysql://user:pw@tcp(host:port)/database?someSetting=value&foo=bar"),".")),Object(i.b)("p",null,"On top of the settings above, MySQL supports additional settings:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sql_notes"),", if set to ",Object(i.b)("inlineCode",{parentName:"li"},"false"),", ignores MySQL notices. If left empty or set to\n",Object(i.b)("inlineCode",{parentName:"li"},"true"),", they will be treated as warnings. Example\n",Object(i.b)("inlineCode",{parentName:"li"},"mysql://user:pw@tcp(host:port)/database?sql_notes=false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sql_mode")," sets the server-side strict mode. Read more about possible values\n",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://dev.mysql.com/doc/refman/5.7/en/sql-mode.html"}),"here"),".")),Object(i.b)("h4",{id:"postgresql"},"PostgreSQL"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"DSN Layout: ",Object(i.b)("inlineCode",{parentName:"p"},"postgres://user:pw@host:port/database?someSetting=value&foo=bar"),".")),Object(i.b)("p",null,"On top of the settings above, PostgreSQL supports additional settings:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sslmode")," sets whether or not to use SSL (default is require, this is not the\ndefault for libpq). Valid values for sslmode are: ",Object(i.b)("em",{parentName:"li"}," ",Object(i.b)("inlineCode",{parentName:"em"},"disable")," - No SSL "),Object(i.b)("inlineCode",{parentName:"li"},"require")," - Always SSL (skip verification) ",Object(i.b)("em",{parentName:"li"}," ",Object(i.b)("inlineCode",{parentName:"em"},"verify-ca")," - Always SSL (verify\nthat the certificate presented by the server was signed by a trusted CA) "),Object(i.b)("inlineCode",{parentName:"li"},"verify-full")," - Always SSL (verify that the certification presented by the\nserver was signed by a trusted CA and the server host name matches the one in\nthe certificate)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fallback_application_name")," - An application_name to fall back to if one isn't\nprovided."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"connect_timeout")," - Maximum wait for connection, in seconds. Zero or not\nspecified means wait indefinitely."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sslcert")," - Cert file location. The file must contain PEM encoded data."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sslkey")," - Key file location. The file must contain PEM encoded data."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sslrootcert")," - The location of the root certificate file. The file must\ncontain PEM encoded data.")),Object(i.b)("h2",{id:"plugin"},"Plugin"),Object(i.b)("p",null,"It is possible to implement your own DBAL using Go Plugins."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"We strongly discourage you from implementing your own DBAL. Special knowledge\nis required and internal interfaces will break without notice and migration\nguides. This can lead to serious security issues and vulnerabilities. USE AT\nYOUR OWN RISK.")),Object(i.b)("p",null,"Your plugin must implement interface ",Object(i.b)("inlineCode",{parentName:"p"},"github.com/ory/hydra/driver.Registry"),". You\ncan load the plugin as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"dsn: plugin:///path/to/file.so\n")),Object(i.b)("p",null,"We strongly discourage you from using this feature."))}b.isMDXComponent=!0},470:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);