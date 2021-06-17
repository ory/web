(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[4047],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13919:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return o}})},44996:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return r}});var i=n(52263),o=n(13919);function a(){var e=(0,i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,r=a.forcePrependBaseUrl,s=void 0!==r&&r,l=a.absolute,p=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(s)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+c:c}(a,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},67928:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var i=n(22122),o=n(19756),a=(n(67294),n(3905)),r=n(44996),s={id:"openid-connect-oidc-oauth2",title:"Social Sign In, OpenID Connect, and OAuth2"},l={unversionedId:"concepts/credentials/openid-connect-oidc-oauth2",id:"version-v0.3/concepts/credentials/openid-connect-oidc-oauth2",isDocsHomePage:!1,title:"Social Sign In, OpenID Connect, and OAuth2",description:"The oidc method uses OpenID Connect, or OAuth2 where OpenID Connect is not",source:"@site/versioned_docs/version-v0.3/concepts/credentials/openid-connect-oidc-oauth2.mdx",sourceDirName:"concepts/credentials",slug:"/concepts/credentials/openid-connect-oidc-oauth2",permalink:"/kratos/docs/v0.3/concepts/credentials/openid-connect-oidc-oauth2",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.3/concepts/credentials/openid-connect-oidc-oauth2.mdx",version:"v0.3",lastUpdatedBy:"vinckr",lastUpdatedAt:1591004406,formattedLastUpdatedAt:"6/1/2020",frontMatter:{id:"openid-connect-oidc-oauth2",title:"Social Sign In, OpenID Connect, and OAuth2"},sidebar:"version-v0.3/docs",previous:{title:"Username / Email & Password",permalink:"/kratos/docs/v0.3/concepts/credentials/username-email-password"},next:{title:"Self-Service Flow Completion",permalink:"/kratos/docs/v0.3/concepts/selfservice-flow-completion"}},p=[{value:"Configuration",id:"configuration",children:[]},{value:"Data Mapping with Jsonnet",id:"data-mapping-with-jsonnet",children:[{value:"External Variable <code>claims</code>",id:"external-variable-claims",children:[]}]},{value:"Identity Traits Validation and Data Completion",id:"identity-traits-validation-and-data-completion",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"oidc")," method uses OpenID Connect, or OAuth2 where OpenID Connect is not\nsupported, to authenticate identities using a third-party identity provider,\nsuch as Google, Microsoft, GitHub - or any other OAuth2 / OpenID Connect\nprovider (for example ",(0,a.kt)("a",{parentName:"p",href:"https://www.ory.sh/hydra"},"ORY Hydra"),'). "Social Sign In" or "Sign in with ..."\nare common aliases for this flow.'),(0,a.kt)("p",null,"This strategy expects that you've set up your ",(0,a.kt)("a",{parentName:"p",href:"../identity-user-model"},"Identity Traits Default JSON\nSchema"),"."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"You can configure multiple OAuth2 / OpenID Connect providers. First, enable the\n",(0,a.kt)("inlineCode",{parentName:"p"},"oidc")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"# $ kratos -c path/to/my/kratos/config.yml serve\nselfservice:\n  strategies:\n    oidc:\n      enabled: true\n")),(0,a.kt)("p",null,"Next, you need to configure the providers you want to use (e.g. GitHub)."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The most important configuration key is the provider's ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),". Once set, you\nshould never remove or change that ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),". Otherwise, your existing users\nwill no longer be able to sign in."))),(0,a.kt)("p",null,"The provider configuration looks as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},'# $ kratos -c path/to/my/kratos/config.yml serve\nselfservice:\n  strategies:\n    oidc:\n      providers:\n        - # REQUIRED - The ID of the provider.\n          # DO NOT change this once this is in use.\n          id: github\n\n          # REQUIRED - The provider you would like to use. ORY Kratos comes with some predefined providers to make\n          # life easier for you, but you can always opt for the "generic" provider, which works\n          # with any Certified OpenID Connect Provider (Google, ORY Hydra, ...):\n          #\n          #   provider: github\n          #   provider: google\n          #   .... more to come\n          #\n          provider: generic\n\n          # REQUIRED - See section "Data Mapping with Jsonnet" for more information.\n          mapper_url: http://mydomain.com/github.schema.json\n\n          # The OAuth2 / OpenID Connect provider will provide you with a OAuth2 Client ID and Client Secret. You need\n          # to set them here:\n          client_id: ...\n          client_secret: ...\n\n          # What scope to request. Usually, this would be something like "profile" or "email".\n          # Please check the documentation of the OAuth2 / OpenID Connect provider to see what\'s allowed here.\n          scope:\n            - email\n\n          # issuer_url is the OpenID Connect Server URL. You can leave this empty if `provider` is not set to `generic`.\n          # If set, neither `auth_url` nor `token_url` are required.\n          issuer_url: http://openid-connect-provider/\n\n          # auth_url is the authorize url, typically something like: https://example.org/oauth2/auth\n          # Should only be used when the OAuth2 / OpenID Connect server is not supporting OpenID Connect Discovery and when\n          # `provider` is set to `generic`.\n          auth_url: http://openid-connect-provider/oauth2/auth\n\n          # token_url is the token url, typically something like: https://example.org/oauth2/token\n          # Should only be used when the OAuth2 / OpenID Connect server is not supporting OpenID Connect Discovery and when\n          # `provider` is set to `generic`.\n          token_url: http://openid-connect-provider/oauth2/token\n')),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},'It is very important to add the "session" hook to the after oidc registration\nhooks. Otherwise your users need to use the login flow again to be able to get a\nsession.'),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"# $ kratos -c path/to/my/kratos/config.yml serve\nselfservice:\n  registration:\n    after:\n      oidc:\n        hooks:\n          - hook: session\n")))),(0,a.kt)("h2",{id:"data-mapping-with-jsonnet"},"Data Mapping with Jsonnet"),(0,a.kt)("p",null,"The data provided by Google, GitHub, Facebook, and others will vary in payloads.\nOne service might include the ",(0,a.kt)("inlineCode",{parentName:"p"},"website")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"phone_number")," while another might\nnot."),(0,a.kt)("p",null,"Therefore you need to specify how this data maps to the identity's traits. You\ncan do that by writing a ",(0,a.kt)("a",{parentName:"p",href:"/kratos/docs/v0.3/reference/jsonnet"},"Jsonnet Code Snippet")," and\nreferencing that in your ORY Kratos config file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"# $ kratos -c path/to/my/kratos/config.yml serve\nselfservice:\n  strategies:\n    oidc:\n      providers:\n        - id: github\n          # ...\n          mapper_url: file://path/to/my/kratos/github.data-mapper.jsonnet\n          # You can also load this from a HTTP(S) source:\n          mapper_url: https://domain.com/path/to/my/kratos/github.data-mapper.jsonnet\n          # Or inline it using base64 encoding:\n          mapper_url: base64://bG9jYWwgY2xhaW1zID0gc3RkLmV4dFZhcignY2xhaW1zJyk7CmlmIHN0ZC5sZW5ndGgoY2xhaW1zLnN1YikgPT0gMCB0aGVuCiAgZXJyb3IgJ2NsYWltIHN1YiBub3Qgc2V0JwplbHNlCiAgewogICAgaWRlbnRpdHk6IHsKICAgICAgdHJhaXRzOiB7CiAgICAgICAgZW1haWw6IGNsYWltcy5zdWIsCiAgICAgICAgW2lmICJ3ZWJzaXRlIiBpbiBjbGFpbXMgdGhlbiAid2Vic2l0ZSIgZWxzZSBudWxsXTogY2xhaW1zLndlYnNpdGUsCiAgICAgIH0sCiAgICB9LAogIH0=\n")),(0,a.kt)("p",null,"ORY Kratos adds an external variable called ",(0,a.kt)("inlineCode",{parentName:"p"},"claims"),' to the data mapper. It\ncontains all the claims (e.g. username, email, ...) for the OpenID Connect or\nOAuth2 Provider. Keep in mind that the claims will vary per provider and per\nflow - depending on what permissions the user grants you (e.g. "App XYZ cannot\nsee my private email"). Your Jsonnet code must return a JSON object that looks\nlike:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  identity: {\n    traits: {\n      /* ... */\n    },\n  },\n}\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For more information on Jsonnet check out our\n",(0,a.kt)("a",{parentName:"p",href:"/kratos/docs/v0.3/reference/jsonnet"},"Jsonnet Documentation"),"."),(0,a.kt)("p",{parentName:"div"},"To debug Jsonnet payloads, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--dev")," flag and set ",(0,a.kt)("inlineCode",{parentName:"p"},"log.level")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"debug"),"\n(e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL=debug kratos serve --dev"),"). Logs with detailed payloads will be\nemitted once you complete an OpenID Connect / OAuth2 login or registration."))),(0,a.kt)("p",null,"The Jsonnet code snippet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsonnet",metastring:'title="path/to/my/kratos/github.data-mapper.jsonnet"',title:'"path/to/my/kratos/github.data-mapper.jsonnet"'},'# claims contains all the data sent by the upstream.\nlocal claims = std.extVar(\'claims\');\n\n{\n  identity: {\n    traits: {\n      email: claims.email, // If email is not set the Jsonnet snippet will fail with an error.\n      [if "website" in claims then "website" else null]: claims.website, // The website claim is optional.\n    },\n  },\n}\n')),(0,a.kt)("p",null,"returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "identity": {\n    "traits": {\n      "email": "foo@ory.sh",\n      "website": "https://www.ory.sh"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"when the ID Token body (or the OAuth2 equivalent) returned by the OpenID Connect\nprovider contains:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sub": "some-identity-id-4hA8gk",\n  "email": "foo@ory.sh",\n  "website": "https://www.ory.sh"\n}\n')),(0,a.kt)("p",null,"which is then being used for the identity's traits."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"sub"),' field, which is returned by OpenID Connect and OAuth2 servers alike is\nused as the primary credential identifier for the provider. This allows ORY\nKratos to link the identity to the "social sign in profile" for future login\nflows:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# This is the YAML representation of an identity\nid: '9f425a8d-7efc-4768-8f23-7647a74fdf13'\n\ncredentials:\n  oidc:\n    id: oidc\n    identifiers:\n      - example:some-identity-id-4hA8gk\n    config:\n      - provider: example\n        identifier: some-identity-id-4hA8gk\n\ntraits_schema_url: http://foo.bar.com/person.schema.json # This comes from the default identity schema url.\n\ntraits:\n  email: foo@ory.sh # This is extracted from `username` using\n  website: https://www.ory.sh # This is extracted from `username` using\n")),(0,a.kt)("h3",{id:"external-variable-claims"},"External Variable ",(0,a.kt)("inlineCode",{parentName:"h3"},"claims")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"std.ExtVar('claims')")," object has the following structure and keys\navailable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package oidc\n\ntype Claims struct {\n    Issuer              string `json:"iss,omitempty"`\n    Subject             string `json:"sub,omitempty"`\n    Name                string `json:"name,omitempty"`\n    GivenName           string `json:"given_name,omitempty"`\n    FamilyName          string `json:"family_name,omitempty"`\n    LastName            string `json:"last_name,omitempty"`\n    MiddleName          string `json:"middle_name,omitempty"`\n    Nickname            string `json:"nickname,omitempty"`\n    PreferredUsername   string `json:"preferred_username,omitempty"`\n    Profile             string `json:"profile,omitempty"`\n    Picture             string `json:"picture,omitempty"`\n    Website             string `json:"website,omitempty"`\n    Email               string `json:"email,omitempty"`\n    EmailVerified       bool   `json:"email_verified,omitempty"`\n    Gender              string `json:"gender,omitempty"`\n    Birthdate           string `json:"birthdate,omitempty"`\n    Zoneinfo            string `json:"zoneinfo,omitempty"`\n    Locale              string `json:"locale,omitempty"`\n    PhoneNumber         string `json:"phone_number,omitempty"`\n    PhoneNumberVerified bool   `json:"phone_number_verified,omitempty"`\n    UpdatedAt           int64  `json:"updated_at,omitempty"`\n}\n')),(0,a.kt)("h2",{id:"identity-traits-validation-and-data-completion"},"Identity Traits Validation and Data Completion"),(0,a.kt)("p",null,"Sometimes the data provided by OpenID Connect or OAuth2 Providers is not enough.\nA common example is asking the user to consent to the terms of service. No\nOpenID Connect or OAuth2 provider will be able to give you this information\nbecause these are your terms. Another example would be a user not agreeing to\nshare his/her email address with you when authorizing your OAuth2 app."),(0,a.kt)("p",null,"If such a validation error occurs, the user will be redirected to the\nRegistration UI. The Registration Request includes all the valid and invalid\nfields:"),(0,a.kt)("img",{alt:"Missing website field in OpenID Connect / OAuth2 provider claims",src:(0,r.Z)("img/docs/oidc-missing.png")}),(0,a.kt)("p",null,"When submitting the form again, the data provided by the user and the data\ncoming from the OpenID Connect / OAuth2 provider will be merged. This process\nrepeats itself"),(0,a.kt)("img",{alt:"Invalid website field in OpenID Connect / OAuth2 provider claims",src:(0,r.Z)("img/docs/oidc-incomplete.png")}),(0,a.kt)("p",null,"until the identity's traits are valid against the defined JSON Schema."),(0,a.kt)("p",null,"For more information on this flow (network flow, examples, UI, ...) head over to\nthe\n",(0,a.kt)("a",{parentName:"p",href:"/kratos/docs/v0.3/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2"},"OpenID Connect and OAuth2 Self-Service Strategy Documentation"),"."))}d.isMDXComponent=!0}}]);