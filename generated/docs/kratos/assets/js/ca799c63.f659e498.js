(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{428:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),s=(n(0),n(550)),o=n(553),i=n(551),l=n(555),c=n(556),u={id:"password-reset-recovery-link",title:"Recovery Link and Password Reset"},d={unversionedId:"self-service/flows/account-recovery/password-reset-recovery-link",id:"version-v0.4/self-service/flows/account-recovery/password-reset-recovery-link",isDocsHomePage:!1,title:"Recovery Link and Password Reset",description:"Please read the Account Recover Documentation first.",source:"@site/versioned_docs/version-v0.4/self-service/flows/account-recovery/password-reset-recovery-link.mdx",sourceDirName:"self-service/flows/account-recovery",slug:"/self-service/flows/account-recovery/password-reset-recovery-link",permalink:"/kratos/docs/v0.4/self-service/flows/account-recovery/password-reset-recovery-link",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/self-service/flows/account-recovery/password-reset-recovery-link.mdx",version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594198226,formattedLastUpdatedAt:"7/8/2020",frontMatter:{id:"password-reset-recovery-link",title:"Recovery Link and Password Reset"},sidebar:"version-v0.4/docs",previous:{title:"Account Recovery",permalink:"/kratos/docs/v0.4/self-service/flows/account-recovery"},next:{title:"User Logout",permalink:"/kratos/docs/v0.4/self-service/flows/user-logout"}},b=[{value:"Browser Clients",id:"browser-clients",children:[]},{value:"API Clients",id:"api-clients",children:[]},{value:"Security",id:"security",children:[{value:"Account Enumeration Defenses",id:"account-enumeration-defenses",children:[]}]}],m={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Before you start")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"Please read the ",Object(s.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/self-service/flows/account-recovery"},"Account Recover Documentation")," first."))),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"link")," strategy performs account recovery (also known as password reset) by\nsending an email containing a recovery link to the user."),Object(s.b)("p",null,"There are two email types sent by this strategy:"),Object(s.b)("p",null,Object(s.b)("figure",null,Object(s.b)("img",{alt:"Recovery email sent to unknown address",src:Object(o.a)("img/docs/mailslurper-recovery-unknown.png")}),Object(s.b)("figcaption",null,"If the requested email address is a known recovery address, a recovery link is sent to that email address."))),Object(s.b)("p",null,Object(s.b)("figure",null,Object(s.b)("img",{alt:"Recovery email sent to unknown address",src:Object(o.a)("img/docs/mailslurper-recovery-unknown.png")}),Object(s.b)("figcaption",null,"If the requested email address is a known recovery address, a recovery link is sent to that email address."))),Object(s.b)("p",null,"This prevents account enumeration attacks as explained in this\n",Object(s.b)("a",{parentName:"p",href:"https://www.troyhunt.com/website-enumeration-insanity-how-our-personal-data-is-leaked/"},"brilliant blog post by Troy Hunt"),"."),Object(s.b)("p",null,"You should also configure how long a session is privileged. The user will only\nbe able to update his/her password (or any other credential) for the specified\namount of time after clicking on the recovery link:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml"',title:'"path/to/kratos/config.yml"'},"selfservice:\n  flows:\n    settings:\n      privileged_session_max_age: 15m\n")),Object(s.b)("p",null,"This strategy does not implement any other flow."),Object(s.b)("h2",{id:"browser-clients"},"Browser Clients"),Object(s.b)("p",null,"To initiate the request, point the browser to\n",Object(s.b)("a",{parentName:"p",href:"/kratos/docs/v0.4/self-service/flows/account-recovery"},"Self-Service Recovery Endpoint"),":"),Object(s.b)(l.a,{defaultValue:"html",values:[{label:"HTML",value:"html"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"html",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-html"},'<a\n  href="https://<kratos-public>/self-service/browser/flows/recovery"/>\n    Recover your account!\n</a>\n'))),Object(s.b)(c.a,{value:"js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"// ...\nwindow.location.href =\n  'https://<kratos-public>/self-service/browser/flows/recovery'\n")))),Object(s.b)("p",null,"Next, the user is redirected to the Recovery UI set by config variable\n",Object(s.b)("inlineCode",{parentName:"p"},"selfservice.flows.recovery.ui_url")," with a ",Object(s.b)("inlineCode",{parentName:"p"},"?request=...")," query parameter:"),Object(s.b)(l.a,{defaultValue:"ui",values:[{label:"Recovery User Interface",value:"ui"},{label:"Recovery Request Payload",value:"json"},{label:"HTML Form Example",value:"form"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"ui",mdxType:"TabItem"},Object(s.b)("p",null,"The browser is redirected to, for example:\n",Object(s.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:4455/recovery?request=e219b0ee-58a8-4dc4-aeb6-294e9787dfa9")),Object(s.b)("img",{alt:"Choosing a Recovery method",src:Object(o.a)("img/docs/secureapp-recovery-choose_method.png")})),Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/recovery?request=e219b0ee-58a8-4dc4-aeb6-294e9787dfa9"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/recovery?request":'e219b0ee-58a8-4dc4-aeb6-294e9787dfa9"'},'{\n  "id": "e219b0ee-58a8-4dc4-aeb6-294e9787dfa9",\n  "expires_at": "2020-07-02T15:41:22.1559315Z",\n  "issued_at": "2020-07-02T14:41:22.1559545Z",\n  "request_url": "http://kratos:4433/self-service/browser/flows/recovery",\n  "messages": null,\n  "methods": {\n    "link": {\n      "method": "link",\n      "config": {\n        "action": "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/recovery/link?request=4f49fd6b-fd13-4de2-ac66-adeffa5e5fe3",\n        "method": "POST",\n        "fields": [\n          {\n            "name": "csrf_token",\n            "type": "hidden",\n            "required": true,\n            "value": "9uShdYinBW8ynTrlu0keAR00Itdq5xgMZREbxqTzrjQmgRxZytFlhbAujU7X4iDBlHUtQLO3Q7D+e4fVt1BWWg=="\n          },\n          {\n            "name": "email",\n            "type": "email",\n            "required": true\n          }\n        ]\n      }\n    }\n  },\n  "state": "choose_method"\n}\n'))),Object(s.b)(c.a,{value:"form",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-html"},'<div class="container">\n    <h4>Recover your account</h4>\n    <div id="recovery-token">\n        <form action="http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/recovery/link?request=e219b0ee-58a8-4dc4-aeb6-294e9787dfa9" method="POST">\n            <input name="csrf_token" type="hidden" value="9uShdYinBW8ynTrlu0keAR00Itdq5xgMZREbxqTzrjQmgRxZytFlhbAujU7X4iDBlHUtQLO3Q7D+e4fVt1BWWg==">\n            <fieldset>\n            <label>\n                <input name="email" type="email" value="" placeholder="email">\n                <span>email</span>\n            </label>\n            <button type="submit">submit</button>\n        </form>\n    </div>\n</div>\n')))),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"state")," parameter follows the state machine"),Object(s.b)(i.a,{chart:"\nstateDiagram-v2\n\t[*] --\x3e choose_method\n\tchoose_method --\x3e sent_email\n\tsent_email --\x3e sent_email\n\tnote right of sent_email\n\t    The user may fill out the email form input again as a way to re-send the email.\n\tend note\n\tsent_email --\x3e passed_challenge\n\tpassed_challenge --\x3e [*]\n",mdxType:"Mermaid"}),Object(s.b)("p",null,"where"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"choose_method")," indicates that the user has not chosen a recovery method yet.\nThis is useful when ",Object(s.b)("inlineCode",{parentName:"li"},"link")," is not the only recovery method active."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"sent_email")," implies that the recovery email has been sent out."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"passwed_challenge")," is set when the user has clicked the recovery link and\ncompleted the account recovery.")),Object(s.b)("p",null,"If the form validation fails, an error will be included and ",Object(s.b)("inlineCode",{parentName:"p"},"state")," will also be\nset:"),Object(s.b)(l.a,{defaultValue:"ui",values:[{label:"Recovery User Interface",value:"ui"},{label:"Recovery Request Payload",value:"json"},{label:"HTML Form Example",value:"form"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"ui",mdxType:"TabItem"},Object(s.b)("img",{alt:"Sent form data is invalid",src:Object(o.a)("img/docs/secureapp-recovery-link-form-data.png")})),Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/recovery?request=81d6f25e-6163-467a-afa3-1dae6c58b83d"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/recovery?request":'81d6f25e-6163-467a-afa3-1dae6c58b83d"'},'{\n  "id": "e6b25130-72d8-4776-8435-8d4790f7ec2f",\n  "expires_at": "2020-07-03T16:07:55.1926121Z",\n  "issued_at": "2020-07-03T15:07:55.1927213Z",\n  "request_url": "http://kratos:4433/self-service/browser/flows/recovery",\n  "active": "link",\n  "messages": null,\n  "methods": {\n    "link": {\n      "method": "link",\n      "config": {\n        "action": "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/recovery/link?request=e6b25130-72d8-4776-8435-8d4790f7ec2f",\n        "method": "POST",\n        "fields": [\n          {\n            "name": "csrf_token",\n            "type": "hidden",\n            "required": true,\n            "value": "k+efLwMKH9WilerNWEiUu48qMtKqGxAXrcVR506mXVNDgiIDQXx/PyAmXWY046p7Bms9RXNLS6s2r830XQWlPQ=="\n          },\n          {\n            "name": "email",\n            "type": "email",\n            "required": true,\n            "value": "",\n            "messages": [\n              {\n                "id": 4000002,\n                "text": "Property email is missing.",\n                "type": "error",\n                "context": {\n                  "property": "email"\n                }\n              }\n            ]\n          }\n        ]\n      }\n    }\n  },\n  "state": "choose_method"\n}\n'))),Object(s.b)(c.a,{value:"form",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-html"},'<div class="container">\n  <h4>Recover your account</h4>\n  <div id="recovery-token">\n    <form\n      action="http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/recovery/link?request=e6b25130-72d8-4776-8435-8d4790f7ec2f"\n      method="POST"\n    >\n      <input\n        name="csrf_token"\n        type="hidden"\n        value="k+efLwMKH9WilerNWEiUu48qMtKqGxAXrcVR506mXVNDgiIDQXx/PyAmXWY046p7Bms9RXNLS6s2r830XQWlPQ=="\n      />\n      <fieldset>\n        <label>\n          <input name="email" type="email" value="" placeholder="email" />\n          <span>email</span>\n        </label>\n        <div class="messages ">\n          <div class="message error">Property email is missing.</div>\n        </div>\n      </fieldset>\n      <button type="submit">submit</button>\n    </form>\n  </div>\n</div>\n')))),Object(s.b)("p",null,"If the form data is valid, the ",Object(s.b)("inlineCode",{parentName:"p"},"state")," is set to ",Object(s.b)("inlineCode",{parentName:"p"},"sent_email")," and ",Object(s.b)("inlineCode",{parentName:"p"},"messages"),"\nwill also be set:"),Object(s.b)(l.a,{defaultValue:"ui",values:[{label:"Recovery User Interface",value:"ui"},{label:"Recovery Request Payload",value:"json"},{label:"HTML Form Example",value:"form"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"ui",mdxType:"TabItem"},Object(s.b)("img",{alt:"Sent form data is invalid",src:Object(o.a)("img/docs/secureapp-recovery-link-form-data-valid.png")})),Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/recovery?request=7f3b531f-f78b-46ba-b770-873082dca1b7"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/recovery?request":'7f3b531f-f78b-46ba-b770-873082dca1b7"'},'{\n  "id": "7f3b531f-f78b-46ba-b770-873082dca1b7",\n  "expires_at": "2020-07-03T16:12:16.1835054Z",\n  "issued_at": "2020-07-03T15:12:16.183525Z",\n  "request_url": "http://kratos:4433/self-service/browser/flows/recovery",\n  "active": "link",\n  "messages": [\n    {\n      "id": 1060002,\n      "text": "An email containing a recovery link has been sent to the email address you provided.",\n      "type": "info",\n      "context": {}\n    }\n  ],\n  "methods": {\n    "link": {\n      "method": "link",\n      "config": {\n        "action": "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/recovery/link?request=7f3b531f-f78b-46ba-b770-873082dca1b7",\n        "method": "POST",\n        "fields": [\n          {\n            "name": "csrf_token",\n            "type": "hidden",\n            "required": true,\n            "value": "Iq5ga/L7JIXHgxiLkSSyH+X4Scp/kLTFaLQexH4vUBDyy91HsI1Eb0UwryD9j4zfbLlGXabA73nz3oLXbYyofg=="\n          },\n          {\n            "name": "email",\n            "type": "email",\n            "required": true,\n            "value": "exists@ory.sh"\n          }\n        ]\n      }\n    }\n  },\n  "state": "sent_email"\n}\n'))),Object(s.b)(c.a,{value:"form",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-html"},'<div class="container">\n  <h4>Recover your account</h4>\n  <div class="messages global">\n    <div class="message info">\n      An email containing a recovery link has been sent to the email address you\n      provided.\n    </div>\n  </div>\n  <div id="recovery-token">\n    <form\n      action="http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/recovery/link?request=7f3b531f-f78b-46ba-b770-873082dca1b7"\n      method="POST"\n    >\n      <input\n        name="csrf_token"\n        type="hidden"\n        value="Iq5ga/L7JIXHgxiLkSSyH+X4Scp/kLTFaLQexH4vUBDyy91HsI1Eb0UwryD9j4zfbLlGXabA73nz3oLXbYyofg=="\n      />\n      <fieldset>\n        <label>\n          <input\n            name="email"\n            type="email"\n            value="exists@ory.sh"\n            placeholder="email"\n          />\n          <span>email</span>\n        </label>\n      </fieldset>\n      <button type="submit">submit</button>\n    </form>\n  </div>\n</div>\n')))),Object(s.b)("p",null,"Once the user clicks the link in the E-Mail, she/he will be redirected to the\nSettings endpoint (e.g.\n",Object(s.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:4455/settings?request=752b6d46-af3d-40d2-9d06-b3e3c0279f02"),")\ndirecting the user to update the password / other credentials:"),Object(s.b)(l.a,{defaultValue:"ui",values:[{label:"Settings User Interface",value:"ui"},{label:"Settings Request Payload",value:"json"},{label:"HTML Form Example",value:"form"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"ui",mdxType:"TabItem"},Object(s.b)("img",{alt:"Recovery email sent to unknown address",src:Object(o.a)("img/docs/secureapp-recovery-change.png")})),Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/settings?request=752b6d46-af3d-40d2-9d06-b3e3c0279f02"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/settings?request":'752b6d46-af3d-40d2-9d06-b3e3c0279f02"'},"{\n  id: '752b6d46-af3d-40d2-9d06-b3e3c0279f02',\n  expires_at: '2020-07-03T15:26:14.1768727Z',\n  issued_at: '2020-07-03T14:26:14.1768883Z',\n  request_url: 'http://kratos:4433/self-service/browser/flows/recovery/link?token=DrFHnM3UAgSpqfSfpho4EbIhiR4Ov0B6',\n  messages: [\n    {\n      id: 1060001,\n      text: 'You successfully recovered your accent. Please change your password or set up an alternative login method (e.g. social sign in) within the next 15.00 minutes.',\n      type: 'info',\n      context: {\n        privilegedSessionExpiresAt: '2020-07-03T14:41:14.176908Z'\n      }\n    }\n  ]\n  // ...\n}\n")))),Object(s.b)("p",null,"If the user clicks an invalid (already used, expired) recovery link, a new\nrecovery request will be initiated and she/he will be asked to retry the flow:"),Object(s.b)(l.a,{defaultValue:"ui",values:[{label:"Recovery User Interface",value:"ui"},{label:"Recovery Request Payload",value:"json"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"ui",mdxType:"TabItem"},Object(s.b)("img",{alt:"Recovery email sent to unknown address",src:Object(o.a)("img/docs/secureapp-recovery-change.png")})),Object(s.b)(c.a,{value:"json",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/recovery?request=ce7a8d78-ffd7-438f-90d3-f6b923faa405"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/recovery?request":'ce7a8d78-ffd7-438f-90d3-f6b923faa405"'},"{\n  id: 'ce7a8d78-ffd7-438f-90d3-f6b923faa405',\n  expires_at: '2020-07-03T15:36:33.192578Z',\n  issued_at: '2020-07-03T14:36:33.1925938Z',\n  request_url: 'http://kratos:4433/self-service/browser/flows/recovery/link?token=lsBuo123',\n  messages: [\n    {\n      id: 4060004,\n      text: 'The recovery token is invalid or has already been used. Please retry the flow.',\n      type: 'error',\n      context: {}\n    }\n  ],\n  methods: {\n    link: {\n      // ...\n    }\n  },\n  state: 'choose_method'\n}\n")))),Object(s.b)("h2",{id:"api-clients"},"API Clients"),Object(s.b)("p",null,"API-based login and registration using this strategy will be addressed in a\nfuture release of ORY Kratos."),Object(s.b)("h2",{id:"security"},"Security"),Object(s.b)("h3",{id:"account-enumeration-defenses"},"Account Enumeration Defenses"),Object(s.b)("p",null,"This flow follows best practices by prevent account enumeration attacks using\nthe recovery flow."))}p.isMDXComponent=!0},551:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(573),o=n.n(s),i=n(57),l=n.n(i),c=n(567),u=n.n(c);o.a.initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});t.a=function(e){var t,n=e.chart,s=Object(a.useState)(!1),i=s[0],c=s[1],d=Object(a.useState)(void 0),b=d[0],m=d[1],p=Object(a.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],v=function(){return c(!i)};return Object(a.useEffect)((function(){o.a.render(p,n,(function(e){m(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onClick:v,className:u()(l.a.graph,l.a.pointer),dangerouslySetInnerHTML:{__html:b}}),r.a.createElement("div",{onClick:v,className:u()(l.a.overlay,l.a.pointer,l.a.graph,(t={},t[l.a.visible]=i,t))},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:u()(l.a.backdrop,l.a.graph),dangerouslySetInnerHTML:{__html:b}})))}},552:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},553:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o}));var a=n(16),r=n(557);function s(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,s=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var s=void 0===a?{}:a,o=s.forcePrependBaseUrl,i=void 0!==o&&o,l=s.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(i)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(s,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,s().withBaseUrl)(e,t)}},555:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(560),o=n(552),i=n(58),l=n.n(i);var c=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,d=e.values,b=e.groupId,m=e.className,p=Object(s.a)(),v=p.tabGroupChoices,f=p.setTabGroupChoices,h=Object(a.useState)(i),y=h[0],g=h[1],j=a.Children.toArray(e.children),w=[];if(null!=b){var O=v[b];null!=O&&O!==y&&d.some((function(e){return e.value===O}))&&g(O)}var k=function(e){var t=e.currentTarget,n=w.indexOf(t),a=d[n].value;g(a),null!=b&&(f(b,a),setTimeout((function(){var e,n,a,r,s,o,i,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,s=e.right,o=window,i=o.innerHeight,c=o.innerWidth,n>=0&&s<=c&&r<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((function(){return t.classList.remove(l.a.tabItemActive)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case u:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case c:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:k,onClick:k},n)}))),t?Object(a.cloneElement)(j.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},556:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},557:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},560:function(e,t,n){"use strict";var a=n(0),r=n(561);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},561:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},574:function(e,t,n){var a={"./locale":558,"./locale.js":558};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=574}}]);