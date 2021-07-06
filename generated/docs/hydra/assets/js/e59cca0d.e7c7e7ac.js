(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[54631],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},40570:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a=["components"],l={id:"go",title:"Go"},s=void 0,c={unversionedId:"sdk/go",id:"version-v1.4/sdk/go",isDocsHomePage:!1,title:"Go",description:"To install the Go SDK, run:",source:"@site/versioned_docs/version-v1.4/sdk/go.md",sourceDirName:"sdk",slug:"/sdk/go",permalink:"/hydra/docs/v1.4/sdk/go",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.4/sdk/go.md",version:"v1.4",lastUpdatedBy:"hackerman",lastUpdatedAt:1586178985,formattedLastUpdatedAt:"4/6/2020",frontMatter:{id:"go",title:"Go"},sidebar:"version-v1.4/docs",previous:{title:"Overview",permalink:"/hydra/docs/v1.4/sdk/index"},next:{title:"JavaScript",permalink:"/hydra/docs/v1.4/sdk/js"}},u=[{value:"Configuration",id:"configuration",children:[]},{value:"Making requests",id:"making-requests",children:[]},{value:"With Authorization",id:"with-authorization",children:[{value:"On every request",id:"on-every-request",children:[]}]}],p={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To install the Go SDK, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"go get -u -d github.com/ory/hydra-client-go\n")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"We use code generation to generate our SDKs. The Go SDK is generated using\n",(0,i.kt)("a",{parentName:"p",href:"http://goswagger.io"},(0,i.kt)("inlineCode",{parentName:"a"},"go-swagger")),". The SDK is easily set up:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/ory/hydra-client-go/client"\n\nfunc main() {\n    adminURL := url.Parse("https://hydra.localhost:4445")\n    admin := hydra.NewHTTPClientWithConfig(nil, &client.TransportConfig{Schemes: []string{adminURL.Scheme}, Host: adminURL.Host, BasePath: adminURL.Path})\n\n    // admin.Admin.CreateOAuth2Client(...\n\n    publicURL := url.Parse("https://hydra.localhost:4444")\n    public := hydra.NewHTTPClientWithConfig(nil, &client.TransportConfig{Schemes: []string{publicURL.Scheme}, Host: publicURL.Host, BasePath: publicURL.Path})\n\n    // public.Public.RevokeOAuth2Token(...\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Be aware that endpoints /oauth2/auth and /oauth2/token MUST NOT be consumed\nusing this SDK. Use\n",(0,i.kt)("a",{parentName:"p",href:"https://godoc.org/golang.org/x/oauth2"},"golang.org/x/oauth2")," instead.")),(0,i.kt)("h2",{id:"making-requests"},"Making requests"),(0,i.kt)("p",null,"Making requests is straight forward:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/ory/hydra-client-go/client"\n\nfunc main() {\n    adminURL := url.Parse("https://hydra.localhost:4445")\n    admin := hydra.NewHTTPClientWithConfig(nil, &client.TransportConfig{Schemes: []string{adminURL.Scheme}, Host: adminURL.Host, BasePath: adminURL.Path})\n\n    // It is important to create the parameters using `New...`, otherwise requests will fail!\n    result, err := c.Admin.CreateOAuth2Client(\n        admin.NewCreateOAuth2ClientParams().WithBody(&models.Client{\n        ClientID: "scoped",\n    }))\n    if err != nil {\n        // err is not nil when the request failed (usually a 404, 401, 409 error)\n        // You can distinguish the errors by type-asserting err, for example:\n        switch e := err.(type) {\n        case (*admin.CreateOAuth2ClientConflict):\n            // do something...\n        }\n    }\n\n    // if err is nil, then result is set. The result payload/body can be retrieved using result.Payload.\n    fmt.Printf("Got client: %+v", result.Payload)\n}\n')),(0,i.kt)("h2",{id:"with-authorization"},"With Authorization"),(0,i.kt)("p",null,"Some endpoints require e.g. Basic Authorization:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/ory/hydra-client-go/client"\nimport httptransport "github.com/go-openapi/runtime/client"\n\nfunc main() {\n    publicURL := url.Parse("https://hydra.localhost:4444")\n    public := hydra.NewHTTPClientWithConfig(nil, &client.TransportConfig{Schemes: []string{publicURL.Scheme}, Host: publicURL.Host, BasePath: publicURL.Path})\n\n    _, err := client.Public.RevokeOAuth2Token(\n        public.NewRevokeOAuth2TokenParams().WithToken(c.token),\n        httptransport.BasicAuth("my-client", "foobar"),\n    )\n}\n')),(0,i.kt)("p",null,"For more information on Authorization, check the\n",(0,i.kt)("a",{parentName:"p",href:"https://goswagger.io/generate/client.html#authentication"},"go-swagger documentation"),"."),(0,i.kt)("h3",{id:"on-every-request"},"On every request"),(0,i.kt)("p",null,"You may want to protect ORY Hydra using e.g. OAuth2 Access Tokens. In that case,\nyou can enhance the SDK by using the OAuth2 Client:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/ory/hydra-client-go/client"\nimport httptransport "github.com/go-openapi/runtime/client"\nimport "golang.org/x/oauth2/clientcredentials"\n\nfunc main() {\n    publicURL := url.Parse("https://hydra.localhost:4444")\n    ht := httptransport.NewWithClient(\n        publicURL.Host,\n        publicURL.Path,\n        []string{publicURL.Scheme},\n        clientcredentials.Config{\n            TokenURL:"http://hydra.localhost:4444/oauth2/token",\n            ClientID:"my-client",\n            ClientSecret:"my-secret",\n            Scopes:[]string{"scope-a", "scope-b"},\n        }.Client(context.Background()),\n    )\n\n    public := hydra.New(ht, nil)\n\n    _, err := client.Public.RevokeOAuth2Token(\n        public.NewRevokeOAuth2TokenParams().WithToken(c.token),\n        httptransport.BasicAuth("my-client", "foobar"),\n    )\n}\n')))}h.isMDXComponent=!0}}]);