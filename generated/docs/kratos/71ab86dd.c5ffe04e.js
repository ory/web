(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{219:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),s=(t(0),t(447)),o={id:"username-email-password",title:"Username / Email & Password"},i={unversionedId:"concepts/credentials/username-email-password",id:"concepts/credentials/username-email-password",isDocsHomePage:!1,title:"Username / Email & Password",description:"The password method is the most commonly used form of authentication, it",source:"@site/docs/concepts/credentials/username-email-password.mdx",slug:"/concepts/credentials/username-email-password",permalink:"/kratos/docs/next/concepts/credentials/username-email-password",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/concepts/credentials/username-email-password.mdx",version:"current",lastUpdatedBy:"Patrik",lastUpdatedAt:1612615330,sidebar:"docs",previous:{title:"Overview",permalink:"/kratos/docs/next/concepts/credentials"},next:{title:"Social Sign In, OpenID Connect, and OAuth2",permalink:"/kratos/docs/next/concepts/credentials/openid-connect-oidc-oauth2"}},c=[{value:"Configuration",id:"configuration",children:[]},{value:"Choosing between Username, Email, Phone Number",id:"choosing-between-username-email-phone-number",children:[{value:"Picking the right Identity JSON Schema",id:"picking-the-right-identity-json-schema",children:[]},{value:"Use Case: Phone Number And Password",id:"use-case-phone-number-and-password",children:[]}]},{value:"Example",id:"example",children:[]}],l={rightToc:c};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"password")," method is the most commonly used form of authentication, it\nrequires an ",Object(s.b)("inlineCode",{parentName:"p"},"identifier")," (username, email, phone number, ...) and a ",Object(s.b)("inlineCode",{parentName:"p"},"password"),"\nduring registration and login."),Object(s.b)("p",null,"ORY Kratos hashes the password after registration, password reset, and password\nchange using the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/concepts/security#Argon2"}),"Argon2 Hashing Algorithm"),", the winner\nof the\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/P-H-C/phc-winner-argon2"}),"Password Hashing Competition (PHC)"),"."),Object(s.b)("h2",{id:"configuration"},"Configuration"),Object(s.b)("p",null,"Enabling this method is as easy as setting"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'}),"# $ kratos -c path/to/my/kratos/config.yml serve\nselfservice:\n  methods:\n    password:\n      enabled: true\n")),Object(s.b)("p",null,"in your ORY Kratos configuration. You can configure the Argon2 hasher using the\nfollowing options:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'}),"# $ kratos -c path/to/my/kratos/config.yml serve\nhashers:\n  argon2:\n    parallelism: 1\n    memory: 131072 # 128MB\n    iterations: 3\n    salt_length: 16\n    key_length: 32\n")),Object(s.b)("p",null,"To determine the ideal parameters, head over to the\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"../../guides/setting-up-password-hashing-parameters"}),"setup guide"),"."),Object(s.b)("p",null,"When a user signs up using this method, the Default Identity JSON Schema (set\nusing ",Object(s.b)("inlineCode",{parentName:"p"},"identity.default_schema_url"),") is used:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'}),"identity:\n  default_schema_url: file:///path/to/default-identity.schema.json\n  # also works with HTTP(S):\n  #\n  # default_schema_url: https://mydomain.com/path/to/default-identity.schema.json\n")),Object(s.b)("p",null,"If you don't know what that means, please read the\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/concepts/identity-data-model"}),"Identity Data Model Chapter")," in the\ndocs' concepts section."),Object(s.b)("p",null,"For a complete reference, defaults, and description please check the\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/reference/configuration"}),"Configuration Reference"),"."),Object(s.b)("p",null,"For a better understanding of security implications imposed by Argon2\nConfiguration, head over to ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/concepts/security#argon2"}),"Argon2 Security"),"."),Object(s.b)("h2",{id:"choosing-between-username-email-phone-number"},"Choosing between Username, Email, Phone Number"),Object(s.b)("p",null,"Before you start, you need to decide what data you want to collect from your\nusers and why! It is hard to change this decision afterwards, so make sure\nyou've taken everything into account!"),Object(s.b)("p",null,"When logging in, the user will use a login identifier and a password to sign up\nand in. The identifier can be"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},'a username - e.g. "john.doe" or "johndoe123" or "oryuser",'),Object(s.b)("li",{parentName:"ul"},"an email address - e.g. ",Object(s.b)("inlineCode",{parentName:"li"},"john.doe@gmail.com"),","),Object(s.b)("li",{parentName:"ul"},"a phone number - e.g. ",Object(s.b)("inlineCode",{parentName:"li"},"+49-1234-4321-1234-4321"),".")),Object(s.b)("p",null,"All of these approaches have up- and downsides."),Object(s.b)("p",null,'Using the email address as the login identifier is easy to remember, does not\nrequire additional fields (because the email address is already being\ncollected), and is usually unique. It\'s usually unique because sometimes\ncompanies use a "shared" email account (e.g. ',Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:office@acme.org"}),"office@acme.org"),") to access\nservices. In that case, multiple real identities are using the same email\nidentifier to log in."),Object(s.b)("p",null,"The email address however represents a unique identifier and personally\nidentifiable information (PII). An attacker could for example check if an email\naddress (e.g. ",Object(s.b)("inlineCode",{parentName:"p"},"john.doe@gmail.com"),") is registered at a site (e.g. an adult\nwebsite) and use that information for blackmail (see\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/concepts/security#account-enumeration-attacks"}),"Account Enumeration Attacks"),")."),Object(s.b)("p",null,"The same considerations apply to using a phone number as the primary\nregistration & login identifier."),Object(s.b)("p",null,'Using a free text username reduces the privacy risk because it is much harder to\nmake a connection between the username and a real world identity. It\'s still\npossible in cases where users choose a username such as\n"john.doe.from.newyork.1970", but finding the right username identifier is still\ndifficult and there is plausible deniability because anyone could use that\nusername.'),Object(s.b)("p",null,"A free text username however requires capturing additional fields (e.g. an email\naddress for password resets / account recovery) and is hard to remember. It is\noften very difficult to find unique usernames as people tend to use a\ncombination of their names and initials (e.g. ",Object(s.b)("inlineCode",{parentName:"p"},"john.doe"),") which has a high\nchance of collision. Therefore, one ends up with usernames such as\n",Object(s.b)("inlineCode",{parentName:"p"},"john.doe1234432"),"."),Object(s.b)("p",null,"It is important to understand that ORY Kratos lowercases all ",Object(s.b)("inlineCode",{parentName:"p"},"password"),"\nidentifiers and therefore E-Mail addresses. Characters ",Object(s.b)("inlineCode",{parentName:"p"},"+")," or ",Object(s.b)("inlineCode",{parentName:"p"},".")," which have\nspecial meaning for some E-Mail Providers (e.g. GMail) are not normalized:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"userNAME")," is equal to ",Object(s.b)("inlineCode",{parentName:"li"},"username")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"foo@BaR.com")," is equal to ",Object(s.b)("inlineCode",{parentName:"li"},"foo@bar.com")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"foo+baz@bar.com")," is NOT equal to ",Object(s.b)("inlineCode",{parentName:"li"},"foo@bar.com")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"foo.baz@bar.com")," is NOT equal to ",Object(s.b)("inlineCode",{parentName:"li"},"foobaz@bar.com"))),Object(s.b)("p",null,"You need to decide which route you want to take."),Object(s.b)("h3",{id:"picking-the-right-identity-json-schema"},"Picking the right Identity JSON Schema"),Object(s.b)("p",null,"When processing an identity and its traits, the method will use\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/reference/json-schema-json-paths"}),"JSON Schema")," to extract one or more\nidentifiers."),Object(s.b)("h4",{id:"use-case-email-and-password"},"Use Case: Email and Password"),Object(s.b)("p",null,"To use the email address as the login identifier, define the following Identity\nJSON Schema:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$id": "https://example.com/registration.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "email": {\n          "type": "string",\n          "format": "email",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(s.b)("h4",{id:"use-case-multiple-e-mails-and-password"},"Use Case: Multiple E-Mails and Password"),Object(s.b)("p",null,"You can allow users to sign up with multiple E-Mail Addresses and use any of\nthose for log in:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$id": "https://example.com/registration.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "emails": {\n          "type": "array",\n          "items": {\n            "type": "string",\n            "format": "email",\n            "ory.sh/kratos": {\n              "credentials": {\n                "password": {\n                  "identifier": true\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(s.b)("h4",{id:"use-case-username-and-password"},"Use Case: Username and Password"),Object(s.b)("p",null,"To use a username as the login identifier, define the following Identity JSON\nSchema:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$id": "https://example.com/registration.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "username": {\n          "type": "string",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(s.b)("h4",{id:"use-case-username-and-email-and-password"},"Use Case: Username and Email and Password"),Object(s.b)("p",null,"You may also mix usernames and passwords:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$id": "https://example.com/registration.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "email": {\n          "type": "string",\n          "format": "email",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        },\n        "username": {\n          "type": "string",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(s.b)("h3",{id:"use-case-phone-number-and-password"},"Use Case: Phone Number And Password"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"This will be addressed in a future release and is tracked as\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/kratos/issues/137"}),"kratos#137"),".")),Object(s.b)("h2",{id:"example"},"Example"),Object(s.b)("p",null,"Assuming your Identity JSON Schema is as follows:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$id": "https://example.com/example.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "first_name": {\n          "type": "string"\n        },\n        "email": {\n          "type": "string",\n          "format": "email",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        },\n        "username": {\n          "type": "string",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')),Object(s.b)("p",null,"And an identity registers with the following JSON payload (more on registration\nin ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/self-service/flows/user-registration"}),"Selfservice Registration"),"):"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "traits": {\n    "first_name": "John Doe",\n    "email": "john.doe@example.org",\n    "username": "johndoe123"\n  },\n  "password": "my-secret-password"\n}\n')),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"password")," method would generate a credentials block as follows:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"credentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@example.org\n      - johndoe123\n    config:\n      hashed_password: ... # this would be `argon2(my-secret-password)`\n")),Object(s.b)("p",null,"Because credential identifiers need to be unique, no other identity can be\ncreated that has ",Object(s.b)("inlineCode",{parentName:"p"},"johndoe123")," or ",Object(s.b)("inlineCode",{parentName:"p"},"john.doe@example.org")," as their ",Object(s.b)("inlineCode",{parentName:"p"},"email")," or\n",Object(s.b)("inlineCode",{parentName:"p"},"username"),"."))}d.isMDXComponent=!0},447:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),d=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(t),u=a,b=p["".concat(o,".").concat(u)]||p[u]||m[u]||s;return t?r.a.createElement(b,i(i({ref:n},l),{},{components:t})):r.a.createElement(b,i({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);