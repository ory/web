(window.webpackJsonp=window.webpackJsonp||[]).push([[131,15,93],{261:function(e,t,a){"use strict";var r=a(3),l=a(8),n=a(0),o=a.n(n),c=a(202),i=a(214),m=a(201),s=a(215),f=a(61),u=a.n(f);function h(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,m=Object(l.a)(e,["to","href","label","prependBaseUrlToHref"]),f=Object(s.a)(t),u=Object(s.a)(a,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(r.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?u:a}:{to:f},m),n)}var d=function(e){var t=e.url,a=e.alt;return o.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(m.useThemeConfig)().footer,t=e||{},a=t.copyright,r=t.links,l=void 0===r?[]:r,n=t.logo,i=void 0===n?{}:n,f=Object(s.a)(i.src);return e?o.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},o.a.createElement("div",{className:"container"},l&&l.length>0&&o.a.createElement("div",{className:"row footer__links"},l.map((function(e,t){return o.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(h,e))}))):null)}))),(i||a)&&o.a.createElement("div",{className:"text--center"},i&&i.src&&o.a.createElement("div",{className:"margin-bottom--sm"},i.href?o.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:u.a.footerLogoLink},o.a.createElement(d,{alt:i.alt,url:f})):o.a.createElement(d,{alt:i.alt,url:f})),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})))):null}},313:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),n=a(259),o=a(207);t.default=function(){return l.a.createElement(n.a,{title:"Page Not Found"},l.a.createElement("main",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},l.a.createElement(o.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),l.a.createElement("p",null,l.a.createElement(o.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),l.a.createElement("p",null,l.a.createElement(o.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);