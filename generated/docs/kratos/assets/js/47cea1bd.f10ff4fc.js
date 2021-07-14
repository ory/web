(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[7431],{3905:function(t,e,i){"use strict";i.d(e,{Zo:function(){return c},kt:function(){return u}});var r=i(67294);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function a(t,e){if(null==t)return{};var i,r,n=function(t,e){if(null==t)return{};var i,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)i=o[r],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var l=r.createContext({}),p=function(t){var e=r.useContext(l),i=e;return t&&(i="function"==typeof t?t(e):s(s({},e),t)),i},c=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var i=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),m=p(i),u=n,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return i?r.createElement(f,s(s({ref:e},c),{},{components:i})):r.createElement(f,s({ref:e},c))}));function u(t,e){var i=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=i.length,s=new Array(o);s[0]=m;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=t,a.mdxType="string"==typeof t?t:n,s[1]=a;for(var p=2;p<o;p++)s[p]=i[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},81409:function(t,e,i){"use strict";i.r(e),i.d(e,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=i(22122),n=i(19756),o=(i(67294),i(3905)),s=["components"],a={id:"kratos-identities-import",title:"kratos identities import",description:"kratos identities import Import identities from files or STD_IN"},l=void 0,p={unversionedId:"cli/kratos-identities-import",id:"version-v0.7/cli/kratos-identities-import",isDocsHomePage:!1,title:"kratos identities import",description:"kratos identities import Import identities from files or STD_IN",source:"@site/versioned_docs/version-v0.7/cli/kratos-identities-import.md",sourceDirName:"cli",slug:"/cli/kratos-identities-import",permalink:"/kratos/docs/cli/kratos-identities-import",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.7/cli/kratos-identities-import.md",version:"v0.7",frontMatter:{id:"kratos-identities-import",title:"kratos identities import",description:"kratos identities import Import identities from files or STD_IN"},sidebar:"version-v0.7/docs",previous:{title:"kratos identities get",permalink:"/kratos/docs/cli/kratos-identities-get"},next:{title:"kratos identities list",permalink:"/kratos/docs/cli/kratos-identities-list"}},c=[{value:"kratos identities import",id:"kratos-identities-import",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],d={toc:c};function m(t){var e=t.components,i=(0,n.Z)(t,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"kratos-identities-import"},"kratos identities import"),(0,o.kt)("p",null,"Import identities from files or STD_IN"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Import identities from files or STD_IN."),(0,o.kt)("p",null,"Files can contain only a single or an array of identities. The validity of files\ncan be tested beforehand using ",'"',"... identities validate",'"',"."),(0,o.kt)("p",null,"WARNING: Importing credentials is not yet supported."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kratos identities import &lt;file.json [file-2.json [file-3.json] ...]&gt; [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cat &gt; ./file.json &lt;&lt;EOF\n{\n    &#34;schema_id&#34;: &#34;default&#34;,\n    &#34;traits&#34;: {\n        &#34;email&#34;: &#34;foo@example.com&#34;\n    }\n}\nEOF\n\n$ kratos identities import file.json\n# Alternatively:\n$ cat file.json | kratos identities import\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for import\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -e, --endpoint string   The URL of Ory Kratos&#39; Admin API. Alternatively set using the KRATOS_ADMIN_URL environmental variable.\n  -f, --format string     Set the output format. One of table, json, and json-pretty. (default &#34;default&#34;)\n  -q, --quiet             Be quiet with output printing.\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kratos-identities"},"kratos identities")," - Tools to interact with remote\nidentities")))}m.isMDXComponent=!0}}]);