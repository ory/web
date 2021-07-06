(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[2999],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=u(t),d=a,f=g["".concat(c,".").concat(d)]||g[d]||p[d]||o;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8920:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return g}});var n=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],s={id:"configuring",title:"Configuring Ory services"},c=void 0,u={unversionedId:"ecosystem/configuring",id:"ecosystem/configuring",isDocsHomePage:!1,title:"Configuring Ory services",description:"Ory services share the same configuration system. This page documents the",source:"@site/docs/ecosystem/configuring.md",sourceDirName:"ecosystem",slug:"/ecosystem/configuring",permalink:"/docs/ecosystem/configuring",editUrl:"https://github.com/ory/docs/edit/master/docs/docs/ecosystem/configuring.md",version:"current",lastUpdatedBy:"hackerman",lastUpdatedAt:1619174756,formattedLastUpdatedAt:"4/23/2021",frontMatter:{id:"configuring",title:"Configuring Ory services"},sidebar:"docs",previous:{title:"Software Versions and Project Maturity",permalink:"/docs/ecosystem/versioning"},next:{title:"Software Updates",permalink:"/docs/ecosystem/upgrading"}},l=[{value:"Setting configuration values via environmental variables and flags",id:"setting-configuration-values-via-environmental-variables-and-flags",children:[{value:"Booleans",id:"booleans",children:[]},{value:"Numbers",id:"numbers",children:[]},{value:"String/Numeric arrays",id:"stringnumeric-arrays",children:[]}]}],p={toc:l};function g(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ory services share the same configuration system. This page documents the\ndetails and edge cases that apply to all Ory services."),(0,o.kt)("p",null,"To find out more about configuring the individual services head to their\ncorresponding sections."),(0,o.kt)("h2",{id:"setting-configuration-values-via-environmental-variables-and-flags"},"Setting configuration values via environmental variables and flags"),(0,o.kt)("h3",{id:"booleans"},"Booleans"),(0,o.kt)("p",null,"Boolean values are parsed using\n",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/pkg/strconv/#ParseBool"},"strconv.ParseBool"),"."),(0,o.kt)("h3",{id:"numbers"},"Numbers"),(0,o.kt)("p",null,"Parsing for all numeric types is done using\n",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/pkg/strconv/#ParseFloat"},"strconv.ParseFloat"),"."),(0,o.kt)("h3",{id:"stringnumeric-arrays"},"String/Numeric arrays"),(0,o.kt)("p",null,"Configuration keys that require arrays expect comma separated lists as defined\nby the ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/pkg/encoding/csv/"},"csv package"),". Numeric arrays will\nfirstly be parsed to string arrays. Every item is then parsed to a number as\ndescribed above."),(0,o.kt)("p",null,"The whole csv string might be enclosed by square brackets."))}g.isMDXComponent=!0}}]);