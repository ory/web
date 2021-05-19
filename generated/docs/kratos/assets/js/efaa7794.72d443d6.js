(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{506:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),o=(n(0),n(549)),i={id:"rest-api",title:"REST API Design"},c={unversionedId:"concepts/rest-api",id:"version-v0.5/concepts/rest-api",isDocsHomePage:!1,title:"REST API Design",description:"This chapter contains generally applicable information on API design. When using",source:"@site/versioned_docs/version-v0.5/concepts/rest-api.mdx",sourceDirName:"concepts",slug:"/concepts/rest-api",permalink:"/kratos/docs/v0.5/concepts/rest-api",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/concepts/rest-api.mdx",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1602674546,formattedLastUpdatedAt:"10/14/2020",frontMatter:{id:"rest-api",title:"REST API Design"},sidebar:"version-v0.5/docs",previous:{title:"Out-of-band communication via E-Mail and SMS",permalink:"/kratos/docs/v0.5/concepts/email-sms"},next:{title:"Federation",permalink:"/kratos/docs/v0.5/concepts/federation"}},p=[{value:"Pagination",id:"pagination",children:[]},{value:"Date Format",id:"date-format",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This chapter contains generally applicable information on API design. When using\nOry services, one can expect a consistent experience when interacting with REST\nAPIs."),Object(o.b)("h2",{id:"pagination"},"Pagination"),Object(o.b)("p",null,"On REST endpoints that are explicitly labeled as such, pagination information is\navailable through the ",Object(o.b)("inlineCode",{parentName:"p"},"Link")," HTTP header."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Link")," header contains a comma-delimited list of links to the following\npages (where applicable):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"First"),Object(o.b)("li",{parentName:"ul"},"Next"),Object(o.b)("li",{parentName:"ul"},"Previous (prev)"),Object(o.b)("li",{parentName:"ul"},"Last")),Object(o.b)("p",null,"Pages are created based on the values of ",Object(o.b)("inlineCode",{parentName:"p"},"per_page")," and ",Object(o.b)("inlineCode",{parentName:"p"},"page")," provided in the\nquerystring, where ",Object(o.b)("inlineCode",{parentName:"p"},"per_page")," is the page size, and ",Object(o.b)("inlineCode",{parentName:"p"},"page")," is the current page."),Object(o.b)("p",null,"In most scenarios, the ",Object(o.b)("inlineCode",{parentName:"p"},"per_page")," should be a multiple of the ",Object(o.b)("inlineCode",{parentName:"p"},"page"),"."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'> GET /resources?per_page=5&page=10 HTTP/1.1\n> Host: localhost:4445\n> User-Agent: curl/7.64.1\n> Accept: */*\n>\n< HTTP/1.1 200 OK\n< Content-Type: application/json\n< Link: </resources?per_page=5&page=0>; rel="first",</resources?per_page=5&page=15>; rel="next",</resources?per_page=5&page=5>; rel="prev",</resources?per_page=5&page=20>; rel="last"\n< Date: Mon, 22 Apr 2019 23:34:29 GMT\n< Transfer-Encoding: chunked\n<\n[...]\n')),Object(o.b)("h2",{id:"date-format"},"Date Format"),Object(o.b)("p",null,"ORY's APIs use ",Object(o.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc3339"},"rfc3339")," as the date\nformat:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n  "created_at": "2006-01-02T15:04:05Z07:00"\n}\n')))}l.isMDXComponent=!0},549:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);