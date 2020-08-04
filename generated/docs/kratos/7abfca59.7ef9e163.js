(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{257:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(9),i=(r(0),r(390)),a={id:"selfservice-flow-completion",title:"Self-Service Flow Completion"},c={id:"version-v0.2/concepts/selfservice-flow-completion",isDocsHomePage:!1,title:"Self-Service Flow Completion",description:"Self-Service flows such as Login, Registration, Updating Settings support two",source:"@site/versioned_docs/version-v0.2/concepts/selfservice-flow-completion.md",permalink:"/kratos/docs/v0.2/concepts/selfservice-flow-completion",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.2/concepts/selfservice-flow-completion.md",version:"v0.2",lastUpdatedBy:"aeneasr",lastUpdatedAt:1588605498,latestVersionMainDocPermalink:"/kratos/docs"},l=[{value:"Redirection",id:"redirection",children:[]},{value:"JSON",id:"json",children:[]}],s={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Self-Service flows such as Login, Registration, Updating Settings support two\nsuccessful response modes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For browsers, the response will be a ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#redirection"}),"redirection"),"."),Object(i.b)("li",{parentName:"ul"},"For API clients (this includes AJAX) the response will be in ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#json"}),"JSON"),".")),Object(i.b)("h2",{id:"redirection"},"Redirection"),Object(i.b)("p",null,"Browser requests, identified by the ",Object(i.b)("inlineCode",{parentName:"p"},"Accept: text/html")," header, complete with a\nredirection flow. If no redirection URL is set for the flow, the Default\nRedirect URL will be used:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'}),"urls:\n  default_redirect_to: https://always-end-up-here-per-default/\n")),Object(i.b)("p",null,"It is possible to specify a redirect URL per Self-Service Flow:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  login:\n    after:\n      default_redirect_to: https://end-up-here-after-login/\n  registration:\n    after:\n      default_redirect_to: https://end-up-here-after-registration/\n  # ...\n")),Object(i.b)("p",null,"You may also set redirect URLs per strategy (overrides\n",Object(i.b)("inlineCode",{parentName:"p"},"selfservice.<login|registration|...>.default_return_to"),"):"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  login:\n    after:\n      default_redirect_to: https://this-is-overridden-by-password/\n      password:\n        default_redirect_to: https://end-up-here-after-login-with-password/\n    # ...\n")),Object(i.b)("p",null,"It is also possible to redirect someone back to the original URL. For example,\nif a user requests ",Object(i.b)("inlineCode",{parentName:"p"},"https://www.myapp.com/blog/write")," but is not logged in, we\nwant the user to end up at that page after login. To achieve that, you append\n",Object(i.b)("inlineCode",{parentName:"p"},"?return_to=https://www.myapp.com/blog/write")," when initializing the Login /\nRegistration /Settings flow."),Object(i.b)("p",null,"Because ORY Kratos prevents Open Redirect Attacks, you need to whitelist the\ndomain in your ORY Kratos config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'}),"urls:\n  whitelisted_return_to_urls:\n    - https://www.myapp.com/\n")),Object(i.b)("h2",{id:"json"},"JSON"),Object(i.b)("p",null,"This feature is currently in prototype phase and will be documented at a later\nstage."))}p.isMDXComponent=!0},390:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,b=u["".concat(a,".").concat(d)]||u[d]||f[d]||i;return r?o.a.createElement(b,c(c({ref:t},s),{},{components:r})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);