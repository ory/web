(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{228:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),s=n(9),i=(n(0),n(323)),o={id:"link-unlink-openid-connect-oauth2",title:"Link and Unlink OpenID Connect and OAuth2 Connections"},a={id:"self-service/flows/user-settings/link-unlink-openid-connect-oauth2",title:"Link and Unlink OpenID Connect and OAuth2 Connections",description:":::tip Before you start",source:"@site/docs/self-service/flows/user-settings/link-unlink-openid-connect-oauth2.mdx",permalink:"/kratos/docs/next/self-service/flows/user-settings/link-unlink-openid-connect-oauth2",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/self-service/flows/user-settings/link-unlink-openid-connect-oauth2.mdx",version:"next",lastUpdatedBy:"hackerman",lastUpdatedAt:1589542121,sidebar:"docs",previous:{title:"Change Password",permalink:"/kratos/docs/next/self-service/flows/user-settings/change-password"},next:{title:"User Logout",permalink:"/kratos/docs/next/self-service/flows/user-logout"}},c=[{value:"Flow",id:"flow",children:[]},{value:"Security and Defenses",id:"security-and-defenses",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Before you start")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Please read the\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/kratos/docs/next/concepts/credentials/username-email-password"}),"Username / Email & Password Credentials Documentation"),"\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/kratos/docs/next/concepts/credentials/openid-connect-oidc-oauth2"}),"OpenID Connect / OAuth2 Credentials Documentation"),"\nand ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/kratos/docs/next/self-service/flows/user-settings"}),"User Settings Documentation")," first."))),Object(i.b)("p",null,"Because OAuth2 and OpenID Connect (OIDC) require the user to interact with a\nbrowser, this strategy does not work with API-only flows. You cannot log in or\nsign up a user using this strategy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"with REST API or AJAX requests only;"),Object(i.b)("li",{parentName:"ul"},"without a browser.")),Object(i.b)("p",null,'This document summarizes exemplary request payloads for performing "link /\nunlink your account from Google, Github, ..." flows using the user settings flow\nwith the ',Object(i.b)("inlineCode",{parentName:"p"},"oidc")," strategy."),Object(i.b)("p",null,"ORY Kratos will prompt the user to re-authenticate before the password is\nchanged, similar to the\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://help.github.com/en/github/authenticating-to-github/sudo-mode"}),"GitHub sudo mode"),"."),Object(i.b)("p",null,'You can configure how long a session is "privileged" by setting:'),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/kratos/config.yml"',title:'"path/to/kratos/config.yml"'}),"selfservice:\n  settings:\n    # Sessions older than a minute requires the user to sign in again before\n    # the password is changed.\n    privileged_session_max_age: 1m\n")),Object(i.b)("p",null,"The provider's configured JSONNet is not used in this flow. This means that the\nIdentity's Traits will not change when a OpenID Connect / OAuth2 Provider is\nlinked or unlinked."),Object(i.b)("p",null,"Here we use a configuration with 3 providers:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'}),"selfservice:\n  strategies:\n    oidc:\n      enabled: true\n      config:\n        providers:\n          - id: hydra\n          # provider, client_id, issuer_url, scope, ...\n          - id: google\n            # provider, client_id, issuer_url, scope, ...\n          - id: github\n            # provider, client_id, issuer_url, scope, ...\n")),Object(i.b)("h2",{id:"flow"},"Flow"),Object(i.b)("p",null,"Redirecting the browser to the\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/kratos/docs/next/self-service/flows/user-settings#user-settings-process-sequence"}),"Self-Service Settings Endpoint"),"\ninitiates the flow. If the ",Object(i.b)("inlineCode",{parentName:"p"},"oidc")," strategy is enabled, the Settings Request\nResponse Payload will include a ",Object(i.b)("inlineCode",{parentName:"p"},"oidc")," method."),Object(i.b)("p",null,"A provider can be unlinked if there is at least one other method (credential) of\nsigning in (e.g. connected to both GitHub and Google, or having set an\nemail/username + password). A provider can be linked if it has not yet been\nlinked."),Object(i.b)("p",null,"In this example, the user used Google to sign in. Because no other credential is\nenabled, it can not be unlinked and is therefore hidden from the form:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/settings?request=d88e67a6-7011-482b-b448-54629c434f6a"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/settings?request":'d88e67a6-7011-482b-b448-54629c434f6a"'}),"{\n  id: 'd88e67a6-7011-482b-b448-54629c434f6a',\n  expires_at: '2020-05-15T11:11:19.909207Z',\n  issued_at: '2020-05-15T10:11:19.909207Z',\n  request_url: 'http://127.0.0.1:4433/self-service/browser/flows/settings',\n  methods: {\n    // password, profile, ...\n    oidc: {\n      method: 'oidc',\n      config: {\n        action: 'http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/strategies/oidc/settings/connections?request=e354472c-32b3-4c23-89b7-7edf7418395e',\n        method: 'POST',\n        fields: [\n          {\n            name: 'csrf_token',\n            type: 'hidden',\n            required: true,\n            value: 'a1CNYwJo3G603eaMLHcDyqPgJz9ArZu2cqJqE+tAvvUkGz63Y1G6WYuBc/EdjFHZM7mSjglbroNQyEAjuY21pw==',\n          },\n          {\n            name: 'link',\n            type: 'submit',\n            value: 'hydra',\n          },\n          {\n            name: 'link',\n            type: 'submit',\n            value: 'github',\n          },\n        ],\n      },\n    },\n  },\n  identity: {\n    id: 'dd8ce04e-c636-4488-bc92-b5debf73fd30',\n    traits_schema_id: 'default',\n    traits_schema_url: '',\n    traits: {\n      email: 'superuser@ory.sh',\n      website: 'https://www.ory.sh',\n    },\n  },\n  update_successful: false,\n}\n")),Object(i.b)("p",null,"Assuming the user chooses to link the GitHub profile, the payload will look like\nthis after a successful flow:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/settings?request=d88e67a6-7011-482b-b448-54629c434f6a"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/settings?request":'d88e67a6-7011-482b-b448-54629c434f6a"'}),'{\n    "id": "d88e67a6-7011-482b-b448-54629c434f6a",\n    // expires_at, ...\n    "update_successful": true // <-- this is now true\n    "methods": {\n        "oidc": {\n            "method": "oidc",\n            "config": {\n                "action": "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/strategies/oidc/settings/connections?request=d88e67a6-7011-482b-b448-54629c434f6a",\n                "method": "POST",\n                "fields": [\n                    {\n                        "name": "csrf_token",\n                        "type": "hidden",\n                        "required": true,\n                        "value": "f+SbISlrPFgmV3AtU3GtqJZ5lN0tpRBFLXaeo+6ENw4c/MfQStdBlB1wqja9lS5tSKtXzo1Ex/wPdhPoeLlPrQ=="\n                    },\n                    {\n                        "name": "link",\n                        "type": "submit",\n                        "value": "hydra"\n                    },\n                    {\n                        "name": "unlink", // <- you can now unlink google because github is set up!\n                        "type": "submit",\n                        "value": "google"\n                    },\n                    {\n                        "name": "unlink",  // <- this is now unlink!\n                        "type": "submit",\n                        "value": "github"\n                    }\n                ]\n            }\n        },\n    },\n    // ...\n}\n')),Object(i.b)("p",null,"If an error occurs during the flow, it will be included in the form error:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/settings?request=d88e67a6-7011-482b-b448-54629c434f6a"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/settings?request":'d88e67a6-7011-482b-b448-54629c434f6a"'}),"{\n  id: 'd88e67a6-7011-482b-b448-54629c434f6a',\n  // expires_at, ...\n  methods: {\n    oidc: {\n      method: 'oidc',\n      config: {\n        action: 'http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/strategies/oidc/settings/connections?request=d88e67a6-7011-482b-b448-54629c434f6a',\n        method: 'POST',\n        errors: [\n          {\n            message: 'Authentication failed because no id_token was returned. Please accept the \"openid\" permission and try again.',\n          },\n        ],\n        // fields\n      },\n    },\n  },\n  // ...\n}\n")),Object(i.b)("h2",{id:"security-and-defenses"},"Security and Defenses"),Object(i.b)("p",null,"Please head over to\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/kratos/docs/next/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2#security-and-defenses"}),"OpenID Connect Security and Defenses")))}u.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),s=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),u=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},d=function(e){var t=u(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,f=d["".concat(o,".").concat(p)]||d[p]||b[p]||i;return n?s.a.createElement(f,a({ref:t},l,{components:n})):s.a.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var l=2;l<i;l++)o[l]=n[l];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);