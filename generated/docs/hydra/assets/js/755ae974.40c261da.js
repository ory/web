(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{287:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),o=(t(0),t(572)),l={id:"install",title:"Installation"},i={unversionedId:"install",id:"version-v1.8/install",isDocsHomePage:!1,title:"Installation",description:"Installing ORY Hydra on any system is straight forward. We provide pre-built",source:"@site/versioned_docs/version-v1.8/install.md",sourceDirName:".",slug:"/install",permalink:"/hydra/docs/v1.8/install",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.8/install.md",version:"v1.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1603793627,formattedLastUpdatedAt:"10/27/2020",frontMatter:{id:"install",title:"Installation"},sidebar:"version-v1.8/docs",previous:{title:"5 Minute Tutorial",permalink:"/hydra/docs/v1.8/5min-tutorial"},next:{title:"Do You Need OAuth2?",permalink:"/hydra/docs/v1.8/concepts/before-oauth2"}},c=[{value:"Docker",id:"docker",children:[]},{value:"macOS",id:"macos",children:[]},{value:"Linux",id:"linux",children:[]},{value:"Windows",id:"windows",children:[]},{value:"Kubernetes",id:"kubernetes",children:[]},{value:"Download Binaries",id:"download-binaries",children:[]},{value:"Building from Source",id:"building-from-source",children:[]}],s={toc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Installing ORY Hydra on any system is straight forward. We provide pre-built\nbinaries, Docker Images and support various package managers."),Object(o.b)("h2",{id:"docker"},"Docker"),Object(o.b)("p",null,"We recommend using Docker to run ORY Hydra:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ docker pull oryd/hydra:v1.8.5\n$ docker run --rm -it oryd/hydra:v1.8.5 help\n")),Object(o.b)("h2",{id:"macos"},"macOS"),Object(o.b)("p",null,"You can install ORY Hydra using ",Object(o.b)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew")," on macOS:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ brew tap ory/hydra\n$ brew install ory/hydra/hydra\n$ hydra help\n")),Object(o.b)("h2",{id:"linux"},"Linux"),Object(o.b)("p",null,"On linux, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"bash <(curl ...)")," to fetch the latest stable binary\nusing:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ bash <(curl https://raw.githubusercontent.com/ory/hydra/v1.8.5/install.sh) -b . v1.8.5\n$ ./hydra help\n")),Object(o.b)("p",null,"You may want to move ORY Hydra to your ",Object(o.b)("inlineCode",{parentName:"p"},"$PATH"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ sudo mv ./hydra /usr/local/bin/\n$ hydra help\n")),Object(o.b)("h2",{id:"windows"},"Windows"),Object(o.b)("p",null,"You can install ORY Hydra using ",Object(o.b)("a",{parentName:"p",href:"https://scoop.sh"},"scoop")," on Windows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"> scoop bucket add ory-hydra https://github.com/ory/scoop-hydra.git\n> scoop install hydra\n> hydra help\n")),Object(o.b)("h2",{id:"kubernetes"},"Kubernetes"),Object(o.b)("p",null,"Please head over to the ",Object(o.b)("a",{parentName:"p",href:"guides/kubernetes-helm-chart"},"Kubernetes Helm Chart"),"\ndocumentation."),Object(o.b)("h2",{id:"download-binaries"},"Download Binaries"),Object(o.b)("p",null,"You can download the client and server binaries on our\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/hydra/releases"},"Github releases")," page. There is\ncurrently no installer available. You have to add the Hydra binary to the PATH\nin your environment yourself, for example by putting it into ",Object(o.b)("inlineCode",{parentName:"p"},"/usr/local/bin")," or\nsomething comparable."),Object(o.b)("p",null,"Once installed, you should be able to run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ hydra help\n")),Object(o.b)("h2",{id:"building-from-source"},"Building from Source"),Object(o.b)("p",null,"If you wish to compile ORY Hydra yourself, you need to install and set up\n",Object(o.b)("a",{parentName:"p",href:"https://golang.org/"},"Go 1.12+")," and add ",Object(o.b)("inlineCode",{parentName:"p"},"$GOPATH/bin")," to your ",Object(o.b)("inlineCode",{parentName:"p"},"$PATH"),"."),Object(o.b)("p",null,"The following commands will check out the latest release tag of ORY Hydra,\ncompile it, and set up flags so that ",Object(o.b)("inlineCode",{parentName:"p"},"hydra version")," works as expected. Please\nnote that this will only work in a Bash-like shell."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ go get -d -u github.com/ory/hydra\n$ go install github.com/gobuffalo/packr/v2/packr2\n$ cd $(go env GOPATH)/src/github.com/ory/hydra\n$ GO111MODULE=on make install-stable\n$ $(go env GOPATH)/bin/hydra help\n")))}u.isMDXComponent=!0},572:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),p=r,h=d["".concat(l,".").concat(p)]||d[p]||b[p]||o;return t?a.a.createElement(h,i(i({ref:n},s),{},{components:t})):a.a.createElement(h,i({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);