(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{412:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(f,s(s({ref:t},l),{},{components:n})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(412)),c={id:"kratos-jsonnet-lint",title:"kratos jsonnet lint",description:"kratos jsonnet lint"},s={unversionedId:"cli/kratos-jsonnet-lint",id:"cli/kratos-jsonnet-lint",isDocsHomePage:!1,title:"kratos jsonnet lint",description:"kratos jsonnet lint",source:"@site/docs/cli/kratos-jsonnet-lint.md",slug:"/cli/kratos-jsonnet-lint",permalink:"/kratos/docs/next/cli/kratos-jsonnet-lint",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/cli/kratos-jsonnet-lint.md",version:"current",lastUpdatedBy:"Patrik",lastUpdatedAt:1602148054,sidebar:"docs",previous:{title:"kratos jsonnet format",permalink:"/kratos/docs/next/cli/kratos-jsonnet-format"},next:{title:"kratos remote",permalink:"/kratos/docs/next/cli/kratos-remote"}},i=[{value:"kratos jsonnet lint",id:"kratos-jsonnet-lint",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"kratos-jsonnet-lint"},"kratos jsonnet lint"),Object(o.b)("h3",{id:"synopsis"},"Synopsis"),Object(o.b)("p",null,"Lints JSONNet files using the official JSONNet linter and exits with a status code of 1 when issues are detected."),Object(o.b)("p",null,"Glob Syntax:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"pattern:\n    { term }\n\nterm:\n    '*'         matches any sequence of non-separator characters\n    '**'        matches any sequence of characters\n    '?'         matches any single non-separator character\n    '[' [ '!' ] { character-range } ']'\n                character class (must be non-empty)\n    '{' pattern-list '}'\n                pattern alternatives\n    c           matches character c (c != '*', '**', '?', '\\', '[', '{', '}')\n    '\\' c       matches character c\n\ncharacter-range:\n    c           matches character c (c != '\\\\', '-', ']')\n    '\\' c       matches character c\n    lo '-' hi   matches character c for lo <= c <= hi\n\npattern-list:\n    pattern { ',' pattern }\n                comma-separated (without spaces) patterns\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"kratos jsonnet lint path/to/files/*.jsonnet [more/files.jsonnet, [supports/**/{foo,bar}.jsonnet]] [flags]\n")),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"  -h, --help   help for lint\n")),Object(o.b)("h3",{id:"see-also"},"SEE ALSO"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"kratos-jsonnet"}),"kratos jsonnet")," - Helpers for linting and formatting JSONNet code")))}p.isMDXComponent=!0}}]);