(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),o=(n(0),n(390)),i={id:"json-schema-json-paths",title:"JSON Schema and JSON Paths"},c={id:"version-v0.4/reference/json-schema-json-paths",isDocsHomePage:!1,title:"JSON Schema and JSON Paths",description:"JSON Schema is a vocabulary that allows you to",source:"@site/versioned_docs/version-v0.4/reference/json-schema-json-paths.md",permalink:"/kratos/docs/reference/json-schema-json-paths",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/reference/json-schema-json-paths.md",version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594198226,sidebar:"version-v0.4/docs",previous:{title:"Configuration",permalink:"/kratos/docs/reference/configuration"},next:{title:"HTML Form Parser",permalink:"/kratos/docs/reference/html-forms"}},s=[{value:"JSON Path Syntax",id:"json-path-syntax",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://json-schema.org"}),"JSON Schema")," is a vocabulary that allows you to\nannotate and validate JSON documents. It is a IETF (Internet and Engineering\nTask Force) public standard and is similar to a XML DTD but suited for JSON\npayloads."),Object(o.b)("p",null,"We rely on JSON Schema heavily internally, from configuration validation to\ngenerating OpenAPI Spec to writing documentation. By using ORY Kratos, you will\nbe exposed to JSON Schema as it is used for defining Identity data models and\nother things."),Object(o.b)("p",null,"To learn more about JSON Schema, head over to\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://json-schema.org/learn/"}),"json-schema.org/learn/"),"."),Object(o.b)("p",null,"We are currently using JSON Schema Draft7 but plan on migrating to a newer\nversion in the future."),Object(o.b)("h2",{id:"json-path-syntax"},"JSON Path Syntax"),Object(o.b)("p",null,"In some cases you can define a JSON Path. We use\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tidwall/gjson"}),Object(o.b)("inlineCode",{parentName:"a"},"tidwall/gjson"))," for this. A GJSON Path is a\ntext string syntax that describes a search pattern for quickly retrieving values\nfrom a JSON payload."),Object(o.b)("p",null,"There are two types of JSON Paths:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Reading JSON using the\n",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/tidwall/gjson/blob/master/SYNTAX.md"}),"GJSON Syntax"),";"),Object(o.b)("li",{parentName:"ul"},"Writing JSON using the\n",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/tidwall/sjson#path-syntax"}),"SJSON Syntax"),".")))}u.isMDXComponent=!0},390:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);