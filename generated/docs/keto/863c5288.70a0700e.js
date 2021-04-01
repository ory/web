(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),c=(n(0),n(145)),r=n(151),s={title:"Namespaces"},i={unversionedId:"concepts/namespaces",id:"concepts/namespaces",isDocsHomePage:!1,title:"Namespaces",description:"RelationTuplePrism()",source:"@site/docs/concepts/namespaces.mdx",slug:"/concepts/namespaces",permalink:"/keto/docs/next/concepts/namespaces",editUrl:"https://github.com/ory/keto/edit/master/docs/docs/concepts/namespaces.mdx",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1617276209,sidebar:"docs",previous:{title:"Relation Tuples",permalink:"/keto/docs/next/concepts/relation-tuples"},next:{title:"Objects",permalink:"/keto/docs/next/concepts/objects"}};Object(r.a)();var p=[{value:"Scoping of Objects",id:"scoping-of-objects",children:[]},{value:"Migrations",id:"migrations",children:[]},{value:"Naming Conventions",id:"naming-conventions",children:[]}],l={rightToc:p};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Ory Keto knows the concept of namespaces to organize\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/next/concepts/relation-tuples"}),"relation tuples"),". Namespaces have a configuration that\ndefines the relations, and some other important values\n(",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/next/reference/configuration"}),"see reference"),"). Unlike other applications, Ory\nKeto does ",Object(c.b)("strong",{parentName:"p"},"not")," isolate namespaces. Especially, ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/next/concepts/subjects"}),"subject sets"),"\ncan cross-reference from one namespace to another. The namespaces' purpose is to\nsplit up the data into coherent partitions, each with its corresponding\nconfiguration. Internally each namespace has its own table in the database to\nallow setting individual\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/keto/issues/303"}),"storage specific options"),"."),Object(c.b)("h2",{id:"scoping-of-objects"},"Scoping of Objects"),Object(c.b)("p",null,"The application can also use namespaces to scope ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/next/concepts/objects"}),"objects"),"\nbecause Ory Keto only compares objects within a namespace. For example, if Ory\nKeto knows the following relation tuples"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-keto-relation-tuples"}),"// user1 has acces to the directory foo\ndirectories:foo#access@user1\n// user2 has access to the file foo\nfiles:foo#access@user2\n")),Object(c.b)("p",null,"both of the following ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/next/concepts/api-overview#check-relation-tuples"}),"check")," requests"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-keto-relation-tuples"}),"// Does user2 have access to the directory foo?\ndirectories:foo#access@user2\n// Does user1 have access to the file foo?\nfiles:foo#access@user1\n")),Object(c.b)("p",null,"will evaluate to false (a.k.a. rejected)."),Object(c.b)("p",null,"Vice versa, all relation tuples containing an object have to be in the same\nnamespace to reference the same object."),Object(c.b)("h2",{id:"migrations"},"Migrations"),Object(c.b)("p",null,"Because namespaces each come with an individual configuration that can even\nmodify some storage specific options, it is required to manually review and run\nmigrations on namespace configuration updates. Please refer to the\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/next/cli/keto-namespace-migrate"}),"namespace migration CLI reference")," and\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/keto/docs/next/guides/production"}),"running in production guide")," to learn more about that\nprocess."),Object(c.b)("h2",{id:"naming-conventions"},"Naming Conventions"),Object(c.b)("p",null,"Namespaces should be named after the plural of the type of objects they describe\n(e.g. ",Object(c.b)("inlineCode",{parentName:"p"},"files"),", ",Object(c.b)("inlineCode",{parentName:"p"},"chats"),", ",Object(c.b)("inlineCode",{parentName:"p"},"organizations"),"). Relations within a namespace should be\na word that describes what relation a subject has towards an object. As a rule\nof thumb, every relation tuple should translate to an english sentence like so:"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"Subject")," has ",Object(c.b)("strong",{parentName:"p"},"relation")," on ",Object(c.b)("strong",{parentName:"p"},"object")," which is one of the ",Object(c.b)("strong",{parentName:"p"},"namespace"),".")),Object(c.b)("p",null,"Examples:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-keto-relation-tuples"}),"// good examples\n\n\nfiles:8f427c01-c295-44f3-b43d-49c3a1042f35#write@02a3c847-c903-446a-a34f-dae74b4fab86\ngroups:43784684-103e-44c0-9d6c-db9fb265f617#member@b8d00059-b803-4123-9d3d-b3613bfe7c1b\ndirectories:803a87e9-0da0-486e-bc08-ef559dd8e034#child@(files:11488ab9-4ede-479f-add4-f1379da4ae43#_)\nfiles:11488ab9-4ede-479f-add4-f1379da4ae43#parent@(directories:803a87e9-0da0-486e-bc08-ef559dd8e034#_)\n\n// bad examples\n\n\n// namespace is not describing homogenous type of objects\ntenant-1-objects:62237c27-19c3-4bb1-9cbc-a5a67372569b#access@7a012165-7b21-495b-b84b-cf4e1a21b484\n// relation describes a relation of the object towards the subject\ndirectories:803a87e9-0da0-486e-bc08-ef559dd8e034#parent@(files:11488ab9-4ede-479f-add4-f1379da4ae43#_)\n")))}b.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),o=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=l(n),d=a,f=b["".concat(r,".").concat(d)]||b[d]||u[d]||c;return n?o.a.createElement(f,s(s({ref:t},p),{},{components:n})):o.a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<c;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},151:function(e,t,n){"use strict";var a=n(21),o={punctuation:/[:#@()]/},c={pattern:/[^:#@()\n]+:/,inside:Object.assign({},o,{namespace:/.*/})},r={pattern:/[^:#@()\n]+#/,inside:Object.assign({},o,{symbol:/.*/})},s={pattern:/[^:#@()\n]+/,alias:"string"},i={pattern:/@[^:#@()\n]+/,inside:Object.assign({},o,{keyword:/.*/})},p={pattern:/@\(([^:#@()\n]+:)?([^:#@()\n]+)#([^:#@()\n]*)\)/,inside:{punctuation:/[@()]/,namespace:c,object:r,relation:s}};a.a.languages["keto-relation-tuples"]={comment:/\/\/.*(\n|$)/,"relation-tuple":{pattern:/([^:#@()\n]+:)?([^:#@()\n]+)#([^:#@()\n]+)@?((\(([^:#@()\n]+:)?([^:#@()\n]+)#([^:#@()\n]*)\))|([^:#@()\n]+))/,inside:{namespace:c,object:r,subjectID:i,subjectSet:p,relation:s}}},t.a=function(){}}}]);