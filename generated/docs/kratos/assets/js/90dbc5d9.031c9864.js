(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[875],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return u},kt:function(){return f}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||s;return n?t.createElement(m,a(a({ref:r},u),{},{components:n})):t.createElement(m,a({ref:r},u))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84630:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return a},metadata:function(){return i},toc:function(){return l},default:function(){return u}});var t=n(22122),o=n(19756),s=(n(67294),n(3905)),a={id:"user-facing-errors",title:"User-Facing Errors"},i={unversionedId:"self-service/flows/user-facing-errors",id:"version-v0.5/self-service/flows/user-facing-errors",isDocsHomePage:!1,title:"User-Facing Errors",description:"Because ORY Kratos does not render User Interfaces, we implemented a flow that",source:"@site/versioned_docs/version-v0.5/self-service/flows/user-facing-errors.md",sourceDirName:"self-service/flows",slug:"/self-service/flows/user-facing-errors",permalink:"/kratos/docs/v0.5/self-service/flows/user-facing-errors",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/self-service/flows/user-facing-errors.md",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1602674546,formattedLastUpdatedAt:"10/14/2020",frontMatter:{id:"user-facing-errors",title:"User-Facing Errors"},sidebar:"version-v0.5/docs",previous:{title:"User Logout",permalink:"/kratos/docs/v0.5/self-service/flows/user-logout"},next:{title:"MFA / 2FA",permalink:"/kratos/docs/v0.5/self-service/flows/2fa-mfa-multi-factor-authentication"}},l=[{value:"User-Facing Errors in the Browser",id:"user-facing-errors-in-the-browser",children:[]},{value:"User-Facing Errors when consuming APIs",id:"user-facing-errors-when-consuming-apis",children:[]},{value:"Using Stub Errors",id:"using-stub-errors",children:[]}],c={toc:l};function u(e){var r=e.components,n=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Because ORY Kratos does not render User Interfaces, we implemented a flow that\nallows you to implement the error page in any way you want."),(0,s.kt)("h2",{id:"user-facing-errors-in-the-browser"},"User-Facing Errors in the Browser"),(0,s.kt)("p",null,"When a user-facing error occurs (e.g. during Self Service User Login), ORY\nKratos will store error message and context and redirect the User's Browser to\nthe Error UI URL set by the ",(0,s.kt)("inlineCode",{parentName:"p"},"selfservice.flows.error.ui_url")," configuration or\n",(0,s.kt)("inlineCode",{parentName:"p"},"SELFSERVICE_FLOWS_ERROR_UI_URL")," environment variable."),(0,s.kt)("p",null,"Assuming ",(0,s.kt)("inlineCode",{parentName:"p"},"selfservice.flows.error.ui_url")," is set to\n",(0,s.kt)("inlineCode",{parentName:"p"},"https://example.org/errors"),", ORY Kratos will redirect the User's Browser to\n",(0,s.kt)("inlineCode",{parentName:"p"},"https://example.org/errors?error=abcde"),"."),(0,s.kt)("p",null,"The route matching ",(0,s.kt)("inlineCode",{parentName:"p"},"https://example.org/errors")," uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"error")," URL Query\nparameter value ",(0,s.kt)("inlineCode",{parentName:"p"},"abcde")," to make a request to ORY Kratos' Public or Admin API\n",(0,s.kt)("inlineCode",{parentName:"p"},"https://kratos-<public|admin>/self-service/errors?error=abcde"),". The JSON\nResponse contains a list of errors and their details, for example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "code": 500,\n    "message": "no such file or directory"\n  }\n]\n')),(0,s.kt)("p",null,"We are working on documenting possible error messages and homogenize error\nlayouts. In general, errors have the following keys defined:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 500,\n  "message": "some message",\n  "reason": "some reason",\n  "debug": "some debug info"\n}\n')),(0,s.kt)("h2",{id:"user-facing-errors-when-consuming-apis"},"User-Facing Errors when consuming APIs"),(0,s.kt)("p",null,"When a user-facing error occurs and the HTTP client is an API Client (e.g.\nMobile App), the error will be returned as the HTTP Response. No additional\nsteps are required."),(0,s.kt)("h2",{id:"using-stub-errors"},"Using Stub Errors"),(0,s.kt)("p",null,"The error endpoint supports stub errors which can be used to implement your\nError UI:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"?error=stub:500")," - returns a stub 500 (Internal Server Error) error.")),(0,s.kt)("p",null,"To call a stub error, simply do:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ curl 'https://kratos-<public|admin>/self-service/errors?error=stub:500'\n")))}u.isMDXComponent=!0}}]);