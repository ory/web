(window.webpackJsonp=window.webpackJsonp||[]).push([[25,3,17],{106:function(e,t,a){"use strict";var n=a(3),r=a(7),l=a(0),o=a.n(l),c=a(103),s=a.n(c),i=a(97),m=a(92),f=a(96),u=a(53),d=a.n(u);function h(e){var t=e.to,a=e.href,l=e.label,c=Object(r.a)(e,["to","href","label"]),s=Object(f.a)(t);return o.a.createElement(i.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:s},c),l)}var v=function(e){var t=e.url,a=e.alt;return o.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(m.default)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},r=n.copyright,l=n.links,c=void 0===l?[]:l,i=n.logo,u=void 0===i?{}:i,E=Object(f.a)(u.src);return a?o.a.createElement("footer",{className:s()("footer",{"footer--dark":"dark"===a.style})},o.a.createElement("div",{className:"container"},c&&c.length>0&&o.a.createElement("div",{className:"row footer__links"},c.map((function(e,t){return o.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(h,e))}))):null)}))),(u||r)&&o.a.createElement("div",{className:"text--center"},u&&u.src&&o.a.createElement("div",{className:"margin-bottom--sm"},u.href?o.a.createElement("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:d.a.footerLogoLink},o.a.createElement(v,{alt:u.alt,url:E})):o.a.createElement(v,{alt:u.alt,url:E})),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}}))),o.a.createElement("div",{id:"codefund"}),o.a.createElement("script",{src:"https://codefund.io/properties/140/funder.js",async:"async"}),o.a.createElement("script",{dangerouslySetInnerHTML:{__html:"(function () {\n  document.querySelectorAll('.tabs .tabs-nav .nav-item a').forEach(function (t) {\n    t.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n\n      t.closest('.tabs-nav').querySelectorAll('.nav-item a').forEach(function (i) {\n        i.classList.remove('active');\n      });\n\n      t.closest('.tabs').querySelectorAll('.tab-content .tab-pane').forEach(function (i) {\n        i.classList.remove('active');\n      });\n\n      t.classList.add('active');\n      document.getElementById(t.href.split('#')[1]).classList.add('active');\n      return false\n    });\n  });\n})();"}})):null}},121:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(104);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);