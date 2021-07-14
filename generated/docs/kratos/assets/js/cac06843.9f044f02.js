(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[26085],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40683:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),s=["components"],c={id:"account-recovery-password-reset",title:"Setting up Account Recovery and Password Reset"},i=void 0,u={unversionedId:"guides/account-recovery-password-reset",id:"version-v0.5/guides/account-recovery-password-reset",isDocsHomePage:!1,title:"Setting up Account Recovery and Password Reset",description:"To set up account recovery, your",source:"@site/versioned_docs/version-v0.5/guides/account-recovery-password-reset.mdx",sourceDirName:"guides",slug:"/guides/account-recovery-password-reset",permalink:"/kratos/docs/v0.5/guides/account-recovery-password-reset",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/guides/account-recovery-password-reset.mdx",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1602674546,formattedLastUpdatedAt:"10/14/2020",frontMatter:{id:"account-recovery-password-reset",title:"Setting up Account Recovery and Password Reset"},sidebar:"version-v0.5/docs",previous:{title:"Setting up Cross-origin resource sharing (CORS)",permalink:"/kratos/docs/v0.5/guides/setting-up-cors"},next:{title:"Setting up Account Activation and E-Mail Verification",permalink:"/kratos/docs/v0.5/guides/account-activation-email-verification"}},l=[],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To set up account recovery, your\n",(0,a.kt)("a",{parentName:"p",href:"/kratos/docs/v0.5/concepts/identity-data-model"},"Identity JSON Schema")," must have an email in\nits traits and add"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ory.sh/kratos": {\n    "recovery": {\n      "via": "email"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"to it, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'{\n  "$id": "https://schemas.ory.sh/presets/kratos/quickstart/email-password/identity.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "email": {\n          "type": "string",\n          "format": "email",\n          "title": "E-Mail",\n          "minLength": 3,\n+         "ory.sh/kratos": {\n+           "recovery": {\n+             "via": "email"\n+           }\n+         }\n        }\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Account recovery currently supports sending out a recovery link to an email\naddress. For this to work, you must have the courier SMTP connection configured\nin your ORY Kratos Config File (",(0,a.kt)("inlineCode",{parentName:"p"},"kratos serve -c /home/kratos/.kratos.yml"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"}," # ORY Kratos Config File\n+courier:\n+  smtp:\n+    connection_uri: smtps://username:password@smtp-server:1234/\n # ...\n")),(0,a.kt)("p",null,"You also need to enable account recovery and have the ",(0,a.kt)("inlineCode",{parentName:"p"},"link")," method enabled:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"}," selfservice:\n   methods:\n     link:\n       # Defaults to true, so left out. If you explicitly want to disable this method,\n       # set the value to `false`.\n       #\n       # enabled: true\n\n   flows:\n     # login ...\n     # registration...\n\n+    recovery:\n+      enabled: true\n+      ui_url: http://127.0.0.1:4455/recovery\n\n # ...\n")),(0,a.kt)("p",null,"That all that's needed! For more information on implementing the UI and details\nabout the payloads, head over to the\n",(0,a.kt)("a",{parentName:"p",href:"/kratos/docs/v0.5/self-service/flows/account-recovery"},"Account Recovery Documentation"),"!"))}d.isMDXComponent=!0}}]);