(window.webpackJsonp=window.webpackJsonp||[]).push([[43,272],{435:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(446),c=a(20),o=a(25),i=a(548),s=a(3),u=a(7),m=a(450),d=a(458),b=a(455),f=a(658),p=a(659),h=a(657),v=a(492),E=a(449),O=a(781),j=function(e){return r.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),r.a.createElement("g",{fill:"#7a7a7a"},r.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},y=a(660),g=a(108),k=a.n(g);var _=function e(t,a){return"link"===t.type?Object(d.isSamePath)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))};function N(e){var t,a,l,c=e.item,o=e.onItemClick,i=e.collapsible,d=e.activePath,b=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),f=c.items,p=c.label,h=_(c,d),v=(a=h,l=Object(n.useRef)(a),Object(n.useEffect)((function(){l.current=a}),[a]),l.current),E=Object(n.useState)((function(){return!!i&&(!h&&c.collapsed)})),O=E[0],j=E[1],y=Object(n.useRef)(null),g=Object(n.useState)(void 0),N=g[0],C=g[1],P=function(e){var t;void 0===e&&(e=!0),C(e?(null===(t=y.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(n.useEffect)((function(){h&&!v&&O&&j(!1)}),[h,v,O]);var S=Object(n.useCallback)((function(e){e.preventDefault(),N||P(),setTimeout((function(){return j((function(e){return!e}))}),100)}),[N]);return 0===f.length?null:r.a.createElement("li",{className:Object(m.a)("menu__list-item",{"menu__list-item--collapsed":O}),key:p},r.a.createElement("a",Object(s.a)({className:Object(m.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&h},t[k.a.menuLinkText]=!i,t)),onClick:i?S:void 0,href:i?"#!":void 0},b),p),r.a.createElement("ul",{className:"menu__list",ref:y,style:{height:N},onTransitionEnd:function(){O||P(!1)}},f.map((function(e){return r.a.createElement(w,{tabIndex:O?"-1":"0",key:e.label,item:e,onItemClick:o,collapsible:i,activePath:d})}))))}function C(e){var t=e.item,a=e.onItemClick,n=e.activePath,l=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),c=t.href,o=t.label,i=_(t,n);return r.a.createElement("li",{className:"menu__list-item",key:o},r.a.createElement(v.a,Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--active":i}),to:c},Object(E.a)(c)?{isNavLink:!0,exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},l),o))}function w(e){switch(e.item.type){case"category":return r.a.createElement(N,e);case"link":default:return r.a.createElement(C,e)}}var P=function(e){var t,a,l=e.path,c=e.sidebar,o=e.sidebarCollapsible,i=void 0===o||o,s=e.onCollapse,u=e.isHidden,v=Object(n.useState)(!1),E=v[0],g=v[1],_=Object(d.useThemeConfig)(),N=_.navbar.hideOnScroll,C=_.hideableSidebar,P=Object(b.a)().isAnnouncementBarClosed,S=Object(h.a)().scrollY;Object(f.a)(E);var T=Object(p.a)();return Object(n.useEffect)((function(){T===p.b.desktop&&g(!1)}),[T]),r.a.createElement("div",{className:Object(m.a)(k.a.sidebar,(t={},t[k.a.sidebarWithHideableNavbar]=N,t[k.a.sidebarHidden]=u,t))},N&&r.a.createElement(O.a,{tabIndex:-1,className:k.a.sidebarLogo}),r.a.createElement("div",{className:Object(m.a)("menu","menu--responsive","thin-scrollbar",k.a.menu,(a={"menu--show":E},a[k.a.menuWithAnnouncementBar]=!P&&0===S,a))},r.a.createElement("button",{"aria-label":E?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){g(!E)}},E?r.a.createElement("span",{className:Object(m.a)(k.a.sidebarMenuIcon,k.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement(y.a,{className:k.a.sidebarMenuIcon,height:24,width:24})),r.a.createElement("ul",{className:"menu__list"},c.map((function(e){return r.a.createElement(w,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),g(!1)},collapsible:i,activePath:l})})))),C&&r.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(m.a)("button button--secondary button--outline",k.a.collapseSidebarButton),onClick:s},r.a.createElement(j,{className:k.a.collapseSidebarButtonIcon})))},S=a(462),T=(a(110),a(111)),x=a.n(T),I=function(e){return function(t){var a,n=t.id,l=Object(u.a)(t,["id"]),c=Object(d.useThemeConfig)().navbar.hideOnScroll;return n?r.a.createElement(e,l,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(m.a)("anchor",(a={},a[x.a.enhancedAnchor]=!c,a)),id:n}),l.children,r.a.createElement("a",{className:"hash-link",href:"#"+n,title:"Direct link to heading"},"#")):r.a.createElement(e,l)}},M=a(112),D=a.n(M),H={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(S.a,e):r.a.createElement("code",e):t},a:function(e){return r.a.createElement(v.a,e)},pre:function(e){return r.a.createElement("div",Object(s.a)({className:D.a.mdxCodeBlock},e))},h1:I("h1"),h2:I("h2"),h3:I("h3"),h4:I("h4"),h5:I("h5"),h6:I("h6")},L=a(654),B=a(484),A=a(113),R=a.n(A);function W(e){var t,a,o,s,u=e.currentDocRoute,b=e.versionMetadata,f=e.children,p=Object(c.default)(),h=p.siteConfig,v=p.isClient,E=b.pluginId,O=b.permalinkToSidebar,y=b.docsSidebars,g=b.version,k=O[u.path],_=y[k],N=Object(n.useState)(!1),C=N[0],w=N[1],S=Object(n.useState)(!1),T=S[0],x=S[1],I=Object(n.useCallback)((function(){T&&x(!1),w(!C)}),[T]);return r.a.createElement(i.a,{key:v,searchMetadatas:{version:g,tag:Object(d.docVersionSearchTag)(E,g)}},r.a.createElement("div",{className:R.a.docPage},_&&r.a.createElement("div",{className:Object(m.a)(R.a.docSidebarContainer,(t={},t[R.a.docSidebarContainerHidden]=C,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(R.a.docSidebarContainer)&&C&&x(!0)},role:"complementary"},r.a.createElement(P,{key:k,sidebar:_,path:u.path,sidebarCollapsible:null===(a=null===(o=h.themeConfig)||void 0===o?void 0:o.sidebarCollapsible)||void 0===a||a,onCollapse:I,isHidden:T}),T&&r.a.createElement("div",{className:R.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:I,onClick:I},r.a.createElement(j,null))),r.a.createElement("main",{className:R.a.docMainContainer},r.a.createElement("div",{className:Object(m.a)("container padding-vert--lg",R.a.docItemWrapper,(s={},s[R.a.docItemWrapperEnhanced]=C,s))},r.a.createElement(l.a,{components:H},f)))))}t.default=function(e){var t=e.route.routes,a=e.versionMetadata,n=e.location,l=t.find((function(e){return Object(B.matchPath)(n.pathname,e)}));return l?r.a.createElement(W,{currentDocRoute:l,versionMetadata:a},Object(o.a)(t)):r.a.createElement(L.default,e)}},446:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(a),b=n,f=m["".concat(c,".").concat(b)]||m[b]||d[b]||l;return a?r.a.createElement(f,o(o({ref:t},s),{},{components:a})):r.a.createElement(f,o({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=b;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<l;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},550:function(e,t,a){"use strict";var n=a(3),r=a(7),l=a(0),c=a.n(l),o=a(450),i=a(492),s=a(458),u=a(448),m=a(57),d=a.n(m);function b(e){var t=e.to,a=e.href,l=e.label,o=e.prependBaseUrlToHref,s=Object(r.a)(e,["to","href","label","prependBaseUrlToHref"]),m=Object(u.a)(t),d=Object(u.a)(a,{forcePrependBaseUrl:!0});return c.a.createElement(i.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:o?d:a}:{to:m},s),l)}var f=function(e){var t=e.url,a=e.alt;return c.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(s.useThemeConfig)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,l=t.logo,i=void 0===l?{}:l,m=Object(u.a)(i.src);return e?c.a.createElement("footer",{className:Object(o.a)("footer",{"footer--dark":"dark"===e.style})},c.a.createElement("div",{className:"container"},r&&r.length>0&&c.a.createElement("div",{className:"row footer__links"},r.map((function(e,t){return c.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?c.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(b,e))}))):null)}))),(i||a)&&c.a.createElement("div",{className:"text--center"},i&&i.src&&c.a.createElement("div",{className:"margin-bottom--sm"},i.href?c.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:d.a.footerLogoLink},c.a.createElement(f,{alt:i.alt,url:m})):c.a.createElement(f,{alt:i.alt,url:m})),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})))):null}},654:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(548);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);