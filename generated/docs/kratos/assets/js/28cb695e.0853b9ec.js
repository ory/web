(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),i=(n(0),n(553)),a={id:"jsonnet",title:"Data Mapping with Jsonnet"},s={unversionedId:"reference/jsonnet",id:"version-v0.4/reference/jsonnet",isDocsHomePage:!1,title:"Data Mapping with Jsonnet",description:"Some modules like the",source:"@site/versioned_docs/version-v0.4/reference/jsonnet.mdx",sourceDirName:"reference",slug:"/reference/jsonnet",permalink:"/kratos/docs/v0.4/reference/jsonnet",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/reference/jsonnet.mdx",version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594198226,formattedLastUpdatedAt:"7/8/2020",frontMatter:{id:"jsonnet",title:"Data Mapping with Jsonnet"}},c=[{value:"Formatting Jsonnet Code",id:"formatting-jsonnet-code",children:[]},{value:"Linting Jsonnet Code",id:"linting-jsonnet-code",children:[]},{value:"Testing Jsonnet Code",id:"testing-jsonnet-code",children:[]},{value:"Tips &amp; Tricks",id:"tips--tricks",children:[{value:"Optionality",id:"optionality",children:[]},{value:"Defaults",id:"defaults",children:[]},{value:"Raising Errors",id:"raising-errors",children:[]}]}],l={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Some modules like the\n",Object(i.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/concepts/credentials/openid-connect-oidc-oauth2"},"OpenID Connect and OAuth2 Strategy"),"\nsupport ",Object(i.b)("a",{parentName:"p",href:"https://jsonnet.org"},"Jsonnet"),", allowing you to easily write code that\nmodifies your identity's data and load it into ORY Kratos."),Object(i.b)("p",null,"We highly recommend checking out the official\n",Object(i.b)("a",{parentName:"p",href:"https://jsonnet.org/learning/tutorial.html"},"learning Jsonnet tutorial"),"."),Object(i.b)("h2",{id:"formatting-jsonnet-code"},"Formatting Jsonnet Code"),Object(i.b)("p",null,"Format Jsonnet code snippets using:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ kratos help jsonnet format\n\n# e.g.:\n$ kratos jsonnet format --write path/to/files/*.jsonnet\n")),Object(i.b)("h2",{id:"linting-jsonnet-code"},"Linting Jsonnet Code"),Object(i.b)("p",null,"Lint Jsonnet code snippets using:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ kratos help jsonnet lint\n\n# e.g.:\n$ kratos jsonnet lint path/to/files/*.jsonnet\n")),Object(i.b)("p",null,"The command will exit with an exit code of ",Object(i.b)("inlineCode",{parentName:"p"},"1")," and print all found lint errors\nto stderr if the code snippet has lint issues."),Object(i.b)("h2",{id:"testing-jsonnet-code"},"Testing Jsonnet Code"),Object(i.b)("p",null,"This is an anticipated future feature. For progress check out\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/391"},"kratos#391"),"."),Object(i.b)("h2",{id:"tips--tricks"},"Tips & Tricks"),Object(i.b)("p",null,"The purpose of this section is to provide you with examples for common use\ncases."),Object(i.b)("h3",{id:"optionality"},"Optionality"),Object(i.b)("p",null,"When you're unsure that a field will be set in the ",Object(i.b)("inlineCode",{parentName:"p"},"claims")," variable use the\nfollowing to make the trait field also optional:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsonnet"},'local claims = std.extVar(\'claims\');\n\n{\n  identity: {\n    traits: {\n      email: claims.sub,\n      [if "website" in claims then "website" else null]: claims.website,\n    },\n  },\n}\n')),Object(i.b)("h3",{id:"defaults"},"Defaults"),Object(i.b)("p",null,"Set defaults for the ",Object(i.b)("inlineCode",{parentName:"p"},"claims")," variable:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsonnet"},"local claims = {\n website: 'i am the default website value'\n} + std.extVar('claims');\n\n{\n  identity: {\n    traits: {\n      website: claims.website\n    }\n  }\n}\n")),Object(i.b)("h3",{id:"raising-errors"},"Raising Errors"),Object(i.b)("p",null,"You can raise errors in the Jsonnet code. Keep in mind that these will be shown\nas system errors, not validation errors, and that the user will end up at the\nError UI!"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsonnet"},"local claims = std.extVar('claims');\n\nif std.length(claims.sub) == 0 then\n  error 'claim sub not set'\nelse\n  {\n    identity: {\n      traits: {\n        // ...\n      },\n    },\n  }\n")))}p.isMDXComponent=!0},553:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(a,".").concat(b)]||u[b]||d[b]||i;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);