(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{336:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),i=(n(0),n(568)),o={id:"migrating-from-MITREid",title:"Migrating from MITREid"},c={unversionedId:"guides/migrating-from-MITREid",id:"version-v1.10/guides/migrating-from-MITREid",isDocsHomePage:!1,title:"Migrating from MITREid",description:"Please note this page doesn't pretend to be a step-by-step guide.",source:"@site/versioned_docs/version-v1.10/guides/migrating-from-mitreid.mdx",slug:"/guides/migrating-from-MITREid",permalink:"/hydra/docs/guides/migrating-from-MITREid",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/guides/migrating-from-mitreid.mdx",version:"v1.10",lastUpdatedBy:"aeneasr",lastUpdatedAt:1616672187,formattedLastUpdatedAt:"3/25/2021",sidebar:"version-v1.10/docs",previous:{title:"Gitlab Hydra integration",permalink:"/hydra/docs/guides/gitlab"},next:{title:"Advanced OAuth2 and OpenID Connect Flows",permalink:"/hydra/docs/advanced"}},s=[],d={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Please note this page doesn't pretend to be a step-by-step guide."))),Object(i.b)("p",null,"This piece of documentation will try to give you some hints to move your current\nMITREid instance to Hydra."),Object(i.b)("h4",{id:"scopes"},"Scopes"),Object(i.b)("p",null,"Scopes in hydra doesn't have a relational entity, every client defines its own\narray of scopes."),Object(i.b)("h4",{id:"scope-vs-scp"},"Scope vs Scp"),Object(i.b)("p",null,"Since hydra uses scp as the scope claim, you have to be sure your client\nlibraries are capable to use both, we had to modify the behavior of our version\nof spring.security.oauth2 library following the example:\n",Object(i.b)("a",{parentName:"p",href:"https://dev.to/toojannarong/spring-security-with-jwt-the-easiest-way-2i43"},"Custom claim")),Object(i.b)("h4",{id:"query-string-parameters"},"Query String Parameters"),Object(i.b)("p",null,"MITREid doesn't mind if the parameters are passed in the body or in the query\nstring. In order to work with hydra, you have to migrate all your calls that are\nusing QS params to Body Parameters."),Object(i.b)("p",null,"For example, you should move from"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'curl -X POST  http://127.0.0.1/mitreid-server/token?grant_type=client_credentials -H "Authorization: $AUTH" ...\n')),Object(i.b)("p",null,"to"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"curl -X POST  http://127.0.0.1/mitreid-server/token -H \"Authorization: $AUTH\" --data-urlencode 'grant_type=client_credentials' ...\n")),Object(i.b)("h4",{id:"scope-strategies-if-no-scope-is-requested"},"Scope Strategies if no scope is requested"),Object(i.b)("p",null,"The last pitfall found during the migration was the difference of behaviour when\nperforming the ",Object(i.b)("inlineCode",{parentName:"p"},"client_credentials")," grant without specifying a scope. By default\nORY Hydra returns an empty scope, but MITREid grants the default scope for the\nOAuth 2.0 Client."),Object(i.b)("p",null,"To change the behaviour in ORY Hydra, either set environment variable\n",Object(i.b)("inlineCode",{parentName:"p"},"OAUTH2_CLIENT_CREDENTIALS_DEFAULT_GRANT_SCOPE=true")," or alternatively add to ORY\nHydra's configuration file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/hydra.yaml"',title:'"path/to/hydra.yaml"'},"oauth2:\n  client_credentials:\n    default_grant_allowed_scope: true\n")),Object(i.b)("p",null,"Once set, ORY Hydra will behave like MITREid and grant the OAuth2 Client's scope\nwhen an empty scope is requested for a ",Object(i.b)("inlineCode",{parentName:"p"},"client_credentials")," grant."))}l.isMDXComponent=!0},568:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,b=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return n?a.a.createElement(b,c(c({ref:t},d),{},{components:n})):a.a.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);