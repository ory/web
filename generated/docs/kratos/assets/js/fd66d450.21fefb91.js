(window.webpackJsonp=window.webpackJsonp||[]).push([[470],{534:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var o=n(3),i=n(8),a=(n(0),n(553)),r={id:"multi-domain-cookies",title:"Getting URLs and Cookies to Work on Multi-Domains"},s={unversionedId:"guides/multi-domain-cookies",id:"version-v0.6/guides/multi-domain-cookies",isDocsHomePage:!1,title:"Getting URLs and Cookies to Work on Multi-Domains",description:"Base URL",source:"@site/versioned_docs/version-v0.6/guides/multi-domain-cookies.mdx",sourceDirName:"guides",slug:"/guides/multi-domain-cookies",permalink:"/kratos/docs/guides/multi-domain-cookies",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/guides/multi-domain-cookies.mdx",version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619690398,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"multi-domain-cookies",title:"Getting URLs and Cookies to Work on Multi-Domains"},sidebar:"version-v0.6/docs",previous:{title:"Configuring Cookies",permalink:"/kratos/docs/guides/configuring-cookies"},next:{title:"Setting up Cross-origin resource sharing (CORS)",permalink:"/kratos/docs/guides/setting-up-cors"}},c=[{value:"Base URL",id:"base-url",children:[]},{value:"Cookies",id:"cookies",children:[]}],l={toc:c};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"base-url"},"Base URL"),Object(a.b)("p",null,"The public base URL (",Object(a.b)("inlineCode",{parentName:"p"},"serve.public.base_url"),") is used to compute redirect URLs,\nform action URLs, and more. If you host Ory Kratos on more than one domain you\nmight want to enable the domain aliasing feature. This allows to register\nadditional base URLs. On incoming HTTP Requests, Ory Kratos checks the HTTP\n",Object(a.b)("inlineCode",{parentName:"p"},"Host")," Header and compares that to the list of domain aliases."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'},"serve:\n  public:\n    base_url: https://this-is-the-default/base-url\n    domain_aliases:\n      - match_domain: www.another-domain.com\n        base_path: /kratos\n        scheme: https\n      - match_domain: that-domain.com\n        base_path: /\n        scheme: http\n")),Object(a.b)("p",null,"If a match is found, the value ",Object(a.b)("inlineCode",{parentName:"p"},"serve.public.base_url")," will be ignored and\ninstead the base URL is computed:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"<config.protocol>://<request.host + request.port><config.base_path>\n")),Object(a.b)("p",null,"Values ",Object(a.b)("inlineCode",{parentName:"p"},"<request.host>"),", ",Object(a.b)("inlineCode",{parentName:"p"},"<request.port>")," are set by the incoming HTTP request\nand ",Object(a.b)("inlineCode",{parentName:"p"},"<config.base_path>"),", ",Object(a.b)("inlineCode",{parentName:"p"},"<config.protocol>"),", by the config:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Incoming request is to ",Object(a.b)("inlineCode",{parentName:"li"},"https://www.another-domain.com:123/kratos/identities/"),"\nso the result is ",Object(a.b)("inlineCode",{parentName:"li"},"https://www.another-domain.com:123/kratos")),Object(a.b)("li",{parentName:"ul"},"Incoming request is to ",Object(a.b)("inlineCode",{parentName:"li"},"http://www.another-domain.com/kratos/sessions/")," so the\nresult is ",Object(a.b)("inlineCode",{parentName:"li"},"http://www.another-domain.com/kratos")),Object(a.b)("li",{parentName:"ul"},"Incoming request is to ",Object(a.b)("inlineCode",{parentName:"li"},"https://that-domain.com/identities/")," so the result is\n",Object(a.b)("inlineCode",{parentName:"li"},"https://that-domain.com/identities"))),Object(a.b)("h2",{id:"cookies"},"Cookies"),Object(a.b)("p",null,"Ory Kratos' browser features rely heavily on HTTP Cookies to mitigate common\nattack vectors and make the integration as easy as possible to use. Therefore it\nis important to know that"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{parentName:"li",href:"https://stackoverflow.com/questions/1612177/are-http-cookies-port-specific"},"HTTP Cookies ignore ports"),",\nmeaning the browser will send a cookie it received for\n",Object(a.b)("inlineCode",{parentName:"li"},"http://my-domain.com:1234")," to ",Object(a.b)("inlineCode",{parentName:"li"},"http://my-domain.com:4321")," as well."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{parentName:"li",href:"https://stackoverflow.com/questions/18492576/share-cookie-between-subdomain-and-domain"},"Subdomains can set HTTP Cookies for parent domains"),",\nmeaning a HTTP Cookie specifying ",Object(a.b)("inlineCode",{parentName:"li"},"domain=my-domain.com")," will be allowed to\nset even if the URL is ",Object(a.b)("inlineCode",{parentName:"li"},"http://sub.my-domain.com")," or\n",Object(a.b)("inlineCode",{parentName:"li"},"http://sub.sub.my-domain.com"),".")),Object(a.b)("p",null,"You can adjust the session cookie's domain using:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'},"session:\n  cookie:\n    domain: my-domain.com\n    path: /\n")),Object(a.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Do not set the cookie domain when using multiple domain aliases as it enforces\nthe domain - breaking sessions on your alias domains."))),Object(a.b)("p",null,"What ",Object(a.b)("strong",{parentName:"p"},"is not")," currently possible is to set up Ory Kratos in a way where you\nget session cookies running on two separate top level domains (e.g.\n",Object(a.b)("inlineCode",{parentName:"p"},"my-domain.com")," and ",Object(a.b)("inlineCode",{parentName:"p"},"another-domain.com"),"). This is tracked as\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/662"},"kratos#662"),"."))}m.isMDXComponent=!0},553:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),m=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(n),b=o,u=p["".concat(r,".").concat(b)]||p[b]||d[b]||a;return n?i.a.createElement(u,s(s({ref:t},l),{},{components:n})):i.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);