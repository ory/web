(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[81007],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=l(r),p=o,f=h["".concat(u,".").concat(p)]||h[p]||d[p]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},92758:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return h}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),s=["components"],i={id:"kratos-hashers-argon2-load-test",title:"kratos hashers argon2 load-test",description:"kratos hashers argon2 load-test Simulate the password hashing with a number of concurrent requests/minute."},u=void 0,l={unversionedId:"cli/kratos-hashers-argon2-load-test",id:"version-v0.7/cli/kratos-hashers-argon2-load-test",isDocsHomePage:!1,title:"kratos hashers argon2 load-test",description:"kratos hashers argon2 load-test Simulate the password hashing with a number of concurrent requests/minute.",source:"@site/versioned_docs/version-v0.7/cli/kratos-hashers-argon2-load-test.md",sourceDirName:"cli",slug:"/cli/kratos-hashers-argon2-load-test",permalink:"/kratos/docs/cli/kratos-hashers-argon2-load-test",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.7/cli/kratos-hashers-argon2-load-test.md",version:"v0.7",frontMatter:{id:"kratos-hashers-argon2-load-test",title:"kratos hashers argon2 load-test",description:"kratos hashers argon2 load-test Simulate the password hashing with a number of concurrent requests/minute."}},c=[{value:"kratos hashers argon2 load-test",id:"kratos-hashers-argon2-load-test",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],d={toc:c};function h(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"kratos-hashers-argon2-load-test"},"kratos hashers argon2 load-test"),(0,a.kt)("p",null,"Simulate the password hashing with a number of concurrent requests/minute."),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Simulates a number of concurrent authentication requests per minute. Gives\nstatistical data about the measured performance and resource consumption. Can be\nused to tune and test the hashing parameters for peak demand situations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kratos hashers argon2 load-test &lt;authentication-requests-per-minute&gt; [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -c, --config strings                Path to one or more .json, .yaml, .yml, .toml config files. Values are loaded in the order provided, meaning that the last config file overwrites values from the previous config file.\n      --dedicated-memory byte_size    Amount of memory dedicated for password hashing. Kratos will try to not consume more memory. (default 1.00GB)\n      --expected-deviation duration   Expected deviation of the time a hashing operation (~login request) takes. (default 500ms)\n  -f, --format string                 Set the output format. One of table, json, and json-pretty. (default &#34;default&#34;)\n  -h, --help                          help for load-test\n      --iterations uint32             Number of iterations to start probing at. (default 1)\n      --key-length uint32             Length of the key in bytes. (default 32)\n      --memory byte_size              Memory to use. (default 128.00MB)\n      --min-duration duration         Minimal duration a hashing operation (~login request) takes. (default 500ms)\n      --parallelism uint8             Number of threads to use. (default 72)\n  -q, --quiet                         Be quiet with output printing.\n      --salt-length uint32            Length of the salt in bytes. (default 16)\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"kratos-hashers-argon2"},"kratos hashers argon2")," -")))}h.isMDXComponent=!0}}]);