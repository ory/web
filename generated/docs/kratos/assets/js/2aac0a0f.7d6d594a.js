(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[5944],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},90247:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={id:"registration",title:"This should be the Registration UI"},s={unversionedId:"fallback/registration",id:"version-v0.2/fallback/registration",isDocsHomePage:!1,title:"This should be the Registration UI",description:"You ended up here because you did not set the following configuration value:",source:"@site/versioned_docs/version-v0.2/fallback/registration.mdx",sourceDirName:"fallback",slug:"/fallback/registration",permalink:"/kratos/docs/v0.2/fallback/registration",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.2/fallback/registration.mdx",version:"v0.2",lastUpdatedBy:"aeneasr",lastUpdatedAt:1588605498,formattedLastUpdatedAt:"5/4/2020",frontMatter:{id:"registration",title:"This should be the Registration UI"}},l=[],c={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You ended up here because you did not set the following configuration value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'},"urls:\n  registration_ui: http://my-app.com/registration\n")),(0,a.kt)("p",null,"You can set this configuration value using environment variable\n",(0,a.kt)("inlineCode",{parentName:"p"},"URLS_REGISTRATION_UI")," as well!"),(0,a.kt)("p",null,"If you don't know what that means, head over to\n",(0,a.kt)("a",{parentName:"p",href:"/kratos/docs/v0.2/self-service/flows/user-login-user-registration"},"User Login and Registration"),"!"))}u.isMDXComponent=!0}}]);