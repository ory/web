(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{200:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,u=b["".concat(o,".").concat(m)]||b[m]||d[m]||i;return n?r.a.createElement(u,c(c({ref:t},l),{},{components:n})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(200)),o={title:"Basic: Olymp Library"},c={unversionedId:"examples/olymp-file-sharing",id:"version-v0.6/examples/olymp-file-sharing",isDocsHomePage:!1,title:"Basic: Olymp Library",description:"A basic, down-to-earth full feature example",source:"@site/versioned_docs/version-v0.6/examples/olymp-file-sharing.mdx",sourceDirName:"examples",slug:"/examples/olymp-file-sharing",permalink:"/keto/docs/examples/olymp-file-sharing",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.6/examples/olymp-file-sharing.mdx",version:"v0.6",lastUpdatedBy:"Patrik",lastUpdatedAt:1620725654,formattedLastUpdatedAt:"5/11/2021",frontMatter:{title:"Basic: Olymp Library"},sidebar:"version-v0.6/docs",previous:{title:"Best Practices for Designing your Access Control List",permalink:"/keto/docs/guides/access-control-list-design-best-practices"},next:{title:"Configuration",permalink:"/keto/docs/reference/configuration"}},s=[],l={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"a-basic-down-to-earth-full-feature-example"},"A basic, down-to-earth full feature example"),Object(i.b)("p",null,'Consider a file sharing application called "Olymp Library". Each file is stored\nin a key-value store, where the key is a UUIDv4 (pseudorandom unique\nidentifier), while the value is the metadata and content. The application uses\nOry Keto to keep track of ownership and granted access on a per file level.'),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This example assumes there is a ",Object(i.b)("a",{parentName:"p",href:"/keto/docs/concepts/namespaces"},"namespace")," ",Object(i.b)("inlineCode",{parentName:"p"},"files"),"\nwith the relations ",Object(i.b)("inlineCode",{parentName:"p"},"owner")," and ",Object(i.b)("inlineCode",{parentName:"p"},"access")," defined, where each ",Object(i.b)("inlineCode",{parentName:"p"},"owner")," of an object\nalso has ",Object(i.b)("inlineCode",{parentName:"p"},"access")," to that object. All relation tuples are stored in that\nnamespace."))),Object(i.b)("p",null,"Now, the user identified by its unique username ",Object(i.b)("inlineCode",{parentName:"p"},"demeter")," wants to upload a file\ncontaining the most fertile grounds. The file gets assigned the UUID\n",Object(i.b)("inlineCode",{parentName:"p"},"ec788a82-a12e-45a4-b906-3e69f78c94e4"),". The application adds the following\n",Object(i.b)("a",{parentName:"p",href:"/keto/docs/concepts/relation-tuples"},"relation tuple")," to Ory Keto through the\n",Object(i.b)("a",{parentName:"p",href:"/keto/docs/concepts/api-overview#write-apis"},"write-API"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"ec788a82-a12e-45a4-b906-3e69f78c94e4#owner@demeter\n")),Object(i.b)("p",null,"To prepare for an important meeting with the user ",Object(i.b)("inlineCode",{parentName:"p"},"athena"),", ",Object(i.b)("inlineCode",{parentName:"p"},"demeter")," wants to\nshare the file with fertile grounds with ",Object(i.b)("inlineCode",{parentName:"p"},"athena"),' so that they can both read it.\nTherefore, he opens the "Olymp Library" and is presented with a list of all\nfiles he owns. The application will internally request all\n',Object(i.b)("a",{parentName:"p",href:"/keto/docs/concepts/objects"},"objects")," (file IDs) with the owner ",Object(i.b)("inlineCode",{parentName:"p"},"demeter")," by using\nthe ",Object(i.b)("a",{parentName:"p",href:"/keto/docs/concepts/api-overview#list-relation-tuples"},"list-API"),". The response\nwill contain the object ",Object(i.b)("inlineCode",{parentName:"p"},"ec788a82-a12e-45a4-b906-3e69f78c94e4"),", which the\napplication maps to the file in question."),Object(i.b)("p",null,"The user ",Object(i.b)("inlineCode",{parentName:"p"},"demeter")," will then ask the application to share the file with\n",Object(i.b)("inlineCode",{parentName:"p"},"athena"),". The application will translate that request into a\n",Object(i.b)("a",{parentName:"p",href:"/keto/docs/concepts/api-overview#write-apis"},"write-API request")," adding the\nfollowing relation tuple to Ory Keto:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"ec788a82-a12e-45a4-b906-3e69f78c94e4#access@athena\n")),Object(i.b)("p",null,"To confirm the successful operation, the application uses Ory Keto's\n",Object(i.b)("a",{parentName:"p",href:"/keto/docs/concepts/api-overview#expand-subject-sets"},"expand-API")," to compile a list\nof everyone who can access the file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"// The following subject set is expanded by Keto\nec788a82-a12e-45a4-b906-3e69f78c94e4#access\n")),Object(i.b)("p",null,"which returns the expansion tree"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"\u222a ec788a82-a12e-45a4-b906-3e69f78c94e4#access\n\u251c\u2500 \u222a ec788a82-a12e-45a4-b906-3e69f78c94e4#owner\n\u2502  \u251c\u2500 \u2618 demeter\n\u251c\u2500 \u2618 athena\n")),Object(i.b)("p",null,'The "Olymp Library" can then display this information to ',Object(i.b)("inlineCode",{parentName:"p"},"demeter"),"."),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"athena")," wants to get the file containing fertile grounds, the application\nuses the ",Object(i.b)("a",{parentName:"p",href:"/keto/docs/concepts/api-overview#check-relation-tuple"},"check-API")," to\nverify that ",Object(i.b)("inlineCode",{parentName:"p"},"athena")," has access to the file before it returns the file. This\nwill allow ",Object(i.b)("inlineCode",{parentName:"p"},"demeter")," to revoke ",Object(i.b)("inlineCode",{parentName:"p"},"athena"),"'s access at any point by deleting the\ncorresponding relation tuple."))}p.isMDXComponent=!0}}]);