(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{442:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(453),c=n(16),i=n(27),l=n(517),s=n(3),u=n(8),d=n(457),p=n(458),m=n(462),b=n(611),h=n(612),f=n(610),y=n(483),g=n(456),v=n(693),j=function(e){return r.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),r.a.createElement("g",{fill:"#7a7a7a"},r.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},O=n(613),k=n(468),E=n(113),C=n.n(E);var N=function e(t,n){return"link"===t.type?Object(p.isSamePath)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},T=Object(a.memo)((function(e){var t=e.items,n=Object(u.a)(e,["items"]);return t.map((function(e,t){return r.a.createElement(S,Object(s.a)({key:t,item:e},n))}))}));function S(e){switch(e.item.type){case"category":return r.a.createElement(x,e);case"link":default:return r.a.createElement(w,e)}}function x(e){var t,n,o,c=e.item,i=e.onItemClick,l=e.collapsible,p=e.activePath,m=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),b=c.items,h=c.label,f=N(c,p),y=(n=f,o=Object(a.useRef)(n),Object(a.useEffect)((function(){o.current=n}),[n]),o.current),g=Object(a.useState)((function(){return!!l&&(!f&&c.collapsed)})),v=g[0],j=g[1],O=Object(a.useRef)(null),k=Object(a.useState)(void 0),E=k[0],S=k[1],x=function(e){var t;void 0===e&&(e=!0),S(e?(null===(t=O.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(a.useEffect)((function(){f&&!y&&v&&j(!1)}),[f,y,v]);var w=Object(a.useCallback)((function(e){e.preventDefault(),E||x(),setTimeout((function(){return j((function(e){return!e}))}),100)}),[E]);return 0===b.length?null:r.a.createElement("li",{className:Object(d.a)("menu__list-item",{"menu__list-item--collapsed":v})},r.a.createElement("a",Object(s.a)({className:Object(d.a)("menu__link",(t={"menu__link--sublist":l,"menu__link--active":l&&f},t[C.a.menuLinkText]=!l,t)),onClick:l?w:void 0,href:l?"#!":void 0},m),h),r.a.createElement("ul",{className:"menu__list",ref:O,style:{height:E},onTransitionEnd:function(){v||x(!1)}},r.a.createElement(T,{items:b,tabIndex:v?"-1":"0",onItemClick:i,collapsible:l,activePath:p})))}function w(e){var t,n=e.item,a=e.onItemClick,o=e.activePath,c=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),i=n.href,l=n.label,p=N(n,o);return r.a.createElement("li",{className:"menu__list-item",key:l},r.a.createElement(y.a,Object(s.a)({className:Object(d.a)("menu__link",(t={"menu__link--active":p},t[C.a.menuLinkExternal]=!Object(g.a)(i),t)),to:i},Object(g.a)(i)&&{isNavLink:!0,exact:!0,onClick:a},c),l))}function P(e){var t=e.onClick;return r.a.createElement("button",{type:"button",title:Object(k.b)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":Object(k.b)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:Object(d.a)("button button--secondary button--outline",C.a.collapseSidebarButton),onClick:t},r.a.createElement(j,{className:C.a.collapseSidebarButtonIcon}))}function B(e){var t=e.responsiveSidebarOpened,n=e.onClick;return r.a.createElement("button",{"aria-label":t?Object(k.b)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):Object(k.b)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?r.a.createElement("span",{className:Object(d.a)(C.a.sidebarMenuIcon,C.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement(O.a,{className:C.a.sidebarMenuIcon,height:24,width:24}))}var I=function(e){var t,n,o=e.path,c=e.sidebar,i=e.sidebarCollapsible,l=void 0===i||i,s=e.onCollapse,u=e.isHidden,y=function(){var e=Object(m.a)().isAnnouncementBarClosed,t=Object(a.useState)(!e),n=t[0],r=t[1];return Object(f.a)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),g=Object(p.useThemeConfig)(),j=g.navbar.hideOnScroll,O=g.hideableSidebar,k=Object(m.a)().isAnnouncementBarClosed,E=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1];Object(b.a)(t);var r=Object(h.a)();return Object(a.useEffect)((function(){r===h.b.desktop&&n(!1)}),[r]),{showResponsiveSidebar:t,closeResponsiveSidebar:Object(a.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:Object(a.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),N=E.showResponsiveSidebar,S=E.closeResponsiveSidebar,x=E.toggleResponsiveSidebar;return r.a.createElement("div",{className:Object(d.a)(C.a.sidebar,(t={},t[C.a.sidebarWithHideableNavbar]=j,t[C.a.sidebarHidden]=u,t))},j&&r.a.createElement(v.a,{tabIndex:-1,className:C.a.sidebarLogo}),r.a.createElement("div",{className:Object(d.a)("menu","menu--responsive","thin-scrollbar",C.a.menu,(n={"menu--show":N},n[C.a.menuWithAnnouncementBar]=!k&&y,n))},r.a.createElement(B,{responsiveSidebarOpened:N,onClick:x}),r.a.createElement("ul",{className:"menu__list"},r.a.createElement(T,{items:c,onItemClick:S,collapsible:l,activePath:o}))),O&&r.a.createElement(P,{onClick:s}))},_=n(464),L=(n(114),n(115)),A=n.n(L),R=function(e){return function(t){var n,a=t.id,o=Object(u.a)(t,["id"]),c=Object(p.useThemeConfig)().navbar.hideOnScroll;return a?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(d.a)("anchor",(n={},n[A.a.enhancedAnchor]=!c,n)),id:a}),o.children,r.a.createElement("a",{className:"hash-link",href:"#"+a,title:Object(k.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.a.createElement(e,o)}},D={code:function(e){var t=e.children;return Object(a.isValidElement)(t)?t:t.includes("\n")?r.a.createElement(_.a,e):r.a.createElement("code",e)},a:function(e){return r.a.createElement(y.a,e)},pre:function(e){var t,n=e.children;return Object(a.isValidElement)(null==n||null===(t=n.props)||void 0===t?void 0:t.children)?null==n?void 0:n.props.children:r.a.createElement(_.a,Object(a.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:R("h1"),h2:R("h2"),h3:R("h3"),h4:R("h4"),h5:R("h5"),h6:R("h6")},M=n(603),F=n(22),z=n(116),H=n.n(z);function W(e){var t,n,i,s,u,m=e.currentDocRoute,b=e.versionMetadata,h=e.children,f=Object(c.default)(),y=f.siteConfig,g=f.isClient,v=b.pluginId,O=b.permalinkToSidebar,E=b.docsSidebars,C=b.version,N=O[m.path],T=E[N],S=Object(a.useState)(!1),x=S[0],w=S[1],P=Object(a.useState)(!1),B=P[0],_=P[1],L=Object(a.useCallback)((function(){B&&_(!1),w(!x)}),[B]);return r.a.createElement(l.a,{key:g,wrapperClassName:p.ThemeClassNames.wrapper.docPages,pageClassName:p.ThemeClassNames.page.docPage,searchMetadatas:{version:C,tag:Object(p.docVersionSearchTag)(v,C)}},r.a.createElement("div",{className:H.a.docPage},T&&r.a.createElement("div",{className:Object(d.a)(H.a.docSidebarContainer,(t={},t[H.a.docSidebarContainerHidden]=x,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(H.a.docSidebarContainer)&&x&&_(!0)},role:"complementary"},r.a.createElement(I,{key:N,sidebar:T,path:m.path,sidebarCollapsible:null===(n=null===(i=y.themeConfig)||void 0===i?void 0:i.sidebarCollapsible)||void 0===n||n,onCollapse:L,isHidden:B}),B&&r.a.createElement("div",{className:H.a.collapsedDocSidebar,title:Object(k.b)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":Object(k.b)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:L,onClick:L},r.a.createElement(j,{className:H.a.expandSidebarButtonIcon}))),r.a.createElement("main",{className:Object(d.a)(H.a.docMainContainer,(s={},s[H.a.docMainContainerEnhanced]=x||!T,s))},r.a.createElement("div",{className:Object(d.a)("container padding-vert--lg",H.a.docItemWrapper,(u={},u[H.a.docItemWrapperEnhanced]=x,u))},r.a.createElement(o.a,{components:D},h)))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return Object(F.matchPath)(a.pathname,e)}));return o?r.a.createElement(W,{currentDocRoute:o,versionMetadata:n},Object(i.a)(t)):r.a.createElement(M.default,e)}},453:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.a.createElement(b,i(i({ref:t},s),{},{components:n})):r.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},464:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n(3),r=n(0),o=n.n(r),c=n(457),i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l={Prism:n(21).a,theme:i};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var d=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},b=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=u({},n,{backgroundColor:null}),r};function h(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var f=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?b(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=u({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==r&&(o.style=void 0!==o.style?u({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),s(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var c=a?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(i))}})),s(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,c=u({},h(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?u({},c.style,r):r),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c})),s(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,c=0,i=[],l=[i];c>-1;){for(;(o=a[c]++)<r[c];){var s=void 0,u=t[c],b=n[c][o];if("string"==typeof b?(u=c>0?u:["plain"],s=b):(u=m(u,b.type),b.alias&&(u=m(u,b.alias)),s=b.content),"string"==typeof s){var h=s.split(d),f=h.length;i.push({types:u,content:h[0]});for(var y=1;y<f;y++)p(i),l.push(i=[]),i.push({types:u,content:h[y]})}else c++,t.push(u),n.push(s),a.push(0),r.push(s.length)}c--,t.pop(),n.pop(),a.pop(),r.pop()}return p(i),l}(void 0!==c?this.tokenize(t,a,c,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var y=n(467),g=n.n(y),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(465),O=n(458),k=function(){var e=Object(O.useThemeConfig)().prism,t=Object(j.a)().isDarkTheme,n=e.theme||v,a=e.darkTheme||n;return t?a:n},E=n(468),C=n(58),N=n.n(C),T=/{([\d,-]+)}/,S=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function x(e){var t=e.children,n=e.className,i=e.metastring,s=e.title,u=Object(O.useThemeConfig)().prism,d=Object(r.useState)(!1),p=d[0],m=d[1],b=Object(r.useState)(!1),h=b[0],y=b[1];Object(r.useEffect)((function(){y(!0)}),[]);var v=Object(O.parseCodeBlockTitle)(i)||s,j=Object(r.useRef)(null),C=[],x=k(),w=Array.isArray(t)?t.join(""):t;if(i&&T.test(i)){var P=i.match(T)[1];C=g()(P).filter((function(e){return e>0}))}var B=n&&n.replace(/language-/,"");!B&&u.defaultLanguage&&(B=u.defaultLanguage);var I=w.replace(/\n$/,"");if(0===C.length&&void 0!==B){for(var _,L="",A=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return S(["js","jsBlock"]);case"jsx":case"tsx":return S(["js","jsBlock","jsx"]);case"html":return S(["js","jsBlock","html"]);case"python":case"py":return S(["python"]);default:return S()}}(B),R=w.replace(/\n$/,"").split("\n"),D=0;D<R.length;){var M=D+1,F=R[D].match(A);if(null!==F){switch(F.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":L+=M+",";break;case"highlight-start":_=M;break;case"highlight-end":L+=_+"-"+(M-1)+","}R.splice(D,1)}else D+=1}C=g()(L),I=R.join("\n")}var z=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus()}(I),m(!0),setTimeout((function(){return m(!1)}),2e3)};return o.a.createElement(f,Object(a.a)({},l,{key:String(h),theme:x,code:I,language:B}),(function(e){var t,n=e.className,r=e.style,i=e.tokens,l=e.getLineProps,s=e.getTokenProps;return o.a.createElement("div",{className:N.a.codeBlockContainer},v&&o.a.createElement("div",{style:r,className:N.a.codeBlockTitle},v),o.a.createElement("div",{className:Object(c.a)(N.a.codeBlockContent,B)},o.a.createElement("div",{tabIndex:0,className:Object(c.a)(n,N.a.codeBlock,"thin-scrollbar",(t={},t[N.a.codeBlockWithTitle]=v,t))},o.a.createElement("div",{className:N.a.codeBlockLines,style:r},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return C.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(a.a)({key:t},s({token:e,key:t})))})))})))),o.a.createElement("button",{ref:j,type:"button","aria-label":Object(E.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(c.a)(N.a.copyButton),onClick:z},p?o.a.createElement(E.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.a.createElement(E.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},467:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},603:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(517),c=n(468);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},r.a.createElement(c.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.a.createElement("p",null,r.a.createElement(c.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.a.createElement("p",null,r.a.createElement(c.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);