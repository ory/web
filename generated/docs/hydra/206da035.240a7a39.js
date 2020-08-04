(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(9),c=(n(0),n(244)),r=n(246),i=(n(258),n(262)),s=n(263),l={id:"logout",title:"Implementing the Logout Endpoint & UI",sidebar_label:"Logout Endpoint"},d={id:"guides/logout",isDocsHomePage:!1,title:"Implementing the Logout Endpoint & UI",description:"Please read the Logout Flow Documentation first!",source:"@site/docs/guides/logout.mdx",permalink:"/hydra/docs/next/guides/logout",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/guides/logout.mdx",version:"next",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594375370,sidebar_label:"Logout Endpoint",sidebar:"docs",previous:{title:"Implementing the Consent Endpoint & UI",permalink:"/hydra/docs/next/guides/consent"},next:{title:"Run ORY Hydra in Docker",permalink:"/hydra/docs/next/configure-deploy"},latestVersionMainDocPermalink:"/hydra/docs"},u=[{value:"Implementing the Logout HTML Form",id:"implementing-the-logout-html-form",children:[]},{value:"Accepting Logout",id:"accepting-logout",children:[]},{value:"Rejecting Logout",id:"rejecting-logout",children:[]}],m={rightToc:u};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Please read the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"../concepts/logout"}),"Logout Flow Documentation")," first!"))),Object(c.b)("p",null,"In this document, you will learn how to implement the Logout Endpoint using our\nORY Hydra SDKs. The goal for this document is to have document this for multiple\nprogramming languages. If you are an expert in one of these languages, your help\nis highly appreciated in improving these docs!"),Object(c.b)("h2",{id:"implementing-the-logout-html-form"},"Implementing the Logout HTML Form"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The Logout HTML Form cannot be a Signle Page App (Client-side browser\napplication) or a Mobile App! It has to be a server-side application with access\nto ORY Hydra's Admin Endpoint!"))),Object(c.b)(i.a,{defaultValue:"ui",values:[{label:"UI",value:"ui"},{label:"NodeJS",value:"node"},{label:"HTML Example",value:"html"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"ui",mdxType:"TabItem"},Object(c.b)("img",{src:Object(r.a)("/img/docs/logout-endpoint.png")})),Object(c.b)(s.a,{value:"node",mdxType:"TabItem"},Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Check out our\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/hydra-login-consent-node"}),"reference implementation")," of\nthis endpoint!"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="routes/logout.ts"',title:'"routes/logout.ts"'}),"// This example uses ExpressJS\nimport express from 'express'\nimport url from 'url'\nimport csrf from 'csurf'\nimport { AdminApi } from '@oryd/hydra-client'\n\nconst hydraAdmin = new AdminApi(process.env.HYDRA_ADMIN_URL)\n\n// Sets up csrf protection. Always do this when handling HTML forms!\nconst csrfProtection = csrf({ cookie: true })\nconst router = express.Router()\n\nrouter.get('/', csrfProtection, (req, res, next) => {\n  // Parses the URL query\n  const query = url.parse(req.url, true).query\n\n  // The challenge is used to fetch information about the logout request from ORY Hydra.\n  const challenge = String(query.logout_challenge)\n  if (!challenge) {\n    next(new Error('Expected a logout challenge to be set but received none.'))\n    return\n  }\n\n  hydraAdmin\n    .getLogoutRequest(challenge)\n    // This will be called if the HTTP request was successful\n    .then(({ body }) => {\n      // Here we have access to e.g. response.subject, response.sid, ...\n\n      // The most secure way to perform a logout request is by asking the user if he/she really want to log out.\n      res.render('logout', {\n        csrfToken: req.csrfToken(),\n        challenge: challenge\n      })\n    })\n    // This will handle any error that happens when making HTTP calls to hydra\n    .catch(next)\n})\n"))),Object(c.b)(s.a,{value:"html",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<form action="/logout" method="POST">\n  <input type="hidden" name="_csrf" value="{{ .csrfToken }}" />\n  <input type="hidden" name="challenge" value="{{ .challenge }}" />\n  <input type="submit" id="accept" value="Yes" />\n  <input type="submit" id="reject" value="No" />\n</form>\n')))),Object(c.b)("h2",{id:"accepting-logout"},"Accepting Logout"),Object(c.b)(i.a,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"node",mdxType:"TabItem"},Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Check out our\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/hydra-login-consent-node"}),"reference implementation")," of\nthis endpoint!"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="routes/logout.ts"',title:'"routes/logout.ts"'}),"// This is the endpoint the user ends up at once she/he inserts their password and username and hits \"Log in\".\nrouter.post('/logout', csrfProtection, (req, res, next) => {\n  // The user agreed to log out, let's accept the logout request.\n  hydraAdmin\n    .acceptLogoutRequest(challenge)\n    .then(({ body }) => {\n      // All we need to do now is to redirect the user back to hydra!\n      res.redirect(String(body.redirectTo))\n    })\n    // This will handle any error that happens when making HTTP calls to hydra\n    .catch(next)\n})\n")))),Object(c.b)("h2",{id:"rejecting-logout"},"Rejecting Logout"),Object(c.b)(i.a,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"node",mdxType:"TabItem"},Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Check out our\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/hydra-login-consent-node"}),"reference implementation")," of\nthis endpoint!"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="routes/logout.ts"',title:'"routes/logout.ts"'}),"// This is the endpoint the user ends up at once she/he inserts their password and username and hits \"Log in\".\nrouter.post('/logout', csrfProtection, (req, res, next) => {\n  return (\n    hydraAdmin\n      .rejectLogoutRequest(challenge)\n      .then(() => {\n        // The user did not want to log out. Let's redirect him back somewhere or do something else.\n        res.redirect('https://www.ory.sh/')\n      })\n      // This will handle any error that happens when making HTTP calls to hydra\n      .catch(next)\n  )\n})\n")))))}b.isMDXComponent=!0},258:function(e,t,n){"use strict";n(269),n(20);var a=n(0),o=n.n(a),c=n(276),r=n.n(c),i=n(131),s=n.n(i),l=n(252),d=n.n(l);r.a.initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});t.a=function(e){var t,n=e.chart,c=Object(a.useState)(!1),i=c[0],l=c[1],u=Object(a.useState)(void 0),m=u[0],b=u[1],p=Object(a.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],h=function(){return l(!i)};return Object(a.useEffect)((function(){r.a.render(p,n,(function(e){b(e)}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{onClick:h,className:d()(s.a.graph,s.a.pointer),dangerouslySetInnerHTML:{__html:m}}),o.a.createElement("div",{onClick:h,className:d()(s.a.overlay,s.a.pointer,s.a.graph,(t={},t[s.a.visible]=i,t))},o.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:d()(s.a.backdrop,s.a.graph),dangerouslySetInnerHTML:{__html:m}})))}},285:function(e,t,n){var a={"./locale":256,"./locale.js":256};function o(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=c,e.exports=o,o.id=285}}]);