(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{147:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return h})),r.d(t,"default",(function(){return c}));var a=r(3),n=r(8),o=(r(0),r(454)),s={id:"kratos-hashers-argon2-hash",title:"kratos hashers argon2 hash",description:"kratos hashers argon2 hash Hash a list of passwords for benchmarking the hashing parameters"},i={unversionedId:"cli/kratos-hashers-argon2-hash",id:"cli/kratos-hashers-argon2-hash",isDocsHomePage:!1,title:"kratos hashers argon2 hash",description:"kratos hashers argon2 hash Hash a list of passwords for benchmarking the hashing parameters",source:"@site/docs/cli/kratos-hashers-argon2-hash.md",sourceDirName:"cli",slug:"/cli/kratos-hashers-argon2-hash",permalink:"/kratos/docs/next/cli/kratos-hashers-argon2-hash",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/cli/kratos-hashers-argon2-hash.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619370737,formattedLastUpdatedAt:"4/25/2021",frontMatter:{id:"kratos-hashers-argon2-hash",title:"kratos hashers argon2 hash",description:"kratos hashers argon2 hash Hash a list of passwords for benchmarking the hashing parameters"},sidebar:"docs",previous:{title:"kratos hashers argon2 calibrate",permalink:"/kratos/docs/next/cli/kratos-hashers-argon2-calibrate"},next:{title:"kratos hashers argon2 load-test",permalink:"/kratos/docs/next/cli/kratos-hashers-argon2-load-test"}},h=[{value:"kratos hashers argon2 hash",id:"kratos-hashers-argon2-hash",children:[{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={toc:h};function c(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"kratos-hashers-argon2-hash"},"kratos hashers argon2 hash"),Object(o.b)("p",null,"Hash a list of passwords for benchmarking the hashing parameters"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"kratos hashers argon2 hash &lt;password1&gt; [&lt;password2&gt; ...] [flags]\n")),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  -c, --config strings                Path to one or more .json, .yaml, .yml, .toml config files. Values are loaded in the order provided, meaning that the last config file overwrites values from the previous config file.\n      --dedicated-memory byte_size    Amount of memory dedicated for password hashing. Kratos will try to not consume more memory. (default 1.00GB)\n      --expected-deviation duration   Expected deviation of the time a hashing operation (~login request) takes. (default 500ms)\n  -h, --help                          help for hash\n      --iterations uint32             Number of iterations to start probing at. (default 1)\n      --key-length uint32             Length of the key in bytes. (default 32)\n      --memory byte_size              Memory to use. (default 128.00MB)\n      --min-duration duration         Minimal duration a hashing operation (~login request) takes. (default 500ms)\n      --parallel                      Run all hashing operations in parallel.\n      --parallelism uint8             Number of threads to use. (default 72)\n      --salt-length uint32            Length of the salt in bytes. (default 16)\n")),Object(o.b)("h3",{id:"see-also"},"SEE ALSO"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"kratos-hashers-argon2"},"kratos hashers argon2")," -")))}c.isMDXComponent=!0},454:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),c=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=h(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return r?n.a.createElement(f,i(i({ref:t},l),{},{components:r})):n.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var h in t)hasOwnProperty.call(t,h)&&(i[h]=t[h]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);