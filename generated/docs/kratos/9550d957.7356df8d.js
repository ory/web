(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{256:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return i})),n.d(r,"rightToc",(function(){return c})),n.d(r,"default",(function(){return u}));var t=n(2),o=n(6),s=(n(0),n(413)),a={id:"user-facing-errors",title:"User-Facing Errors"},i={unversionedId:"self-service/flows/user-facing-errors",id:"self-service/flows/user-facing-errors",isDocsHomePage:!1,title:"User-Facing Errors",description:"Because ORY Kratos does not render User Interfaces, we implemented a flow that",source:"@site/docs/self-service/flows/user-facing-errors.md",slug:"/self-service/flows/user-facing-errors",permalink:"/kratos/docs/next/self-service/flows/user-facing-errors",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/self-service/flows/user-facing-errors.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1596197133,sidebar:"docs",previous:{title:"User Logout",permalink:"/kratos/docs/next/self-service/flows/user-logout"},next:{title:"MFA / 2FA",permalink:"/kratos/docs/next/self-service/flows/2fa-mfa-multi-factor-authentication"}},c=[{value:"User-Facing Errors in the Browser",id:"user-facing-errors-in-the-browser",children:[]},{value:"User-Facing Errors when consuming APIs",id:"user-facing-errors-when-consuming-apis",children:[]},{value:"Using Stub Errors",id:"using-stub-errors",children:[]}],l={rightToc:c};function u(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Because ORY Kratos does not render User Interfaces, we implemented a flow that\nallows you to implement the error page in any way you want."),Object(s.b)("h2",{id:"user-facing-errors-in-the-browser"},"User-Facing Errors in the Browser"),Object(s.b)("p",null,"When a user-facing error occurs (e.g. during Self Service User Login), ORY\nKratos will store error message and context and redirect the User's Browser to\nthe Error UI URL set by the ",Object(s.b)("inlineCode",{parentName:"p"},"selfservice.flows.error.ui_url")," configuration or\n",Object(s.b)("inlineCode",{parentName:"p"},"SELFSERVICE_FLOWS_ERROR_UI_URL")," environment variable."),Object(s.b)("p",null,"Assuming ",Object(s.b)("inlineCode",{parentName:"p"},"selfservice.flows.error.ui_url")," is set to\n",Object(s.b)("inlineCode",{parentName:"p"},"https://example.org/errors"),", ORY Kratos will redirect the User's Browser to\n",Object(s.b)("inlineCode",{parentName:"p"},"https://example.org/errors?error=abcde"),"."),Object(s.b)("p",null,"The route matching ",Object(s.b)("inlineCode",{parentName:"p"},"https://example.org/errors")," uses the ",Object(s.b)("inlineCode",{parentName:"p"},"error")," URL Query\nparameter value ",Object(s.b)("inlineCode",{parentName:"p"},"abcde")," to make a request to ORY Kratos' Public or Admin API\n",Object(s.b)("inlineCode",{parentName:"p"},"https://kratos-<public|admin>/self-service/errors?error=abcde"),". The JSON\nResponse contains a list of errors and their details, for example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "code": 500,\n    "message": "no such file or directory"\n  }\n]\n')),Object(s.b)("p",null,"We are working on documenting possible error messages and homogenize error\nlayouts. In general, errors have the following keys defined:"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  "code": 500,\n  "message": "some message",\n  "reason": "some reason",\n  "debug": "some debug info"\n}\n')),Object(s.b)("h2",{id:"user-facing-errors-when-consuming-apis"},"User-Facing Errors when consuming APIs"),Object(s.b)("p",null,"When a user-facing error occurs and the HTTP client is an API Client (e.g.\nMobile App), the error will be returned as the HTTP Response. No additional\nsteps are required."),Object(s.b)("h2",{id:"using-stub-errors"},"Using Stub Errors"),Object(s.b)("p",null,"The error endpoint supports stub errors which can be used to implement your\nError UI:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"?error=stub:500")," - returns a stub 500 (Internal Server Error) error.")),Object(s.b)("p",null,"To call a stub error, simply do:"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ curl 'https://kratos-<public|admin>/self-service/errors?error=stub:500'\n")))}u.isMDXComponent=!0},413:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return f}));var t=n(0),o=n.n(t);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var r=o.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=u(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,s=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=t,f=p["".concat(a,".").concat(d)]||p[d]||b[d]||s;return n?o.a.createElement(f,i(i({ref:r},l),{},{components:n})):o.a.createElement(f,i({ref:r},l))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);