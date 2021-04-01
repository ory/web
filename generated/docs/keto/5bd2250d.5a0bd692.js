(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{145:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,h=u["".concat(o,".").concat(b)]||u[b]||d[b]||s;return a?r.a.createElement(h,c(c({ref:t},l),{},{components:a})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<s;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},151:function(e,t,a){"use strict";var n=a(21),r={punctuation:/[:#@()]/},s={pattern:/[^:#@()\n]+:/,inside:Object.assign({},r,{namespace:/.*/})},o={pattern:/[^:#@()\n]+#/,inside:Object.assign({},r,{symbol:/.*/})},c={pattern:/[^:#@()\n]+/,alias:"string"},i={pattern:/@[^:#@()\n]+/,inside:Object.assign({},r,{keyword:/.*/})},l={pattern:/@\(([^:#@()\n]+:)?([^:#@()\n]+)#([^:#@()\n]*)\)/,inside:{punctuation:/[@()]/,namespace:s,object:o,relation:c}};n.a.languages["keto-relation-tuples"]={comment:/\/\/.*(\n|$)/,"relation-tuple":{pattern:/([^:#@()\n]+:)?([^:#@()\n]+)#([^:#@()\n]+)@?((\(([^:#@()\n]+:)?([^:#@()\n]+)#([^:#@()\n]*)\))|([^:#@()\n]+))/,inside:{namespace:s,object:o,subjectID:i,subjectSet:l,relation:c}}},t.a=function(){}},217:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(179),o=a(180),c=a(258),i=a.n(c),l=a(216),p=a(56),u=a.n(p),d=function(e,t){if(!e)return 0;var a=t.findIndex((function(t){return t.indexOf(e)>-1}));return-1===a?0:a},b=function(e){var t=e.src,a=e.title,s=Object(n.useState)(""),o=s[0],c=s[1];Object(n.useEffect)((function(){var a,n,r;i()(t.replace("github.com","raw.githubusercontent.com").replace("/blob/","/")).then((function(e){return e.text()})).then((a=e,n=a.startAt,r=a.endAt,function(e){var t=e.split("\n"),a=d(n,t);a>0&&(t=["// ..."].concat(t.slice(a,-1)));var s=d(r,t);return s>0&&(t=[].concat(t.slice(0,s+1),["// ..."])),t.join("\n")})).then(c).catch(console.error)}),[]);var p="language-"+function(e){var t=e.split(".").pop();switch(t){case"jsx":return"jsx";case"tsx":return"tsx";case"ts":return"typescript";case"go":return"go";case"yaml":case"yml":return"yaml";case"js":return"javascript";case"html":return"html";case"pug":return"pug";default:return t}}(t),b='title="'+(a||function(e){var t=e.match(new RegExp("https://github.com/[^/]+/[^/]+/blob/[^/]+/(.+)","i"))||[];return t.length>=2?t[1]:e}(t))+'"';return r.a.createElement("div",{className:u.a.container},r.a.createElement(l.a,{metastring:b,className:p,children:o}))};t.a=function(e){var t=e.sampleId,a=e.version;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{values:[{label:"gRPC Go",value:"grpc-go"},{label:"gRPC node.js",value:"grpc-nodejs"},{label:"REST",value:"rest"},{label:"Keto Client CLI",value:"cli"}],defaultValue:"grpc-go"},r.a.createElement(o.a,{value:"grpc-go"},r.a.createElement(b,{src:"https://github.com/ory/keto/blob/"+a+"/contrib/docs-code-samples/"+t+"/main.go"})),r.a.createElement(o.a,{value:"grpc-nodejs"},r.a.createElement(b,{src:"https://github.com/ory/keto/blob/"+a+"/contrib/docs-code-samples/"+t+"/index.js"})),r.a.createElement(o.a,{value:"rest"},r.a.createElement(b,{src:"https://github.com/ory/keto/blob/"+a+"/contrib/docs-code-samples/"+t+"/curl.sh"})),r.a.createElement(o.a,{value:"cli"},r.a.createElement(b,{src:"https://github.com/ory/keto/blob/"+a+"/contrib/docs-code-samples/"+t+"/cli.sh"}))),r.a.createElement(b,{src:"https://github.com/ory/keto/blob/"+a+"/contrib/docs-code-samples/"+t+"/expected_output.txt",title:"Result"}))}},93:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),s=(a(0),a(145)),o=a(217),c=a(151),i={title:"Expand API: Display who has Access to an Object"},l={unversionedId:"guides/expand-api-display-who-has-access",id:"guides/expand-api-display-who-has-access",isDocsHomePage:!1,title:"Expand API: Display who has Access to an Object",description:"RelationTuplePrism()",source:"@site/docs/guides/expand-api-display-who-has-access.mdx",slug:"/guides/expand-api-display-who-has-access",permalink:"/keto/docs/next/guides/expand-api-display-who-has-access",editUrl:"https://github.com/ory/keto/edit/master/docs/docs/guides/expand-api-display-who-has-access.mdx",version:"current",lastUpdatedBy:"zepatrik",lastUpdatedAt:1617278988,sidebar:"docs",previous:{title:"List API: Display all Objects a User has Access to",permalink:"/keto/docs/next/guides/list-api-display-objects"},next:{title:"Going to Production",permalink:"/keto/docs/next/guides/production"}};Object(c.a)();var p=[{value:"Example",id:"example",children:[{value:"Displaying who has Access",id:"displaying-who-has-access",children:[]},{value:"Maximum Tree Depth",id:"maximum-tree-depth",children:[]},{value:"Analyzing the Tree",id:"analyzing-the-tree",children:[]}]}],u={rightToc:p};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This guide will explain how to use Ory Keto's expand-API to display who has\naccess to an object, and why. Please refer to the\n",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/next/reference/proto-api"}),"gRPC")," and ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/next/reference/api"}),"REST")," API\nreference documentation for all details. In general, the expand-API allows to\nexpand a given subject set into all its effective subjects."),Object(s.b)("h2",{id:"example"},"Example"),Object(s.b)("p",null,"As an example, we want to look at a file sharing application. Files are\nhierarchically organized in a directory structure. Every user owns files and\ndirectories, and can grant any other user access to them on a per-file or\nper-directory basis. Users can only see and access files they own or were\ngranted access by the owner."),Object(s.b)("p",null,"Directories and files are stored in Ory Keto within the ",Object(s.b)("inlineCode",{parentName:"p"},"directories")," and\n",Object(s.b)("inlineCode",{parentName:"p"},"files")," namespaces respectively. They are identified by a UUID that the\napplication maps to the actual object metadata. Users are also identified by and\nmapped to a UUID."),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"For the sake of readability, the code samples use the object path and user name\ninstead. Please refer to the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/next/concepts/objects"}),"objects")," and\n",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/next/concepts/subjects"}),"subjects")," pages for why the mapping is necessary."))),Object(s.b)("h3",{id:"displaying-who-has-access"},"Displaying who has Access"),Object(s.b)("p",null,"To assist users with managing permissions for their files, the application has\nto display exactly who has access to a file and why. In this example, we assume\nthat the application knows the following files and directories:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"\u251c\u2500 photos            (owner: maureen; shared with laura)\n   \u251c\u2500 beach.jpg      (owner: maureen)\n   \u251c\u2500 mountains.jpg  (owner: laura)\n")),Object(s.b)("p",null,"This is represented in Ory Keto by the following\n",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/next/concepts/relation-tuples"}),"relation tuples"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-keto-relation-tuples"}),"// ownership\ndirectories:/photos#owner@maureen\nfiles:/photos/beach.jpg#owner@maureen\nfiles:/photos/mountains.jpg#owner@laura\n\n// maureen granted access to /photos to laura\ndirectories:/photos#access@laura\n\n// the following tuples are defined implicitly through subject set rewrites (not supported yet)\ndirectories:/photos#access@(directories:/photos#owner)\nfiles:/photos/beach.jpg#access@(files:/photos/beach.jpg#owner)\nfiles:/photos/beach.jpg#access@(directories:/photos#access)\nfiles:/photos/mountains.jpg#access@(files:/photos/mountains.jpg#owner)\nfiles:/photos/mountains.jpg#access@(directories:/photos#access)\n\n// the follwoing tuples are required to allow the subject set rewrites (not supported yet)\ndirectories:/photos#parent@(files:/photos/beach.jpg#_)\ndirectories:/photos#parent@(files:/photos/mountains.jpg#_)\n")),Object(s.b)("p",null,"The user ",Object(s.b)("inlineCode",{parentName:"p"},"maureen")," now wants to manage ",Object(s.b)("inlineCode",{parentName:"p"},"access")," for the file\n",Object(s.b)("inlineCode",{parentName:"p"},"/photos/beach.jpg"),". Therefore, the application uses the expand-API to get a\ntree of everyone who has access to that file:"),Object(s.b)(o.a,{sampleId:"expand-api-display-access/01-expand-beach",version:"master",mdxType:"CodeTabs"}),Object(s.b)("h3",{id:"maximum-tree-depth"},"Maximum Tree Depth"),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"max-depth")," parameter is important to keep the request latency within an\nacceptable bound, but also abstract away the most basic subject sets. In many\ncases the application does not want to resolve all subject sets, but rather\nwants to display that e.g. ",Object(s.b)("inlineCode",{parentName:"p"},"Everyone in the company")," or ",Object(s.b)("inlineCode",{parentName:"p"},"Admins")," have a specific\nrelation."),Object(s.b)("p",null,"In this example the application knows the rough structure of the relation tuples\nit uses and can therefore determine that ",Object(s.b)("inlineCode",{parentName:"p"},"max-depth=3")," is sufficient to display\nall relevant relations:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"directly granted access (depth 1)"),Object(s.b)("li",{parentName:"ol"},"indirectly granted access through ownership (depth 2)"),Object(s.b)("li",{parentName:"ol"},"indirectly granted access through ownership of the parent (depth 3)")),Object(s.b)("h3",{id:"analyzing-the-tree"},"Analyzing the Tree"),Object(s.b)("p",null,"The tree does not only include the subject IDs (in this case usernames), but\nalso for what reason they were included. This can be useful for users to audits\npermissions. Also, in many cases the application would not want to list all\nsubject IDs but rather abstract away some subject sets."))}d.isMDXComponent=!0}}]);