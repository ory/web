(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[7217],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,h=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(67294),a=n(79443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,u=39;var d=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,d=e.values,m=e.groupId,p=e.className,h=i(),f=h.tabGroupChoices,y=h.setTabGroupChoices,g=(0,r.useState)(a),v=g[0],k=g[1],b=r.Children.toArray(e.children),w=[];if(null!=m){var N=f[m];null!=N&&N!==v&&d.some((function(e){return e.value===N}))&&k(N)}var T=function(e){var t=e.currentTarget,n=w.indexOf(t),r=d[n].value;k(r),null!=m&&(y(m,r),setTimeout((function(){var e,n,r,a,i,o,s,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,s=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case c:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},p)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:T,onClick:T},n)}))),t?(0,r.cloneElement)(b.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},88005:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return h}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=n(55064),s=n(58215),l=["components"],c={id:"managing-users-identities",title:"Managing Users and Identities"},u=void 0,d={unversionedId:"admin/managing-users-identities",id:"version-v0.6/admin/managing-users-identities",isDocsHomePage:!1,title:"Managing Users and Identities",description:"This document walks you through the administrative identity management in Ory",source:"@site/versioned_docs/version-v0.6/admin/managing-users-identities.mdx",sourceDirName:"admin",slug:"/admin/managing-users-identities",permalink:"/kratos/docs/admin/managing-users-identities",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/admin/managing-users-identities.mdx",version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619690398,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"managing-users-identities",title:"Managing Users and Identities"},sidebar:"version-v0.6/docs",previous:{title:"Hooks",permalink:"/kratos/docs/self-service/hooks"},next:{title:"Sign in with GitHub, GitLab, Google, Facebook, LinkedIn, Microsoft ...",permalink:"/kratos/docs/guides/sign-in-with-github-google-facebook-linkedin"}},m=[{value:"Creating an Identity",id:"creating-an-identity",children:[{value:"Invite a User",id:"invite-a-user",children:[]},{value:"Import a User Identity",id:"import-a-user-identity",children:[]},{value:"Creating a Machine Identity",id:"creating-a-machine-identity",children:[]},{value:"Enable recovery flows",id:"enable-recovery-flows",children:[]}]}],p={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document walks you through the administrative identity management in Ory\nKratos. You should already be familiar with the\n",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/concepts/identity-data-model"},"Identity Data Model")," before reading this\nguide."),(0,i.kt)("h2",{id:"creating-an-identity"},"Creating an Identity"),(0,i.kt)("p",null,"There are three principal flows supported for creating identities as an\nadministrator:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Inviting users - e.g. inviting a new employee to your organization IT."),(0,i.kt)("li",{parentName:"ol"},"Importing existing users - e.g. when migrating from another system to Ory\nKratos."),(0,i.kt)("li",{parentName:"ol"},"Creating machine users - e.g. creating Service Accounts.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Similar to other guides, we assume that Ory Kratos runs on 127.0.0.1:4433\n(public endpoint) and 127.0.0.1:4434 (admin endpoint) in this guide, which is\nthe default when running the quickstart."))),(0,i.kt)("h3",{id:"invite-a-user"},"Invite a User"),(0,i.kt)("p",null,"The goal of this flow is to create an identity and provide the end-user with a\nway of signing into the identity (account) and setting their password (or any\nother type of credential) for future logins. To achieve this, first create the\nidentity and set its traits and schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ curl --request POST -sL \\\n    --header "Content-Type: application/json" \\\n    --request POST \\\n    --data \'{\n  "schema_id": "default",\n  "traits": {\n    "email": "foo@ory.sh"\n  }\n}\' \\\n    http://127.0.0.1:4434/identities\n\n{\n  "id": "954f7f59-16a5-4152-8ce7-ad7c73bb124a",\n  "schema_id": "default",\n  "traits":{\n    "email": "foo@ory.sh"\n  }\n}\n')),(0,i.kt)("p",null,"Keep in mind that you can change the ",(0,i.kt)("inlineCode",{parentName:"p"},"schema_id"),' to reflect the schema you want\nto use for this user. Similarly, the trait key/values depend on your schema as\nwell. The command shown does not create a password for the identity or any other\ntype of credential. Instead, we will use another REST call to create a recovery\nlink (here "invite link" is probably more appropriate, but the flow uses an\naccount recovery link).'),(0,i.kt)("p",null,"To create the account recovery link, use:"),(0,i.kt)(o.Z,{defaultValue:"curl",values:[{label:"curl",value:"curl"},{label:"GoLang",value:"go"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"curl",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ curl --request POST -sL \\\n    --header "Content-Type: application/json" \\\n    --request POST \\\n    --data \'{\n  "expires_in": "12h",\n  "identity_id": "954f7f59-16a5-4152-8ce7-ad7c73bb124a"\n}\' \\\n    http://127.0.0.1:4434/recovery/link\n\n{\n  "expires_at": "2020-07-27T10:47:45.806Z",\n  "recovery_link": "http://127.0.0.1:4433/self-service/browser/flows/recovery/link?request=8b6fd3e4-1de2-49bf-aa88-1a26634bf062\\u0026token=b1tGmHf64cYDeHB9wKiuCF1FfycMJEyf"\n}\n'))),(0,i.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "github.com/ory/kratos-client-go/client"\n    "github.com/ory/kratos-client-go/client/admin"\n    "github.com/ory/kratos-client-go/models"\n)\n\nfunc main() {\n    c := client.New(nil, &client.TransportConfig{\n        Host: "127.0.0.1:4434",\n        BasePath: "/",\n        Schemes: []string{"http"},\n    })\n\n    res, err := c.Admin.CreateRecoveryLink(admin.NewCreateRecoveryLinkParams().WithBody(admin.CreateRecoveryLinkBody{\n        IdentityID: models.UUID("the-uuid"),\n    }))\n    if err != nil {\n        // ...\n    }\n\n    fmt.Printf("Use link: %s", *res.Payload.RecoveryLink)\n}\n')),(0,i.kt)("p",null,"The response contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"recovery_link")," value which is the link the user should\nuse to set up his or her credentials (e.g. connect to a Social Sign In Provider,\nset up a password, ...). The user has only a limited amount of time to do so -\nthe amount of time is specified in the Ory Kratos config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml"',title:'"path/to/kratos/config.yml"'},"selfservice:\n  flows:\n    settings:\n      privileged_session_max_age: 30m\n")),(0,i.kt)("p",null,"If the user fails to set up his / her credentials in time, another recovery link\nneeds to be issued and the user needs to re-do the flow."),(0,i.kt)("p",null,"It is currently not possible to send the recovery link directly to a user's\nemail, this feature is tracked as\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/595"},"#595"),"."))),(0,i.kt)("h3",{id:"import-a-user-identity"},"Import a User Identity"),(0,i.kt)("p",null,"This feature is not implemented yet."),(0,i.kt)("h3",{id:"creating-a-machine-identity"},"Creating a Machine Identity"),(0,i.kt)("p",null,"This feature is not implemented yet."),(0,i.kt)("h3",{id:"enable-recovery-flows"},"Enable recovery flows"),(0,i.kt)("p",null,"To enable recovery flows, make the following adjustments to your Ory Kratos\nconfiguration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/config/kratos.yml"',title:'"path/to/config/kratos.yml"'},"selfservice:\n  methods:\n    link:\n      enabled: true\n  flows:\n    recovery:\n      enabled: true\n")),(0,i.kt)("p",null,"To specify that an identity's trait is a recovery email, use the following\nIdentity JSON Schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},' {\n   "$id": "https://schemas.ory.sh/presets/kratos/quickstart/email-password/identity.schema.json",\n   "$schema": "http://json-schema.org/draft-07/schema#",\n   "title": "Person",\n   "type": "object",\n   "properties": {\n     "traits": {\n       "type": "object",\n       "properties": {\n         "email": {\n           "type": "string",\n           "format": "email",\n           "ory.sh/kratos": {\n             "credentials": {\n               "password": {\n                 "identifier": true\n               }\n             },\n+            "recovery": {\n+              "via": "email"\n+            }\n           }\n         }\n       }\n       "additionalProperties": false\n     }\n   }\n }\n')),(0,i.kt)("p",null,"For more detailed information and general guidelines on these flows, take a look\nat the\n",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/self-service/flows/account-recovery"},"Account Recovery and Password Reset"),"\nsection."))}h.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);