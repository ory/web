(window.webpackJsonp=window.webpackJsonp||[]).push([[363,362,364,365],{423:function(e,t,n){"use strict";var r=n(0),o=n(20);t.a=function(){var e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},425:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var r=n(423),o=n(427);function a(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,s=a.forcePrependBaseUrl,i=void 0!==s&&s,c=a.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(i)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(a,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},426:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},427:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},428:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(433),s=n(426),i=n(49),c=n.n(i),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,p=e.values,f=e.groupId,y=Object(a.a)(),d=y.tabGroupChoices,h=y.setTabGroupChoices,v=Object(r.useState)(i),g=v[0],m=v[1],b=Object(r.useState)(!1),k=b[0],j=b[1];if(null!=f){var w=d[f];null!=w&&w!==g&&p.some((function(e){return e.value===w}))&&m(w)}var O=function(e){m(e),null!=f&&h(f,e)},x=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||j(!0)},E=function(){j(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",C),window.addEventListener("mousedown",E)}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),style:k?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),C(e)},onFocus:function(){return O(t)},onClick:function(){O(t),j(!1)},onPointerDown:function(){return j(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},429:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){return o.a.createElement("div",null,e.children)}},432:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},433:function(e,t,n){"use strict";var r=n(0),o=n(432);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},434:function(e,t,n){"use strict";var r=n(2),o=n(0),a=n.n(o),s=n(426),i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(19).a,theme:i};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,f=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},y=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=u({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=u({},n,{backgroundColor:null}),o};function h(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var v=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=u({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==o&&(a.style=void 0!==a.style?u({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),l(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var s=r?{display:"inline-block"}:{},i=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(i))}})),l(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,s=u({},h(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(s.style=void 0!==s.style?u({},s.style,o):o),void 0!==n&&(s.key=n),r&&(s.className+=" "+r),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),s=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,s=0,i=[],c=[i];s>-1;){for(;(a=r[s]++)<o[s];){var l=void 0,u=t[s],d=n[s][a];if("string"==typeof d?(u=s>0?u:["plain"],l=d):(u=y(u,d.type),d.alias&&(u=y(u,d.alias)),l=d.content),"string"==typeof l){var h=l.split(p),v=h.length;i.push({types:u,content:h[0]});for(var g=1;g<v;g++)f(i),c.push(i=[]),i.push({types:u,content:h[g]})}else s++,t.push(u),n.push(l),r.push(0),o.push(l.length)}s--,t.pop(),n.pop(),r.pop(),o.pop()}return f(i),c}(void 0!==s?t.tokenize(r,s,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component),g=n(439),m=n.n(g),b=n(440),k=n.n(b),j=n(423),w={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=n(436),x=function(){var e=Object(j.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,n=Object(O.a)().isDarkTheme,r=t.theme||w,o=t.darkTheme||r;return n?o:r},C=n(50),E=n.n(C),N=/{([\d,-]+)}/,T=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")},P=/title=".*"/;t.a=function(e){var t=e.children,n=e.className,i=e.metastring,l=Object(j.a)().siteConfig.themeConfig.prism,u=void 0===l?{}:l,p=Object(o.useState)(!1),f=p[0],y=p[1],d=Object(o.useState)(!1),h=d[0],g=d[1];Object(o.useEffect)((function(){g(!0)}),[]);var b=Object(o.useRef)(null),w=[],O="",C=x();if(i&&N.test(i)){var B=i.match(N)[1];w=k.a.parse(B).filter((function(e){return e>0}))}i&&P.test(i)&&(O=i.match(P)[0].split("title=")[1].replace(/"+/g,""));var L=n&&n.replace(/language-/,"");!L&&u.defaultLanguage&&(L=u.defaultLanguage);var S=t.replace(/\n$/,"");if(0===w.length&&void 0!==L){for(var D,A="",R=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return T(["js","jsBlock"]);case"jsx":case"tsx":return T(["js","jsBlock","jsx"]);case"html":return T(["js","jsBlock","html"]);case"python":case"py":return T(["python"]);default:return T()}}(L),_=t.replace(/\n$/,"").split("\n"),I=0;I<_.length;){var F=I+1,U=_[I].match(R);if(null!==U){switch(U.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":A+=F+",";break;case"highlight-start":D=F;break;case"highlight-end":A+=D+"-"+(F-1)+","}_.splice(I,1)}else I+=1}w=k.a.parse(A),S=_.join("\n")}var W=function(){m()(S),y(!0),setTimeout((function(){return y(!1)}),2e3)};return a.a.createElement(v,Object(r.a)({},c,{key:String(h),theme:C,code:S,language:L}),(function(e){var t,n,o=e.className,i=e.style,c=e.tokens,l=e.getLineProps,u=e.getTokenProps;return a.a.createElement(a.a.Fragment,null,O&&a.a.createElement("div",{style:i,className:E.a.codeBlockTitle},O),a.a.createElement("div",{className:E.a.codeBlockContent},a.a.createElement("button",{ref:b,type:"button","aria-label":"Copy code to clipboard",className:Object(s.a)(E.a.copyButton,(t={},t[E.a.copyButtonWithTitle]=O,t)),onClick:W},f?"Copied":"Copy"),a.a.createElement("div",{tabIndex:0,className:Object(s.a)(o,E.a.codeBlock,(n={},n[E.a.codeBlockWithTitle]=O,n))},a.a.createElement("div",{className:E.a.codeBlockLines,style:i},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return w.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),a.a.createElement("div",Object(r.a)({key:t},n),e.map((function(e,t){return a.a.createElement("span",Object(r.a)({key:t},u({token:e,key:t})))})))}))))))}))}},436:function(e,t,n){"use strict";var r=n(0),o=n(437);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},437:function(e,t,n){"use strict";var r=n(0),o=n.n(r).a.createContext(void 0);t.a=o},439:function(e,t,n){"use strict";const r=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch(i){}return n.remove(),a&&(o.removeAllRanges(),o.addRange(a)),r&&r.focus(),s};e.exports=r,e.exports.default=r},440:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],r=t[2],o=t[3];if(n&&o){var a=[],s=(n=parseInt(n))<(o=parseInt(o))?1:-1;"-"!=r&&".."!=r&&"\u2025"!=r||(o+=s);for(var i=n;i!=o;i+=s)a.push(i);return a}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},462:function(e,t,n){"use strict";var r=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r)return r;throw new Error("unable to locate global object")}();e.exports=t=r.fetch,r.fetch&&(t.default=r.fetch.bind(r)),t.Headers=r.Headers,t.Request=r.Request,t.Response=r.Response}}]);