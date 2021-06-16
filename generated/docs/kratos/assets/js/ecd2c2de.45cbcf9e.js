(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[3818],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65297:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={id:"credentials",title:"Overview"},s={unversionedId:"concepts/credentials",id:"concepts/credentials",isDocsHomePage:!1,title:"Overview",description:"Each identity has one or more credentials associated with it:",source:"@site/docs/concepts/credentials.md",sourceDirName:"concepts",slug:"/concepts/credentials",permalink:"/kratos/docs/next/concepts/credentials",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/concepts/credentials.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619624197,formattedLastUpdatedAt:"4/28/2021",frontMatter:{id:"credentials",title:"Overview"},sidebar:"docs",previous:{title:"Identity Data Model",permalink:"/kratos/docs/next/concepts/identity-data-model"},next:{title:"Username / Email & Password",permalink:"/kratos/docs/next/concepts/credentials/username-email-password"}},c=[],l={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Each identity has one or more credentials associated with it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"credentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@acme.com\n      - johnd@ory.sh\n    config:\n      hashed_password: ...\n  oidc:\n    id: oidc\n    identifiers:\n      - google:j8kf7a3...\n      - facebook:83475891...\n    config:\n      - provider: google\n        identifier: j8kf7a3\n      - provider: facebook\n        identifier: 83475891\n")),(0,i.kt)("p",null,"Ory Kratos supports several credential types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password"),": The most common ",(0,i.kt)("em",{parentName:"li"},"identifier (username, email, ...) + password"),"\ncredential."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"oidc"),': The "Log in with Google/Facebook/GitHub/..." credential.'),(0,i.kt)("li",{parentName:"ul"},"Other credentials - support other credential types (X509 Certificates,\nBiometrics, ...) at will be added a later stage.")),(0,i.kt)("p",null,"Each credential - regardless of its type - has one or more identifiers attached\nto it. Each identifier is universally unique. Assuming we had one identity with\ncredentials"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"credentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@acme.com\n")),(0,i.kt)("p",null,"and tried to create (or update) another identity with the same identifier\n(",(0,i.kt)("inlineCode",{parentName:"p"},"john.doe@acme.com"),"), the system would reject the request with a 409 Conflict\nstate."),(0,i.kt)("p",null,"While credentials must be unique per type, there can be duplicates amongst\nmultiple types:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# This is ok:\ncredentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@acme.com\n  oidc:\n    id: oidc\n    identifiers:\n      - john.doe@acme.com\n")),(0,i.kt)("p",null,"The same would apply if those were two separate identities:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# Identity 1\ncredentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@acme.com\n---\n# Identity 2\ncredentials:\n  oidc:\n    id: oidc\n    identifiers:\n      - john.doe@acme.com\n")))}d.isMDXComponent=!0}}]);