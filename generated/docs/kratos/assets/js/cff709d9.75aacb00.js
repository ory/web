(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{369:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var s=n(3),a=n(8),r=(n(0),n(454)),i={id:"username-email-password",title:"Username or Email and Password"},o={unversionedId:"self-service/flows/user-login-user-registration/username-email-password",id:"version-v0.4/self-service/flows/user-login-user-registration/username-email-password",isDocsHomePage:!1,title:"Username or Email and Password",description:"Please read the",source:"@site/versioned_docs/version-v0.4/self-service/flows/user-login-user-registration/username-email-password.mdx",sourceDirName:"self-service/flows/user-login-user-registration",slug:"/self-service/flows/user-login-user-registration/username-email-password",permalink:"/kratos/docs/v0.4/self-service/flows/user-login-user-registration/username-email-password",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/self-service/flows/user-login-user-registration/username-email-password.mdx",version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594203957,formattedLastUpdatedAt:"7/8/2020",frontMatter:{id:"username-email-password",title:"Username or Email and Password"},sidebar:"version-v0.4/docs",previous:{title:"User Login And Registration",permalink:"/kratos/docs/v0.4/self-service/flows/user-login-user-registration"},next:{title:"Social Sign In with OpenID Connect and OAuth2",permalink:"/kratos/docs/v0.4/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2"}},l=[{value:"Browser Clients",id:"browser-clients",children:[{value:"Registration",id:"registration",children:[]},{value:"Login",id:"login",children:[]}]},{value:"API Clients",id:"api-clients",children:[]},{value:"Security and Defenses",id:"security-and-defenses",children:[{value:"Anti-automation",id:"anti-automation",children:[]},{value:"Account Takeover Defenses",id:"account-takeover-defenses",children:[]},{value:"Password Validation",id:"password-validation",children:[]},{value:"Account Enumeration Defenses (work in progress)",id:"account-enumeration-defenses-work-in-progress",children:[]}]}],c={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(s.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Before you start")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Please read the\n",Object(r.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/concepts/credentials/username-email-password"},"Username / Email & Password Credentials Documentation"),"\nand\n",Object(r.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/self-service/flows/user-login-user-registration"},"User Login and Registration Documentation"),"\nfirst."))),Object(r.b)("p",null,'This document summarizes exemplary request payloads for performing "login or\nsign up with email/username and password" flows using the user login and\nregistration flow with the ',Object(r.b)("inlineCode",{parentName:"p"},"password")," strategy."),Object(r.b)("h2",{id:"browser-clients"},"Browser Clients"),Object(r.b)("h3",{id:"registration"},"Registration"),Object(r.b)("p",null,"Redirecting the browser to the\n",Object(r.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/self-service/flows/user-login-user-registration#user-login-and-user-registration-process-sequence"},"Self-Service Login and Registration Endpoint"),"\ninitiates the flow. If the ",Object(r.b)("inlineCode",{parentName:"p"},"password")," strategy is enabled, the Registration\nRequest Response Payload will include a ",Object(r.b)("inlineCode",{parentName:"p"},"password")," method."),Object(r.b)("p",null,"ORY Kratos uses the Identity JSON Schema defined in\n",Object(r.b)("inlineCode",{parentName:"p"},"identity.default_schema_url")," to generate a list of form fields and add it to\nthe Registration Request. Using an Identity JSON Schema like"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json",metastring:'title="my/identity.schema.json"',title:'"my/identity.schema.json"'},'{\n  "$id": "https://schemas.ory.sh/presets/kratos/quickstart/email-password/identity.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "email": {\n          "type": "string",\n          "format": "email",\n          "title": "E-Mail",\n          "minLength": 3,\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        },\n        "name": {\n          "type": "object",\n          "properties": {\n            "first": {\n              "type": "string"\n            },\n            "last": {\n              "type": "string"\n            }\n          }\n        }\n      },\n      "required": ["email"],\n      "additionalProperties": false\n    }\n  }\n}\n')),Object(r.b)("p",null,"will result in the following Registration Request"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/registration?request=713df601-d6c8-4331-8195-c29b92db459f"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/registration?request":'713df601-d6c8-4331-8195-c29b92db459f"'},"{\n  id: '713df601-d6c8-4331-8195-c29b92db459f',\n  expires_at: '2020-01-27T16:31:00.3507956Z',\n  issued_at: '2020-01-27T16:21:00.3508076Z',\n  request_url: 'http://127.0.0.1:4455/auth/browser/registration',\n  methods: {\n    password: {\n      method: 'password',\n      config: {\n        action: 'http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/registration/strategies/password?request=713df601-d6c8-4331-8195-c29b92db459f',\n        method: 'POST',\n        fields: [\n          {\n            name: 'csrf_token',\n            type: 'hidden',\n            required: true,\n            value: '0klCuilgIO2k0Ev3J3IEsMOlmxg0RhjiiiWXVKm3Pd7HxZLVkDHWoOSfiT+/BJn69Dg2fmq6MHv8HkEx6MrVlw=='\n          },\n          {\n            name: 'traits.email',\n            type: 'email',\n            required: true\n          },\n          {\n            name: 'password',\n            type: 'password',\n            required: true\n          },\n          {\n            name: 'traits.name.first',\n            type: 'text'\n          },\n          {\n            name: 'traits.name.last',\n            type: 'text'\n          }\n        ]\n      }\n    }\n  }\n}\n")),Object(r.b)("p",null,"which in turn is easily to render by filling out a HTML Form template:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<form method="{{ method }}" action="{{ action }}">\n  \x3c!-- repeat this for every field --\x3e\n  <input type="{{ field.type }}" name="{{ field.name }} required="{{\n  field.required }}" value="{{ field.value }}"\n  \x3c!-- ... --\x3e>\n\n  <input type="submit" value="Create account" />\n</form>\n')),Object(r.b)("p",null,'Once the user clicks "Create Account", the payload will be sent to ORY Kratos\'\nPublic API. The data will be validated against the Identity JSON Schema (e.g.\nchecking if a required field is missing, if some condition like ',Object(r.b)("inlineCode",{parentName:"p"},"minLength")," is\nnot fulfilled, ...). If the data is invalid or incomplete, the browser will be\nredirected to the same login endpoint with the same request ID. When fetching\nthat request ID again, error details will be included in the JSON Response, such\nas:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/registration?request=713df601-d6c8-4331-8195-c29b92db459f"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/registration?request":'713df601-d6c8-4331-8195-c29b92db459f"'},"{\n  id: '713df601-d6c8-4331-8195-c29b92db459f',\n  expires_at: '2020-01-27T16:31:00.3507956Z',\n  issued_at: '2020-01-27T16:21:00.3508076Z',\n  request_url: 'http://127.0.0.1:4433/self-service/browser/flows/registration',\n  active: 'password', // <- this is now set\n  methods: {\n    password: {\n      method: 'password',\n      config: {\n        messages: [\n          {\n            /* id, type */\n            text: 'Please update the Form Fields to proceed.'\n          }\n        ],\n        action: 'http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/registration/strategies/password?request=713df601-d6c8-4331-8195-c29b92db459f',\n        method: 'POST',\n        fields: [\n          /* ... */\n          {\n            name: 'password',\n            type: 'text',\n            value: 't4aegbydfv5234',\n            messages: [\n              {\n                /* id, type */\n                text: \"traits.email: Does not match format 'email'\"\n              }\n            ]\n          }\n          /* ... */\n        ]\n      }\n    }\n  }\n}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Validation error messages and context will be improved in future releases.\nThis is tracked as ",Object(r.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/185"},"kratos#185"),".")),Object(r.b)("p",null,"The flow completes otherwise."),Object(r.b)("h3",{id:"login"},"Login"),Object(r.b)("p",null,"Redirecting the browser to the\n",Object(r.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/self-service/flows/user-login-user-registration#user-login-and-user-registration-process-sequence"},"Self-Service Login and Registration Endpoint"),"\ninitiates the flow. If the ",Object(r.b)("inlineCode",{parentName:"p"},"password")," strategy is enabled, the Login Request\nResponse Payload will include a ",Object(r.b)("inlineCode",{parentName:"p"},"password")," method. In contrast to the\nRegistration sequence, this payload does not change when the Identity JSON\nSchema changes:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/login?request=0cfb0f7e-3866-453c-9c23-28cc2cb7fead"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/login?request":'0cfb0f7e-3866-453c-9c23-28cc2cb7fead"'},"{\n  id: '0cfb0f7e-3866-453c-9c23-28cc2cb7fead',\n  expires_at: '2020-01-27T16:48:53.8826084Z',\n  issued_at: '2020-01-27T16:38:53.8826392Z',\n  request_url: 'http://127.0.0.1:4433/self-service/browser/flows/login',\n  methods: {\n    password: {\n      method: 'password',\n      config: {\n        action: 'http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/login/strategies/password?request=0cfb0f7e-3866-453c-9c23-28cc2cb7fead',\n        method: 'POST',\n        fields: [\n          {\n            name: 'csrf_token',\n            type: 'hidden',\n            required: true,\n            value: 'F0LABRxm/os+18VBUcbmz98LkJid1sEj++4X41rcdbcCzhBqpTcIxn6YB4nJsHuF6JY9/sMq6bqN1cGGG6Gd/g=='\n          },\n          {\n            name: 'identifier',\n            type: 'text',\n            required: true\n          },\n          {\n            name: 'password',\n            type: 'password',\n            required: true\n          }\n        ]\n      }\n    }\n  }\n}\n")),Object(r.b)("p",null,"If the login form is filled out incorrectly, errors are included in the\nresponse:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/login?request=0cfb0f7e-3866-453c-9c23-28cc2cb7fead"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/login?request":'0cfb0f7e-3866-453c-9c23-28cc2cb7fead"'},"{\n  id: '0cfb0f7e-3866-453c-9c23-28cc2cb7fead',\n  expires_at: '2020-01-27T16:48:53.8826084Z',\n  issued_at: '2020-01-27T16:38:53.8826392Z',\n  request_url: 'http://127.0.0.1:4455/auth/browser/login',\n  active: 'password', // <-- this is now set\n  methods: {\n    password: {\n      method: 'password',\n      config: {\n        messages: [\n          {\n            /* id, type */\n            text: 'Please check the data you provided.'\n          }\n        ],\n        action: 'http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/login/strategies/password?request=0cfb0f7e-3866-453c-9c23-28cc2cb7fead',\n        method: 'POST',\n        fields: [\n          /* ... */\n          {\n            name: 'password',\n            type: 'password',\n            required: true,\n            messages: [\n              {\n                /* id, type */\n                text: 'password: password is required'\n              }\n            ]\n          }\n        ]\n      }\n    }\n  }\n}\n")),Object(r.b)("p",null,"The flow completes otherwise."),Object(r.b)("h2",{id:"api-clients"},"API Clients"),Object(r.b)("p",null,"API-based login and registration using this strategy will be addressed in a\nfuture release of ORY Kratos."),Object(r.b)("h2",{id:"security-and-defenses"},"Security and Defenses"),Object(r.b)("p",null,"Password-based authentication flows are subject to frequent abuse through"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Social Engineering Attacks;"),Object(r.b)("li",{parentName:"ul"},"Password Guessing Attacks;"),Object(r.b)("li",{parentName:"ul"},"Phishing Attacks.")),Object(r.b)("h3",{id:"anti-automation"},"Anti-automation"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This feature is a work in progress and is tracked as\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/138"},"kratos#133"),".")),Object(r.b)("p",null,"Actions that cause out-of-band communications, such as sending an activation\nlink via email or an activation code via SMS, can be abused by automated\nsystems. The goal of such an attack is to send out so many emails or SMS, that\nyour reputation worsens (spam filters) or you're faced with massive costs\n(carrier fees)."),Object(r.b)("p",null,"CAPTCHA renders these attacks either very difficult or impossible. ORY Kratos\nhas CAPTCHA support built-in. ORY Kratos will prompt the user to complete a\nCAPTCHA in the following scenarios:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The user tries to register more than one account within 72 hours."),Object(r.b)("li",{parentName:"ul"},"The user failed provide valid credentials for the third time within 12 hours."),Object(r.b)("li",{parentName:"ul"},"The user tries to recover their account for the second time within 72 hours.")),Object(r.b)("p",null,"For integration guidelines, please check the individual flow's (registration,\nlogin, account recovery) integration documentation."),Object(r.b)("h3",{id:"account-takeover-defenses"},"Account Takeover Defenses"),Object(r.b)("p",null,"The Settings flow implements account takeover defenses as it is not possible to\nchange the password without knowing the existing password. A good example of\nthis flow is the\n",Object(r.b)("a",{parentName:"p",href:"https://help.github.com/en/github/authenticating-to-github/sudo-mode"},"GitHub sudo mode"),"."),Object(r.b)("h3",{id:"password-validation"},"Password Validation"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Further improvements are work in progress and are tracked on\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues?q=is%3Aopen+label%3Amodule%3Ass%2Fpassword+"},"GitHub"))),Object(r.b)("p",null,"To prevent weak passwords ORY Kratos implements different measures. Users often\nchoose passwords similar to their traits. To prevent this ORY Kratos ensures\nthere is a sufficient\n",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Levenshtein_distance"},"Levenshtein-Distance"),' (aka\n"Edit-Distance") between the identifier and the password. It also makes sure\nthat the identifier and password have a small enough longest common substring.'),Object(r.b)("p",null,"Furthermore the ",Object(r.b)("inlineCode",{parentName:"p"},"password")," strategy comes with a build-in check against the\n",Object(r.b)("a",{parentName:"p",href:"https://haveibeenpwned.com"},'"Have I been pwned"'),' breach database. This way ORY\nKratos makes sure your users cannot use passwords like "password", "123456" or\nany other commonly used one. To protect the value of the password the\n',Object(r.b)("a",{parentName:"p",href:"https://haveibeenpwned.com/API/v3#SearchingPwnedPasswordsByRange"},"range API")," is\nbeing used."),Object(r.b)("h3",{id:"account-enumeration-defenses-work-in-progress"},"Account Enumeration Defenses (work in progress)"),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This feature is a work in progress and is tracked as\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/133"},"kratos#133"),"."),Object(r.b)("p",{parentName:"div"},"It does not yet work as documented!"))),Object(r.b)("p",null,'Account enumeration attacks allow a attacker to find out who is signed up. This\ncompromises the privacy of your users and can hurt reputation depending on the\nservice (e.g. "adult content").'),Object(r.b)("p",null,"This attack usually makes only sense if an email address or a phone number is\ncollected during registration. For chosen usernames, this attack is much more\ndifficult, as the attacker has to know what usernames the victim is using."),Object(r.b)("p",null,"There are three common ways an attacker can figure out if a user is signed up at\na service:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'During login: "No user with this email address was found"'),Object(r.b)("li",{parentName:"ul"},'During registration: "A user with this email address exists already"'),Object(r.b)("li",{parentName:"ul"},'During password reset: "No user with this email address was found"')),Object(r.b)("p",null,"To mitigate this attack, the following strategies need to be deployed:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'The login form should return the same message regardless of whether the\npassword is wrong or the email/username does not exist: "The provided\ncredentials are invalid."'),Object(r.b)("li",{parentName:"ul"},"The password reset form should always return a success message and send out an\nemail. If the email address is registered, a normal password reset email is\nsent. If the email address is not registered, an email is sent to the address\nindicating that no account is set up with that email address. This is helpful\nto users that have multiple email addresses and are using the wrong email\naddress for the password reset."),Object(r.b)("li",{parentName:"ul"},'The registration form should also always return a success message and send out\nan email. If the email address is not yet registered, a regular "account\nactivation" email is sent out. If the email address is registered already, a\nemail is sent out telling the user that the account is already set up, and\nlink to the login screen.')),Object(r.b)("p",null,"If you wish to mitigate account enumeration attacks, it is important to note\nthat you cannot sign in users directly after sign up! Depending on the type of\nservice you provide, you might not care about this specific attack in which case\ndirect login after sign up would be ok."),Object(r.b)("h4",{id:"enabling-account-enumeration-defenses"},"Enabling Account Enumeration Defenses"),Object(r.b)("p",null,"Assuming you wish to enable account enumeration defenses, you need to configure\nORY Kratos as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Collect one or more email addresses during sign up and enable email\nverification."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Do not")," enable the ",Object(r.b)("inlineCode",{parentName:"li"},"session")," post-registration workflow.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"selfservice:\n  flows:\n    verification:\n      enabled: true\n")),Object(r.b)("h4",{id:"disable-account-enumeration-defenses"},"Disable Account Enumeration Defenses"),Object(r.b)("p",null,"Enforcing email verification, which requires an email round trip and disrupts\nthe sign up process, is not always feasible. In these cases, you might want to\ndisable account enumeration defenses."),Object(r.b)("p",null,"You can disable the defense mechanism on a per-field basis in your Identity JSON\nSchema:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json",metastring:'title="path/to/my/identity.schema.json"',title:'"path/to/my/identity.schema.json"'},'{\n  "$id": "https://example.com/identity.traits.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "username": {\n          "type": "string",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true,\n                "disable_account_enumeration_defenses": true\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(r.b)("p",null,'This will tell ORY Kratos to display messages such as "a user with this email\naddress exists already" and "no user with this email address is registered on\nthis site". You can then enable the ',Object(r.b)("inlineCode",{parentName:"p"},"session")," post-registration workflow:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"selfservice:\n  flows:\n    registration:\n      after:\n        password:\n          - hook: session\n")))}d.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var s=n(0),a=n.n(s);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),b=s,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||r;return n?a.a.createElement(m,o(o({ref:t},c),{},{components:n})):a.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);