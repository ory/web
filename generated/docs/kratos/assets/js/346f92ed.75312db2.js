(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[7343],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},39934:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],s={id:"settings",title:"This should be the Settings UI"},c=void 0,l={unversionedId:"fallback/settings",id:"version-v0.3/fallback/settings",isDocsHomePage:!1,title:"This should be the Settings UI",description:"You ended up here because you did not set the following configuration value:",source:"@site/versioned_docs/version-v0.3/fallback/settings.mdx",sourceDirName:"fallback",slug:"/fallback/settings",permalink:"/kratos/docs/v0.3/fallback/settings",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.3/fallback/settings.mdx",version:"v0.3",lastUpdatedBy:"aeneasr",lastUpdatedAt:1589548840,formattedLastUpdatedAt:"5/15/2020",frontMatter:{id:"settings",title:"This should be the Settings UI"}},u=[],p={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You ended up here because you did not set the following configuration value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'},"urls:\n  settings_ui: http://my-app.com/settings\n")),(0,a.kt)("p",null,"You can set this configuration value using environment variable\n",(0,a.kt)("inlineCode",{parentName:"p"},"URLS_SETTINGS_UI")," as well!"),(0,a.kt)("p",null,"If you don't know what that means, head over to\n",(0,a.kt)("a",{parentName:"p",href:"/kratos/docs/v0.3/self-service/flows/user-settings"},"User Settings"),"!"))}f.isMDXComponent=!0}}]);