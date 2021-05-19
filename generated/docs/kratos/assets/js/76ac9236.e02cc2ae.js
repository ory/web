(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{237:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return i})),s.d(t,"metadata",(function(){return o})),s.d(t,"toc",(function(){return c})),s.d(t,"default",(function(){return l}));var n=s(3),r=s(8),a=(s(0),s(454)),i={id:"change-password",title:"Change Password"},o={unversionedId:"self-service/flows/user-settings/change-password",id:"version-v0.4/self-service/flows/user-settings/change-password",isDocsHomePage:!1,title:"Change Password",description:"Please read the",source:"@site/versioned_docs/version-v0.4/self-service/flows/user-settings/change-password.mdx",sourceDirName:"self-service/flows/user-settings",slug:"/self-service/flows/user-settings/change-password",permalink:"/kratos/docs/v0.4/self-service/flows/user-settings/change-password",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/self-service/flows/user-settings/change-password.mdx",version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594198226,formattedLastUpdatedAt:"7/8/2020",frontMatter:{id:"change-password",title:"Change Password"},sidebar:"version-v0.4/docs",previous:{title:"User Profile Management",permalink:"/kratos/docs/v0.4/self-service/flows/user-settings/user-profile-management"},next:{title:"Link and Unlink OpenID Connect and OAuth2 Connections",permalink:"/kratos/docs/v0.4/self-service/flows/user-settings/link-unlink-openid-connect-oauth2"}},c=[{value:"Browser Clients",id:"browser-clients",children:[]},{value:"API Clients",id:"api-clients",children:[]},{value:"Security and Defenses",id:"security-and-defenses",children:[]}],d={toc:c};function l(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},d,s,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Before you start")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Please read the\n",Object(a.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/concepts/credentials/username-email-password"},"Username / Email & Password Credentials Documentation"),"\nand ",Object(a.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/self-service/flows/user-settings"},"User Settings Documentation")," first."))),Object(a.b)("p",null,'This document summarizes exemplary request payloads for performing "change\npassword" flows using the user settings flow with the ',Object(a.b)("inlineCode",{parentName:"p"},"password")," strategy."),Object(a.b)("p",null,"ORY Kratos will prompt the user to re-authenticate before the password is\nchanged, similar to the\n",Object(a.b)("a",{parentName:"p",href:"https://help.github.com/en/github/authenticating-to-github/sudo-mode"},"GitHub sudo mode"),"."),Object(a.b)("p",null,'You can configure how long a session is "privileged" by setting:'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml"',title:'"path/to/kratos/config.yml"'},"selfservice:\n  flows:\n    settings:\n      # Sessions older than a minute requires the user to sign in again before\n      # the password is changed.\n      privileged_session_max_age: 1m\n")),Object(a.b)("h2",{id:"browser-clients"},"Browser Clients"),Object(a.b)("p",null,"Redirecting the browser to the\n",Object(a.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/self-service/flows/user-settings#user-settings-process-sequence"},"Self-Service Settings Endpoint"),"\ninitiates the flow. If the ",Object(a.b)("inlineCode",{parentName:"p"},"password")," strategy is enabled, the Settings Request\nResponse Payload will include a ",Object(a.b)("inlineCode",{parentName:"p"},"password")," method:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/settings?request=71da1753-e135-441c-b4df-e7b7cd90ad88"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/settings?request":'71da1753-e135-441c-b4df-e7b7cd90ad88"'},"{\n  id: '71da1753-e135-441c-b4df-e7b7cd90ad88',\n  expires_at: '2020-05-02T15:52:09.67209Z',\n  issued_at: '2020-05-02T14:52:09.67209Z',\n  request_url: 'http://127.0.0.1:4433/self-service/browser/flows/settings',\n  methods: {\n    // \"profile\": ...\n    // \"oidc\": ...\n    password: {\n      method: 'password',\n      config: {\n        action: 'http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/settings/strategies/password?request=71da1753-e135-441c-b4df-e7b7cd90ad88',\n        method: 'POST',\n        fields: [\n          {\n            name: 'password',\n            type: 'password',\n            required: true\n          },\n          {\n            name: 'csrf_token',\n            type: 'hidden',\n            required: true,\n            value: 'UjEPiUMubRiAl0NG7yUzsww8XjpJvW+HBrh6JirjLxPqhlW2ql+0kYknjd8gdsx0v08vQSmqUEcZhNPsvkr2Kw=='\n          }\n        ]\n      }\n    }\n  },\n  identity: {\n    id: 'f48c43bb-50ea-4520-9280-37a891175aba',\n    traits: {\n      email: 'h71x9a@j6r8c'\n    }\n  },\n  state: 'show_form'\n}\n")),Object(a.b)("p",null,"Once submitted, the password is validated. If validation fails, the reason will\nbe included:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/settings?request=71da1753-e135-441c-b4df-e7b7cd90ad88"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/settings?request":'71da1753-e135-441c-b4df-e7b7cd90ad88"'},"{\n  id: '71da1753-e135-441c-b4df-e7b7cd90ad88',\n  // expires_at, ...\n  active: 'password', // <- this is now set!\n  methods: {\n    password: {\n      method: 'password',\n      config: {\n        // action, method ...\n        messages: [\n          {\n            /* id, type */\n            text: 'Please check the data you provided.'\n          }\n        ],\n        fields: [\n          // ...\n          {\n            name: 'password',\n            type: 'password',\n            required: true,\n            messages: [\n              {\n                /* id, type */\n                text: 'password: password is required'\n              }\n            ]\n          }\n        ]\n      }\n    }\n  },\n  // identity, ...\n  state: 'show_form'\n}\n")),Object(a.b)("p",null,"A successful flow will be marked with:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/settings?request=71da1753-e135-441c-b4df-e7b7cd90ad88"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/settings?request":'71da1753-e135-441c-b4df-e7b7cd90ad88"'},"{\n  id: '71da1753-e135-441c-b4df-e7b7cd90ad88',\n  // expires_at, active, methods, ...\n  state: 'success'\n}\n")),Object(a.b)("h2",{id:"api-clients"},"API Clients"),Object(a.b)("p",null,"API-based login and registration using this strategy will be addressed in a\nfuture release of ORY Kratos."),Object(a.b)("h2",{id:"security-and-defenses"},"Security and Defenses"),Object(a.b)("p",null,"Please head over to\n",Object(a.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/self-service/flows/user-login-user-registration/username-email-password#security-and-defenses"},"Username / Email and Password Security and Defenses")))}l.isMDXComponent=!0},454:function(e,t,s){"use strict";s.d(t,"a",(function(){return p})),s.d(t,"b",(function(){return f}));var n=s(0),r=s.n(n);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function c(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},p=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var s=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(s),b=n,f=p["".concat(i,".").concat(b)]||p[b]||u[b]||a;return s?r.a.createElement(f,o(o({ref:t},d),{},{components:s})):r.a.createElement(f,o({ref:t},d))}));function f(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=s.length,i=new Array(a);i[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<a;d++)i[d]=s[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,s)}b.displayName="MDXCreateElement"}}]);