(window.webpackJsonp=window.webpackJsonp||[]).push([[460],{524:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var i=n(3),o=n(8),a=(n(0),n(552)),r={id:"sign-in-with-github-google-facebook-linkedin",title:"Sign in with GitHub, Google, Facebook, LinkedIn, Microsoft ..."},c={unversionedId:"guides/sign-in-with-github-google-facebook-linkedin",id:"version-v0.4/guides/sign-in-with-github-google-facebook-linkedin",isDocsHomePage:!1,title:"Sign in with GitHub, Google, Facebook, LinkedIn, Microsoft ...",description:'In this document we will take a look at setting up "Sign in with GitHub" using',source:"@site/versioned_docs/version-v0.4/guides/sign-in-with-github-google-facebook-linkedin.mdx",sourceDirName:"guides",slug:"/guides/sign-in-with-github-google-facebook-linkedin",permalink:"/kratos/docs/v0.4/guides/sign-in-with-github-google-facebook-linkedin",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/guides/sign-in-with-github-google-facebook-linkedin.mdx",version:"v0.4",lastUpdatedBy:"Johan Forssell",lastUpdatedAt:1617006964,formattedLastUpdatedAt:"3/29/2021",frontMatter:{id:"sign-in-with-github-google-facebook-linkedin",title:"Sign in with GitHub, Google, Facebook, LinkedIn, Microsoft ..."},sidebar:"version-v0.4/docs",previous:{title:"Hooks",permalink:"/kratos/docs/v0.4/self-service/hooks/index"},next:{title:"Zero Trust with IAP Proxy",permalink:"/kratos/docs/v0.4/guides/zero-trust-iap-proxy-identity-access-proxy"}},s=[{value:"GitHub",id:"github",children:[]},{value:"Microsoft",id:"microsoft",children:[]},{value:"Google, LinkedIn, Facebook",id:"google-linkedin-facebook",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,'In this document we will take a look at setting up "Sign in with GitHub" using\nORY Kratos.'),Object(a.b)("p",null,"Run the ",Object(a.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/quickstart"},"Quickstart")," with Docker Compose:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'# This assumes that you have ORY Kratos checked out locally and\n# that your current directory ("pwd") is the folder where ORY Kratos\n# is.\n\n$ make quickstart\n')),Object(a.b)("h2",{id:"github"},"GitHub"),Object(a.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Hz_dP5c_qvc",frameborder:"0",allowfullscreen:!0}),Object(a.b)("p",null,'To set up "Sign in with GitHub" you must create a\n',Object(a.b)("a",{parentName:"p",href:"https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/"},"GitHub OAuth2 Client"),"."),Object(a.b)("p",null,'Set the "Authorization callback URL" to:'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/strategies/oidc/callback/github\n")),Object(a.b)("p",null,"The pattern of this URL is:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"http(s)://<domain-of-ory-kratos>:<public-port>/self-service/browser/flows/strategies/oidc/callback/<provider-id>\n")),Object(a.b)("p",null,"The provider ID must point to the provider's ID set in the ORY Kratos\nconfiguration file (explained in further detail at\n",Object(a.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/concepts/credentials/openid-connect-oidc-oauth2"},"OpenID Connect and OAuth2 Credentials"),")."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"GitHub does not implement OpenID Connect. Therefore, ORY Kratos makes a request\nto\n",Object(a.b)("a",{parentName:"p",href:"https://developer.github.com/v3/users/#get-the-authenticated-user"},"GitHub's User API"),"\nand adds that data to ",Object(a.b)("inlineCode",{parentName:"p"},"std.extVar('claims')"),". Check out what data is available\nat\n",Object(a.b)("a",{parentName:"p",href:"https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/"},"GitHub's Scope Docs"),".\nNot all GitHub fields are supported however. Check the list of supported fields\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/blob/v0.2.1-alpha.1/selfservice/strategy/oidc/provider_github.go#L72-L98"},"in Kratos' source code"),"."))),Object(a.b)("p",null,"As explained in\n",Object(a.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/concepts/credentials/openid-connect-oidc-oauth2"},"OpenID Connect and OAuth2 Credentials"),",\nyou must also create a Jsonnet code snippet for the provider. Save the code in\n",Object(a.b)("inlineCode",{parentName:"p"},"<kratos-directory>/contrib/quickstart/kratos/email-password/oidc.github.jsonnet"),".\nThe following JsonNet takes ",Object(a.b)("inlineCode",{parentName:"p"},"email_primary")," and maps it to ",Object(a.b)("inlineCode",{parentName:"p"},"traits.email"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json",metastring:'title="contrib/quickstart/kratos/email-password/oidc.github.jsonnet"',title:'"contrib/quickstart/kratos/email-password/oidc.github.jsonnet"'},'local claims = {\n  email_verified: false\n} + std.extVar(\'claims\');\n\n{\n  identity: {\n    traits: {\n      // Allowing unverified email addresses enables account\n      // enumeration attacks, especially if the value is used for\n      // e.g. verification or as a password login identifier.\n      //\n      // Therefore we only return the email if it (a) exists and (b) is marked verified\n      // by GitHub.\n      [if "email" in claims && claims.email_verified then "email" else null]: claims.email,\n    },\n  },\n}\n')),Object(a.b)("p",null,"Now, enable the GitHub provider in the ORY Kratos config located at\n",Object(a.b)("inlineCode",{parentName:"p"},"<kratos-directory>/contrib/quickstart/kratos/email-password/kratos.yml"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="contrib/quickstart/kratos/email-password/kratos.yml"',title:'"contrib/quickstart/kratos/email-password/kratos.yml"'},"# $ kratos -c path/to/my/kratos/config.yml serve\nselfservice:\n  strategies:\n    oidc:\n      enabled: true\n      config:\n        providers:\n          - id: github # this is `<provider-id>` in the Authorization callback URL. DO NOT CHANGE IT ONCE SET!\n            provider: github\n            client_id: .... # Replace this with the OAuth2 Client ID provided by GitHub\n            client_secret: .... # Replace this with the OAuth2 Client Secret provided by GitHub\n            mapper_url: file:///etc/config/kratos/oidc.github.jsonnet\n            scope:\n              - user:email\n")),Object(a.b)("p",null,"Next, open the login endpoint of the SecureApp and you should see the GitHub\nLogin option!"),Object(a.b)("h2",{id:"microsoft"},"Microsoft"),Object(a.b)("p",null,"This will enable you to log in using any Azure AD directory - Multitenant and\npersonal Microsoft accounts (e.g. Skype, Xbox) depending on the settings made\nwhen creating the application in Azure AD."),Object(a.b)("h4",{id:"creating-an-application-in-azure-ad"},"Creating an Application in Azure AD"),Object(a.b)("p",null,'To set up "Sign in with Microsoft" you must first\n',Object(a.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app"},"register an application with the Microsoft identity platform"),"."),Object(a.b)("p",null,'Select "Web" as the "Redirect URI" type, and set the URI to:'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"http(s)://<domain-of-ory-kratos>:<public-port>/self-service/browser/flows/strategies/oidc/callback/<provider-id>\n")),Object(a.b)("p",null,'After the "App Registration" is created, make note of the ',Object(a.b)("inlineCode",{parentName:"p"},"Application ID")," and\n",Object(a.b)("inlineCode",{parentName:"p"},"Directory ID"),' on top of the Overview page. To create the client secret,\nnavigate to "Certificates & secrets" and click "+ New client secret". Remember\nto copy the secret value as it will only be shown once.'),Object(a.b)("h4",{id:"configuring-kratos"},"Configuring Kratos"),Object(a.b)("p",null,"Create a Jsonnet claims mapper as described in\n",Object(a.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/concepts/credentials/openid-connect-oidc-oauth2"},"OpenID Connect and OAuth2 Credentials"),".\nSave the code in\n",Object(a.b)("inlineCode",{parentName:"p"},"<kratos-directory>/contrib/quickstart/kratos/email-password/oidc.microsoft.jsonnet"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json",metastring:'title="contrib/quickstart/kratos/email-password/oidc.microsoft.jsonnet"',title:'"contrib/quickstart/kratos/email-password/oidc.microsoft.jsonnet"'},'local claims = std.extVar(\'claims\');\n{\n  identity: {\n    traits: {\n      // Allowing unverified email addresses enables account\n      // enumeration attacks, especially if the value is used for\n      // e.g. verification or as a password login identifier.\n      //\n      // If connecting only to your organization (one tenant), claims.email is safe to use if you have not actively disabled e-mail verification during signup.\n      //\n      // The email might be empty if the account is not linked to an email address.\n      // For a human readable identifier, consider using the "preferred_username" claim.\n      [if "email" in claims then "email" else null]: claims.email,\n    },\n  },\n}\n')),Object(a.b)("p",null,"Enable the Microsoft provider in the ORY Kratos config located at\n",Object(a.b)("inlineCode",{parentName:"p"},"<kratos-directory>/contrib/quickstart/kratos/email-password/kratos.yml"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="contrib/quickstart/kratos/email-password/kratos.yml"',title:'"contrib/quickstart/kratos/email-password/kratos.yml"'},"selfservice:\n  strategies:\n    oidc:\n      enabled: true\n      config:\n        providers:\n          - id: microsoft # this is `<provider-id>` in the Authorization callback URL. DO NOT CHANGE IT ONCE SET!\n            provider: microsoft\n            client_id: .... # Replace this with the Application ID from the App Registration\n            client_secret: .... # Replace this with the generated Secret value from the App Registration\n            tenant: .... # Replace this with the Tenant of your choice (see below)\n            mapper_url: file:///etc/config/kratos/oidc.microsoft.jsonnet\n            scope:\n              - profile\n              - email\n")),Object(a.b)("p",null,"Azure AD is now an option to log in to kratos."),Object(a.b)("h5",{id:"choosing-tenant"},"Choosing Tenant"),Object(a.b)("p",null,"There are two ways to use the ",Object(a.b)("inlineCode",{parentName:"p"},"microsoft")," provider for authentication:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"For authenticating users in a single Azure AD Directory (organisation), set\nthe ",Object(a.b)("inlineCode",{parentName:"li"},"tenant")," value to either the ",Object(a.b)("inlineCode",{parentName:"li"},"Directory ID"),' from the "App Registration"\npage, or the organisation domain. E.g. ',Object(a.b)("inlineCode",{parentName:"li"},"8eaef023-2b34-4da1-9baa-8bc8c9d6a490"),"\nor ",Object(a.b)("inlineCode",{parentName:"li"},"contoso.onmicrosoft.com"),"."),Object(a.b)("li",{parentName:"ol"},"For authenticating any user in the Microsoft identity platform, set the\n",Object(a.b)("inlineCode",{parentName:"li"},"tenant")," value to either:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"organizations")," to allow users with work or school accounts, or"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"consumers")," to allow users with personal accounts, or"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"common")," to allow both kind of accounts.")))),Object(a.b)("h2",{id:"google-linkedin-facebook"},"Google, LinkedIn, Facebook"),Object(a.b)("p",null,"Connecting with other Social Sign In providers will be very similar to the\nGitHub flow. If you've managed to do it, add to this document by writing it down\nand making a PR! :)"))}p.isMDXComponent=!0},552:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,m=d["".concat(r,".").concat(u)]||d[u]||b[u]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<a;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);