(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{246:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(411)),o={id:"email-sms",title:"Out-of-band communication via E-Mail and SMS"},s={unversionedId:"concepts/email-sms",id:"version-v0.5/concepts/email-sms",isDocsHomePage:!1,title:"Out-of-band communication via E-Mail and SMS",description:"ORY Kratos sends out-of-band messages via SMS or E-Mail. These messages are",source:"@site/versioned_docs/version-v0.5/concepts/email-sms.md",slug:"/concepts/email-sms",permalink:"/kratos/docs/concepts/email-sms",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/concepts/email-sms.md",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1602674546,sidebar:"version-v0.5/docs",previous:{title:"HTTP Redirection Configuration",permalink:"/kratos/docs/concepts/browser-redirect-flow-completion"},next:{title:"REST API Design",permalink:"/kratos/docs/concepts/rest-api"}},c=[{value:"Sending E-Mails via SMTP",id:"sending-e-mails-via-smtp",children:[{value:"Templates",id:"templates",children:[]}]},{value:"Sending SMS",id:"sending-sms",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"ORY Kratos sends out-of-band messages via SMS or E-Mail. These messages are\nrequired for The following exemplary use cases require these messages:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Send an account activation email"),Object(i.b)("li",{parentName:"ul"},"Verify an E-Mail address or mobile phone number using SMS"),Object(i.b)("li",{parentName:"ul"},"Preventing Account Enumeration Attacks"),Object(i.b)("li",{parentName:"ul"},"Sending a 2FA Codes"),Object(i.b)("li",{parentName:"ul"},"...")),Object(i.b)("h2",{id:"sending-e-mails-via-smtp"},"Sending E-Mails via SMTP"),Object(i.b)("p",null,"To have E-Mail delivery running with ORY Kratos requires an SMTP server. This is\nset up in the configuration file using an absolute URL with the ",Object(i.b)("inlineCode",{parentName:"p"},"smtp")," schema:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'}),"# $ kratos -c path/to/my/kratos/config.yml serve\ncourier:\n  smtp:\n    connection_uri: smtps://test:test@my-smtp-server:1025/\n")),Object(i.b)("h3",{id:"templates"},"Templates"),Object(i.b)("p",null,"A future version of ORY Kratos will feature proprietary E-Mail messages using\nthe Go template engine extended by\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://masterminds.github.io/sprig/"}),"sprig's template functions"),". It should\nalso be possible to internationalize these templates."),Object(i.b)("h2",{id:"sending-sms"},"Sending SMS"),Object(i.b)("p",null,"The Sending SMS feature is not supported at present. It will be available in a\nfuture version of ORY Kratos."))}p.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,b=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?a.a.createElement(b,s(s({ref:t},l),{},{components:n})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);