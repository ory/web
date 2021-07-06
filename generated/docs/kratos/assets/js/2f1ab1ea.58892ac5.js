(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[3363],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40316:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=["components"],c={id:"account-activation-email-verification",title:"Setting up Account Activation and E-Mail Verification"},s=void 0,u={unversionedId:"guides/account-activation-email-verification",id:"version-v0.5/guides/account-activation-email-verification",isDocsHomePage:!1,title:"Setting up Account Activation and E-Mail Verification",description:"To set up email verification, your",source:"@site/versioned_docs/version-v0.5/guides/account-activation-email-verification.mdx",sourceDirName:"guides",slug:"/guides/account-activation-email-verification",permalink:"/kratos/docs/v0.5/guides/account-activation-email-verification",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/guides/account-activation-email-verification.mdx",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1602674546,formattedLastUpdatedAt:"10/14/2020",frontMatter:{id:"account-activation-email-verification",title:"Setting up Account Activation and E-Mail Verification"},sidebar:"version-v0.5/docs",previous:{title:"Setting up Account Recovery and Password Reset",permalink:"/kratos/docs/v0.5/guides/account-recovery-password-reset"},next:{title:"Zero Trust with IAP Proxy",permalink:"/kratos/docs/v0.5/guides/zero-trust-iap-proxy-identity-access-proxy"}},l=[],p={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To set up email verification, your\n",(0,a.kt)("a",{parentName:"p",href:"/kratos/docs/v0.5/concepts/identity-data-model"},"Identity JSON Schema")," must have an email in\nits traits and add"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ory.sh/kratos": {\n    "verification": {\n      "via": "email"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"to it, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'{\n  "$id": "https://schemas.ory.sh/presets/kratos/quickstart/email-password/identity.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "email": {\n          "type": "string",\n          "format": "email",\n          "title": "E-Mail",\n          "minLength": 3,\n+         "ory.sh/kratos": {\n+           "verification": {\n+             "via": "email"\n+           }\n+         }\n        }\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Email verification currently supports sending out a recovery link to an email\naddress. For this to work, you must have the courier SMTP connection configured\nin your ORY Kratos Config File (",(0,a.kt)("inlineCode",{parentName:"p"},"kratos serve -c /home/kratos/.kratos.yml"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"}," # ORY Kratos Config File\n+courier:\n+  smtp:\n+    connection_uri: smtps://username:password@smtp-server:1234/\n # ...\n")),(0,a.kt)("p",null,"You also need to enable verification:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"}," selfservice:\n   flows:\n     # login ...\n     # registration...\n\n+    verification:\n+      enabled: true\n+      ui_url: http://127.0.0.1:4455/verify\n\n # ...\n")),(0,a.kt)("p",null,"That all that's needed! For more information on implementing the UI and details\nabout the payloads, head over to the\n",(0,a.kt)("a",{parentName:"p",href:"/kratos/docs/v0.5/self-service/flows/verify-email-account-activation"},"Email and Phone Verification and Account Activation Documentation"),"!"))}d.isMDXComponent=!0}}]);