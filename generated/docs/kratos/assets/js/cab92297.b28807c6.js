(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[6158],{58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(67294),o=n(79443);var s=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},a=n(86010),i="tabItem_1uMI",l="tabItemActive_2DSg";var u=37,c=39;var d=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,d=e.values,f=e.groupId,p=e.className,g=s(),m=g.tabGroupChoices,v=g.setTabGroupChoices,h=(0,r.useState)(o),k=h[0],w=h[1],b=r.Children.toArray(e.children),y=[];if(null!=f){var S=m[f];null!=S&&S!==k&&d.some((function(e){return e.value===S}))&&w(S)}var L=function(e){var t=e.currentTarget,n=y.indexOf(t),r=d[n].value;w(r),null!=f&&(v(f,r),setTimeout((function(){var e,n,r,o,s,a,i,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,s=e.right,a=window,i=a.innerHeight,u=a.innerWidth,n>=0&&s<=u&&o<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},A=function(e){var t,n;switch(e.keyCode){case c:var r=y.indexOf(e.target)+1;n=y[r]||y[0];break;case u:var o=y.indexOf(e.target)-1;n=y[o]||y[y.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},p)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":k===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:A,onFocus:L,onClick:L},n)}))),t?(0,r.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},12669:function(e,t,n){"use strict";var r=n(55064),o=n(58215),s=n(67294),a=n(11756),i=n(73295),l=n(25108),u=function(e){var t=e.item;return t.code?(l.warn(t.code,"asfd"),s.createElement(a.Z,{className:"language-"+t.language,children:t.code})):t.image?s.createElement("img",{src:t.image,alt:t.alt}):t.codeFromRemote?s.createElement(i.Z,{language:t.language,link:t.codeFromRemote.link,src:t.codeFromRemote.src}):s.createElement("span",null,"Unknown item type: $",JSON.stringify(t))};t.Z=function(e){var t=e.items;return s.createElement(r.Z,{defaultValue:Object.keys(t)[0],values:Object.keys(t).map((function(e){return{label:t[e].label,value:e}}))},Object.keys(t).map((function(e){return s.createElement(o.Z,{key:e,value:e},s.createElement(u,{item:t[e]}))})))}},73295:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(67294),o=n(83300),s=n.n(o),a=n(11756),i="container_2x1S",l=n(25108),u=function(e,t){if(!e)return 0;var n=t.findIndex((function(t){return t.indexOf(e)>-1}));return-1===n?0:n},c=function(e){var t=e.src,n=e.title,o=(0,r.useState)(""),c=o[0],d=o[1];(0,r.useEffect)((function(){var n,r,o;s()(t.replace("github.com","raw.githubusercontent.com").replace("/blob/","/")).then((function(e){return e.text()})).then((n=e,r=n.startAt,o=n.endAt,function(e){var t=e.split("\n"),n=u(r,t);n>0&&(t=["// ..."].concat(t.slice(n,-1)));var s=u(o,t);return s>0&&(t=[].concat(t.slice(0,s+1),["// ..."])),t.join("\n")})).then(d).catch(l.error)}),[]);var f="language-"+function(e){var t=e.split(".").pop();switch(t){case"jsx":return"jsx";case"tsx":return"tsx";case"ts":return"typescript";case"go":return"go";case"yaml":case"yml":return"yaml";case"js":return"javascript";case"html":return"html";case"pug":return"pug";default:return t}}(t),p='title="'+(n||function(e){var t=e.match(new RegExp("https://github.com/[^/]+/[^/]+/blob/[^/]+/(.+)","i"))||[];return t.length>=2?t[1]:e}(t))+'"';return r.createElement("div",{className:i},r.createElement(a.Z,{metastring:p,className:f,children:c}))}},32527:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(67294),o=n(21140),s=n.n(o),a="graph_1lrJ",i="pointer_3d8u",l="overlay_2fuY",u="visible_2Z3U",c="backdrop_2z5L",d=n(94184),f=n.n(d);s().initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});var p=function(e){var t,n=e.chart,o=(0,r.useState)(!1),d=o[0],p=o[1],g=(0,r.useState)(void 0),m=g[0],v=g[1],h=(0,r.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],k=function(){return p(!d)};return(0,r.useEffect)((function(){s().render(h,n,(function(e){v(e)}))}),[]),r.createElement(r.Fragment,null,r.createElement("div",{onClick:k,className:f()(a,i),dangerouslySetInnerHTML:{__html:m}}),r.createElement("div",{onClick:k,className:f()(l,i,a,(t={},t[u]=d,t))},r.createElement("div",{onClick:function(e){return e.stopPropagation()},className:f()(c,a),dangerouslySetInnerHTML:{__html:m}})))}},81788:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return g},metadata:function(){return v},toc:function(){return h}});var r=n(22122),o=n(19756),s=n(67294),a=n(3905),i={curl:{label:"curl",language:"shell",code:n(42553).Z},go:{label:"Go",language:"go",code:'package main\n\nimport (\n\t"fmt"\n\n\t"github.com/ory/kratos/examples/go/pkg"\n\n\tory "github.com/ory/kratos-client-go"\n)\n\n// If you use Open Source this would be:\n//\n//var client = pkg.NewSDKForSelfHosted("http://127.0.0.1:4433")\nvar client = pkg.NewSDK("playground")\n\nfunc performLogout() {\n\t// Create a temporary user\n\temail, password := pkg.RandomCredentials()\n\t_, sessionToken := pkg.CreateIdentityWithSession(client, email, password)\n\n\t// Log out using session token\n\tres, err := client.V0alpha1Api.SubmitSelfServiceLogoutFlowWithoutBrowserExecute(ory.V0alpha1ApiApiSubmitSelfServiceLogoutFlowWithoutBrowserRequest{}.\n\t\tSubmitSelfServiceLogoutFlowWithoutBrowserBody(ory.SubmitSelfServiceLogoutFlowWithoutBrowserBody{SessionToken: sessionToken}))\n\tpkg.SDKExitOnError(err, res)\n}\n\nfunc main() {\n\tperformLogout()\n\tfmt.Println("Logout successful!")\n}\n'}},l={node:{label:"NodeJS (ExpressJS, ...)",language:"js",code:n(819).Z}},u=n(12669),c=n(32527),d=function(){return s.createElement(c.Z,{chart:"\nsequenceDiagram\n\n  participant B as Browser\n  participant A as Server-Side HTML UI\n  participant K as Ory Kratos\n\n  B->>A: Makes request with Ory Session Cookie\n  A->>K: Requests logout URL for given Ory Session Cookie\n  K->>A: Returns logout URL\n  A--\x3e>A: Renders logout URL in UI / HTML\n  A->>B: Returns HTML\n  B->>K: Opens logout URL\n  alt Logout URL is valid\n    K--\x3e>K: Invalidates session\n    K->>B: Redirects to post logout return address.\n  else Logout URL is invalid\n    K->>B: Redirect to error UI.\n  end\n"})},f=function(){return s.createElement(c.Z,{chart:"\nsequenceDiagram\n\n  participant B as Browser\n  participant A as Client-Side UI, e.g. ReactJS\n  participant K as Ory Kratos\n\n  B->>A: Makes request with Ory Session Cookie\n  A->>K: Requests logout URL for given Ory Session Cookie\n  K->>A: Returns logout URL\n  A--\x3e>A: Renders logout URL in UI / HTML\n  A->>B: Returns HTML\n  B->>K: Opens logout URL\n  alt Logout URL is valid\n    K--\x3e>K: Invalidates session\n    K->>B: Redirects to post logout return address.\n  else Logout URL is invalid\n    K->>B: Redirect to error UI.\n  end\n"})},p=["components"],g={id:"user-logout",title:"User Logout"},m=void 0,v={unversionedId:"self-service/flows/user-logout",id:"self-service/flows/user-logout",isDocsHomePage:!1,title:"User Logout",description:"Ory Kratos supports two logout flows:",source:"@site/docs/self-service/flows/user-logout.mdx",sourceDirName:"self-service/flows",slug:"/self-service/flows/user-logout",permalink:"/kratos/docs/next/self-service/flows/user-logout",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/self-service/flows/user-logout.mdx",version:"current",lastUpdatedBy:"hackerman",lastUpdatedAt:1624196165,formattedLastUpdatedAt:"6/20/2021",frontMatter:{id:"user-logout",title:"User Logout"},sidebar:"docs",previous:{title:"Email and Phone Verification and Account Activation",permalink:"/kratos/docs/next/self-service/flows/verify-email-account-activation"},next:{title:"User-Facing Errors",permalink:"/kratos/docs/next/self-service/flows/user-facing-errors"}},h=[{value:"Self-Service Logout for Server-Side Browser Applications",id:"self-service-logout-for-server-side-browser-applications",children:[]},{value:"Self-Service Logout for Client-Side Browser Applications",id:"self-service-logout-for-client-side-browser-applications",children:[]},{value:"Self-Service Logout for API Clients",id:"self-service-logout-for-api-clients",children:[]}],k={toc:h};function w(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ory Kratos supports two logout flows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Browser-based (easy): This flow works for all applications running on top of a\nbrowser. Websites, single-page apps, Cordova/Ionic, and so on."),(0,a.kt)("li",{parentName:"ul"},"API-based (advanced): This flow works for native applications like iOS\n(Swift), Android (Java), Microsoft (.NET), React Native, Electron, and others.")),(0,a.kt)("h2",{id:"self-service-logout-for-server-side-browser-applications"},"Self-Service Logout for Server-Side Browser Applications"),(0,a.kt)("p",null,"To ensure that a logout was indeed intended by the user, Ory Kratos first\ngenerates a Logout URL for a given Ory Session Cookie. You can then open the\nLogout URL in the Browser."),(0,a.kt)(d,{mdxType:"SelfServiceLogoutBrowserFlow"}),(0,a.kt)("p",null,"After successful logout, the browser will be redirected either to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"return_to")," query parameter from the initial request URL, or fall back to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"default_browser_return_url")," value set in Ory Kratos' configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# kratos.yaml\nselfservice:\n  flows:\n    logout:\n      after:\n        default_browser_return_url: http://test.kratos.ory.sh:4000/\n")),(0,a.kt)(u.Z,{items:l,mdxType:"CodeTabs"}),(0,a.kt)("p",null,"If an error occurs, the browser is redirected to the\n",(0,a.kt)("a",{parentName:"p",href:"/kratos/docs/next/self-service/flows/user-facing-errors"},"Error UI"),"."),(0,a.kt)("h2",{id:"self-service-logout-for-client-side-browser-applications"},"Self-Service Logout for Client-Side Browser Applications"),(0,a.kt)("p",null,"Similar to Server-Side Browser Applications, Ory Kratos first generates a Logout\nURL for a given Ory Session Cookie. However, you can simply call the Logout URL\nusing an AJAX request. Ory Kratos returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"204 No Content")," response on success\nor an error otherwise."),(0,a.kt)(f,{mdxType:"SelfServiceLogoutSPAFlow"}),(0,a.kt)("h2",{id:"self-service-logout-for-api-clients"},"Self-Service Logout for API Clients"),(0,a.kt)("p",null,"API clients (e.g. native mobile apps) use Ory Session Tokens. To revoke such a\ntoken, call the logout API endpoint:"),(0,a.kt)(u.Z,{items:i,mdxType:"CodeTabs"}))}w.isMDXComponent=!0},11748:function(e,t,n){var r={"./locale":89234,"./locale.js":89234};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=s,e.exports=o,o.id=11748},83300:function(e,t){"use strict";var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,n.fetch&&(t.default=n.fetch.bind(n)),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response},42553:function(e,t){"use strict";t.Z='# Set your token here\nsession_token=8ziz8oCx0dsgXnoJJgElTQ60cNnbohAr\n\ncurl -s -v -X DELETE \\\n  -H "Accept: application/json" \\\n  -H "Content-Type: application/json" \\\n  --data \'{"session_token": "\'$session_token\'"}\' \\\n  https://playground.projects.oryapis.com/api/kratos/public/self-service/logout/api\n\n> DELETE /self-service/logout/api HTTP/1.1\n> Host: 127.0.0.1:4433\n> User-Agent: curl/7.64.1\n> Accept: application/json\n> Content-Type: application/json\n> Content-Length: 53\n\n< HTTP/1.1 204 No Content\n< Cache-Control: private, no-cache, no-store, must-revalidate\n< Vary: Cookie\n< Date: Fri, 18 Jun 2021 09:42:04 GMT\n'},819:function(e,t){"use strict";t.Z="import { Configuration, PublicApi } from '@ory/kratos-client';\nconst kratos = new PublicApi(new Configuration({ basePath: 'https://playground.projects.oryapis.com/api/kratos/public/' }));\n\nconst flowId = '' // usually something like: req.query.flow\n\nconst route = (req: Request, res: Response) => {\n  kratos.createSelfServiceLogoutUrlForBrowsers(req.cookies['ory_kratos_session']).then(({data}) => {\n    .then(({ data }) => {\n      console.log(data.logout_url) // The logout URL\n\n      // You can render the logout URL like so:\n      // <a href=\"{{data.logout_url}}>Logout</a>\n    })\n}\n"}}]);