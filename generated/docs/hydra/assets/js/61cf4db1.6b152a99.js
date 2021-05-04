(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{263:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return i})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return u}));var n=o(3),a=o(8),s=(o(0),o(572)),r={id:"before-oauth2",title:"Do You Need OAuth2?"},i={unversionedId:"concepts/before-oauth2",id:"version-v1.7/concepts/before-oauth2",isDocsHomePage:!1,title:"Do You Need OAuth2?",description:"OAuth2 and OpenID Connect is all the rage with big platforms (Google, Facebook,",source:"@site/versioned_docs/version-v1.7/concepts/before-oauth2.mdx",sourceDirName:"concepts",slug:"/concepts/before-oauth2",permalink:"/hydra/docs/v1.7/concepts/before-oauth2",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.7/concepts/before-oauth2.mdx",version:"v1.7",lastUpdatedBy:"aeneasr",lastUpdatedAt:1599128317,formattedLastUpdatedAt:"9/3/2020",frontMatter:{id:"before-oauth2",title:"Do You Need OAuth2?"},sidebar:"version-v1.7/docs",previous:{title:"Installation",permalink:"/hydra/docs/v1.7/install"},next:{title:"OAuth 2.0",permalink:"/hydra/docs/v1.7/concepts/oauth2"}},c=[{value:"What it&#39;s Good for",id:"what-its-good-for",children:[]},{value:"OAuth2 and OpenID Connect do not Solve Registration, Password Reset, ...",id:"oauth2-and-openid-connect-do-not-solve-registration-password-reset-",children:[]},{value:"Access and Refresh Tokens are not Sessions!",id:"access-and-refresh-tokens-are-not-sessions",children:[]},{value:"&quot;But Google/Facebook/... use OAuth2 and OpenID Connect&quot;",id:"but-googlefacebook-use-oauth2-and-openid-connect",children:[]},{value:"&quot;But SaaS Identity Products use OAuth2 and OpenID Connect&quot;",id:"but-saas-identity-products-use-oauth2-and-openid-connect",children:[]},{value:"You must Ensure Secure Storage of Access and Refresh Tokens",id:"you-must-ensure-secure-storage-of-access-and-refresh-tokens",children:[]},{value:"Access Token Scope is not an Access Control Permission",id:"access-token-scope-is-not-an-access-control-permission",children:[]}],l={toc:c};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"OAuth2 and OpenID Connect is all the rage with big platforms (Google, Facebook,\nGitHub) and identity SaaS products (Okta, Auth0) which is why you probably ended\nup at ORY Hydra. But before you start hacking away, the best use of your time\nright now is to re-evaluate if you really need OAuth2 and OpenID Connect."),Object(s.b)("p",null,"To do so, we will cover common misunderstandings and misconceptions about OAuth2\nin this document and guidance on what to do instead!"),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"If you are looking for a system that implements registration, login, password reset,\nsocial sign in, profile management, 2fa, and more, check out ",Object(s.b)("a",{parentName:"p",href:"https://www.ory.sh/kratos"},"ORY Kratos"),"\nfirst!"))),Object(s.b)("h2",{id:"what-its-good-for"},"What it's Good for"),Object(s.b)("p",null,"If you are like GitHub and you want to enable people not associated with your\ncompany like CircleCi or TravisCI to have access to your user's data, ORY Hydra\nis the right tool for you."),Object(s.b)("p",null,'If you want apps and websites you don\'t own to use your application as a\npotential sign in (e.g. be listed alongside "Sign in with Google", "Sign in with\nApple"), ORY Hydra is the right tool for you.'),Object(s.b)("p",null,"If you use an API that works with OAuth2 or OpenID Connect, then of course you\nneed to use that API - but then you are on the OAuth2 / OpenID Connect client\nside!"),Object(s.b)("p",null,"If you do not have user registration, password recovery, login form, session\nmanagement, or user settings system in place then OAuth2 is most likely not the\nright fit for you. If that's the case, check out\n",Object(s.b)("a",{parentName:"p",href:"https://www.ory.sh/kratos/"},"ORY Kratos"),"!"),Object(s.b)("h2",{id:"oauth2-and-openid-connect-do-not-solve-registration-password-reset-"},"OAuth2 and OpenID Connect do not Solve Registration, Password Reset, ..."),Object(s.b)("p",null,"OAuth2 and OpenID Connect are so-called delegation protocols which are not\nconcerned with user registration, password recovery, changing a password or\nemail address and so on."),Object(s.b)("p",null,"Actually, OAuth2 and OpenID Connect do not even specify how your users sign in\n(email and password? username and password? passwordless? sms 2fa?), they only\nestablish that ",Object(s.b)("strong",{parentName:"p"},"you need a method for users to sign in"),"."),Object(s.b)("p",null,"If you are wondering what password hashing algorithm to use, or how your users\nsign up for your platform, then you don't need OAuth2 or OpenID Connect right\nnow. Instead, you should give ",Object(s.b)("a",{parentName:"p",href:"https://www.ory.sh/kratos/"},"ORY Kratos")," a spin,\nwhich aims to solve exactly that."),Object(s.b)("h2",{id:"access-and-refresh-tokens-are-not-sessions"},"Access and Refresh Tokens are not Sessions!"),Object(s.b)("p",null,"With OAuth2 and OpenID Connect you end up with three session layers:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Your ",Object(s.b)("strong",{parentName:"li"},"Application's Session Manager")," keeps track of the user within your\napplication. You will use OpenID Connect to initiate and complete the login,\nbut your application needs to store and track and invalidate the session."),Object(s.b)("li",{parentName:"ul"},"ORY Hydra maintains a session cookie. When a user signs in, the cookie will be\nset for that user. This allows the next OAuth2 request to complete without\nrequesting the user to sign in again."),Object(s.b)("li",{parentName:"ul"},"Optionally - If your application connects to a third-party identity provider\n(e.g. Sign in with Google, GitHub, Facebook, ...) that third party provider\nalso maintains a session of the user.")),Object(s.b)("p",null,"A common misconception is that access and refresh tokens represent a user\nsession. ",Object(s.b)("strong",{parentName:"p"},"They do not.")),Object(s.b)("p",null,"Let's take a look at a common example: CircleCI/TravisCI/... and GitHub. To use\nCircleCI or TravisCI or similar products, they usually prompt you to sign into\nGitHub because they need access to your repositories. Once access is granted,\nCircleCI creates a new user account in their database and generates a session\ncookie (see Application Session Manager above). If you now sign out of GitHub,\nyou will make two observations:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"CircleCI still has access to your repositories;"),Object(s.b)("li",{parentName:"ol"},"You are still logged into CircleCI.")),Object(s.b)("p",null,"If you instead sign out of CircleCI:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"CircleCI still has access to your repositories;"),Object(s.b)("li",{parentName:"ol"},"You are still logged into GitHub.")),Object(s.b)("p",null,'That is because both applications are built by different people and different\ncompanies, and the user behavior on one site does not reflect user intent on\nanother. It would be crazy if some app could just log you out of GitHub, or if\nsigning out of Google would invalidate your sessions on all the websites where\nyou used "Sign in with Google".'),Object(s.b)("p",null,"Access and refresh tokens allow developers you do not know to do things in your\napplication in the name of your users over a prolonged period of time. CircleCI\nuses access tokens to watch your repositories for changes, update status checks\non pull requests, using access and refresh tokens. These tokens are valid for as\nlong as you don't remove CircleCI from your GitHub account. Logout does not\nchange any of that."),Object(s.b)("p",null,"If you want to read up on this more, check out\n",Object(s.b)("a",{parentName:"p",href:"https://dzone.com/articles/oauth-20-vs-session-management"},"OAuth 2.0 vs Session Management"),"."),Object(s.b)("p",null,"Now you should be at a point where"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"you realize that you only want to solve sign up, login, session management\nand that you don't need OAuth2 - your next step in this case should be to\ncheck out ",Object(s.b)("a",{parentName:"li",href:"https://www.ory.sh/kratos/"},"ORY Kratos")," which does solve all of\nthat;"),Object(s.b)("li",{parentName:"ol"},"you are reaffirmed that you need OAuth2 and OpenID connect because you want\ndevelopers you don't know to interact with your users and your users' data -\nin which case ORY Hydra is a great fit for you!")),Object(s.b)("h2",{id:"but-googlefacebook-use-oauth2-and-openid-connect"},'"But Google/Facebook/... use OAuth2 and OpenID Connect"'),Object(s.b)("p",null,"Have you ever wondered why, when signing into Google/Facebook/Twitter/..."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},'you don\'t see a screen asking you to grant permission ("Do you want to allow\n... to access your ...?")?'),Object(s.b)("li",{parentName:"ul"},"their mobile app does not open a browser window or use an embedded WebView?"),Object(s.b)("li",{parentName:"ul"},"your browser doesn't perform tons of redirects?")),Object(s.b)("p",null,"The answer is quite simple - they do not use OAuth2 or OpenID Connect for login\nand session management in first-party scenarios. It goes even further than\nthat - for example YouTube, which runs on a separate domain - does not use\nOAuth2 to sign into your Google account. They use a proprietary flow that\nincludes HTTP Cookies."),Object(s.b)("p",null,"However, OAuth2 and OpenID Connect do get used in certain scenarios at these\ncompanies:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The Google Cloud SDK CLI uses OAuth2 to sign into your Google Cloud account;"),Object(s.b)("li",{parentName:"ul"},"FireStick uses the OAuth2 Device Authorization grant to log you into your\nAmazon account;"),Object(s.b)("li",{parentName:"ul"},"GitHub does offer an API to third-party developers that involves OAuth2.")),Object(s.b)("h2",{id:"but-saas-identity-products-use-oauth2-and-openid-connect"},'"But SaaS Identity Products use OAuth2 and OpenID Connect"'),Object(s.b)("p",null,"They do, and they have great SDKs to help you avoid a lot of the OAuth2 and\nOpenID Complexity until you hit the very core limitations of OAuth2 which are\namongst others:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Up to three different session states (see e.g.\n",Object(s.b)("a",{parentName:"li",href:"https://auth0.com/docs/sessions/concepts/session-layers"},"Auth0 Session Layers"),");"),Object(s.b)("li",{parentName:"ul"},"Multi-stage logout flows (see e.g.\n",Object(s.b)("a",{parentName:"li",href:"https://auth0.com/docs/quickstart/webapp/nodejs"},"Auth0 Logout on NodeJS"),",\n",Object(s.b)("a",{parentName:"li",href:"https://auth0.com/docs/tokens/guides/revoke-tokens"},"Revoke Tokens on Auth0"),");"),Object(s.b)("li",{parentName:"ul"},"Logout does not invalidate access tokens (see e.g.\n",Object(s.b)("a",{parentName:"li",href:"https://auth0.com/docs/logout"},"Auth0 Logout"),");"),Object(s.b)("li",{parentName:"ul"},"Complex integration with Social Sign In (e.g. Twitter, Facebook, ...) on\nnative mobile apps (see e.g.\n",Object(s.b)("a",{parentName:"li",href:"https://auth0.com/docs/quickstart/native/ios-swift-facebook-login#before-you-start"},"iOS Swift - Facebook Login"),").")),Object(s.b)("p",null,"We picked Auth0 docs a lot because they explain the caveats of using OAuth2 and\nOpenID Connect well. These limitations apply to all software (e.g. ORY Hydra,\nOkta, Keycloak, ...) that use OAuth2 and OpenID Connect as their primary\nprotocols."),Object(s.b)("p",null,"If all you need is user registration, log in, user settings, and similar flows -\ncheck out ",Object(s.b)("a",{parentName:"p",href:"https://www.ory.sh/kratos/"},"ORY Kratos"),"!"),Object(s.b)("h2",{id:"you-must-ensure-secure-storage-of-access-and-refresh-tokens"},"You must Ensure Secure Storage of Access and Refresh Tokens"),Object(s.b)("p",null,"Storing access and refresh tokens involves tradeoffs:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Storing tokens in the Browser's ",Object(s.b)("inlineCode",{parentName:"li"},"localStorage")," or JavaScript cookies is easy,\nbut you become highly vulnerable to XSS Attacks;"),Object(s.b)("li",{parentName:"ul"},"Storing tokens in a ",Object(s.b)("inlineCode",{parentName:"li"},"httpOnly")," cookie is more secure but means that you need a\nserver-side component which performs the OAuth2 flows and then stores the\ntokens in an encrypted cookie;"),Object(s.b)("li",{parentName:"ul"},"Storing tokens in a database is secure but implies a lot of overhead.")),Object(s.b)("p",null,"On top of that, you need to refresh tokens when they expire which may become\nvery complex in scenarios where you have more than one HTTP request using the\naccess token. This is especially true for systems that have refresh tokens which\nare valid for one use only (e.g. ORY Hydra, Auth0, ...)."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Cookies are great")," and a common misconception is that cookies are less secure\nthan tokens or less usable. For 95% of web applications it is enough to work\nwith cookies, especially if they only run in the browser and not in a native\nmobile app. And that's great, because the browser takes care of:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Bound to one top-level-domain only;"),Object(s.b)("li",{parentName:"ul"},"Anti-XSS with ",Object(s.b)("inlineCode",{parentName:"li"},"httpOnly")),Object(s.b)("li",{parentName:"ul"},"TLS enforcment with ",Object(s.b)("inlineCode",{parentName:"li"},"secure"),";"),Object(s.b)("li",{parentName:"ul"},"Smaller CSRF attack surface with the new ",Object(s.b)("inlineCode",{parentName:"li"},"SameSite")," directive;"),Object(s.b)("li",{parentName:"ul"},"The domain model (cookies are isolated per domain);")),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://www.ory.sh/kratos/"},"ORY Kratos")," works both with tokens and cookies.\nImplementing login does not involve any manual token handling - just log in and\nyou're done!"),Object(s.b)("h2",{id:"access-token-scope-is-not-an-access-control-permission"},"Access Token Scope is not an Access Control Permission"),Object(s.b)("p",null,"The OAuth 2.0 Scope ",Object(s.b)("strong",{parentName:"p"},"is not an internal RBAC/ACL permission"),":"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A permission allows an actor to perform a certain action in a system: ",Object(s.b)("em",{parentName:"li"},"Bob is\nallowed to delete his own photos"),"."),Object(s.b)("li",{parentName:"ul"},"OAuth 2.0 Scope implies that an end-user granted certain privileges to a\nclient: ",Object(s.b)("em",{parentName:"li"},"Bob allowed the OAuth 2.0 Client to delete all users"),". But Bob might\nnot be allowed to delete all users because Bob is not an admin.")),Object(s.b)("p",null,'The OAuth 2.0 Scope can be granted without the end-user actually having the\nright permissions. In the examples above, Bob granted an OAuth 2.0 Client the\npermission ("scope") to delete all users in his name. However, since Bob is not\nan administrator, that permission ("access control") is not actually granted to\nBob. Therefore any request by the OAuth 2.0 Client that tries to delete users on\nbehalf of Bob should fail.'))}u.isMDXComponent=!0},572:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return b}));var n=o(0),a=o.n(n);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(o),d=n,b=p["".concat(r,".").concat(d)]||p[d]||h[d]||s;return o?a.a.createElement(b,i(i({ref:t},l),{},{components:o})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,r=new Array(s);r[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var l=2;l<s;l++)r[l]=o[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);