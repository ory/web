(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{231:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(9),a=(n(0),n(390)),c={id:"account-recovery-password-reset",title:"Setting up Account Recovery and Password Reset"},s={id:"version-v0.4/guides/account-recovery-password-reset",isDocsHomePage:!1,title:"Setting up Account Recovery and Password Reset",description:"To set up account recovery, your",source:"@site/versioned_docs/version-v0.4/guides/account-recovery-password-reset.mdx",permalink:"/kratos/docs/guides/account-recovery-password-reset",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/guides/account-recovery-password-reset.mdx",version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594203957,sidebar:"version-v0.4/docs",previous:{title:"Zero Trust with IAP Proxy",permalink:"/kratos/docs/guides/zero-trust-iap-proxy-identity-access-proxy"},next:{title:"Setting up Account Activation and E-Mail Verification",permalink:"/kratos/docs/guides/account-activation-email-verification"}},i=[],u={rightToc:i};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To set up account recovery, your\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/kratos/docs/concepts/identity-user-model"}),"Identity JSON Schema")," must have an email in\nits traits and add"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "ory.sh/kratos": {\n    "recovery": {\n      "via": "email"\n    }\n  }\n}\n')),Object(a.b)("p",null,"to it, for example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),'{\n  "$id": "https://schemas.ory.sh/presets/kratos/quickstart/email-password/identity.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "email": {\n          "type": "string",\n          "format": "email",\n          "title": "E-Mail",\n          "minLength": 3,\n+         "ory.sh/kratos": {\n+           "recovery": {\n+             "via": "email"\n+           }\n+         }\n        }\n      }\n    }\n  }\n}\n')),Object(a.b)("p",null,"Account recovery currently supports sending out a recovery link to an email\naddress. For this to work, you must have the courier SMTP connection configured\nin your ORY Kratos Config File (",Object(a.b)("inlineCode",{parentName:"p"},"kratos serve -c /home/kratos/.kratos.yml"),"):"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"})," # ORY Kratos Config File\n+courier:\n+  smtp:\n+    connection_uri: smtps://username:password@smtp-server:1234/\n # ...\n")),Object(a.b)("p",null,"You also need to enable account recovery and have the ",Object(a.b)("inlineCode",{parentName:"p"},"link")," strategy enabled:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"})," selfservice:\n   strategies:\n     link:\n       # Defaults to true, so left out. If you explicitly want to disable this strategy,\n       # set the value to `false`.\n       #\n       # enabled: true\n\n   flows:\n     # login ...\n     # registration...\n\n+    recovery:\n+      enabled: true\n+      ui_url: http://127.0.0.1:4455/recovery\n\n # ...\n")),Object(a.b)("p",null,"That all that's needed! For more information on implementing the UI and details\nabout the payloads, head over to the\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/kratos/docs/self-service/flows/account-recovery"}),"Account Recovery Documentation"),"!"))}l.isMDXComponent=!0},390:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?o.a.createElement(b,s(s({ref:t},u),{},{components:n})):o.a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);