(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[9888],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(n),p=s,h=m["".concat(l,".").concat(p)]||m[p]||u[p]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function p(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9358:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return l},default:function(){return d}});var a=n(22122),s=n(19756),r=(n(67294),n(3905)),i={id:"identity-user-model",title:"Identity Data Model"},o={unversionedId:"concepts/identity-user-model",id:"version-v0.3/concepts/identity-user-model",isDocsHomePage:!1,title:"Identity Data Model",description:'An identity ("user", "user account", "account", "subject") is the "who" of a',source:"@site/versioned_docs/version-v0.3/concepts/identity-data-model.md",sourceDirName:"concepts",slug:"/concepts/identity-user-model",permalink:"/kratos/docs/v0.3/concepts/identity-user-model",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.3/concepts/identity-data-model.md",version:"v0.3",lastUpdatedBy:"aeneasr",lastUpdatedAt:1589548840,formattedLastUpdatedAt:"5/15/2020",frontMatter:{id:"identity-user-model",title:"Identity Data Model"},sidebar:"version-v0.3/docs",previous:{title:"User Interface",permalink:"/kratos/docs/v0.3/concepts/ui-user-interface"},next:{title:"Overview",permalink:"/kratos/docs/v0.3/concepts/credentials"}},l=[{value:"Identity Traits and JSON Schemas",id:"identity-traits-and-json-schemas",children:[]},{value:"JSON Schema Vocabulary Extensions",id:"json-schema-vocabulary-extensions",children:[{value:"Identifier for Username and Password Flows",id:"identifier-for-username-and-password-flows",children:[]}]}],c={toc:l};function d(e){var t=e.components,n=(0,s.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'An identity ("user", "user account", "account", "subject") is the "who" of a\nsoftware system. It can be a customer, an employee, a user, a contractor, and\neven a programmatic identity such as an IoT device, an application, or some\nother type of "robot."'),(0,r.kt)("p",null,'In ORY Kratos\' terminology we call all of them "Identity", and it is always\nexposed as ',(0,r.kt)("inlineCode",{parentName:"p"},"identity")," in the API Endpoints, request and response payloads."),(0,r.kt)("p",null,"The following examples uses YAML for improved readability. However, the API\npayload is usually in JSON format. An ",(0,r.kt)("inlineCode",{parentName:"p"},"identity")," has the following properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ curl kratos-host-url/admin-endpoint/identities/9f425a8d-7efc-4768-8f23-7647a74fdf13"',title:'"$',curl:!0,'kratos-host-url/admin-endpoint/identities/9f425a8d-7efc-4768-8f23-7647a74fdf13"':!0},"# A universally unique ID that is generated when the identity is created and that cannot be changed or updated\n# at a later stage.\nid: '9f425a8d-7efc-4768-8f23-7647a74fdf13'\n\n# This section represents all the credentials associated with this identity. It is further explained in section \"Credentials\".\ncredentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@acme.com\n      - johnd@ory.sh\n    config:\n      hashed_password: ...\n  oidc:\n    id: oidc\n    identifiers:\n      - google:j8kf7a3...\n      - facebook:83475891...\n    config:\n      - provider: google\n        identifier: j8kf7a3\n      - provider: facebook\n        identifier: 83475891\n\n# This is the JSON Schema ID used for validating the identities's traits.\ntraits_schema_id: default\n# Could also be another schema:\n# traits_schema_id: customer\n\n# Traits represent information about the identity, such as the first or last name. The traits content is completely\n# up to you and will be validated using the JSON Schema at `traits_schema_url`.\ntraits:\n  # These are just examples\n  email: office@ory.sh\n  name:\n    first: Aeneas\n    last: Rekkas\n  favorite_animal: Dog\n  accepted_tos: true\n")),(0,r.kt)("h2",{id:"identity-traits-and-json-schemas"},"Identity Traits and JSON Schemas"),(0,r.kt)("p",null,"Traits are data associated with an identity. You have to define its schema\naccording to your application's needs. They are also supposed to be modified by\nthe identity itself e.g. as part of the registration or profile update process\nas well as anyone having access to ORY Krato's Admin API."),(0,r.kt)("p",null,"To validate traits Ory Kratos uses\n",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/learn/getting-started-step-by-step.html"},"JSON Schema"),'\nadding a small extension "Vocabulary" that allows you to tell ORY Kratos that a\nspecific trait adds some specific meaning to the standard JSON Schema (more on\nthat later).'),(0,r.kt)("p",null,"Each identity can, theoretically, have a different Traits Schema. This is useful\nin the following situations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"there is more than one type of identity in the system for instance customers,\nsupport or staff;"),(0,r.kt)("li",{parentName:"ul"},"the system includes both users and robots sometimes also known as named\nservice accounts;"),(0,r.kt)("li",{parentName:"ul"},"the system needs to ingest another company's identity model, and"),(0,r.kt)("li",{parentName:"ul"},"the system's identity model changes or grows over time and requires\nversioning.")),(0,r.kt)("p",null,"The following example illustrates a usage scenario with three types of\nidentities: Regular customers,\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Grandfather_clause"},"grandfather accounts"),", and\nService Accounts (e.g. Microsoft provides\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/service-accounts"},"Service Accounts"),").\nThere would be one JSON Schema per type of identity:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Customers: ",(0,r.kt)("inlineCode",{parentName:"li"},"http://mydomain.com/schemas/v2/customer.schema.json")),(0,r.kt)("li",{parentName:"ul"},"Grandfather Accounts: ",(0,r.kt)("inlineCode",{parentName:"li"},"http://mydomain.com/schemas/v1/customer.schema.json")),(0,r.kt)("li",{parentName:"ul"},"Service Accounts: ",(0,r.kt)("inlineCode",{parentName:"li"},"http://mydomain.com/schemas/service-account.schema.json"))),(0,r.kt)("p",null,"ORY Kratos expects the JSON Schemas in its configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"identity:\n  traits:\n    # This will be the default JSON Schema. If  `traits_schema_id` is empty when creating an identity using the\n    # Admin API, or a user signs up using a selfservice flow, this schema will be used.\n    #\n    # This is a required configuration field!\n    default_schema_url: http://foo.bar.com/person.schema.json\n\n    # Optionally define additional schemas here:\n    schemas:\n      # When creating an identity that uses this schema, `traits_schema_id: customer` would be set for that identity.\n      - id: customer\n        url: http://foo.bar.com/customer.schema.json\n")),(0,r.kt)("p",null,"ORY Kratos validates the traits against the corresponding schema on all writing\noperations like create or update. The employed business logic must be able to\ndistinguish these three types of identities. You might use a switch statement\nlike in the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// This is an example program that can deal with all three types of identities\nsession, err := ory.SessionFromRequest(r)\n// some error handling\nswitch (session.Identity.TraitsSchemaID) {\n    case "customer":\n        // ...\n    case "employee":\n        // ...\n    case "default":\n        fallthrough\n    default:\n        // ...\n}\n')),(0,r.kt)("h2",{id:"json-schema-vocabulary-extensions"},"JSON Schema Vocabulary Extensions"),(0,r.kt)("p",null,"Because ORY Kratos does not know that a particular field has a system-relevant\nmeaning you have to specify these in the schema. This includes for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The email address for recovering a lost password"),(0,r.kt)("li",{parentName:"ul"},"The identifier for logging in with a password e.g. username or email"),(0,r.kt)("li",{parentName:"ul"},"The phone number for enabling SMS 2FA"),(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("p",null,"ORY Kratos' JSON Schema Vocabulary Extension can be used within a property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  $id: 'http://mydomain.com/schemas/v2/customer.schema.json',\n  $schema: 'http://json-schema.org/draft-07/schema#',\n  title: 'A customer (v2)',\n  type: 'object',\n  properties: {\n    email: {\n      title: 'E-Mail',\n      type: 'string',\n      format: 'email',\n\n      // This tells ORY Kratos that the field should be used as the \"username\" for the username+password flow.\n      // It is an extension to the regular JSON Schema vocabulary.\n      'ory.sh/kratos': {\n        credentials: {\n          password: {\n            identifier: true,\n          },\n        },\n      },\n    },\n  },\n}\n")),(0,r.kt)("p",null,"An overview of available configuration options follows in the next sections."),(0,r.kt)("h3",{id:"identifier-for-username-and-password-flows"},"Identifier for Username and Password Flows"),(0,r.kt)("p",null,"You can configure ORY Kratos to use specific fields as the ",(0,r.kt)("em",{parentName:"p"},"identifier")," e.g.\nusername, email, phone number, etc., in the Username and Password Registration\nand Login Flow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  'ory.sh/kratos': {\n    credentials: {\n      password: {\n        identifier: true,\n      },\n    },\n  },\n}\n")),(0,r.kt)("p",null,"Looking at the traits from above"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"traits:\n  # These are just examples\n  email: office@ory.sh\n  name:\n    first: Aeneas\n    last: Rekkas\n  favorite_animal: Dog\n  accepted_tos: true\n")),(0,r.kt)("p",null,"and using a JSON Schema that uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," field as the identifier for the\npassword flow"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  $id: 'http://mydomain.com/schemas/v2/customer.schema.json',\n  $schema: 'http://json-schema.org/draft-07/schema#',\n  title: 'A customer (v2)',\n  type: 'object',\n  properties: {\n    email: {\n      title: 'E-Mail',\n      type: 'string',\n      format: 'email',\n\n      // This tells ORY Kratos that the field should be used as the \"username\" for the Username and Password Flow.\n      'ory.sh/kratos': {\n        credentials: {\n          password: {\n            identifier: true,\n          },\n        },\n      },\n    },\n    name: {\n      type: 'object',\n      properties: {\n        first: {\n          type: 'string',\n        },\n        last: {\n          type: 'string',\n        },\n      },\n    },\n    favorite_animal: {\n      type: 'string',\n    },\n    accepted_tos: {\n      type: 'string',\n    },\n  },\n  required: ['email'],\n  additionalProperties: false,\n}\n")),(0,r.kt)("p",null,"In this example, ORY Kratos understands that traits\u2709\ufe0f ",(0,r.kt)("inlineCode",{parentName:"p"},"office@ory.sh")," is\nthe identity's identifier. The system expects ",(0,r.kt)("inlineCode",{parentName:"p"},"office@ory.sh")," plus a password to\nsign in."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/v0.3/concepts/credentials#username-and-password"},"Username and Password Credentials"),"\ncontains more information and examples."),(0,r.kt)("p",null,"There are currently no other extensions supported for Identity Traits. Further\nfields will be added in future releases!"))}d.isMDXComponent=!0}}]);