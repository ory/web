/*! For license information please see cb916f9b.72b6ea75.js.LICENSE.txt */
(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[4530],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return c},kt:function(){return g}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},s=Object.keys(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),u=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,s=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=u(r),g=o,f=d["".concat(l,".").concat(g)]||d[g]||p[g]||s;return r?n.createElement(f,a(a({ref:e},c),{},{components:r})):n.createElement(f,a({ref:e},c))}));function g(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:o,a[1]=i;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},79207:function(t,e,r){"use strict";r.d(e,{Z:function(){return d},H:function(){return c}});var n=r(67294),o=r(94184),s=r.n(o),a="pills_1NSF",i="pills__item_15EC",l="pills__item--active_2DfX",u={selected:"selected_2XW-",question:"question_3eMI",kratos:"kratos_3n2G",secrets:"secrets_3_BG",config:"config_2-qD",database:"database_34DA",ecosystem:"ecosystem_2lUi",user:"user_2nek",validation:"validation_vM2g",traits:"traits_YOif",registration:"registration_3q44",cors:"cors_ni6s",feature:"feature_oQRp",hooks:"hooks_1zdb",migration:"migration_oZRL",security:"security_1KRP",oidc:"oidc_RaDq",spa:"spa_2vnS"},c=function(t){var e=t.children,r=t.tags;return n.createElement("div",{className:s().apply(void 0,[u.question].concat(r.map((function(t){return u[t]}))))},e)},p=function(t){var e,r,o=t.tag,c=t.isSelected,p=t.children,d=t.toggleSelected;return n.createElement("li",{className:s()((e={},e[u.selected]=c,e),u[o],a,i,(r={},r[l]=c,r)),onClick:d},p)},d=function(t){var e=t.tags,r=t.initiallyDisabled,o=(0,n.useState)(e.filter((function(t){return!r.includes(t)}))),s=o[0],a=o[1];return n.createElement(n.Fragment,null,e.map((function(t){return n.createElement(p,{key:t,tag:t,isSelected:s.find((function(e){return e===t})),toggleSelected:function(){s.find((function(e){return e===t}))?a(s.filter((function(e){return e!==t}))):a([].concat(s,[t]))}},"#",t)})))}},92782:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(22122),o=r(19756),s=(r(67294),r(3905)),a=r(79207),i={id:"faq",title:"Frequently Asked Questions (FAQ)"},l={unversionedId:"faq",id:"version-v0.6/faq",isDocsHomePage:!1,title:"Frequently Asked Questions (FAQ)",description:"<FaqTags",source:"@site/versioned_docs/version-v0.6/faq.mdx",sourceDirName:".",slug:"/faq",permalink:"/kratos/docs/faq",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/faq.mdx",version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619690398,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"faq",title:"Frequently Asked Questions (FAQ)"},sidebar:"version-v0.6/docs",previous:{title:"Contribution Guidelines",permalink:"/kratos/docs/contributing"},next:{title:"Overview",permalink:"/kratos/docs/concepts/index"}},u=[],c={toc:u};function p(t){var e=t.components,r=(0,o.Z)(t,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)(a.Z,{tags:["kratos","secrets","config","database","ecosystem","user","validation","traits","registration","cors","feature","hooks","migration","security","oidc","spa"],initiallyDisabled:["kratos"],mdxType:"FaqTags"}),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)(a.H,{tags:["kratos","secrets","config"],mdxType:"Question"},"#kratos #secrets #config",(0,s.kt)("p",null,(0,s.kt)("strong",null,"Q"),": Is it possible to pass multiple system.secret values through the ENV, or do you have to use a config file for that?"),(0,s.kt)("p",null,(0,s.kt)("strong",null,"A"),": Yes, you can set them as environmental variable, you just have to separate them using a ",(0,s.kt)("code",null,","),". More info on these conventions in the documentation:"," ",(0,s.kt)("a",{href:"https://www.ory.sh/docs/ecosystem/configuring/#stringnumeric-arrays"},"Setting configuration values via environmental variables"),".")),(0,s.kt)("br",null),(0,s.kt)(a.H,{tags:["kratos","database"],mdxType:"Question"},"#kratos #database",(0,s.kt)("p",null,(0,s.kt)("strong",null,"Q"),": We want to seperate our customers and employees, so we store them in different databases. But we would like to have them use the same login dialog for our portal. How can I achieve that with Ory Kratos?"),(0,s.kt)("p",null,(0,s.kt)("strong",null,"A"),": You can deploy Ory Kratos two times, and use the same login UI pointing to two different Kratos login endpoints -"," ",(0,s.kt)("code",null,"/login/customer")," or ",(0,s.kt)("code",null,"/login/employee"),", either by having two different login routes, or by adding some logic to your login UI that reroutes customers to ",(0,s.kt)("code",null,"/login/customer")," and employees to"," ",(0,s.kt)("code",null,"/login/employee"),". So you define the same login or registration UI URLs in both of the Kratos configurations. You may need to tell your login/registration UI which Kratos it is supposed to talk to. The instances are cheap to deploy and the databases are completely isolated from each other. For example something like ",(0,s.kt)("code",null,"/login/customer")," and"," ",(0,s.kt)("code",null,"/login/employee"),".")),(0,s.kt)("br",null),(0,s.kt)(a.H,{tags:["kratos","ecosystem"],mdxType:"Question"},"#kratos #ecosystem",(0,s.kt)("p",null,(0,s.kt)("strong",null,"Q"),": Is the code audited by an independent entity and is there a bug bounty program?"),(0,s.kt)("p",null,(0,s.kt)("strong",null,"A"),": We will do that when the APIs and core are stable. A bug bounty program is in the making but not done yet. If you are a security researcher and interested in working on Kratos, please reach out to"," ",(0,s.kt)("a",{href:"mailto:security@ory.sh"},"security@ory.sh"),".")),(0,s.kt)("br",null),(0,s.kt)(a.H,{tags:["kratos","user","validation","traits"],mdxType:"Question"},"#kratos #user #validation #traits",(0,s.kt)("p",null,(0,s.kt)("strong",null,"Q"),": What is the correct flow to sanitize the username and make sure it satisfies a specific regex (e.g. only alphanumeric characters)?"),(0,s.kt)("p",null,(0,s.kt)("strong",null,"A"),": In the identity json schema using"," ",(0,s.kt)("a",{href:"https://json-schema.org/understanding-json-schema/reference/string.html#regular-expressions"},"Regular Expressions"),". To sanitize usernames coming from third-party OIDC providers like Google or GitHub you write ",(0,s.kt)("a",{href:"https://jsonnet.org"},"jsonnet code"),".")),(0,s.kt)("br",null),(0,s.kt)(a.H,{tags:["kratos","registration","cors"],mdxType:"Question"},"#kratos #registration #cors",(0,s.kt)("p",null,(0,s.kt)("strong",null,"Q"),": I am currently trying to get the Kratos registration flow working on a react app that I am creating. I am having CORS issues with the completeSelfServiceRegistrationFlowWithPasswordMethod call when using the @oryd/kratos-client JS package."),(0,s.kt)("p",null,(0,s.kt)("strong",null,"A"),": You are using AJAX to submit the form. This is not supported right now. You need to submit a regular HTML form. Do not use AJAX. Do not use fetch. Let the user click the submit button and do not do anything. AJAX will be better supported starting Kratos v0.6.")),(0,s.kt)("br",null),(0,s.kt)(a.H,{tags:["kratos","traits","feature"],mdxType:"Question"},"#kratos #traits #feature",(0,s.kt)("p",null,(0,s.kt)("strong",null,"Q"),": Is the ability to freeze certain identity fields after registration anywhere on the roadmap? Also I want read-only or hidden user-specific data. Can I use traits for that? Example: Some of our identity trait fields may be the subject to identity validation (",(0,s.kt)("a",{href:"https://en.wikipedia.org/wiki/Know_your_customer"},"know your customer"),"). Once they are validated we do not allow the identity to be edited by the end-user."),(0,s.kt)("p",null,(0,s.kt)("strong",null,"A"),": Currently traits are visible to the user and also editable by them. It makes sense to have read-only and/or hidden traits for users, but we can not give an exact timing when this will be available. There is an open issue for this feature:",(0,s.kt)("a",{href:"https://github.com/ory/kratos/issues/47"},"Issue"),".")),(0,s.kt)("br",null),(0,s.kt)(a.H,{tags:["kratos","hooks","feature"],mdxType:"Question"},"#kratos #hooks #feature",(0,s.kt)("p",null,(0,s.kt)("strong",null,"Q"),": Are there plans to provide hooks on registration/login/logouts/identity updates?"),(0,s.kt)("p",null,(0,s.kt)("strong",null,"A"),": Yes! See these issues for more information on the current progress:"," ",(0,s.kt)("a",{href:"https://github.com/ory/kratos/issues/271"},"Feature Request: Webhooks")," ","and"," ",(0,s.kt)("a",{href:"https://github.com/ory/kratos/issues/30"},"Implement RPC After Hook"),".")),(0,s.kt)("br",null),(0,s.kt)(a.H,{tags:["kratos","registration","traits"],mdxType:"Question"},"#kratos #registration #traits",(0,s.kt)("p",null,(0,s.kt)("strong",null,"Q"),": How can I verify beforehand if a username is available during registration?"),(0,s.kt)("p",null,(0,s.kt)("strong",null,"A"),": You can not right now. It would allow account enumeration attacks. See also the"," ",(0,s.kt)("a",{href:"https://www.ory.sh/kratos/docs/concepts/security/#account-enumeration"},"section in the documentation"),".")),(0,s.kt)("br",null),(0,s.kt)(a.H,{tags:["kratos","database","migration","feature"],mdxType:"Question"},"#kratos #database #migration #feature",(0,s.kt)("p",null,(0,s.kt)("strong",null,"Q"),": Do have plans to support user migration scenarios similar to auth0 automatic migrations? E.g. configure a callback to the legacy system when you cannot find the corresponding user, and store the identity on successful legacy system response."),(0,s.kt)("p",null,(0,s.kt)("strong",null,"A"),": No plans yet, but migration is an important piece of the puzzle. We will focus on importing existing users first. An alternative to callback and custom code is fronting the legacy system with Ory Hydra (OAuth2/OIDC Server) and then using that as an upstream in Ory Kratos.")),(0,s.kt)("br",null),(0,s.kt)(a.H,{tags:["kratos","security"],mdxType:"Question"},"#kratos #security",(0,s.kt)("p",null,(0,s.kt)("strong",null,"Q"),": Do you have protection or plans for brute force attacks i.e. repetitive login attempts? Leaked database scans?"),(0,s.kt)("p",null,(0,s.kt)("strong",null,"A"),": See the following document:"," ",(0,s.kt)("a",{href:"https://www.ory.sh/kratos/docs/concepts/security#passwords"},"Ory Kratos Security Measures"))),(0,s.kt)("br",null),(0,s.kt)(a.H,{tags:["kratos","oidc","traits"],mdxType:"Question"},"#kratos #oidc #traits",(0,s.kt)("p",null,(0,s.kt)("strong",null,"Q"),": How do I append a random suffix e.g. a number to OIDC usernames if the username returned by a provider is already taken."),(0,s.kt)("p",null,(0,s.kt)("strong",null,"A"),": You can use the md5 function built in the"," ",(0,s.kt)("a",{href:"https://jsonnet.org/ref/stdlib.html"},"jsonnet standart library"),". See the following issue as well:"," ",(0,s.kt)("a",{href:"https://github.com/ory/kratos/issues/988"},"Add random function to the jsonnet library"),".")),(0,s.kt)("br",null),(0,s.kt)(a.H,{tags:["kratos","spa"],mdxType:"Question"},"#kratos #spa",(0,s.kt)("p",null,(0,s.kt)("strong",null,"Q"),": I want to implement a single-page-app (SPA). Is this possible with Ory Kratos?"),(0,s.kt)("p",null,(0,s.kt)("strong",null,"A"),": Yes, definitely. We do not have an example-app (yet). Also, you might not get around some page-reloads as you definitely should, as it is not possible to use the API flows in the browser. This is important to prevent"," ",(0,s.kt)("a",{href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery"},"CSRF attacks"),". So hopefully you are not too strict with your SPA. A sample app is being worked on here:"," ",(0,s.kt)("a",{href:"https://github.com/ory/kratos/issues/668"},"Implement React SPA sample app"),".")),(0,s.kt)("br",null))}p.isMDXComponent=!0},94184:function(t,e){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var s=typeof r;if("string"===s||"number"===s)t.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&t.push(a)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&t.push(i);else t.push(r.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()}}]);