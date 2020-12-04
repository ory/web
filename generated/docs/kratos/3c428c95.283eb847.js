(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return m}));var a=n(3),i=n(7),r=(n(0),n(441)),o=n(446),s=n(447),c={id:"managing-users-identities",title:"Managing Users and Identities"},l={unversionedId:"admin/managing-users-identities",id:"version-v0.5/admin/managing-users-identities",isDocsHomePage:!1,title:"Managing Users and Identities",description:"This document walks you through the administrative identity management in ORY",source:"@site/versioned_docs/version-v0.5/admin/managing-users-identities.mdx",slug:"/admin/managing-users-identities",permalink:"/kratos/docs/admin/managing-users-identities",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/admin/managing-users-identities.mdx",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1602674546,sidebar:"version-v0.5/docs",previous:{title:"Hooks",permalink:"/kratos/docs/self-service/hooks"},next:{title:"Sign in with GitHub, GitLab, Google, Facebook, LinkedIn, Microsoft ...",permalink:"/kratos/docs/guides/sign-in-with-github-google-facebook-linkedin"}},u=[{value:"Creating an Identity",id:"creating-an-identity",children:[{value:"Invite a User",id:"invite-a-user",children:[]},{value:"Import a User Identity",id:"import-a-user-identity",children:[]},{value:"Creating a Machine Identity",id:"creating-a-machine-identity",children:[]}]}],d={rightToc:u};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This document walks you through the administrative identity management in ORY\nKratos. You should already be familiar with the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/concepts/identity-data-model"}),"Identity Data Model")," before reading this\nguide."),Object(r.b)("h2",{id:"creating-an-identity"},"Creating an Identity"),Object(r.b)("p",null,"There are three principal flows supported for creating identities as an\nadministrator:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Inviting users - e.g. inviting a new employee to your organization IT."),Object(r.b)("li",{parentName:"ol"},"Importing existing users - e.g. when migrating from another system to ORY\nKratos."),Object(r.b)("li",{parentName:"ol"},"Creating machine users - e.g. creating Service Accounts.")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Similar to other guides, we assume that ORY Kratos runs on 127.0.0.1:4433\n(public endpoint) and 127.0.0.1:4434 (admin endpoint) in this guide, which is\nthe default when running the quickstart."))),Object(r.b)("h3",{id:"invite-a-user"},"Invite a User"),Object(r.b)("p",null,"The goal of this flow is to create an identity and provide the end-user with a\nway of signing into the identity (account) and setting their password (or any\nother type of credential) for future logins. To achieve this, first create the\nidentity and set its traits and schema:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'$ curl --request POST -sL \\\n    --header "Content-Type: application/json" \\\n    --request POST \\\n    --data \'{\n  "schema_id": "default",\n  "traits": {\n    "email": "foo@ory.sh"\n  }\n}\' \\\n    http://127.0.0.1:4434/identities\n\n{\n  "id": "954f7f59-16a5-4152-8ce7-ad7c73bb124a",\n  "schema_id": "default",\n  "traits":{\n    "email": "foo@ory.sh"\n  }\n}\n')),Object(r.b)("p",null,"Keep in mind that you can change the ",Object(r.b)("inlineCode",{parentName:"p"},"schema_id"),' to reflect the schema you want\nto use for this user. Similarly, the trait key/values depend on your schema as\nwell. The command shown does not create a password for the identity or any other\ntype of credential. Instead, we will use another REST call to create a recovery\nlink (here "invite link" is probably more appropriate, but the flow uses an\naccount recovery link).'),Object(r.b)("p",null,"To create the account recovery link, use:"),Object(r.b)(o.a,{defaultValue:"curl",values:[{label:"curl",value:"curl"},{label:"GoLang",value:"go"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"curl",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'$ curl --request POST -sL \\\n    --header "Content-Type: application/json" \\\n    --request POST \\\n    --data \'{\n  "expires_in": "12h",\n  "identity_id": "954f7f59-16a5-4152-8ce7-ad7c73bb124a"\n}\' \\\n    http://127.0.0.1:4434/recovery/link\n\n{\n  "expires_at": "2020-07-27T10:47:45.806Z",\n  "recovery_link": "http://127.0.0.1:4433/self-service/browser/flows/recovery/link?request=8b6fd3e4-1de2-49bf-aa88-1a26634bf062\\u0026token=b1tGmHf64cYDeHB9wKiuCF1FfycMJEyf"\n}\n'))),Object(r.b)(s.a,{value:"go",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n    "github.com/ory/kratos-client-go/client"\n    "github.com/ory/kratos-client-go/client/admin"\n    "github.com/ory/kratos-client-go/models"\n)\n\nfunc main() {\n    c := client.New(nil, &client.TransportConfig{\n        Host: "127.0.0.1:4434",\n        BasePath: "/",\n        Schemes: []string{"http"},\n    })\n\n    res, err := c.Admin.CreateRecoveryLink(admin.NewCreateRecoveryLinkParams().WithBody(admin.CreateRecoveryLinkBody{\n        IdentityID: models.UUID("the-uuid"),\n    }))\n    if err != nil {\n        // ...\n    }\n\n    fmt.Printf("Use link: %s", *res.Payload.RecoveryLink)\n}\n')),Object(r.b)("p",null,"The response contains a ",Object(r.b)("inlineCode",{parentName:"p"},"recovery_link")," value which is the link the user should\nuse to set up his or her credentials (e.g. connect to a Social Sign In Provider,\nset up a password, ...). The user has only a limited amount of time to do so -\nthe amount of time is specified in the ORY Kratos config:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/kratos/config.yml"',title:'"path/to/kratos/config.yml"'}),"selfservice:\n  flows:\n    settings:\n      privileged_session_max_age: 30m\n")),Object(r.b)("p",null,"If the user fails to set up his / her credentials in time, another recovery link\nneeds to be issued and the user needs to re-do the flow."),Object(r.b)("p",null,"It is currently not possible to send the recovery link directly to a user's\nemail, this feature is tracked as\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/kratos/issues/595"}),"#595"),"."))),Object(r.b)("h3",{id:"import-a-user-identity"},"Import a User Identity"),Object(r.b)("p",null,"This feature is not implemented yet."),Object(r.b)("h3",{id:"creating-a-machine-identity"},"Creating a Machine Identity"),Object(r.b)("p",null,"This feature is not implemented yet."))}m.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,b=d["".concat(o,".").concat(p)]||d[p]||m[p]||r;return n?i.a.createElement(b,s(s({ref:t},l),{},{components:n})):i.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},445:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},446:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(450),o=n(445),s=n(55),c=n.n(s),l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,d=e.values,m=e.groupId,p=e.className,b=Object(r.a)(),h=b.tabGroupChoices,f=b.setTabGroupChoices,g=Object(a.useState)(s),y=g[0],v=g[1],O=a.Children.toArray(e.children);if(null!=m){var j=h[m];null!=j&&j!==y&&d.some((function(e){return e.value===j}))&&v(j)}var w=function(e){v(e),null!=m&&f(m,e)},k=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},p)},d.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(O.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},447:function(e,t,n){"use strict";var a=n(3),i=n(0),r=n.n(i);t.a=function(e){var t=e.children,n=e.hidden,i=e.className;return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:i}),t)}},450:function(e,t,n){"use strict";var a=n(0),i=n(451);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},451:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i}}]);