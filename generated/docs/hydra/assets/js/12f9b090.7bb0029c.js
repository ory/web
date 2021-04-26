(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return h}));var a=n(3),o=n(8),r=(n(0),n(570)),i={id:"oauth2",title:"OAuth 2.0"},s={unversionedId:"concepts/oauth2",id:"version-v1.8/concepts/oauth2",isDocsHomePage:!1,title:"OAuth 2.0",description:"This section describes on a high level what OAuth 2.0 is and how it works.",source:"@site/versioned_docs/version-v1.8/concepts/oauth2.mdx",sourceDirName:"concepts",slug:"/concepts/oauth2",permalink:"/hydra/docs/v1.8/concepts/oauth2",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.8/concepts/oauth2.mdx",version:"v1.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601676726,formattedLastUpdatedAt:"10/2/2020",frontMatter:{id:"oauth2",title:"OAuth 2.0"},sidebar:"version-v1.8/docs",previous:{title:"Do You Need OAuth2?",permalink:"/hydra/docs/v1.8/concepts/before-oauth2"},next:{title:"OpenID Connect (OIDC)",permalink:"/hydra/docs/v1.8/concepts/openid-connect-oidc"}},c=[{value:"OAuth 2.0",id:"oauth-20",children:[]},{value:"Terminology",id:"terminology",children:[]},{value:"OAuth 2.0 Scope",id:"oauth-20-scope",children:[]}],p={toc:c};function h(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section describes on a high level what OAuth 2.0 is and how it works.\nPlease keep in mind that ORY Hydra is a technology targeted at professionals\nusing OAuth 2.0 on a regular basis. While we try to cover some of the concepts,\nOAuth 2.0 and OpenID knowledge is expected from you in order to understand and\nuse ORY Hydra to its fullest potential."),Object(r.b)("p",null,"If you are new to these topics we recommend watching the following talk"),Object(r.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/996OiexHze0",frameborder:"0",allowfullscreen:!0}),Object(r.b)("p",null,"and read these articles:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2"},"DigitalOcean: An Introduction to OAuth 2")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://aaronparecki.com/2012/07/29/2/oauth2-simplified"},"Aaron Parecki: OAuth2 Simplified")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://zapier.com/learn/apis/chapter-5-authentication-part-2/"},"Zapier: Chapter 5: Authentication, Part 2"))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},'If you are not building a system that involves third parties - for example a\nthird party company (CircleCI) using your (GitHub) APIs - but instead are\nlooking to solve "Single Sign On", mobile / single page app authentication, or\ngenerally "I want an API token after someone logs in", take a look at\n',Object(r.b)("a",{parentName:"p",href:"https://www.ory.sh/kratos"},"ORY Kratos")," instead!"))),Object(r.b)("h3",{id:"oauth-20"},"OAuth 2.0"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6749"},"The OAuth 2.0 authorization framework")," is\nspecified in ",Object(r.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6749"},"IETF RFC 6749"),". OAuth 2.0\nenables a third-party application to obtain limited access to resources on an\nHTTP server on behalf of the owner of those resources."),Object(r.b)("p",null,"Why is this important? Without OAuth 2.0, a resource owner who wants to share\nresources in their account with a third party would have to share their\ncredentials with that third party. As an example, let's say you (a resource\nowner) have some photos (resources) stored on a social network (the resource\nserver). Now you want to print them using a third-party printing service. Before\nOAuth 2.0 existed, you would have to enter your social network password into the\nprinting service so that it can access and print your photos. Sharing secret\npasswords with third parties is obviously very problematic."),Object(r.b)("p",null,"OAuth addresses this problem by introducing:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the distinction between resource ownership and resource access for clients"),Object(r.b)("li",{parentName:"ul"},"the ability to define fine-grained access privileges (called OAuth scopes)\ninstead of full account access for third parties"),Object(r.b)("li",{parentName:"ul"},"an authorization layer and workflow that allows resource owners to grant\nparticular clients particular types of access to particular resources.")),Object(r.b)("p",null,"With OAuth, clients can request access to resources on a server, and the owner\nof these resources can grant the requested access together with dedicated\ncredentials. In our example, you could grant the printing service read-only\naccess to your photos (only your photos, not your friend list) on the social\nnetwork. These credentials come in the form of an access token -- a string\ndenoting a specific scope, lifetime, and other access attributes. The client\n(printing service) can use this access token to request the protected resources\n(your photos) from the resource server (the social network)."),Object(r.b)("h3",{id:"terminology"},"Terminology"),Object(r.b)("p",null,"To read more natural, this guide uses simpler terminologies like ",Object(r.b)("em",{parentName:"p"},"user")," instead\nof ",Object(r.b)("em",{parentName:"p"},"resource owner"),". Here is a full list of terms."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"A ",Object(r.b)("strong",{parentName:"li"},"resource owner"),' is the user account who authorizes an external\napplication to access their account. This access is limited (scoped) to\nparticular actions (the granted "scopes" like read photos or write messages).\nThis guide refers to resource owners as ',Object(r.b)("em",{parentName:"li"},"users")," or ",Object(r.b)("em",{parentName:"li"},"end users"),"."),Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("strong",{parentName:"li"},"OAuth 2.0 Authorization Server")," implements the OAuth 2.0 protocol (and\noptionally OpenID Connect). In our case, this is ",Object(r.b)("strong",{parentName:"li"},"ORY Hydra"),"."),Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("strong",{parentName:"li"},"resource provider")," is the service that hosts (provides) the resources.\nThese resources (e.g. blog articles, printers, todo lists) are owned by a\nresource owner (user) mentioned above."),Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("strong",{parentName:"li"},"OAuth 2.0 Client")," is the ",Object(r.b)("em",{parentName:"li"},"external application")," that wants to access a\nresource owner's resources (read a user's images). To do that, it asks the\nOAuth 2.0 Authorization Server for an access token in a resource owner's\nbehalf. The authorization server will ask the user if he/she \"is ok with\"\ngiving that external application e.g. write access to personal images."),Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("strong",{parentName:"li"},"Identity Provider")," is a service that allows users to register\naccounts, log in, etc."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"User Agent")," is usually a browser."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"OpenID Connect")," is a protocol built on top of OAuth 2.0 for just\nauthentication (instead of authorizing access to resources).")),Object(r.b)("p",null,"A typical OAuth 2.0 flow looks as follows:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"A developer registers an OAuth 2.0 Client (external application) with the\nAuthorization Server (ORY Hydra) the intention to obtain information on\nbehalf of a user."),Object(r.b)("li",{parentName:"ol"},"The application UI asks the user to authorize the application to access\ninformation/data on his/her behalf."),Object(r.b)("li",{parentName:"ol"},"The user is redirected to the Authorization Server."),Object(r.b)("li",{parentName:"ol"},"The Authorization Server confirms the user's identity and asks the user to\ngrant the OAuth 2.0 Client certain permissions."),Object(r.b)("li",{parentName:"ol"},"The Authorization Server issues tokens that the OAuth 2.0 client uses to\naccess resources on the user's behalf.")),Object(r.b)("h3",{id:"oauth-20-scope"},"OAuth 2.0 Scope"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Please read the section about OAuth2 Scope in\n",Object(r.b)("a",{parentName:"p",href:"/hydra/docs/v1.8/concepts/before-oauth2"},"Read this before learning OAuth2 / OpenID Connect"),"."),Object(r.b)("p",{parentName:"div"},"A second important concept is the OAuth 2.0 Scope. Many people confuse OAuth 2.0\nScope with internal Access Control like for example Role Based Access Control\n(RBAC) or Access Control Lists (ACL). Both concepts cover different aspects of\naccess control."),Object(r.b)("p",{parentName:"div"},"Internal access control (RBAC, ACL, etc) decides what a user can do in your\nsystem. An administrator might be allowed to modify everything. A regular user\nmight only be allowed to read their own messages."),Object(r.b)("p",{parentName:"div"},"OAuth 2.0 Scopes, on the other hand, describe what a user allowed an external\napplication (OAuth 2.0 client) to do on his/her behalf. For example, an access\ntoken might grant the external application to see a user's pictures, but not\nupload new pictures on his/her behalf (which we assume a user could do herself)."),Object(r.b)("p",{parentName:"div"},"In an extreme case, the user could lie and grant an external application OAuth\nscopes that he himself doesn't have permission to (\"read all classified\ndocuments\"). The OAuth Access Token with those scopes wouldn't help the external\napplication read those documents because it can only act in the name of the\nuser, and that user doesn't have these access privileges."),Object(r.b)("p",{parentName:"div"},"The scope of an OAuth 2.0 scope defines the permission the token was granted by\nthe end-user. For example, a specific token might be allowed to access public\npictures, but not private ones. The granted permissions are established during\nthe consent screen."),Object(r.b)("p",{parentName:"div"},"ORY Hydra has pre-defined OAuth 2.0 Scope values:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"offline_access"),": Include this scope if you wish to receive a refresh token"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"openid"),": Include this scope if you wish to perform an OpenID Connect request.")),Object(r.b)("p",{parentName:"div"},"When performing an OAuth 2.0 Flow where the end-user is involved (e.g. Implicit\nor Authorize Code), the granted OAuth 2.0 Scope must be set when accepting the\nconsent using the ",Object(r.b)("inlineCode",{parentName:"p"},"grant_scope")," key."),Object(r.b)("h3",{parentName:"div",id:"oauth-20-access-token-audience"},"OAuth 2.0 Access Token Audience"),Object(r.b)("p",{parentName:"div"},"The Audience of an Access Token refers to the Resource Servers that this token\nis intended for. The audience usually refers to one or more URLs such as"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"https://api.mydomain.com/blog/posts")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"https://api.mydomain.com/users"))),Object(r.b)("p",{parentName:"div"},"but may also refer to a subset of resources:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"https://api.mydomain.com/tenants/foo/users"))),Object(r.b)("p",{parentName:"div"},"When performing an OAuth 2.0 Flow where the end-user is involved (e.g. Implicit\nor Authorize Code), the granted audience must be set when accepting the consent\nusing the ",Object(r.b)("inlineCode",{parentName:"p"},"grant_access_token_audience")," key. In most cases, it is ok to grant\nthe audience without user-interaction."),Object(r.b)("h3",{parentName:"div",id:"oauth-20-refresh-tokens"},"OAuth 2.0 Refresh Tokens"),Object(r.b)("p",{parentName:"div"},"OAuth 2.0 Refresh Tokens are issued only when an Authorize Code Flow\n(",Object(r.b)("inlineCode",{parentName:"p"},"response_type=code"),") or an OpenID Connect Hybrid Flow with an Authorize Code\nResponse Type (",Object(r.b)("inlineCode",{parentName:"p"},"response_type=code+..."),") is executed. OAuth 2.0 Refresh Tokens\nare not returned for Implicit or Client Credentials grants:"),Object(r.b)("p",{parentName:"div"},"Capable of issuing an OAuth 2.0 Refresh Token:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://ory-hydra.example/oauth2/auth?response_type=code&"},"https://ory-hydra.example/oauth2/auth?response_type=code&"),"..."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://ory-hydra.example/oauth2/auth?response_type=code+token&"},"https://ory-hydra.example/oauth2/auth?response_type=code+token&"),"..."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://ory-hydra.example/oauth2/auth?response_type=code+token+id_token&"},"https://ory-hydra.example/oauth2/auth?response_type=code+token+id_token&"),"..."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://ory-hydra.example/oauth2/auth?response_type=code+id_token&"},"https://ory-hydra.example/oauth2/auth?response_type=code+id_token&"),"...")),Object(r.b)("p",{parentName:"div"},"Will not issue an OAuth 2.0 Refresh Token:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://ory-hydra.example/oauth2/auth?response_type=token&"},"https://ory-hydra.example/oauth2/auth?response_type=token&"),"..."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://ory-hydra.example/oauth2/auth?response_type=token+id_token&"},"https://ory-hydra.example/oauth2/auth?response_type=token+id_token&"),"..."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://ory-hydra.example/oauth2/token?grant_type=client_redentials&"},"https://ory-hydra.example/oauth2/token?grant_type=client_redentials&"),"...")),Object(r.b)("p",{parentName:"div"},"Additionally, each OAuth 2.0 Client that wants to request an OAuth 2.0 Refresh\nToken must be allowed to request scope ",Object(r.b)("inlineCode",{parentName:"p"},"offline_access"),". When performing an\nOAuth 2.0 Authorize Code Flow, the ",Object(r.b)("inlineCode",{parentName:"p"},"offline_access")," value must be included in\nthe requested OAuth 2.0 Scope:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre"},"https://authorization-server.com/auth\n &scope=offline_access\n ?response_type=code\n &client_id=...\n &redirect_uri=...\n &state=...\n")),Object(r.b)("p",{parentName:"div"},"When ",Object(r.b)("a",{parentName:"p",href:"consent"},"accepting the consent request"),", ",Object(r.b)("inlineCode",{parentName:"p"},"offline_access")," must be in the\nlist of ",Object(r.b)("inlineCode",{parentName:"p"},"grant_scope"),":"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-js"},"fetch('https://hydra/oauth2/auth/requests/consent/accept?challenge=' + encodeURIComponent(challenge), {\n    method: 'PUT',\n    body: JSON.stringify(body),\n    headers: { 'Content-Type': 'application/json' }\n}).\nconst body = {\n    grant_scope: [\"offline_access\"],\n}\n")),Object(r.b)("p",{parentName:"div"},"Refresh Token Lifespan can be set using configuration key ",Object(r.b)("inlineCode",{parentName:"p"},"ttl.refresh_token"),".\nIf set to -1, Refresh Tokens never expire."),Object(r.b)("h3",{parentName:"div",id:"oauth-20-token-introspection"},"OAuth 2.0 Token Introspection"),Object(r.b)("p",{parentName:"div"},"OAuth2 Token Introspection is an ",Object(r.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7662"},"IETF"),"\nstandard. It defines a method for a protected resource to query an OAuth 2.0\nauthorization server to determine the active state of an OAuth 2.0 token and to\ndetermine meta-information about this token. OAuth 2.0 deployments can use this\nmethod to convey information about the authorization context of the token from\nthe authorization server to the protected resource."),Object(r.b)("p",{parentName:"div"},"The usage of an access token or client credentials is required to access the\nendpoint. ORY Hydra will however accept any valid token or valid credentials as\nthere is no built-in access control."))))}h.isMDXComponent=!0},570:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),h=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=h(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=h(n),d=a,b=l["".concat(i,".").concat(d)]||l[d]||u[d]||r;return n?o.a.createElement(b,s(s({ref:t},p),{},{components:n})):o.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);