(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{173:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var s=t(3),r=t(8),i=(t(0),t(551)),o={id:"link-unlink-openid-connect-oauth2",title:"Link and Unlink OpenID Connect and OAuth2 Connections"},a={unversionedId:"self-service/flows/user-settings/link-unlink-openid-connect-oauth2",id:"version-v0.4/self-service/flows/user-settings/link-unlink-openid-connect-oauth2",isDocsHomePage:!1,title:"Link and Unlink OpenID Connect and OAuth2 Connections",description:"Please read the",source:"@site/versioned_docs/version-v0.4/self-service/flows/user-settings/link-unlink-openid-connect-oauth2.mdx",sourceDirName:"self-service/flows/user-settings",slug:"/self-service/flows/user-settings/link-unlink-openid-connect-oauth2",permalink:"/kratos/docs/v0.4/self-service/flows/user-settings/link-unlink-openid-connect-oauth2",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/self-service/flows/user-settings/link-unlink-openid-connect-oauth2.mdx",version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594198226,formattedLastUpdatedAt:"7/8/2020",frontMatter:{id:"link-unlink-openid-connect-oauth2",title:"Link and Unlink OpenID Connect and OAuth2 Connections"},sidebar:"version-v0.4/docs",previous:{title:"Change Password",permalink:"/kratos/docs/v0.4/self-service/flows/user-settings/change-password"},next:{title:"Account Recovery",permalink:"/kratos/docs/v0.4/self-service/flows/account-recovery"}},c=[{value:"Flow",id:"flow",children:[]},{value:"Security and Defenses",id:"security-and-defenses",children:[]}],l={toc:c};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(s.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Before you start")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Please read the\n",Object(i.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/concepts/credentials/username-email-password"},"Username / Email & Password Credentials Documentation"),"\n",Object(i.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/concepts/credentials/openid-connect-oidc-oauth2"},"OpenID Connect / OAuth2 Credentials Documentation"),"\nand ",Object(i.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/self-service/flows/user-settings"},"User Settings Documentation")," first."))),Object(i.b)("p",null,"Because OAuth2 and OpenID Connect (OIDC) require the user to interact with a\nbrowser, this strategy does not work with API-only flows. You cannot log in or\nsign up a user using this strategy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"with REST API or AJAX requests only;"),Object(i.b)("li",{parentName:"ul"},"without a browser.")),Object(i.b)("p",null,'This document summarizes exemplary request payloads for performing "link /\nunlink your account from Google, Github, ..." flows using the user settings flow\nwith the ',Object(i.b)("inlineCode",{parentName:"p"},"oidc")," strategy."),Object(i.b)("p",null,"ORY Kratos will prompt the user to re-authenticate before the password is\nchanged, similar to the\n",Object(i.b)("a",{parentName:"p",href:"https://help.github.com/en/github/authenticating-to-github/sudo-mode"},"GitHub sudo mode"),"."),Object(i.b)("p",null,'You can configure how long a session is "privileged" by setting:'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml"',title:'"path/to/kratos/config.yml"'},"selfservice:\n  flows:\n    settings:\n      # Sessions older than a minute requires the user to sign in again before\n      # the password is changed.\n      privileged_session_max_age: 1m\n")),Object(i.b)("p",null,"The provider's configured JSONNet is not used in this flow. This means that the\nIdentity's Traits will not change when a OpenID Connect / OAuth2 Provider is\nlinked or unlinked."),Object(i.b)("p",null,"Here we use a configuration with 3 providers:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"selfservice:\n  strategies:\n    oidc:\n      enabled: true\n      config:\n        providers:\n          - id: hydra\n          # provider, client_id, issuer_url, scope, ...\n          - id: google\n            # provider, client_id, issuer_url, scope, ...\n          - id: github\n            # provider, client_id, issuer_url, scope, ...\n")),Object(i.b)("h2",{id:"flow"},"Flow"),Object(i.b)("p",null,"Redirecting the browser to the\n",Object(i.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/self-service/flows/user-settings#user-settings-process-sequence"},"Self-Service Settings Endpoint"),"\ninitiates the flow. If the ",Object(i.b)("inlineCode",{parentName:"p"},"oidc")," strategy is enabled, the Settings Request\nResponse Payload will include a ",Object(i.b)("inlineCode",{parentName:"p"},"oidc")," method."),Object(i.b)("p",null,"A provider can be unlinked if there is at least one other method (credential) of\nsigning in (e.g. connected to both GitHub and Google, or having set an\nemail/username + password). A provider can be linked if it has not yet been\nlinked."),Object(i.b)("p",null,"In this example, the user used Google to sign in. Because no other credential is\nenabled, it can not be unlinked and is therefore hidden from the form:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/settings?request=d88e67a6-7011-482b-b448-54629c434f6a"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/settings?request":'d88e67a6-7011-482b-b448-54629c434f6a"'},"{\n  id: 'd88e67a6-7011-482b-b448-54629c434f6a',\n  expires_at: '2020-05-15T11:11:19.909207Z',\n  issued_at: '2020-05-15T10:11:19.909207Z',\n  request_url: 'http://127.0.0.1:4433/self-service/browser/flows/settings',\n  methods: {\n    // password, profile, ...\n    oidc: {\n      method: 'oidc',\n      config: {\n        action: 'http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/strategies/oidc/settings/connections?request=e354472c-32b3-4c23-89b7-7edf7418395e',\n        method: 'POST',\n        fields: [\n          {\n            name: 'csrf_token',\n            type: 'hidden',\n            required: true,\n            value: 'a1CNYwJo3G603eaMLHcDyqPgJz9ArZu2cqJqE+tAvvUkGz63Y1G6WYuBc/EdjFHZM7mSjglbroNQyEAjuY21pw=='\n          },\n          {\n            name: 'link',\n            type: 'submit',\n            value: 'hydra'\n          },\n          {\n            name: 'link',\n            type: 'submit',\n            value: 'github'\n          }\n        ]\n      }\n    }\n  },\n  identity: {\n    id: 'dd8ce04e-c636-4488-bc92-b5debf73fd30',\n    schema_id: 'default',\n    schema_url: '',\n    traits: {\n      email: 'superuser@ory.sh',\n      website: 'https://www.ory.sh'\n    }\n  },\n  update_successful: false\n}\n")),Object(i.b)("p",null,"Assuming the user chooses to link the GitHub profile, the payload will look like\nthis after a successful flow:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/settings?request=d88e67a6-7011-482b-b448-54629c434f6a"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/settings?request":'d88e67a6-7011-482b-b448-54629c434f6a"'},'{\n    "id": "d88e67a6-7011-482b-b448-54629c434f6a",\n    // expires_at, ...\n    "update_successful": true // <-- this is now true\n    "methods": {\n        "oidc": {\n            "method": "oidc",\n            "config": {\n                "action": "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/strategies/oidc/settings/connections?request=d88e67a6-7011-482b-b448-54629c434f6a",\n                "method": "POST",\n                "fields": [\n                    {\n                        "name": "csrf_token",\n                        "type": "hidden",\n                        "required": true,\n                        "value": "f+SbISlrPFgmV3AtU3GtqJZ5lN0tpRBFLXaeo+6ENw4c/MfQStdBlB1wqja9lS5tSKtXzo1Ex/wPdhPoeLlPrQ=="\n                    },\n                    {\n                        "name": "link",\n                        "type": "submit",\n                        "value": "hydra"\n                    },\n                    {\n                        "name": "unlink", // <- you can now unlink google because github is set up!\n                        "type": "submit",\n                        "value": "google"\n                    },\n                    {\n                        "name": "unlink",  // <- this is now unlink!\n                        "type": "submit",\n                        "value": "github"\n                    }\n                ]\n            }\n        },\n    },\n    // ...\n}\n')),Object(i.b)("p",null,"If an error occurs during the flow, it will be included in the form error:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/settings?request=d88e67a6-7011-482b-b448-54629c434f6a"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/settings?request":'d88e67a6-7011-482b-b448-54629c434f6a"'},"{\n  id: 'd88e67a6-7011-482b-b448-54629c434f6a',\n  // expires_at, ...\n  methods: {\n    oidc: {\n      method: 'oidc',\n      config: {\n        action: 'http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/strategies/oidc/settings/connections?request=d88e67a6-7011-482b-b448-54629c434f6a',\n        method: 'POST',\n        messages: [\n          {\n            /* id, type */\n            text: 'Authentication failed because no id_token was returned. Please accept the \"openid\" permission and try again.'\n          }\n        ]\n        // fields\n      }\n    }\n  }\n  // ...\n}\n")),Object(i.b)("h2",{id:"security-and-defenses"},"Security and Defenses"),Object(i.b)("p",null,"Please head over to\n",Object(i.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2#security-and-defenses"},"OpenID Connect Security and Defenses")))}u.isMDXComponent=!0},551:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var s=t(0),r=t.n(s);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),b=s,f=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return t?r.a.createElement(f,a(a({ref:n},l),{},{components:t})):r.a.createElement(f,a({ref:n},l))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,o=new Array(i);o[0]=b;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);