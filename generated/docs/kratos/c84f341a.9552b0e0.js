(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{354:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(446)),i={id:"docker",title:"Docker Images"},c={unversionedId:"concepts/docker",id:"concepts/docker",isDocsHomePage:!1,title:"Docker Images",description:"Supported tags and respective Dockerfile links",source:"@site/docs/concepts/docker.md",slug:"/concepts/docker",permalink:"/kratos/docs/next/concepts/docker",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/concepts/docker.md",version:"current",lastUpdatedBy:"hackerman",lastUpdatedAt:1607676288},s=[{value:"Supported tags and respective <code>Dockerfile</code> links",id:"supported-tags-and-respective-dockerfile-links",children:[]},{value:"Image Variants",id:"image-variants",children:[]},{value:"How to use these images",id:"how-to-use-these-images",children:[{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Volumes",id:"volumes",children:[]},{value:"Examples",id:"examples",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"supported-tags-and-respective-dockerfile-links"},"Supported tags and respective ",Object(o.b)("inlineCode",{parentName:"h2"},"Dockerfile")," links"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/ory/kratos/blob/v0.4.3-alpha.1/.docker/Dockerfile"}),Object(o.b)("inlineCode",{parentName:"a"},"latest"),", ",Object(o.b)("inlineCode",{parentName:"a"},"v0.4.3-alpha.1"),", ",Object(o.b)("inlineCode",{parentName:"a"},"v0.4.3"),", ",Object(o.b)("inlineCode",{parentName:"a"},"v0.4"),", ",Object(o.b)("inlineCode",{parentName:"a"},"v0"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/ory/kratos/blob/v0.4.3-alpha.1/.docker/Dockerfile-sqlite"}),Object(o.b)("inlineCode",{parentName:"a"},"latest-sqlite"),", ",Object(o.b)("inlineCode",{parentName:"a"},"v0.4.3-alpha.1-sqlite"),", ",Object(o.b)("inlineCode",{parentName:"a"},"v0.4.3-sqlite"),", ",Object(o.b)("inlineCode",{parentName:"a"},"v0.4-sqlite"),", ",Object(o.b)("inlineCode",{parentName:"a"},"v0-sqlite")))),Object(o.b)("h2",{id:"image-variants"},"Image Variants"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Kratos")," Docker images come in two different flavors, one with and one\nwithout SQLite support. All Docker images with the postfix\n",Object(o.b)("inlineCode",{parentName:"p"},"kratos:<version>-sqlite")," in the tag are compiled with embed SQLite support and\nuses libmusl. All Docker images (",Object(o.b)("inlineCode",{parentName:"p"},"kratos:<version>"),") without the postfix\n",Object(o.b)("inlineCode",{parentName:"p"},"-sqlite")," are compiled without SQLite support and therefore also don't include\nlibmusl."),Object(o.b)("p",null,"If you don't make use of the embedded SQLite support we recommend to use the\nDocker images without SQLite support as they are smaller in size, include fewer\nlibraries and therefore have a smaller attack surface."),Object(o.b)("h2",{id:"how-to-use-these-images"},"How to use these images"),Object(o.b)("p",null,"In order to make the provided Docker images as useful as possible they can be\nconfigured through a set of supported Environment variables. In addition the\ndefault configuration directory can be bound to a directory of choice to make it\nsimple to pass in your own configuration files."),Object(o.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(o.b)("h4",{id:"dsn"},Object(o.b)("inlineCode",{parentName:"h4"},"DSN")),Object(o.b)("p",null,"This environment variable allows you to specify the database source name. As the\n",Object(o.b)("inlineCode",{parentName:"p"},"DSN")," normally consists of the url to the database system and the credentials to\naccess the database it is recommended to specify the ",Object(o.b)("inlineCode",{parentName:"p"},"DSN")," using a Environment\nvariable."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example:")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},'docker run -e DSN="memory" oryd/kratos:latest')),Object(o.b)("h4",{id:"secrets_default"},Object(o.b)("inlineCode",{parentName:"h4"},"SECRETS_DEFAULT")),Object(o.b)("p",null,"This environment variable allows you to specify the secret used to sign and\nverify signatures and encrypt things:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example:")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},'docker run -e SECRETS_DEFAULT="CHANGE-ME" oryd/kratos:v0.4.3-alpha.1')),Object(o.b)("h3",{id:"volumes"},"Volumes"),Object(o.b)("p",null,"If the file ",Object(o.b)("inlineCode",{parentName:"p"},"$HOME/.kratos.yaml")," exists, it will be used as the configuration\nfile. The provided Kratos Docker images currently do not include a default\nconfiguration file, but make it easy to pass in your own configuration file(s)\nby either binding a local directory or by creating your own custom Docker Image\nand adding the configuration file(s) to the custom image."),Object(o.b)("h4",{id:"binding-host-directory"},"Binding host directory"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example:")," In this example we start the standard Docker container with SQLite\nsupport and use the quickstart email-password example configuration files by\nbind mounting the local directory. This example assumes that you checked out the\nKratos Git repo and execute the Docker command in the Kratos Git repo directory:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'docker run -it -e DSN="memory" \\\n       --mount type=bind,source="$(pwd)"/contrib/quickstart/kratos/email-password,target=/home/ory \\\n       oryd/kratos:latest-sqlite\n')),Object(o.b)("p",null,"In general we only recommend this approach for local development."),Object(o.b)("h4",{id:"creating-custom-docker-image"},"Creating custom Docker image"),Object(o.b)("p",null,"You can create your own, custom Kratos Docker images which embeds your\nconfiguration files by simply using the official Kratos Docker images as the\nBase Image and just adding your configuration file(s) as shown in the example\nbelow:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-dockerfile"}),"FROM oryd/kratos:latest\nCOPY contrib/quickstart/kratos/email-password/.kratos.yml /home/ory\n")),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("p",null,"Below you find different examples how to use the official Kratos Docker images."))}p.isMDXComponent=!0},446:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);