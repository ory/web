(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[3042,9031],{82924:function(e,t,n){"use strict";var r=n(67294).createContext(void 0);t.Z=r},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},85350:function(e,t,n){"use strict";var r=n(67294),l=n(82924);t.Z=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},80944:function(e,t,n){"use strict";var r=n(67294),l=n(79443);t.Z=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},40351:function(e,t,n){"use strict";n.r(t);var r=n(67294),l=n(52263),a=n(36742),o=n(52655),c=n(80907);t.default=function(){var e,t=(0,l.default)().siteConfig,n=(0,c.useVersions)(),m=(0,c.useLatestVersion)(),s=n.find((function(e){return"current"===e.name})),i=n.filter((function(e){return e!==m&&"current"!==e.name})),u="https://github.com/"+t.organizationName+"/"+t.projectName,f="ORY "+((e=t.projectName).charAt(0).toUpperCase()+e.slice(1));return r.createElement(o.Z,{title:"Versions",permalink:"/versions",description:"Overview of all "+f+" documentation versions."},r.createElement("main",{className:"container margin-vert--lg"},r.createElement("h1",null,f," documentation versions"),r.createElement("div",{className:"margin-bottom--lg"},r.createElement("h3",{id:"next"},"Current version (Stable)"),r.createElement("p",null,"Here you can find the documentation for current released version."),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,m.name),r.createElement("td",null,r.createElement(a.Z,{to:m.path},"Documentation")),r.createElement("td",null,r.createElement("a",{href:u+"/blob/master/CHANGELOG.md"},"Changelog")))))),s!==m&&r.createElement("div",{className:"margin-bottom--lg"},r.createElement("h3",{id:"next"},"Next version (Unreleased)"),r.createElement("p",null,"Here you can find the documentation for unreleased version."),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,"next"),r.createElement("td",null,r.createElement(a.Z,{to:s.path},"Documentation")),r.createElement("td",null,r.createElement("a",{href:u},"Source Code")))))),i.length>0&&r.createElement("div",{className:"margin-bottom--lg"},r.createElement("h3",{id:"archive"},"Past versions (Not maintained anymore)"),r.createElement("p",null,"Here you can find documentation for previous versions."),r.createElement("table",null,r.createElement("tbody",null,i.map((function(e){return r.createElement("tr",{key:e.name},r.createElement("th",null,e.label),r.createElement("td",null,r.createElement(a.Z,{to:e.path},"Documentation")),r.createElement("td",null,r.createElement("a",{href:u+"/blob/master/CHANGELOG.md"},"Changelog")))})))))))}},546:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(22122),l=n(19756),a=n(67294),o=n(86010),c=n(36742),m=n(86700),s=n(44996),i="footerLogoLink_qW4Z";function u(e){var t=e.to,n=e.href,o=e.label,m=e.prependBaseUrlToHref,i=(0,l.Z)(e,["to","href","label","prependBaseUrlToHref"]),u=(0,s.Z)(t),f=(0,s.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(c.Z,(0,r.Z)({className:"footer__link-item"},n?{target:"_blank",rel:"noopener noreferrer",href:m?f:n}:{to:u},i),o)}var f=function(e){var t=e.url,n=e.alt;return a.createElement("img",{className:"footer__logo",alt:n,src:t})};var d=function(){var e=(0,m.LU)().footer,t=e||{},n=t.copyright,r=t.links,l=void 0===r?[]:r,c=t.logo,d=void 0===c?{}:c,E=(0,s.Z)(d.src);return e?a.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},l&&l.length>0&&a.createElement("div",{className:"row footer__links"},l.map((function(e,t){return a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(u,e))}))):null)}))),(d||n)&&a.createElement("div",{className:"text--center"},d&&d.src&&a.createElement("div",{className:"margin-bottom--sm"},d.href?a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:i},a.createElement(f,{alt:d.alt,url:E})):a.createElement(f,{alt:d.alt,url:E})),a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})))):null}}}]);