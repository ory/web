(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),s=(n(0),n(572)),i={id:"ssl-https-tls",title:"SSL/TLS, HTTPS, Self-Signed Certificates"},a={unversionedId:"guides/ssl-https-tls",id:"version-v1.9/guides/ssl-https-tls",isDocsHomePage:!1,title:"SSL/TLS, HTTPS, Self-Signed Certificates",description:"If you want to run ORY Hydra using self-signed TLS certificates, you can do the",source:"@site/versioned_docs/version-v1.9/guides/ssl-https-tls.mdx",sourceDirName:"guides",slug:"/guides/ssl-https-tls",permalink:"/hydra/docs/v1.9/guides/ssl-https-tls",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/guides/ssl-https-tls.mdx",version:"v1.9",lastUpdatedBy:"aeneasr",lastUpdatedAt:1607427290,formattedLastUpdatedAt:"12/8/2020",frontMatter:{id:"ssl-https-tls",title:"SSL/TLS, HTTPS, Self-Signed Certificates"},sidebar:"version-v1.9/docs",previous:{title:"Kubernetes Helm Chart",permalink:"/hydra/docs/v1.9/guides/kubernetes-helm-chart"},next:{title:"Configuring Cookies",permalink:"/hydra/docs/v1.9/guides/cookies"}},c=[],l={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"If you want to run ORY Hydra using self-signed TLS certificates, you can do the\nfollowing:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"$ openssl genrsa -out key.pem 4096\n$ openssl req -new -x509 -sha256 -key key.pem -out cert.crt -days 365\n\n$ SERVE_TLS_CERT_BASE64=$(base64 -i cert.crt)\n$ SERVE_TLS_KEY_BASE64=$(base64 -i key.pem)\n\n# or\n\n$ SERVE_TLS_KEY_PATH=/path/to/key.pem\n$ SERVE_TLS_CERT_PATH=/path/to/cert.crt\n")),Object(s.b)("p",null,"If you run Docker locally, you can then use"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'$ docker run ... \\\n    -e SERVE_TLS_CERT_BASE64="$SERVE_TLS_CERT_BASE64" \\\n    -e SERVE_TLS_KEY_BASE64="$SERVE_TLS_KEY_BASE64" \\\n    ...\n')),Object(s.b)("p",null,"or mount the files using ",Object(s.b)("inlineCode",{parentName:"p"},"--mount")," and linking to the files."))}u.isMDXComponent=!0},572:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,y=p["".concat(i,".").concat(f)]||p[f]||d[f]||s;return n?o.a.createElement(y,a(a({ref:t},l),{},{components:n})):o.a.createElement(y,a({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);