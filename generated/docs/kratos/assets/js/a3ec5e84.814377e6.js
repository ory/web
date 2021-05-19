(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{357:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(553)),i={id:"index",slug:"/",title:"Introduction"},s={unversionedId:"index",id:"version-v0.6/index",isDocsHomePage:!1,title:"Introduction",description:"Ory Kratos is an API-first Identity and User Management system that is built",source:"@site/versioned_docs/version-v0.6/index.md",sourceDirName:".",slug:"/",permalink:"/kratos/docs/",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/index.md",version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619690398,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"index",slug:"/",title:"Introduction"},sidebar:"version-v0.6/docs",next:{title:"Quickstart",permalink:"/kratos/docs/quickstart"}},c=[],l={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Ory Kratos is an API-first Identity and User Management system that is built\naccording to\n",Object(o.b)("a",{parentName:"p",href:"https://www.ory.sh/docs/ecosystem/software-architecture-philosophy/"},"cloud architecture best practices"),".\nIt implements core use cases that almost every software application needs to\ndeal with:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Self-service Login and Registration"),": Allow end-users to create and sign\ninto accounts (we call them ",Object(o.b)("strong",{parentName:"li"},"identities"),') using Username / Email and\npassword combinations, Social Sign In ("Sign in with Google, GitHub"),\nPasswordless flows, and others.'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Multi-Factor Authentication (MFA/2FA)"),": Support protocols such as TOTP\n(",Object(o.b)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc6238"},"RFC 6238")," and\n",Object(o.b)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc4226"},"IETF RFC 4226")," - better known as\n",Object(o.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Google_Authenticator"},"Google Authenticator"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Account Verification"),": Verify that an E-Mail address, phone number, or\nphysical address actually belong to that identity."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Account Recovery"),': Recover access using "Forgot Password" flows, Security\nCodes (in case of MFA device loss), etc.'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Profile and Account Management"),": Update passwords, personal details, email\naddresses, linked social profiles using secure flows."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Admin APIs"),": Import, update, delete identities.")),Object(o.b)("p",null,"Identity is a hard problem and Ory Kratos solves it in a unique way. We value\nsecurity, flexibility, and integration with cloud technology (such as\nKubernetes) most:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Ory Kratos does not ship an HTML Rendering Engine. You can build your own UI\n(or use our example UIs) in the language and framework you feel most\ncomfortable with."),Object(o.b)("li",{parentName:"ul"},"The workflow engine allows you to fully customize your user experience.\nWhether your users need to activate their account after registration, or have\na multi-step (progressive) registration - it's all possible!"),Object(o.b)("li",{parentName:"ul"},"One Identity Data Model does not fit all - you may have customers that need a\nbilling address, internal support staff that is assigned to a cost center, and\nthat smart fridge on floor 4. You can express the different data models using\n",Object(o.b)("a",{parentName:"li",href:"https://json-schema.org/"},"JSON Schema")," and make the system work for you - not\nthe other way around.")),Object(o.b)("p",null,"To learn more about what's different and how Ory Kratos compares to other open\nsource solutions, head over to ",Object(o.b)("a",{parentName:"p",href:"/kratos/docs/concepts/index"},"Concepts")," and\n",Object(o.b)("a",{parentName:"p",href:"/kratos/docs/further-reading/comparison"},"Comparison"),"."),Object(o.b)("p",null,"Ory Kratos isn't just about features; it stands out because it runs on any\noperating system (Linux, macOS, Windows) and on most processors (i386, amd64,\narm, etc.). The compiled binary has ",Object(o.b)("em",{parentName:"p"},"no system or library or file dependencies"),"\nand can be run as a single, static binary on top of, for example, a raw Linux\nkernel. The binary and Docker image are each less than 20MB in size."),Object(o.b)("p",null,"Ory Kratos scales horizontally without effort. The only external dependency is\nan RDBMS - we currently support SQLite, PostgreSQL, MySQL, CockroachDB. You will\nnot need memcached, etcd, or any other system to scale Ory Kratos."),Object(o.b)("p",null,"We believe in strong separation of concerns, which is a guiding principle in the\ndesign of each Ory project. As such, we build software that solves specific\nproblems very well and offloads adjacent issues (such as a user interface) to\nother applications."))}u.isMDXComponent=!0},553:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);