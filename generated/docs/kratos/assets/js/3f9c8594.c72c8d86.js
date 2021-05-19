(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(8),i=(n(0),n(551)),o={id:"email-sms",title:"Out-of-band communication via E-Mail and SMS"},l={unversionedId:"concepts/email-sms",id:"concepts/email-sms",isDocsHomePage:!1,title:"Out-of-band communication via E-Mail and SMS",description:"Ory Kratos sends out-of-band messages via SMS or E-Mail. These messages are",source:"@site/docs/concepts/email-sms.md",sourceDirName:"concepts",slug:"/concepts/email-sms",permalink:"/kratos/docs/next/concepts/email-sms",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/concepts/email-sms.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619624197,formattedLastUpdatedAt:"4/28/2021",frontMatter:{id:"email-sms",title:"Out-of-band communication via E-Mail and SMS"},sidebar:"docs",previous:{title:"HTTP Redirection Configuration",permalink:"/kratos/docs/next/concepts/browser-redirect-flow-completion"},next:{title:"REST API Design",permalink:"/kratos/docs/next/concepts/rest-api"}},s=[{value:"Mail courier",id:"mail-courier",children:[{value:"Single instance",id:"single-instance",children:[]},{value:"Multi-instance",id:"multi-instance",children:[]}]},{value:"Sending E-Mails via SMTP",id:"sending-e-mails-via-smtp",children:[{value:"Sender Address and Template Customization",id:"sender-address-and-template-customization",children:[]}]},{value:"Sending SMS",id:"sending-sms",children:[]}],c={toc:s};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Ory Kratos sends out-of-band messages via SMS or E-Mail. These messages are\nrequired for The following exemplary use cases require these messages:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Send an account activation email"),Object(i.b)("li",{parentName:"ul"},"Verify an E-Mail address or mobile phone number using SMS"),Object(i.b)("li",{parentName:"ul"},"Preventing Account Enumeration Attacks"),Object(i.b)("li",{parentName:"ul"},"Sending a 2FA Codes"),Object(i.b)("li",{parentName:"ul"},"...")),Object(i.b)("h2",{id:"mail-courier"},"Mail courier"),Object(i.b)("p",null,"Ory Kratos processes email dispatch using a mail courier worker, which must run\nas a singleton in order to process the mail queue correctly. It can be run as a\nbackground worker on a single-instance Kratos setup or as a distinct singleton\nforeground worker in multi-instance deployments."),Object(i.b)("h3",{id:"single-instance"},"Single instance"),Object(i.b)("p",null,"To run the mail courier in the background on your single Kratos instance, add\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"--watch-courier")," flag to your ",Object(i.b)("inlineCode",{parentName:"p"},"kratos serve")," command, as outlined in the\n",Object(i.b)("a",{parentName:"p",href:"/kratos/docs/next/cli/kratos-serve"},"CLI docs")),Object(i.b)("h3",{id:"multi-instance"},"Multi-instance"),Object(i.b)("p",null,"If you're running multiple instances of Kratos (eg replicated Kubernetes\ndeployment), you need to run the mail courier as a separate singleton job. The\ncourier can be started with the ",Object(i.b)("inlineCode",{parentName:"p"},"kratos courier watch")," command\n(",Object(i.b)("a",{parentName:"p",href:"/kratos/docs/next/cli/kratos-courier"},"CLI docs"),")."),Object(i.b)("h2",{id:"sending-e-mails-via-smtp"},"Sending E-Mails via SMTP"),Object(i.b)("p",null,"To have E-Mail delivery running with Ory Kratos requires an SMTP server. This is\nset up in the configuration file using an absolute URL with the ",Object(i.b)("inlineCode",{parentName:"p"},"smtp")," schema:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"# $ kratos -c path/to/my/kratos/config.yml serve\ncourier:\n  smtp:\n    connection_uri: smtps://test:test@my-smtp-server:1025/\n")),Object(i.b)("h3",{id:"sender-address-and-template-customization"},"Sender Address and Template Customization"),Object(i.b)("p",null,"You can customize the sender address and email templates."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"# $ kratos -c path/to/my/kratos/config.yml serve\ncourier:\n  ## SMTP Sender Address ##\n  #\n  # The recipient of an email will see this as the sender address.\n  #\n  # Default value: no-reply@ory.kratos.sh\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export COURIER_SMTP_FROM_ADDRESS=<value>\n  # - Windows Command Line (CMD):\n  #    > set COURIER_SMTP_FROM_ADDRESS=<value>\n  #\n  smtp:\n    from_address: no-reply@ory.kratos.sh\n  ## Override message templates ##\n  #\n  # You can override certain or all message templates by pointing this key to the path where the templates are located.\n  #\n  # Examples:\n  # - /conf/courier-templates\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export COURIER_TEMPLATE_OVERRIDE_PATH=<value>\n  # - Windows Command Line (CMD):\n  #    > set COURIER_TEMPLATE_OVERRIDE_PATH=<value>\n  #\n  template_override_path: /conf/courier-templates\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"email.subject.gotmpl")," and ",Object(i.b)("inlineCode",{parentName:"p"},"email.body.gotmpl")," are common template file names\nexpected in remainder directories corresponding to respective methods for\nfilling E-mail subject and body."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Templates use the engine golang text template for text/html email rendering:\n",Object(i.b)("a",{parentName:"p",href:"https://golang.org/pkg/text/template"},"https://golang.org/pkg/text/template"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"recovery: recovery email templates root directory",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"valid: sub directory containing templates with variables ",Object(i.b)("inlineCode",{parentName:"li"},"To")," and\n",Object(i.b)("inlineCode",{parentName:"li"},"VerificationURL")," for validating a recovery"),Object(i.b)("li",{parentName:"ul"},"invalid: sub directory containing templates with variables ",Object(i.b)("inlineCode",{parentName:"li"},"To")," for\ninvalidating a recovery"))),Object(i.b)("li",{parentName:"ul"},"verification: verification email templates root directory",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"valid: sub directory containing templates with variables ",Object(i.b)("inlineCode",{parentName:"li"},"To")," and\n",Object(i.b)("inlineCode",{parentName:"li"},"RecoveryURL")," for validating a verification"),Object(i.b)("li",{parentName:"ul"},"invalid: sub directory containing templates with variables ",Object(i.b)("inlineCode",{parentName:"li"},"To")," for\ninvalidating a verification")))),Object(i.b)("p",null,"For example:\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/blob/master/courier/template/templates/verification/valid/email.body.gotmpl"},Object(i.b)("inlineCode",{parentName:"a"},"/courier/template/courier/builtin/templates/verification/valid/email.body.gotmpl"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-gotmpl",metastring:'title="courier/template/templates/verification/valid/email.body.gotmpl"',title:'"courier/template/templates/verification/valid/email.body.gotmpl"'},'Hi, please verify your account by clicking the following link:\n\n<a href="{{ .VerificationURL }}">{{ .VerificationURL }}</a>\n')),Object(i.b)("h2",{id:"sending-sms"},"Sending SMS"),Object(i.b)("p",null,"The Sending SMS feature is not supported at present. It will be available in a\nfuture version of Ory Kratos."))}m.isMDXComponent=!0},551:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),m=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(n),d=a,b=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?r.a.createElement(b,l(l({ref:t},c),{},{components:n})):r.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);