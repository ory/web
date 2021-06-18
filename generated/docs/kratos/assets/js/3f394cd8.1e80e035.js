(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[7990],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26997:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o={id:"credentials",title:"Overview"},s={unversionedId:"concepts/credentials",id:"version-v0.6/concepts/credentials",isDocsHomePage:!1,title:"Overview",description:"Each identity has one or more credentials associated with it:",source:"@site/versioned_docs/version-v0.6/concepts/credentials.md",sourceDirName:"concepts",slug:"/concepts/credentials",permalink:"/kratos/docs/concepts/credentials",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/concepts/credentials.md",version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619690398,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"credentials",title:"Overview"},sidebar:"version-v0.6/docs",previous:{title:"Identity Data Model",permalink:"/kratos/docs/concepts/identity-data-model"},next:{title:"Username / Email & Password",permalink:"/kratos/docs/concepts/credentials/username-email-password"}},c=[],d={toc:c};function l(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Each identity has one or more credentials associated with it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"credentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@acme.com\n      - johnd@ory.sh\n    config:\n      hashed_password: ...\n  oidc:\n    id: oidc\n    identifiers:\n      - google:j8kf7a3...\n      - facebook:83475891...\n    config:\n      - provider: google\n        identifier: j8kf7a3\n      - provider: facebook\n        identifier: 83475891\n")),(0,a.kt)("p",null,"Ory Kratos supports several credential types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"password"),": The most common ",(0,a.kt)("em",{parentName:"li"},"identifier (username, email, ...) + password"),"\ncredential."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"oidc"),': The "Log in with Google/Facebook/GitHub/..." credential.'),(0,a.kt)("li",{parentName:"ul"},"Other credentials - support other credential types (X509 Certificates,\nBiometrics, ...) at will be added a later stage.")),(0,a.kt)("p",null,"Each credential - regardless of its type - has one or more identifiers attached\nto it. Each identifier is universally unique. Assuming we had one identity with\ncredentials"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"credentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@acme.com\n")),(0,a.kt)("p",null,"and tried to create (or update) another identity with the same identifier\n(",(0,a.kt)("inlineCode",{parentName:"p"},"john.doe@acme.com"),"), the system would reject the request with a 409 Conflict\nstate."),(0,a.kt)("p",null,"While credentials must be unique per type, there can be duplicates amongst\nmultiple types:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# This is ok:\ncredentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@acme.com\n  oidc:\n    id: oidc\n    identifiers:\n      - john.doe@acme.com\n")),(0,a.kt)("p",null,"The same would apply if those were two separate identities:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# Identity 1\ncredentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@acme.com\n---\n# Identity 2\ncredentials:\n  oidc:\n    id: oidc\n    identifiers:\n      - john.doe@acme.com\n")))}l.isMDXComponent=!0}}]);