(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(9),c=(n(0),n(291)),a={id:"common-oauth2-openid-connect-flows",title:"Using Common OAuth2 and OpenID Connect Flows"},i={id:"version-v1.6/guides/common-oauth2-openid-connect-flows",isDocsHomePage:!1,title:"Using Common OAuth2 and OpenID Connect Flows",description:"Authorize Code Flow with Refresh Token",source:"@site/versioned_docs/version-v1.6/guides/common-oauth2-openid-connect-flows.mdx",permalink:"/hydra/docs/guides/common-oauth2-openid-connect-flows",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.6/guides/common-oauth2-openid-connect-flows.mdx",version:"v1.6",sidebar:"version-v1.6/docs",previous:{title:"Creating OAuth 2.0 Clients",permalink:"/hydra/docs/guides/oauth2-clients"},next:{title:"Using OAuth2",permalink:"/hydra/docs/guides/using-oauth2"}},l=[{value:"Authorize Code Flow with Refresh Token",id:"authorize-code-flow-with-refresh-token",children:[]},{value:"Client Credentials Flow",id:"client-credentials-flow",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"authorize-code-flow-with-refresh-token"},"Authorize Code Flow with Refresh Token"),Object(c.b)("p",null,"The following command creates an OAuth 2.0 Client capable of executing the\nAuthorize Code Flow, requesting ID and Refresh Tokens and performing the OAuth\n2.0 Refresh Grant:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"hydra clients create \\\n    --endpoint http://ory-hydra:4445 \\\n    --id client-id \\\n    --secret client-secret \\\n    --grant-types authorization_code,refresh_token \\\n    --response-types code \\\n    --scope offline_access \\\n    --callbacks http://my-app.com/callback,http://my-other-app.com/callback\n")),Object(c.b)("p",null,"The OAuth 2.0 Client will be allowed to use values ",Object(c.b)("inlineCode",{parentName:"p"},"http://my-app.com/callback"),"\nand ",Object(c.b)("inlineCode",{parentName:"p"},"http://my-other-app.com/callback")," as ",Object(c.b)("inlineCode",{parentName:"p"},"redirect_url"),"."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"It is expected that the OAuth 2.0 Client sends its credentials using HTTP\nBasic Authorization.")),Object(c.b)("p",null,"If you wish to send credentials in the POST Body, add the following flag to the\ncommand above:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"    --token-endpoint-auth-method client_secret_post \\\n")),Object(c.b)("p",null,"The same can be achieved by setting\n",Object(c.b)("inlineCode",{parentName:"p"},'"token_endpoint_auth_method": "client_secret_post"')," in the request body of\n",Object(c.b)("inlineCode",{parentName:"p"},"POST /clients")," and ",Object(c.b)("inlineCode",{parentName:"p"},"PUT /clients/<id>"),"."),Object(c.b)("p",null,"To initiate the flow, redirect the user's browser to the OAuth2 Auth Code URL:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<a\n  href="https://ory-hydra:4444/oauth2/auth/?client_id=client-id&scope=offline_access&redirect_uri=http://my-app.com/callback"\n>\n  Connect with ...\n</a>\n')),Object(c.b)("h2",{id:"client-credentials-flow"},"Client Credentials Flow"),Object(c.b)("p",null,"To create a client only capable of performing the OAuth 2.0 Client Credentials\nflow, use:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"hydra clients create \\\n    --endpoint http://ory-hydra:4445 \\\n    --id my-client \\\n    --secret secret \\\n    -g client_credentials\n")))}p.isMDXComponent=!0},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,b=u["".concat(a,".").concat(h)]||u[h]||d[h]||c;return n?o.a.createElement(b,i(i({ref:t},s),{},{components:n})):o.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);