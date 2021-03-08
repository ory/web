/*! For license information please see 3.11d592ea.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{448:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var a=n(20),r=n(449);function c(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var c=void 0===a?{}:a,o=c.forcePrependBaseUrl,i=void 0!==o&&o,l=c.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(i)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(c,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},449:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},455:function(e,t,n){"use strict";var a=n(0),r=n(456);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},456:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},459:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===c)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},492:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(11),o=n(449),i=n(8),l=Object(a.createContext)({collectLink:function(){}}),s=n(448),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,d,f=e.isNavLink,m=e.to,h=e.href,v=e.activeClassName,b=e.isActive,p=e["data-noBrokenLinkCheck"],g=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),O=Object(s.b)().withBaseUrl,j=Object(a.useContext)(l),k=m||h,E=Object(o.a)(k),y=null==k?void 0:k.replace("pathname://",""),C=void 0!==y?function(e){return e.startsWith("/")}(n=y)?O(n):n:void 0,w=Object(a.useRef)(!1),N=f?c.e:c.c,_=i.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!_&&E&&window.docusaurus.prefetch(C),function(){_&&d&&d.disconnect()}}),[C,_,E]);var S=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,T=!C||!E||S;return C&&E&&!S&&!p&&j.collectLink(C),T?r.a.createElement("a",Object.assign({href:C},k&&!E&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(N,Object.assign({},g,{onMouseEnter:function(){w.current||(window.docusaurus.preload(C),w.current=!0)},innerRef:function(e){var t,n;_&&e&&E&&(t=e,n=function(){window.docusaurus.prefetch(C)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:C||""},f&&{isActive:b,activeClassName:v}))}},548:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(450),o=n(59),i=n.n(o);var l=function(){return r.a.createElement("nav",{"aria-label":"Skip navigation links"},r.a.createElement("button",{type:"button",tabIndex:0,className:i.a.skipToContent,onKeyDown:function(e){if(13===e.keyCode){document.activeElement.blur();var t=document.querySelector("main:first-of-type");t&&t.scrollIntoView()}}},"Skip to main content"))},s=n(458),u=n(455),d=n(60),f=n.n(d);var m=function(){var e,t=Object(u.a)(),n=t.isAnnouncementBarClosed,a=t.closeAnnouncementBar,o=Object(s.useThemeConfig)().announcementBar;if(!o)return null;var i=o.content,l=o.backgroundColor,d=o.textColor,m=o.isCloseable;return!i||m&&n?null:r.a.createElement("div",{className:f.a.announcementBar,style:{backgroundColor:l,color:d},role:"banner"},r.a.createElement("div",{className:Object(c.a)(f.a.announcementBarContent,(e={},e[f.a.announcementBarCloseable]=m,e)),dangerouslySetInnerHTML:{__html:i}}),m?r.a.createElement("button",{type:"button",className:f.a.announcementBarClose,onClick:a,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},h=n(3),v=n(7),b=n(24),p=n(20),g=n(484),O=n(448),j=n(492),k=n(22),E=n(655);function y(){return r.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var C=n(656);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(l){r=!0,c=l}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var S="Ctrl";var T=r.a.forwardRef((function(e,t){var n=N(Object(a.useState)(null),2),c=n[0],o=n[1];return Object(a.useEffect)((function(){"undefined"!=typeof navigator&&o(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":S)}),[]),r.a.createElement("button",w({type:"button",className:"DocSearch DocSearch-Button","aria-label":"Search"},e,{ref:t}),r.a.createElement("div",{className:"DocSearch-Button-Container"},r.a.createElement(C.a,null),r.a.createElement("span",{className:"DocSearch-Button-Placeholder"},"Search")),null!==c?r.a.createElement("div",{className:"DocSearch-Button-Keys"},r.a.createElement("span",{className:"DocSearch-Button-Key"},c===S?r.a.createElement(y,null):c),r.a.createElement("span",{className:"DocSearch-Button-Key"},"K")):null)})),I=n(460);function L(){var e=function(){var e=Object(p.default)().i18n,t=Object(I.useAllDocsData)(),n=Object(I.useActivePluginAndVersion)(),a=Object(s.useDocsPreferredVersionByPluginId)(),r=[s.DEFAULT_SEARCH_TAG].concat(Object.keys(t).map((function(e){var r,c,o=(null==n||null===(r=n.activePlugin)||void 0===r?void 0:r.pluginId)===e?n.activeVersion:void 0,i=a[e],l=t[e].versions.find((function(e){return e.isLast})),u=null!==(c=null!=o?o:i)&&void 0!==c?c:l;return Object(s.docVersionSearchTag)(e,u.name)})));return{locale:e.currentLocale,tags:r}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}var P=null;function D(e){var t=e.hit,n=e.children;return r.a.createElement(j.a,{to:t.url},n)}function B(e){var t=e.state,n=e.onClose,a=Object(E.a)().generateSearchPageLink;return r.a.createElement(j.a,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function A(e){var t,c,o=e.contextualSearch,i=Object(v.a)(e,["contextualSearch"]),l=Object(p.default)().siteMetadata,s=L(),u=null!==(t=null===(c=i.searchParameters)||void 0===c?void 0:c.facetFilters)&&void 0!==t?t:[],d=o?[].concat(s,u):u,f=Object.assign({},i.searchParameters,{facetFilters:d}),m=Object(O.b)().withBaseUrl,j=Object(g.useHistory)(),E=Object(a.useRef)(null),y=Object(a.useState)(!1),C=y[0],w=y[1],N=Object(a.useState)(null),_=N[0],S=N[1],I=Object(a.useCallback)((function(){return P?Promise.resolve():Promise.all([n.e(376).then(n.bind(null,1253)),Promise.all([n.e(0),n.e(377)]).then(n.bind(null,1252)),n.e(0).then(n.t.bind(null,445,7))]).then((function(e){var t=e[0].DocSearchModal;P=t}))}),[]),A=Object(a.useCallback)((function(){I().then((function(){w(!0)}))}),[I,w]),M=Object(a.useCallback)((function(){w(!1)}),[w]),x=Object(a.useCallback)((function(e){I().then((function(){w(!0),S(e.key)}))}),[I,w,S]),V=Object(a.useRef)({navigate:function(e){var t=e.itemUrl;j.push(t)}}).current,R=Object(a.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:m(""+t.pathname+t.hash)})}))})).current,U=Object(a.useMemo)((function(){return function(e){return r.a.createElement(B,Object(h.a)({},e,{onClose:M}))}}),[M]),F=Object(a.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",l.docusaurusVersion),e}),[l.docusaurusVersion]);return function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,c=e.onInput,o=e.searchButtonRef;r.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),o&&o.current===document.activeElement&&c&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&c(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,c,o])}({isOpen:C,onOpen:A,onClose:M,onInput:x,searchButtonRef:E}),r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null,r.a.createElement("link",{rel:"preconnect",href:"https://"+i.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),r.a.createElement(T,{onTouchStart:I,onFocus:I,onMouseOver:I,onClick:A,ref:E}),C&&Object(b.createPortal)(r.a.createElement(P,Object(h.a)({onClose:M,initialScrollY:window.scrollY,initialQuery:_,navigator:V,transformItems:R,hitComponent:D,resultsFooterComponent:U,transformSearchClient:F},i,{searchParameters:f})),document.body))}var M=function(){var e=Object(p.default)().siteConfig;return r.a.createElement(A,e.themeConfig.algolia)},x=n(782),V=n.n(x),R=n(61),U=n.n(R),F=function(e){var t=e.icon,n=e.style;return r.a.createElement("span",{className:Object(c.a)(U.a.toggle,U.a.dark),style:n},t)},X=function(e){var t=e.icon,n=e.style;return r.a.createElement("span",{className:Object(c.a)(U.a.toggle,U.a.light),style:n},t)},H=function(e){var t=Object(s.useThemeConfig)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,c=t.lightIcon,o=t.lightIconStyle,i=Object(p.default)().isClient;return r.a.createElement(V.a,Object(h.a)({disabled:!i,icons:{checked:r.a.createElement(F,{icon:n,style:a}),unchecked:r.a.createElement(X,{icon:c,style:o})}},e))},K=n(526),W=n(657),G=function(e){var t=Object(g.useLocation)(),n=Object(a.useState)(!e),r=n[0],c=n[1],o=Object(a.useRef)(!1),i=Object(a.useState)(0),l=i[0],s=i[1],u=Object(a.useState)(0),d=u[0],f=u[1],m=Object(a.useCallback)((function(e){null!==e&&f(e.getBoundingClientRect().height)}),[]);return Object(W.a)((function(t){var n=t.scrollY;if(e&&!(n<d)){if(o.current)return o.current=!1,c(!1),void s(n);l&&0===n&&c(!0);var a=document.documentElement.scrollHeight-d,r=window.innerHeight;l&&n>=l?c(!1):n+r<a&&c(!0),s(n)}}),[l,d,o]),Object(a.useEffect)((function(){e&&l&&c(!0)}),[t.pathname]),Object(a.useEffect)((function(){e&&(o.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:r}},q=n(658),Y=n(659),z=n(549),J={default:function(){return z.a},docsVersion:function(){return n(786).default},docsVersionDropdown:function(){return n(787).default},doc:function(){return n(788).default}};function Q(e){var t=e.type,n=Object(v.a)(e,["type"]),a=function(e){void 0===e&&(e="default");var t=J[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(a,n)}var Z=n(781),$=n(660),ee=n(63),te=n.n(ee),ne="right";var ae=function(){var e,t,n=Object(s.useThemeConfig)(),o=n.navbar,i=o.items,l=o.hideOnScroll,u=o.style,d=n.colorMode.disableSwitch,f=Object(a.useState)(!1),m=f[0],v=f[1],b=Object(a.useState)(!1),p=b[0],g=b[1],O=Object(K.a)(),j=O.isDarkTheme,k=O.setLightTheme,E=O.setDarkTheme,y=G(l),C=y.navbarRef,w=y.isNavbarVisible;Object(q.a)(m);var N=Object(a.useCallback)((function(){v(!0)}),[v]),_=Object(a.useCallback)((function(){v(!1)}),[v]),S=Object(a.useCallback)((function(e){return e.target.checked?E():k()}),[k,E]),T=Object(Y.a)();Object(a.useEffect)((function(){T===Y.b.desktop&&v(!1)}),[T]);var I=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:ne)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:ne)}))}}(i),L=I.leftItems,P=I.rightItems;return r.a.createElement("nav",{ref:C,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===u,"navbar--primary":"primary"===u,"navbar-sidebar--show":m},e[te.a.navbarHideable]=l,e[te.a.navbarHidden]=!w,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=i&&0!==i.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:N,onKeyDown:N},r.a.createElement($.a,null)),r.a.createElement(Z.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title",(t={},t[te.a.hideLogoText]=p,t))}),L.map((function(e,t){return r.a.createElement(Q,Object(h.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},P.map((function(e,t){return r.a.createElement(Q,Object(h.a)({},e,{key:t}))})),!d&&r.a.createElement(H,{className:te.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:j,onChange:S}),r.a.createElement(M,{handleSearchBarToggle:g,isSearchBarExpanded:p}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:_}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(Z.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:_}),!d&&m&&r.a.createElement(H,{"aria-label":"Dark mode toggle in sidebar",checked:j,onChange:S})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},i.map((function(e,t){return r.a.createElement(Q,Object(h.a)({mobile:!0},e,{onClick:_,key:t}))})))))))},re=n(550),ce=n(8),oe="light",ie="dark",le=function(e){return e===ie?ie:oe},se=function(){return ce.a.canUseDOM?le(document.documentElement.getAttribute("data-theme")):oe},ue=function(e){try{localStorage.setItem("theme",le(e))}catch(t){console.error(t)}},de=function(){var e=Object(s.useThemeConfig)().colorMode.disableSwitch,t=void 0!==e&&e,n=Object(a.useState)(se),r=n[0],c=n[1],o=Object(a.useCallback)((function(){c(oe),ue(oe)}),[]),i=Object(a.useCallback)((function(){c(ie),ue(ie)}),[]);return Object(a.useEffect)((function(){document.documentElement.setAttribute("data-theme",le(r))}),[r]),Object(a.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(le(e))}catch(n){console.error(n)}}),[c]),Object(a.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?ie:oe)}))}),[]),{isDarkTheme:r===ie,setLightTheme:o,setDarkTheme:i}},fe=n(515);var me=function(e){var t=de(),n=t.isDarkTheme,a=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(fe.a.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:c}},e.children)},he="docusaurus.tab.",ve=function(){var e=Object(a.useState)({}),t=e[0],n=e[1],r=Object(a.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}}),[]);return Object(a.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var a=localStorage.key(t);if(a.startsWith(he))e[a.substring(he.length)]=localStorage.getItem(a)}n(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},be="docusaurus.announcement.dismiss",pe="docusaurus.announcement.id",ge=function(){var e=Object(s.useThemeConfig)().announcementBar,t=Object(a.useState)(!0),n=t[0],r=t[1],c=Object(a.useCallback)((function(){localStorage.setItem(be,"true"),r(!0)}),[]);return Object(a.useEffect)((function(){if(e){var t=e.id,n=localStorage.getItem(pe);"annoucement-bar"===n&&(n="announcement-bar");var a=t!==n;localStorage.setItem(pe,t),a&&localStorage.setItem(be,"false"),(a||"false"===localStorage.getItem(be))&&r(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:c}},Oe=n(456);var je=function(e){var t=ve(),n=t.tabGroupChoices,a=t.setTabGroupChoices,c=ge(),o=c.isAnnouncementBarClosed,i=c.closeAnnouncementBar;return r.a.createElement(Oe.a.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:o,closeAnnouncementBar:i}},e.children)};function ke(e){var t=e.children;return r.a.createElement(me,null,r.a.createElement(je,null,r.a.createElement(s.DocsPreferredVersionContextProvider,null,t)))}function Ee(e){var t=e.locale,n=e.version,a=e.tag,c=t;return r.a.createElement(k.a,null,c&&r.a.createElement("meta",{name:"docsearch:language",content:c}),n&&r.a.createElement("meta",{name:"docsearch:version",content:n}),a&&r.a.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}function ye(e){var t=Object(p.default)(),n=t.siteConfig,a=t.i18n.currentLocale,c=n.favicon,o=n.themeConfig,i=o.image,l=o.metadatas,u=n.url,d=e.title,f=e.description,m=e.image,v=e.keywords,b=e.permalink,g=e.searchMetadatas,j=Object(s.useTitleFormatter)(d),E=m||i,y=Object(O.a)(E,{absolute:!0}),C=Object(O.a)(c),w=a.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null,r.a.createElement("html",{lang:w}),j&&r.a.createElement("title",null,j),j&&r.a.createElement("meta",{property:"og:title",content:j}),c&&r.a.createElement("link",{rel:"shortcut icon",href:C}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),E&&r.a.createElement("meta",{property:"og:image",content:y}),E&&r.a.createElement("meta",{property:"twitter:image",content:y}),E&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+j}),b&&r.a.createElement("meta",{property:"og:url",content:u+b}),b&&r.a.createElement("link",{rel:"canonical",href:u+b}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(Ee,Object(h.a)({tag:s.DEFAULT_SEARCH_TAG,locale:a},g)),r.a.createElement(k.a,null,l.map((function(e,t){return r.a.createElement("meta",Object(h.a)({key:"metadata_"+t},e))}))))}n(64);var Ce=function(){Object(a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};n(65);t.a=function(e){var t=e.children,n=e.noFooter,a=e.wrapperClassName;return Ce(),r.a.createElement(ke,null,r.a.createElement(ye,e),r.a.createElement(l,null),r.a.createElement(m,null),r.a.createElement(ae,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",a)},t),!n&&r.a.createElement(re.a,null))}},549:function(e,t,n){"use strict";var a=n(3),r=n(7),c=n(0),o=n.n(c),i=n(450),l=n(492),s=n(448),u=n(484),d=n(458);function f(e){var t=e.activeBasePath,n=e.activeBaseRegex,c=e.to,i=e.href,u=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,m=e.prependBaseUrlToHref,h=Object(r.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),v=Object(s.a)(c),b=Object(s.a)(t),p=Object(s.a)(i,{forcePrependBaseUrl:!0});return o.a.createElement(l.a,Object(a.a)({},i?{target:"_blank",rel:"noopener noreferrer",href:m?p:i}:Object.assign({isNavLink:!0,activeClassName:f,to:v},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(b)}}:null),h),u)}function m(e){var t=e.items,n=e.position,l=e.className,s=Object(r.a)(e,["items","position","className"]),u=Object(c.useRef)(null),d=Object(c.useRef)(null),m=Object(c.useState)(!1),h=m[0],v=m[1];Object(c.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&v(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var b=function(e,t){return void 0===t&&(t=!1),Object(i.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?o.a.createElement("div",{ref:u,className:Object(i.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===n,"dropdown--right":"right"===n,"dropdown--show":h})},o.a.createElement(f,Object(a.a)({className:b(l)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),v(!h))}}),s.label),o.a.createElement("ul",{ref:d,className:"dropdown__menu"},t.map((function(e,n){var c=e.className,i=Object(r.a)(e,["className"]);return o.a.createElement("li",{key:n},o.a.createElement(f,Object(a.a)({onKeyDown:function(e){if(n===t.length-1&&"Tab"===e.key){e.preventDefault(),v(!1);var a=u.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active",className:b(c,!0)},i)))})))):o.a.createElement(f,Object(a.a)({className:b(l)},s))}function h(e){var t,n,l=e.items,s=e.className,m=(e.position,Object(r.a)(e,["items","className","position"])),h=Object(c.useRef)(null),v=Object(u.useLocation)().pathname,b=Object(c.useState)((function(){var e;return null===(e=!(null!=l&&l.some((function(e){return Object(d.isSamePath)(e.to,v)}))))||void 0===e||e})),p=b[0],g=b[1],O=function(e,t){return void 0===t&&(t=!1),Object(i.a)("menu__link",{"menu__link--sublist":t},e)};if(!l)return o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(f,Object(a.a)({className:O(s)},m)));var j=null!==(t=h.current)&&void 0!==t&&t.scrollHeight?(null===(n=h.current)||void 0===n?void 0:n.scrollHeight)+"px":void 0;return o.a.createElement("li",{className:Object(i.a)("menu__list-item",{"menu__list-item--collapsed":p})},o.a.createElement(f,Object(a.a)({role:"button",className:O(s,!0)},m,{onClick:function(){g((function(e){return!e}))}}),m.label),o.a.createElement("ul",{className:"menu__list",ref:h,style:{height:p?void 0:j}},l.map((function(e,t){var n=e.className,c=Object(r.a)(e,["className"]);return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(f,Object(a.a)({activeClassName:"menu__link--active",className:O(n)},c,{onClick:m.onClick})))}))))}t.a=function(e){var t=e.mobile,n=void 0!==t&&t,a=Object(r.a)(e,["mobile"]),c=n?h:m;return o.a.createElement(c,a)}},655:function(e,t,n){"use strict";var a=n(484),r=n(8),c=n(20);t.a=function(){var e=Object(a.useHistory)(),t=Object(a.useLocation)(),n=Object(c.default)().siteConfig,o=(n=void 0===n?{}:n).baseUrl;return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return o+"search?q="+encodeURIComponent(e)}}}},656:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a);function c(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},657:function(e,t,n){"use strict";var a=n(0),r=n(8),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var n=Object(a.useState)(c()),r=n[0],o=n[1],i=function(){var t=c();o(t),e&&e(t)};return Object(a.useEffect)((function(){var e={passive:!0};return window.addEventListener("scroll",i,e),function(){return window.removeEventListener("scroll",i,e)}}),t),r}},658:function(e,t,n){"use strict";var a=n(0);t.a=function(e){void 0===e&&(e=!0),Object(a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},659:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var a=n(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var n=Object(a.useState)(t),c=n[0],o=n[1];return Object(a.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){o(t())}}),[]),c}},660:function(e,t,n){"use strict";var a=n(3),r=n(7),c=n(0),o=n.n(c);t.a=function(e){var t=e.width,n=void 0===t?30:t,c=e.height,i=void 0===c?30:c,l=e.className,s=Object(r.a)(e,["width","height","className"]);return o.a.createElement("svg",Object(a.a)({"aria-label":"Menu",className:l,width:n,height:i,viewBox:"0 0 30 30",role:"img",focusable:"false"},s),o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},781:function(e,t,n){"use strict";var a=n(3),r=n(7),c=n(0),o=n.n(c),i=n(492),l=n(450),s=n(20),u=n(526),d=n(62),f=n.n(d),m=function(e){var t=Object(s.default)().isClient,n=Object(u.a)().isDarkTheme,c=e.sources,i=e.className,d=e.alt,m=void 0===d?"":d,h=Object(r.a)(e,["sources","className","alt"]),v=t?n?["dark"]:["light"]:["light","dark"];return o.a.createElement(o.a.Fragment,null,v.map((function(e){return o.a.createElement("img",Object(a.a)({key:e,src:c[e],alt:m,className:Object(l.a)(f.a.themedImage,f.a["themedImage--"+e],i)},h))})))},h=n(448),v=n(458),b=n(449);t.a=function(e){var t=Object(s.default)().isClient,n=Object(v.useThemeConfig)().navbar,c=n.title,l=n.logo,u=void 0===l?{src:""}:l,d=e.imageClassName,f=e.titleClassName,p=Object(r.a)(e,["imageClassName","titleClassName"]),g=Object(h.a)(u.href||"/"),O=u.target?{target:u.target}:Object(b.a)(g)?{}:{rel:"noopener noreferrer",target:"_blank"},j={light:Object(h.a)(u.src),dark:Object(h.a)(u.srcDark||u.src)};return o.a.createElement(i.a,Object(a.a)({to:g},p,O),u.src&&o.a.createElement(m,{key:t,className:d,sources:j,alt:u.alt||c||"Logo"}),null!=c&&o.a.createElement("strong",{className:f},c))}},782:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),o=f(c),i=f(n(459)),l=f(n(1)),s=f(n(783)),u=f(n(784)),d=n(785);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),c=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},m.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},783:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},784:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},785:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}},786:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),c=n(0),o=n.n(c),i=n(549),l=n(460),s=n(458);function u(e){var t,n=e.label,c=e.to,u=e.docsPluginId,d=Object(r.a)(e,["label","to","docsPluginId"]),f=Object(l.useActiveVersion)(u),m=Object(s.useDocsPreferredVersion)(u).preferredVersion,h=Object(l.useLatestVersion)(u),v=null!==(t=null!=f?f:m)&&void 0!==t?t:h,b=null!=n?n:v.label,p=null!=c?c:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(v).path;return o.a.createElement(i.a,Object(a.a)({},d,{label:b,to:p}))}},787:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),c=n(0),o=n.n(c),i=n(549),l=n(460),s=n(458),u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,n,c=e.mobile,d=e.docsPluginId,f=e.dropdownActiveClassDisabled,m=e.dropdownItemsBefore,h=e.dropdownItemsAfter,v=Object(r.a)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),b=Object(l.useActiveDocContext)(d),p=Object(l.useVersions)(d),g=Object(l.useLatestVersion)(d),O=Object(s.useDocsPreferredVersion)(d),j=O.preferredVersion,k=O.savePreferredVersionName;var E=null!==(t=null!==(n=b.activeVersion)&&void 0!==n?n:j)&&void 0!==t?t:g,y=c?"Versions":E.label,C=c?void 0:u(E).path;return o.a.createElement(i.a,Object(a.a)({},v,{mobile:c,label:y,to:C,items:function(){var e=p.map((function(e){var t=(null==b?void 0:b.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==b?void 0:b.activeVersion)},onClick:function(){k(e.name)}}})),t=[].concat(m,e,h);if(!(t.length<=1))return t}(),isActive:f?function(){return!1}:void 0}))}},788:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),c=n(0),o=n.n(c),i=n(549),l=n(460),s=n(450),u=n(458);function d(e){var t,n,c=e.docId,d=e.activeSidebarClassName,f=e.label,m=e.docsPluginId,h=Object(r.a)(e,["docId","activeSidebarClassName","label","docsPluginId"]),v=Object(l.useActiveDocContext)(m),b=v.activeVersion,p=v.activeDoc,g=Object(u.useDocsPreferredVersion)(m).preferredVersion,O=Object(l.useLatestVersion)(m),j=null!==(t=null!=b?b:g)&&void 0!==t?t:O,k=j.docs.find((function(e){return e.id===c}));if(!k)throw new Error("DocNavbarItem: couldn't find any doc with id="+c+" in version "+j.name+".\nAvailable docIds=\n- "+j.docs.join("\n- "));return o.a.createElement(i.a,Object(a.a)({exact:!0},h,{className:Object(s.a)(h.className,(n={},n[d]=p&&p.sidebar===k.sidebar,n)),label:null!=f?f:k.id,to:k.path}))}}}]);