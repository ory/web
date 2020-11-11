(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{470:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=i,h=d["".concat(a,".").concat(p)]||d[p]||b[p]||o;return n?r.a.createElement(h,l(l({ref:t},s),{},{components:n})):r.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var i=n(2),r=n(6),o=(n(0),n(470)),a={id:"debug",title:"Common Problems",sidebar_label:"Common Problem Solutions"},l={unversionedId:"debug",id:"version-v1.9/debug",isDocsHomePage:!1,title:"Common Problems",description:"Spec-compliant OAuth 2.0 and OpenID Connect is hard. Let's take a look how to",source:"@site/versioned_docs/version-v1.9/debug.mdx",slug:"/debug",permalink:"/hydra/docs/debug",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/debug.mdx",version:"v1.9",lastUpdatedBy:"aeneasr",lastUpdatedAt:1603200622,sidebar_label:"Common Problem Solutions",sidebar:"version-v1.9/docs",previous:{title:"hydra version",permalink:"/hydra/docs/cli/hydra-version"},next:{title:"Common CSRF Pitfalls",permalink:"/hydra/docs/debug/csrf"}},c=[{value:"First Aid",id:"first-aid",children:[]},{value:"OpenID Connect ID Token missing",id:"openid-connect-id-token-missing",children:[]},{value:"OAuth 2.0 Refresh Token is missing",id:"oauth-20-refresh-token-is-missing",children:[]},{value:"OAuth 2.0 Authorize Code Flow fails",id:"oauth-20-authorize-code-flow-fails",children:[]},{value:"Refresh Token Flow fails",id:"refresh-token-flow-fails",children:[{value:"Wrong or misconfigured OAuth 2.0 Client",id:"wrong-or-misconfigured-oauth-20-client",children:[]},{value:"Redirect URL is not whitelisted",id:"redirect-url-is-not-whitelisted",children:[]}]}],s={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Spec-compliant OAuth 2.0 and OpenID Connect is hard. Let's take a look how to\nresolve certain issues."),Object(o.b)("h2",{id:"first-aid"},"First Aid"),Object(o.b)("p",null,"There are three things you can do to quickly debug any issue:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Check the logs. ORY Hydra has extensive logging and you will find the issue\nmost likely in the logs. Here is an example log line for a client that\nrequested a redirect URL that did not match the whitelisted redirect URLS:\n",Object(o.b)("inlineCode",{parentName:"li"},'time="2018-08-07T16:01:16Z" level=error msg="An error occurred" description="The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed" error=invalid_request hint="The \\"redirect_uri\\" parameter does not match any of the OAuth 2.0 Client\'s pre-registered redirect urls."')),Object(o.b)("li",{parentName:"ol"},"Check the URL because of two reasons:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"ORY Hydra sends ",Object(o.b)("inlineCode",{parentName:"li"},"error_hint"),", ",Object(o.b)("inlineCode",{parentName:"li"},"error"),", ",Object(o.b)("inlineCode",{parentName:"li"},"error_description"),", ",Object(o.b)("inlineCode",{parentName:"li"},"error_debug"),"\nin the URL. You will find the cause of the error most likely in there."),Object(o.b)("li",{parentName:"ol"},"You are maybe in the wrong URL. Make sure the host and port and path is\ncorrect. This happens often, especially when you're just starting out and\nexperimenting"))),Object(o.b)("li",{parentName:"ol"},"Set environment variable ",Object(o.b)("inlineCode",{parentName:"li"},"OAUTH2_EXPOSE_INTERNAL_ERRORS=true"),". Do not do this\nin production, it is possible, though unlikely, that important data leaks\nwith this. If set to true, ORY Hydra will set the ",Object(o.b)("inlineCode",{parentName:"li"},"error_debug")," query\nparameter if debug information is available."),Object(o.b)("li",{parentName:"ol"},"If you're just starting out and experimenting your docker set up does not\nwork at all:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Stop all containers"),Object(o.b)("li",{parentName:"ol"},"Remove them (unless you have something important running)"),Object(o.b)("li",{parentName:"ol"},"Retry. ",Object(o.b)("strong",{parentName:"li"},"This can help a lot if you are new to this!"))))),Object(o.b)("h2",{id:"openid-connect-id-token-missing"},"OpenID Connect ID Token missing"),Object(o.b)("p",null,"If you expect an OAuth 2.0 ID Token but are not receiving one, this can have\nmultiple reasons:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"You are using the ",Object(o.b)("inlineCode",{parentName:"li"},"client_credentials")," grant which can not return an ID\ntoken."),Object(o.b)("li",{parentName:"ol"},"You forgot to request the ",Object(o.b)("inlineCode",{parentName:"li"},"openid")," scope when calling\n",Object(o.b)("inlineCode",{parentName:"li"},"/oauth2/auth?response_type=code")," (Authorize Code Flow - correct would be\n",Object(o.b)("inlineCode",{parentName:"li"},"/oauth2/auth?response_type=code&scope=openid"),") or the ",Object(o.b)("inlineCode",{parentName:"li"},"id_token")," response\ntype when calling ",Object(o.b)("inlineCode",{parentName:"li"},"/oauth2/auth?response_type=token")," (Implicit/Hybrid flow -\ncorrect would be ",Object(o.b)("inlineCode",{parentName:"li"},"/oauth2/auth?response_type=token+id_token&scope=openid")," or\nany other combination such as ",Object(o.b)("inlineCode",{parentName:"li"},"response_type=id_token"),",\n",Object(o.b)("inlineCode",{parentName:"li"},"response_type=token+code+id_token"),")."),Object(o.b)("li",{parentName:"ol"},"You consent app did not send ",Object(o.b)("inlineCode",{parentName:"li"},'granted_scope: ["openid"]')," or when accepting\nthe consent request."),Object(o.b)("li",{parentName:"ol"},"The OAuth 2.0 Client making the request is not allowed to request the scope\n",Object(o.b)("inlineCode",{parentName:"li"},"openid"),".")),Object(o.b)("h2",{id:"oauth-20-refresh-token-is-missing"},"OAuth 2.0 Refresh Token is missing"),Object(o.b)("p",null,"If you expect an OAuth 2.0 Refresh Token but are not receiving one, this can\nhave multiple reasons:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"You are using an implicit or hybrid flow. These flows never return a refresh\ntoken!"),Object(o.b)("li",{parentName:"ol"},"You are using the ",Object(o.b)("inlineCode",{parentName:"li"},"client_credentials")," grant which can not return a refresh\ntoken."),Object(o.b)("li",{parentName:"ol"},"You forgot to request the ",Object(o.b)("inlineCode",{parentName:"li"},"offline")," or ",Object(o.b)("inlineCode",{parentName:"li"},"offline_access")," scope when calling\n",Object(o.b)("inlineCode",{parentName:"li"},"/oauth2/auth"),"."),Object(o.b)("li",{parentName:"ol"},"You consent app did not send ",Object(o.b)("inlineCode",{parentName:"li"},'granted_scope: ["offline"]')," or\n",Object(o.b)("inlineCode",{parentName:"li"},'granted_scope: ["offline_access"]')," when accepting the consent request."),Object(o.b)("li",{parentName:"ol"},"The OAuth 2.0 Client making the request is not allowed to request the scope\n",Object(o.b)("inlineCode",{parentName:"li"},"openid"),".")),Object(o.b)("h2",{id:"oauth-20-authorize-code-flow-fails"},"OAuth 2.0 Authorize Code Flow fails"),Object(o.b)("p",null,"The most likely cause is misconfiguration, summarized in the next sections."),Object(o.b)("h2",{id:"refresh-token-flow-fails"},"Refresh Token Flow fails"),Object(o.b)("p",null,"Refresh tokens can become invalid if abuse is detected, but coding issues may\nalso trigger this scenario, for example if a client makes multiple requests."),Object(o.b)("p",null,"Some common examples:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Replay of authorization code grant."),Object(o.b)("li",{parentName:"ol"},"Replay of refresh token grant.")),Object(o.b)("h3",{id:"wrong-or-misconfigured-oauth-20-client"},"Wrong or misconfigured OAuth 2.0 Client"),Object(o.b)("p",null,"You are using the wrong OAuth 2.0 Client or the OAuth 2.0 Client has a broken\nconfiguration. To check that you're using the right client, run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"hydra clients get --endpoint http://ory-hydra <the-client-id>\n")),Object(o.b)("p",null,"The result shows you the whole client (excluding its secret). Check that the\nvalues are correct. Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),'{\n        "client_id": "my-client",\n        "grant_types": [\n                "authorization_code"\n        ],\n        "jwks": {},\n        "redirect_uris": [\n                "http://127.0.0.1:5556/callback"\n        ],\n        "response_types": [\n                "code"\n        ],\n        "scope": "openid offline",\n        "subject_type": "pairwise",\n        "token_endpoint_auth_method": "client_secret_basic",\n        "userinfo_signed_response_alg": "none"\n}\n')),Object(o.b)("h3",{id:"redirect-url-is-not-whitelisted"},"Redirect URL is not whitelisted"),Object(o.b)("p",null,"A likely cause of your request failing is that you are using the wrong redirect\nURL. Assuming your OAuth 2.0 URL looks like\n",Object(o.b)("inlineCode",{parentName:"p"},"http://ory-hydra/oauth2/auth?client_id=my-client&...&redirect_uri=http://my-url/callback")),Object(o.b)("p",null,"The redirect URL ",Object(o.b)("inlineCode",{parentName:"p"},"http://my-url/callback")," must be whitelisted in your client\nconfiguration. The URLs must match ",Object(o.b)("strong",{parentName:"p"},"exactly"),". URL ",Object(o.b)("inlineCode",{parentName:"p"},"http://my-url/callback")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"http://my-url/callback?foo=bar")," are different URLs!"),Object(o.b)("p",null,"To see the whitelisted redirect_uris, check the client:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),'hydra clients get --endpoint http://ory-hydra <the-client-id>\n\n{\n        // ...\n        "redirect_uris": [\n                "http://127.0.0.1:5556/callback"\n        ],\n        // ...\n}\n')),Object(o.b)("p",null,"Here you see that ",Object(o.b)("inlineCode",{parentName:"p"},"http://my-url/callback")," is not in the list, which is why the\nrequest fails."))}u.isMDXComponent=!0}}]);