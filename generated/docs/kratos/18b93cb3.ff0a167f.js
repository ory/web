(window.webpackJsonp=window.webpackJsonp||[]).push([[20,26],{155:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(342),c=a(324),o=a(331),i=a(325),m=a(371);t.default=function(){var e=Object(c.a)().siteConfig,t=void 0===e?{}:e,a=m[0],n=m.filter((function(e){return e!==a})),s="https://github.com/"+t.organizationName+"/"+t.projectName;return l.a.createElement(r.a,{permalink:"/versions",description:"Page listing all documented site versions"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("h1",null,"Documentation versions"),l.a.createElement("div",{className:"margin-bottom--lg"},l.a.createElement("h3",{id:"latest"},"Latest version (Stable)"),l.a.createElement("p",null,"Here you can find the latest documentation."),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,a),l.a.createElement("td",null,l.a.createElement(o.a,{to:Object(i.a)("/")},"Documentation")),l.a.createElement("td",null,l.a.createElement("a",{href:s+"/blob/master/CHANGELOG.md"},"Changelog")))))),l.a.createElement("div",{className:"margin-bottom--lg"},l.a.createElement("h3",{id:"next"},"Next version (Unreleased)"),l.a.createElement("p",null,"Here you can find the documentation for unreleased version."),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"master"),l.a.createElement("td",null,l.a.createElement(o.a,{to:Object(i.a)("/next/index")},"Documentation")),l.a.createElement("td",null,l.a.createElement("a",{href:s},"Source Code")))))),n.length>0&&l.a.createElement("div",{className:"margin-bottom--lg"},l.a.createElement("h3",{id:"archive"},"Past Versions"),l.a.createElement("p",null,"Here you can find documentation for previous versions."),l.a.createElement("table",null,l.a.createElement("tbody",null,n.map((function(e){return l.a.createElement("tr",{key:e},l.a.createElement("th",null,e),l.a.createElement("td",null,l.a.createElement(o.a,{to:Object(i.a)("/"+e+"/index")},"Documentation")),l.a.createElement("td",null,l.a.createElement("a",{href:s+"/blob/master/CHANGELOG.md"},"Changelog")))})))))))}},344:function(e,t,a){"use strict";var n=a(1),l=a(9),r=a(0),c=a.n(r),o=a(329),i=a.n(o),m=a(331),s=a(324),u=a(325),d=a(132),E=a.n(d);function f(e){var t=e.to,a=e.href,r=e.label,o=Object(l.a)(e,["to","href","label"]),i=Object(u.a)(t);return c.a.createElement(m.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:i},o),r)}var v=function(e){var t=e.url,a=e.alt;return c.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(s.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},l=n.copyright,r=n.links,o=void 0===r?[]:r,m=n.logo,d=void 0===m?{}:m,h=Object(u.a)(d.src);return a?c.a.createElement("footer",{className:i()("footer",{"footer--dark":"dark"===a.style})},c.a.createElement("div",{className:"container"},o&&o.length>0&&c.a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return c.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?c.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(f,e))}))):null)}))),(d||l)&&c.a.createElement("div",{className:"text--center"},d&&d.src&&c.a.createElement("div",{className:"margin-bottom--sm"},d.href?c.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:E.a.footerLogoLink},c.a.createElement(v,{alt:d.alt,url:h})):c.a.createElement(v,{alt:d.alt,url:h})),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:l}}))),c.a.createElement("div",{id:"codefund"}),c.a.createElement("script",{src:"https://codefund.io/properties/140/funder.js",async:"async"}),c.a.createElement("script",{dangerouslySetInnerHTML:{__html:"(function () {\n  document.querySelectorAll('.tabs .tabs-nav .nav-item a').forEach(function (t) {\n    t.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n\n      t.closest('.tabs-nav').querySelectorAll('.nav-item a').forEach(function (i) {\n        i.classList.remove('active');\n      });\n\n      t.closest('.tabs').querySelectorAll('.tab-content .tab-pane').forEach(function (i) {\n        i.classList.remove('active');\n      });\n\n      t.classList.add('active');\n      document.getElementById(t.href.split('#')[1]).classList.add('active');\n      return false\n    });\n  });\n})();"}})):null}},371:function(e){e.exports=JSON.parse('["v0.3","v0.2","v0.1"]')}}]);