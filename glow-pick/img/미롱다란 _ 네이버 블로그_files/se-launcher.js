/**
 * @license
 * @se/product-blog-desktop-normal/v1.4.4 - 2020-02-13 15:37:37
 * Copyright(c) 2020, NAVER corp, SmartEditor
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SELauncher=t():e.SELauncher=t()}(window,function(){return function(e){function t(t){for(var n,r,i=t[0],a=t[1],s=0,l=[];s<i.length;s++)r=i[s],o[r]&&l.push(o[r][0]),o[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(c&&c(t);l.length;)l.shift()()}var n={},r={3:0},o={3:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{6:1,8:1,9:1}[e]&&t.push(r[e]=new Promise(function(t,n){for(var r="css/"+e+".se-editor.css?t=1581575857991",o=i.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var l=(u=a[s]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var c=document.getElementsByTagName("style");for(s=0;s<c.length;s++){var u;if((l=(u=c[s]).getAttribute("data-href"))===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,n(i)},f.href=o,document.getElementsByTagName("head")[0].appendChild(f)}).then(function(){r[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=a);var s,l=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+"se-"+({0:"messages5",1:"vendors~library-panel-layout-view~search-panel-layout-view",2:"app~app-context",4:"polyfill-loader",5:"editor",6:"style",7:"custom-messages",10:"app-context",11:"app",12:"messages0",13:"messages1",14:"messages2",15:"messages3",16:"messages4",17:"messages6",18:"messages7",19:"messages8",20:"talktalk-edit-layer-view",21:"oembed-component-view",22:"wrapping-paragraph-component-view",23:"talktalk-component-view",24:"anniversary-section-component-view",25:"mr-blog-component-view",26:"toast-layer-view",27:"upload-progress-layer-view",28:"alert-layer-view",29:"sidebar-layout-view",30:"search-panel-layout-view",31:"sticker-panel-layout-view",32:"library-panel-layout-view",33:"template-panel-layout-view",34:"link-layer-view",35:"cloud-sns-layer-view",36:"image-detail-layout-view",37:"schedule-layer-view",38:"file-upload-layer-view",39:"sticker-refresh-layer-view",40:"paid-photo-notification-layer-view",41:"spell-check-layout-view",42:"video-upload-layer-view",43:"help-panel-layout-view",44:"contextmenu-layer-view",45:"A11y-Help-layer-view",46:"special-letter-layer-view",47:"place-layer-view",48:"image-type-layer-view",49:"image-group-order-layer-view",50:"horizontal-line-component-view",51:"material-component-view",52:"oglink-component-view",53:"table-component-view",54:"code-component-view",55:"schedule-component-view",56:"file-component-view",57:"formular-component-view",58:"vendors~editor",59:"vendors~polyfill-loader",60:"vendors~app-context",61:"vendors~sentry",62:"vendors~image-group-order-layer-view",63:"vendors~help-panel-layout-view",64:"vendors~schedule-layer-view",65:"vendors~npe",66:"vendors~nvu"}[e]||e)+".js?t=1581575857991"}(e),s=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");a.type=r,a.request=i,n[1](a)}o[e]=void 0}};var u=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,l.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="//editor-static.pstatic.net/e/blog.desktop.normal/",i.oe=function(e){throw console.error(e),e};var a=window.__se_editor_jsonp=window.__se_editor_jsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var c=s;return i(i.s=10)}([function(e,t,n){e.exports=n(6)},function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},function(e,t){function n(e,t,n,r,o,i,a){try{var s=e[i](a),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise(function(o,i){var a=e.apply(t,r);function s(e){n(a,o,i,s,l,"next",e)}function l(e){n(a,o,i,s,l,"throw",e)}s(void 0)})}}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){var n=setTimeout;function r(){}function o(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,c._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void a(t.promise,e)}i(t.promise,r)}else(1===e._state?i:a)(t.promise,e._value)})):e._deferreds.push(t)}function i(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof c)return e._state=3,e._value=t,void s(e);if("function"==typeof n)return void l(function(e,t){return function(){e.apply(t,arguments)}}(n,t),e)}e._state=1,e._value=t,s(e)}catch(t){a(e,t)}}function a(e,t){e._state=2,e._value=t,s(e)}function s(e){2===e._state&&0===e._deferreds.length&&c._immediateFn(function(){e._handled||c._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)o(e,e._deferreds[t]);e._deferreds=null}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,i(t,e))},function(e){n||(n=!0,a(t,e))})}catch(e){if(n)return;n=!0,a(t,e)}}function c(e){if(!(this instanceof c))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}var u=c.prototype;u.catch=function(e){return this.then(null,e)},u.then=function(e,t){var n=new this.constructor(r);return o(this,new function(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}(e,t,n)),n},c.all=function(e){return new c(function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){i(e,t)},n)}r[e]=a,0==--o&&t(r)}catch(e){n(e)}}for(var a=0;a<r.length;a++)i(a,r[a])})},c.resolve=function(e){return e&&"object"==typeof e&&e.constructor===c?e:new c(function(t){t(e)})},c.reject=function(e){return new c(function(t,n){n(e)})},c.race=function(e){return new c(function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)})},c._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){n(e,0)},c._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=c}).call(this,n(8).setImmediate)},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l,c=[],u=!1,f=-1;function p(){u&&l&&(u=!1,l.length?c=l.concat(c):f=-1,c.length&&d())}function d(){if(!u){var e=s(p);u=!0;for(var t=c.length;t;){for(l=c,c=[];++f<t;)l&&l[f].run();f=-1,t=c.length}l=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new m(e,t)),1!==c.length||u||s(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){var r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(7),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},function(e,t){!function(t){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag",c="object"==typeof e,u=t.regeneratorRuntime;if(u)c&&(e.exports=u);else{(u=t.regeneratorRuntime=c?e.exports:{}).wrap=b;var f="suspendedStart",p="suspendedYield",d="executing",m="completed",h={},g={};g[a]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(I([])));y&&y!==r&&o.call(y,a)&&(g=y);var w=L.prototype=k.prototype=Object.create(g);_.prototype=w.constructor=L,L.constructor=_,L[l]=_.displayName="GeneratorFunction",u.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))},u.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,L):(e.__proto__=L,l in e||(e[l]="GeneratorFunction")),e.prototype=Object.create(w),e},u.awrap=function(e){return{__await:e}},T(j.prototype),j.prototype[s]=function(){return this},u.AsyncIterator=j,u.async=function(e,t,n,r){var o=new j(b(e,t,n,r));return u.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},T(w),w[l]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},u.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=I,q.prototype={constructor:q,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return s.type="throw",s.arg=e,t.next=r,o&&(t.method="next",t.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var l=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:I(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),h}}}function b(e,t,n,r){var o=t&&t.prototype instanceof k?t:k,i=Object.create(o.prototype),a=new q(r||[]);return i._invoke=function(e,t,n){var r=f;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===m){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=E(a,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var l=x(e,t,n);if("normal"===l.type){if(r=n.done?m:p,l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=m,n.method="throw",n.arg=l.arg)}}}(e,n,a),i}function x(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function k(){}function _(){}function L(){}function T(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function j(e){var t;this._invoke=function(n,r){function i(){return new Promise(function(t,i){!function t(n,r,i,a){var s=x(e[n],e,r);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"==typeof c&&o.call(c,"__await")?Promise.resolve(c.__await).then(function(e){t("next",e,i,a)},function(e){t("throw",e,i,a)}):Promise.resolve(c).then(function(e){l.value=e,i(l)},function(e){return t("throw",e,i,a)})}a(s.arg)}(n,r,t,i)})}return t=t?t.then(i,i):i()}}function E(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,E(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=x(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,h):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function q(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function I(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return i.next=i}}return{next:S}}function S(){return{value:n,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(9),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(3))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o=1,i={},a=!1,s=e.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(e);l=l&&l.setTimeout?l:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){u(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&u(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),r=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){u(e.data)},r=function(t){e.port2.postMessage(t)}}():s&&"onreadystatechange"in s.createElement("script")?function(){var e=s.documentElement;r=function(t){var n=s.createElement("script");n.onreadystatechange=function(){u(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():r=function(e){setTimeout(u,0,e)},l.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var a={callback:e,args:t};return i[o]=a,r(o),o++},l.clearImmediate=c}function c(e){delete i[e]}function u(e){if(a)setTimeout(u,0,e);else{var t=i[e];if(t){a=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{c(e),a=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(3),n(5))},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=n(2),l=n.n(s),c=n(4),u=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==u)return u;throw new Error("unable to locate global object")}();u.Promise||(u.Promise=c.a);var f=function(e){return void 0===e&&(e="#f9f9f9"),'\n     <style type="text/css">\n        @-webkit-keyframes squareScale {\n            0% {-webkit-transform: scale(1);transform: scale(1)}\n            30% {-webkit-transform: scale(0);transform: scale(0)}\n            70% {-webkit-transform: scale(0);transform: scale(0)}\n            to {-webkit-transform: scale(1);transform: scale(1)}\n        }\n        @keyframes squareScale {\n            0% {-webkit-transform: scale(1);transform: scale(1)}\n            30% {-webkit-transform: scale(0);transform: scale(0)}\n            70% {-webkit-transform: scale(0);transform: scale(0)}\n            to {-webkit-transform: scale(1);transform: scale(1)}\n        }\n        .se-bootstrap-position-center {\n            position: absolute;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            left: 0;\n            margin: auto;\n        }\n        .se-bootstrap-placeholder {\n            border-top: 1px solid #e5e5e5;\n            background-color: '+e+';\n        }\n        .se-bootstrap-loading {\n            width: 32px;\n            height: 8px;\n            white-space: nowrap;\n            font-size: 0\n        }\n        .se-bootstrap-loading-square {\n            display: inline-block;\n            width: 8px;\n            height: 8px;\n            background-color: #00d87a;\n            vertical-align: top\n        }\n        .se-bootstrap-loading-square+.se-bootstrap-loading-square {\n            margin-left: 4px\n        }\n        .se-bootstrap-loading-square {\n            color: inherit;\n            -webkit-transform-origin: 50% 50%;\n            -ms-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n            -webkit-animation: squareScale 1s ease-in-out alternate infinite;\n            animation: squareScale 1s ease-in-out alternate infinite;\n            -webkit-animation-fill-mode: both;\n            animation-fill-mode: both\n        }\n        .se-bootstrap-loading-square:first-child {\n            -webkit-animation-delay: 0s;\n            animation-delay: 0s\n        }\n        .se-bootstrap-loading-square:nth-child(2) {\n            -webkit-animation-delay: .15s;\n            animation-delay: .15s\n        }\n        .se-bootstrap-loading-square:nth-child(3) {\n            -webkit-animation-delay: .3s;\n            animation-delay: .3s\n        }\n    </style>\n    <div class="se-bootstrap-placeholder se-bootstrap-position-center">\n        <div class="se-bootstrap-loading se-bootstrap-position-center">\n            <div class="se-bootstrap-loading-square"></div>\n            <div class="se-bootstrap-loading-square"></div>\n            <div class="se-bootstrap-loading-square"></div>\n        </div>\n    </div>'},p=f;!function(){!function(e,t){if("function"==typeof e&&!e.hasOwnProperty("__source"))try{Object.defineProperty(e,"__source",{enumerable:!1,configurable:!0,value:{fileName:"/home1/irteam/deploy/jenkins_ndeploy/jobs/Rabbit-editor-blog-desktop-normal-real/workspace/packages/common/shared-parts/se-launcher/generate-loader.js",localName:t}})}catch(e){}}(f,"default")}();var d=[{image:"https://editor-static.pstatic.net/c/resources/common/img/se-fallover-image-1.png",imageLink:"https://www.grafolio.com/works/361096",creator:"째찌",creatorLink:"https://www.grafolio.com/creator/13209"},{image:"https://editor-static.pstatic.net/c/resources/common/img/se-fallover-image-2.png",imageLink:"https://www.grafolio.com/works/360704",creator:"나람",creatorLink:"https://www.grafolio.com/creator/504634"},{image:"https://editor-static.pstatic.net/c/resources/common/img/se-fallover-image-3.png",imageLink:"https://www.grafolio.com/works/353694",creator:"배뇽뇽",creatorLink:"https://www.grafolio.com/creator/120829"},{image:"https://editor-static.pstatic.net/c/resources/common/img/se-fallover-image-4.png",imageLink:"https://www.grafolio.com/works/361084",creator:"별현아",creatorLink:"https://www.grafolio.com/creator/248023"},{image:"https://editor-static.pstatic.net/c/resources/common/img/se-fallover-image-5.png",imageLink:"https://www.grafolio.com/works/360864",creator:"송킹코",creatorLink:"https://www.grafolio.com/creator/2236"}];window.___se_redirect||(window.___se_redirect=function(){var e=window.document.referrer;if(e){var t=window.history;t&&t.length>1?t.back():location.href=e}else location.href=location.origin});var m=function(e){var t=e.deviceType,n=void 0===t?"desktop":t,r=e.i18n,o=void 0===r?function(){return""}:r,i=d[Math.floor(5*Math.random())],a=o("errorPage:title"),s=o("errorPage:description"),l=o("errorPage:confirm");return"desktop"===n?'\n            <style>\n                @font-face {\n                    font-family: se-nanumsquare;\n                    font-weight: 400;\n                    src: url("https://editor-static.pstatic.net/c/resources/common/fonts/se-nanumsquare-regular.woff2") format("woff2"),\n                        url("https://editor-static.pstatic.net/c/resources/common/fonts/se-nanumsquare-regular.woff") format("woff"),\n                        url("https://editor-static.pstatic.net/c/resources/common/fonts/se-nanumsquare-regular.ttf") format("truetype")\n                }\n                @font-face {\n                    font-family: se-nanumgothic;\n                    font-weight: 400;\n                    src: url("https://editor-static.pstatic.net/c/resources/common/fonts/se-nanumgothic-regular.woff2") format("woff2"),\n                        url("https://editor-static.pstatic.net/c/resources/common/fonts/se-nanumgothic-regular.woff") format("woff"),\n                        url("https://editor-static.pstatic.net/c/resources/common/fonts/se-nanumgothic-regular.ttf") format("truetype")\n                }\n                .se-fallover-page {\n                    border-top: 1px solid #e5e5e5;\n                    padding-top: 140px;\n                    padding-bottom: 140px;\n                    background-color: #fff;\n                }\n                .se-fallover-wrap {\n                    display: block;\n                    width: 500px;\n                    margin: auto;\n                    text-align: center;\n                }\n                .se-fallover-visual {\n                    display: block;\n                    outline: none;\n                    vertical-align: top;\n                }\n                .se-fallover-image-link{\n                    display: block;\n                    margin: 0 auto 4px;\n                    text-decoration: none;\n                }\n                .se-fallover-image {\n                    border: 0;\n                    vertical-align: top;\n                }\n                .se-fallover-image-creator-link{\n                    display: block;\n                    text-decoration: none;\n                }\n                .se-fallover-image-creator {\n                    font-size: 12px;\n                    line-height: 1.83;\n                    color: #999;\n                }\n                .se-fallover-information {\n                    margin-top: 36px;\n                }\n                .se-fallover-title {\n                    font-family: se-nanumsquare, sans-serif;\n                    font-size: 36px;\n                    color: #444;\n                    line-height: 40px;\n                }\n                .se-fallover-description{\n                    display: block;\n                    margin-top: 12px;\n                    font-family: se-nanumgothic, sans-serif;\n                    font-size: 14px;\n                    line-height: 1.64;\n                    color: #555;\n                }\n                .se-fallover-button {\n                    margin-top: 24px;\n                    width: 110px;\n                    height: 40px;\n                    border-radius: 1px;\n                    border: 1px solid #ddd;\n                    background-color: #fff;\n                }\n                .se-fallover-button:before {\n                    content: "";\n                    display: inline-block;\n                    position: relative;\n                    top: -4px;\n                    margin: 0 14px 0 3px;\n                    width: 8px;\n                    height: 16px;\n                    border-style: solid;\n                    border-color: #00c73c;\n                    border-width: 0 2px 2px 0;\n                    -webkit-transform: rotate(45deg);\n                    transform: rotate(45deg);\n                    vertical-align: middle;\n                }\n                .se-fallover-button-text {\n                    font-family: se-nanumsquare, sans-serif;\n                    font-size: 15px;\n                    line-height: 2.27;\n                    color: #00c73c;\n                }\n            </style>\n            <div class="se-fallover-page">\n                <div class="se-fallover-wrap">\n                    <a href="'+i.imageLink+'" class="se-fallover-image-link" target="_blank">\n                        <img class="se-fallover-image" src="'+i.image+'" width="380" alt="" >\n                    </a>\n                    <a href="'+i.creatorLink+'" class="se-fallover-image-creator-link" target="_blank">\n                        <span class="se-fallover-image-creator">illustration by '+i.creator+'</span>\n                    </a>\n                    <div class="se-fallover-information">\n                        <strong class="se-fallover-title">'+a+'</strong>\n                        <p class="se-fallover-description">\n                            '+s+'\n                        </p>\n                        <button class="se-fallover-button" onclick="___se_redirect()"><span class="se-fallover-button-text">'+l+"</span></button>\n                    </div>\n                </div>\n            </div>":'\n            <style>\n                @font-face {\n                    font-family: se-nanumsquare;\n                    font-weight: 400;\n                    src: url("https://editor-static.pstatic.net/c/resources/common/fonts/se-nanumsquare-regular.woff2") format("woff2"),\n                        url("https://editor-static.pstatic.net/c/resources/common/fonts/se-nanumsquare-regular.woff") format("woff"),\n                        url("https://editor-static.pstatic.net/c/resources/common/fonts/se-nanumsquare-regular.ttf") format("truetype")\n                }\n                @font-face {\n                    font-family: se-nanumgothic;\n                    font-weight: 400;\n                    src: url("https://editor-static.pstatic.net/c/resources/common/fonts/se-nanumgothic-regular.woff2") format("woff2"),\n                        url("https://editor-static.pstatic.net/c/resources/common/fonts/se-nanumgothic-regular.woff") format("woff"),\n                        url("https://editor-static.pstatic.net/c/resources/common/fonts/se-nanumgothic-regular.ttf") format("truetype")\n                }\n                .se-fallover-page {\n                    padding-top: 40px;\n                    padding-bottom: 40px;\n                    background-color: #fff;\n                }\n                .se-fallover-wrap {\n                    display: block;\n                    width: 300px;\n                    margin: auto;\n                    text-align: center;\n                }\n                .se-fallover-image-link{\n                    display: block;\n                    margin: 0 auto;\n                    text-decoration: none;\n                }\n                .se-fallover-image {\n                    border: 0;\n                    vertical-align: top;\n                }\n                .se-fallover-image-creator-link{\n                    display: block;\n                    text-decoration: none;\n                }\n                .se-fallover-image-creator {\n                    font-size: 12px;\n                    line-height: 22px;\n                    color: #999;\n                }\n                .se-fallover-information {\n                    margin-top: 34px;\n                }\n                .se-fallover-title {\n                    font-family: se-nanumsquare, sans-serif;\n                    font-size: 22px;\n                    color: #333;\n                    line-height: 25px;\n                }\n                .se-fallover-description{\n                    display: block;\n                    margin-top: 10px;\n                    font-family: se-nanumgothic, sans-serif;\n                    font-size: 13px;\n                    line-height: 1.62;\n                    letter-spacing: -0.5px;\n                    color: #555;\n                }\n                .se-fallover-button {\n                    margin-top: 11px;\n                    width: 110px;\n                    height: 40px;\n                    border-radius: 1px;\n                    border: 1px solid #ddd;\n                    background-color: #fff;\n                }\n                .se-fallover-button:before {\n                    content: "";\n                    display: inline-block;\n                    position: relative;\n                    top: -4px;\n                    margin: 0 14px 0 3px;\n                    width: 8px;\n                    height: 16px;\n                    border-style: solid;\n                    border-color: #00c73c;\n                    border-width: 0 2px 2px 0;\n                    -webkit-transform: rotate(45deg);\n                    transform: rotate(45deg);\n                    vertical-align: middle;\n                }\n                .se-fallover-button-text {\n                    font-family: se-nanumsquare, sans-serif;\n                    font-size: 15px;\n                    line-height: 34px;\n                    color: #00c73c;\n                }\n            </style>\n            <div class="se-fallover-page">\n                <div class="se-fallover-wrap">\n                    <a href="'+i.imageLink+'" class="se-fallover-image-link" target="_blank">\n                        <img class="se-fallover-image" src="'+i.image+'" width="280" alt="" >\n                    </a>\n                    <a href="'+i.creatorLink+'" class="se-fallover-image-creator-link" target="_blank">\n                        <span class="se-fallover-image-creator">illustration by '+i.creator+'</span>\n                    </a>\n                    <div class="se-fallover-information">\n                        <strong class="se-fallover-title">'+a+'</strong>\n                        <p class="se-fallover-description">\n                            '+s+'\n                        </p>\n                        <button class="se-fallover-button" onclick="___se_redirect()"><span class="se-fallover-button-text">'+l+"</span></button>\n                    </div>\n                </div>\n            </div>"},h=m;!function(){function e(e,t){if("function"==typeof e&&!e.hasOwnProperty("__source"))try{Object.defineProperty(e,"__source",{enumerable:!1,configurable:!0,value:{fileName:"/home1/irteam/deploy/jenkins_ndeploy/jobs/Rabbit-editor-blog-desktop-normal-real/workspace/packages/common/shared-parts/se-launcher/generate-fallover-page.js",localName:t}})}catch(e){}}e(d,"ERROR_IMAGES"),e(m,"default")}();var g=[Promise.all([n.e(59),n.e(4)]).then(n.t.bind(null,1157,7)),Promise.all([n.e(58),n.e(5)]).then(n.bind(null,1209)),n.e(6).then(n.t.bind(null,1162,7))],v=function(){function e(){}return e.launch=function(){var e=l()(o.a.mark(function e(t){var n,r,i,s,l,c,u,f,d,m,v,y,w,b;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.token,r=t.appCode,i=t.document,s=t.containerElement,l=t.language,c=t.events,u=t.interceptor,f=t.bgColorOfLoading,d=a()(t,["token","appCode","document","containerElement","language","events","interceptor","bgColorOfLoading"]),s.innerHTML=p(f),e.next=4,Promise.all(g);case 4:return m=e.sent,v=m[1],y=v.default,(w=new y({token:n,appCode:r,document:i,language:l,serviceConfig:d})).addAllEventListeners(c),w.addXHRInterceptors(u),e.next=12,w.bootstrap(s);case 12:if(!(b=e.sent)){e.next=18;break}return s.innerHTML=h(b),e.abrupt("return",null);case 18:return e.abrupt("return",w);case 19:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),e}(),y=v;!function(){function e(e,t){if("function"==typeof e&&!e.hasOwnProperty("__source"))try{Object.defineProperty(e,"__source",{enumerable:!1,configurable:!0,value:{fileName:"/home1/irteam/deploy/jenkins_ndeploy/jobs/Rabbit-editor-blog-desktop-normal-real/workspace/packages/common/shared-parts/se-launcher/index.js",localName:t}})}catch(e){}}e(g,"blockingDependencies"),e(v,"SELauncher"),e(y,"default")}(),n.d(t,"default",function(){return v})}]).default});
//# sourceMappingURL=se-launcher.js.map