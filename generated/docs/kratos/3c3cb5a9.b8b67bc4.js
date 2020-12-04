(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(3),o=n(7),a=(n(0),n(441)),r=n(443),s={id:"openid-connect-oidc-oauth2",title:"Social Sign In, OpenID Connect, and OAuth2"},c={unversionedId:"concepts/credentials/openid-connect-oidc-oauth2",id:"version-v0.5/concepts/credentials/openid-connect-oidc-oauth2",isDocsHomePage:!1,title:"Social Sign In, OpenID Connect, and OAuth2",description:"The oidc method uses OpenID Connect, or OAuth2 where OpenID Connect is not",source:"@site/versioned_docs/version-v0.5/concepts/credentials/openid-connect-oidc-oauth2.mdx",slug:"/concepts/credentials/openid-connect-oidc-oauth2",permalink:"/kratos/docs/concepts/credentials/openid-connect-oidc-oauth2",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/concepts/credentials/openid-connect-oidc-oauth2.mdx",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1602674546,sidebar:"version-v0.5/docs",previous:{title:"Username / Email & Password",permalink:"/kratos/docs/concepts/credentials/username-email-password"},next:{title:"HTTP Redirection Configuration",permalink:"/kratos/docs/concepts/browser-redirect-flow-completion"}},l=[{value:"Configuration",id:"configuration",children:[]},{value:"Data Mapping with Jsonnet",id:"data-mapping-with-jsonnet",children:[{value:"External Variable <code>claims</code>",id:"external-variable-claims",children:[]}]},{value:"Identity Traits Validation and Data Completion",id:"identity-traits-validation-and-data-completion",children:[]}],d={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"oidc")," method uses OpenID Connect, or OAuth2 where OpenID Connect is not\nsupported, to authenticate identities using a third-party identity provider,\nsuch as Google, Microsoft, GitHub - or any other OAuth2 / OpenID Connect\nprovider (for example ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ory.sh/hydra"}),"ORY Hydra"),'). "Social Sign In"\nor "Sign in with ..." are common aliases for this flow.'),Object(a.b)("p",null,"This strategy expects that you've set up your\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/concepts/identity-data-model"}),"Default Identity JSON Schema"),"."),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"You can configure multiple OAuth2 / OpenID Connect providers. First, enable the\n",Object(a.b)("inlineCode",{parentName:"p"},"oidc")," method:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'}),"# $ kratos -c path/to/my/kratos/config.yml serve\nselfservice:\n  methods:\n    oidc:\n      enabled: true\n")),Object(a.b)("p",null,"Next, you need to configure the providers you want to use (e.g. GitHub)."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"The most important configuration key is the provider's ",Object(a.b)("inlineCode",{parentName:"p"},"id"),". Once set, you\nshould never remove or change that ",Object(a.b)("inlineCode",{parentName:"p"},"id"),". Otherwise, your existing users will no\nlonger be able to sign in."))),Object(a.b)("p",null,"The provider configuration looks as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'}),'# $ kratos -c path/to/my/kratos/config.yml serve\nselfservice:\n  methods:\n    oidc:\n      providers:\n        - # REQUIRED - The ID of the provider.\n          # DO NOT change this once this is in use.\n          id: github\n\n          # REQUIRED - The provider you would like to use. ORY Kratos comes with some predefined providers to make\n          # life easier for you, but you can always opt for the "generic" provider, which works\n          # with any Certified OpenID Connect Provider (Google, ORY Hydra, ...):\n          #\n          #   provider: github\n          #   provider: google\n          #   .... more to come\n          #\n          provider: generic\n\n          # REQUIRED - See section "Data Mapping with Jsonnet" for more information.\n          mapper_url: http://mydomain.com/github.schema.json\n\n          # The OAuth2 / OpenID Connect provider will provide you with a OAuth2 Client ID and Client Secret. You need\n          # to set them here:\n          client_id: ...\n          client_secret: ...\n\n          # What scope to request. Usually, this would be something like "profile" or "email".\n          # Please check the documentation of the OAuth2 / OpenID Connect provider to see what\'s allowed here.\n          scope:\n            - email\n\n          # issuer_url is the OpenID Connect Server URL. You can leave this empty if `provider` is not set to `generic`.\n          # If set, neither `auth_url` nor `token_url` are required.\n          issuer_url: http://openid-connect-provider/\n\n          # auth_url is the authorize url, typically something like: https://example.org/oauth2/auth\n          # Should only be used when the OAuth2 / OpenID Connect server is not supporting OpenID Connect Discovery and when\n          # `provider` is set to `generic`.\n          auth_url: http://openid-connect-provider/oauth2/auth\n\n          # token_url is the token url, typically something like: https://example.org/oauth2/token\n          # Should only be used when the OAuth2 / OpenID Connect server is not supporting OpenID Connect Discovery and when\n          # `provider` is set to `generic`.\n          token_url: http://openid-connect-provider/oauth2/token\n\n          # requested_claims json object that specifies claims and optionally their properties which should\n          # be included in the id_token or returned from the UserInfo Endpoint.\n          #\n          # More information: https://openid.net/specs/openid-connect-core-1_0.html#ClaimsParameter\n          requested_claims:\n            userinfo:\n              given_name:\n                essential: true\n              nickname: null\n              email:\n                essential: true\n              email_verified:\n                essential: true\n              picture: null\n              http://example/info/claims/groups: null\n            id_token:\n              auth_time:\n                essential: true\n              acr:\n                values: [\'urn:mace:incommon:iap:silver\']\n              sub:\n                value: 248289761001\n')),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},'It is very important to add the "session" hook to the after oidc registration\nhooks. Otherwise your users need to use the login flow again to be able to get a\nsession.'),Object(a.b)("pre",{parentName:"div"},Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'}),"# $ kratos -c path/to/my/kratos/config.yml serve\nselfservice:\n  flows:\n    registration:\n      after:\n        oidc:\n          hooks:\n            - hook: session\n")))),Object(a.b)("h2",{id:"data-mapping-with-jsonnet"},"Data Mapping with Jsonnet"),Object(a.b)("p",null,"The data provided by Google, GitHub, Facebook, and others will vary in payloads.\nOne service might include the ",Object(a.b)("inlineCode",{parentName:"p"},"website")," or ",Object(a.b)("inlineCode",{parentName:"p"},"phone_number")," while another might\nnot."),Object(a.b)("p",null,"Therefore you need to specify how this data maps to the identity's traits. You\ncan do that by writing a ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/reference/jsonnet"}),"Jsonnet Code Snippet")," and\nreferencing that in your ORY Kratos config file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'}),"# $ kratos -c path/to/my/kratos/config.yml serve\nselfservice:\n  methods:\n    oidc:\n      providers:\n        - id: github\n          # ...\n          mapper_url: file://path/to/my/kratos/github.data-mapper.jsonnet\n          # You can also load this from a HTTP(S) source:\n          mapper_url: https://domain.com/path/to/my/kratos/github.data-mapper.jsonnet\n          # Or inline it using base64 encoding:\n          mapper_url: base64://bG9jYWwgY2xhaW1zID0gc3RkLmV4dFZhcignY2xhaW1zJyk7CmlmIHN0ZC5sZW5ndGgoY2xhaW1zLnN1YikgPT0gMCB0aGVuCiAgZXJyb3IgJ2NsYWltIHN1YiBub3Qgc2V0JwplbHNlCiAgewogICAgaWRlbnRpdHk6IHsKICAgICAgdHJhaXRzOiB7CiAgICAgICAgZW1haWw6IGNsYWltcy5zdWIsCiAgICAgICAgW2lmICJ3ZWJzaXRlIiBpbiBjbGFpbXMgdGhlbiAid2Vic2l0ZSIgZWxzZSBudWxsXTogY2xhaW1zLndlYnNpdGUsCiAgICAgIH0sCiAgICB9LAogIH0=\n")),Object(a.b)("p",null,"ORY Kratos adds an external variable called ",Object(a.b)("inlineCode",{parentName:"p"},"claims"),' to the data mapper. It\ncontains all the claims (e.g. username, email, ...) for the OpenID Connect or\nOAuth2 Provider. Keep in mind that the claims will vary per provider and per\nflow - depending on what permissions the user grants you (e.g. "App XYZ cannot\nsee my private email"). Your Jsonnet code must return a JSON object that looks\nlike:'),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json5"}),"{\n  identity: {\n    traits: {\n      /* ... */\n    }\n  }\n}\n")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"For more information on Jsonnet check out our\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/reference/jsonnet"}),"Jsonnet Documentation"),"."),Object(a.b)("p",{parentName:"div"},"To debug Jsonnet payloads, use the ",Object(a.b)("inlineCode",{parentName:"p"},"--dev")," flag and set ",Object(a.b)("inlineCode",{parentName:"p"},"log.level")," to ",Object(a.b)("inlineCode",{parentName:"p"},"debug"),"\n(e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"LOG_LEVEL=debug kratos serve --dev"),"). Logs with detailed payloads will be\nemitted once you complete an OpenID Connect / OAuth2 login or registration."))),Object(a.b)("p",null,"The Jsonnet code snippet"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsonnet",metastring:'title="path/to/my/kratos/github.data-mapper.jsonnet"',title:'"path/to/my/kratos/github.data-mapper.jsonnet"'}),'# claims contains all the data sent by the upstream.\nlocal claims = std.extVar(\'claims\');\n\n{\n  identity: {\n    traits: {\n      email: claims.email, // If email is not set the Jsonnet snippet will fail with an error.\n      [if "website" in claims then "website" else null]: claims.website, // The website claim is optional.\n    },\n  },\n}\n')),Object(a.b)("p",null,"returns"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "identity": {\n    "traits": {\n      "email": "foo@ory.sh",\n      "website": "https://www.ory.sh"\n    }\n  }\n}\n')),Object(a.b)("p",null,"when the ID Token body (or the OAuth2 equivalent) returned by the OpenID Connect\nprovider contains:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "sub": "some-identity-id-4hA8gk",\n  "email": "foo@ory.sh",\n  "website": "https://www.ory.sh"\n}\n')),Object(a.b)("p",null,"which is then being used for the identity's traits."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"sub"),' field, which is returned by OpenID Connect and OAuth2 servers alike is\nused as the primary credential identifier for the provider. This allows ORY\nKratos to link the identity to the "social sign in profile" for future login\nflows:'),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"# This is the YAML representation of an identity\nid: '9f425a8d-7efc-4768-8f23-7647a74fdf13'\n\ncredentials:\n  oidc:\n    id: oidc\n    identifiers:\n      - example:some-identity-id-4hA8gk\n    config:\n      - provider: example\n        identifier: some-identity-id-4hA8gk\n\nschema_url: http://foo.bar.com/person.schema.json # This comes from the default identity schema url.\n\ntraits:\n  email: foo@ory.sh # This is extracted from `username` using\n  website: https://www.ory.sh # This is extracted from `username` using\n")),Object(a.b)("h3",{id:"external-variable-claims"},"External Variable ",Object(a.b)("inlineCode",{parentName:"h3"},"claims")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"std.ExtVar('claims')")," object has the following structure and keys\navailable:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-go"}),'package oidc\n\ntype Claims struct {\n    Issuer              string `json:"iss,omitempty"`\n    Subject             string `json:"sub,omitempty"`\n    Name                string `json:"name,omitempty"`\n    GivenName           string `json:"given_name,omitempty"`\n    FamilyName          string `json:"family_name,omitempty"`\n    LastName            string `json:"last_name,omitempty"`\n    MiddleName          string `json:"middle_name,omitempty"`\n    Nickname            string `json:"nickname,omitempty"`\n    PreferredUsername   string `json:"preferred_username,omitempty"`\n    Profile             string `json:"profile,omitempty"`\n    Picture             string `json:"picture,omitempty"`\n    Website             string `json:"website,omitempty"`\n    Email               string `json:"email,omitempty"`\n    EmailVerified       bool   `json:"email_verified,omitempty"`\n    Gender              string `json:"gender,omitempty"`\n    Birthdate           string `json:"birthdate,omitempty"`\n    Zoneinfo            string `json:"zoneinfo,omitempty"`\n    Locale              string `json:"locale,omitempty"`\n    PhoneNumber         string `json:"phone_number,omitempty"`\n    PhoneNumberVerified bool   `json:"phone_number_verified,omitempty"`\n    UpdatedAt           int64  `json:"updated_at,omitempty"`\n}\n')),Object(a.b)("h2",{id:"identity-traits-validation-and-data-completion"},"Identity Traits Validation and Data Completion"),Object(a.b)("p",null,"Sometimes the data provided by OpenID Connect or OAuth2 Providers is not enough.\nA common example is asking the user to consent to the terms of service. No\nOpenID Connect or OAuth2 provider will be able to give you this information\nbecause these are your terms. Another example would be a user not agreeing to\nshare his/her email address with you when authorizing your OAuth2 app."),Object(a.b)("p",null,"If such a validation error occurs, the user will be redirected to the\nRegistration UI. The Registration Flow includes all the valid and invalid\nfields:"),Object(a.b)("img",{alt:"Missing website field in OpenID Connect / OAuth2 provider claims",src:Object(r.a)("img/docs/oidc-missing.png")}),Object(a.b)("p",null,"When submitting the form again, the data provided by the user and the data\ncoming from the OpenID Connect / OAuth2 provider will be merged. This process\nrepeats itself"),Object(a.b)("img",{alt:"Invalid website field in OpenID Connect / OAuth2 provider claims",src:Object(r.a)("img/docs/oidc-incomplete.png")}),Object(a.b)("p",null,"until the identity's traits are valid against the defined JSON Schema."),Object(a.b)("p",null,"For more information on this flow (network flow, examples, UI, ...) head over to\nthe\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/self-service/flows/user-registration"}),"OpenID Connect and OAuth2 Self-Service Method Documentation"),"."))}p.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=i,h=p["".concat(r,".").concat(u)]||p[u]||m[u]||a;return n?o.a.createElement(h,s(s({ref:t},l),{},{components:n})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},443:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var i=n(20),o=n(444);function a(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,r=a.forcePrependBaseUrl,s=void 0!==r&&r,c=a.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(s)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+d:d}(a,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},444:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}))}}]);