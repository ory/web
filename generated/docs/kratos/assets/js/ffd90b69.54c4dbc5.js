(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{441:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),a=(n(0),n(454)),i={id:"secret-key-rotation",title:"Secret and Key Rotation"},c={unversionedId:"guides/secret-key-rotation",id:"guides/secret-key-rotation",isDocsHomePage:!1,title:"Secret and Key Rotation",description:"Ory Kratos needs secrets that are used for encrypting, decrypting, generating",source:"@site/docs/guides/secret-key-rotation.mdx",sourceDirName:"guides",slug:"/guides/secret-key-rotation",permalink:"/kratos/docs/next/guides/secret-key-rotation",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/guides/secret-key-rotation.mdx",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619624197,formattedLastUpdatedAt:"4/28/2021",frontMatter:{id:"secret-key-rotation",title:"Secret and Key Rotation"},sidebar:"docs",previous:{title:"Multitenancy",permalink:"/kratos/docs/next/guides/multi-tenancy-multitenant"},next:{title:"High Availability",permalink:"/kratos/docs/next/guides/high-availability-ha"}},s=[],l={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Ory Kratos needs secrets that are used for encrypting, decrypting, generating\nand validating signatures, and other cryptographic tasks."),Object(a.b)("p",null,"These secrets must have high entropy (>= 256 bit). It is also a good idea to\nrotate the keys every now and then. Assuming you have the following secrets\nconfigured"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'},"secrets:\n  default:\n    - old-default-secret\n  cookie:\n    - old-cookie-secret\n")),Object(a.b)("p",null,"and want to rotate these secrets, you would add the new secrets to the top of\nthe list and keep the old secrets around. This allows the system to verify and\ndecrypt things that have been signed/encrypted with the old secret, while\ngenerating new signatures and encrypting new things using the new secret:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'},"secrets:\n  default:\n    - new-default-secret\n    - old-default-secret\n  cookie:\n    - new-cookie-secret\n    - old-cookie-secret\n")))}u.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),y=r,f=d["".concat(i,".").concat(y)]||d[y]||p[y]||a;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);