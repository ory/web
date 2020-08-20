(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var o=n(2),a=n(6),i=(n(0),n(309)),l=(n(310),n(316),n(317),n(318),{id:"logout",title:"Logout Flow"}),r={unversionedId:"concepts/logout",id:"version-v1.6/concepts/logout",isDocsHomePage:!1,title:"Logout Flow",description:"ORY Hydra supports",source:"@site/versioned_docs/version-v1.6/concepts/logout.mdx",permalink:"/hydra/docs/v1.6/concepts/logout",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.6/concepts/logout.mdx",version:"v1.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1595248858,sidebar:"version-v1.6/docs",previous:{title:"Consent Flow",permalink:"/hydra/docs/v1.6/concepts/consent"},next:{title:"JSON Web Key Sets",permalink:"/hydra/docs/v1.6/jwks"}},c=[{value:"Logout Flow",id:"logout-flow",children:[]},{value:"OpenID Connect Front-Channel Logout 1.0",id:"openid-connect-front-channel-logout-10",children:[]},{value:"OpenID Connect Back-Channel Logout 1.0",id:"openid-connect-back-channel-logout-10",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"ORY Hydra supports\n",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://openid.net/specs/openid-connect-frontchannel-1_0.html"}),"OpenID Connect Front-Channel Logout 1.0"),"\nand\n",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://openid.net/specs/openid-connect-backchannel-1_0.html"}),"OpenID Connect Back-Channel Logout 1.0"),"\nflows."),Object(i.b)("p",null,"A logout request may be initiated by the OpenID Provider (OP - ",Object(i.b)("strong",{parentName:"p"},"you"),") or by\nthe Relying Party (RP - the OAuth2 Client):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The OP-initiated flow does not need an ",Object(i.b)("inlineCode",{parentName:"li"},"id_token_hint"),", and it may neither\ndefine a ",Object(i.b)("inlineCode",{parentName:"li"},"state")," nor a ",Object(i.b)("inlineCode",{parentName:"li"},"post_logout_redirect_uri"),"."),Object(i.b)("li",{parentName:"ul"},"The RP-initiated flow needs an ",Object(i.b)("inlineCode",{parentName:"li"},"id_token_hint")," and may optionally define\n",Object(i.b)("inlineCode",{parentName:"li"},"state")," and ",Object(i.b)("inlineCode",{parentName:"li"},"post_logout_redirect_uri"),".")),Object(i.b)("p",null,"Both requests follow the same pattern as user login and user consent. Before the\nlogout is completed, the user is redirected to the ",Object(i.b)("strong",{parentName:"p"},"Logout UI")," (similar to\nLogin UI and Consent UI) to confirm the logout request."),Object(i.b)("p",null,"There are several possible pathways for executing this flow, explained in the\nfollowing diagram:"),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gICAgSVtHRVQgL29hdXRoMi9zZXNzaW9uL2xvZ291dF0tLT58aGFzIGlkX3Rva2VuX2hpbnQqfFJQSVtSUC1pbml0aWF0ZWQgbG9nb3V0XTtcbiAgICBJW0dFVCAvb2F1dGgyL3Nlc3Npb24vbG9nb3V0XS0tPnxkb2VzIG5vdCBoYXZlIGlkX3Rva2VuX2hpbnQqfE9QSVtPUC1pbml0aWF0ZWQgbG9nb3V0XVxuT1BJLS0-fGhhcyBzdGF0ZSp8RVtFcnJvcl1cbk9QSS0tPnxoYXMgcG9zdF9sb2dvdXRfdXJpKnxFW0Vycm9yXVxuT1BJLS0-fGhhcyB2YWxpZCBzZXNzaW9uIGNvb2tpZXxMVUlbTG9nb3V0IFVJIHdpdGggP2xvZ291dF9jaGFsbGVuZ2U9Li4uXVxuT1BJLS0-fGhhcyBubyB2YWxpZCBzZXNpb24gY29va2llfEVuZFtSZXR1cm4gdG8gcG9zdF9sb2dvdXRfdXJsKioqXVxuUlBJLS0-fGhhcyBhY3RpdmUgc2Vzc2lvbioqKip8TFVJXG5SUEktLT58bm8gYWN0aXZlIHNlc3Npb24qKioqfFJQSTJcbkxVSS0tPnx2ZXJpZnkgbG9nb3V0IHJlcXVlc3R8TFVJXG5MVUktLT58cmVkaXJlY3Qgd2l0aCBsb2dvdXRfdmVyaWZpZXIqfFJQSTJbIC9vYXV0aDIvc2Vzc2lvbnMvbG9nb3V0P2xvZ291dF92ZXJpZmllcj0uLi5dXG5SUEkyLS0-fGV4ZWN1dGUgZnJvbnQvYmFja2NoYW5uZWwgbG9nb3V0LCByZXZva2UgY29va2llfFJQSTJcblJQSTItLT58UmVkaXJlY3QgdG98RW5kIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifX0"}),Object(i.b)("img",Object(o.a)({parentName:"a"},{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gICAgSVtHRVQgL29hdXRoMi9zZXNzaW9uL2xvZ291dF0tLT58aGFzIGlkX3Rva2VuX2hpbnQqfFJQSVtSUC1pbml0aWF0ZWQgbG9nb3V0XTtcbiAgICBJW0dFVCAvb2F1dGgyL3Nlc3Npb24vbG9nb3V0XS0tPnxkb2VzIG5vdCBoYXZlIGlkX3Rva2VuX2hpbnQqfE9QSVtPUC1pbml0aWF0ZWQgbG9nb3V0XVxuT1BJLS0-fGhhcyBzdGF0ZSp8RVtFcnJvcl1cbk9QSS0tPnxoYXMgcG9zdF9sb2dvdXRfdXJpKnxFW0Vycm9yXVxuT1BJLS0-fGhhcyB2YWxpZCBzZXNzaW9uIGNvb2tpZXxMVUlbTG9nb3V0IFVJIHdpdGggP2xvZ291dF9jaGFsbGVuZ2U9Li4uXVxuT1BJLS0-fGhhcyBubyB2YWxpZCBzZXNpb24gY29va2llfEVuZFtSZXR1cm4gdG8gcG9zdF9sb2dvdXRfdXJsKioqXVxuUlBJLS0-fGhhcyBhY3RpdmUgc2Vzc2lvbioqKip8TFVJXG5SUEktLT58bm8gYWN0aXZlIHNlc3Npb24qKioqfFJQSTJcbkxVSS0tPnx2ZXJpZnkgbG9nb3V0IHJlcXVlc3R8TFVJXG5MVUktLT58cmVkaXJlY3Qgd2l0aCBsb2dvdXRfdmVyaWZpZXIqfFJQSTJbIC9vYXV0aDIvc2Vzc2lvbnMvbG9nb3V0P2xvZ291dF92ZXJpZmllcj0uLi5dXG5SUEkyLS0-fGV4ZWN1dGUgZnJvbnQvYmFja2NoYW5uZWwgbG9nb3V0LCByZXZva2UgY29va2llfFJQSTJcblJQSTItLT58UmVkaXJlY3QgdG98RW5kIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifX0",alt:"User Logout"})))),Object(i.b)("p",null,"Legend:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"*"),": This is a query parameter, for example\n",Object(i.b)("inlineCode",{parentName:"li"},"/oauth2/sessions/logout?id_token_hint=...")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"**"),' Here, an "active session" implies that there has been at least one login\nrequest completed with ',Object(i.b)("inlineCode",{parentName:"li"},"remember: true")," for that user. If that's not the case,\nthe system \"does not know\" what to do (because there has never been a session\nissued that was remembered - hence it's not possible to forget it)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"***"),': Here, the "valid session cookies" implies that the browser has a valid\nauthentication cookie when calling ',Object(i.b)("inlineCode",{parentName:"li"},"/oauth2/sessions/logout"),". If you have\nproblems at this step, check if there is a cookie\n",Object(i.b)("inlineCode",{parentName:"li"},"oauth2_authentication_session")," for the domain ORY Hydra is running at. ",Object(i.b)("strong",{parentName:"li"},"Do\nnot mix up IP (e.g. ",Object(i.b)("inlineCode",{parentName:"strong"},"127.0.0.1"),", ",Object(i.b)("inlineCode",{parentName:"strong"},"192.168.1.1"),") addresses and FQDNs (e.g.\n",Object(i.b)("inlineCode",{parentName:"strong"},"localhost"),", ",Object(i.b)("inlineCode",{parentName:"strong"},"google.com"),").")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"****"),": The ",Object(i.b)("inlineCode",{parentName:"li"},"post_logout_redirect")," defaults to the configuration value of\n",Object(i.b)("inlineCode",{parentName:"li"},"urls.post_logout_redirect"),". If it's an RP-initiated flow and a\n",Object(i.b)("inlineCode",{parentName:"li"},"post_logout_redirect_uri")," was set and that URL is in the array of the OAuth2\nClient's ",Object(i.b)("inlineCode",{parentName:"li"},"urls.post_logout_redirect"),", the browser will be redirected there\ninstead.")),Object(i.b)("h3",{id:"logout-flow"},"Logout Flow"),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgVXNlciBBZ2VudC0-Pk9SWSBIeWRyYTogQ2FsbHMgbG9nb3V0IGVuZHBvaW50XG4gICAgT1JZIEh5ZHJhLS0-Pk9SWSBIeWRyYTogVmFsaWRhdGVzIGxvZ291dCBlbmRwb2ludFxuICAgIE9SWSBIeWRyYS0-PkxvZ291dCBQcm92aWRlcjogUmVkaXJlY3RzIGVuZCB1c2VyIHdpdGggbG9nb3V0IGNoYWxsZW5nZVxuICAgIExvZ291dCBQcm92aWRlci0tPk9SWSBIeWRyYTogRmV0Y2hlcyBsb2dvdXQgcmVxdWVzdCBpbmZvXG4gICAgTG9nb3V0IFByb3ZpZGVyLS0-PkxvZ291dCBQcm92aWRlcjogQWNxdWlyZXMgdXNlciBjb25zZW50IGZvciBsb2dvdXQgKG9wdGlvbmFsKVxuICAgIExvZ291dCBQcm92aWRlci0tPk9SWSBIeWRyYTogSW5mb3JtcyB0aGF0IGxvZ291dCByZXF1ZXN0IGlzIGdyYW50ZWRcbiAgICBMb2dvdXQgUHJvdmlkZXItPj5PUlkgSHlkcmE6IFJlZGlyZWN0cyBlbmQgdXNlciB0byByZWRpcmVjdCB1cmwgd2l0aCBsb2dvdXQgY2hhbGxlbmdlXG4gICAgT1JZIEh5ZHJhLS0-Pk9SWSBIeWRyYTogUGVyZm9ybXMgbG9nb3V0IHJvdXRpbmVzXG4gICAgT1JZIEh5ZHJhLS0-VXNlciBBZ2VudDogUmVkaXJlY3RzIHRvIHNwZWNpZmllZCByZWRpcmVjdCB1cmwiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ"}),Object(i.b)("img",Object(o.a)({parentName:"a"},{src:"https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgVXNlciBBZ2VudC0-Pk9SWSBIeWRyYTogQ2FsbHMgbG9nb3V0IGVuZHBvaW50XG4gICAgT1JZIEh5ZHJhLS0-Pk9SWSBIeWRyYTogVmFsaWRhdGVzIGxvZ291dCBlbmRwb2ludFxuICAgIE9SWSBIeWRyYS0-PkxvZ291dCBQcm92aWRlcjogUmVkaXJlY3RzIGVuZCB1c2VyIHdpdGggbG9nb3V0IGNoYWxsZW5nZVxuICAgIExvZ291dCBQcm92aWRlci0tPk9SWSBIeWRyYTogRmV0Y2hlcyBsb2dvdXQgcmVxdWVzdCBpbmZvXG4gICAgTG9nb3V0IFByb3ZpZGVyLS0-PkxvZ291dCBQcm92aWRlcjogQWNxdWlyZXMgdXNlciBjb25zZW50IGZvciBsb2dvdXQgKG9wdGlvbmFsKVxuICAgIExvZ291dCBQcm92aWRlci0tPk9SWSBIeWRyYTogSW5mb3JtcyB0aGF0IGxvZ291dCByZXF1ZXN0IGlzIGdyYW50ZWRcbiAgICBMb2dvdXQgUHJvdmlkZXItPj5PUlkgSHlkcmE6IFJlZGlyZWN0cyBlbmQgdXNlciB0byByZWRpcmVjdCB1cmwgd2l0aCBsb2dvdXQgY2hhbGxlbmdlXG4gICAgT1JZIEh5ZHJhLS0-Pk9SWSBIeWRyYTogUGVyZm9ybXMgbG9nb3V0IHJvdXRpbmVzXG4gICAgT1JZIEh5ZHJhLS0-VXNlciBBZ2VudDogUmVkaXJlY3RzIHRvIHNwZWNpZmllZCByZWRpcmVjdCB1cmwiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ",alt:"User Logout Flow Diagram"})))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"A user-agent (browser) requests the logout endpoint\n(",Object(i.b)("inlineCode",{parentName:"li"},"/oauth2/sessions/logout"),"). If the request is done on behalf of a RP:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The URL query MUST contain an ID Token issued by ORY Hydra as the\n",Object(i.b)("inlineCode",{parentName:"li"},"id_token_hint"),": ",Object(i.b)("inlineCode",{parentName:"li"},"/oauth2/sessions/logout?id_token_hint=...")),Object(i.b)("li",{parentName:"ul"},"The URL query MAY contain key ",Object(i.b)("inlineCode",{parentName:"li"},"post_logout_redirect_uri")," indicating where\nthe user agent should be redirected after the logout completed\nsuccessfully. Each OAuth 2.0 Client can whitelist a list of URIs that can\nbe used as the value using the ",Object(i.b)("inlineCode",{parentName:"li"},"post_logout_redirect_uris")," metadata field:\n",Object(i.b)("inlineCode",{parentName:"li"},"/oauth2/sessions/logout?id_token_hint=...&post_logout_redirect_uri=https://i-must-be-whitelisted/")),Object(i.b)("li",{parentName:"ul"},"If ",Object(i.b)("inlineCode",{parentName:"li"},"post_logout_redirect_uri")," is set, the URL query SHOULD contain a\n",Object(i.b)("inlineCode",{parentName:"li"},"state")," value. On successful redirection, this state value will be appended\nto the ",Object(i.b)("inlineCode",{parentName:"li"},"post_logout_redirect_uri"),". The functionality is equal to the\n",Object(i.b)("inlineCode",{parentName:"li"},"state")," parameter when performing OAuth2 flows."))),Object(i.b)("li",{parentName:"ol"},"The user-agent is redirected to the logout provider URL (configuration item\n",Object(i.b)("inlineCode",{parentName:"li"},"urls.logout"),") and contains a challenge:\n",Object(i.b)("inlineCode",{parentName:"li"},"https://my-logout-provider/logout?challenge=...")),Object(i.b)("li",{parentName:"ol"},"The logout provider uses the ",Object(i.b)("inlineCode",{parentName:"li"},"challenge")," query parameter to fetch metadata\nabout the request. The logout provider may choose to show a UI where the user\nhas to accept the logout request. Alternatively, the logout provider MAY\nchoose to silently accept the logout request."),Object(i.b)("li",{parentName:"ol"},"To accept the logout request, the logout provider makes a ",Object(i.b)("inlineCode",{parentName:"li"},"PUT")," call to\n",Object(i.b)("inlineCode",{parentName:"li"},"/oauth2/auth/requests/logout/accept?challenge=..."),". No request body is\nrequired."),Object(i.b)("li",{parentName:"ol"},"The response contains a ",Object(i.b)("inlineCode",{parentName:"li"},"redirect_to")," value where the logout provider\nredirects the user back to."),Object(i.b)("li",{parentName:"ol"},"ORY Hydra performs OpenID Connect Front- and Back-Channel logout."),Object(i.b)("li",{parentName:"ol"},"The user agent is being redirected to a specified redirect URL. This may\neither be the default redirect URL set by ",Object(i.b)("inlineCode",{parentName:"li"},"urls.post_logout_redirect")," or to\nthe value specified by query parameter ",Object(i.b)("inlineCode",{parentName:"li"},"post_logout_redirect_uri"),".")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"This endpoint does not remove any Access/Refresh Tokens.")),Object(i.b)("h4",{id:"logout-provider-example-nodejs-pseudo-code"},"Logout Provider Example (NodeJS Pseudo-code)"),Object(i.b)("p",null,"Following step 1 from the flow above, the user-agent is redirected to the logout\nprovider (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"https://my-logout-provider/logout?challenge=..."),"). Next, the\nlogout provider fetches information about the logout request:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-node"}),"// This is node-js pseudo code and will not work if you copy it 1:1\n\nchallenge = req.url.query.logout_challenge\n\nfetch(\n  'https://hydra/oauth2/auth/requests/logout?' +\n    querystring.stringify({ logout_challenge: challenge })\n)\n  .then(function (response) {\n    return response.json()\n  })\n  .then(function (response) {\n    // ...\n  })\n")),Object(i.b)("p",null,"The server response is a JSON object with the following keys:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'{\n    // The user for whom the logout was request.\n    "subject": "user-id",\n\n    // The login session ID that was requested to log out.\n    "sid": "abc..",\n\n    // The original request URL.\n    "request_url": "https://hydra/oauth2/sessions/logout?id_token_hint=...",\n\n    // True if the request was initiated by a Relying Party (RP) / OAuth 2.0 Client. False otherwise.\n    "rp_initiated": true|false\n}\n')),Object(i.b)("p",null,"Next, the logout provider should decide if the end-user should perform a UI\naction such as confirming the logout request. It is RECOMMENDED to request\nlogout confirmation from the end-user when ",Object(i.b)("inlineCode",{parentName:"p"},"rp_initiated")," is set to true."),Object(i.b)("p",null,"When the logout provider decides to accept the logout request, the flow is\ncompleted as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-node"}),"fetch(\n  'https://hydra/oauth2/auth/requests/logout/accept?' +\n    querystring.stringify({ logout_challenge: challenge }),\n  {\n    method: 'PUT'\n  }\n)\n  .then(function (response) {\n    return response.json()\n  })\n  .then(function (response) {\n    // The response will contain a `redirect_to` key which contains the URL where the user's user agent must be redirected to next.\n    res.redirect(response.redirect_to)\n  })\n")),Object(i.b)("p",null,"You can also reject a logout request (e.g. if the user chose to not log out):"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-node"}),"fetch(\n  'https://hydra/oauth2/auth/requests/logout/reject?' +\n    querystring.stringify({ logout_challenge: challenge }),\n  {\n    method: 'PUT'\n  }\n).then(function (response) {\n  // Now you can do whatever you want - redirect the user back to your home page or whatever comes to mind.\n})\n")),Object(i.b)("p",null,"If the logout request was granted and the user agent redirected back to ORY\nHydra, all OpenID Connect Front-/Back-channel logout flows (if set) will be\nperformed and the user will be redirect back to his/her final destination."),Object(i.b)("h3",{id:"openid-connect-front-channel-logout-10"},Object(i.b)("a",Object(o.a)({parentName:"h3"},{href:"https://openid.net/specs/openid-connect-frontchannel-1_0.html"}),"OpenID Connect Front-Channel Logout 1.0")),Object(i.b)("p",null,"In summary\n(",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://openid.net/specs/openid-connect-frontchannel-1_0.html"}),"read the spec"),")\nthis feature allows an OAuth 2.0 Client to register fields\n",Object(i.b)("inlineCode",{parentName:"p"},"frontchannel_logout_uri")," and ",Object(i.b)("inlineCode",{parentName:"p"},"frontchannel_logout_session_required"),"."),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"frontchannel_logout_uri")," is set to a valid URL (the host, port, path must\nall match those of one of the Redirect URIs), ORY Hydra will redirect the\nuser-agent (typically browser) to that URL after a logout occurred. This allows\nthe OAuth 2.0 Client Application to log out the end-user in its own system as\nwell - for example by deleting a Cookie or otherwise invalidating the user\nsession."),Object(i.b)("p",null,"ORY Hydra always appends query parameters values ",Object(i.b)("inlineCode",{parentName:"p"},"iss")," and ",Object(i.b)("inlineCode",{parentName:"p"},"sid")," to the\nFront-Channel Logout URI, for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"https://rp.example.org/frontchannel_logout\n  ?iss=https://server.example.com\n  &sid=08a5019c-17e1-4977-8f42-65a12843ea02\n")),Object(i.b)("p",null,"Each OpenID Connect ID Token is issued with a ",Object(i.b)("inlineCode",{parentName:"p"},"sid")," claim that will match the\n",Object(i.b)("inlineCode",{parentName:"p"},"sid")," value from the Front-Channel Logout URI."),Object(i.b)("p",null,"ORY Hydra will automatically execute the required HTTP Redirects to make this\nwork. No extra work is required."),Object(i.b)("h3",{id:"openid-connect-back-channel-logout-10"},Object(i.b)("a",Object(o.a)({parentName:"h3"},{href:"https://openid.net/specs/openid-connect-backchannel-1_0.html"}),"OpenID Connect Back-Channel Logout 1.0")),Object(i.b)("p",null,"In summary\n(",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://openid.net/specs/openid-connect-backchannel-1_0.html"}),"read the spec"),")\nthis feature allows an OAuth 2.0 Client to register fields\n",Object(i.b)("inlineCode",{parentName:"p"},"backchannel_logout_uri")," and ",Object(i.b)("inlineCode",{parentName:"p"},"backchannel_logout_session_required"),"."),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"backchannel_logout_uri")," is set to a valid URL, a HTTP Post request with\nContent-Type ",Object(i.b)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," and a ",Object(i.b)("inlineCode",{parentName:"p"},"logout_token")," will be\nmade to that URL when a end-user logs out. The ",Object(i.b)("inlineCode",{parentName:"p"},"logout_token")," is a JWT signed\nwith the same key that is used to sign OpenID Connect ID Tokens. You should thus\nvalidate the ",Object(i.b)("inlineCode",{parentName:"p"},"logout_token")," using the ID Token Public Key (can be fetched from\n",Object(i.b)("inlineCode",{parentName:"p"},"/.well-known/jwks.json"),"). The ",Object(i.b)("inlineCode",{parentName:"p"},"logout_token")," contains the following claims:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"iss")," - Issuer Identifier, as specified in Section 2 of ","[OpenID.Core]","."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"aud")," - Audience(s), as specified in Section 2 of ","[OpenID.Core]","."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"iat")," - Issued at time, as specified in Section 2 of ","[OpenID.Core]","."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"jti")," - Unique identifier for the token, as specified in Section 9 of\n","[OpenID.Core]","."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"events")," - Claim whose value is a JSON object containing the member name\n",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"http://schemas.openid.net/event/backchannel-logout"}),"http://schemas.openid.net/event/backchannel-logout"),". This declares that the JWT\nis a Logout Token. The corresponding member value MUST be a JSON object and\nSHOULD be the empty JSON object {}."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sid")," - Session ID - String identifier for a Session. This represents a\nSession of a User Agent or device for a logged-in End-User at an RP. Different\nsid values are used to identify distinct sessions at an OP. The sid value need\nonly be unique in the context of a particular issuer. Its contents are opaque\nto the RP. Its syntax is the same as an OAuth 2.0 Client Identifier.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'{\n  "iss": "https://server.example.com",\n  "aud": "s6BhdRkqt3",\n  "iat": 1471566154,\n  "jti": "bWJq",\n  "sid": "08a5019c-17e1-4977-8f42-65a12843ea02",\n  "events": {\n     "http://schemas.openid.net/event/backchannel-logout": {}\n   }\n}\n')),Object(i.b)("p",null,"An exemplary Back-Channel Logout Request looks as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"POST /backchannel_logout HTTP/1.1\nHost: rp.example.org\nContent-Type: application/x-www-form-urlencoded\n\nlogout_token=eyJhbGci ... .eyJpc3Mi ... .T3BlbklE ...\n")),Object(i.b)("p",null,"The Logout Token must be validated as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Validate the Logout Token signature in the same way that an ID Token signature\nis validated, with the following refinements."),Object(i.b)("li",{parentName:"ul"},"Validate the iss, aud, and iat Claims in the same way they are validated in ID\nTokens."),Object(i.b)("li",{parentName:"ul"},"Verify that the Logout Token contains a sid Claim."),Object(i.b)("li",{parentName:"ul"},"Verify that the Logout Token contains an events Claim whose value is JSON\nobject containing the member name\n",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"http://schemas.openid.net/event/backchannel-logout"}),"http://schemas.openid.net/event/backchannel-logout"),"."),Object(i.b)("li",{parentName:"ul"},"Verify that the Logout Token does not contain a nonce Claim."),Object(i.b)("li",{parentName:"ul"},"Optionally verify that another Logout Token with the same jti value has not\nbeen recently received.")),Object(i.b)("p",null,"The endpoint then returns a HTTP 200 OK response. Cache-Control headers should\nbe set to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"Cache-Control: no-cache, no-store\nPragma: no-cache\n")),Object(i.b)("p",null,"Because the OpenID Connect Back-Channel Logout Flow is not executed using the\nuser-agent (e.g. Browser) but from ORY Hydra directly, the session cookie of the\nend-user will not be available to the OAuth 2.0 Client and the session has to be\ninvalidated by some other means (e.g. by blacklisting the session ID)."))}b.isMDXComponent=!0},316:function(e,t,n){"use strict";var o=n(0),a=n.n(o),i=n(323),l=n.n(i),r=n(48),c=n.n(r),s=n(319),b=n.n(s);l.a.initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});t.a=function(e){var t,n=e.chart,i=Object(o.useState)(!1),r=i[0],s=i[1],d=Object(o.useState)(void 0),u=d[0],p=d[1],h=Object(o.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],m=function(){return s(!r)};return Object(o.useEffect)((function(){l.a.render(h,n,(function(e){p(e)}))}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{onClick:m,className:b()(c.a.graph,c.a.pointer),dangerouslySetInnerHTML:{__html:u}}),a.a.createElement("div",{onClick:m,className:b()(c.a.overlay,c.a.pointer,c.a.graph,(t={},t[c.a.visible]=r,t))},a.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:b()(c.a.backdrop,c.a.graph),dangerouslySetInnerHTML:{__html:u}})))}},325:function(e,t){},326:function(e,t){},327:function(e,t){},328:function(e,t){},329:function(e,t){},330:function(e,t){},331:function(e,t){},332:function(e,t){},333:function(e,t){},334:function(e,t){},335:function(e,t){},336:function(e,t){},337:function(e,t){},338:function(e,t,n){var o={"./locale":315,"./locale.js":315};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=i,e.exports=a,a.id=338}}]);