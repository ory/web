(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{261:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),s=n(8),i=(n(0),n(552)),r={id:"identity-user-model",title:"Identity Data Model"},o={unversionedId:"concepts/identity-user-model",id:"version-v0.4/concepts/identity-user-model",isDocsHomePage:!1,title:"Identity Data Model",description:'An identity ("user", "user account", "account", "subject") is the "who" of a',source:"@site/versioned_docs/version-v0.4/concepts/identity-data-model.md",sourceDirName:"concepts",slug:"/concepts/identity-user-model",permalink:"/kratos/docs/v0.4/concepts/identity-user-model",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/concepts/identity-data-model.md",version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594203957,formattedLastUpdatedAt:"7/8/2020",frontMatter:{id:"identity-user-model",title:"Identity Data Model"},sidebar:"version-v0.4/docs",previous:{title:"User Interface",permalink:"/kratos/docs/v0.4/concepts/ui-user-interface"},next:{title:"Overview",permalink:"/kratos/docs/v0.4/concepts/credentials"}},c=[{value:"Identity Traits and JSON Schemas",id:"identity-traits-and-json-schemas",children:[]},{value:"JSON Schema Vocabulary Extensions",id:"json-schema-vocabulary-extensions",children:[{value:"Identifier for Username and Password Flows",id:"identifier-for-username-and-password-flows",children:[]}]}],l={toc:c};function d(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'An identity ("user", "user account", "account", "subject") is the "who" of a\nsoftware system. It can be a customer, employee, user, contractor, or even a\nprogrammatic identity such as an IoT device, application, or some other type of\n"robot."'),Object(i.b)("p",null,'In ORY Kratos\' terminology we call all of them "identities", and it is always\nexposed as ',Object(i.b)("inlineCode",{parentName:"p"},"identity")," in the API endpoints, requests, and response payloads."),Object(i.b)("p",null,"The following examples use YAML for improved readability. However, the API\npayload is usually in JSON format. An ",Object(i.b)("inlineCode",{parentName:"p"},"identity")," has the following properties:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ curl http://kratos/admin-endpoint/identities/9f425a8d-7efc-4768-8f23-7647a74fdf13"',title:'"$',curl:!0,'http://kratos/admin-endpoint/identities/9f425a8d-7efc-4768-8f23-7647a74fdf13"':!0},"# A UUID that is generated when the identity is created and\n# which cannot be changed or updated at a later stage.\nid: '9f425a8d-7efc-4768-8f23-7647a74fdf13'\n\n# This section represents all the credentials associated with this identity.\n# It is further explained in the \"Credentials\" section.\ncredentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@acme.com\n      - johnd@ory.sh\n    config:\n      hashed_password: ...\n  oidc:\n    id: oidc\n    identifiers:\n      - google:j8kf7a3...\n      - facebook:83475891...\n    config:\n      - provider: google\n        identifier: j8kf7a3\n      - provider: facebook\n        identifier: 83475891\n\n# This is the JSON Schema ID used for validating the identities' traits.\n# `default` is a special keyword to set this to the schema set by\n# `default_schema_url`, but it can be any another schema as well.\n# e.g. customer, employee, employee-v2\nschema_id: default\n\n# Traits represent information about the identity, such as the first or last name. The traits content is completely\n# up to you and will be validated using the JSON Schema at `traits_schema_url`.\ntraits:\n  # These are just examples\n  email: office@ory.sh\n  name:\n    first: Aeneas\n    last: Rekkas\n  favorite_animal: Dog\n  accepted_tos: true\n")),Object(i.b)("h2",{id:"identity-traits-and-json-schemas"},"Identity Traits and JSON Schemas"),Object(i.b)("p",null,"Traits are data associated with an identity. You have to define its schema\naccording to your application's needs. They are also supposed to be modified by\nthe identity itself e.g. as part of the registration or profile update process\nas well as anyone having access to ORY Krato's Admin API."),Object(i.b)("p",null,"ORY Kratos uses\n",Object(i.b)("a",{parentName:"p",href:"https://json-schema.org/learn/getting-started-step-by-step.html"},"JSON Schema"),"\nto validate Identity Traits."),Object(i.b)("p",null,'ORY Kratos defines JSON Schema extension "Vocabulary" that allows you to tell\nORY Kratos that a specific trait adds some specific meaning to the standard JSON\nSchema (more on that later).'),Object(i.b)("p",null,"Each identity can, theoretically, have a different JSON Schema. This is useful\nin the following situations:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"there is more than one type of identity in the system for instance customers,\nsupport or staff;"),Object(i.b)("li",{parentName:"ul"},"the system includes both users and robots sometimes also known as named\nservice accounts;"),Object(i.b)("li",{parentName:"ul"},"the system needs to ingest another company's identity model, and"),Object(i.b)("li",{parentName:"ul"},"the system's identity model changes or grows over time and requires\nversioning.")),Object(i.b)("p",null,"The following example illustrates a usage scenario with three types of\nidentities: Regular customers,\n",Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Grandfather_clause"},"grandfather accounts"),", and\nService Accounts (e.g. Microsoft provides\n",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/service-accounts"},"Service Accounts"),").\nThere would be one JSON Schema per type of identity:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Customers: ",Object(i.b)("inlineCode",{parentName:"li"},"http://mydomain.com/schemas/v2/customer.schema.json")),Object(i.b)("li",{parentName:"ul"},"Grandfather Accounts: ",Object(i.b)("inlineCode",{parentName:"li"},"http://mydomain.com/schemas/v1/customer.schema.json")),Object(i.b)("li",{parentName:"ul"},"Service Accounts: ",Object(i.b)("inlineCode",{parentName:"li"},"http://mydomain.com/schemas/service-account.schema.json"))),Object(i.b)("p",null,"ORY Kratos expects the JSON Schemas in its configuration file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"identity:\n  # This will be the default JSON Schema. If `schema_id` is empty when creating an identity using the\n  # Admin API, or a user signs up using a selfservice flow, this schema will be used.\n  #\n  # This is a required configuration field!\n  default_schema_url: http://foo.bar.com/person.schema.json\n\n  # Optionally define additional schemas here:\n  schemas:\n    # When creating an identity that uses this schema, `traits_schema_id: customer` would be set for that identity.\n    - id: customer\n      url: http://foo.bar.com/customer.schema.json\n")),Object(i.b)("p",null,"ORY Kratos validates the Identity Traits against the corresponding schema on all\nwriting operations (create / update). The employed business logic must be able\nto distinguish these three types of identities. You might use a switch statement\nlike in the following example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'// This is an example program that can deal with all three types of identities\nsession, err := ory.SessionFromRequest(r)\n// some error handling\nswitch (session.Identity.SchemaID) {\n    case "customer":\n        // ...\n    case "employee":\n        // ...\n    case "default":\n        fallthrough\n    default:\n        // ...\n}\n')),Object(i.b)("h2",{id:"json-schema-vocabulary-extensions"},"JSON Schema Vocabulary Extensions"),Object(i.b)("p",null,"Because ORY Kratos does not know that a particular field has a system-relevant\nmeaning you have to specify these in the schema. This includes for example:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The email address for recovering a lost password"),Object(i.b)("li",{parentName:"ul"},"The identifier for logging in with a password e.g. username or email"),Object(i.b)("li",{parentName:"ul"},"The phone number for enabling SMS 2FA"),Object(i.b)("li",{parentName:"ul"},"...")),Object(i.b)("p",null,"ORY Kratos' JSON Schema Vocabulary Extension can be used within a property:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json5"},"{\n  $id: 'http://mydomain.com/schemas/v2/customer.schema.json',\n  $schema: 'http://json-schema.org/draft-07/schema#',\n  title: 'A customer (v2)',\n  type: 'object',\n  properties: {\n    traits: {\n      type: 'object',\n      properties: {\n        email: {\n          title: 'E-Mail',\n          type: 'string',\n          format: 'email',\n\n          // This tells ORY Kratos that the field should be used as the \"username\" for the username+password flow.\n          // It is an extension to the regular JSON Schema vocabulary.\n          'ory.sh/kratos': {\n            credentials: {\n              password: {\n                identifier: true\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n")),Object(i.b)("p",null,"An overview of available configuration options follows in the next sections."),Object(i.b)("h3",{id:"identifier-for-username-and-password-flows"},"Identifier for Username and Password Flows"),Object(i.b)("p",null,"You can configure ORY Kratos to use specific fields as the ",Object(i.b)("em",{parentName:"p"},"identifier")," e.g.\nusername, email, phone number, etc., in the Username and Password Registration\nand Login Flow:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json5"},"{\n  'ory.sh/kratos': {\n    credentials: {\n      password: {\n        identifier: true\n      }\n    }\n  }\n}\n")),Object(i.b)("p",null,"Looking at the traits from above"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"traits:\n  # These are just examples\n  email: office@ory.sh\n  name:\n    first: Aeneas\n    last: Rekkas\n  favorite_animal: Dog\n  accepted_tos: true\n")),Object(i.b)("p",null,"and using a JSON Schema that uses the ",Object(i.b)("inlineCode",{parentName:"p"},"email")," field as the identifier for the\npassword flow"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json5"},"{\n  $id: 'http://mydomain.com/schemas/v2/customer.schema.json',\n  $schema: 'http://json-schema.org/draft-07/schema#',\n  title: 'A customer (v2)',\n  type: 'object',\n  properties: {\n    traits: {\n      type: 'object',\n      properties: {\n        email: {\n          title: 'E-Mail',\n          type: 'string',\n          format: 'email',\n\n          // This tells ORY Kratos that the field should be used as the \"username\" for the Username and Password Flow.\n          'ory.sh/kratos': {\n            credentials: {\n              password: {\n                identifier: true\n              }\n            }\n          }\n        },\n        name: {\n          type: 'object',\n          properties: {\n            first: {\n              type: 'string'\n            },\n            last: {\n              type: 'string'\n            }\n          }\n        },\n        favorite_animal: {\n          type: 'string'\n        },\n        accepted_tos: {\n          type: 'string'\n        }\n      },\n      required: ['email'],\n      additionalProperties: false\n    }\n  }\n}\n")),Object(i.b)("p",null,"In this example, ORY Kratos understands that traits\u2709\ufe0f ",Object(i.b)("inlineCode",{parentName:"p"},"office@ory.sh")," is\nthe identity's identifier. The system expects ",Object(i.b)("inlineCode",{parentName:"p"},"office@ory.sh")," plus a password to\nsign in."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/concepts/credentials#username-and-password"},"Username and Password Credentials"),"\ncontains more information and examples."),Object(i.b)("p",null,"There are currently no other extensions supported for Identity Traits. Further\nfields will be added in future releases!"))}d.isMDXComponent=!0},552:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),s=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),d=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},u=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,h=p["".concat(r,".").concat(u)]||p[u]||m[u]||i;return n?s.a.createElement(h,o(o({ref:t},l),{},{components:n})):s.a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var l=2;l<i;l++)r[l]=n[l];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);