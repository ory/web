(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(2),i=n(6),s=(n(0),n(422)),o=n(424),r={id:"identity-data-model",title:"Identity Data Model"},c={unversionedId:"concepts/identity-data-model",id:"concepts/identity-data-model",isDocsHomePage:!1,title:"Identity Data Model",description:'An identity ("user", "user account", "account", "subject") is the "who" of a',source:"@site/docs/concepts/identity-data-model.md",slug:"/concepts/identity-data-model",permalink:"/kratos/docs/next/concepts/identity-data-model",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/concepts/identity-data-model.md",version:"current",lastUpdatedBy:"NickUfer",lastUpdatedAt:1604799647,sidebar:"docs",previous:{title:"User Interface",permalink:"/kratos/docs/next/concepts/ui-user-interface"},next:{title:"Overview",permalink:"/kratos/docs/next/concepts/credentials"}},l=[{value:"Identity State",id:"identity-state",children:[]},{value:"Identity Traits and JSON Schemas",id:"identity-traits-and-json-schemas",children:[]},{value:"JSON Schema Vocabulary Extensions",id:"json-schema-vocabulary-extensions",children:[{value:"Identifier for Username and Password Flows",id:"identifier-for-username-and-password-flows",children:[]}]}],d={rightToc:l};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,'An identity ("user", "user account", "account", "subject") is the "who" of a\nsoftware system. It can be a customer, employee, user, contractor, or even a\nprogrammatic identity such as an IoT device, application, or some other type of\n"robot."'),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},'In ORY Kratos\' terminology we call all of them "identities", and it is always\nexposed as ',Object(s.b)("inlineCode",{parentName:"p"},"identity"),' in the API endpoints, requests, and response payloads. In\nthe documentation however, we mix these words as "account recovery" or "account\nactivation" is a widely accepted and understood terminology and user flow, while\n"identity recovery" or "identity activation" is not.'))),Object(s.b)("p",null,"The following examples use YAML for improved readability. However, the API\npayload is usually in JSON format. An ",Object(s.b)("inlineCode",{parentName:"p"},"identity")," has the following properties:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="$ curl http://kratos/admin-endpoint/identities/9f425a8d-7efc-4768-8f23-7647a74fdf13"',title:'"$',curl:!0,'http://kratos/admin-endpoint/identities/9f425a8d-7efc-4768-8f23-7647a74fdf13"':!0}),"# A UUID that is generated when the identity is created and\n# which cannot be changed or updated at a later stage.\nid: '9f425a8d-7efc-4768-8f23-7647a74fdf13'\n\n# This section represents all the credentials associated with this identity.\n# It is further explained in the \"Credentials\" section.\ncredentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@acme.com\n      - johnd@ory.sh\n    config:\n      hashed_password: ...\n  oidc:\n    id: oidc\n    identifiers:\n      - google:j8kf7a3...\n      - facebook:83475891...\n    config:\n      - provider: google\n        identifier: j8kf7a3\n      - provider: facebook\n        identifier: 83475891\n\n# This is the JSON Schema ID used for validating the identities' traits.\n# `default` is a special keyword to set this to the schema set by\n# `default_schema_url`, but it can be any another schema as well.\n# e.g. customer, employee, employee-v2\nschema_id: default\n\n# Traits represent information about the identity, such as the first or last name. The traits content is completely\n# up to you and will be validated using the JSON Schema at `traits_schema_url`.\ntraits:\n  # These are just examples\n  email: office@ory.sh\n  name:\n    first: Aeneas\n    last: Rekkas\n  favorite_animal: Dog\n  accepted_tos: true\n")),Object(s.b)("h2",{id:"identity-state"},"Identity State"),Object(s.b)("p",null,"Identities are"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"created")," - via API or self-service registration);"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"updated")," - via API or self-service settings, account recovery, ...;"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"disabled")," - not yet implemented, see\n",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ory/kratos/issues/598"}),"#598"),";"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"deleted")," - via API or with a self-service flow (not yet implemented see\n",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ory/kratos/issues/596"}),"#596"),").")),Object(s.b)("p",null,"The identity state is therefore ",Object(s.b)("inlineCode",{parentName:"p"},"active")," or ",Object(s.b)("inlineCode",{parentName:"p"},"disabled")," (not yet implemented see\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/kratos/issues/598"}),"#598"),")"),Object(s.b)(o.a,{chart:"stateDiagram-v2 [*] --\x3e Active: create Active --\x3e Active: update Active --\x3e Disabled: disable Disabled --\x3e [*]: delete Disabled --\x3e Active: enable",mdxType:"Mermaid"}),Object(s.b)("h2",{id:"identity-traits-and-json-schemas"},"Identity Traits and JSON Schemas"),Object(s.b)("p",null,"Traits are data associated with an identity. You have to define its schema\naccording to your application's needs. They are also supposed to be modified by\nthe identity itself e.g. as part of the registration or profile update process\nas well as anyone having access to ORY Krato's Admin API."),Object(s.b)("p",null,"ORY Kratos uses\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://json-schema.org/learn/getting-started-step-by-step.html"}),"JSON Schema"),"\nto validate Identity Traits."),Object(s.b)("p",null,'ORY Kratos defines JSON Schema extension "Vocabulary" that allows you to tell\nORY Kratos that a specific trait adds some specific meaning to the standard JSON\nSchema (more on that later).'),Object(s.b)("p",null,"Each identity can, theoretically, have a different JSON Schema. This is useful\nin the following situations:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"there is more than one type of identity in the system for instance customers,\nsupport or staff;"),Object(s.b)("li",{parentName:"ul"},"the system includes both users and robots sometimes also known as named\nservice accounts;"),Object(s.b)("li",{parentName:"ul"},"the system needs to ingest another company's identity model, and"),Object(s.b)("li",{parentName:"ul"},"the system's identity model changes or grows over time and requires\nversioning.")),Object(s.b)("p",null,"The following example illustrates a usage scenario with three types of\nidentities: Regular customers,\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Grandfather_clause"}),"grandfather accounts"),", and\nService Accounts (e.g. Microsoft provides\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/service-accounts"}),"Service Accounts"),").\nThere would be one JSON Schema per type of identity:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Customers: ",Object(s.b)("inlineCode",{parentName:"li"},"http://mydomain.com/schemas/v2/customer.schema.json")),Object(s.b)("li",{parentName:"ul"},"Grandfather Accounts: ",Object(s.b)("inlineCode",{parentName:"li"},"http://mydomain.com/schemas/v1/customer.schema.json")),Object(s.b)("li",{parentName:"ul"},"Service Accounts: ",Object(s.b)("inlineCode",{parentName:"li"},"http://mydomain.com/schemas/service-account.schema.json"))),Object(s.b)("p",null,"ORY Kratos expects the JSON Schemas in its configuration file:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"identity:\n  # This will be the default JSON Schema. If `schema_id` is empty when creating an identity using the\n  # Admin API, or a user signs up using a selfservice flow, this schema will be used.\n  #\n  # This is a required configuration field!\n  default_schema_url: http://foo.bar.com/person.schema.json\n\n  # Optionally define additional schemas here:\n  schemas:\n    # When creating an identity that uses this schema, `traits_schema_id: customer` would be set for that identity.\n    - id: customer\n      url: http://foo.bar.com/customer.schema.json\n")),Object(s.b)("p",null,"ORY Kratos validates the Identity Traits against the corresponding schema on all\nwriting operations (create / update). The employed business logic must be able\nto distinguish these three types of identities. You might use a switch statement\nlike in the following example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'// This is an example program that can deal with all three types of identities\nsession, err := ory.SessionFromRequest(r)\n// some error handling\nswitch (session.Identity.SchemaID) {\n    case "customer":\n        // ...\n    case "employee":\n        // ...\n    case "default":\n        fallthrough\n    default:\n        // ...\n}\n')),Object(s.b)("h2",{id:"json-schema-vocabulary-extensions"},"JSON Schema Vocabulary Extensions"),Object(s.b)("p",null,"Because ORY Kratos does not know that a particular field has a system-relevant\nmeaning you have to specify these in the schema. This includes for example:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The email address for recovering a lost password"),Object(s.b)("li",{parentName:"ul"},"The identifier for logging in with a password e.g. username or email"),Object(s.b)("li",{parentName:"ul"},"The phone number for enabling SMS 2FA"),Object(s.b)("li",{parentName:"ul"},"...")),Object(s.b)("p",null,"ORY Kratos' JSON Schema Vocabulary Extension can be used within a property:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$id": "http://mydomain.com/schemas/v2/customer.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "A customer (v2)",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "email": {\n          "title": "E-Mail",\n          "type": "string",\n          "format": "email",\n\n          // This tells ORY Kratos that the field should be used as the "username" for the username+password flow.\n          // It is an extension to the regular JSON Schema vocabulary.\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(s.b)("p",null,"An overview of available configuration options follows in the next sections."),Object(s.b)("h3",{id:"identifier-for-username-and-password-flows"},"Identifier for Username and Password Flows"),Object(s.b)("p",null,"You can configure ORY Kratos to use specific fields as the ",Object(s.b)("em",{parentName:"p"},"identifier")," e.g.\nusername, email, phone number, etc., in the Username and Password Registration\nand Login Flow:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "ory.sh/kratos": {\n    "credentials": {\n      "password": {\n        "identifier": true\n      }\n    }\n  }\n}\n')),Object(s.b)("p",null,"Looking at the traits from above"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"traits:\n  # These are just examples\n  email: office@ory.sh\n  name:\n    first: Aeneas\n    last: Rekkas\n  favorite_animal: Dog\n  accepted_tos: true\n")),Object(s.b)("p",null,"and using a JSON Schema that uses the ",Object(s.b)("inlineCode",{parentName:"p"},"email")," field as the identifier for the\npassword flow"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$id": "http://mydomain.com/schemas/v2/customer.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "A customer (v2)",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "email": {\n          "title": "E-Mail",\n          "type": "string",\n          "format": "email",\n\n          // This tells ORY Kratos that the field should be used as the "username" for the Username and Password Flow.\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        },\n        "name": {\n          "type": "object",\n          "properties": {\n            "first": {\n              "type": "string"\n            },\n            "last": {\n              "type": "string"\n            }\n          }\n        },\n        "favorite_animal": {\n          "type": "string"\n        },\n        "accepted_tos": {\n          "type": "string"\n        }\n      },\n      "required": ["email"],\n      "additionalProperties": false\n    }\n  }\n}\n')),Object(s.b)("p",null,"In this example, ORY Kratos understands that traits\u2709\ufe0f ",Object(s.b)("inlineCode",{parentName:"p"},"office@ory.sh")," is\nthe identity's identifier. The system expects ",Object(s.b)("inlineCode",{parentName:"p"},"office@ory.sh")," plus a password to\nsign in."),Object(s.b)("p",null,Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/concepts/credentials/username-email-password"}),"Username and Password Credentials"),"\ncontains more information and examples."),Object(s.b)("p",null,"There are currently no other extensions supported for Identity Traits. Further\nfields will be added in future releases!"))}m.isMDXComponent=!0},424:function(e,t,n){"use strict";var a=n(0),i=n.n(a),s=n(442),o=n.n(s),r=n(48),c=n.n(r),l=n(438),d=n.n(l);o.a.initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});t.a=function(e){var t,n=e.chart,s=Object(a.useState)(!1),r=s[0],l=s[1],m=Object(a.useState)(void 0),u=m[0],p=m[1],h=Object(a.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],b=function(){return l(!r)};return Object(a.useEffect)((function(){o.a.render(h,n,(function(e){p(e)}))}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{onClick:b,className:d()(c.a.graph,c.a.pointer),dangerouslySetInnerHTML:{__html:u}}),i.a.createElement("div",{onClick:b,className:d()(c.a.overlay,c.a.pointer,c.a.graph,(t={},t[c.a.visible]=r,t))},i.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:d()(c.a.backdrop,c.a.graph),dangerouslySetInnerHTML:{__html:u}})))}},443:function(e,t){},444:function(e,t){},445:function(e,t){},446:function(e,t){},447:function(e,t){},448:function(e,t){},449:function(e,t){},450:function(e,t){},451:function(e,t){},452:function(e,t){},453:function(e,t){},454:function(e,t){},455:function(e,t){},457:function(e,t,n){var a={"./locale":430,"./locale.js":430};function i(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=s,e.exports=i,i.id=457}}]);