(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[3312],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return n?i.createElement(f,s(s({ref:t},c),{},{components:n})):i.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42886:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return a},toc:function(){return d},default:function(){return c}});var i=n(22122),r=n(19756),o=(n(67294),n(3905)),s={id:"kratos-identities-get",title:"kratos identities get",description:"kratos identities get Get one or more identities by ID"},a={unversionedId:"cli/kratos-identities-get",id:"cli/kratos-identities-get",isDocsHomePage:!1,title:"kratos identities get",description:"kratos identities get Get one or more identities by ID",source:"@site/docs/cli/kratos-identities-get.md",sourceDirName:"cli",slug:"/cli/kratos-identities-get",permalink:"/kratos/docs/next/cli/kratos-identities-get",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/cli/kratos-identities-get.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619624197,formattedLastUpdatedAt:"4/28/2021",frontMatter:{id:"kratos-identities-get",title:"kratos identities get",description:"kratos identities get Get one or more identities by ID"},sidebar:"docs",previous:{title:"kratos identities delete",permalink:"/kratos/docs/next/cli/kratos-identities-delete"},next:{title:"kratos identities import",permalink:"/kratos/docs/next/cli/kratos-identities-import"}},d=[{value:"kratos identities get",id:"kratos-identities-get",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"kratos-identities-get"},"kratos identities get"),(0,o.kt)("p",null,"Get one or more identities by ID"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"This command gets all the details about an identity. To get an identity by some\nselector, e.g. the recovery email address, use the list command in combination\nwith jq."),(0,o.kt)("p",null,"We have to admit, this is not easy if you don","'","t speak jq fluently. What\nabout opening an issue and telling us what predefined selectors you want to\nhave? ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/new/choose"},"https://github.com/ory/kratos/issues/new/choose")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kratos identities get &lt;id-0 [id-1 ...]&gt; [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"To get the identities with the recovery email address at the domain &#34;ory.sh&#34;, run:\n\n    $ kratos identities get $(kratos identities list --format json | jq -r &#39;map(select(.recovery_addresses[].value | endswith(&#34;@ory.sh&#34;))) | .[].id&#39;)\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for get\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -e, --endpoint string   The URL of Ory Kratos&#39; Admin API. Alternatively set using the KRATOS_ADMIN_URL environmental variable.\n  -f, --format string     Set the output format. One of table, json, and json-pretty. (default &#34;default&#34;)\n  -q, --quiet             Be quiet with output printing.\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kratos-identities"},"kratos identities")," - Tools to interact with remote\nidentities")))}c.isMDXComponent=!0}}]);