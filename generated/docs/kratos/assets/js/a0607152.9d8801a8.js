(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{347:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(8),a=(r(0),r(553)),s={id:"html-forms",title:"HTML Form Parser"},c={unversionedId:"reference/html-forms",id:"version-v0.4/reference/html-forms",isDocsHomePage:!1,title:"HTML Form Parser",description:"If you're using HTML Forms to sign users up or update profiles, ORY Kratos needs",source:"@site/versioned_docs/version-v0.4/reference/html-forms.md",sourceDirName:"reference",slug:"/reference/html-forms",permalink:"/kratos/docs/v0.4/reference/html-forms",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/reference/html-forms.md",version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594203957,formattedLastUpdatedAt:"7/8/2020",frontMatter:{id:"html-forms",title:"HTML Form Parser"},sidebar:"version-v0.4/docs",previous:{title:"JSON Schema and JSON Paths",permalink:"/kratos/docs/v0.4/reference/json-schema-json-paths"},next:{title:"REST API",permalink:"/kratos/docs/v0.4/reference/api"}},i=[{value:"Nesting",id:"nesting",children:[]},{value:"Checkboxes",id:"checkboxes",children:[]}],p={toc:i};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"If you're using HTML Forms to sign users up or update profiles, ORY Kratos needs\nto assert the type of each field, as HTML Form Field Values are untyped."),Object(a.b)("p",null,"ORY Kratos uses the Identity JSON Schema to assert form field types. There are a\nfew tricks you should know when using this feature."),Object(a.b)("h2",{id:"nesting"},"Nesting"),Object(a.b)("p",null,"Assuming this Identity JSON Schema:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "name": {\n          "type": "object",\n          "properties": {\n            "first": {\n              "type": "string"\n            },\n            "last": {\n              "type": "string"\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(a.b)("p",null,"You could address ",Object(a.b)("inlineCode",{parentName:"p"},"traits.name.first")," this with an HTML Input Form:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'<input type="text" name="traits.name.last">\n')),Object(a.b)("h2",{id:"checkboxes"},"Checkboxes"),Object(a.b)("p",null,"Checkboxes for ",Object(a.b)("inlineCode",{parentName:"p"},"true")," / ",Object(a.b)("inlineCode",{parentName:"p"},"false")," can be set up as follows. If the value is\nsupposed to be false: not checked:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'<input type="hidden" value="false" name="traits.path.to.my.boolean" />\n<input type="checkbox" value="true" name="traits.path.to.my.boolean" />\n')))}l.isMDXComponent=!0},553:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return r?o.a.createElement(d,c(c({ref:t},p),{},{components:r})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var p=2;p<a;p++)s[p]=r[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);