(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[6394],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),l=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(i,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,s(s({ref:e},p),{},{components:n})):r.createElement(d,s({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,s=new Array(a);s[0]=f;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:o,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5076:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),s=["components"],c={id:"kratos-jsonnet-format",title:"kratos jsonnet format",description:"kratos jsonnet format"},i=void 0,l={unversionedId:"cli/kratos-jsonnet-format",id:"cli/kratos-jsonnet-format",isDocsHomePage:!1,title:"kratos jsonnet format",description:"kratos jsonnet format",source:"@site/docs/cli/kratos-jsonnet-format.md",sourceDirName:"cli",slug:"/cli/kratos-jsonnet-format",permalink:"/kratos/docs/next/cli/kratos-jsonnet-format",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/cli/kratos-jsonnet-format.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1617992820,formattedLastUpdatedAt:"4/9/2021",frontMatter:{id:"kratos-jsonnet-format",title:"kratos jsonnet format",description:"kratos jsonnet format"},sidebar:"docs",previous:{title:"kratos jsonnet",permalink:"/kratos/docs/next/cli/kratos-jsonnet"},next:{title:"kratos jsonnet lint",permalink:"/kratos/docs/next/cli/kratos-jsonnet-lint"}},p=[{value:"kratos jsonnet format",id:"kratos-jsonnet-format",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],u={toc:p};function f(t){var e=t.components,n=(0,o.Z)(t,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"kratos-jsonnet-format"},"kratos jsonnet format"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Formats JSONNet files using the official JSONNet formatter."),(0,a.kt)("p",null,"Use -w or --write to write output back to files instead of stdout."),(0,a.kt)("p",null,"Glob Syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pattern:\n    { term }\n\nterm:\n    &#39;*&#39;         matches any sequence of non-separator characters\n    &#39;**&#39;        matches any sequence of characters\n    &#39;?&#39;         matches any single non-separator character\n    &#39;[&#39; [ &#39;!&#39; ] { character-range } &#39;]&#39;\n                character class (must be non-empty)\n    &#39;{&#39; pattern-list &#39;}&#39;\n                pattern alternatives\n    c           matches character c (c != &#39;*&#39;, &#39;**&#39;, &#39;?&#39;, &#39;\\&#39;, &#39;[&#39;, &#39;{&#39;, &#39;}&#39;)\n    &#39;\\&#39; c       matches character c\n\ncharacter-range:\n    c           matches character c (c != &#39;\\\\&#39;, &#39;-&#39;, &#39;]&#39;)\n    &#39;\\&#39; c       matches character c\n    lo &#39;-&#39; hi   matches character c for lo &lt;= c &lt;= hi\n\npattern-list:\n    pattern { &#39;,&#39; pattern }\n                comma-separated (without spaces) patterns\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kratos jsonnet format path/to/files/*.jsonnet [more/files.jsonnet, [supports/**/{foo,bar}.jsonnet]] [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help    help for format\n  -w, --write   Write formatted output back to file.\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"kratos-jsonnet"},"kratos jsonnet")," - Helpers for linting and formatting JSONNet\ncode")))}f.isMDXComponent=!0}}]);