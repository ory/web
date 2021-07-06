(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[93061],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43937:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],l={id:"integration",title:"Consuming OAuth 2.0"},c=void 0,s={unversionedId:"integration",id:"version-v1.4/integration",isDocsHomePage:!1,title:"Consuming OAuth 2.0",description:"This article explains how you to integrate ORY Hydra in your system.",source:"@site/versioned_docs/version-v1.4/integration.md",sourceDirName:".",slug:"/integration",permalink:"/hydra/docs/v1.4/integration",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.4/integration.md",version:"v1.4",lastUpdatedBy:"hackerman",lastUpdatedAt:1586178985,formattedLastUpdatedAt:"4/6/2020",frontMatter:{id:"integration",title:"Consuming OAuth 2.0"},sidebar:"version-v1.4/docs",previous:{title:"Advanced Topics",permalink:"/hydra/docs/v1.4/advanced"},next:{title:"Configuration",permalink:"/hydra/docs/v1.4/reference/configuration"}},u=[{value:"Overview",id:"overview",children:[{value:"Interacting with OAuth 2.0",id:"interacting-with-oauth-20",children:[]},{value:"Validating OAuth 2.0 Access Tokens",id:"validating-oauth-20-access-tokens",children:[]}]}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article explains how you to integrate ORY Hydra in your system."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"A high-level overview of the interaction between a client, ORY Hydra\n(Authorization Server) and an API looks as follows:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gIHBhcnRpY2lwYW50IENsaWVudFxuICBwYXJ0aWNpcGFudCBPUlkgSHlkcmFcbiAgcGFydGljaXBhbnQgQVBJXG4gIENsaWVudC0-Pk9SWSBIeWRyYTogUGVyZm9ybSBPQXV0aCAyLjAgRmxvd1xuICBPUlkgSHlkcmEtPj5DbGllbnQ6IEFjY2VzcyBUb2tlblxuICBDbGllbnQtPj5BUEk6IFJlcXVlc3Qgd2l0aCBBY2Nlc3MgVG9rZW5cbiAgQVBJLT5PUlkgSHlkcmE6IFZhbGlkYXRlcyBBY2Nlc3MgVG9rZW5cbiAgQVBJLT4-Q2xpZW50OiBSZXNwb25zZSIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9"},(0,i.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gIHBhcnRpY2lwYW50IENsaWVudFxuICBwYXJ0aWNpcGFudCBPUlkgSHlkcmFcbiAgcGFydGljaXBhbnQgQVBJXG4gIENsaWVudC0-Pk9SWSBIeWRyYTogUGVyZm9ybSBPQXV0aCAyLjAgRmxvd1xuICBPUlkgSHlkcmEtPj5DbGllbnQ6IEFjY2VzcyBUb2tlblxuICBDbGllbnQtPj5BUEk6IFJlcXVlc3Qgd2l0aCBBY2Nlc3MgVG9rZW5cbiAgQVBJLT5PUlkgSHlkcmE6IFZhbGlkYXRlcyBBY2Nlc3MgVG9rZW5cbiAgQVBJLT4-Q2xpZW50OiBSZXNwb25zZSIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",alt:"ORY Hydra OAuth2 Server Overview"}))),(0,i.kt)("p",null,"Most of what is explained here can also be seen as real-life examples in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/examples"},"ory/examples")," repository!"),(0,i.kt)("h3",{id:"interacting-with-oauth-20"},"Interacting with OAuth 2.0"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Please, do not write your own code to interact with OAuth 2.0"),". Use open\nsource & battle-tested libraries instead. Here are some examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NodeJS",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.passportjs.org/"},"passport")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/lelylan/simple-oauth2"},"simple-oauth2")))),(0,i.kt)("li",{parentName:"ul"},"Golang",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/golang/oauth2"},"golang/oauth2")," ","*",(0,i.kt)("em",{parentName:"li"},"recommended")))),(0,i.kt)("li",{parentName:"ul"},"PHP",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/thephpleague/oauth2-client"},"oauth2-client")))),(0,i.kt)("li",{parentName:"ul"},"Java",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-security-oauth"},"Spring Security OAuth"))))),(0,i.kt)("p",null,"For a full list of client libraries go ",(0,i.kt)("a",{parentName:"p",href:"https://oauth.net/code/"},"here"),"."),(0,i.kt)("h3",{id:"validating-oauth-20-access-tokens"},"Validating OAuth 2.0 Access Tokens"),(0,i.kt)("p",null,"The best and easiest way to validate OAuth 2.0 Access Tokens is by performing\nOAuth 2.0 Token Introspection. You can do this with the CLI\n",(0,i.kt)("inlineCode",{parentName:"p"},"hydra token introspect <token>"),"."),(0,i.kt)("h4",{id:"nodejs"},"NodeJS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const token = 'the access token'\nconst body = qs.stringify({ token })\n\nfetch('http://ory-hydra/oauth2/introspect', {\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n      'Content-Length': body.length\n    },\n    method: 'POST', body\n}).then(body => {\n    if (!body.active) {\n        // Token is not active/valid\n    } else if (body.token_type !== 'access_token') {\n        // Token is not an access token (probably a refresh token)\n    }\n\n    // token is active\n})\n")),(0,i.kt)("h4",{id:"curl"},"CURL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -X POST \\\n    -d 'token=<the-token>' \\\n    http://localhost:4445/oauth2/introspect\n")))}d.isMDXComponent=!0}}]);