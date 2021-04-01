/*! For license information please see 2.b4498eee.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{173:function(e,t,n){"use strict";var a=n(0),r=n(174);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},174:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},202:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===c)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},203:function(e,t,n){"use strict";var a=n(0),r=n(219);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},215:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(149),o=n(60),l=n.n(o);var i=function(){return r.a.createElement("nav",{"aria-label":"Skip navigation links"},r.a.createElement("button",{type:"button",tabIndex:0,className:l.a.skipToContent,onKeyDown:function(e){if(13===e.keyCode){document.activeElement.blur();var t=document.querySelector("main:first-of-type");t&&t.scrollIntoView()}}},"Skip to main content"))},s=n(148),u=n(173),d=n(61),f=n.n(d);var m=function(){var e,t=Object(u.a)(),n=t.isAnnouncementBarClosed,a=t.closeAnnouncementBar,o=Object(s.useThemeConfig)().announcementBar;if(!o)return null;var l=o.content,i=o.backgroundColor,d=o.textColor,m=o.isCloseable;return!l||m&&n?null:r.a.createElement("div",{className:f.a.announcementBar,style:{backgroundColor:i,color:d},role:"banner"},r.a.createElement("div",{className:Object(c.a)(f.a.announcementBarContent,(e={},e[f.a.announcementBarCloseable]=m,e)),dangerouslySetInnerHTML:{__html:l}}),m?r.a.createElement("button",{type:"button",className:f.a.announcementBarClose,onClick:a,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},h=n(3),v=n(7),b=n(24),p=n(20),g=n(166),O=n(167),E=n(157),k=n(23),j=n(320);function y(){return r.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var C=n(321);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(i){r=!0,c=i}finally{try{a||null==l.return||l.return()}finally{if(r)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var S="Ctrl";var T=r.a.forwardRef((function(e,t){var n=N(Object(a.useState)(null),2),c=n[0],o=n[1];return Object(a.useEffect)((function(){"undefined"!=typeof navigator&&o(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":S)}),[]),r.a.createElement("button",w({type:"button",className:"DocSearch DocSearch-Button","aria-label":"Search"},e,{ref:t}),r.a.createElement("div",{className:"DocSearch-Button-Container"},r.a.createElement(C.a,null),r.a.createElement("span",{className:"DocSearch-Button-Placeholder"},"Search")),null!==c?r.a.createElement("div",{className:"DocSearch-Button-Keys"},r.a.createElement("span",{className:"DocSearch-Button-Key"},c===S?r.a.createElement(y,null):c),r.a.createElement("span",{className:"DocSearch-Button-Key"},"K")):null)})),D=n(153);function I(){var e=function(){var e=Object(p.default)().i18n,t=Object(D.useAllDocsData)(),n=Object(D.useActivePluginAndVersion)(),a=Object(s.useDocsPreferredVersionByPluginId)(),r=[s.DEFAULT_SEARCH_TAG].concat(Object.keys(t).map((function(e){var r,c,o=(null==n||null===(r=n.activePlugin)||void 0===r?void 0:r.pluginId)===e?n.activeVersion:void 0,l=a[e],i=t[e].versions.find((function(e){return e.isLast})),u=null!==(c=null!=o?o:l)&&void 0!==c?c:i;return Object(s.docVersionSearchTag)(e,u.name)})));return{locale:e.currentLocale,tags:r}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}var L=null;function P(e){var t=e.hit,n=e.children;return r.a.createElement(E.a,{to:t.url},n)}function B(e){var t=e.state,n=e.onClose,a=Object(j.a)().generateSearchPageLink;return r.a.createElement(E.a,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function M(e){var t,c,o=e.contextualSearch,l=Object(v.a)(e,["contextualSearch"]),i=Object(p.default)().siteMetadata,s=I(),u=null!==(t=null===(c=l.searchParameters)||void 0===c?void 0:c.facetFilters)&&void 0!==t?t:[],d=o?[].concat(s,u):u,f=Object.assign({},l.searchParameters,{facetFilters:d}),m=Object(O.b)().withBaseUrl,E=Object(g.useHistory)(),j=Object(a.useRef)(null),y=Object(a.useState)(!1),C=y[0],w=y[1],N=Object(a.useState)(null),_=N[0],S=N[1],D=Object(a.useCallback)((function(){return L?Promise.resolve():Promise.all([n.e(78).then(n.bind(null,749)),Promise.all([n.e(0),n.e(79)]).then(n.bind(null,748)),n.e(0).then(n.t.bind(null,144,7))]).then((function(e){var t=e[0].DocSearchModal;L=t}))}),[]),M=Object(a.useCallback)((function(){D().then((function(){w(!0)}))}),[D,w]),x=Object(a.useCallback)((function(){w(!1)}),[w]),A=Object(a.useCallback)((function(e){D().then((function(){w(!0),S(e.key)}))}),[D,w,S]),V=Object(a.useRef)({navigate:function(e){var t=e.itemUrl;E.push(t)}}).current,R=Object(a.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:m(""+t.pathname+t.hash)})}))})).current,F=Object(a.useMemo)((function(){return function(e){return r.a.createElement(B,Object(h.a)({},e,{onClose:x}))}}),[x]),U=Object(a.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",i.docusaurusVersion),e}),[i.docusaurusVersion]);return function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,c=e.onInput,o=e.searchButtonRef;r.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),o&&o.current===document.activeElement&&c&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&c(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,c,o])}({isOpen:C,onOpen:M,onClose:x,onInput:A,searchButtonRef:j}),r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null,r.a.createElement("link",{rel:"preconnect",href:"https://"+l.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),r.a.createElement(T,{onTouchStart:D,onFocus:D,onMouseOver:D,onClick:M,ref:j}),C&&Object(b.createPortal)(r.a.createElement(L,Object(h.a)({onClose:x,initialScrollY:window.scrollY,initialQuery:_,navigator:V,transformItems:R,hitComponent:P,resultsFooterComponent:F,transformSearchClient:U},l,{searchParameters:f})),document.body))}var x=function(){var e=Object(p.default)().siteConfig;return r.a.createElement(M,e.themeConfig.algolia)},A=n(447),V=n.n(A),R=n(62),F=n.n(R),U=function(e){var t=e.icon,n=e.style;return r.a.createElement("span",{className:Object(c.a)(F.a.toggle,F.a.dark),style:n},t)},X=function(e){var t=e.icon,n=e.style;return r.a.createElement("span",{className:Object(c.a)(F.a.toggle,F.a.light),style:n},t)},H=function(e){var t=Object(s.useThemeConfig)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,c=t.lightIcon,o=t.lightIconStyle,l=Object(p.default)().isClient;return r.a.createElement(V.a,Object(h.a)({disabled:!l,icons:{checked:r.a.createElement(U,{icon:n,style:a}),unchecked:r.a.createElement(X,{icon:c,style:o})}},e))},K=n(203),G=n(322),q=function(e){var t=Object(g.useLocation)(),n=Object(a.useState)(!e),r=n[0],c=n[1],o=Object(a.useRef)(!1),l=Object(a.useState)(0),i=l[0],s=l[1],u=Object(a.useState)(0),d=u[0],f=u[1],m=Object(a.useCallback)((function(e){null!==e&&f(e.getBoundingClientRect().height)}),[]);return Object(G.a)((function(t){var n=t.scrollY;if(e&&!(n<d)){if(o.current)return o.current=!1,c(!1),void s(n);i&&0===n&&c(!0);var a=document.documentElement.scrollHeight-d,r=window.innerHeight;i&&n>=i?c(!1):n+r<a&&c(!0),s(n)}}),[i,d,o]),Object(a.useEffect)((function(){e&&i&&c(!0)}),[t.pathname]),Object(a.useEffect)((function(){e&&(o.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:r}},Y=n(323),W=n(324),z=n(220),J={default:function(){return z.a},docsVersion:function(){return n(451).default},docsVersionDropdown:function(){return n(452).default},doc:function(){return n(453).default}};function Q(e){var t=e.type,n=Object(v.a)(e,["type"]),a=function(e){void 0===e&&(e="default");var t=J[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(a,n)}var Z=n(446),$=n(325),ee=n(64),te=n.n(ee),ne="right";var ae=function(){var e,t,n=Object(s.useThemeConfig)(),o=n.navbar,l=o.items,i=o.hideOnScroll,u=o.style,d=n.colorMode.disableSwitch,f=Object(a.useState)(!1),m=f[0],v=f[1],b=Object(a.useState)(!1),p=b[0],g=b[1],O=Object(K.a)(),E=O.isDarkTheme,k=O.setLightTheme,j=O.setDarkTheme,y=q(i),C=y.navbarRef,w=y.isNavbarVisible;Object(Y.a)(m);var N=Object(a.useCallback)((function(){v(!0)}),[v]),_=Object(a.useCallback)((function(){v(!1)}),[v]),S=Object(a.useCallback)((function(e){return e.target.checked?j():k()}),[k,j]),T=Object(W.a)();Object(a.useEffect)((function(){T===W.b.desktop&&v(!1)}),[T]);var D=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:ne)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:ne)}))}}(l),I=D.leftItems,L=D.rightItems;return r.a.createElement("nav",{ref:C,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===u,"navbar--primary":"primary"===u,"navbar-sidebar--show":m},e[te.a.navbarHideable]=i,e[te.a.navbarHidden]=!w,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=l&&0!==l.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:N,onKeyDown:N},r.a.createElement($.a,null)),r.a.createElement(Z.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title",(t={},t[te.a.hideLogoText]=p,t))}),I.map((function(e,t){return r.a.createElement(Q,Object(h.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},L.map((function(e,t){return r.a.createElement(Q,Object(h.a)({},e,{key:t}))})),!d&&r.a.createElement(H,{className:te.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:E,onChange:S}),r.a.createElement(x,{handleSearchBarToggle:g,isSearchBarExpanded:p}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:_}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(Z.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:_}),!d&&m&&r.a.createElement(H,{"aria-label":"Dark mode toggle in sidebar",checked:E,onChange:S})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},l.map((function(e,t){return r.a.createElement(Q,Object(h.a)({mobile:!0},e,{onClick:_,key:t}))})))))))},re=n(221),ce=n(8),oe="light",le="dark",ie=function(e){return e===le?le:oe},se=function(){return ce.a.canUseDOM?ie(document.documentElement.getAttribute("data-theme")):oe},ue=function(e){try{localStorage.setItem("theme",ie(e))}catch(t){console.error(t)}},de=function(){var e=Object(s.useThemeConfig)().colorMode.disableSwitch,t=void 0!==e&&e,n=Object(a.useState)(se),r=n[0],c=n[1],o=Object(a.useCallback)((function(){c(oe),ue(oe)}),[]),l=Object(a.useCallback)((function(){c(le),ue(le)}),[]);return Object(a.useEffect)((function(){document.documentElement.setAttribute("data-theme",ie(r))}),[r]),Object(a.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(ie(e))}catch(n){console.error(n)}}),[c]),Object(a.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?le:oe)}))}),[]),{isDarkTheme:r===le,setLightTheme:o,setDarkTheme:l}},fe=n(219);var me=function(e){var t=de(),n=t.isDarkTheme,a=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(fe.a.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:c}},e.children)},he="docusaurus.tab.",ve=function(){var e=Object(a.useState)({}),t=e[0],n=e[1],r=Object(a.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}}),[]);return Object(a.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var a=localStorage.key(t);if(a.startsWith(he))e[a.substring(he.length)]=localStorage.getItem(a)}n(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},be="docusaurus.announcement.dismiss",pe="docusaurus.announcement.id",ge=function(){var e=Object(s.useThemeConfig)().announcementBar,t=Object(a.useState)(!0),n=t[0],r=t[1],c=Object(a.useCallback)((function(){localStorage.setItem(be,"true"),r(!0)}),[]);return Object(a.useEffect)((function(){if(e){var t=e.id,n=localStorage.getItem(pe);"annoucement-bar"===n&&(n="announcement-bar");var a=t!==n;localStorage.setItem(pe,t),a&&localStorage.setItem(be,"false"),(a||"false"===localStorage.getItem(be))&&r(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:c}},Oe=n(174);var Ee=function(e){var t=ve(),n=t.tabGroupChoices,a=t.setTabGroupChoices,c=ge(),o=c.isAnnouncementBarClosed,l=c.closeAnnouncementBar;return r.a.createElement(Oe.a.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:o,closeAnnouncementBar:l}},e.children)};function ke(e){var t=e.children;return r.a.createElement(me,null,r.a.createElement(Ee,null,r.a.createElement(s.DocsPreferredVersionContextProvider,null,t)))}function je(e){var t=e.locale,n=e.version,a=e.tag,c=t;return r.a.createElement(k.a,null,c&&r.a.createElement("meta",{name:"docsearch:language",content:c}),n&&r.a.createElement("meta",{name:"docsearch:version",content:n}),a&&r.a.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}function ye(e){var t=Object(p.default)(),n=t.siteConfig,a=t.i18n.currentLocale,c=n.favicon,o=n.themeConfig,l=o.image,i=o.metadatas,u=n.url,d=e.title,f=e.description,m=e.image,v=e.keywords,b=e.permalink,g=e.searchMetadatas,E=Object(s.useTitleFormatter)(d),j=m||l,y=Object(O.a)(j,{absolute:!0}),C=Object(O.a)(c),w=a.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null,r.a.createElement("html",{lang:w}),E&&r.a.createElement("title",null,E),E&&r.a.createElement("meta",{property:"og:title",content:E}),c&&r.a.createElement("link",{rel:"shortcut icon",href:C}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),j&&r.a.createElement("meta",{property:"og:image",content:y}),j&&r.a.createElement("meta",{property:"twitter:image",content:y}),j&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E}),b&&r.a.createElement("meta",{property:"og:url",content:u+b}),b&&r.a.createElement("link",{rel:"canonical",href:u+b}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(je,Object(h.a)({tag:s.DEFAULT_SEARCH_TAG,locale:a},g)),r.a.createElement(k.a,null,i.map((function(e,t){return r.a.createElement("meta",Object(h.a)({key:"metadata_"+t},e))}))))}n(65);var Ce=function(){Object(a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};n(66);t.a=function(e){var t=e.children,n=e.noFooter,a=e.wrapperClassName;return Ce(),r.a.createElement(ke,null,r.a.createElement(ye,e),r.a.createElement(i,null),r.a.createElement(m,null),r.a.createElement(ae,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",a)},t),!n&&r.a.createElement(re.a,null))}},219:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r},220:function(e,t,n){"use strict";var a=n(3),r=n(7),c=n(0),o=n.n(c),l=n(149),i=n(157),s=n(167),u=n(166),d=n(148);function f(e){var t=e.activeBasePath,n=e.activeBaseRegex,c=e.to,l=e.href,u=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,m=e.prependBaseUrlToHref,h=Object(r.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),v=Object(s.a)(c),b=Object(s.a)(t),p=Object(s.a)(l,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(a.a)({},l?{target:"_blank",rel:"noopener noreferrer",href:m?p:l}:Object.assign({isNavLink:!0,activeClassName:f,to:v},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(b)}}:null),h),u)}function m(e){var t=e.items,n=e.position,i=e.className,s=Object(r.a)(e,["items","position","className"]),u=Object(c.useRef)(null),d=Object(c.useRef)(null),m=Object(c.useState)(!1),h=m[0],v=m[1];Object(c.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&v(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var b=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?o.a.createElement("div",{ref:u,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===n,"dropdown--right":"right"===n,"dropdown--show":h})},o.a.createElement(f,Object(a.a)({className:b(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),v(!h))}}),s.label),o.a.createElement("ul",{ref:d,className:"dropdown__menu"},t.map((function(e,n){var c=e.className,l=Object(r.a)(e,["className"]);return o.a.createElement("li",{key:n},o.a.createElement(f,Object(a.a)({onKeyDown:function(e){if(n===t.length-1&&"Tab"===e.key){e.preventDefault(),v(!1);var a=u.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active",className:b(c,!0)},l)))})))):o.a.createElement(f,Object(a.a)({className:b(i)},s))}function h(e){var t,n,i=e.items,s=e.className,m=(e.position,Object(r.a)(e,["items","className","position"])),h=Object(c.useRef)(null),v=Object(u.useLocation)().pathname,b=Object(c.useState)((function(){var e;return null===(e=!(null!=i&&i.some((function(e){return Object(d.isSamePath)(e.to,v)}))))||void 0===e||e})),p=b[0],g=b[1],O=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};if(!i)return o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(f,Object(a.a)({className:O(s)},m)));var E=null!==(t=h.current)&&void 0!==t&&t.scrollHeight?(null===(n=h.current)||void 0===n?void 0:n.scrollHeight)+"px":void 0;return o.a.createElement("li",{className:Object(l.a)("menu__list-item",{"menu__list-item--collapsed":p})},o.a.createElement(f,Object(a.a)({role:"button",className:O(s,!0)},m,{onClick:function(){g((function(e){return!e}))}}),m.label),o.a.createElement("ul",{className:"menu__list",ref:h,style:{height:p?void 0:E}},i.map((function(e,t){var n=e.className,c=Object(r.a)(e,["className"]);return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(f,Object(a.a)({activeClassName:"menu__link--active",className:O(n)},c,{onClick:m.onClick})))}))))}t.a=function(e){var t=e.mobile,n=void 0!==t&&t,a=Object(r.a)(e,["mobile"]),c=n?h:m;return o.a.createElement(c,a)}},320:function(e,t,n){"use strict";var a=n(166),r=n(8),c=n(20);t.a=function(){var e=Object(a.useHistory)(),t=Object(a.useLocation)(),n=Object(c.default)().siteConfig,o=(n=void 0===n?{}:n).baseUrl;return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return o+"search?q="+encodeURIComponent(e)}}}},321:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a);function c(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},322:function(e,t,n){"use strict";var a=n(0),r=n(8),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var n=Object(a.useState)(c()),r=n[0],o=n[1],l=function(){var t=c();o(t),e&&e(t)};return Object(a.useEffect)((function(){var e={passive:!0};return window.addEventListener("scroll",l,e),function(){return window.removeEventListener("scroll",l,e)}}),t),r}},323:function(e,t,n){"use strict";var a=n(0);t.a=function(e){void 0===e&&(e=!0),Object(a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},324:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var a=n(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var n=Object(a.useState)(t),c=n[0],o=n[1];return Object(a.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){o(t())}}),[]),c}},325:function(e,t,n){"use strict";var a=n(3),r=n(7),c=n(0),o=n.n(c);t.a=function(e){var t=e.width,n=void 0===t?30:t,c=e.height,l=void 0===c?30:c,i=e.className,s=Object(r.a)(e,["width","height","className"]);return o.a.createElement("svg",Object(a.a)({"aria-label":"Menu",className:i,width:n,height:l,viewBox:"0 0 30 30",role:"img",focusable:"false"},s),o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},446:function(e,t,n){"use strict";var a=n(3),r=n(7),c=n(0),o=n.n(c),l=n(157),i=n(149),s=n(20),u=n(203),d=n(63),f=n.n(d),m=function(e){var t=Object(s.default)().isClient,n=Object(u.a)().isDarkTheme,c=e.sources,l=e.className,d=e.alt,m=void 0===d?"":d,h=Object(r.a)(e,["sources","className","alt"]),v=t?n?["dark"]:["light"]:["light","dark"];return o.a.createElement(o.a.Fragment,null,v.map((function(e){return o.a.createElement("img",Object(a.a)({key:e,src:c[e],alt:m,className:Object(i.a)(f.a.themedImage,f.a["themedImage--"+e],l)},h))})))},h=n(167),v=n(148),b=n(218);t.a=function(e){var t=Object(s.default)().isClient,n=Object(v.useThemeConfig)().navbar,c=n.title,i=n.logo,u=void 0===i?{src:""}:i,d=e.imageClassName,f=e.titleClassName,p=Object(r.a)(e,["imageClassName","titleClassName"]),g=Object(h.a)(u.href||"/"),O=u.target?{target:u.target}:Object(b.a)(g)?{}:{rel:"noopener noreferrer",target:"_blank"},E={light:Object(h.a)(u.src),dark:Object(h.a)(u.srcDark||u.src)};return o.a.createElement(l.a,Object(a.a)({to:g},p,O),u.src&&o.a.createElement(m,{key:t,className:d,sources:E,alt:u.alt||c||"Logo"}),null!=c&&o.a.createElement("strong",{className:f},c))}},447:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),o=f(c),l=f(n(202)),i=f(n(1)),s=f(n(448)),u=f(n(449)),d=n(450);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},m.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},448:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},449:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},450:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}},451:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),c=n(0),o=n.n(c),l=n(220),i=n(153),s=n(148);function u(e){var t,n=e.label,c=e.to,u=e.docsPluginId,d=Object(r.a)(e,["label","to","docsPluginId"]),f=Object(i.useActiveVersion)(u),m=Object(s.useDocsPreferredVersion)(u).preferredVersion,h=Object(i.useLatestVersion)(u),v=null!==(t=null!=f?f:m)&&void 0!==t?t:h,b=null!=n?n:v.label,p=null!=c?c:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(v).path;return o.a.createElement(l.a,Object(a.a)({},d,{label:b,to:p}))}},452:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),c=n(0),o=n.n(c),l=n(220),i=n(153),s=n(148),u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,n,c=e.mobile,d=e.docsPluginId,f=e.dropdownActiveClassDisabled,m=e.dropdownItemsBefore,h=e.dropdownItemsAfter,v=Object(r.a)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),b=Object(i.useActiveDocContext)(d),p=Object(i.useVersions)(d),g=Object(i.useLatestVersion)(d),O=Object(s.useDocsPreferredVersion)(d),E=O.preferredVersion,k=O.savePreferredVersionName;var j=null!==(t=null!==(n=b.activeVersion)&&void 0!==n?n:E)&&void 0!==t?t:g,y=c?"Versions":j.label,C=c?void 0:u(j).path;return o.a.createElement(l.a,Object(a.a)({},v,{mobile:c,label:y,to:C,items:function(){var e=p.map((function(e){var t=(null==b?void 0:b.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==b?void 0:b.activeVersion)},onClick:function(){k(e.name)}}})),t=[].concat(m,e,h);if(!(t.length<=1))return t}(),isActive:f?function(){return!1}:void 0}))}},453:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),c=n(0),o=n.n(c),l=n(220),i=n(153),s=n(149),u=n(148);function d(e){var t,n,c=e.docId,d=e.activeSidebarClassName,f=e.label,m=e.docsPluginId,h=Object(r.a)(e,["docId","activeSidebarClassName","label","docsPluginId"]),v=Object(i.useActiveDocContext)(m),b=v.activeVersion,p=v.activeDoc,g=Object(u.useDocsPreferredVersion)(m).preferredVersion,O=Object(i.useLatestVersion)(m),E=null!==(t=null!=b?b:g)&&void 0!==t?t:O,k=E.docs.find((function(e){return e.id===c}));if(!k)throw new Error("DocNavbarItem: couldn't find any doc with id="+c+" in version "+E.name+".\nAvailable docIds=\n- "+E.docs.join("\n- "));return o.a.createElement(l.a,Object(a.a)({exact:!0},h,{className:Object(s.a)(h.className,(n={},n[d]=p&&p.sidebar===k.sidebar,n)),label:null!=f?f:k.id,to:k.path}))}}}]);