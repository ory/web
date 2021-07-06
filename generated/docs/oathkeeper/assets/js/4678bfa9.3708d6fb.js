(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[1125],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(n),d=o,f=l["".concat(c,".").concat(d)]||l[d]||h[d]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=l;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},1315:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return l}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),s=["components"],i={id:"oauth2-token-introspection-hydra",title:"Connect to ORY Hydra OAuth2 Token Introspection"},c=void 0,p={unversionedId:"oauth2-token-introspection-hydra",id:"version-v0.38/oauth2-token-introspection-hydra",isDocsHomePage:!1,title:"Connect to ORY Hydra OAuth2 Token Introspection",description:"This document is a work in progress.",source:"@site/versioned_docs/version-v0.38/scope-strategies-hydra.mdx",sourceDirName:".",slug:"/oauth2-token-introspection-hydra",permalink:"/oathkeeper/docs/oauth2-token-introspection-hydra",editUrl:"https://github.com/ory/oathkeeper/edit/master/docs/versioned_docs/version-v0.38/scope-strategies-hydra.mdx",version:"v0.38",lastUpdatedBy:"aeneasr",lastUpdatedAt:1607509379,formattedLastUpdatedAt:"12/9/2020",frontMatter:{id:"oauth2-token-introspection-hydra",title:"Connect to ORY Hydra OAuth2 Token Introspection"}},u=[{value:"Synchronize Access Token / OAuth2 Scope Strategy",id:"synchronize-access-token--oauth2-scope-strategy",children:[]}],h={toc:u};function l(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document is a work in progress."),(0,a.kt)("h2",{id:"synchronize-access-token--oauth2-scope-strategy"},"Synchronize Access Token / OAuth2 Scope Strategy"),(0,a.kt)("p",null,"When using ORY Oathkeeper together with ORY Hydra the scope strategy needs to be\nkept in sync."),(0,a.kt)("p",null,"ORY Oathkeeper sends the scope as part of the introspection request.\n",(0,a.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/token-introspection-endpoint/"},"(More about token introspection)")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.ory.sh/hydra/docs/guides/oauth2-token-introspection/"},"Hydra"),"\nprocesses this scope parameter (which is actually not defined in the OAuth2\nIntrospection RFC) according to the scope strategy defined in Hydra."),(0,a.kt)("p",null,"The scope strategy defined in ORY Oathkeeper serves as a fallback for when\nOAuth2 servers do not implement this feature."),(0,a.kt)("p",null,"Therefore, these two settings must be kept in sync."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.ory.sh/hydra/docs/reference/api#parameters-27"},"Here")," you can find\nthe Hydra setting and\n",(0,a.kt)("a",{parentName:"p",href:"https://www.ory.sh/oathkeeper/docs/v0.37/pipeline/authn/#configuration-5"},"here"),"\nthe respective one for Oathkeeper."),(0,a.kt)("p",null,"The same problem would arise if you configure your client to be allowed to\nrequest scope foo and your OAuth2 request requests foo.bar."))}l.isMDXComponent=!0}}]);