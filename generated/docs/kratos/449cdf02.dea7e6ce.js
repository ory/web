(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(441)),i={id:"e2e-integration-tests",title:"Writing End-To-End and Integration Tests"},s={unversionedId:"guides/e2e-integration-tests",id:"version-v0.5/guides/e2e-integration-tests",isDocsHomePage:!1,title:"Writing End-To-End and Integration Tests",description:"We run integration tests for both the",source:"@site/versioned_docs/version-v0.5/guides/e2e-integration-tests.mdx",slug:"/guides/e2e-integration-tests",permalink:"/kratos/docs/guides/e2e-integration-tests",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/guides/e2e-integration-tests.mdx",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1607456241},c=[{value:"Testing React Native on Web with Cypress",id:"testing-react-native-on-web-with-cypress",children:[]}],p={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We run integration tests for both the\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ory/kratos-selfservice-ui-node"}),"NodeJS")," and\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ory/kratos-selfservice-ui-react-native"}),"React Native"),"\nreference implementation using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.cypress.io"}),"Cypress"),". You can find\nthe set up and source code for these tests in\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ory/kratos/blob/master/test/e2e/run.sh"}),"./test/e2e/run.sh"),".\nIn principle, we start ORY Kratos with some configuration and an in-memory\ndatabase in the background"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'$ DSN=memory hydra serve -c ./path/to/config/kratos.yml --dev > "kratos.e2e.log" 2>&1 &\n')),Object(o.b)("p",null,"as well as our application in the background as well. Then, we start the Cypress\ntest runner which executes the different e2e tests. This works really well to\ntest compliance and integration of ORY Kratos."),Object(o.b)("p",null,"If you run ORY Kratos and your app on separate domains or ports you might want\nto add"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "chromeWebSecurity": false\n}\n')),Object(o.b)("p",null,"to your ",Object(o.b)("inlineCode",{parentName:"p"},"cypress.json")," config file."),Object(o.b)("h2",{id:"testing-react-native-on-web-with-cypress"},"Testing React Native on Web with Cypress"),Object(o.b)("p",null,"If you want to test React Native (rendered as a web application) in Cypress, you\nneed to disable security features preventing browser from executing self-service\nAPI flows. To do this, set the environment variable\n",Object(o.b)("inlineCode",{parentName:"p"},"DEV_DISABLE_API_FLOW_ENFORCEMENT=1"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'$ DSN=memory \\\n    DEV_DISABLE_API_FLOW_ENFORCEMENT=true\n    hydra serve -c ./path/to/config/kratos.yml --dev  > "kratos.e2e.log" 2>&1 &)\n')))}u.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,f=l["".concat(i,".").concat(d)]||l[d]||b[d]||o;return n?a.a.createElement(f,s(s({ref:t},p),{},{components:n})):a.a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);