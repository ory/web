(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[6043],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return c},kt:function(){return d}});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(o),d=a,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||s;return o?n.createElement(m,r(r({ref:t},c),{},{components:o})):n.createElement(m,r({ref:t},c))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=o.length,r=new Array(s);r[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var u=2;u<s;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},31647:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=o(22122),a=o(19756),s=(o(67294),o(3905)),r=["components"],i={id:"before-oauth2",title:"Do You Need OAuth2?"},l=void 0,u={unversionedId:"concepts/before-oauth2",id:"concepts/before-oauth2",isDocsHomePage:!1,title:"Do You Need OAuth2?",description:"OAuth2 and OpenID Connect is all the rage with big platforms (Google, Facebook,",source:"@site/docs/concepts/before-oauth2.mdx",sourceDirName:"concepts",slug:"/concepts/before-oauth2",permalink:"/hydra/docs/next/concepts/before-oauth2",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/concepts/before-oauth2.mdx",version:"current",lastUpdatedBy:"Vincent",lastUpdatedAt:1610703128,formattedLastUpdatedAt:"1/15/2021",frontMatter:{id:"before-oauth2",title:"Do You Need OAuth2?"},sidebar:"docs",previous:{title:"Contribution Guidelines",permalink:"/hydra/docs/next/contributing"},next:{title:"OAuth 2.0",permalink:"/hydra/docs/next/concepts/oauth2"}},c=[{value:"What it&#39;s Good for",id:"what-its-good-for",children:[]},{value:"OAuth2 and OpenID Connect do not Solve Registration, Password Reset, ...",id:"oauth2-and-openid-connect-do-not-solve-registration-password-reset-",children:[]},{value:"Access and Refresh Tokens are not Sessions!",id:"access-and-refresh-tokens-are-not-sessions",children:[]},{value:"&quot;But Google/Facebook/... use OAuth2 and OpenID Connect&quot;",id:"but-googlefacebook-use-oauth2-and-openid-connect",children:[]},{value:"&quot;But SaaS Identity Products use OAuth2 and OpenID Connect&quot;",id:"but-saas-identity-products-use-oauth2-and-openid-connect",children:[]},{value:"You must Ensure Secure Storage of Access and Refresh Tokens",id:"you-must-ensure-secure-storage-of-access-and-refresh-tokens",children:[]},{value:"Access Token Scope is not an Access Control Permission",id:"access-token-scope-is-not-an-access-control-permission",children:[]}],h={toc:c};function p(e){var t=e.components,o=(0,a.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"OAuth2 and OpenID Connect is all the rage with big platforms (Google, Facebook,\nGitHub) and identity SaaS products (Okta, Auth0) which is why you probably ended\nup at ORY Hydra. But before you start hacking away, the best use of your time\nright now is to re-evaluate if you really need OAuth2 and OpenID Connect."),(0,s.kt)("p",null,"To do so, we will cover common misunderstandings and misconceptions about OAuth2\nin this document and guidance on what to do instead!"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If you are looking for a system that implements registration, login, password\nreset, social sign in, profile management, 2fa, and more, check out\n",(0,s.kt)("a",{parentName:"p",href:"https://www.ory.sh/kratos"},"ORY Kratos")," first!"))),(0,s.kt)("h2",{id:"what-its-good-for"},"What it's Good for"),(0,s.kt)("p",null,"If you are like GitHub and you want to enable people not associated with your\ncompany like CircleCi or TravisCI to have access to your user's data, ORY Hydra\nis the right tool for you."),(0,s.kt)("p",null,'If you want apps and websites you don\'t own to use your application as a\npotential sign in (e.g. be listed alongside "Sign in with Google", "Sign in with\nApple"), ORY Hydra is the right tool for you.'),(0,s.kt)("p",null,"If you use an API that works with OAuth2 or OpenID Connect, then of course you\nneed to use that API - but then you are on the OAuth2 / OpenID Connect client\nside!"),(0,s.kt)("p",null,"If you want a system for user registration, password recovery, login form,\nsession management and user settings, then don't start with OAuth2 right away.\nIt is recommended to use ",(0,s.kt)("a",{parentName:"p",href:"https://www.ory.sh/kratos"},"ORY Kratos")," for your basic\nuser management needs and then figure out if you still need OAuth2."),(0,s.kt)("h2",{id:"oauth2-and-openid-connect-do-not-solve-registration-password-reset-"},"OAuth2 and OpenID Connect do not Solve Registration, Password Reset, ..."),(0,s.kt)("p",null,"OAuth2 and OpenID Connect are so-called delegation protocols which are not\nconcerned with user registration, password recovery, changing a password or\nemail address and so on."),(0,s.kt)("p",null,"Actually, OAuth2 and OpenID Connect do not even specify how your users sign in\n(email and password? username and password? passwordless? sms 2fa?), they only\nestablish that ",(0,s.kt)("strong",{parentName:"p"},"you need a method for users to sign in"),"."),(0,s.kt)("p",null,"If you are wondering what password hashing algorithm to use, or how your users\nsign up for your platform, then you don't need OAuth2 or OpenID Connect right\nnow. Instead, you should give ",(0,s.kt)("a",{parentName:"p",href:"https://www.ory.sh/kratos/"},"ORY Kratos")," a spin,\nwhich aims to solve exactly that."),(0,s.kt)("h2",{id:"access-and-refresh-tokens-are-not-sessions"},"Access and Refresh Tokens are not Sessions!"),(0,s.kt)("p",null,"With OAuth2 and OpenID Connect you end up with three session layers:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Your ",(0,s.kt)("strong",{parentName:"li"},"Application's Session Manager")," keeps track of the user within your\napplication. You will use OpenID Connect to initiate and complete the login,\nbut your application needs to store and track and invalidate the session."),(0,s.kt)("li",{parentName:"ul"},"ORY Hydra maintains a session cookie. When a user signs in, the cookie will be\nset for that user. This allows the next OAuth2 request to complete without\nrequesting the user to sign in again."),(0,s.kt)("li",{parentName:"ul"},"Optionally - If your application connects to a third-party identity provider\n(e.g. Sign in with Google, GitHub, Facebook, ...) that third party provider\nalso maintains a session of the user.")),(0,s.kt)("p",null,"A common misconception is that access and refresh tokens represent a user\nsession. ",(0,s.kt)("strong",{parentName:"p"},"They do not.")),(0,s.kt)("p",null,"Let's take a look at a common example: CircleCI/TravisCI/... and GitHub. To use\nCircleCI or TravisCI or similar products, they usually prompt you to sign into\nGitHub because they need access to your repositories. Once access is granted,\nCircleCI creates a new user account in their database and generates a session\ncookie (see Application Session Manager above). If you now sign out of GitHub,\nyou will make two observations:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"CircleCI still has access to your repositories;"),(0,s.kt)("li",{parentName:"ol"},"You are still logged into CircleCI.")),(0,s.kt)("p",null,"If you instead sign out of CircleCI:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"CircleCI still has access to your repositories;"),(0,s.kt)("li",{parentName:"ol"},"You are still logged into GitHub.")),(0,s.kt)("p",null,'That is because both applications are built by different people and different\ncompanies, and the user behavior on one site does not reflect user intent on\nanother. It would be crazy if some app could just log you out of GitHub, or if\nsigning out of Google would invalidate your sessions on all the websites where\nyou used "Sign in with Google".'),(0,s.kt)("p",null,"Access and refresh tokens allow developers you do not know to do things in your\napplication in the name of your users over a prolonged period of time. CircleCI\nuses access tokens to watch your repositories for changes, update status checks\non pull requests, using access and refresh tokens. These tokens are valid for as\nlong as you don't remove CircleCI from your GitHub account. Logout does not\nchange any of that."),(0,s.kt)("p",null,"If you want to read up on this more, check out\n",(0,s.kt)("a",{parentName:"p",href:"https://dzone.com/articles/oauth-20-vs-session-management"},"OAuth 2.0 vs Session Management"),"."),(0,s.kt)("p",null,"Now you should be at a point where"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"you realize that you only want to solve sign up, login, session management\nand that you don't need OAuth2 - your next step in this case should be to\ncheck out ",(0,s.kt)("a",{parentName:"li",href:"https://www.ory.sh/kratos/"},"ORY Kratos")," which does solve all of\nthat;"),(0,s.kt)("li",{parentName:"ol"},"you are reaffirmed that you need OAuth2 and OpenID connect because you want\ndevelopers you don't know to interact with your users and your users' data -\nin which case ORY Hydra is a great fit for you!")),(0,s.kt)("h2",{id:"but-googlefacebook-use-oauth2-and-openid-connect"},'"But Google/Facebook/... use OAuth2 and OpenID Connect"'),(0,s.kt)("p",null,"Have you ever wondered why, when signing into Google/Facebook/Twitter/..."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'you don\'t see a screen asking you to grant permission ("Do you want to allow\n... to access your ...?")?'),(0,s.kt)("li",{parentName:"ul"},"their mobile app does not open a browser window or use an embedded WebView?"),(0,s.kt)("li",{parentName:"ul"},"your browser doesn't perform tons of redirects?")),(0,s.kt)("p",null,"The answer is quite simple - they do not use OAuth2 or OpenID Connect for login\nand session management in first-party scenarios. It goes even further than\nthat - for example YouTube, which runs on a separate domain - does not use\nOAuth2 to sign into your Google account. They use a proprietary flow that\nincludes HTTP Cookies."),(0,s.kt)("p",null,"However, OAuth2 and OpenID Connect do get used in certain scenarios at these\ncompanies:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The Google Cloud SDK CLI uses OAuth2 to sign into your Google Cloud account;"),(0,s.kt)("li",{parentName:"ul"},"FireStick uses the OAuth2 Device Authorization grant to log you into your\nAmazon account;"),(0,s.kt)("li",{parentName:"ul"},"GitHub does offer an API to third-party developers that involves OAuth2.")),(0,s.kt)("h2",{id:"but-saas-identity-products-use-oauth2-and-openid-connect"},'"But SaaS Identity Products use OAuth2 and OpenID Connect"'),(0,s.kt)("p",null,"They do, and they have great SDKs to help you avoid a lot of the OAuth2 and\nOpenID Complexity until you hit the very core limitations of OAuth2 which are\namongst others:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Up to three different session states (see e.g.\n",(0,s.kt)("a",{parentName:"li",href:"https://auth0.com/docs/sessions/concepts/session-layers"},"Auth0 Session Layers"),");"),(0,s.kt)("li",{parentName:"ul"},"Multi-stage logout flows (see e.g.\n",(0,s.kt)("a",{parentName:"li",href:"https://auth0.com/docs/quickstart/webapp/nodejs"},"Auth0 Logout on NodeJS"),",\n",(0,s.kt)("a",{parentName:"li",href:"https://auth0.com/docs/tokens/guides/revoke-tokens"},"Revoke Tokens on Auth0"),");"),(0,s.kt)("li",{parentName:"ul"},"Logout does not invalidate access tokens (see e.g.\n",(0,s.kt)("a",{parentName:"li",href:"https://auth0.com/docs/logout"},"Auth0 Logout"),");"),(0,s.kt)("li",{parentName:"ul"},"Complex integration with Social Sign In (e.g. Twitter, Facebook, ...) on\nnative mobile apps (see e.g.\n",(0,s.kt)("a",{parentName:"li",href:"https://auth0.com/docs/quickstart/native/ios-swift-facebook-login#before-you-start"},"iOS Swift - Facebook Login"),").")),(0,s.kt)("p",null,"We picked Auth0 docs a lot because they explain the caveats of using OAuth2 and\nOpenID Connect well. These limitations apply to all software (e.g. ORY Hydra,\nOkta, Keycloak, ...) that use OAuth2 and OpenID Connect as their primary\nprotocols."),(0,s.kt)("p",null,"If all you need is user registration, log in, user settings, and similar flows -\ncheck out ",(0,s.kt)("a",{parentName:"p",href:"https://www.ory.sh/kratos/"},"ORY Kratos"),"!"),(0,s.kt)("h2",{id:"you-must-ensure-secure-storage-of-access-and-refresh-tokens"},"You must Ensure Secure Storage of Access and Refresh Tokens"),(0,s.kt)("p",null,"Storing access and refresh tokens involves tradeoffs:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Storing tokens in the Browser's ",(0,s.kt)("inlineCode",{parentName:"li"},"localStorage")," or JavaScript cookies is easy,\nbut you become highly vulnerable to XSS Attacks;"),(0,s.kt)("li",{parentName:"ul"},"Storing tokens in a ",(0,s.kt)("inlineCode",{parentName:"li"},"httpOnly")," cookie is more secure but means that you need a\nserver-side component which performs the OAuth2 flows and then stores the\ntokens in an encrypted cookie;"),(0,s.kt)("li",{parentName:"ul"},"Storing tokens in a database is secure but implies a lot of overhead.")),(0,s.kt)("p",null,"On top of that, you need to refresh tokens when they expire which may become\nvery complex in scenarios where you have more than one HTTP request using the\naccess token. This is especially true for systems that have refresh tokens which\nare valid for one use only (e.g. ORY Hydra, Auth0, ...)."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Cookies are great")," and a common misconception is that cookies are less secure\nthan tokens or less usable. For 95% of web applications it is enough to work\nwith cookies, especially if they only run in the browser and not in a native\nmobile app. And that's great, because the browser takes care of:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Bound to one top-level-domain only;"),(0,s.kt)("li",{parentName:"ul"},"Anti-XSS with ",(0,s.kt)("inlineCode",{parentName:"li"},"httpOnly")),(0,s.kt)("li",{parentName:"ul"},"TLS enforcment with ",(0,s.kt)("inlineCode",{parentName:"li"},"secure"),";"),(0,s.kt)("li",{parentName:"ul"},"Smaller CSRF attack surface with the new ",(0,s.kt)("inlineCode",{parentName:"li"},"SameSite")," directive;"),(0,s.kt)("li",{parentName:"ul"},"The domain model (cookies are isolated per domain);")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.ory.sh/kratos/"},"ORY Kratos")," works both with tokens and cookies.\nImplementing login does not involve any manual token handling - just log in and\nyou're done!"),(0,s.kt)("h2",{id:"access-token-scope-is-not-an-access-control-permission"},"Access Token Scope is not an Access Control Permission"),(0,s.kt)("p",null,"The OAuth 2.0 Scope ",(0,s.kt)("strong",{parentName:"p"},"is not an internal RBAC/ACL permission"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A permission allows an actor to perform a certain action in a system: ",(0,s.kt)("em",{parentName:"li"},"Bob is\nallowed to delete his own photos"),"."),(0,s.kt)("li",{parentName:"ul"},"OAuth 2.0 Scope implies that an end-user granted certain privileges to a\nclient: ",(0,s.kt)("em",{parentName:"li"},"Bob allowed the OAuth 2.0 Client to delete all users"),". But Bob might\nnot be allowed to delete all users because Bob is not an admin.")),(0,s.kt)("p",null,'The OAuth 2.0 Scope can be granted without the end-user actually having the\nright permissions. In the examples above, Bob granted an OAuth 2.0 Client the\npermission ("scope") to delete all users in his name. However, since Bob is not\nan administrator, that permission ("access control") is not actually granted to\nBob. Therefore any request by the OAuth 2.0 Client that tries to delete users on\nbehalf of Bob should fail.'))}p.isMDXComponent=!0}}]);