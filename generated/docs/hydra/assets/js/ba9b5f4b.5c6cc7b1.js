(window.webpackJsonp=window.webpackJsonp||[]).push([[358],{430:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),o=(n(0),n(568)),i={id:"hydra-janitor",title:"hydra janitor",description:"hydra janitor Clean the database of old tokens and login/consent requests"},s={unversionedId:"cli/hydra-janitor",id:"version-v1.10/cli/hydra-janitor",isDocsHomePage:!1,title:"hydra janitor",description:"hydra janitor Clean the database of old tokens and login/consent requests",source:"@site/versioned_docs/version-v1.10/cli/hydra-janitor.md",slug:"/cli/hydra-janitor",permalink:"/hydra/docs/cli/hydra-janitor",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/cli/hydra-janitor.md",version:"v1.10",lastUpdatedBy:"aeneasr",lastUpdatedAt:1616672187,formattedLastUpdatedAt:"3/25/2021",sidebar:"version-v1.10/docs",previous:{title:"hydra clients update",permalink:"/hydra/docs/cli/hydra-clients-update"},next:{title:"hydra keys",permalink:"/hydra/docs/cli/hydra-keys"}},l=[{value:"hydra janitor",id:"hydra-janitor",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Warning",id:"warning",children:[]},{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hydra-janitor"},"hydra janitor"),Object(o.b)("p",null,"Clean the database of old tokens and login/consent requests"),Object(o.b)("h3",{id:"synopsis"},"Synopsis"),Object(o.b)("p",null,"This command will cleanup any expired oauth2 tokens as well as login/consent\nrequests."),Object(o.b)("h3",{id:"warning"},"Warning"),Object(o.b)("p",null,"This command is in beta. Proceed with caution!"),Object(o.b)("p",null,"This is a destructive command and will purge data directly from the database.\nPlease use this command with caution if you need to keep historic data for any\nreason."),Object(o.b)("p",null,"###############"),Object(o.b)("p",null,"Janitor can be used in several ways."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"By passing the database connection string (DSN) as an argument Pass the\ndatabase url (dsn) as an argument to janitor. E.g. janitor\n","<","database-url",">")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"By passing the DSN as an environment variable"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"export DSN=...\njanitor -e\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"By passing a configuration file containing the DSN janitor -c\n/path/to/conf.yml")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Extra ",Object(o.b)("em",{parentName:"p"},"optional")," parameters can also be added such as"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"janitor --keep-if-younger 23h --access-lifespan 1h --refresh-lifespan 40h --consent-request-lifespan 10m &lt;database-url&gt;\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Running only a certain cleanup"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"janitor --tokens &lt;database-url&gt;\n")),Object(o.b)("p",{parentName:"li"},"or"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"janitor --requests &lt;database-url&gt;\n")),Object(o.b)("p",{parentName:"li"},"or both"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"janitor --tokens --requests &lt;database-url&gt;\n")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"hydra janitor [&lt;database-url&gt;] [flags]\n")),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"      --access-lifespan duration            Set the access token lifespan e.g. 1s, 1m, 1h.\n  -c, --config strings                      Path to one or more .json, .yaml, .yml, .toml config files. Values are loaded in the order provided, meaning that the last config file overwrites values from the previous config file.\n      --consent-request-lifespan duration   Set the login/consent request lifespan e.g. 1s, 1m, 1h\n  -h, --help                                help for janitor\n      --keep-if-younger duration            Keep database records that are younger than a specified duration e.g. 1s, 1m, 1h.\n  -e, --read-from-env                       If set, reads the database connection string from the environment variable DSN or config file key dsn.\n      --refresh-lifespan duration           Set the refresh token lifespan e.g. 1s, 1m, 1h.\n      --requests                            This will only run the cleanup on requests and will skip token cleanup.\n      --tokens                              This will only run the cleanup on tokens and will skip requests cleanup.\n")),Object(o.b)("h3",{id:"see-also"},"SEE ALSO"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"hydra"},"hydra")," - Run and manage ORY Hydra")))}p.isMDXComponent=!0},568:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return n?r.a.createElement(h,s(s({ref:t},c),{},{components:n})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);