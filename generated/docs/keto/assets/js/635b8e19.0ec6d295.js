(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[1544],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),k=o,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38452:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={id:"keto",title:"keto",description:"keto Global and consistent permission and authorization server"},l=void 0,c={unversionedId:"cli/keto",id:"cli/keto",isDocsHomePage:!1,title:"keto",description:"keto Global and consistent permission and authorization server",source:"@site/docs/cli/keto.md",sourceDirName:"cli",slug:"/cli/keto",permalink:"/keto/docs/next/cli/keto",editUrl:"https://github.com/ory/keto/edit/master/docs/docs/cli/keto.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619369953,formattedLastUpdatedAt:"4/25/2021",frontMatter:{id:"keto",title:"keto",description:"keto Global and consistent permission and authorization server"},sidebar:"docs",previous:{title:"Protocol Buffers API",permalink:"/keto/docs/next/reference/proto-api"},next:{title:"keto check",permalink:"/keto/docs/next/cli/keto-check"}},s=[{value:"keto",id:"keto",children:[{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],p={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"keto"},"keto"),(0,a.kt)("p",null,"Global and consistent permission and authorization server"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -c, --config strings   Config files to load, overwriting in the order specified. (default [/home/circleci/keto.yml])\n  -h, --help             help for keto\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"keto-check"},"keto check")," - Check whether a subject has a relation on an object"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"keto-expand"},"keto expand")," - Expand a subject set"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"keto-migrate"},"keto migrate")," - Commands to migrate the database"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"keto-namespace"},"keto namespace")," - Read and manipulate namespaces"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"keto-relation-tuple"},"keto relation-tuple")," - Read and manipulate relation\ntuples"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"keto-serve"},"keto serve")," - Starts the server and serves the HTTP REST and gRPC\nAPIs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"keto-status"},"keto status")," - Get the status of the upstream Keto instance"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"keto-version"},"keto version")," - Show the build version, build time, and git\nhash")))}u.isMDXComponent=!0}}]);