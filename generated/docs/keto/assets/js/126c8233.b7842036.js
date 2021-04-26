(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{198:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),m=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=m(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||l[d]||o;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(8),o=(n(0),n(198)),i={id:"keto-namespace-migrate-up",title:"keto namespace migrate up",description:"keto namespace migrate up Migrate a namespace up"},c={unversionedId:"cli/keto-namespace-migrate-up",id:"version-v0.6/cli/keto-namespace-migrate-up",isDocsHomePage:!1,title:"keto namespace migrate up",description:"keto namespace migrate up Migrate a namespace up",source:"@site/versioned_docs/version-v0.6/cli/keto-namespace-migrate-up.md",sourceDirName:"cli",slug:"/cli/keto-namespace-migrate-up",permalink:"/keto/docs/cli/keto-namespace-migrate-up",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.6/cli/keto-namespace-migrate-up.md",version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1617730042,formattedLastUpdatedAt:"4/6/2021",frontMatter:{id:"keto-namespace-migrate-up",title:"keto namespace migrate up",description:"keto namespace migrate up Migrate a namespace up"},sidebar:"version-v0.6/docs",previous:{title:"keto namespace migrate status",permalink:"/keto/docs/cli/keto-namespace-migrate-status"},next:{title:"keto namespace validate",permalink:"/keto/docs/cli/keto-namespace-validate"}},p=[{value:"keto namespace migrate up",id:"keto-namespace-migrate-up",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],s={toc:p};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"keto-namespace-migrate-up"},"keto namespace migrate up"),Object(o.b)("p",null,"Migrate a namespace up"),Object(o.b)("h3",{id:"synopsis"},"Synopsis"),Object(o.b)("p",null,"Migrate a namespace up to the most recent migration."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"keto namespace migrate up &lt;namespace-name&gt; [flags]\n")),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  -f, --format string         Set the output format. One of table, json, and json-pretty. (default &#34;default&#34;)\n  -h, --help                  help for up\n  -q, --quiet                 Be quiet with output printing.\n      --read-remote string    Remote URL of the read API endpoint. (default &#34;127.0.0.1:4466&#34;)\n      --write-remote string   Remote URL of the write API endpoint. (default &#34;127.0.0.1:4467&#34;)\n  -y, --yes                   yes to all questions, no user input required\n")),Object(o.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  -c, --config strings   Config files to load, overwriting in the order specified. (default [/home/circleci/keto.yml])\n")),Object(o.b)("h3",{id:"see-also"},"SEE ALSO"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"keto-namespace-migrate"},"keto namespace migrate")," - Migrate a namespace")))}m.isMDXComponent=!0}}]);