(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(481)),i={id:"ssl-https-tls",title:"SSL/TLS, HTTPS, Self-Signed Certificates"},s={unversionedId:"guides/ssl-https-tls",id:"version-v1.9/guides/ssl-https-tls",isDocsHomePage:!1,title:"SSL/TLS, HTTPS, Self-Signed Certificates",description:"If you want to run ORY Hydra using self-signed TLS certificates, you can do the",source:"@site/versioned_docs/version-v1.9/guides/ssl-https-tls.mdx",slug:"/guides/ssl-https-tls",permalink:"/hydra/docs/guides/ssl-https-tls",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/guides/ssl-https-tls.mdx",version:"v1.9",lastUpdatedBy:"aeneasr",lastUpdatedAt:1603200622,sidebar:"version-v1.9/docs",previous:{title:"Kubernetes Helm Chart",permalink:"/hydra/docs/guides/kubernetes-helm-chart"},next:{title:"Configuring Cookies",permalink:"/hydra/docs/guides/cookies"}},c=[],u={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"If you want to run ORY Hydra using self-signed TLS certificates, you can do the\nfollowing:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ openssl genrsa -out key.pem 4096\n$ openssl req -new -x509 -sha256 -key key.pem -out cert.crt -days 365\n\n$ SERVE_TLS_CERT_BASE64=$(base64 -i cert.crt)\n$ SERVE_TLS_KEY_BASE64=$(base64 -i key.pem)\n\n# or\n\n$ SERVE_TLS_KEY_PATH=/path/to/key.pem\n$ SERVE_TLS_CERT_PATH=/path/to/cert.crt\n")),Object(a.b)("p",null,"If you run Docker locally, you can then use"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'$ docker run ... \\\n    -e SERVE_TLS_CERT_BASE64="$SERVE_TLS_CERT_BASE64" \\\n    -e SERVE_TLS_KEY_BASE64="$SERVE_TLS_KEY_BASE64" \\\n    ...\n')),Object(a.b)("p",null,"or mount the files using ",Object(a.b)("inlineCode",{parentName:"p"},"--mount")," and linking to the files."))}l.isMDXComponent=!0},481:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,y=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(y,s(s({ref:t},u),{},{components:n})):o.a.createElement(y,s({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);