(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{339:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),i=(n(0),n(441)),r={id:"configuring-cookies",title:"Configuring Cookies"},c={unversionedId:"guides/configuring-cookies",id:"version-v0.5/guides/configuring-cookies",isDocsHomePage:!1,title:"Configuring Cookies",description:"When working with cookies, keep the following in mind:",source:"@site/versioned_docs/version-v0.5/guides/configuring-cookies.mdx",slug:"/guides/configuring-cookies",permalink:"/kratos/docs/guides/configuring-cookies",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/guides/configuring-cookies.mdx",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1602674546,sidebar:"version-v0.5/docs",previous:{title:"Configuring And Checking for Login Sessions",permalink:"/kratos/docs/guides/login-session"},next:{title:"Setting up Cross-origin resource sharing (CORS)",permalink:"/kratos/docs/guides/setting-up-cors"}},s=[{value:"Session Cookies",id:"session-cookies",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When working with cookies, keep the following in mind:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"HTTP Cookies ",Object(i.b)("strong",{parentName:"li"},"are not port specific"),". If a cookie is set on\n",Object(i.b)("inlineCode",{parentName:"li"},"https://mydomain.com:1234")," it is also valid for ",Object(i.b)("inlineCode",{parentName:"li"},"https://mydomain.com:4321"),"\nand ",Object(i.b)("inlineCode",{parentName:"li"},"https://mydomain.com"),"."),Object(i.b)("li",{parentName:"ol"},"Unless ",Object(i.b)("inlineCode",{parentName:"li"},"--dev")," is set, ORY Kratos' cookies are only sent over HTTPS."),Object(i.b)("li",{parentName:"ol"},"Cookies in ORY Kratos are always ",Object(i.b)("inlineCode",{parentName:"li"},"httpOnly"),"."),Object(i.b)("li",{parentName:"ol"},"It is possible to set a cookie for ",Object(i.b)("inlineCode",{parentName:"li"},"mydomain.com")," when the original request\nwas made to ",Object(i.b)("inlineCode",{parentName:"li"},"subdomain.mydomain.com"),". It is however not possible to set a\ncookie for ",Object(i.b)("inlineCode",{parentName:"li"},"anotherdomain.com")," when the original request was made to\n",Object(i.b)("inlineCode",{parentName:"li"},"mydomain.com"),". See also ","[this answer]"," on\n",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/18492576/share-cookie-between-subdomain-and-domain"}),"SackOverflow"),".")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"ORY Kratos uses pass-by-value cookies whose values are encrypted using the\n",Object(i.b)("inlineCode",{parentName:"p"},"secrets.default")," / ",Object(i.b)("inlineCode",{parentName:"p"},"secrets.cookie")," secrets. If these secrets are changed\nwithout doing proper ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"secret-key-rotation"}),"secret / key rotation"),", all cookies\nwill be invalid which will cause users to be signed out, and other side effects."))),Object(i.b)("h2",{id:"session-cookies"},"Session Cookies"),Object(i.b)("p",null,'CloudRun, Heroku, and other "serverless" solutions commonly expose services\ndirectly to the public, and do not allow for fronting by a gateway or reverse\nproxy. In those cases, your application architecture may separate services by\nsubdomain (e.g. ',Object(i.b)("inlineCode",{parentName:"p"},"service1.myproduct.com"),", ",Object(i.b)("inlineCode",{parentName:"p"},"service2.myproduct.com"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"service3.myproduct.com"),", ...)."),Object(i.b)("p",null,"If that is the case you can change the session\n",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookie domain")," and\npath using the following configuration keys in your ORY Kratos configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'}),"session:\n  cookie:\n    domain: myproduct.com\n")),Object(i.b)("p",null,"It is also possible to restrict the\n",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookie path"),":"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"It is very unlikely that you need to change this!"))),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'}),"session:\n  cookie:\n    path: /some/sub-directory\n")),Object(i.b)("p",null,"You can also modify the new\n",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite"}),"HTTP Cookie SameSite Attribute"),"\nusing:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'}),"session:\n  cookie:\n    same_site: Lax\n")))}p.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=o,u=b["".concat(r,".").concat(d)]||b[d]||m[d]||i;return n?a.a.createElement(u,c(c({ref:t},l),{},{components:n})):a.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);