(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[6275],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?a.createElement(m,c(c({ref:t},p),{},{components:n})):a.createElement(m,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66431:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),c=["components"],i={title:"Relation Tuples"},s=void 0,l={unversionedId:"concepts/relation-tuples",id:"concepts/relation-tuples",isDocsHomePage:!1,title:"Relation Tuples",description:"Relation tuples are the underlying datatype of Ory Keto's access control",source:"@site/docs/concepts/relation-tuples.mdx",sourceDirName:"concepts",slug:"/concepts/relation-tuples",permalink:"/keto/docs/next/concepts/relation-tuples",editUrl:"https://github.com/ory/keto/edit/master/docs/docs/concepts/relation-tuples.mdx",version:"current",lastUpdatedBy:"Patrik",lastUpdatedAt:1620720311,formattedLastUpdatedAt:"5/11/2021",frontMatter:{title:"Relation Tuples"},sidebar:"docs",previous:{title:"Quickstart: Cat Videos Example",permalink:"/keto/docs/next/quickstart"},next:{title:"Namespaces",permalink:"/keto/docs/next/concepts/namespaces"}},p=[{value:"Effect of a Relation Tuple",id:"effect-of-a-relation-tuple",children:[]},{value:"Basic Example",id:"basic-example",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Relation tuples are the underlying datatype of Ory Keto's access control\nlanguage. They encode relations between ",(0,o.kt)("a",{parentName:"p",href:"/keto/docs/next/concepts/objects"},"objects")," and\n",(0,o.kt)("a",{parentName:"p",href:"/keto/docs/next/concepts/subjects"},"subjects"),". A relation tuple is associated with a\n",(0,o.kt)("a",{parentName:"p",href:"/keto/docs/next/concepts/namespaces"},"namespace")," where its relation has to be defined and\nconfigured. The following\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form"},"BNF grammar")," describes\nthe encoding used in the documentation and within Ory Keto."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The namespace is often omitted in examples for readability, but is technically\nalways required."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<relation-tuple> ::= <object>'#'relation'@'<subject>\n<object> ::= namespace':'object_id\n<subject> ::= subject_id | <subject_set>\n<subject_set> ::= <object>'#'relation\n")),(0,o.kt)("p",null,"A relation tuple"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"object#relation@subject\n")),(0,o.kt)("p",null,'can be translated into the english sentence "Subject has relation on object".'),(0,o.kt)("h2",{id:"effect-of-a-relation-tuple"},"Effect of a Relation Tuple"),(0,o.kt)("p",null,"The effect of a relation tuple is the effect of its relation as defined in the\n",(0,o.kt)("a",{parentName:"p",href:"/keto/docs/next/concepts/namespaces"},"namespace configuration"),". It can be one of union (boolean\nor), intersection (boolean and), or exclusion (boolean not)."),(0,o.kt)("h2",{id:"basic-example"},"Basic Example"),(0,o.kt)("p",null,"Head over to the\n",(0,o.kt)("a",{parentName:"p",href:"/keto/docs/next/examples/olymp-file-sharing"},"basic full feature example")," to see an\nexample with some context."))}d.isMDXComponent=!0}}]);