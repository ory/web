(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[6158],{58215:function(e,t,o){"use strict";var n=o(67294);t.Z=function(e){var t=e.children,o=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:o,className:r},t)}},55064:function(e,t,o){"use strict";o.d(t,{Z:function(){return d}});var n=o(67294),r=o(79443);var s=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=o(86010),a="tabItem_1uMI",l="tabItemActive_2DSg";var u=37,c=39;var d=function(e){var t=e.lazy,o=e.block,r=e.defaultValue,d=e.values,f=e.groupId,p=e.className,g=s(),v=g.tabGroupChoices,m=g.setTabGroupChoices,k=(0,n.useState)(r),h=k[0],w=k[1],S=n.Children.toArray(e.children),b=[];if(null!=f){var y=v[f];null!=y&&y!==h&&d.some((function(e){return e.value===y}))&&w(y)}var L=function(e){var t=e.currentTarget,o=b.indexOf(t),n=d[o].value;w(n),null!=f&&(m(f,n),setTimeout((function(){var e,o,n,r,s,i,a,u;(e=t.getBoundingClientRect(),o=e.top,n=e.left,r=e.bottom,s=e.right,i=window,a=i.innerHeight,u=i.innerWidth,o>=0&&s<=u&&r<=a&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},A=function(e){var t,o;switch(e.keyCode){case c:var n=b.indexOf(e.target)+1;o=b[n]||b[0];break;case u:var r=b.indexOf(e.target)-1;o=b[r]||b[b.length-1]}null==(t=o)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},p)},d.map((function(e){var t=e.value,o=e.label;return n.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,i.Z)("tabs__item",a,{"tabs__item--active":h===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:A,onFocus:L,onClick:L},o)}))),t?(0,n.cloneElement)(S.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},S.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,o){"use strict";var n=(0,o(67294).createContext)(void 0);t.Z=n},12669:function(e,t,o){"use strict";var n=o(55064),r=o(58215),s=o(67294),i=o(11756);t.Z=function(e){var t=e.items;return s.createElement(n.Z,{defaultValue:Object.keys(t)[0],values:Object.keys(t).map((function(e){return{label:t[e].label,value:e}}))},Object.keys(t).map((function(e){return s.createElement(r.Z,{key:e,value:e},t[e].code?s.createElement(i.Z,{className:"language-"+t[e].language,children:t[e].code}):s.createElement("img",{src:t[e].image,alt:t[e].alt}))})))}},32527:function(e,t,o){"use strict";o.d(t,{Z:function(){return p}});var n=o(67294),r=o(21140),s=o.n(r),i="graph_1lrJ",a="pointer_3d8u",l="overlay_2fuY",u="visible_2Z3U",c="backdrop_2z5L",d=o(94184),f=o.n(d);s().initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});var p=function(e){var t,o=e.chart,r=(0,n.useState)(!1),d=r[0],p=r[1],g=(0,n.useState)(void 0),v=g[0],m=g[1],k=(0,n.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],h=function(){return p(!d)};return(0,n.useEffect)((function(){s().render(k,o,(function(e){m(e)}))}),[]),n.createElement(n.Fragment,null,n.createElement("div",{onClick:h,className:f()(i,a),dangerouslySetInnerHTML:{__html:v}}),n.createElement("div",{onClick:h,className:f()(l,a,i,(t={},t[u]=d,t))},n.createElement("div",{onClick:function(e){return e.stopPropagation()},className:f()(c,i),dangerouslySetInnerHTML:{__html:v}})))}},99442:function(e,t,o){"use strict";o.r(t),o.d(t,{contentTitle:function(){return v},default:function(){return w},frontMatter:function(){return g},metadata:function(){return m},toc:function(){return k}});var n=o(22122),r=o(19756),s=o(67294),i=o(3905),a={curl:{label:"curl",language:"shell",code:o(42553).Z},go:{label:"Go",language:"go",code:o(30714).Z}},l={node:{label:"NodeJS (ExpressJS, ...)",language:"js",code:o(819).Z}},u=o(12669),c=o(32527),d=function(){return s.createElement(c.Z,{chart:"\nsequenceDiagram\n\n  participant B as Browser\n  participant A as Server-Side HTML UI\n  participant K as Ory Kratos\n\n  B->>A: Makes request with Ory Session Cookie\n  A->>K: Requests logout URL for given Ory Session Cookie\n  K->>A: Returns logout URL\n  A--\x3e>A: Renders logout URL in UI / HTML\n  A->>B: Returns HTML\n  B->>K: Opens logout URL\n  alt Logout URL is valid\n    K--\x3e>K: Invalidates session\n    K->>B: Redirects to post logout return address.\n  else Logout URL is invalid\n    K->>B: Redirect to error UI.\n  end\n"})},f=function(){return s.createElement(c.Z,{chart:"\nsequenceDiagram\n\n  participant B as Browser\n  participant A as Client-Side UI, e.g. ReactJS\n  participant K as Ory Kratos\n\n  B->>A: Makes request with Ory Session Cookie\n  A->>K: Requests logout URL for given Ory Session Cookie\n  K->>A: Returns logout URL\n  A--\x3e>A: Renders logout URL in UI / HTML\n  A->>B: Returns HTML\n  B->>K: Opens logout URL\n  alt Logout URL is valid\n    K--\x3e>K: Invalidates session\n    K->>B: Redirects to post logout return address.\n  else Logout URL is invalid\n    K->>B: Redirect to error UI.\n  end\n"})},p=["components"],g={id:"user-logout",title:"User Logout"},v=void 0,m={unversionedId:"self-service/flows/user-logout",id:"self-service/flows/user-logout",isDocsHomePage:!1,title:"User Logout",description:"Ory Kratos supports two logout flows:",source:"@site/docs/self-service/flows/user-logout.mdx",sourceDirName:"self-service/flows",slug:"/self-service/flows/user-logout",permalink:"/kratos/docs/next/self-service/flows/user-logout",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/self-service/flows/user-logout.mdx",version:"current",lastUpdatedBy:"hackerman",lastUpdatedAt:1624196165,formattedLastUpdatedAt:"6/20/2021",frontMatter:{id:"user-logout",title:"User Logout"},sidebar:"docs",previous:{title:"Email and Phone Verification and Account Activation",permalink:"/kratos/docs/next/self-service/flows/verify-email-account-activation"},next:{title:"User-Facing Errors",permalink:"/kratos/docs/next/self-service/flows/user-facing-errors"}},k=[{value:"Self-Service Logout for Server-Side Browser Applications",id:"self-service-logout-for-server-side-browser-applications",children:[]},{value:"Self-Service Logout for Client-Side Browser Applications",id:"self-service-logout-for-client-side-browser-applications",children:[]},{value:"Self-Service Logout for API Clients",id:"self-service-logout-for-api-clients",children:[]}],h={toc:k};function w(e){var t=e.components,o=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ory Kratos supports two logout flows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Browser-based (easy): This flow works for all applications running on top of a\nbrowser. Websites, single-page apps, Cordova/Ionic, and so on."),(0,i.kt)("li",{parentName:"ul"},"API-based (advanced): This flow works for native applications like iOS\n(Swift), Android (Java), Microsoft (.NET), React Native, Electron, and others.")),(0,i.kt)("h2",{id:"self-service-logout-for-server-side-browser-applications"},"Self-Service Logout for Server-Side Browser Applications"),(0,i.kt)("p",null,"To ensure that a logout was indeed intended by the user, Ory Kratos first\ngenerates a Logout URL for a given Ory Session Cookie. You can then open the\nLogout URL in the Browser."),(0,i.kt)(d,{mdxType:"SelfServiceLogoutBrowserFlow"}),(0,i.kt)("p",null,"After successful logout, the browser will be redirected either to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"return_to")," query parameter from the initial request URL, or fall back to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"default_browser_return_url")," value set in Ory Kratos' configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# kratos.yaml\nselfservice:\n  flows:\n    logout:\n      after:\n        default_browser_return_url: http://test.kratos.ory.sh:4000/\n")),(0,i.kt)(u.Z,{items:l,mdxType:"CodeTabs"}),(0,i.kt)("p",null,"If an error occurs, the browser is redirected to the\n",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/next/self-service/flows/user-facing-errors"},"Error UI"),"."),(0,i.kt)("h2",{id:"self-service-logout-for-client-side-browser-applications"},"Self-Service Logout for Client-Side Browser Applications"),(0,i.kt)("p",null,"Similar to Server-Side Browser Applications, Ory Kratos first generates a Logout\nURL for a given Ory Session Cookie. However, you can simply call the Logout URL\nusing an AJAX request. Ory Kratos returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"204 No Content")," response on success\nor an error otherwise."),(0,i.kt)(f,{mdxType:"SelfServiceLogoutSPAFlow"}),(0,i.kt)("h2",{id:"self-service-logout-for-api-clients"},"Self-Service Logout for API Clients"),(0,i.kt)("p",null,"API clients (e.g. native mobile apps) use Ory Session Tokens. To revoke such a\ntoken, call the logout API endpoint:"),(0,i.kt)(u.Z,{items:a,mdxType:"CodeTabs"}))}w.isMDXComponent=!0},11748:function(e,t,o){var n={"./locale":89234,"./locale.js":89234};function r(e){var t=s(e);return o(t)}function s(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=11748},42553:function(e,t){"use strict";t.Z='# Set your token here\nsession_token=8ziz8oCx0dsgXnoJJgElTQ60cNnbohAr\n\ncurl -s -v -X DELETE \\\n  -H "Accept: application/json" \\\n  -H "Content-Type: application/json" \\\n  --data \'{"session_token": "\'$session_token\'"}\' \\\n  http://127.0.0.1:4433/self-service/logout/api\n\n> DELETE /self-service/logout/api HTTP/1.1\n> Host: 127.0.0.1:4433\n> User-Agent: curl/7.64.1\n> Accept: application/json\n> Content-Type: application/json\n> Content-Length: 53\n\n< HTTP/1.1 204 No Content\n< Cache-Control: private, no-cache, no-store, must-revalidate\n< Vary: Cookie\n< Date: Fri, 18 Jun 2021 09:42:04 GMT\n'},819:function(e,t){"use strict";t.Z="import { Configuration, PublicApi } from '@ory/kratos-client';\nconst kratos = new PublicApi(new Configuration({ basePath: 'http://127.0.0.1:4433/' }));\n\nconst flowId = '' // usually something like: req.query.flow\n\nconst route = (req: Request, res: Response) => {\n  kratos.createSelfServiceLogoutUrlForBrowsers(req.cookies['ory_kratos_session']).then(({data}) => {\n    .then(({ data }) => {\n      console.log(data.logout_url) // The logout URL\n\n      // You can render the logout URL like so:\n      // <a href=\"{{data.logout_url}}>Logout</a>\n    })\n}\n"},30714:function(e,t){"use strict";t.Z='package main\n\nimport (\n\t"fmt"\n\t"log"\n\n\t"github.com/ory/kratos/examples/go/pkg"\n\n\tory "github.com/ory/kratos-client-go"\n)\n\n// If you use Open Source this would be:\n//\n//var client = pkg.NewSDKForSelfHosted("http://127.0.0.1:4433")\nvar client = pkg.NewSDK("playground")\n\nfunc performLogout() {\n\t// Create a temporary user\n\t_, sessionToken := pkg.CreateIdentityWithSession(client)\n\t_, err := client.PublicApi.SubmitSelfServiceLogoutFlowWithoutBrowserExecute(ory.PublicApiApiSubmitSelfServiceLogoutFlowWithoutBrowserRequest{}.\n\t\tSubmitSelfServiceLogoutFlowWithoutBrowserBody(ory.SubmitSelfServiceLogoutFlowWithoutBrowserBody{SessionToken: sessionToken}))\n\tif err != nil {\n\t\tlog.Fatalf("An error occurred: %s\\n", err)\n\t}\n}\n\nfunc main() {\n\tperformLogout()\n\tfmt.Println("Logout successful!")\n}\n'}}]);