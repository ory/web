(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[49078],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return h}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),h=a,k=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return t?i.createElement(k,r(r({ref:n},p),{},{components:t})):i.createElement(k,r({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},94577:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var i=t(22122),a=t(19756),o=(t(67294),t(3905)),r=["components"],s={id:"advanced",title:"Advanced OAuth2 and OpenID Connect Flows"},l=void 0,c={unversionedId:"advanced",id:"version-v1.10/advanced",isDocsHomePage:!1,title:"Advanced OAuth2 and OpenID Connect Flows",description:"OAuth 2.0",source:"@site/versioned_docs/version-v1.10/advanced.md",sourceDirName:".",slug:"/advanced",permalink:"/hydra/docs/advanced",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/advanced.md",version:"v1.10",lastUpdatedBy:"aeneasr",lastUpdatedAt:1626263488,formattedLastUpdatedAt:"7/14/2021",frontMatter:{id:"advanced",title:"Advanced OAuth2 and OpenID Connect Flows"},sidebar:"version-v1.10/docs",previous:{title:"Merge multiple system.secrets",permalink:"/hydra/docs/guides/merge-multiple-db-secrets"},next:{title:"Creating OAuth 2.0 Clients",permalink:"/hydra/docs/guides/oauth2-clients"}},p=[{value:"OAuth 2.0",id:"oauth-20",children:[{value:"Audience",id:"audience",children:[]},{value:"JSON Web Tokens",id:"json-web-tokens",children:[]},{value:"OAuth 2.0 Client Authentication with private/public keypairs",id:"oauth-20-client-authentication-with-privatepublic-keypairs",children:[]}]},{value:"OpenID Connect",id:"openid-connect",children:[{value:"Subject Identifier Algorithms",id:"subject-identifier-algorithms",children:[]},{value:"Using login_hint with Different Subject",id:"using-login_hint-with-different-subject",children:[]}]}],u={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"oauth-20"},"OAuth 2.0"),(0,o.kt)("h3",{id:"audience"},"Audience"),(0,o.kt)("p",null,"There are two types of audience concept in the context of OAuth 2.0 and OpenID\nConnect:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'OAuth 2.0: Access and Refresh Tokens are "internal-facing". The ',(0,o.kt)("inlineCode",{parentName:"li"},"aud")," claim\nof an OAuth 2.0 Access and Refresh token defines at which ",(0,o.kt)("em",{parentName:"li"},"endpoints")," the\ntoken can be used."),(0,o.kt)("li",{parentName:"ol"},'OpenID Connect: The ID Token is "external-facing". The ',(0,o.kt)("inlineCode",{parentName:"li"},"aud")," claim of an\nOpenID Connect ID Token defines which ",(0,o.kt)("em",{parentName:"li"},"clients")," should accept it.")),(0,o.kt)("p",null,"While modifying the audience of an ID Token is not desirable, specifying the\naudience of an OAuth 2.0 Access Token is. This is not defined as an IETF\nStandard but is considered good practice in certain environments."),(0,o.kt)("p",null,"For this reason, Hydra allows you to control the aud claim of the access token.\nTo do so, you must specify the intended audiences in the OAuth 2.0 Client's\nmetadata on a per-client basis:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "client_id": "...",\n    "audience": ["https://api.my-cloud.com/user", "https://some-tenant.my-cloud.com/"]\n}\n')),(0,o.kt)("p",null,"The audience is a list of case-sensitive URLs. ",(0,o.kt)("strong",{parentName:"p"},"URLs must not contain\nwhitespaces"),"."),(0,o.kt)("h4",{id:"oauth-20-authorization-code-implicit-hybrid-flows"},"OAuth 2.0 Authorization Code, Implicit, Hybrid Flows"),(0,o.kt)("p",null,"When performing an OAuth 2.0 authorize code, implicit, or hybrid flow, you can\nrequest audiences at the ",(0,o.kt)("inlineCode",{parentName:"p"},"/oauth2/auth")," endpoint\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://my-hydra.com/oauth2/auth?client_id=...&scope=...&audience=https%3A%2F%2Fapi.my-cloud.com%2Fuser+https%3A%2F%2Fsome-tenant.my-cloud.com%2F"),"\nwhich requests audiences ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.my-cloud.com/user")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://some-tenant.my-cloud.com/"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"audience")," query parameter may contain multiple strings separated by a\nurl-encoded space (",(0,o.kt)("inlineCode",{parentName:"p"},"+")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"%20"),"). The audience values themselves must also be\nurl encoded. The values will be validated against the whitelisted audiences\ndefined in the OAuth 2.0 Client:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An OAuth 2.0 Client with the allowed audience ",(0,o.kt)("inlineCode",{parentName:"li"},"https://api.my-cloud/user")," is\nallowed to request audience values ",(0,o.kt)("inlineCode",{parentName:"li"},"https://api.my-cloud/user"),(0,o.kt)("inlineCode",{parentName:"li"},"https://api.my-cloud/user/1234")," but not ",(0,o.kt)("inlineCode",{parentName:"li"},"https://api.my-cloud/not-user")," nor\n",(0,o.kt)("inlineCode",{parentName:"li"},"https://something-else/"),".")),(0,o.kt)("p",null,"The requested audience from the query parameter is then part of the login and\nconsent request payload as field ",(0,o.kt)("inlineCode",{parentName:"p"},"requested_access_token_audience"),". You can then\nalter the audience using ",(0,o.kt)("inlineCode",{parentName:"p"},"grant_audience.access_token")," when accepting the\nconsent request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'hydra.acceptConsentRequest(challenge, {\n  // ORY Hydra checks if requested audiences are allowed by the client, so we can simply echo this.\n  grant_audience: {\n    access_token: response.requested_access_token_audience,\n    // or, for example:\n    // access_token: ["https://api.my-cloud/not-user"]\n  },\n\n  // ... remember: false\n  // ...\n})\n')),(0,o.kt)("p",null,"When introspecting the OAuth 2.0 Access Token, the response payload will include\nthe audience:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "active": true,\n  // ...\n  "audience": ["https://api.my-cloud/user", "https://api.my-cloud/user/1234"]\n}\n')),(0,o.kt)("h4",{id:"oauth-20-client-credentials-grant"},"OAuth 2.0 Client Credentials Grant"),(0,o.kt)("p",null,"When performing the client credentials grant, the audience parameter from the\nPOST body of the ",(0,o.kt)("inlineCode",{parentName:"p"},"/oauth2/token")," is decoded and validated according to the same\nrules of the previous section, except for the login and consent part which does\nnot exist for this flow."),(0,o.kt)("h3",{id:"json-web-tokens"},"JSON Web Tokens"),(0,o.kt)("p",null,"ORY Hydra issues opaque OAuth 2.0 Access Tokens per default for the following\nreasons:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"OAuth 2.0 Access Tokens represent internal state but are public\nknowledge:")," An Access Token often contains internal data (e.g. session data)\nor other sensitive data (e.g. user roles and permissions) and is sometimes\nused as a means of transporting system-relevant information in a stateless\nmanner. Therefore, making these tokens transparent (by using JSON Web Tokens\nas Access Tokens) comes with risk of exposing this information accidentally,\nand with the downside of not storing this information in the OAuth 2.0 Access\nToken at all."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"JSON Web Tokens can not hold secrets:")," Unless encrypted, JSON Web Tokens\ncan be read by everyone, including 3rd Parties. Therefore, they can not keep\nsecrets. This point is similar to (1), but it is important to stress this."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Access Tokens as JSON Web Tokens can not be revoked:"),' Well, you can revoke\nthem, but they will be considered valid until the "expiry" of the token is\nreached. Unless, of course, you have a blacklist or check with Hydra if the\ntoken was revoked, which however defeats the purpose of using JSON Web Tokens\nin the first place.'),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Certain OpenID Connect features will not work")," when using JSON Web Tokens\nas Access Tokens, such as the pairwise subject identifier algorithm."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"There is a better solution: Use\n",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/ory/oathkeeper"},"ORY Oathkeeper"),"!"),' ORY Oathkeeper is a\nproxy you deploy in front of your services. It will "convert" ORY Hydra\'s\nopaque Access Tokens into JSON Web Tokens for your backend services. This\nallows your services to work without additional REST Calls while solving all\nprevious points. ',(0,o.kt)("strong",{parentName:"li"},"We really recommend this option if you want JWTs!"))),(0,o.kt)("p",null,"If you are not convinced that ORY Oathkeeper is the right tool for the job, you\ncan still enable JSON Web Tokens in ORY Hydra by setting:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"strategies:\n  access_token: jwt\n")),(0,o.kt)("p",null,"Be aware that only access tokens are formatted as JSON Web Tokens. Refresh\ntokens are not impacted by this strategy. By performing OAuth 2.0 Token\nIntrospection you can check if the token is still valid. If a token is revoked\nor otherwise blacklisted, the OAuth 2.0 Token Introspection will return\n",(0,o.kt)("inlineCode",{parentName:"p"},'{ "active": false }'),". This is useful when you do not want to rely only on the\ntoken's expiry."),(0,o.kt)("h4",{id:"json-web-token-validation"},"JSON Web Token Validation"),(0,o.kt)("p",null,"You can validate JSON Web Tokens issued by ORY Hydra by pointing your ",(0,o.kt)("inlineCode",{parentName:"p"},"jwt"),"\nlibrary (e.g. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/auth0/node-jwks-rsa"},"node-jwks-rsa"),") to\n",(0,o.kt)("inlineCode",{parentName:"p"},"http://ory-hydra-public-api/.well-known/jwks.json"),". All necessary keys are\navailable there."),(0,o.kt)("h4",{id:"adding-custom-claims-top-level-to-the-access-token"},"Adding custom claims top-level to the Access Token"),(0,o.kt)("p",null,"Assume you want to add custom claims to the access token with the following\ncode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"let session: ConsentRequestSession = {\n  access_token: {\n    foo: 'bar'\n  }\n}\n")),(0,o.kt)("p",null,"Then part of the resulting access token will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ext": {\n    "foo": "bar"\n  }\n}\n')),(0,o.kt)("p",null,'If you instead want "foo" to be added top-level in the access token, you need to\nset the configuration flag ',(0,o.kt)("inlineCode",{parentName:"p"},"oauth2.allowed_top_level_claims")," like described in\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ory.sh/hydra/docs/reference/configuration"},"the reference Configuration"),"."),(0,o.kt)("p",null,"Note: Any user defined allowed top level claim may not override standardized\naccess token claim names."),(0,o.kt)("p",null,'Configuring Hydra to allow "foo" as a top-level claim will result in the\nfollowing access token part (allowed claims get mirrored, for backwards\ncompatibility):'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "foo": "bar",\n  "ext": {\n    "foo": "bar"\n  }\n}\n')),(0,o.kt)("h3",{id:"oauth-20-client-authentication-with-privatepublic-keypairs"},"OAuth 2.0 Client Authentication with private/public keypairs"),(0,o.kt)("p",null,"ORY Hydra supports OAuth 2.0 Client Authentication with RSA and ECDSA\nprivate/public keypairs with currently supported signing algorithms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"RS256 (default), RS384, RS512"),(0,o.kt)("li",{parentName:"ul"},"PS256, PS384, PS512"),(0,o.kt)("li",{parentName:"ul"},"ES256, ES384, ES512")),(0,o.kt)("p",null,"This authentication method replaces the classic HTTP Basic Authorization and\nHTTP POST Authorization schemes. Instead of sending the ",(0,o.kt)("inlineCode",{parentName:"p"},"client_id")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"client_secret"),", you authenticate the client with a signed JSON Web Token."),(0,o.kt)("p",null,"To enable this feature for a specific OAuth 2.0 Client, you must set\n",(0,o.kt)("inlineCode",{parentName:"p"},"token_endpoint_auth_method")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"private_key_jwt")," and register the public key of\nthe RSA/ECDSA signing key either using the ",(0,o.kt)("inlineCode",{parentName:"p"},"jwks_uri")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"jwks")," fields of the\nclient."),(0,o.kt)("p",null,"When authenticating the client at the token endpoint, you generate and sign\n(with the RSA/ECDSA private key) a JSON Web Token with the following claims:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"iss"),": REQUIRED. Issuer. This MUST contain the client_id of the OAuth Client."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sub"),": REQUIRED. Subject. This MUST contain the client_id of the OAuth Client."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"aud"),": REQUIRED. Audience. The aud (audience) Claim. Value that identifies the\nAuthorization Server (ORY Hydra) as an intended audience. The Authorization\nServer MUST verify that it is an intended audience for the token. The Audience\nSHOULD be the URL of the Authorization Server's Token Endpoint."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"jti"),": REQUIRED. JWT ID. A unique identifier for the token, which can be used\nto prevent reuse of the token. These tokens MUST only be used once, unless\nconditions for reuse were negotiated between the parties; any such negotiation\nis beyond the scope of this specification."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"exp"),": REQUIRED. Expiration time on or after which the ID Token MUST NOT be\naccepted for processing."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"iat"),": OPTIONAL. Time at which the JWT was issued.")),(0,o.kt)("p",null,"When making a request to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/oauth2/token")," endpoint, you include\n",(0,o.kt)("inlineCode",{parentName:"p"},"client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"client_assertion=<signed-jwt>")," in the request body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POST /oauth2/token HTTP/1.1\nHost: my-hydra.com\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=authorization_code&\ncode=i1WsRn1uB1&\nclient_id=s6BhdRkqt3&\nclient_assertion_type=\nurn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer&\nclient_assertion=PHNhbWxwOl ... ZT\n")),(0,o.kt)("p",null,"Here's what a client with a ",(0,o.kt)("inlineCode",{parentName:"p"},"jwks")," containing one RSA public key looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "client_id": "rsa-client-jwks",\n  "jwks": {\n    "keys": [\n      {\n        "kty": "RSA",\n        "n": "jL7h5wc-yeMUsHGJHc0xe9SbTdaLKXMHvcIHQck20Ji7SvrHPdTDQTvZtTDS_wJYbeShcCrliHvbJRSZhtEe0mPJpyWg3O_HkKy6_SyHepLK-_BR7HfcXYB6pVJCG3BW-lVMY7gl5sULFA74kNZH50h8hdmyWC9JgOHn0n3YLdaxSWlhctuwNPSwqwzY4qtN7_CZub81SXWpKiwj4UpyB10b8rM8qn35FS1hfsaFCVi0gQpd4vFDgFyqqpmiwq8oMr8RZ2mf0NMKCP3RXnMhy9Yq8O7lgG2t6g1g9noWbzZDUZNc54tv4WGFJ_rJZRz0jE_GR6v5sdqsDTdjFquPlQ",\n        "e": "AQAB",\n        "use": "sig",\n        "kid": "rsa-jwk"\n      }\n    ]\n  },\n  "token_endpoint_auth_method": "private_key_jwt",\n  "token_endpoint_auth_signing_alg": "RS256"\n}\n')),(0,o.kt)("p",null,"And here is how it looks like for a ",(0,o.kt)("inlineCode",{parentName:"p"},"jwks")," including an ECDSA public key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "client_id": "ecdsa-client-jwks",\n  "jwks": {\n    "keys": [\n      {\n        "kty": "EC",\n        "use": "sig",\n        "crv": "P-256",\n        "kid": "ecdsa-jwk",\n        "x": "nQjdhpecjZRlworpYk_TJAQBe4QbS8IwHY1DWkfR0w0",\n        "y": "UQfLzHxhc4i3EETUeaAS1vDVFJ-Y01hIESiXqqS86Vc"\n      }\n    ]\n  },\n  "token_endpoint_auth_method": "private_key_jwt",\n  "token_endpoint_auth_signing_alg": "ES256"\n}\n')),(0,o.kt)("p",null,"And with ",(0,o.kt)("inlineCode",{parentName:"p"},"jwks_uri"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "client_id": "client-jwks-uri",\n  "jwks_uri": "http://path-to-my-public/keys.json",\n  "token_endpoint_auth_method": "private_key_jwt",\n  "token_endpoint_auth_signing_alg": "RS256"\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"jwks_uri")," must return a JSON object containing the public keys associated\nwith the OAuth 2.0 Client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "keys": [\n    {\n      "kty": "RSA",\n      "n": "jL7h5wc-yeMUsHGJHc0xe9SbTdaLKXMHvcIHQck20Ji7SvrHPdTDQTvZtTDS_wJYbeShcCrliHvbJRSZhtEe0mPJpyWg3O_HkKy6_SyHepLK-_BR7HfcXYB6pVJCG3BW-lVMY7gl5sULFA74kNZH50h8hdmyWC9JgOHn0n3YLdaxSWlhctuwNPSwqwzY4qtN7_CZub81SXWpKiwj4UpyB10b8rM8qn35FS1hfsaFCVi0gQpd4vFDgFyqqpmiwq8oMr8RZ2mf0NMKCP3RXnMhy9Yq8O7lgG2t6g1g9noWbzZDUZNc54tv4WGFJ_rJZRz0jE_GR6v5sdqsDTdjFquPlQ",\n      "e": "AQAB",\n      "use": "sig",\n      "kid": "rsa-jwk"\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"openid-connect"},"OpenID Connect"),(0,o.kt)("h3",{id:"subject-identifier-algorithms"},"Subject Identifier Algorithms"),(0,o.kt)("p",null,"Hydra supports two\n",(0,o.kt)("a",{parentName:"p",href:"http://openid.net/specs/openid-connect-core-1_0.html#SubjectIDTypes"},"Subject Identifier Algorithms"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"public"),": This provides the same ",(0,o.kt)("inlineCode",{parentName:"li"},"sub")," (subject) value to all Clients\n(default)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pairwise"),": This provides a different ",(0,o.kt)("inlineCode",{parentName:"li"},"sub")," value to each Client, so as not to\nenable Clients to correlate the End-User's activities without permission.")),(0,o.kt)("p",null,"You can enable either one or both algorithms using the following configuration\nlayout:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"oidc:\n  subject_identifiers:\n    supported_types:\n      - public\n      - pairwise\n")),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"pairwise")," is enabled, you must also set\n",(0,o.kt)("inlineCode",{parentName:"p"},"oidc.subject_identifiers.pairwise.salt"),". The salt is used to obfuscate the\n",(0,o.kt)("inlineCode",{parentName:"p"},"sub")," value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"oidc:\n  subject_identifiers:\n    supported_types:\n      - public\n      - pairwise\n    pairwise:\n      salt: some-salt\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This value should not be changed once set in production. Changing it will\ncause all client applications to receive new user IDs from ORY Hydra which will\nlead to serious complications with authentication on their side!")),(0,o.kt)("p",null,"Each OAuth 2.0 Client has a configuration field ",(0,o.kt)("inlineCode",{parentName:"p"},"subject_type"),". The value of\nthat ",(0,o.kt)("inlineCode",{parentName:"p"},"subject_type")," is either ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"pairwise"),". If the identifier\nalgorithm is enabled, ORY Hydra will choose the right strategy automatically."),(0,o.kt)("p",null,"While ORY Hydra handles ",(0,o.kt)("inlineCode",{parentName:"p"},"sub")," obfuscation out of the box, you may also override\nthis value with your own obfuscated ",(0,o.kt)("inlineCode",{parentName:"p"},"sub")," value by setting\n",(0,o.kt)("inlineCode",{parentName:"p"},"force_subject_identifier")," when accepting the login challenge in your user login\napp."),(0,o.kt)("h3",{id:"using-login_hint-with-different-subject"},"Using login_hint with Different Subject"),(0,o.kt)("p",null,"When a user already logged in with a subject(e.g. user-A), and she would like to\nlogin as another user using login_hint(e.g. login_hint=user-B), directly\naccepting the latter login request in your login provider will make hydra reply:\n",(0,o.kt)("inlineCode",{parentName:"p"},"Subject from payload does not match subject from previous authentication")),(0,o.kt)("p",null,"The suggested flow is:"),(0,o.kt)("p",null,"Check the response from\n",(0,o.kt)("a",{parentName:"p",href:"/hydra/docs/reference/api#get-a-login-request"},"GET login request"),", if both the\n",(0,o.kt)("inlineCode",{parentName:"p"},"subject")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"login_hint")," are NOT empty and also NOT the same user, redirect\nUserAgent to ",(0,o.kt)("inlineCode",{parentName:"p"},"request_url")," which is appended with '?prompt=login'. This will\nmake hydra ignore the existing authentication, and allow your login provider to\nlogin a different subject."),(0,o.kt)("p",null,"For more information on ",(0,o.kt)("inlineCode",{parentName:"p"},"prompt=login")," and other options, please check\n",(0,o.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest"},"Authentication Request"),"."))}d.isMDXComponent=!0}}]);