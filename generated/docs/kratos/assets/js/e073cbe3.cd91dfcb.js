(window.webpackJsonp=window.webpackJsonp||[]).push([[402],{468:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(553)),l={id:"install",title:"Installation"},s={unversionedId:"install",id:"version-v0.1/install",isDocsHomePage:!1,title:"Installation",description:"Installing ORY Kratos on any system is straight forward. We provide pre-built",source:"@site/versioned_docs/version-v0.1/install.md",sourceDirName:".",slug:"/install",permalink:"/kratos/docs/v0.1/install",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.1/install.md",version:"v0.1",lastUpdatedBy:"hackerman",lastUpdatedAt:1586177162,formattedLastUpdatedAt:"4/6/2020",frontMatter:{id:"install",title:"Installation"},sidebar:"version-v0.1/docs",previous:{title:"Quickstart",permalink:"/kratos/docs/v0.1/quickstart"},next:{title:"Overview",permalink:"/kratos/docs/v0.1/concepts/index"}},i=[{value:"Docker",id:"docker",children:[]},{value:"macOS",id:"macos",children:[]},{value:"Linux",id:"linux",children:[]},{value:"Windows",id:"windows",children:[]},{value:"Download Binaries",id:"download-binaries",children:[]},{value:"Building from Source",id:"building-from-source",children:[]}],c={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Installing ORY Kratos on any system is straight forward. We provide pre-built\nbinaries, Docker Images and support various package managers."),Object(o.b)("h2",{id:"docker"},"Docker"),Object(o.b)("p",null,"We recommend using Docker to run ORY Kratos:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ docker pull oryd/kratos\n$ docker run --rm -it oryd/kratos help\n")),Object(o.b)("h2",{id:"macos"},"macOS"),Object(o.b)("p",null,"You can install ORY Kratos using ",Object(o.b)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew")," on macOS:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ brew tap ory/kratos\n$ brew install ory/kratos/kratos\n$ kratos help\n")),Object(o.b)("h2",{id:"linux"},"Linux"),Object(o.b)("p",null,"On linux, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"curl | bash")," to fetch the latest stable binary using:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ curl https://raw.githubusercontent.com/ory/kratos/master/install.sh | bash -s -- -b .\n$ ./kratos help\n")),Object(o.b)("p",null,"You may want to move ORY Kratos to your ",Object(o.b)("inlineCode",{parentName:"p"},"$PATH"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ sudo mv ./kratos /usr/local/bin/\n$ kratos help\n")),Object(o.b)("h2",{id:"windows"},"Windows"),Object(o.b)("p",null,"You can install ORY Kratos using ",Object(o.b)("a",{parentName:"p",href:"https://scoop.sh"},"scoop")," on Windows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"> scoop bucket add ory-kratos https://github.com/ory/scoop-kratos.git\n> scoop install kratos\n> kratos help\n")),Object(o.b)("h2",{id:"download-binaries"},"Download Binaries"),Object(o.b)("p",null,"The client and server ",Object(o.b)("strong",{parentName:"p"},"binaries are downloadable at the\n",Object(o.b)("a",{parentName:"strong",href:"https://github.com/ory/kratos/releases"},"releases tab")),". There is currently no\ninstaller available. You have to add the Kratos binary to the PATH environment\nvariable yourself or put the binary in a location that is already in your\n",Object(o.b)("inlineCode",{parentName:"p"},"$PATH")," (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"/usr/local/bin"),", ...)."),Object(o.b)("p",null,"Once installed, you should be able to run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ kratos help\n")),Object(o.b)("h2",{id:"building-from-source"},"Building from Source"),Object(o.b)("p",null,"If you wish to compile ORY Kratos yourself, you need to install and set up\n",Object(o.b)("a",{parentName:"p",href:"https://golang.org/"},"Go 1.12+")," and add ",Object(o.b)("inlineCode",{parentName:"p"},"$GOPATH/bin")," to your ",Object(o.b)("inlineCode",{parentName:"p"},"$PATH"),"."),Object(o.b)("p",null,"The following commands will check out the latest release tag of ORY Kratos and\ncompile it and set up flags so that ",Object(o.b)("inlineCode",{parentName:"p"},"kratos version")," works as expected. Please\nnote that this will only work with a linux shell like bash or sh."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ go get -d -u github.com/ory/kratos\n$ cd $(go env GOPATH)/src/github.com/ory/kratos\n$ GO111MODULE=on make install\n$ $(go env GOPATH)/bin/kratos help\n")))}u.isMDXComponent=!0},553:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);