/*! For license information please see 7805.08f01b2c.js.LICENSE.txt */
(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[7805],{3919:function(t,n,e){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!r(t)}e.d(n,{b:function(){return r},Z:function(){return o}})},8143:function(t,n,e){"use strict";e.r(n),e.d(n,{BrowserRouter:function(){return r.VK},HashRouter:function(){return r.UT},Link:function(){return r.rU},MemoryRouter:function(){return r.VA},NavLink:function(){return r.OL},Prompt:function(){return r.NL},Redirect:function(){return r.l_},Route:function(){return r.AW},Router:function(){return r.F0},StaticRouter:function(){return r.gx},Switch:function(){return r.rs},generatePath:function(){return r.Gn},matchPath:function(){return r.LX},useHistory:function(){return r.k6},useLocation:function(){return r.TH},useParams:function(){return r.UO},useRouteMatch:function(){return r.$B},withRouter:function(){return r.EN}});var r=e(3727)},4996:function(t,n,e){"use strict";e.d(n,{C:function(){return u},Z:function(){return i}});var r=e(2263),o=e(3919);function u(){var t=(0,r.Z)().siteConfig,n=(t=void 0===t?{}:t).baseUrl,e=void 0===n?"/":n,u=t.url;return{withBaseUrl:function(t,n){return function(t,n,e,r){var u=void 0===r?{}:r,i=u.forcePrependBaseUrl,c=void 0!==i&&i,a=u.absolute,s=void 0!==a&&a;if(!e)return e;if(e.startsWith("#"))return e;if((0,o.b)(e))return e;if(c)return n+e;var f=e.startsWith(n)?e:n+e.replace(/^\//,"");return s?t+f:f}(u,e,t,n)}}}function i(t,n){return void 0===n&&(n={}),(0,u().withBaseUrl)(t,n)}},8084:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return o},useAllPluginInstancesData:function(){return u},usePluginData:function(){return i}});var r=e(2263);function o(){var t=(0,r.Z)().globalData;if(!t)throw new Error("Docusaurus global data not found.");return t}function u(t){var n=o()[t];if(!n)throw new Error('Docusaurus plugin global data not found for "'+t+'" plugin.');return n}function i(t,n){void 0===n&&(n="default");var e=u(t)[n];if(!e)throw new Error('Docusaurus plugin global data not found for "'+t+'" plugin with id "'+n+'".');return e}},8408:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getDocVersionSuggestions=n.getActiveDocContext=n.getActiveVersion=n.getLatestVersion=n.getActivePlugin=void 0;var r=e(8143);n.getActivePlugin=function(t,n,e){void 0===e&&(e={});var o=Object.entries(t).find((function(t){t[0];var e=t[1];return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})})),u=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!u&&e.failfast)throw new Error("Can't find active docs plugin for \""+n+'" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: '+Object.values(t).map((function(t){return t.path})).join(", "));return u};n.getLatestVersion=function(t){return t.versions.find((function(t){return t.isLast}))};n.getActiveVersion=function(t,e){var o=n.getLatestVersion(t);return[].concat(t.versions.filter((function(t){return t!==o})),[o]).find((function(t){return!!r.matchPath(e,{path:t.path,exact:!1,strict:!1})}))};n.getActiveDocContext=function(t,e){var o,u,i=n.getActiveVersion(t,e),c=null==i?void 0:i.docs.find((function(t){return!!r.matchPath(e,{path:t.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:c,alternateDocVersions:c?(o=c.id,u={},t.versions.forEach((function(t){t.docs.forEach((function(n){n.id===o&&(u[t.name]=n)}))})),u):{}}};n.getDocVersionSuggestions=function(t,e){var r=n.getLatestVersion(t),o=n.getActiveDocContext(t,e);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},6730:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useDocVersionSuggestions=n.useActiveDocContext=n.useActiveVersion=n.useLatestVersion=n.useVersions=n.useActivePluginAndVersion=n.useActivePlugin=n.useDocsData=n.useAllDocsData=void 0;var r=e(655),o=e(8143),u=r.__importStar(e(8084)),i=e(8408),c={};n.useAllDocsData=function(){var t;return null!==(t=u.default()["docusaurus-plugin-content-docs"])&&void 0!==t?t:c};n.useDocsData=function(t){return u.usePluginData("docusaurus-plugin-content-docs",t)};n.useActivePlugin=function(t){void 0===t&&(t={});var e=n.useAllDocsData(),r=o.useLocation().pathname;return i.getActivePlugin(e,r,t)};n.useActivePluginAndVersion=function(t){void 0===t&&(t={});var e=n.useActivePlugin(t),r=o.useLocation().pathname;if(e)return{activePlugin:e,activeVersion:i.getActiveVersion(e.pluginData,r)}};n.useVersions=function(t){return n.useDocsData(t).versions};n.useLatestVersion=function(t){var e=n.useDocsData(t);return i.getLatestVersion(e)};n.useActiveVersion=function(t){var e=n.useDocsData(t),r=o.useLocation().pathname;return i.getActiveVersion(e,r)};n.useActiveDocContext=function(t){var e=n.useDocsData(t),r=o.useLocation().pathname;return i.getActiveDocContext(e,r)};n.useDocVersionSuggestions=function(t){var e=n.useDocsData(t),r=o.useLocation().pathname;return i.getDocVersionSuggestions(e,r)}},907:function(t,n,e){"use strict";e.d(n,{Iw:function(){return r.useActiveDocContext},gA:function(){return r.useActivePlugin},WS:function(){return r.useActivePluginAndVersion},zu:function(){return r.useActiveVersion},_r:function(){return r.useAllDocsData},Jo:function(){return r.useDocVersionSuggestions},zh:function(){return r.useDocsData},yW:function(){return r.useLatestVersion},gB:function(){return r.useVersions}});var r=e(6730)},6010:function(t,n,e){"use strict";function r(t){var n,e,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(e=r(t[n]))&&(o&&(o+=" "),o+=e);else for(n in t)t[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var t,n,e=0,o="";e<arguments.length;)(t=arguments[e++])&&(n=r(t))&&(o&&(o+=" "),o+=n);return o}e.d(n,{Z:function(){return o}})},655:function(t,n,e){"use strict";e.r(n),e.d(n,{__extends:function(){return o},__assign:function(){return u},__rest:function(){return i},__decorate:function(){return c},__param:function(){return a},__metadata:function(){return s},__awaiter:function(){return f},__generator:function(){return l},__createBinding:function(){return v},__exportStar:function(){return p},__values:function(){return d},__read:function(){return h},__spread:function(){return y},__spreadArrays:function(){return g},__spreadArray:function(){return b},__await:function(){return w},__asyncGenerator:function(){return _},__asyncDelegator:function(){return m},__asyncValues:function(){return D},__makeTemplateObject:function(){return P},__importStar:function(){return O},__importDefault:function(){return V},__classPrivateFieldGet:function(){return S},__classPrivateFieldSet:function(){return j}});var r=function(t,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])})(t,n)};function o(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}var u=function(){return(u=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};function i(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(e[r[o]]=t[r[o]])}return e}function c(t,n,e,r){var o,u=arguments.length,i=u<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,n,e,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(u<3?o(i):u>3?o(n,e,i):o(n,e))||i);return u>3&&i&&Object.defineProperty(n,e,i),i}function a(t,n){return function(e,r){n(e,r,t)}}function s(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)}function f(t,n,e,r){return new(e||(e=Promise))((function(o,u){function i(t){try{a(r.next(t))}catch(n){u(n)}}function c(t){try{a(r.throw(t))}catch(n){u(n)}}function a(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(i,c)}a((r=r.apply(t,n||[])).next())}))}function l(t,n){var e,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=n.call(t,i)}catch(c){u=[6,c],r=0}finally{e=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}}var v=Object.create?function(t,n,e,r){void 0===r&&(r=e),Object.defineProperty(t,r,{enumerable:!0,get:function(){return n[e]}})}:function(t,n,e,r){void 0===r&&(r=e),t[r]=n[e]};function p(t,n){for(var e in t)"default"===e||Object.prototype.hasOwnProperty.call(n,e)||v(n,t,e)}function d(t){var n="function"==typeof Symbol&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function h(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,o,u=e.call(t),i=[];try{for(;(void 0===n||n-- >0)&&!(r=u.next()).done;)i.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(e=u.return)&&e.call(u)}finally{if(o)throw o.error}}return i}function y(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(h(arguments[n]));return t}function g(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var r=Array(t),o=0;for(n=0;n<e;n++)for(var u=arguments[n],i=0,c=u.length;i<c;i++,o++)r[o]=u[i];return r}function b(t,n,e){if(e||2===arguments.length)for(var r,o=0,u=n.length;o<u;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return t.concat(r||n)}function w(t){return this instanceof w?(this.v=t,this):new w(t)}function _(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=e.apply(t,n||[]),u=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(t){o[t]&&(r[t]=function(n){return new Promise((function(e,r){u.push([t,n,e,r])>1||c(t,n)}))})}function c(t,n){try{(e=o[t](n)).value instanceof w?Promise.resolve(e.value.v).then(a,s):f(u[0][2],e)}catch(r){f(u[0][3],r)}var e}function a(t){c("next",t)}function s(t){c("throw",t)}function f(t,n){t(n),u.shift(),u.length&&c(u[0][0],u[0][1])}}function m(t){var n,e;return n={},r("next"),r("throw",(function(t){throw t})),r("return"),n[Symbol.iterator]=function(){return this},n;function r(r,o){n[r]=t[r]?function(n){return(e=!e)?{value:w(t[r](n)),done:"return"===r}:o?o(n):n}:o}}function D(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,e=t[Symbol.asyncIterator];return e?e.call(t):(t=d(t),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(e){n[e]=t[e]&&function(n){return new Promise((function(r,o){(function(t,n,e,r){Promise.resolve(r).then((function(n){t({value:n,done:e})}),n)})(r,o,(n=t[e](n)).done,n.value)}))}}}function P(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t}var A=Object.create?function(t,n){Object.defineProperty(t,"default",{enumerable:!0,value:n})}:function(t,n){t.default=n};function O(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)"default"!==e&&Object.prototype.hasOwnProperty.call(t,e)&&v(n,t,e);return A(n,t),n}function V(t){return t&&t.__esModule?t:{default:t}}function S(t,n,e,r){if("a"===e&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof n?t!==n||!r:!n.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===e?r:"a"===e?r.call(t):r?r.value:n.get(t)}function j(t,n,e,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof n?t!==n||!o:!n.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(t,e):o?o.value=e:n.set(t,e),e}}}]);