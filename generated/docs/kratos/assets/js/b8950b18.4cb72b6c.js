(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{399:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),a=(n(0),n(549)),i={id:"e2e-integration-tests",title:"Writing End-To-End and Integration Tests"},s={unversionedId:"guides/e2e-integration-tests",id:"version-v0.6/guides/e2e-integration-tests",isDocsHomePage:!1,title:"Writing End-To-End and Integration Tests",description:"We run integration tests for both the",source:"@site/versioned_docs/version-v0.6/guides/e2e-integration-tests.mdx",sourceDirName:"guides",slug:"/guides/e2e-integration-tests",permalink:"/kratos/docs/guides/e2e-integration-tests",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/guides/e2e-integration-tests.mdx",version:"v0.6",frontMatter:{id:"e2e-integration-tests",title:"Writing End-To-End and Integration Tests"}},c=[{value:"Testing React Native on Web with Cypress",id:"testing-react-native-on-web-with-cypress",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We run integration tests for both the\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/ory/kratos-selfservice-ui-node"},"NodeJS")," and\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/ory/kratos-selfservice-ui-react-native"},"React Native"),"\nreference implementation using ",Object(a.b)("a",{parentName:"p",href:"https://www.cypress.io"},"Cypress"),". You can find\nthe set up and source code for these tests in\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/blob/master/test/e2e/run.sh"},"./test/e2e/run.sh"),".\nIn principle, we start Ory Kratos with some configuration and an in-memory\ndatabase in the background"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ DSN=memory hydra serve -c ./path/to/config/kratos.yml --dev > "kratos.e2e.log" 2>&1 &\n')),Object(a.b)("p",null,"as well as our application in the background as well. Then, we start the Cypress\ntest runner which executes the different e2e tests. This works really well to\ntest compliance and integration of Ory Kratos."),Object(a.b)("p",null,"If you run Ory Kratos and your app on separate domains or ports you might want\nto add"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "chromeWebSecurity": false\n}\n')),Object(a.b)("p",null,"to your ",Object(a.b)("inlineCode",{parentName:"p"},"cypress.json")," config file."),Object(a.b)("h2",{id:"testing-react-native-on-web-with-cypress"},"Testing React Native on Web with Cypress"),Object(a.b)("p",null,"If you want to test React Native (rendered as a web application) in Cypress, you\nneed to disable security features preventing browser from executing self-service\nAPI flows. To do this, set the environment variable\n",Object(a.b)("inlineCode",{parentName:"p"},"DEV_DISABLE_API_FLOW_ENFORCEMENT=1"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ DSN=memory \\\n    DEV_DISABLE_API_FLOW_ENFORCEMENT=true\n    hydra serve -c ./path/to/config/kratos.yml --dev  > "kratos.e2e.log" 2>&1 &)\n')))}u.isMDXComponent=!0},549:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,f=l["".concat(i,".").concat(b)]||l[b]||d[b]||a;return n?o.a.createElement(f,s(s({ref:t},p),{},{components:n})):o.a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);