(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[5304],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),f=o,m=l["".concat(s,".").concat(f)]||l[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},95625:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={id:"federation",title:"Federation"},c={unversionedId:"concepts/federation",id:"version-v0.4/concepts/federation",isDocsHomePage:!1,title:"Federation",description:"ORY Kratos does not support federation features itself, but it integrates with",source:"@site/versioned_docs/version-v0.4/concepts/federation.md",sourceDirName:"concepts",slug:"/concepts/federation",permalink:"/kratos/docs/v0.4/concepts/federation",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/concepts/federation.md",version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594198226,formattedLastUpdatedAt:"7/8/2020",frontMatter:{id:"federation",title:"Federation"},sidebar:"version-v0.4/docs",previous:{title:"Out-of-band communication via E-Mail and SMS",permalink:"/kratos/docs/v0.4/concepts/email-sms"},next:{title:"Threat Models and Security Profiles",permalink:"/kratos/docs/v0.4/concepts/security"}},s=[{value:"Becoming an OAuth2 and OpenID Connect Provider",id:"becoming-an-oauth2-and-openid-connect-provider",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ORY Kratos does not support federation features itself, but it integrates with\nprojects like ",(0,a.kt)("a",{parentName:"p",href:"https://www.ory.sh/hydra"},"ORY Hydra")," that implement federation\nprotocols."),(0,a.kt)("h2",{id:"becoming-an-oauth2-and-openid-connect-provider"},"Becoming an OAuth2 and OpenID Connect Provider"),(0,a.kt)("p",null,"Future releases of ORY Kratos will integrate with\n",(0,a.kt)("a",{parentName:"p",href:"https://www.ory.sh/hydra"},"ORY Hydra")," natively to support OAuth2 and OpenID\nConnect use cases."))}u.isMDXComponent=!0}}]);