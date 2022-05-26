/*! For license information please see main.ba2b6f80.js.LICENSE.txt */
(()=>{var __webpack_modules__={8926:e=>{function t(e,t,n,r,i,a,o){try{var s=e[a](o),l=s.value}catch(u){return void n(u)}s.done?t(l):Promise.resolve(l).then(r,i)}e.exports=function(e){return function(){var n=this,r=arguments;return new Promise((function(i,a){var o=e.apply(n,r);function s(e){t(o,i,a,s,l,"next",e)}function l(e){t(o,i,a,s,l,"throw",e)}s(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},4575:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},3913:e=>{function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},5318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},9591:(e,t,n)=>{var r=n(8).default;function i(){"use strict";e.exports=i=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},n=Object.prototype,a=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(T){c=function(e,t,n){return e[t]=n}}function d(e,t,n,r){var i=t&&t.prototype instanceof h?t:h,a=Object.create(i.prototype),o=new C(r||[]);return a._invoke=function(e,t,n){var r="suspendedStart";return function(i,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw a;return D()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=w(o,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=f(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,o),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(T){return{type:"throw",arg:T}}}t.wrap=d;var p={};function h(){}function g(){}function m(){}var _={};c(_,s,(function(){return this}));var b=Object.getPrototypeOf,v=b&&b(b(S([])));v&&v!==n&&a.call(v,s)&&(_=v);var y=m.prototype=h.prototype=Object.create(_);function F(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(i,o,s,l){var u=f(e[i],e,o);if("throw"!==u.type){var c=u.arg,d=c.value;return d&&"object"==r(d)&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,s,l)}),(function(e){n("throw",e,s,l)})):t.resolve(d).then((function(e){c.value=e,s(c)}),(function(e){return n("throw",e,s,l)}))}l(u.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=f(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,p;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function S(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:D}}function D(){return{value:void 0,done:!0}}return g.prototype=m,c(y,"constructor",m),c(m,"constructor",g),g.displayName=c(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,u,"GeneratorFunction")),e.prototype=Object.create(y),e},t.awrap=function(e){return{__await:e}},F(E.prototype),c(E.prototype,l,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,i,a){void 0===a&&(a=Promise);var o=new E(d(e,n,r,i),a);return t.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},F(y),c(y,u,"Generator"),c(y,s,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;x(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},8:e=>{function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7757:(e,t,n)=>{e.exports=n(9591)()},9366:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r,i,a=n(2791);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const s=(e,t)=>{let{title:n,titleId:s,...l}=e;return a.createElement("svg",o({width:72,height:96,viewBox:"0 0 72 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},l),n?a.createElement("title",{id:s},n):null,r||(r=a.createElement("g",{clipPath:"url(#clip0_4011_27601)"},a.createElement("path",{d:"M72 29.3V89.6C72 91.84 72 92.96 71.56 93.82C71.18 94.56 70.56 95.18 69.82 95.56C68.96 96 67.84 96 65.6 96H6.4C4.16 96 3.04 96 2.18 95.56C1.44 95.18 0.82 94.56 0.44 93.82C0 92.96 0 91.84 0 89.6V6.4C0 4.16 0 3.04 0.44 2.18C0.82 1.44 1.44 0.82 2.18 0.44C3.04 0 4.16 0 6.4 0H42.7C44.66 0 45.64 0 46.56 0.22C47.06 0.34 47.54 0.5 48 0.72V17.6C48 19.84 48 20.96 48.44 21.82C48.82 22.56 49.44 23.18 50.18 23.56C51.04 24 52.16 24 54.4 24H71.28C71.5 24.46 71.66 24.94 71.78 25.44C72 26.36 72 27.34 72 29.3Z",fill:"#A5F3FC"}),a.createElement("path",{d:"M68.26 20.26C69.64 21.64 70.32 22.32 70.82 23.14C71 23.42 71.14 23.7 71.28 24H54.4C52.16 24 51.04 24 50.18 23.56C49.44 23.18 48.82 22.56 48.44 21.82C48 20.96 48 19.84 48 17.6V0.719971C48.3 0.859971 48.58 0.999971 48.86 1.17997C49.68 1.67997 50.36 2.35997 51.74 3.73997L68.26 20.26Z",fill:"#06B6D4"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.76 42.16C34.02 41.86 33.16 42.02 32.58 42.6L24 52H18C16.9 52 16 52.9 16 54V66C16 67.1 16.9 68 18 68H24L32.58 77.42C33.16 78 34.02 78.16 34.76 77.86C35.52 77.54 36 76.8 36 76V44C36 43.2 35.52 42.46 34.76 42.16ZM40 46V50C45.52 50 50 54.48 50 60C50 65.52 45.52 70 40 70V74C47.72 74 54 67.72 54 60C54 52.28 47.72 46 40 46ZM40 54C43.3 54 46 56.7 46 60C46 63.3 43.3 66 40 66V62C41.1 62 42 61.1 42 60C42 58.9 41.1 58 40 58V54Z",fill:"#0891B2"}))),i||(i=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_4011_27601"},a.createElement("rect",{width:72,height:96,fill:"white"})))))},l=(0,a.forwardRef)(s)},6840:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r,i,a=n(2791);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const s=(e,t)=>{let{title:n,titleId:s,...l}=e;return a.createElement("svg",o({width:72,height:96,viewBox:"0 0 72 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},l),n?a.createElement("title",{id:s},n):null,r||(r=a.createElement("g",{clipPath:"url(#clip0_4011_27600)"},a.createElement("path",{d:"M72 29.3V89.6C72 91.84 72 92.96 71.56 93.82C71.18 94.56 70.56 95.18 69.82 95.56C68.96 96 67.84 96 65.6 96H6.4C4.16 96 3.04 96 2.18 95.56C1.44 95.18 0.82 94.56 0.44 93.82C0 92.96 0 91.84 0 89.6V6.4C0 4.16 0 3.04 0.44 2.18C0.82 1.44 1.44 0.82 2.18 0.44C3.04 0 4.16 0 6.4 0H42.7C44.66 0 45.64 0 46.56 0.22C47.06 0.34 47.54 0.5 48 0.72V17.6C48 19.84 48 20.96 48.44 21.82C48.82 22.56 49.44 23.18 50.18 23.56C51.04 24 52.16 24 54.4 24H71.28C71.5 24.46 71.66 24.94 71.78 25.44C72 26.36 72 27.34 72 29.3Z",fill:"#A5F3FC"}),a.createElement("path",{d:"M68.26 20.26C69.64 21.64 70.32 22.32 70.82 23.14C71 23.42 71.14 23.7 71.28 24H54.4C52.16 24 51.04 24 50.18 23.56C49.44 23.18 48.82 22.56 48.44 21.82C48 20.96 48 19.84 48 17.6V0.719971C48.3 0.859971 48.58 0.999971 48.86 1.17997C49.68 1.67997 50.36 2.35997 51.74 3.73997L68.26 20.26Z",fill:"#06B6D4"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.7 40.46C24.36 40.18 25.02 40.08 25.68 40.04C26.3 40 27.06 40 27.94 40H28V44C27.04 44 26.42 44 25.96 44.02C25.5 44.06 25.32 44.1 25.24 44.14C24.76 44.34 24.36 44.74 24.16 45.22C24.12 45.32 24.08 45.48 24.04 45.94C24 46.42 24 47.04 24 48V54.06C24 54.94 24 55.7 23.96 56.32C23.9 56.98 23.82 57.64 23.54 58.3C23.28 58.94 22.9 59.5 22.44 60C22.9 60.5 23.28 61.06 23.54 61.7C23.82 62.36 23.92 63.02 23.96 63.68C24 64.3 24 65.06 24 65.94V72C24 72.96 24 73.58 24.02 74.04C24.06 74.5 24.1 74.68 24.14 74.76C24.34 75.24 24.74 75.64 25.22 75.84C25.32 75.88 25.48 75.92 25.94 75.96C26.42 76 27.04 76 28 76V80H27.94C27.06 80 26.3 80 25.68 79.96C25.02 79.9 24.36 79.82 23.7 79.54C22.24 78.94 21.06 77.78 20.46 76.3C20.18 75.64 20.08 74.98 20.04 74.32C20 73.7 20 72.94 20 72.06V66C20 65.04 20 64.42 19.98 63.96C19.94 63.5 19.9 63.32 19.86 63.24C19.66 62.76 19.26 62.36 18.78 62.16C18.68 62.12 18.52 62.08 18.06 62.04C17.58 62 16.96 62 16 62V58C16.96 58 17.58 58 18.04 57.98C18.5 57.94 18.68 57.9 18.76 57.86C19.24 57.66 19.64 57.28 19.84 56.78C19.88 56.68 19.92 56.52 19.96 56.06C20 55.58 20 54.96 20 54V47.94C20 47.06 20 46.3 20.04 45.68C20.1 45.02 20.18 44.36 20.46 43.7C21.06 42.24 22.22 41.06 23.7 40.46ZM53.22 57.84C53.32 57.88 53.48 57.92 53.94 57.96C54.42 58 55.04 58 56 58V62C55.04 62 54.42 62 53.96 62.02C53.5 62.06 53.32 62.1 53.24 62.14C52.76 62.34 52.36 62.74 52.16 63.22C52.12 63.32 52.08 63.48 52.04 63.94C52 64.42 52 65.04 52 66V72.06C52 72.94 52 73.7 51.96 74.32C51.9 74.98 51.82 75.64 51.54 76.3C50.94 77.76 49.76 78.94 48.3 79.54C47.64 79.82 46.98 79.92 46.32 79.96C45.7 80 44.94 80 44.06 80H44V76C44.96 76 45.58 76 46.04 75.98C46.5 75.94 46.68 75.9 46.76 75.86C47.24 75.66 47.64 75.28 47.84 74.78C47.88 74.68 47.92 74.52 47.96 74.06C48 73.58 48 72.96 48 72V65.94C48 65.06 48 64.3 48.04 63.68C48.1 63.02 48.2 62.36 48.46 61.7C48.72 61.06 49.1 60.5 49.56 60C49.1 59.5 48.72 58.94 48.46 58.3C48.18 57.64 48.08 56.98 48.04 56.32C48 55.7 48 54.94 48 54.06V48C48 47.04 48 46.42 47.98 45.96C47.94 45.5 47.9 45.32 47.86 45.24C47.66 44.76 47.26 44.36 46.78 44.16C46.68 44.12 46.52 44.08 46.06 44.04C45.58 44 44.96 44 44 44V40H44.06C44.94 40 45.7 40 46.32 40.04C46.98 40.1 47.64 40.18 48.3 40.46C49.76 41.06 50.94 42.22 51.54 43.7C51.82 44.36 51.92 45.02 51.96 45.68C52 46.3 52 47.06 52 47.94V54C52 54.96 52 55.58 52.02 56.04C52.06 56.5 52.1 56.68 52.14 56.76C52.34 57.24 52.74 57.64 53.22 57.84Z",fill:"#0891B2"}))),i||(i=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_4011_27600"},a.createElement("rect",{width:72,height:96,fill:"white"})))))},l=(0,a.forwardRef)(s)},1880:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r,i,a=n(2791);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const s=(e,t)=>{let{title:n,titleId:s,...l}=e;return a.createElement("svg",o({width:72,height:96,viewBox:"0 0 72 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},l),n?a.createElement("title",{id:s},n):null,r||(r=a.createElement("g",{clipPath:"url(#clip0_4011_27599)"},a.createElement("path",{d:"M72 29.3V89.6C72 91.84 72 92.96 71.56 93.82C71.18 94.56 70.56 95.18 69.82 95.56C68.96 96 67.84 96 65.6 96H6.4C4.16 96 3.04 96 2.18 95.56C1.44 95.18 0.82 94.56 0.44 93.82C0 92.96 0 91.84 0 89.6V6.4C0 4.16 0 3.04 0.44 2.18C0.82 1.44 1.44 0.82 2.18 0.44C3.04 0 4.16 0 6.4 0H42.7C44.66 0 45.64 0 46.56 0.22C47.06 0.34 47.54 0.5 48 0.72V17.6C48 19.84 48 20.96 48.44 21.82C48.82 22.56 49.44 23.18 50.18 23.56C51.04 24 52.16 24 54.4 24H71.28C71.5 24.46 71.66 24.94 71.78 25.44C72 26.36 72 27.34 72 29.3Z",fill:"#A5F3FC"}),a.createElement("path",{d:"M68.26 20.26C69.64 21.64 70.32 22.32 70.82 23.14C71 23.42 71.14 23.7 71.28 24H54.4C52.16 24 51.04 24 50.18 23.56C49.44 23.18 48.82 22.56 48.44 21.82C48 20.96 48 19.84 48 17.6V0.719971C48.3 0.859971 48.58 0.999971 48.86 1.17997C49.68 1.67997 50.36 2.35997 51.74 3.73997L68.26 20.26Z",fill:"#06B6D4"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M56 40H40V44H56V40ZM56 52H40V56H56V52ZM16 64H56V68H16V64ZM56 76H16V80H56V76ZM26 56H22V44H16V40H32V44H26V56Z",fill:"#0891B2"}))),i||(i=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_4011_27599"},a.createElement("rect",{width:72,height:96,fill:"white"})))))},l=(0,a.forwardRef)(s)},7703:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r,i,a=n(2791);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const s=(e,t)=>{let{title:n,titleId:s,...l}=e;return a.createElement("svg",o({width:72,height:96,viewBox:"0 0 72 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},l),n?a.createElement("title",{id:s},n):null,r||(r=a.createElement("g",{clipPath:"url(#clip0_4011_27602)"},a.createElement("path",{d:"M72 29.3V89.6C72 91.84 72 92.96 71.56 93.82C71.18 94.56 70.56 95.18 69.82 95.56C68.96 96 67.84 96 65.6 96H6.4C4.16 96 3.04 96 2.18 95.56C1.44 95.18 0.819999 94.56 0.44 93.82C-5.66244e-07 92.96 -3.89266e-07 91.84 7.33793e-10 89.6L1.45507e-05 6.4C1.49407e-05 4.16 1.51396e-05 3.04 0.440016 2.18C0.820016 1.44 1.44002 0.819999 2.18002 0.439999C3.04002 -5.96046e-07 4.16002 -3.89266e-07 6.40002 7.33824e-10L42.7 6.35073e-06C44.66 6.69073e-06 45.64 6.86944e-06 46.56 0.220007C47.06 0.340007 47.54 0.500007 48 0.720007V17.6C48 19.84 48 20.96 48.44 21.82C48.82 22.56 49.44 23.18 50.18 23.56C51.04 24 52.16 24 54.4 24H71.28C71.5 24.46 71.66 24.94 71.78 25.44C72 26.36 72 27.34 72 29.3Z",fill:"#A5F3FC"}),a.createElement("path",{d:"M68.26 20.26C69.64 21.64 70.32 22.32 70.82 23.14C71 23.42 71.14 23.7 71.28 24H54.4C52.16 24 51.04 24 50.18 23.56C49.44 23.18 48.82 22.56 48.44 21.82C48 20.96 48 19.84 48 17.6V0.719971C48.3 0.859971 48.58 0.999971 48.86 1.17997C49.68 1.67997 50.36 2.35997 51.74 3.73997L68.26 20.26Z",fill:"#06B6D4"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32 48C32 52.4183 28.4183 56 24 56C19.5817 56 16 52.4183 16 48C16 43.5817 19.5817 40 24 40C28.4183 40 32 43.5817 32 48ZM33.648 71.526L44 55.998L56 79.998H16L28 63.998L33.648 71.526Z",fill:"#0891B2"}))),i||(i=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_4011_27602"},a.createElement("rect",{width:72,height:96,fill:"white"})))))},l=(0,a.forwardRef)(s)},5740:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r,i,a=n(2791);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const s=(e,t)=>{let{title:n,titleId:s,...l}=e;return a.createElement("svg",o({width:72,height:96,viewBox:"0 0 72 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},l),n?a.createElement("title",{id:s},n):null,r||(r=a.createElement("g",{clipPath:"url(#clip0_4011_27603)"},a.createElement("path",{d:"M72 29.3V89.6C72 91.84 72 92.96 71.56 93.82C71.18 94.56 70.56 95.18 69.82 95.56C68.96 96 67.84 96 65.6 96H6.4C4.16 96 3.04 96 2.18 95.56C1.44 95.18 0.82 94.56 0.44 93.82C0 92.96 0 91.84 0 89.6V6.4C0 4.16 0 3.04 0.44 2.18C0.82 1.44 1.44 0.82 2.18 0.44C3.04 0 4.16 0 6.4 0H42.7C44.66 0 45.64 0 46.56 0.22C47.06 0.34 47.54 0.5 48 0.72V17.6C48 19.84 48 20.96 48.44 21.82C48.82 22.56 49.44 23.18 50.18 23.56C51.04 24 52.16 24 54.4 24H71.28C71.5 24.46 71.66 24.94 71.78 25.44C72 26.36 72 27.34 72 29.3Z",fill:"#A5F3FC"}),a.createElement("path",{d:"M68.26 20.26C69.64 21.64 70.32 22.32 70.82 23.14C71 23.42 71.14 23.7 71.28 24H54.4C52.16 24 51.04 24 50.18 23.56C49.44 23.18 48.82 22.56 48.44 21.82C48 20.96 48 19.84 48 17.6V0.719971C48.3 0.859971 48.58 0.999971 48.86 1.17997C49.68 1.67997 50.36 2.35997 51.74 3.73997L68.26 20.26Z",fill:"#06B6D4"}),a.createElement("path",{d:"M56.1014 65.0909C52.962 61.8909 44.4014 63.2 42.3389 63.4364C40.0756 61.2182 38.1408 58.7091 36.5528 55.9818C37.6845 52.8182 38.3233 49.5091 38.4876 46.1636C38.4876 43.2 37.2829 40 33.9061 40C32.7197 40.0364 31.6246 40.6545 31.004 41.6545C29.562 44.1455 30.1643 49.1091 32.4459 54.2C30.8762 58.8545 28.8867 63.3636 26.5321 67.6909C23.0275 69.1091 15.6717 72.4182 15.0694 75.9818C14.8321 77.0727 15.2154 78.1818 16.0368 78.9455C16.8946 79.6364 17.9533 80 19.0667 80C23.5386 80 27.8828 73.9636 30.8945 68.8727C34.326 67.7273 37.8305 66.8182 41.3897 66.1455C46.0989 70.1636 50.2058 70.7636 52.3779 70.7636C55.28 70.7636 56.357 69.5818 56.722 68.5091C57.2513 67.3636 57.0141 66 56.1014 65.0909ZM53.0897 67.1091C52.962 67.9455 51.885 68.7636 49.9503 68.2909C47.7052 67.7091 45.6061 66.6545 43.7991 65.2182C45.3688 64.9818 48.8734 64.6182 51.3922 65.0909C52.3596 65.3273 53.327 65.9091 53.0897 67.1091ZM32.9388 42.7273C33.1395 42.3818 33.5046 42.1636 33.9061 42.1273C34.9831 42.1273 35.2386 43.4364 35.2386 44.4909C35.1108 47 34.6363 49.4545 33.7966 51.8364C31.9714 47.1091 32.3364 43.7818 32.9388 42.7273ZM32.7015 65.6727C33.7419 63.5091 34.6728 61.3091 35.4759 59.0545C36.5893 60.8 37.8852 62.4182 39.3454 63.9091C39.3272 64.0182 35.5854 64.7273 32.7015 65.6727ZM25.5829 70.4182C22.8085 74.9091 19.9063 77.7636 18.3366 77.7636C18.0811 77.7455 17.8255 77.6545 17.6065 77.5273C17.2414 77.2909 17.0954 76.8545 17.2414 76.4545C17.6065 74.8 20.746 72.5455 25.5829 70.4182Z",fill:"#0891B2"}))),i||(i=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_4011_27603"},a.createElement("rect",{width:72,height:96,fill:"white"})))))},l=(0,a.forwardRef)(s)},2482:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r,i,a=n(2791);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const s=(e,t)=>{let{title:n,titleId:s,...l}=e;return a.createElement("svg",o({width:72,height:96,viewBox:"0 0 72 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},l),n?a.createElement("title",{id:s},n):null,r||(r=a.createElement("g",{clipPath:"url(#clip0_4158_31546)"},a.createElement("path",{d:"M72 29.3V89.6C72 91.84 72 92.96 71.56 93.82C71.18 94.56 70.56 95.18 69.82 95.56C68.96 96 67.84 96 65.6 96H6.4C4.16 96 3.04 96 2.18 95.56C1.44 95.18 0.82 94.56 0.44 93.82C0 92.96 0 91.84 0 89.6V6.4C0 4.16 0 3.04 0.44 2.18C0.82 1.44 1.44 0.82 2.18 0.44C3.04 0 4.16 0 6.4 0H42.7C44.66 0 45.64 0 46.56 0.22C47.06 0.34 47.54 0.5 48 0.72V17.6C48 19.84 48 20.96 48.44 21.82C48.82 22.56 49.44 23.18 50.18 23.56C51.04 24 52.16 24 54.4 24H71.28C71.5 24.46 71.66 24.94 71.78 25.44C72 26.36 72 27.34 72 29.3Z",fill:"#A5F3FC"}),a.createElement("path",{d:"M68.26 20.26C69.64 21.64 70.32 22.32 70.82 23.14C71 23.42 71.14 23.7 71.28 24H54.4C52.16 24 51.04 24 50.18 23.56C49.44 23.18 48.82 22.56 48.44 21.82C48 20.96 48 19.84 48 17.6V0.719971C48.3 0.859971 48.58 0.999971 48.86 1.17997C49.68 1.67997 50.36 2.35997 51.74 3.73997L68.26 20.26Z",fill:"#06B6D4"}))),i||(i=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_4158_31546"},a.createElement("rect",{width:72,height:96,fill:"white"})))))},l=(0,a.forwardRef)(s)},3519:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r,i,a=n(2791);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const s=(e,t)=>{let{title:n,titleId:s,...l}=e;return a.createElement("svg",o({width:72,height:96,viewBox:"0 0 72 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},l),n?a.createElement("title",{id:s},n):null,r||(r=a.createElement("g",{clipPath:"url(#clip0_4174_31563)"},a.createElement("path",{d:"M72 29.3V89.6C72 91.84 72 92.96 71.56 93.82C71.18 94.56 70.56 95.18 69.82 95.56C68.96 96 67.84 96 65.6 96H6.4C4.16 96 3.04 96 2.18 95.56C1.44 95.18 0.82 94.56 0.44 93.82C0 92.96 0 91.84 0 89.6V6.4C0 4.16 0 3.04 0.44 2.18C0.82 1.44 1.44 0.82 2.18 0.44C3.04 0 4.16 0 6.4 0H42.7C44.66 0 45.64 0 46.56 0.22C47.06 0.34 47.54 0.5 48 0.72V17.6C48 19.84 48 20.96 48.44 21.82C48.82 22.56 49.44 23.18 50.18 23.56C51.04 24 52.16 24 54.4 24H71.28C71.5 24.46 71.66 24.94 71.78 25.44C72 26.36 72 27.34 72 29.3V29.3Z",fill:"#A5F3FC"}),a.createElement("path",{d:"M68.26 20.26C69.64 21.64 70.32 22.32 70.82 23.14C71 23.42 71.14 23.7 71.28 24H54.4C52.16 24 51.04 24 50.18 23.56C49.44 23.18 48.82 22.56 48.44 21.82C48 20.96 48 19.84 48 17.6V0.719971C48.3 0.859971 48.58 0.999971 48.86 1.17997C49.68 1.67997 50.36 2.35997 51.74 3.73997L68.26 20.26Z",fill:"#06B6D4"}),a.createElement("path",{d:"M43 51.25C43 47.7982 40.2018 45 36.75 45H22.25C18.7982 45 16 47.7982 16 51.25V68.75C16 72.2018 18.7982 75 22.25 75H36.75C40.2018 75 43 72.2018 43 68.75V51.25ZM45 65.5316L51.9612 70.9681C53.6027 72.25 56 71.0804 56 68.9978V51.0027C56 48.92 53.6026 47.7505 51.9612 49.0324L45 54.469V65.5316Z",fill:"#0891B2"}))),i||(i=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_4174_31563"},a.createElement("rect",{width:72,height:96,fill:"white"})))))},l=(0,a.forwardRef)(s)},5254:(e,t,n)=>{"use strict";n.d(t,{Ax:()=>_,Ie:()=>p,JE:()=>d,OP:()=>g,Pb:()=>u,R1:()=>m,Wv:()=>f,YM:()=>r,ZP:()=>v,bI:()=>o,bT:()=>i,f0:()=>c,kK:()=>h,kO:()=>b,qe:()=>a,rs:()=>l,um:()=>s});const r="0.2.13",i={text:"text/plain",markdown:"text/markdown",file:"rustchat/file",formData:"multipart/form-data",json:"application/json",archive:"rustchat/archive"},a={apiKey:"AIzaSyDyJ6B1Ouenoha_gdGkBwIkBNStlwhlbO0",authDomain:"rustchat-develop.firebaseapp.com",projectId:"rustchat-develop",storageBucket:"rustchat-develop.appspot.com",messagingSenderId:"418687074928",appId:"1:418687074928:web:753286adbf239f5af9eab5",measurementId:"G-XV476KEC8P"},o={channel:"#",user:"@"},s="BGXCn-5YRXSFw38Q9lUKJ5bibL212-yIQn1pCvthGhp6_KwA29FO1Ax_d_7if1vfC2a5wTSVO8AcZrc-Hm1aS0Y",l="X-API-Key",u=16e5,c=8e7,d="RUSTCHAT_TOKEN",f="RUSTCHAT_TOKEN_EXPIRE",p="RUSTCHAT_REFRESH_TOKEN",h="RUSTCHAT_CURR_UID",g="RUSTCHAT_DEVICE_KEY",m="RUSTCHAT_PWA_INSTALLED",_=["\ud83d\udc4d","\u2764\ufe0f","\ud83d\ude04","\ud83d\udc40","\ud83d\udc4e","\ud83c\udf89","\ud83d\ude41","\ud83d\ude80"],b={item:"item",grid:"grid"},v="https://dev.rustchat.com/api"},5143:(e,t,n)=>{"use strict";n.d(t,{CB:()=>p,I1:()=>d,Mn:()=>b,SO:()=>h,Vd:()=>f,Wm:()=>c,YA:()=>m,a3:()=>v,iJ:()=>u,sT:()=>_,sZ:()=>g});var r=n(1465),i=n(5273),a=n(2592),o=n(8198),s=n(5254);const l=()=>{let e=localStorage.getItem(s.OP);return e||(e=`web:${(0,i.x0)()}`,localStorage.setItem(s.OP,e)),e},u=(0,r.LC)({reducerPath:"authApi",baseQuery:a.Z,endpoints:e=>({login:e.mutation({query:e=>({url:"token/login",method:"POST",body:{credential:e,device:l(),device_token:"test"}}),transformResponse:e=>{const{avatar_updated_at:t}=e.user;return e.user.avatar=0==t?"":`${s.ZP}/resource/avatar?uid=${e.user.uid}&t=${t}`,e}}),renew:e.mutation({query:e=>{let{token:t,refreshToken:n}=e;return{url:"/token/renew",method:"POST",body:{token:t,refresh_token:n}}},async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{const{data:e}=await r;n((0,o.jM)(e))}catch{n((0,o.sQ)())}}}),updateDeviceToken:e.mutation({query:e=>({url:"/token/device_token",method:"PUT",body:{device_token:e}})}),getOpenid:e.mutation({query:e=>{let{issuer:t,redirect_uri:n}=e;return{url:"/token/openid/authorize",method:"POST",body:{issuer:t,redirect_uri:n}}}}),checkInviteTokenValid:e.mutation({query:e=>({url:"user/check_invite_magic_token",method:"POST",body:{magic_token:e}})}),updatePassword:e.mutation({query:e=>{let{old_password:t,new_password:n}=e;return{url:"user/change_password",method:"POST",body:{old_password:t,new_password:n}}}}),sendMagicLink:e.mutation({query:e=>({url:"token/send_magic_link",method:"POST",body:{email:e}})}),getMetamaskNonce:e.query({query:e=>({url:`/token/metamask/nonce?public_address=${e}`})}),getCredentials:e.query({query:()=>({url:"/token/credentials"})}),logout:e.query({query:()=>({url:"token/logout"}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{await r,n((0,o.sQ)())}catch{}}})})}),{useSendMagicLinkMutation:c,useGetCredentialsQuery:d,useUpdateDeviceTokenMutation:f,useGetOpenidMutation:p,useRenewMutation:h,useLazyGetMetamaskNonceQuery:g,useLoginMutation:m,useLazyLogoutQuery:_,useCheckInviteTokenValidMutation:b,useUpdatePasswordMutation:v}=u},2592:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(255),i=n(6140),a=n(7892),o=n.n(a),s=n(8198),l=n(5254);const u=["login","register","sendMagicLink","checkInviteTokenValid","getGoogleAuthConfig","getSMTPStatus","getLoginConfig","getServerVersion","getServer","getOpenid","getMetamaskNonce","renew"],c=(0,r.ni)({baseUrl:l.ZP,prepareHeaders:(e,t)=>{let{getState:n,endpoint:r}=t;const{token:i}=n().authData;return i&&!u.includes(r)&&e.set(l.rs,i),e}});let d=null;const f=async(e,t,n)=>{var r;d&&await d;const{token:a,refreshToken:l,expireTime:f=(new Date).getTime()}=t.getState().authData;let p=null;if(!u.includes(t.endpoint)&&o()().isAfter(new Date(f-2e4))?(d=c({url:"/token/renew",method:"POST",body:{token:a,refresh_token:l}},t,n),p=await d,d=null,p.data&&(t.dispatch((0,s.jM)(p.data)),p=await c(e,t,n))):p=await c(e,t,n),null!==(r=p)&&void 0!==r&&r.error)switch(p.error.originalStatus||p.error.status){case"FETCH_ERROR":i.ZP.error(`${t.endpoint}: Failed to fetch`);break;case 404:i.ZP.error("Request Not Found");break;case 500:i.ZP.error(p.error.data||"server error");break;case 401:"login"!==t.endpoint&&(t.dispatch((0,s.sQ)()),location.href="/#/login",i.ZP.error("API Not Authenticated"));break;case 403:i.ZP.error("Request Not Allowed")}return p}},251:(e,t,n)=>{"use strict";n.d(t,{C0:()=>g,QQ:()=>p,Uk:()=>_,bI:()=>f,bm:()=>b,eJ:()=>c,g$:()=>h,l4:()=>v,wv:()=>d});var r=n(1465),i=n(5254),a=n(2592),o=n(8198),s=n(2002),l=n(7271),u=n(3609);const c=(0,r.LC)({reducerPath:"contactApi",baseQuery:a.Z,endpoints:e=>({getContacts:e.query({query:()=>({url:"user"}),transformResponse:e=>e.map((e=>{const t=0==e.avatar_updated_at?"":`${i.ZP}/resource/avatar?uid=${e.uid}&t=${e.avatar_updated_at}`;return e.avatar=t,e})),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;const a=localStorage.getItem(i.kK);try{const{data:e}=await r,t=e.find((e=>e.uid==a));if(t){const r=e.map((e=>e.uid==t.uid?{...e,online:!0}:e));n((0,o.fs)(t.uid)),n((0,l.g5)(r))}else n((0,o.sQ)())}catch{}}}),deleteContact:e.query({query:e=>({url:`/admin/user/${e}`,method:"DELETE"})}),updateContact:e.mutation({query:e=>{let{id:t,...n}=e;return{url:`/admin/user/${t}`,body:n,method:"PUT"}}}),updateMuteSetting:e.mutation({query:e=>({url:"/user/mute",method:"POST",body:e}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{await r,n((0,s.Uw)(e))}catch(i){}}}),updateAvatar:e.mutation({query:e=>({headers:{"content-type":"image/png"},url:"user/avatar",method:"POST",body:e})}),updateInfo:e.mutation({query:e=>({url:"user",method:"PUT",body:e})}),register:e.mutation({query:e=>({url:"user/register",method:"POST",body:e})}),sendMsg:e.mutation({query:e=>{let{id:t,content:n,type:r="text",properties:a=""}=e;return{headers:{"content-type":i.bT[r],"X-Properties":a?btoa(unescape(encodeURIComponent(JSON.stringify(a)))):""},url:`user/${t}/send`,method:"POST",body:"file"==r?JSON.stringify(n):n}},async onQueryStarted(e,t){await u.s.call(this,e,t,"user")}})})}),{useUpdateContactMutation:d,useUpdateMuteSettingMutation:f,useLazyDeleteContactQuery:p,useUpdateInfoMutation:h,useUpdateAvatarMutation:g,useGetContactsQuery:m,useLazyGetContactsQuery:_,useSendMsgMutation:b,useRegisterMutation:v}=c},3609:(e,t,n)=>{"use strict";n.d(t,{s:()=>u});var r=n(6140),i=n(5048),a=n(5254),o=n(7642),s=n(860),l=n(658);const u=async function(e,t){var n;let{ignoreLocal:u=!1,id:c,content:d,type:f="text",from_uid:p,reply_mid:h=null,properties:g={local_id:(new Date).getTime()}}=e,{dispatch:m,queryFulfilled:_}=t,b=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"channel";if("archive"==f)return;const v=null===(n=g.content_type)||void 0===n?void 0:n.startsWith("image"),y=g.local_id||(new Date).getTime(),F={content:v?d.path:d,content_type:a.bT[f],created_at:y,properties:g,from_uid:p,reply_mid:h,sending:!0},E="channel"==b?o.p_:s.ZK,w="channel"==b?o.nF:s.Fs,k="channel"==b?o.Nr:s.ND;u||(0,i.dC)((()=>{m((0,l.Hz)({mid:y,...F})),m(E({id:c,mid:y}))}));try{const{data:e}=await _;(0,i.dC)((()=>{m((0,l.Hz)({mid:e,...F})),m(k({id:c,localMid:y,serverMid:e})),m((0,l.Gd)(y))}))}catch{r.ZP.error("Send Message Failed"),m(w({id:c,mid:y})),m((0,l.Gd)(y))}}},8198:(e,t,n)=>{"use strict";n.d(t,{A3:()=>l,ZP:()=>f,fs:()=>c,jM:()=>d,sQ:()=>u});var r=n(5273),i=n(5254);const a={uid:null,token:localStorage.getItem(i.JE),expireTime:localStorage.getItem(i.Wv)||(new Date).getTime(),refreshToken:localStorage.getItem(i.Ie)},o={uid:null,token:null,expireTime:(new Date).getTime(),refreshToken:null},s=(0,r.oM)({name:"authData",initialState:a,reducers:{setAuthData(e,t){const{user:{uid:n},token:r,refresh_token:a,expired_in:o=0}=t.payload;e.uid=n,e.token=r,e.refreshToken=a;const s=(new Date).getTime()+1e3*Number(o);e.expireTime=s,localStorage.setItem(i.Wv,s),localStorage.setItem(i.JE,r),localStorage.setItem(i.Ie,a),localStorage.setItem(i.kK,n)},resetAuthData:()=>(localStorage.removeItem(i.Wv),localStorage.removeItem(i.JE),localStorage.removeItem(i.Ie),localStorage.removeItem(i.kK),localStorage.removeItem(i.R1),o),setUid(e,t){const n=t.payload;e.uid=n},updateToken(e,t){const{token:n,refresh_token:r,expired_in:a}=t.payload;e.token=n;const o=(new Date).getTime()+1e3*Number(a);e.expireTime=o,e.refreshToken=r,localStorage.setItem(i.Wv,o),localStorage.setItem(i.JE,n),localStorage.setItem(i.Ie,r)}}}),{setAuthData:l,resetAuthData:u,setUid:c,updateToken:d}=s.actions,f=s.reducer},7271:(e,t,n)=>{"use strict";n.d(t,{T9:()=>l,ZP:()=>f,_D:()=>d,g5:()=>u,ii:()=>c});var r=n(5273),i=n(5614),a=n(5254);const o={ids:[],byId:{}},s=(0,r.oM)({name:"contacts",initialState:o,reducers:{resetContacts:()=>o,fullfillContacts(e,t){const n=t.payload||[];e.ids=n.map((e=>{let{uid:t}=e;return t})),e.byId=Object.fromEntries(n.map((e=>{const{uid:t}=e;return[t,e]})))},removeContact(e,t){const n=t.payload;e.ids=e.ids.filter((e=>e!=n)),delete e.byId[n]},updateUsersByLogs(e,t){t.payload.forEach((t=>{let{action:n,uid:r,...o}=t;switch(n){case"update":{const t=(0,i.lg)(o);e.byId[r]&&Object.keys(t).forEach((n=>{e.byId[r][n]=t[n],"avatar_updated_at"==n&&(e.byId[r].avatar=`${a.ZP}/resource/avatar?uid=${r}&t=${t[n]}`)}))}break;case"create":e.byId[r]={uid:r,...o};-1==e.ids.findIndex((e=>e==r))&&e.ids.push(r);break;case"delete":{const t=e.ids.findIndex((e=>e==r));t>-1&&(e.ids.splice(t,1),delete e.byId[r])}}}))},updateUsersStatus(e,t){t.payload.forEach((t=>{const{uid:n,online:r=!1}=t;e.byId[n]&&(e.byId[n].online=r)}))}}}),{resetContacts:l,fullfillContacts:u,updateUsersByLogs:c,updateUsersStatus:d}=s.actions,f=s.reducer},2002:(e,t,n)=>{"use strict";n.d(t,{$F:()=>o,GV:()=>s,PN:()=>l,RT:()=>d,TP:()=>c,Uw:()=>f,ZP:()=>p,uM:()=>u});var r=n(5273);const i={usersVersion:0,afterMid:0,readUsers:{},readChannels:{},muteUsers:{},muteChannels:{}},a=(0,r.oM)({name:"footprint",initialState:i,reducers:{resetFootprint:()=>i,fullfillFootprint(e,t){const{usersVersion:n=0,afterMid:r=0,readUsers:i={},readChannels:a={},muteUsers:o={},muteChannels:s={}}=t.payload;return{usersVersion:n,afterMid:r,readUsers:i,readChannels:a,muteUsers:o,muteChannels:s}},updateUsersVersion(e,t){const n=t.payload;e.usersVersion=n},updateAfterMid(e,t){const n=t.payload;e.afterMid=n},updateMute(e,t){const n=t.payload||{};Object.keys(n).forEach((t=>{switch(t){case"remove_users":n.remove_users.forEach((t=>{delete e.muteUsers[t]}));break;case"remove_groups":n.remove_groups.forEach((t=>{delete e.muteChannels[t]}));break;case"add_users":n.add_users.forEach((t=>{let{uid:n,expired_in:r=null}=t;e.muteUsers[n]={expired_in:r}}));break;case"add_groups":n.add_groups.forEach((t=>{let{gid:n,expired_in:r=null}=t;e.muteChannels[n]={expired_in:r}}))}}))},updateReadUsers(e,t){const n=t.payload||[];0!=n.length&&n.forEach((t=>{let{uid:n,mid:r}=t;e.readUsers[n]=r}))},updateReadChannels(e,t){const n=t.payload||[];0!=n.length&&n.forEach((t=>{let{gid:n,mid:r}=t;e.readChannels[n]=r}))}}}),{resetFootprint:o,fullfillFootprint:s,updateAfterMid:l,updateUsersVersion:u,updateReadChannels:c,updateReadUsers:d,updateMute:f}=a.actions,p=a.reducer},7642:(e,t,n)=>{"use strict";n.d(t,{Ie:()=>l,Nr:()=>d,XK:()=>s,YZ:()=>o,ZP:()=>f,nF:()=>c,p_:()=>u});var r=n(5273);const i={},a=(0,r.oM)({name:"channelMessage",initialState:i,reducers:{resetChannelMsg:()=>i,fullfillChannelMsg:(e,t)=>t.payload,addChannelMsg(e,t){const{id:n,mid:r,local_id:i=null}=t.payload;if(e[n]){const t=e[n].findIndex((e=>e==r))>-1,a=e[n].findIndex((e=>e==i))>-1;if(t||a)return;e[n].push(+r)}else e[n]=[+r]},removeChannelMsg(e,t){const{id:n,mid:r}=t.payload;if(e[n]){const t=e[n].findIndex((e=>e==r));t>-1&&e[n].splice(t,1)}},replaceChannelMsg(e,t){const{id:n,localMid:r,serverMid:i}=t.payload;if(e[n]){const t=e[n].findIndex((e=>e==r));t>-1&&i&&e[n].splice(t,1,i)}},removeChannelSession(e,t){(Array.isArray(t.payload)?t.payload:[t.payload]).forEach((t=>{delete e[t]}))}}}),{removeChannelSession:o,resetChannelMsg:s,fullfillChannelMsg:l,addChannelMsg:u,removeChannelMsg:c,replaceChannelMsg:d}=a.actions,f=a.reducer},658:(e,t,n)=>{"use strict";n.d(t,{Gd:()=>p,Hz:()=>f,MQ:()=>h,TB:()=>l,XS:()=>g,ZP:()=>m,Zl:()=>u,o6:()=>d});var r=n(5273),i=n(5254),a=n(5614);const o={replying:{}},s=(0,r.oM)({name:"message",initialState:o,reducers:{resetMessage:()=>o,fullfillMessage:(e,t)=>Object.assign({...o},t.payload),updateMessage(e,t){const{mid:n,...r}=t.payload;e[n]={...e[n],...r}},addMessage(e,t){const n=t.payload,{mid:r,sending:o,content_type:s,content:l,properties:u={}}=n;if(o&&e[r])return;const c=s==i.bT.file;if(!o&&c){n.file_path=l,n.content=`${i.ZP}/resource/file?file_path=${encodeURIComponent(n.file_path)}`,n.download=`${i.ZP}/resource/file?file_path=${encodeURIComponent(n.file_path)}&download=true`;const e=null!==u&&void 0!==u?u:{};(0,a.Or)(e.content_type,e.size)&&(n.thumbnail=`${i.ZP}/resource/file?file_path=${encodeURIComponent(n.file_path)}&thumbnail=true`)}e[r]=n},removeMessage(e,t){(Array.isArray(t.payload)?t.payload:[t.payload]).forEach((t=>{delete e[t]}))},addReplyingMessage(e,t){const{key:n,mid:r}=t.payload;e.replying[n]=r},removeReplyingMessage(e,t){const n=t.payload;e.replying[n]&&delete e.replying[n]}}}),{resetMessage:l,fullfillMessage:u,setMessage:c,updateMessage:d,addMessage:f,removeMessage:p,addReplyingMessage:h,removeReplyingMessage:g}=s.actions,m=s.reducer},860:(e,t,n)=>{"use strict";n.d(t,{Fs:()=>c,ND:()=>d,Qc:()=>l,So:()=>o,ZK:()=>u,ZP:()=>f,af:()=>s});var r=n(5273);const i={ids:[],byId:{}},a=(0,r.oM)({name:"userMessage",initialState:i,reducers:{resetUserMsg:()=>i,fullfillUserMsg(e,t){e.ids=Object.keys(t.payload),e.byId=t.payload},addUserMsg(e,t){const{id:n,mid:r,local_id:i}=t.payload;if(e.byId[n]){const t=e.byId[n].findIndex((e=>e==r))>-1,a=e.byId[n].findIndex((e=>e==i))>-1;if(t||a)return;e.byId[n].push(+r),-1==e.ids.findIndex((e=>e==n))&&e.ids.push(+n)}else e.byId[n]=[+r],e.ids.push(+n)},removeUserMsg(e,t){const{id:n,mid:r}=t.payload;if(e.byId[n]){const t=e.byId[n].findIndex((e=>e==r));t>-1&&e.byId[n].splice(t,1)}},replaceUserMsg(e,t){const{id:n,localMid:r,serverMid:i}=t.payload;if(e[n]){const t=e[n].findIndex((e=>e==r));t>-1&&i&&e[n].splice(t,1,i)}},removeUserSession(e,t){const n=Array.isArray(t.payload)?t.payload:[t.payload];e.ids=e.ids.filter((e=>-1==n.findIndex((t=>t==e))))}}}),{removeUserSession:o,resetUserMsg:s,fullfillUserMsg:l,addUserMsg:u,removeUserMsg:c,replaceUserMsg:d}=a.actions,f=a.reducer},4952:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(2791),i=n(5614),a=n(184);function o(e){let{url:t="",name:n="unkonw name",type:o="user",...s}=e;const[l,u]=(0,r.useState)("");return(0,r.useEffect)((()=>{if(t)u(t);else{const e=(0,i.eD)({initials:(0,i.Qm)(n),background:"channel"==o?"#EAECF0":void 0,foreground:"channel"==o?"#475467":void 0});u(e)}}),[t,n]),l?(0,a.jsx)("img",{src:l,onError:e=>{const t=(0,i.eD)({initials:(0,i.Qm)(n),background:"channel"==o?"#EAECF0":void 0,foreground:"channel"==o?"#475467":void 0});u(t)},...s}):null}},7764:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(2791),i=n(6031),a=n(4952);const o=n.p+"static/media/upload.image.9f8c7fc90042d2ff4eb7.svg";var s=n(184);const l=i.ZP.div`
  width: 96px;
  height: 96px;
  position: relative;
  cursor: pointer;
  .avatar {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
    /* border: 1px solid #eee; */
    img {
      width: 100%;
      height: 100%;
    }
    input[type="file"] {
      cursor: pointer;
      display: block;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .tip {
      white-space: nowrap;
      padding: 4px;
      display: none;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      font-weight: bold;
      font-size: 12px;
      line-height: 18px;
    }
    &:hover .tip {
      display: flex;
    }
  }
  .icon {
    width: 28px;
    height: 28px;
    position: absolute;
    top: 0;
    right: 0;
  }
`;function u(e){let{url:t="",name:n="",type:i="user",uploadImage:u,disabled:c=!1}=e;const[d,f]=(0,r.useState)(!1);return(0,s.jsxs)(l,{children:[(0,s.jsxs)("div",{className:"avatar",children:[(0,s.jsx)(a.Z,{type:i,url:t,name:n}),!c&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"tip",children:d?"Uploading":"Change Avatar"}),(0,s.jsx)("input",{multiple:!1,onChange:async e=>{if(d)return;const[t]=e.target.files;f(!0),await u(t),f(!1)},type:"file",accept:"image/*",name:"avatar",id:"avatar"})]})]}),!c&&(0,s.jsx)("img",{src:o,alt:"icon",className:"icon"})]})}},5114:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(2791),i=n(4164);function a(e){let{id:t="root-modal",mask:n=!0,children:a}=e;const[o,s]=(0,r.useState)(null);return(0,r.useEffect)((()=>{const e=document.getElementById(t);n&&e.classList.add("mask");const r=document.createElement("div");return r.classList.add("wrapper"),e.appendChild(r),s(r),()=>{e.removeChild(r)}}),[t,n]),o?(0,i.createPortal)(a,o):null}},9356:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n(6031).ZP.button`
  cursor: pointer;
  padding: 10px 14px;
  border: none;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: var(--br, 4px);
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  background-color: #22ccee;
  &.flex {
    width: 100%;
  }
  &:hover,
  &:active {
    background-color: #06aed4;
  }
  &:focus {
    background-color: #22ccee;
  }
  &:disabled {
    background-color: #d0d5dd;
  }
  &.small {
    padding: 8px 14px;
    font-size: 14px;
    line-height: 20px;
  }
  &.mini {
    padding: 4px 10px;
    font-size: 12px;
    line-height: 18px;
  }
  &.danger {
    border: none;
    background-color: #ef4444;
    color: #fff;
    &:disabled {
      background-color: #fecdca;
    }
  }
  &.ghost {
    border: 1px solid #1fe1f9;
    background: none;
    color: #1fe1f9;
  }
  &.border_less {
    box-shadow: none;
    border: none;
  }
  &.cancel {
    border: 1px solid #e5e7eb;
    background: none;
    color: #374151;
  }
`},2216:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(2791),i=n(9983);function a(e){return(0,i.w_)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",clipRule:"evenodd"}},{tag:"path",attr:{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"}}]})(e)}function o(e){return(0,i.w_)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}},{tag:"path",attr:{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"}}]})(e)}var s=n(6031),l=n(184);const u=s.ZP.div`
  width: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
  .prefix {
    padding: 8px 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #9ca3af;
    background: #f3f4f6;
    border-right: 1px solid #e5e7eb;
  }
  .view {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`,c=s.ZP.input`
  width: 100%;
  background: #ffffff;

  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #333;
  padding: 8px;
  outline: none;
  &:not(.inner) {
    border-radius: 4px;
    border: 1px solid #e5e7eb;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
  }
  &.large {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    padding: 11px 8px;
  }
  &.none {
    outline: none;
    border: none;
    background: none;
    box-shadow: none;
  }
  &:disabled {
    color: #78787c;
    background-color: #f9fafb;
  }
  &::placeholder {
    color: #d1d5db;
  }
  &[type="password"] {
    padding-right: 30px;
  }
`;function d(e){let{type:t="text",prefix:n="",className:i,...s}=e;const[d,f]=(0,r.useState)(t);return"password"==t?(0,l.jsxs)(u,{className:i,children:[(0,l.jsx)(c,{type:d,className:`inner ${i}`,...s}),(0,l.jsx)("div",{className:"view",onClick:()=>{f((e=>"password"==e?"text":"password"))},children:"password"==d?(0,l.jsx)(a,{color:"#78787c"}):(0,l.jsx)(o,{color:"#78787c"})})]}):n?(0,l.jsxs)(u,{className:i,children:[(0,l.jsx)("span",{className:"prefix",children:n}),(0,l.jsx)(c,{className:`inner ${i}`,type:d,...s})]}):(0,l.jsx)(c,{type:d,className:i,...s})}},3929:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(6031),i=n(184);const a=r.ZP.div`
  padding: 32px;
  filter: drop-shadow(0px 25px 50px rgba(31, 41, 55, 0.25));
  border-radius: 8px;
  background-color: #fff;
  min-width: 440px;
  &.compact {
    padding: 16px;
    min-width: 406px;
    .title,
    .desc {
      text-align: left;
    }
  }
  .title {
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    color: #374151;
    margin-bottom: 16px;
  }
  .desc {
    text-align: center;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #6b7280;
    margin-bottom: 8px;
  }
  .btns {
    padding-top: 16px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    align-items: center;
  }
`;function o(e){let{title:t="",description:n="",buttons:r=null,children:o,...s}=e;return(0,i.jsxs)(a,{...s,children:[t&&(0,i.jsx)("h3",{className:"title",children:t}),n&&(0,i.jsx)("p",{className:"desc",children:n}),o,r&&(0,i.jsx)("div",{className:"btns",children:r})]})}},5614:(e,t,n)=>{"use strict";n.d(t,{Ad:()=>_,CW:()=>g,Hr:()=>F,LP:()=>y,Or:()=>f,Qm:()=>b,Z1:()=>p,eD:()=>v,lg:()=>h,td:()=>m});var r=n(5254),i=n(5740),a=n(9366),o=n(3519),s=n(2482),l=n(1880),u=n(6840),c=n(7703),d=n(184);const f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.startsWith("image")&&t<=r.f0},p=(e,t)=>Object.entries(null!==e&&void 0!==e?e:{}).sort().toString()===Object.entries(null!==t&&void 0!==t?t:{}).sort().toString(),h=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["log_id"];const n={};return Object.keys(e).forEach((r=>{t.includes(r)||null===e[r]||(n[r]=e[r])})),n};function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:480;if(!e)return{width:0,height:0};const{width:n,height:r}=e;if(n==r){const e=t>n?n:t;return{width:e,height:e}}const i=!(n>r);let a=0,o=0;return i?(o=r>=t?t:r,a=n/r*o):(a=n>=t?t:n,o=r/n*a),{width:a,height:o}}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";const n=1e3,r=t<0?0:t,i=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],a=Math.floor(Math.log(e)/Math.log(n));return parseFloat((e/Math.pow(n,a)).toFixed(r))+" "+i[a]}const _=e=>{const t={width:0,height:0};return e?new Promise((n=>{const r=new Image;r.src=e,r.onload=()=>{t.width=r.width,t.height=r.height,n(t)},r.onerror=()=>{n(t)}})):t},b=e=>e.split(" ").filter((e=>!!e)).map((e=>e[0])).join("").toUpperCase(),v=e=>{let{initials:t="UK",initial_size:n=0,size:r=200,foreground:i="#fff",background:a="#4c99e9",weight:o=400,fontFamily:s="'Lato', 'Lato-Regular', 'Helvetica Neue'"}=e;const l=document.createElement("canvas"),u=r,c=r,d=Math.max(window.devicePixelRatio,1);l.width=u*d,l.height=c*d,l.style.width=`${u}px`,l.style.height=`${c}px`;const f=l.getContext("2d");return f.scale(d,d),f.rect(0,0,l.width,l.height),f.fillStyle=a,f.fill(),f.font=`${o} ${((n||c)-(2==t.length?40:0))/2}px ${s}`,f.textAlign="center",f.textBaseline="middle",f.fillStyle=i,f.fillText(t,u/2,c/2),l.toDataURL("image/png")};const y=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=null;const r={image:/^image/gi,audio:/^audio/gi,video:/^video/gi,code:/(json|javascript|java|rb|c|php|xml|css|html)$/gi,doc:/^text/gi,pdf:/\/pdf$/gi},f=t.split("."),p=e||f[f.length-1];switch(!0){case r.image.test(p):n=(0,d.jsx)(c.Z,{className:"icon"});break;case r.pdf.test(p):n=(0,d.jsx)(i.Z,{className:"icon"});break;case r.code.test(p):n=(0,d.jsx)(u.Z,{className:"icon"});break;case r.doc.test(p):n=(0,d.jsx)(l.Z,{className:"icon"});break;case r.audio.test(p):n=(0,d.jsx)(a.Z,{className:"icon"});break;case r.video.test(p):n=(0,d.jsx)(o.Z,{className:"icon"});break;default:n=(0,d.jsx)(s.Z,{className:"icon"})}return n},F=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!e||!t)return[];const{messages:i,users:a}=e,o=(e,t)=>{let{content:n,content_type:i,file_id:a,thumbnail_id:o,filePath:s,avatar:l}=t;const u=e?`${r.ZP}/favorite/attachment/${e}/${s}/`:`${r.ZP}/resource/archive/attachment?file_path=${s}&attachment_id=`;return{transformedContent:i==r.bT.file?`${u}${a}`:n,thumbnail:i==r.bT.file?`${u}${o}`:"",download:i==r.bT.file?`${u}${a}${e?"?":"&"}download=true`:"",avatarUrl:null!==l?`${u}${l}`:""}};return i.map((e=>{let{source:r,mid:i,content:s,file_id:l,thumbnail_id:u,content_type:c,properties:d,from_user:f}=e,p={...a[f]||{}};const{transformedContent:h,thumbnail:g,download:m,avatarUrl:_}=o(n,{content:s,content_type:c,filePath:t,file_id:l,thumbnail_id:u,avatar:p.avatar});return p.avatar=_,{source:r,from_mid:i,user:p,content:h,content_type:c,properties:d,download:m,thumbnail:g}}))}},4916:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MyAccount});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2791),styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(6031),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5048),react_hot_toast__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(6140),_app_services_contact__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(251),_common_component_AvatarUploader__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7764),_ProfileBasicEditModal__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1098),_UpdatePasswordModal__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8337),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(184);const StyledWrapper=styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  .card {
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 512px;
    background: #f3f4f6;
    border-radius: 20px;
    .name {
      margin-top: 8px;
      margin-bottom: 64px;
      font-weight: bold;
      font-size: 18px;
      line-height: 28px;
      color: #27272a;
      .uid {
        font-weight: normal;
        color: #52525b;
      }
    }
    .row {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
      .info {
        display: flex;
        flex-direction: column;
        .label {
          font-weight: 600;
          font-size: 12px;
          line-height: 20px;
          text-transform: uppercase;
          color: #52525b;
        }
        .txt {
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          color: #52525b;
          .gray {
            color: #78787c;
          }
        }
      }
      .btn {
        background: #1fe1f9;
        border: 1px solid #1fe1f9;
      }
    }
  }
  .danger {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .head {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      color: #374151;
    }
    .desc {
      font-weight: normal;
      font-size: 12px;
      line-height: 18px;
      color: #616161;
      margin-bottom: 16px;
    }
    .btn {
      background: #ef4444;
      border: 1px solid #ef4444;
    }
  }
  .btn {
    color: #fff;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding: 8px 14px;
    background: #1fe1f9;
    border: 1px solid #1fe1f9;
    box-sizing: border-box;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
  }
`,EditModalInfo={name:{label:"Username",title:"Change your username",intro:"Enter a new username."},email:{label:"Email",title:"Change your email",intro:"Enter a new email."}};function MyAccount(){const[passwordModal,setPasswordModal]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[editModal,setEditModal]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[uploadAvatar,{isSuccess:uploadSuccess}]=(0,_app_services_contact__WEBPACK_IMPORTED_MODULE_2__.C0)(),loginUser=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.v9)((e=>e.contacts.byId[e.authData.uid]));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{uploadSuccess&&react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.ZP.success("update avatar successfully!")}),[uploadSuccess]);const handleBasicEdit=e=>{const{edit:t}=e.target.dataset;setEditModal(t)},closeBasicEditModal=()=>{setEditModal(null)},togglePasswordModal=()=>{setPasswordModal((e=>!e))};if(!loginUser)return null;const{uid:uid,avatar:avatar,name:name,email:email}=loginUser;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(StyledWrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"card",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_component_AvatarUploader__WEBPACK_IMPORTED_MODULE_3__.Z,{url:avatar,name:name,uploadImage:uploadAvatar}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"name",children:[name," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span",{className:"uid",children:["#",uid]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"info",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"label",children:"username"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span",{className:"txt",children:[name," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span",{className:"gray",children:[" #",uid]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{"data-edit":"name",onClick:handleBasicEdit,className:"btn",children:"Edit"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"info",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"label",children:"email"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"txt",children:email})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{"data-edit":"email",onClick:handleBasicEdit,className:"btn",children:"Edit"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"info",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"label",children:"password"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:"txt",children:"*********"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:togglePasswordModal,className:"btn",children:"Edit"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"danger",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4",{className:"head",children:"Account Removal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"desc",children:"Disabling your account means you can recover it at any time after taking this action."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{className:"btn",children:"Delete Account"})]})]}),editModal&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ProfileBasicEditModal__WEBPACK_IMPORTED_MODULE_4__.Z,{valueKey:editModal,...EditModalInfo[editModal],value:eval(editModal),closeModal:closeBasicEditModal}),passwordModal&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_UpdatePasswordModal__WEBPACK_IMPORTED_MODULE_5__.Z,{closeModal:togglePasswordModal})]})}},1098:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(2791),i=n(6031),a=n(2216),o=n(251),s=n(3929),l=n(9356),u=n(5114),c=n(6140),d=n(184);const f=(0,i.ZP)(s.Z)`
  .input {
    margin: 48px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    label {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #6b7280;
    }
  }
`;function p(e){let{label:t="Username",valueKey:n="name",value:i="",title:s="Change your username",intro:p="Enter a new username and your existing password.",closeModal:h}=e;const[g,m]=(0,r.useState)(i),[_,{isLoading:b,isSuccess:v}]=(0,o.g$)();return(0,r.useEffect)((()=>{v&&(c.ZP.success("update user info successfully"),h())}),[v]),(0,d.jsx)(u.Z,{id:"modal-modal",children:(0,d.jsx)(f,{title:s,description:p,buttons:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.Z,{className:"cancel",onClick:h,children:"Cancel"}),(0,d.jsx)(l.Z,{onClick:()=>{_({[n]:g})},children:b?"Updating":"Done"})]}),children:(0,d.jsxs)("div",{className:"input",children:[(0,d.jsx)("label",{htmlFor:n,children:t}),(0,d.jsx)(a.Z,{name:n,value:g,onChange:e=>{m(e.target.value)}})]})})})}},8337:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(2791),i=n(6031),a=n(2216),o=n(5143),s=n(3929),l=n(9356),u=n(5114),c=n(6140),d=n(184);const f=(0,i.ZP)(s.Z)`
  .input {
    margin: 16px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    label {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #6b7280;
    }
  }
[class^='toastui-editor-']{
  .toastui-editor-md-container{
      border-bottom: none;
      .toastui-editor-md-preview{
padding-right: 0;
padding-left: 8px;
      }
    .toastui-editor-md-splitter{
      background-color:#D0D5DD ;
    }
    .ProseMirror{
      height: 100%;
    }
  }
    *{
        margin: 0 ;
        padding: 0;
    }
    .ProseMirror,p,.toastui-editor.md-mode {
        margin:0 ;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #475467;
    margin-bottom: 16px;
    word-break: break-all;
  }
  a{
      background-color: transparent;
  }
  pre{
    width: 100%;
    width: -webkit-fill-available;
  }
  blockquote {
      border-left:none;
    display: flex;
    margin-top:0;
    margin-bottom: 10px;
    padding: 0;
    padding: 16px;
    color: #98a2b3;
    opacity: 0.8;
    box-shadow: inset 2px 0px 0px #a8b0bd;
    display: flex;
    align-items: center;
    > p{
      padding-right: 10px ;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 0;
    }
    > blockquote{
      padding: 14px;
    }
  }
  img{
    cursor: pointer;
      max-width:300px;
      display: block;
  }
  ul {
     white-space: nowrap;
      margin-top:0;
      margin-bottom:10px;
      /* display: flex;
      flex-direction:column;
      margin-left: 20px; */
      > li:before{
        margin-top: 8px;
        margin-left: -14px;
        background-color: #475467;
      }
    /* list-style-type: disc; */

  }
  ul,
  ol {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #475467;
    /* list-style-position: inside; */
  }
  h1,
  h2,
  h3,[class*='heading']{
    margin-block-start: 0;
    margin-block-end: 0;
      padding: 0;
      margin: 0;
      border-bottom: none;
      font-weight: 700;
      color: #475467;
  }
  h1,[class*='heading1'] {
    margin-top: 0 !important;
    font-size: 24px;
    line-height: 32px;
  }
  h2,[class*='heading2'] {
    font-size: 20px;
    line-height: 30px;
  }
  h3,[class*='heading3'] {
    font-size: 16px;
    line-height: 24px;
  }
}
`;function Cr(){return Cr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cr.apply(this,arguments)}var Sr;!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(Sr||(Sr={}));var Dr=function(e){return e};var Tr="beforeunload",Ar="popstate";function Or(e){void 0===e&&(e={});var t=e.window,n=void 0===t?document.defaultView:t,r=n.history;function i(){var e=Mr(n.location.hash.substr(1)),t=e.pathname,i=void 0===t?"/":t,a=e.search,o=void 0===a?"":a,s=e.hash,l=void 0===s?"":s,u=r.state||{};return[u.idx,Dr({pathname:i,search:o,hash:l,state:u.usr||null,key:u.key||"default"})]}var a=null;function o(){if(a)f.call(a),a=null;else{var e=Sr.Pop,t=i(),n=t[0],r=t[1];if(f.length){if(null!=n){var o=u-n;o&&(a={action:e,location:r,retry:function(){b(-1*o)}},b(o))}}else _(e)}}n.addEventListener(Ar,o),n.addEventListener("hashchange",(function(){Pr(i()[1])!==Pr(c)&&o()}));var s=Sr.Pop,l=i(),u=l[0],c=l[1],d=Ir(),f=Ir();function p(e){return function(){var e=document.querySelector("base"),t="";if(e&&e.getAttribute("href")){var r=n.location.href,i=r.indexOf("#");t=-1===i?r:r.slice(0,i)}return t}()+"#"+("string"===typeof e?e:Pr(e))}function h(e,t){return void 0===t&&(t=null),Dr(Cr({pathname:c.pathname,hash:"",search:""},"string"===typeof e?Mr(e):e,{state:t,key:Rr()}))}function g(e,t){return[{usr:e.state,key:e.key,idx:t},p(e)]}function m(e,t,n){return!f.length||(f.call({action:e,location:t,retry:n}),!1)}function _(e){s=e;var t=i();u=t[0],c=t[1],d.call({action:s,location:c})}function b(e){r.go(e)}null==u&&(u=0,r.replaceState(Cr({},r.state,{idx:u}),""));var v={get action(){return s},get location(){return c},createHref:p,push:function e(t,i){var a=Sr.Push,o=h(t,i);if(m(a,o,(function(){e(t,i)}))){var s=g(o,u+1),l=s[0],c=s[1];try{r.pushState(l,"",c)}catch(d){n.location.assign(c)}_(a)}},replace:function e(t,n){var i=Sr.Replace,a=h(t,n);if(m(i,a,(function(){e(t,n)}))){var o=g(a,u),s=o[0],l=o[1];r.replaceState(s,"",l),_(i)}},go:b,back:function(){b(-1)},forward:function(){b(1)},listen:function(e){return d.push(e)},block:function(e){var t=f.push(e);return 1===f.length&&n.addEventListener(Tr,Nr),function(){t(),f.length||n.removeEventListener(Tr,Nr)}}};return v}function Nr(e){e.preventDefault(),e.returnValue=""}function Ir(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function Rr(){return Math.random().toString(36).substr(2,8)}function Pr(e){var t=e.pathname,n=void 0===t?"/":t,r=e.search,i=void 0===r?"":r,a=e.hash,o=void 0===a?"":a;return i&&"?"!==i&&(n+="?"===i.charAt(0)?i:"?"+i),o&&"#"!==o&&(n+="#"===o.charAt(0)?o:"#"+o),n}function Mr(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}const Lr=(0,Ie.createContext)(null);const Br=(0,Ie.createContext)(null);const jr=(0,Ie.createContext)({outlet:null,matches:[]});function qr(e,t){if(!e)throw new Error(t)}function Ur(e,t,n){void 0===n&&(n="/");let r=Zr(("string"===typeof t?Mr(t):t).pathname||"/",n);if(null==r)return null;let i=Hr(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let a=null;for(let o=0;null==a&&o<i.length;++o)a=Vr(i[o],r);return a}function Hr(e,t,n,r){return void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r=""),e.forEach(((e,i)=>{let a={relativePath:e.path||"",caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};a.relativePath.startsWith("/")&&(a.relativePath.startsWith(r)||qr(!1),a.relativePath=a.relativePath.slice(r.length));let o=Yr([r,a.relativePath]),s=n.concat(a);e.children&&e.children.length>0&&(!0===e.index&&qr(!1),Hr(e.children,t,s,o)),(null!=e.path||e.index)&&t.push({path:o,score:Gr(o,e.index),routesMeta:s})})),t}const zr=/^:\w+$/,$r=e=>"*"===e;function Gr(e,t){let n=e.split("/"),r=n.length;return n.some($r)&&(r+=-2),t&&(r+=2),n.filter((e=>!$r(e))).reduce(((e,t)=>e+(zr.test(t)?3:""===t?1:10)),r)}function Vr(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let e=n[o],s=o===n.length-1,l="/"===i?t:t.slice(i.length)||"/",u=Wr({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},l);if(!u)return null;Object.assign(r,u.params);let c=e.route;a.push({params:r,pathname:Yr([i,u.pathname]),pathnameBase:Xr(Yr([i,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(i=Yr([i,u.pathnameBase]))}return a}function Wr(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,((e,t)=>(r.push(t),"([^\\/]+)")));e.endsWith("*")?(r.push("*"),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";return[new RegExp(i,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1),l=r.reduce(((e,t,n)=>{if("*"===t){let e=s[n]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return e}}(s[n]||""),e}),{});return{params:l,pathname:a,pathnameBase:o,pattern:e}}function Kr(e,t,n){let r,i="string"===typeof e?Mr(e):e,a=""===e||""===i.pathname?"/":i.pathname;if(null==a)r=n;else{let e=t.length-1;if(a.startsWith("..")){let t=a.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}r=e>=0?t[e]:"/"}let o=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"===typeof e?Mr(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:Qr(r),hash:Jr(i)}}(i,r);return a&&"/"!==a&&a.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function Zr(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&"/"!==n?null:e.slice(t.length)||"/"}const Yr=e=>e.join("/").replace(/\/\/+/g,"/"),Xr=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Qr=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Jr=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function ei(e){ti()||qr(!1);let{basename:t,navigator:n}=(0,Ie.useContext)(Lr),{hash:r,pathname:i,search:a}=si(e),o=i;if("/"!==t){let n=function(e){return""===e||""===e.pathname?"/":"string"===typeof e?Mr(e).pathname:e.pathname}(e),r=null!=n&&n.endsWith("/");o="/"===i?t+(r?"/":""):Yr([t,i])}return n.createHref({pathname:o,search:a,hash:r})}function ti(){return null!=(0,Ie.useContext)(Br)}function ni(){return ti()||qr(!1),(0,Ie.useContext)(Br).location}function ri(e){ti()||qr(!1);let{pathname:t}=ni();return(0,Ie.useMemo)((()=>Wr(e,t)),[t,e])}function ii(){ti()||qr(!1);let{basename:e,navigator:t}=(0,Ie.useContext)(Lr),{matches:n}=(0,Ie.useContext)(jr),{pathname:r}=ni(),i=JSON.stringify(n.map((e=>e.pathnameBase))),a=(0,Ie.useRef)(!1);return(0,Ie.useEffect)((()=>{a.current=!0})),(0,Ie.useCallback)((function(n,o){if(void 0===o&&(o={}),!a.current)return;if("number"===typeof n)return void t.go(n);let s=Kr(n,JSON.parse(i),r);"/"!==e&&(s.pathname=Yr([e,s.pathname])),(o.replace?t.replace:t.push)(s,o.state)}),[e,t,i,r])}const ai=(0,Ie.createContext)(null);function oi(){let{matches:e}=(0,Ie.useContext)(jr),t=e[e.length-1];return t?t.params:{}}function si(e){let{matches:t}=(0,Ie.useContext)(jr),{pathname:n}=ni(),r=JSON.stringify(t.map((e=>e.pathnameBase)));return(0,Ie.useMemo)((()=>Kr(e,JSON.parse(r),n)),[e,r,n])}function li(e,t){return void 0===t&&(t=[]),null==e?null:e.reduceRight(((n,r,i)=>(0,Ie.createElement)(jr.Provider,{children:void 0!==r.route.element?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,i+1))}})),null)}function ui(e){let{to:t,replace:n,state:r}=e;ti()||qr(!1);let i=ii();return(0,Ie.useEffect)((()=>{i(t,{replace:n,state:r})})),null}function ci(e){return function(e){let t=(0,Ie.useContext)(jr).outlet;return t?(0,Ie.createElement)(ai.Provider,{value:e},t):t}(e.context)}function di(e){qr(!1)}function fi(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Sr.Pop,navigator:a,static:o=!1}=e;ti()&&qr(!1);let s=Xr(t),l=(0,Ie.useMemo)((()=>({basename:s,navigator:a,static:o})),[s,a,o]);"string"===typeof r&&(r=Mr(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:p="default"}=r,h=(0,Ie.useMemo)((()=>{let e=Zr(u,s);return null==e?null:{pathname:e,search:c,hash:d,state:f,key:p}}),[s,u,c,d,f,p]);return null==h?null:(0,Ie.createElement)(Lr.Provider,{value:l},(0,Ie.createElement)(Br.Provider,{children:n,value:{location:h,navigationType:i}}))}function pi(e){let{children:t,location:n}=e;return function(e,t){ti()||qr(!1);let{matches:n}=(0,Ie.useContext)(jr),r=n[n.length-1],i=r?r.params:{},a=(r&&r.pathname,r?r.pathnameBase:"/");r&&r.route;let o,s=ni();if(t){var l;let e="string"===typeof t?Mr(t):t;"/"===a||(null==(l=e.pathname)?void 0:l.startsWith(a))||qr(!1),o=e}else o=s;let u=o.pathname||"/",c=Ur(e,{pathname:"/"===a?u:u.slice(a.length)||"/"});return li(c&&c.map((e=>Object.assign({},e,{params:Object.assign({},i,e.params),pathname:Yr([a,e.pathname]),pathnameBase:"/"===e.pathnameBase?a:Yr([a,e.pathnameBase])}))),n)}(hi(t),n)}function hi(e){let t=[];return Ie.Children.forEach(e,(e=>{if(!(0,Ie.isValidElement)(e))return;if(e.type===Ie.Fragment)return void t.push.apply(t,hi(e.props.children));e.type!==di&&qr(!1);let n={caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path};e.props.children&&(n.children=hi(e.props.children)),t.push(n)})),t}function gi(){return gi=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gi.apply(this,arguments)}function mi(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}const _i=["onClick","reloadDocument","replace","state","target","to"],bi=["aria-current","caseSensitive","className","end","style","to","children"];function vi(e){let{basename:t,children:n,window:r}=e,i=(0,Ie.useRef)();null==i.current&&(i.current=Or({window:r}));let a=i.current,[o,s]=(0,Ie.useState)({action:a.action,location:a.location});return(0,Ie.useLayoutEffect)((()=>a.listen(s)),[a]),(0,Ie.createElement)(fi,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a})}const yi=(0,Ie.forwardRef)((function(e,t){let{onClick:n,reloadDocument:r,replace:i=!1,state:a,target:o,to:s}=e,l=mi(e,_i),u=ei(s),c=function(e,t){let{target:n,replace:r,state:i}=void 0===t?{}:t,a=ii(),o=ni(),s=si(e);return(0,Ie.useCallback)((t=>{if(0===t.button&&(!n||"_self"===n)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)){t.preventDefault();let n=!!r||Pr(o)===Pr(s);a(e,{replace:n,state:i})}}),[o,a,s,r,i,n,e])}(s,{replace:i,state:a,target:o});return(0,Ie.createElement)("a",gi({},l,{href:u,onClick:function(e){n&&n(e),e.defaultPrevented||r||c(e)},ref:t,target:o}))}));const Fi=(0,Ie.forwardRef)((function(e,t){let{"aria-current":n="page",caseSensitive:r=!1,className:i="",end:a=!1,style:o,to:s,children:l}=e,u=mi(e,bi),c=ni(),d=si(s),f=c.pathname,p=d.pathname;r||(f=f.toLowerCase(),p=p.toLowerCase());let h,g=f===p||!a&&f.startsWith(p)&&"/"===f.charAt(p.length),m=g?n:void 0;h="function"===typeof i?i({isActive:g}):[i,g?"active":null].filter(Boolean).join(" ");let _="function"===typeof o?o({isActive:g}):o;return(0,Ie.createElement)(yi,gi({},u,{"aria-current":m,className:h,ref:t,style:_,to:s}),"function"===typeof l?l({isActive:g}):l)}));function Ei(e){let t=(0,Ie.useRef)(wi(e)),n=ni(),r=(0,Ie.useMemo)((()=>{let e=wi(n.search);for(let n of t.current.keys())e.has(n)||t.current.getAll(n).forEach((t=>{e.append(n,t)}));return e}),[n.search]),i=ii();return[r,(0,Ie.useCallback)(((e,t)=>{i("?"+wi(e),t)}),[i])]}function wi(e){return void 0===e&&(e=""),new URLSearchParams("string"===typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce(((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map((e=>[n,e])):[[n,r]])}),[]))}var ki=__webpack_require__(5048);const xi=i.ZP.div`
 display: flex;
`;function Ci(){return(0,c.jsx)(xi,{children:"404 page"})}const Si=i.ZP.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
 .form {
  padding: 36px 40px 32px 40px;
  /* border: 1px solid #eee; */
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  border-radius: 12px;
  .tips {
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-bottom: 24px;
   .logo {
    width: 56px;
    height: 56px;
    margin-bottom: 28px;
   }
   .title {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #101828;
    margin-bottom: 8px;
   }
  }
  .desc {
   font-weight: normal;
   font-size: 16px;
   line-height: 24px;
   color: #667085;
  }
  form {
   display: flex;
   flex-direction: column;
   gap: 20px;
   input {
    width: 360px;
    background: #ffffff;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    padding: 10px 14px;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #667085;
   }
  }
  .btn {
   display: inline-block;
   text-align: center;
   width: 100%;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   color: #ffffff;
   padding: 10px;
   background: #1fe1f9;
   border: 1px solid #1fe1f9;
   box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
   border-radius: 8px;
   &.google {
    color: #344054;
    border-color: #d0d5dd;
    background: none;
   }
  }
 }
`;var Di=__webpack_require__(5143),Ti=__webpack_require__(8198);function Ai(){const[e,{data:t,isSuccess:n,isError:i,error:a}]=(0,Di.YA)(),{token:o}=oi(),[s,l]=(0,Ie.useState)(!0),[u,d]=(0,Ie.useState)(null),f=(0,ki.I0)(),p=ii();return(0,Ie.useEffect)((()=>{setTimeout((()=>{o?e({key:o,type:"thirdparty"}):d("Token Not Found")}),1500)}),[o]),(0,Ie.useEffect)((()=>{i&&d(a)}),[i,a]),(0,Ie.useEffect)((()=>{n&&t&&(l(!1),r.ZP.success("Login Successfully"),f((0,Ti.A3)(t)),p("/"))}),[n,t]),(0,c.jsxs)(Si,{children:[s?"loading":"",u]})}var Oi=__webpack_require__(5254),Ni=__webpack_require__(9356);const Ii=(0,i.ZP)(Ni.Z)`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #344054;
  border: 1px solid #d0d5dd;
  background: none !important;
  .icon {
    width: 24px;
    height: 24px;
  }
`,Ri=i.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .form {
    padding: 36px 40px 32px 40px;
    /* border: 1px solid #eee; */
    box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
      0px 2px 4px -2px rgba(16, 24, 40, 0.06);
    border-radius: 12px;
    .tips {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 24px;
      .logo {
        width: 56px;
        height: 56px;
        margin-bottom: 28px;
        border-radius: 50%;
      }
      .title {
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        color: #101828;
        margin-bottom: 8px;
      }
    }
    .desc {
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #667085;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 360px;
    }
    .or {
      border: none;
      position: relative;
      height: 1px;
      background-color: #e4e7ec;
      margin: 26px 0;
      &:after {
        padding: 4px;
        background-color: #fff;
        content: "OR";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        font-size: 14px;
        line-height: 20px;
        color: #667085;
      }
    }
  }
`;var Pi=__webpack_require__(5524),Mi=__webpack_require__.n(Pi);function Li(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{l(r.next(e))}catch(t){a(t)}}function s(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}l((r=r.apply(e,t||[])).next())}))}function Bi(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(s){a=[6,s],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}var ji="INSTALLED",qi="NOT_INSTALLED",Ui="REGISTERED",Hi="REGISTERING",zi="RELOADING",$i={CHROME:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",FIREFOX:"https://addons.mozilla.org/firefox/addon/ether-metamask/",DEFAULT:"https://metamask.io"},Gi="REGISTRATION_IN_PROGRESS",Vi="FORWARDER_ID";const Wi=function(){function e(t){var n=void 0===t?{}:t,r=n.forwarderOrigin,i=void 0===r?"https://fwd.metamask.io":r,a=n.forwarderMode,o=void 0===a?e.FORWARDER_MODE.INJECT:a;this.forwarderOrigin=i,this.forwarderMode=o,this.state=e.isMetaMaskInstalled()?ji:qi;var s=e._detectBrowser();this.downloadUrl=s?$i[s]:$i.DEFAULT,this._onMessage=this._onMessage.bind(this),this._onMessageFromForwarder=this._onMessageFromForwarder.bind(this),this._openForwarder=this._openForwarder.bind(this),this._openDownloadPage=this._openDownloadPage.bind(this),this.startOnboarding=this.startOnboarding.bind(this),this.stopOnboarding=this.stopOnboarding.bind(this),window.addEventListener("message",this._onMessage),o===e.FORWARDER_MODE.INJECT&&"true"===sessionStorage.getItem(Gi)&&e._injectForwarder(this.forwarderOrigin)}return e.prototype._onMessage=function(e){if(e.origin===this.forwarderOrigin)return"metamask:reload"===e.data.type?this._onMessageFromForwarder(e):void 0},e.prototype._onMessageUnknownStateError=function(e){throw new Error("Unknown state: '"+e+"'")},e.prototype._onMessageFromForwarder=function(t){return Li(this,void 0,void 0,(function(){return Bi(this,(function(n){switch(n.label){case 0:switch(this.state){case zi:return[3,1];case qi:return[3,2];case ji:return[3,3];case Hi:return[3,5];case Ui:return[3,6]}return[3,7];case 1:return[3,8];case 2:return this.state=zi,location.reload(),[3,8];case 3:return this.state=Hi,[4,e._register()];case 4:return n.sent(),this.state=Ui,t.source.postMessage({type:"metamask:registrationCompleted"},t.origin),this.stopOnboarding(),[3,8];case 5:case 6:return[3,8];case 7:this._onMessageUnknownStateError(this.state),n.label=8;case 8:return[2]}}))}))},e.prototype.startOnboarding=function(){sessionStorage.setItem(Gi,"true"),this._openDownloadPage(),this._openForwarder()},e.prototype.stopOnboarding=function(){"true"===sessionStorage.getItem(Gi)&&(this.forwarderMode===e.FORWARDER_MODE.INJECT&&e._removeForwarder(),sessionStorage.setItem(Gi,"false"))},e.prototype._openForwarder=function(){this.forwarderMode===e.FORWARDER_MODE.OPEN_TAB?window.open(this.forwarderOrigin,"_blank"):e._injectForwarder(this.forwarderOrigin)},e.prototype._openDownloadPage=function(){window.open(this.downloadUrl,"_blank")},e.isMetaMaskInstalled=function(){return Boolean(window.ethereum&&window.ethereum.isMetaMask)},e._register=function(){return window.ethereum.request({method:"wallet_registerOnboarding"})},e._injectForwarder=function(e){var t=document.body,n=document.createElement("iframe");n.setAttribute("height","0"),n.setAttribute("width","0"),n.setAttribute("style","display: none;"),n.setAttribute("src",e),n.setAttribute("id",Vi),t.insertBefore(n,t.children[0])},e._removeForwarder=function(){var e;null===(e=document.getElementById(Vi))||void 0===e||e.remove()},e._detectBrowser=function(){var e=Mi().parse(window.navigator.userAgent);return"Firefox"===e.browser.name?"FIREFOX":["Chrome","Chromium"].includes(e.browser.name||"")?"CHROME":null},e.FORWARDER_MODE={INJECT:"INJECT",OPEN_TAB:"OPEN_TAB"},e}(),Ki=__webpack_require__.p+"static/media/metamask.f04d5fb63394197766d0.svg";function Zi(e){let{login:t}=e;const[n,r]=(0,Ie.useState)(!1),[i,a]=(0,Ie.useState)([]),[o]=(0,Di.sZ)(),s=(0,Ie.useRef)();(0,Ie.useEffect)((()=>{function e(e){a(e)}return s.current||(s.current=new Wi),Wi.isMetaMaskInstalled()&&ethereum.on("accountsChanged",e),()=>{Wi.isMetaMaskInstalled()&&ethereum.removeListener("accountsChanged",e)}}),[]),(0,Ie.useEffect)((()=>{if(Wi.isMetaMaskInstalled())if(i.length>0){const[e]=i;(async e=>{const{data:n,isSuccess:r}=await o(e);if(r){const r=await l(e,n);t({public_address:e,nonce:n,signature:r,type:"metamask"})}})(e),r(!0),s.current.stopOnboarding()}else r(!1)}),[i]);const l=async(e,t)=>await ethereum.request({method:"personal_sign",params:[t,e,"hello from rustchat"]});return(0,c.jsxs)(Ii,{disabled:n,onClick:async()=>{if(Wi.isMetaMaskInstalled()){r(!0);try{const e=await ethereum.request({method:"eth_requestAccounts"});a(e)}catch(e){ethereum.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}r(!1)}else s.current.startOnboarding()},children:[(0,c.jsx)("img",{className:"icon",src:Ki,alt:"meta mask icon"}),"Sign in with MetaMask"]})}const Yi=__webpack_require__.p+"static/media/solid.ef0c47f26e38670f4812.svg";function Xi(e){let{issuers:t}=e;const[n,{data:r,isLoading:i,isSuccess:a}]=(0,Di.CB)();return(0,Ie.useEffect)((()=>{if(a){const{url:e}=r;location.href=e}}),[r,a]),(0,c.jsxs)(Ii,{disabled:i,onClick:()=>{n({issuer:t[0],redirect_uri:`${location.origin}/#/login`})},children:[(0,c.jsx)("img",{src:Yi,className:"icon",alt:"solid icon"}),i?"Redirecting...":"Sign in with Solid"]})}var Qi=__webpack_require__(2216),Ji=__webpack_require__(929);const ea=__webpack_require__.p+"static/media/google.db7474a481e12799b961.svg";function ta(e){let{login:t,clientId:n}=e;const{signIn:r,loaded:i}=(0,Ji.useGoogleLogin)({onScriptLoadFailure:e=>{},clientId:n,onSuccess:e=>{let{tokenId:n,...r}=e;t({id_token:n,type:"google"})},onFailure:e=>{}});return(0,c.jsxs)(Ii,{disabled:!i,onClick:()=>{r()},children:[(0,c.jsx)("img",{className:"icon",src:ea,alt:"google icon"}),i?"Sign in with Google":"Initailizing"]})}const na=(0,i.ZP)(Ni.Z)`
  width: 100%;
  margin-bottom: 16px;
`;function ra(){const e=ii();return(0,c.jsx)(na,{onClick:()=>{e("/send_magic_link")},children:"Sign in with Magic Link"})}var ia=__webpack_require__(1465),aa=__webpack_require__(5273);const oa={name:"",description:"",logo:"",inviteLink:{link:"",expire:0}},sa=(0,aa.oM)({name:"server",initialState:oa,reducers:{resetServer:()=>oa,fullfillServer(e,t){const{inviteLink:n={link:"",expire:0},name:r="",description:i=""}=t.payload||{};return{name:r,description:i,inviteLink:n}},updateInfo(e,t){const n=t.payload||{};Object.keys(n).forEach((t=>{e[t]=n[t]}))}}}),{updateInfo:la,resetServer:ua,fullfillServer:ca}=sa.actions,da=sa.reducer;var fa=__webpack_require__(2592);const pa=604800,ha=(0,ia.LC)({reducerPath:"serverApi",baseQuery:fa.Z,endpoints:e=>({getServer:e.query({query:()=>({url:"admin/system/organization"}),transformResponse:e=>(e.logo=`${Oi.ZP}/resource/organization/logo?t=${(new Date).getTime()}`,e),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{const{data:e}=await r;n(la(e))}catch{}}}),getThirdPartySecret:e.query({query:()=>({url:"/admin/system/third_party_secret",responseHandler:e=>e.text()}),keepUnusedDataFor:0}),updateThirdPartySecret:e.mutation({query:()=>({url:"/admin/system/third_party_secret",method:"POST",responseHandler:e=>e.text()})}),getMetrics:e.query({query:()=>({url:"/admin/system/metrics"})}),getServerVersion:e.query({query:()=>({headers:{accept:"text/plain"},url:"/admin/system/version",responseHandler:e=>e.text()})}),getFirebaseConfig:e.query({query:()=>({url:"admin/fcm/config"})}),getGoogleAuthConfig:e.query({query:()=>({url:"admin/google_auth/config"})}),updateGoogleAuthConfig:e.mutation({query:e=>({url:"admin/google_auth/config",method:"POST",body:e})}),getGithubAuthConfig:e.query({query:()=>({url:"admin/github_auth/config"})}),updateGithubAuthConfig:e.mutation({query:e=>({url:"admin/github_auth/config",method:"POST",body:e})}),sendTestEmail:e.mutation({query:e=>({url:"/admin/system/send_mail",method:"POST",body:e})}),updateFirebaseConfig:e.mutation({query:e=>({url:"admin/fcm/config",method:"POST",body:e})}),getAgoraConfig:e.query({query:()=>({url:"admin/agora/config"})}),updateAgoraConfig:e.mutation({query:e=>({url:"admin/agora/config",method:"POST",body:e})}),getSMTPConfig:e.query({query:()=>({url:"admin/smtp/config"})}),getSMTPStatus:e.query({query:()=>({url:"/admin/smtp/enabled"})}),updateSMTPConfig:e.mutation({query:e=>({url:"admin/smtp/config",method:"POST",body:e})}),getLoginConfig:e.query({query:()=>({url:"admin/login/config"})}),updateLoginConfig:e.mutation({query:e=>({url:"admin/login/config",method:"POST",body:e})}),updateLogo:e.mutation({query:e=>({headers:{"content-type":"image/png"},url:"admin/system/organization/logo",method:"POST",body:e}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{await r,n(la({logo:`${Oi.ZP}/resource/organization/logo?t=${(new Date).getTime()}`}))}catch{}}}),createInviteLink:e.query({query:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pa;return{headers:{"content-type":"text/plain",accept:"text/plain"},url:`/admin/system/create_invite_link?expired_in=${e}`,responseHandler:e=>e.text()}},transformResponse:e=>{const t=new URL(e);return`${location.origin}${t.pathname}${t.search}${t.hash}`}}),updateServer:e.mutation({query:e=>({url:"admin/system/organization",method:"POST",body:e}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r,getState:i}=t;const{name:a,description:o}=i().server;n(la(e));try{await r}catch{n(la({name:a,description:o}))}}})})}),{useGetServerVersionQuery:ga,useGetGithubAuthConfigQuery:ma,useUpdateGithubAuthConfigMutation:_a,useGetGoogleAuthConfigQuery:ba,useUpdateGoogleAuthConfigMutation:va,useGetSMTPStatusQuery:ya,useSendTestEmailMutation:Fa,useUpdateFirebaseConfigMutation:Ea,useGetFirebaseConfigQuery:wa,useGetLoginConfigQuery:ka,useUpdateLoginConfigMutation:xa,useGetSMTPConfigQuery:Ca,useUpdateSMTPConfigMutation:Sa,useGetAgoraConfigQuery:Da,useUpdateAgoraConfigMutation:Ta,useGetServerQuery:Aa,useGetMetricsQuery:Oa,useLazyGetServerQuery:Na,useUpdateServerMutation:Ia,useUpdateLogoMutation:Ra,useCreateInviteLinkQuery:Pa,useLazyCreateInviteLinkQuery:Ma,useGetThirdPartySecretQuery:La,useUpdateThirdPartySecretMutation:Ba}=ha;function ja(){const[e,t]=(0,Ie.useState)(!1),[n,r]=(0,Ie.useState)(""),{data:i}=ba(void 0,{refetchOnMountOrArgChange:!0}),[a,{isSuccess:o}]=va();(0,Ie.useEffect)((()=>{i&&r(i.client_id)}),[i]),(0,Ie.useEffect)((()=>{t(!o&&(null===i||void 0===i?void 0:i.client_id)!==n)}),[i,n,o]);return{config:i,changed:e,clientId:n,updateClientId:r,updateClientIdToServer:async()=>{n&&await a({client_id:n})},updateGoogleAuthConfig:a,isSuccess:o}}function qa(){const{data:e}=ya(),[t,{data:n,isSuccess:i,isLoading:a,error:o}]=(0,Di.YA)(),{clientId:s}=ja(),{data:l,isSuccess:u}=ka(void 0,{pollingInterval:1e4}),d=ii(),f=(0,ki.I0)(),[p,h]=(0,Ie.useState)({email:"",password:""});(0,Ie.useEffect)((()=>{const e=new URLSearchParams(location.search),n=e.get("code"),r=e.get("state"),i=e.get("token"),a=e.get("exists");if(n&&r&&t({code:n,state:r,type:"oidc"}),i&&"undefined"!==typeof a){"true"==a?t({token:i,type:"magiclink"}):location.href=`/#/reg/magiclink/${i}`}}),[]),(0,Ie.useEffect)((()=>{if(o)switch(o.status){case"PARSING_ERROR":r.ZP.error(o.data);break;case 401:r.ZP.error("username or password incorrect");break;case 404:r.ZP.error("account not exsit");break;default:r.ZP.error("something error")}else;}),[o]),(0,Ie.useEffect)((()=>{i&&n&&(r.ZP.success("Login Successfully"),f((0,Ti.A3)(n)),d("/"))}),[i,n]);const g=e=>{const{type:t}=e.target.dataset,{value:n}=e.target;h((e=>(e[t]=n,{...e})))},{email:m,password:_}=p;if(!u)return null;const{google:b,metamask:v,oidc:y}=l,F=b&&s;return(0,c.jsx)(Ri,{children:(0,c.jsxs)("div",{className:"form",children:[(0,c.jsxs)("div",{className:"tips",children:[(0,c.jsx)("img",{src:`${Oi.ZP}/resource/organization/logo`,alt:"logo",className:"logo"}),(0,c.jsx)("h2",{className:"title",children:"Login to Rustchat"}),(0,c.jsx)("span",{className:"desc",children:"Please enter your details."})]}),(0,c.jsxs)("form",{onSubmit:e=>{e.preventDefault(),t({...p,type:"password"})},children:[(0,c.jsx)(Qi.Z,{className:"large",name:"email",value:m,required:!0,placeholder:"Enter your email","data-type":"email",onChange:g}),(0,c.jsx)(Qi.Z,{className:"large",type:"password",value:_,name:"password",required:!0,"data-type":"password",onChange:g,placeholder:"Enter your password"}),(0,c.jsx)(Ni.Z,{type:"submit",disabled:a,children:a?"Signing":"Sign in"})]}),(F||v||y.length>0)&&(0,c.jsx)("hr",{className:"or"}),e&&(0,c.jsx)(ra,{}),F&&(0,c.jsx)(ta,{login:t,clientId:s}),v&&(0,c.jsx)(Zi,{login:t}),y.length>0&&(0,c.jsx)(Xi,{issuers:y})]})})}const Ua=i.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .form {
    max-width: 440px;
    padding: 32px 40px 32px 40px;
    /* border: 1px solid #eee; */
    box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
      0px 2px 4px -2px rgba(16, 24, 40, 0.06);
    border-radius: 12px;
    .tips {
      display: flex;
      flex-direction: column;
      align-items: center;
      .logo {
        width: 56px;
        height: 56px;
        margin-bottom: 28px;
        border-radius: 50%;
      }
      .title {
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        color: #101828;
        margin-bottom: 8px;
      }
      .desc {
        text-align: center;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #667085;
        margin-bottom: 24px;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 360px;
    }
    .or {
      border: none;
      position: relative;
      height: 1px;
      background-color: #e4e7ec;
      margin: 26px 0;
      &:after {
        padding: 4px;
        background-color: #fff;
        content: "OR";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        font-size: 14px;
        line-height: 20px;
        color: #667085;
      }
    }
    button {
      width: 100%;
    }
  }
`;function Ha(e){let{email:t,reset:n}=e;return(0,c.jsxs)("div",{className:"tips",children:[(0,c.jsx)("h2",{className:"title",children:"Check your email"}),(0,c.jsxs)("span",{className:"desc",children:["We\u2019ve sent you a magic link to ",t,". Click on the link to continue."]}),(0,c.jsx)(Ni.Z,{onClick:n,className:"main flex",children:"Use a different email"})]})}function za(){const[e,t]=(0,Ie.useState)(!1),[n,{isSuccess:i,isLoading:a,error:o}]=(0,Di.Wm)(),s=ii(),[l,u]=(0,Ie.useState)("");(0,Ie.useEffect)((()=>{i&&(r.ZP.success("Send Email Successfully!"),t(!0))}),[i]),(0,Ie.useEffect)((()=>{if(o)switch(o.status){case"PARSING_ERROR":r.ZP.error(o.data);break;case 401:r.ZP.error("username or password incorrect");break;case 404:r.ZP.error("account not exsit");break;default:r.ZP.error("something error")}else;}),[o]);return(0,c.jsx)(Ua,{children:(0,c.jsx)("div",{className:"form",children:e?(0,c.jsx)(Ha,{email:l,reset:()=>{u(""),t(!1)}}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"tips",children:[(0,c.jsx)("img",{src:`${Oi.ZP}/resource/organization/logo`,alt:"logo",className:"logo"}),(0,c.jsx)("h2",{className:"title",children:"Login to Rustchat"}),(0,c.jsx)("span",{className:"desc",children:"Please enter your Email"})]}),(0,c.jsxs)("form",{onSubmit:e=>{e.preventDefault(),n(l)},children:[(0,c.jsx)(Qi.Z,{type:"email",className:"large",name:"email",autoFocus:!0,value:l,required:!0,placeholder:"Enter your email",onChange:e=>{const{value:t}=e.target;u(t)}}),(0,c.jsx)(Ni.Z,{type:"submit",disabled:a||!l,children:a?"Sending":"Continue with Email"})]}),(0,c.jsx)("hr",{className:"or"}),(0,c.jsx)(Ni.Z,{onClick:()=>{s("/login")},children:"Sign in with Password"})]})})})}const $a=i.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .form {
    max-width: 440px;
    padding: 36px 40px 32px 40px;
    box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
      0px 2px 4px -2px rgba(16, 24, 40, 0.06);
    border-radius: 12px;
    .tips {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 24px;
      .logo {
        width: 56px;
        height: 56px;
        margin-bottom: 28px;
        border-radius: 50%;
      }
      .title {
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        color: #101828;
        margin-bottom: 8px;
        &.error {
          color: red;
        }
      }
      .desc {
        text-align: center;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #667085;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 360px;
    }
  }
`;function Ga(){return(0,c.jsx)($a,{children:(0,c.jsx)("div",{className:"form",children:(0,c.jsx)(ci,{})})})}function Va(){const[e,t]=(0,Ie.useState)("");return(0,c.jsxs)("form",{onSubmit:e=>{e.preventDefault()},children:[(0,c.jsx)(Qi.Z,{className:"large",name:"username",value:e,required:!0,placeholder:"Enter your Name22",onChange:e=>{const{value:n}=e.target;t(n)}}),(0,c.jsx)(Ni.Z,{type:"submit",children:isLoading?"Sending":"Register"})]})}const Wa=i.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-weight: 600;
    font-size: 30px;
    line-height: 38px;
    color: #101828;
    margin-bottom: 12px;
  }
  .desc {
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #667085;
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;function Ka(){return(0,c.jsxs)(Wa,{children:[(0,c.jsx)("div",{className:"title",children:"Magic link expired"}),(0,c.jsx)("p",{className:"desc",children:"Go back to your original Rustchat tab and request a new magic link."}),(0,c.jsx)("p",{className:"desc",children:"You can close this window now."})]})}function Za(){const{token:e}=oi(),[t,{data:n,isLoading:i}]=(0,Di.Mn)(),[a,{isLoading:o,error:s,isSuccess:l,data:u}]=(0,Di.YA)(),d=(0,ki.I0)(),[f,p]=(0,Ie.useState)("");(0,Ie.useEffect)((()=>{e&&t(e)}),[e]),(0,Ie.useEffect)((()=>{if(401===(null===s||void 0===s?void 0:s.status))r.ZP.error("Invalided Token")}),[s]),(0,Ie.useEffect)((()=>{l&&u&&(r.ZP.success("Login Successfully"),d((0,Ti.A3)(u)),location.href="/#/")}),[l,u]);return e?i?"checking Magic Link...":n?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"tips",children:[(0,c.jsx)("h2",{className:"title",children:"What\u2019s your name"}),(0,c.jsx)("span",{className:"desc",children:"Enter a name or handle so people know how you\u2019d like to be called. Your name will only be visible to others in spaces you joined."})]}),(0,c.jsxs)("form",{onSubmit:t=>{t.preventDefault(),a({token:e,username:f,type:"magiclink"})},children:[(0,c.jsx)(Qi.Z,{className:"large",name:"username",value:f,required:!0,placeholder:"Type a name",onChange:e=>{const{value:t}=e.target;p(t)}}),(0,c.jsx)(Ni.Z,{type:"submit",disabled:o||!f||l,children:o?"Logining":"Continue"})]})]}):(0,c.jsx)(Ka,{}):"no token"}const Ya=i.ZP.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: var(--rustchat-navs-bg);
  > .col {
    height: 100%;
    display: flex;
    flex-direction: column;
    &.left {
      align-items: center;
      position: relative;
      background: transparent;
      width: 64px;
      /* box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.1); */
      transition: all 0.5s ease-in;
      > .divider {
        width: -webkit-fill-available;
        height: 1px;
        background-color: #d4d4d4;
        margin: 8px 16px;
      }
      &.expand {
        width: 140px;
      }
    }
    &.right {
      width: 100%;
    }
    .link_navs {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 24px 8px 10px 8px;
      .link {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        padding: 8px;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #4b5563;
        border-radius: 8px;
        svg.fav path {
          fill: #344054;
        }
        &:hover {
          background-color: rgba(0, 0, 0, 0.08);
        }
        &.active {
          svg path {
            fill: #55c7ec;
          }
        }
      }
    }
  }
`;var Xa=__webpack_require__(4952);const Qa=i.ZP.div`
  padding: 10px 12px;
  .avatar {
    width: 32px;
    height: 32px;
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }
`;function Ja(e){let{uid:t=null}=e;const{pathname:n}=ni(),r=(0,ki.v9)((e=>e.contacts.byId[t]));return r?(0,c.jsx)(Qa,{children:(0,c.jsx)(Fi,{to:`/setting?nav=my_account&f=${n}`,children:(0,c.jsx)("div",{className:"avatar",children:(0,c.jsx)(Xa.Z,{url:r.avatar,name:r.name})})})}):null}function eo(e){return(eo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function to(e,t,n,r){if(eo(n)!==r)throw new TypeError("Invalid prop '".concat(t,"' of type '").concat(eo(n),"' supplied to '").concat(e,"', expected '").concat(r,"'."))}function no(e){var t=e.size,n=void 0===t?40:t,r=e.color,i=void 0===r?"black":r,a=e.lineWeight,o=void 0===a?5:a,s=e.speed,l=void 0===s?2:s;return to("Ring","size",n,"number"),to("Ring","color",i,"string"),to("Ring","lineWeight",o,"number"),to("Ring","speed",l,"number"),Ie.createElement("svg",{height:n,width:n,className:"Ring-module_container__1mCd7",viewBox:"25 25 50 50",style:{"--uib-size":n+"px","--uib-color":i,"--uib-speed":l+"s"}},Ie.createElement("circle",{cx:"50",cy:"50",r:"20",strokeWidth:o}))}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".Ring-module_container__1mCd7{animation:Ring-module_rotate__RBwLl var(--uib-speed) linear infinite;height:var(--uib-size);transform-origin:center;vertical-align:middle;width:var(--uib-size);will-change:transform}.Ring-module_container__1mCd7 circle{fill:none;stroke:var(--uib-color);stroke-dasharray:1,200;stroke-dashoffset:0;stroke-linecap:round;animation:Ring-module_stretch__L-1Qd calc(var(--uib-speed)*.75) ease-in-out infinite;will-change:stroke-dasharray,stroke-dashoffset}@keyframes Ring-module_rotate__RBwLl{to{transform:rotate(1turn)}}@keyframes Ring-module_stretch__L-1Qd{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,200;stroke-dashoffset:-35px}to{stroke-dashoffset:-124px}}");var ro=__webpack_require__(2002),io=__webpack_require__(5614);const ao={ids:[],byId:{}},oo=(0,aa.oM)({name:"channels",initialState:ao,reducers:{resetChannels:()=>ao,fullfillChannels(e,t){const n=t.payload||[];e.ids=n.map((e=>{let{gid:t}=e;return+t})),e.byId=Object.fromEntries(n.map((e=>{const{gid:t}=e;return e.icon=`${Oi.ZP}/resource/group_avatar?gid=${t}`,[t,e]})))},addChannel(e,t){const n=t.payload,{gid:r,avatar_updated_at:i}=n;e.ids.includes(+r)||e.ids.push(+r),e.byId[r]={...n,icon:0==i?"":`${Oi.ZP}/resource/group_avatar?gid=${r}&t=${i}`}},updateChannel(e,t){const{id:n,operation:r,members:i=[],...a}=t.payload,o=e.byId[n];if(!(!o||o.is_public&&["add_member","remove_member"].includes(r)))switch(r){case"remove_member":{const t=e.byId[n].members.filter((e=>-1==i.findIndex((t=>t==e))));e.byId[n].members=t}break;case"add_member":{const t=e.byId[n].members,r=new Set([...t,...i]);e.byId[n].members=[...r]}break;default:e.byId[n]={...e.byId[n],...(0,io.lg)(a)}}},updatePinMessage(e,t){var n;const{gid:r,mid:i,msg:a}=t.payload;let o=null===(n=e.byId[r])||void 0===n?void 0:n.pinned_messages;if(o)if(a)if(o){const e=o.findIndex((e=>e.mid==i));e>-1&&o.splice(e,1),o.push(a)}else o=[a];else{const e=o.findIndex((e=>e.mid==i));e>-1&&o.splice(e,1)}},removeChannel(e,t){const n=t.payload,r=e.ids.findIndex((e=>e==n));r>-1&&(e.ids.splice(r,1),delete e.byId[n])}}}),{updatePinMessage:so,resetChannels:lo,fullfillChannels:uo,addChannel:co,updateChannel:fo,removeChannel:po}=oo.actions,ho=oo.reducer;var go=__webpack_require__(7271),mo=__webpack_require__(7642),_o=__webpack_require__(860);const bo={},vo=(0,aa.oM)({name:"reactionMessage",initialState:bo,reducers:{resetReactionMessage:()=>bo,fullfillReactionMessage:(e,t)=>t.payload,removeReactionMessage(e,t){(Array.isArray(t.payload)?t.payload:[t.payload]).forEach((t=>{delete e[t]}))},toggleReactionMessage(e,t){const{from_uid:n,mid:r,action:i}=t.payload;if(e[r]||(e[r]={}),e[r][i]){const t=e[r][i],a=t.findIndex((e=>e==n));a>-1?(t.splice(a,1),0==t.length&&delete e[r][i]):t.push(n)}else e[r][i]=[n]}}}),{removeReactionMessage:yo,resetReactionMessage:Fo,fullfillReactionMessage:Eo,toggleReactionMessage:wo}=vo.actions,ko=vo.reducer,xo=[],Co=(0,aa.oM)({name:"fileMessage",initialState:xo,reducers:{resetFileMessage:()=>xo,fullfillFileMessage:(e,t)=>t.payload||[],addFileMessage(e,t){const n=t.payload;-1==e.findIndex((e=>e==n))&&e.unshift(+n)},removeFileMessage(e,t){(Array.isArray(t.payload)?t.payload:[t.payload]).forEach((t=>{const n=e.findIndex((e=>e==t));n>-1&&e.splice(n,1)}))}}}),{removeFileMessage:So,resetFileMessage:Do,fullfillFileMessage:To,addFileMessage:Ao}=Co.actions,Oo=Co.reducer;var No=__webpack_require__(658);function Io(){const e=(0,ki.I0)(),[t,{isLoading:n,isSuccess:r}]=(0,Di.sT)();return{clearLocalData:()=>{(0,ki.dC)((()=>{e((0,ro.$F)()),e((0,mo.XK)()),e((0,_o.af)()),e(lo()),e((0,go.T9)()),e((0,No.TB)()),e(Fo()),e(Do())}))},logout:t,exited:r,exiting:n}}const Ro=i.ZP.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .reload {
    visibility: hidden;
    &.visible {
      visibility: visible;
    }
  }
`;function Po(){const[e,t]=(0,Ie.useState)(!1),{clearLocalData:n}=Io();return(0,Ie.useEffect)((()=>{const e=setTimeout((()=>{t(!0)}),3e4);return()=>{clearTimeout(e)}}),[]),(0,c.jsxs)(Ro,{children:[(0,c.jsx)(no,{className:"loading",size:40,lineWeight:5,speed:2,color:"black"}),e&&(0,c.jsx)(Ni.Z,{className:"reload danger "+(e?"visible":""),onClick:()=>{n(),location.reload(!0)},children:"Reload"})]})}var Mo=__webpack_require__(4164);function Lo(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var Bo="undefined"!==typeof window&&"undefined"!==typeof document;function jo(e,t){e&&("function"===typeof e&&e(t),{}.hasOwnProperty.call(e,"current")&&(e.current=t))}function qo(){return Bo&&document.createElement("div")}function Uo(e,t){if(e===t)return!0;if("object"===typeof e&&null!=e&&"object"===typeof t&&null!=t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e){if(!t.hasOwnProperty(n))return!1;if(!Uo(e[n],t[n]))return!1}return!0}return!1}function Ho(e){var t=[];return e.forEach((function(e){t.find((function(t){return Uo(e,t)}))||t.push(e)})),t}function zo(e,t){var n,r;return Object.assign({},t,{popperOptions:Object.assign({},e.popperOptions,t.popperOptions,{modifiers:Ho([].concat((null==(n=e.popperOptions)?void 0:n.modifiers)||[],(null==(r=t.popperOptions)?void 0:r.modifiers)||[]))})})}var $o=Bo?Ie.useLayoutEffect:Ie.useEffect;function Go(e){var t=(0,Ie.useRef)();return t.current||(t.current="function"===typeof e?e():e),t.current}function Vo(e,t,n){n.split(/\s+/).forEach((function(n){n&&e.classList[t](n)}))}var Wo={name:"className",defaultValue:"",fn:function(e){var t=e.popper.firstElementChild,n=function(){var t;return!!(null==(t=e.props.render)?void 0:t.$$tippy)};function r(){e.props.className&&!n()||Vo(t,"add",e.props.className)}return{onCreate:r,onBeforeUpdate:function(){n()&&Vo(t,"remove",e.props.className)},onAfterUpdate:r}}};function Ko(e){return function(t){var n=t.children,r=t.content,i=t.visible,a=t.singleton,o=t.render,s=t.reference,l=t.disabled,u=void 0!==l&&l,c=t.ignoreAttributes,d=void 0===c||c,f=(t.__source,t.__self,Lo(t,["children","content","visible","singleton","render","reference","disabled","ignoreAttributes","__source","__self"])),p=void 0!==i,h=void 0!==a,g=(0,Ie.useState)(!1),m=g[0],_=g[1],b=(0,Ie.useState)({}),v=b[0],y=b[1],F=(0,Ie.useState)(),E=F[0],w=F[1],k=Go((function(){return{container:qo(),renders:1}})),x=Object.assign({ignoreAttributes:d},f,{content:k.container});p&&(x.trigger="manual",x.hideOnClick=!1),h&&(u=!0);var C=x,S=x.plugins||[];o&&(C=Object.assign({},x,{plugins:h&&null!=a.data?[].concat(S,[{fn:function(){return{onTrigger:function(e,t){var n=a.data.children.find((function(e){return e.instance.reference===t.currentTarget}));e.state.$$activeSingletonInstance=n.instance,w(n.content)}}}}]):S,render:function(){return{popper:k.container}}}));var D=[s].concat(n?[n.type]:[]);return $o((function(){var t=s;s&&s.hasOwnProperty("current")&&(t=s.current);var n=e(t||k.ref||qo(),Object.assign({},C,{plugins:[Wo].concat(x.plugins||[])}));return k.instance=n,u&&n.disable(),i&&n.show(),h&&a.hook({instance:n,content:r,props:C,setSingletonContent:w}),_(!0),function(){n.destroy(),null==a||a.cleanup(n)}}),D),$o((function(){var e;if(1!==k.renders){var t=k.instance;t.setProps(zo(t.props,C)),null==(e=t.popperInstance)||e.forceUpdate(),u?t.disable():t.enable(),p&&(i?t.show():t.hide()),h&&a.hook({instance:t,content:r,props:C,setSingletonContent:w})}else k.renders++})),$o((function(){var e;if(o){var t=k.instance;t.setProps({popperOptions:Object.assign({},t.props.popperOptions,{modifiers:[].concat(((null==(e=t.props.popperOptions)?void 0:e.modifiers)||[]).filter((function(e){return"$$tippyReact"!==e.name})),[{name:"$$tippyReact",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t,n=e.state,r=null==(t=n.modifiersData)?void 0:t.hide;v.placement===n.placement&&v.referenceHidden===(null==r?void 0:r.isReferenceHidden)&&v.escaped===(null==r?void 0:r.hasPopperEscaped)||y({placement:n.placement,referenceHidden:null==r?void 0:r.isReferenceHidden,escaped:null==r?void 0:r.hasPopperEscaped}),n.attributes.popper={}}}])})})}}),[v.placement,v.referenceHidden,v.escaped].concat(D)),Ie.createElement(Ie.Fragment,null,n?(0,Ie.cloneElement)(n,{ref:function(e){k.ref=e,jo(n.ref,e)}}):null,m&&(0,Mo.createPortal)(o?o(function(e){var t={"data-placement":e.placement};return e.referenceHidden&&(t["data-reference-hidden"]=""),e.escaped&&(t["data-escaped"]=""),t}(v),E,k.instance):r,k.container))}}var Zo=function(e,t){return(0,Ie.forwardRef)((function(n,r){var i=n.children,a=Lo(n,["children"]);return Ie.createElement(e,Object.assign({},t,a),i?(0,Ie.cloneElement)(i,{ref:function(e){jo(r,e),jo(i.ref,e)}}):null)}))};const Yo=Zo(Ko(wr)),Xo=i.ZP.div`
  position: relative;
  background: #fff;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #1d2939;
  border-radius: var(--br);
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
    0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  &::after {
    background-color: inherit;
    position: absolute;
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 1px;
    transform-origin: center;
  }
  &.right::after {
    left: 0;
    top: 50%;
    transform: translate3d(-50%, -50%, 0) rotate(45deg);
  }
  &.top::after {
    left: 50%;
    bottom: 0;
    transform: translate3d(-50%, 50%, 0) rotate(45deg);
  }
  &.bottom::after {
    top: 0;
    left: 50%;
    transform: translate3d(-50%, -50%, 0) rotate(45deg);
  }
`;function Qo(e){let{tip:t="",placement:n="right",delay:r=null,children:i,...a}=e;return(0,c.jsx)(Yo,{offset:[0,18],duration:r?[300,250]:0,delay:null!==r&&void 0!==r?r:[150,0],placement:n,content:(0,c.jsx)(Xo,{className:n,children:t}),...a,children:i})}const Jo=__webpack_require__.p+"static/media/setting.3cfa5bc4fac01d78f3a0.svg",es=i.ZP.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 8px 12px;
  .menu {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 10px;
    .icon {
      width: 24px;
      height: 24px;
      transition: all 0.5s ease;
    }
    .txt {
      color: #4b5563;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;function ts(){const{pathname:e}=ni();return(0,c.jsx)(es,{children:(0,c.jsx)("li",{className:"menu link_navs",children:(0,c.jsx)(Fi,{className:"link",to:`/setting?f=${e}`,children:(0,c.jsx)(Qo,{placement:"right",tip:"Settings",children:(0,c.jsx)("img",{src:Jo,alt:"setting icon",className:"icon"})})})})})}var ns=__webpack_require__(1842),rs=__webpack_require__.n(ns);const is={online:!0,ready:!1,userGuide:{visible:!1,step:1},inputMode:"text",menuExpand:!1,fileListView:Oi.kO.grid,uploadFiles:{},selectMessages:{},draftMarkdown:{},draftMixedText:{},remeberedNavs:{chat:null,contact:null}},as=(0,aa.oM)({name:"ui",initialState:is,reducers:{fullfillUI:(e,t)=>({...is,...t.payload}),setReady(e){e.ready=!0},updateOnline(e,t){e.online=t.payload},toggleMenuExpand(e){e.menuExpand=!e.menuExpand},updateInputMode(e,t){e.inputMode=t.payload},updateFileListView(e,t){e.fileListView=t.payload},updateRemeberedNavs(e,t){const{key:n="chat",path:r=null}=t.payload||{};e.remeberedNavs[n]=r},updateDraftMarkdown(e,t){const{key:n,value:r}=t.payload;e.draftMarkdown[n]=r},updateDraftMixedText(e,t){const{key:n,value:r}=t.payload;e.draftMixedText[n]=r},updateUserGuide(e,t){const n=t.payload||{};Object.keys(n).forEach((t=>{e.userGuide[t]=n[t]}))},updateUploadFiles(e,t){const{context:n="channel",id:r=null,operation:i="add",...a}=t.payload;if(!r||!n)return;const o=`${n}_${r}`;let s=e.uploadFiles[o];switch(i){case"add":{const{data:t}=a,n=Array.isArray(t);s?n?t.forEach((e=>{s.push(e)})):s.push(a):e.uploadFiles[o]=n?t:[t]}break;case"reset":e.uploadFiles[o]=[];break;case"remove":{const{index:e}=a,t=s[e];t&&(s.splice(e,1),URL.revokeObjectURL(t.url))}break;case"update":{const{index:e,name:t}=a,n=s[e];n&&(n.name=t)}}},updateSelectMessages(e,t){const{context:n="channel",id:r=null,operation:i="add",data:a=null}=t.payload;let o=e.selectMessages[`${n}_${r}`];switch(i){case"add":o=o?[...o,a]:[a];break;case"remove":o=o.filter((e=>e!=a));break;case"reset":o=null}e.selectMessages[`${n}_${r}`]=o}}}),{fullfillUI:ss,setReady:ls,updateOnline:us,updateInputMode:cs,toggleMenuExpand:ds,updateFileListView:fs,updateUploadFiles:ps,updateSelectMessages:hs,updateUserGuide:gs,updateDraftMarkdown:ms,updateDraftMixedText:_s,updateRemeberedNavs:bs}=as.actions,vs=as.reducer,ys=()=>{const[e,t]=(0,Ie.useState)(!1),n=(0,ki.I0)();return{rehydrate:async()=>{const e={channels:[],contacts:[],fileMessage:{},channelMessage:{},userMessage:{},reactionMessage:{},message:{replying:{}},footprint:{},ui:{},server:{}},r=Object.keys(window.CACHE);await Promise.all(r.map((t=>window.CACHE[t].iterate(((n,r)=>{switch(t){case"channels":n&&e.channels.push(n);break;case"contacts":n&&e.contacts.push(n);break;case"footprint":e.footprint[r]=n;break;case"ui":e.ui[r]=n;break;case"messageChannel":e.channelMessage[r]=n;break;case"messageFile":e.fileMessage[r]=n||[];break;case"messageDM":e.userMessage[r]=n;break;case"messageReaction":e.reactionMessage[r]=n;break;case"message":e.message[r]=n;break;case"server":e.server[r]=n}})))));(0,ki.dC)((()=>{n((0,go.g5)(e.contacts)),n(ca(e.server)),n(uo(e.channels)),n(To(e.fileMessage.list)),n((0,mo.Ie)(e.channelMessage)),n((0,_o.Qc)(e.userMessage)),n((0,No.Zl)(e.message)),n((0,ro.GV)(e.footprint)),n(ss(e.ui)),n(Eo(e.reactionMessage))})),t(!0)},rehydrated:e}},Fs=[{storeName:"channels",description:"store channel list"},{storeName:"contacts",description:"store contact list"},{storeName:"messageDM",description:"store DM message with IDs"},{storeName:"messageChannel",description:"store channel message with IDs"},{storeName:"message",description:"store message with key-val full data"},{storeName:"messageFile",description:"store file message list refs"},{storeName:"messageReaction",description:"store message reaction with key-val full data"},{storeName:"footprint",description:"store user visit data"},{storeName:"server",description:"store server data"},{storeName:"ui",description:"store UI state"}],Es=()=>{const e=`local_db_${localStorage.getItem(Oi.kK)||""}_v_${Oi.YM.split(".").join("_")}`;window.CACHE={},Fs.forEach((t=>{let{storeName:n,description:r}=t;window.CACHE[n]=rs().createInstance({name:e,storeName:n,description:r})}))},ws=(0,aa.oM)({name:"favorites",initialState:[],reducers:{fullfillFavorites:(e,t)=>t.payload,addFavorite(e,t){e.push(t.payload)},deleteFavorite(e,t){const n=t.payload,r=e.findIndex((e=>e.id==n));r>-1&&e.splice(r,1)},populateFavorite(e,t){const{id:n,messages:r}=t.payload,i=e.findIndex((e=>e.id==n));i>-1&&(e[i].messages=r)}}}),{addFavorite:ks,deleteFavorite:xs,fullfillFavorites:Cs,populateFavorite:Ss}=ws.actions,Ds=ws.reducer;var Ts=__webpack_require__(3609);const As=(0,ia.LC)({reducerPath:"messageApi",baseQuery:fa.Z,endpoints:e=>({editMessage:e.mutation({query:e=>{let{mid:t,content:n,type:r="text"}=e;return{headers:{"content-type":Oi.bT[r]},url:`/message/${t}/edit`,method:"PUT",body:n}}}),reactMessage:e.mutation({query:e=>{let{mid:t,action:n}=e;return{url:`/message/${t}/like`,method:"PUT",body:{action:n}}}}),deleteMessage:e.query({query:e=>({url:`/message/${e}`,method:"DELETE"})}),prepareUploadFile:e.mutation({query:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{url:"/resource/file/prepare",method:"POST",body:e}}}),createArchive:e.mutation({query:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{url:"/resource/archive",method:"POST",body:{mid_list:e}}}}),uploadFile:e.mutation({query:e=>({url:"/resource/file/upload",method:"POST",body:e}),transformResponse:e=>e||{}}),getOGInfo:e.query({query:e=>({url:`/resource/open_graphic_parse?url=${encodeURIComponent(e)}`})}),getArchiveMessage:e.query({query:e=>({url:`/resource/archive?file_path=${encodeURIComponent(e)}`})}),pinMessage:e.mutation({query:e=>{let{gid:t,mid:n}=e;return{url:`/group/${t}/pin`,method:"POST",body:{mid:n}}}}),unpinMessage:e.mutation({query:e=>{let{gid:t,mid:n}=e;return{url:`/group/${t}/unpin`,method:"POST",body:{mid:n}}}}),favoriteMessage:e.mutation({query:e=>({url:"/favorite",method:"POST",body:{mid_list:e}}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{const{data:e}=await r,{created_at:t,id:i}=e;n(ks({id:i,created_at:t})),n(As.endpoints.getFavoriteDetails.initiate(i))}catch(i){}}}),removeFavorite:e.query({query:e=>({url:`/favorite/${e}`,method:"DELETE"}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{await r,n(xs(e))}catch(i){}}}),getFavoriteDetails:e.query({query:e=>({url:`/favorite/${e}`}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r,getState:i}=t;try{const{data:t}=await r,a=i().authData.uid,o=(0,io.Hr)(t,e,a);n(Ss({id:e,messages:o}))}catch(a){}}}),getFavorites:e.query({query:()=>({url:"/favorite"}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{const{data:e}=await r;n(Cs(e));for(const t of e){const{id:e}=t;n(As.endpoints.getFavoriteDetails.initiate(e))}}catch(i){}}}),replyMessage:e.mutation({query:e=>{let{reply_mid:t,content:n,type:r="text"}=e;return{headers:{"content-type":Oi.bT[r]},url:`/message/${t}/reply`,method:"POST",body:n}},async onQueryStarted(e,t){await Ts.s.call(this,e,t,e.context)}}),readMessage:e.mutation({query:e=>({url:"/user/read-index",method:"POST",body:e}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;const{users:i=null,groups:a=null}=e;i&&n((0,ro.RT)(i)),a&&n((0,ro.TP)(a));try{await r}catch{}}})})}),{useLazyRemoveFavoriteQuery:Os,useUnpinMessageMutation:Ns,useLazyGetFavoritesQuery:Is,useFavoriteMessageMutation:Rs,usePinMessageMutation:Ps,useLazyGetArchiveMessageQuery:Ms,useGetArchiveMessageQuery:Ls,useLazyGetOGInfoQuery:Bs,usePrepareUploadFileMutation:js,useUploadFileMutation:qs,useEditMessageMutation:Us,useReactMessageMutation:Hs,useReplyMessageMutation:zs,useLazyDeleteMessageQuery:$s,useReadMessageMutation:Gs,useCreateArchiveMutation:Vs}=As;var Ws=__webpack_require__(251);function Ks(e){let t,n,r,i=!1;return function(a){void 0===t?(t=a,n=0,r=-1):t=function(e,t){const n=new Uint8Array(e.length+t.length);return n.set(e),n.set(t,e.length),n}(t,a);const o=t.length;let s=0;for(;n<o;){i&&(10===t[n]&&(s=++n),i=!1);let a=-1;for(;n<o&&-1===a;++n)switch(t[n]){case 58:-1===r&&(r=n-s);break;case 13:i=!0;case 10:a=n}if(-1===a)break;e(t.subarray(s,a),r),s=n,r=-1}s===o?t=void 0:0!==s&&(t=t.subarray(s),n-=s)}}var Zs=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};const Ys="text/event-stream",Xs="last-event-id";function Qs(e,t){var{signal:n,headers:r,onopen:i,onmessage:a,onclose:o,onerror:s,openWhenHidden:l,fetch:u}=t,c=Zs(t,["signal","headers","onopen","onmessage","onclose","onerror","openWhenHidden","fetch"]);return new Promise(((t,d)=>{const f=Object.assign({},r);let p;function h(){p.abort(),document.hidden||y()}f.accept||(f.accept=Ys),l||document.addEventListener("visibilitychange",h);let g=1e3,m=0;function _(){document.removeEventListener("visibilitychange",h),window.clearTimeout(m),p.abort()}null===n||void 0===n||n.addEventListener("abort",(()=>{_(),t()}));const b=null!==u&&void 0!==u?u:window.fetch,v=null!==i&&void 0!==i?i:Js;async function y(){var n;p=new AbortController;try{const n=await b(e,Object.assign(Object.assign({},c),{headers:f,signal:p.signal}));await v(n),await async function(e,t){const n=e.getReader();let r;for(;!(r=await n.read()).done;)t(r.value)}(n.body,Ks(function(e,t,n){let r={data:"",event:"",id:"",retry:void 0};const i=new TextDecoder;return function(a,o){if(0===a.length)null===n||void 0===n||n(r),r={data:"",event:"",id:"",retry:void 0};else if(o>0){const n=i.decode(a.subarray(0,o)),s=o+(32===a[o+1]?2:1),l=i.decode(a.subarray(s));switch(n){case"data":r.data=r.data?r.data+"\n"+l:l;break;case"event":r.event=l;break;case"id":e(r.id=l);break;case"retry":const n=parseInt(l,10);isNaN(n)||t(r.retry=n)}}}}((e=>{e?f[Xs]=e:delete f[Xs]}),(e=>{g=e}),a))),null===o||void 0===o||o(),_(),t()}catch(r){if(!p.signal.aborted)try{const e=null!==(n=null===s||void 0===s?void 0:s(r))&&void 0!==n?n:g;window.clearTimeout(m),m=window.setTimeout(y,e)}catch(i){_(),d(i)}}}y()}))}function Js(e){const t=e.headers.get("content-type");if(!(null===t||void 0===t?void 0:t.startsWith(Ys)))throw new Error(`Expected content-type to be text/event-stream, Actual: ${t}`)}var el=__webpack_require__(7892),tl=__webpack_require__.n(el);const nl=(e,t,n)=>{const{mid:r,from_uid:i,created_at:a,target:o,detail:{mid:s,content:l,content_type:u,type:c,properties:d,expires_in:f,detail:p}}=e,h={from_uid:i,created_at:a,content:l,content_type:u,properties:d,expires_in:f};switch(c){case"normal":case"reply":t((0,ro.PN)(r))}const{ready:g,loginUid:m,readUsers:_={},readChannels:b={}}=n,v="undefined"!==typeof o.gid?"channel":"user",y="user"==v?_o.ZK:mo.p_,F=i==m,E="user"==v?F?o.uid:i:o.gid,w=("user"==v?_[E]:b[E])||0,k=!!F||r<w;switch(c){case"normal":(0,ki.dC)((()=>{t((0,No.Hz)({mid:r,read:k,...h})),t(y({id:E,mid:r,local_id:d?d.local_id:null})),u==Oi.bT.file&&t(Ao(r))}));break;case"reply":(0,ki.dC)((()=>{t((0,No.Hz)({mid:r,reply_mid:s,read:k,...h})),t(y({id:E,mid:r,local_id:d?d.local_id:null}))}));break;case"reaction":{const e="user"==v?_o.Fs:mo.nF,{type:n,action:r,content:a,content_type:o,properties:l}=p;switch(n){case"like":t(wo({from_uid:i,mid:s,action:r}));break;case"delete":(0,ki.dC)((()=>{t(e({id:E,mid:s})),t((0,No.Gd)(s))})),t(So(s));break;case"edit":t((0,No.o6)({mid:s,content:a,content_type:o,properties:l,edited:!0}))}}}};var rl=__webpack_require__(255);const il=async e=>{const t=window.CACHE[e];t&&await t.iterate(((e,n)=>{t.removeItem(n)}))};const al=["__rtkq","channels","channelMessage","contacts","userMessage","reactionMessage","fileMessage","message","ui","footprint","server"],ol=(0,aa.e)();ol.startListening({predicate:e=>{const{type:t=""}=e,[n]=t.split("/");return al.includes(n)},effect:async(e,t)=>{const{type:n="",payload:r}=e,[i,a]=n.split("/");if(!window.CACHE&&"__rtkq"!==i)return;const o=t.getState()[i];switch(i){case"__rtkq":!async function(e){let{dispatch:t,operation:n}=e;switch(n){case"offline":t(us(!1));break;case"online":t(us(!0))}}({operation:a,payload:r,dispatch:t.dispatch});break;case"channels":await async function(e){let{operation:t,data:n,payload:r}=e;const i=window.CACHE.channels;if(t.startsWith("reset"))il("channels");else switch(t){case"fullfillChannels":{const e=r;await Promise.all(e.map((e=>{let{gid:t,...n}=e;return i.setItem(t+"",{gid:t,...n})})))}break;case"addChannel":{const{gid:e}=r;await i.setItem(e+"",r)}break;case"removeChannel":{const e=r;await i.removeItem(e+"")}break;case"updateChannel":{const{id:e}=r;await i.setItem(e+"",n.byId[e])}}}({operation:a,payload:r,data:o});break;case"contacts":await async function(e){let{operation:t,data:n,payload:r}=e;const i=window.CACHE.contacts;if(t.startsWith("reset"))il("contacts");else switch(t){case"fullfillContacts":{const e=r;await Promise.all(e.map((e=>{let{uid:t,...n}=e;return i.setItem(t+"",{uid:t,...n})})))}break;case"updateUsersByLogs":{const e=r;await Promise.all(e.map((async e=>{let{action:t,uid:r}=e;switch(t){case"update":case"create":await i.setItem(r+"",n.byId[r]);break;case"delete":await i.removeItem(r+"")}})))}break;case"addContact":{const{uid:e}=r;await i.setItem(e+"",r)}break;case"removeContact":{const e=r;await i.removeItem(e+"")}}}({operation:a,payload:r,data:o});break;case"channelMessage":await async function(e){let{operation:t,data:n={},payload:r}=e;const i=window.CACHE.messageChannel;if(t.startsWith("reset"))il("messageChannel");else switch(t){case"addChannelMsg":case"removeChannelMsg":{const{id:e}=r;await i.setItem(e+"",n[e])}break;case"removeChannelSession":{const e=Array.isArray(r)?r:[r];await Promise.all(e.map((async e=>{await i.removeItem(e+"")})))}}}({operation:a,payload:r,data:o});break;case"userMessage":await async function(e){let{operation:t,data:n={},payload:r}=e;const i=window.CACHE.messageDM;if(t.startsWith("reset"))il("messageDM");else switch(t){case"addUserMsg":case"removeUserMsg":{const{id:e}=r;await i.setItem(e+"",n.byId[e])}break;case"removeUserSession":{const e=Array.isArray(r)?r:[r];await Promise.all(e.map((async e=>{await i.removeItem(e+"")})))}}}({operation:a,payload:r,data:o});break;case"fileMessage":await async function(e){let{operation:t,data:n={}}=e;const r=window.CACHE.messageFile;if(t.startsWith("reset"))il("messageFile");else switch(t){case"addFileMessage":case"removeFileMessage":await r.setItem("list",n)}}({operation:a,data:o});break;case"message":await async function(e){let{operation:t,data:n={},payload:r}=e;const i=window.CACHE.message;if(t.startsWith("reset"))il("message");else switch(t){case"addMessage":case"updateMessage":{const{mid:e}=r;await i.setItem(e+"",n[e])}break;case"removeMessage":{const e=Array.isArray(r)?r:[r];await Promise.all(e.map((async e=>{await i.removeItem(e+"")})))}}}({operation:a,payload:r,data:o});break;case"reactionMessage":await async function(e){let{operation:t,data:n={},payload:r}=e;const i=window.CACHE.messageReaction;if(t.startsWith("reset"))il("messageReaction");else switch(t){case"toggleReactionMessage":{const{mid:e}=r;await i.setItem(e+"",n[e])}break;case"removeReactionMessage":{const e=Array.isArray(r)?r:[r];await Promise.all(e.map((async e=>{await i.removeItem(e+"")})))}}}({operation:a,payload:r,data:o});break;case"footprint":await async function(e){let{operation:t,data:n={},payload:r}=e;const i=window.CACHE.footprint;if(t.startsWith("reset"))il("footprint");else switch(t){case"updateUsersVersion":{const e=r;await i.setItem("usersVersion",e)}break;case"updateAfterMid":{const e=r;await i.setItem("afterMid",e)}break;case"updateMute":await i.setItem("muteUsers",n.muteUsers||{}),await i.setItem("muteChannels",n.muteChannels||{});break;case"updateReadChannels":await i.setItem("readChannels",n.readChannels);break;case"updateReadUsers":await i.setItem("readUsers",n.readUsers)}}({operation:a,payload:r,data:o});break;case"ui":await async function(e){let{operation:t,data:n={}}=e;const r=window.CACHE.ui;if(t.startsWith("reset"))il("ui");else switch(t){case"toggleMenuExpand":await r.setItem("menuExpand",n.menuExpand);break;case"updateInputMode":await r.setItem("inputMode",n.inputMode);break;case"updateFileListView":await r.setItem("fileListView",n.fileListView)}}({operation:a,payload:r,data:o});break;case"server":await async function(e){let{operation:t,payload:n}=e;const r=window.CACHE.server;if(t.startsWith("reset"))il("server");else if("updateInfo"===t){const e=n;await Promise.all(Object.entries(e).map((e=>{let[t,n]=e;return r.setItem(t,n)})))}}({operation:a,payload:r,data:o})}}});const sl=ol,ll=(0,ia.LC)({reducerPath:"channelApi",baseQuery:fa.Z,refetchOnFocus:!0,endpoints:e=>({getChannels:e.query({query:()=>({url:"group"})}),getChannel:e.query({query:e=>({url:`group/${e}`})}),leaveChannel:e.query({query:e=>({url:`group/${e}/leave`}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{await r,n(po(e))}catch{}}}),createChannel:e.mutation({query:e=>({url:"group",method:"POST",body:e})}),updateChannel:e.mutation({query:e=>{let{id:t,...n}=e;return{url:`group/${t}`,method:"PUT",body:n}},async onQueryStarted(e,t){let{id:n,name:r,description:i}=e,{dispatch:a,queryFulfilled:o}=t;const s=a(fo({id:n,name:r,description:i}));try{await o}catch{s.undo()}}}),getHistoryMessages:e.query({query:e=>{let{gid:t,mid:n=0,limit:r=50}=e;return{url:`/group/${t}/history?before=${n}&limit=${r}`}}}),createInviteLink:e.query({query:e=>({headers:{"content-type":"text/plain",accept:"text/plain"},url:`/group/${e}/create_invite_link`,responseHandler:e=>e.text()}),transformResponse:e=>{const t=new URL(e);return`${location.origin}${t.pathname}${t.search}${t.hash}`}}),removeChannel:e.query({query:e=>({url:`group/${e}`,method:"DELETE"}),async onQueryStarted(e,t){let{dispatch:n,getState:r,queryFulfilled:i}=t;const{channelMessage:a,ui:{remeberedNavs:{chat:o}}}=r();try{await i;const t=a[e];o==`/chat/channel/${e}`&&n(bs({path:null})),t&&(n((0,mo.YZ)(e)),n((0,No.Gd)(t)),n(yo(t)))}catch{}}}),sendChannelMsg:e.mutation({query:e=>{let{id:t,content:n,type:r="text",properties:i=""}=e;return{headers:{"content-type":Oi.bT[r],"X-Properties":i?btoa(unescape(encodeURIComponent(JSON.stringify(i)))):""},url:`group/${t}/send`,method:"POST",body:"file"==r?JSON.stringify(n):n}},async onQueryStarted(e,t){await Ts.s.call(this,e,t,"channel")}}),addMembers:e.mutation({query:e=>{let{id:t,members:n}=e;return{url:`group/${t}/members/add`,method:"POST",body:n}}}),removeMembers:e.mutation({query:e=>{let{id:t,members:n}=e;return{url:`group/${t}/members/remove`,method:"POST",body:n}}}),updateIcon:e.mutation({query:e=>{let{gid:t,image:n}=e;return{headers:{"content-type":"image/png"},url:`/group/${t}/avatar`,method:"POST",body:n}},async onQueryStarted(e,t){let{gid:n}=e,{dispatch:r,queryFulfilled:i}=t;try{await i,r(fo({id:n,icon:`${Oi.ZP}/resource/group_avatar?gid=${n}&t=${(new Date).getTime()}`}))}catch(a){}}})})}),{useLazyLeaveChannelQuery:ul,useLazyCreateInviteLinkQuery:cl,useCreateInviteLinkQuery:dl,useLazyGetHistoryMessagesQuery:fl,useGetChannelQuery:pl,useUpdateChannelMutation:hl,useLazyRemoveChannelQuery:gl,useGetChannelsQuery:ml,useCreateChannelMutation:_l,useSendChannelMsgMutation:bl,useAddMembersMutation:vl,useRemoveMembersMutation:yl,useUpdateIconMutation:Fl}=ll,El=(0,d.UY)({authData:Ti.ZP,ui:vs,footprint:ro.ZP,server:da,favorites:Ds,contacts:go.ZP,channels:ho,reactionMessage:ko,userMessage:_o.ZP,channelMessage:mo.ZP,fileMessage:Oo,message:No.ZP,[Di.iJ.reducerPath]:Di.iJ.reducer,[As.reducerPath]:As.reducer,[Ws.eJ.reducerPath]:Ws.eJ.reducer,[ll.reducerPath]:ll.reducer,[ha.reducerPath]:ha.reducer}),wl=(0,aa.xC)({reducer:El,middleware:e=>e().concat(Di.iJ.middleware,Ws.eJ.middleware,ll.middleware,ha.middleware,As.middleware).prepend(sl.middleware)});let kl=!1;(0,rl.sj)(wl.dispatch,((e,t)=>{let{onOnline:n,onOffline:r,onFocus:i,onFocusLost:a}=t;const o=()=>e(i()),s=()=>e(n()),l=()=>e(r()),u=()=>{"visible"===window.document.visibilityState?o():e(a())};kl||"undefined"!==typeof window&&window.addEventListener&&(window.addEventListener("visibilitychange",u,!1),window.addEventListener("focus",o,!1),window.addEventListener("online",s,!1),window.addEventListener("offline",l,!1),kl=!0);return()=>{window.removeEventListener("focus",o),window.removeEventListener("visibilitychange",u),window.removeEventListener("online",s),window.removeEventListener("offline",l),kl=!1}}));const xl=wl;class Cl extends Error{}class Sl extends Error{}let Dl=null;function Tl(){const[e,t]=(0,Ie.useState)(!1),{authData:{uid:n},ui:{ready:i,online:a},footprint:{afterMid:o,usersVersion:s,readUsers:l,readChannels:u}}=(0,ki.v9)((e=>e)),[c]=(0,Di.SO)(),d=(0,ki.I0)();let f=!1,p=!1,h=new AbortController;const g=async()=>{if(f||p)return;const{authData:{token:e,expireTime:t=(new Date).getTime(),refreshToken:a}}=xl.getState();let _=e;if(tl()().isAfter(new Date(t-2e4))){const{data:{token:t},isError:n}=await c({token:e,refreshToken:a});if(n)return;_=t}return p=!0,await Qs(`${Oi.ZP}/user/events?${function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=new URLSearchParams;return Object.entries(e).forEach((e=>{let[n,r]=e;r&&t.append(n,r)})),t.toString()}({"api-key":_,users_version:s,after_mid:o})}`,{openWhenHidden:!0,signal:h.signal,async onopen(e){if(p=!1,!e.ok||e.headers.get("content-type")!==Ys)throw e.status>=400&&e.status<500&&429!==e.status?new Sl:new Cl;f=!0},onmessage(e){if(p=!1,"FatalError"===e.event)throw new Sl(e.data);const t=JSON.parse(e.data),{type:a}=t;switch(a){case"heartbeat":default:break;case"ready":d(ls());break;case"users_snapshot":{const{version:e}=t;d((0,ro.uM)(e))}break;case"users_log":{const{logs:e}=t;d((0,go.ii)(e))}break;case"user_settings":case"user_settings_changed":Object.keys(t).forEach((e=>{switch(e){case"read_index_groups":d((0,ro.TP)(t[e]));break;case"read_index_users":d((0,ro.RT)(t[e]));break;case"add_mute_users":case"mute_users":case"add_mute_groups":case"mute_groups":{const n=t[e];if(n&&n.length){const t=e.endsWith("users")?"add_users":"add_groups";d((0,ro.Uw)({[t]:n}))}}break;case"remove_mute_users":case"remove_mute_groups":{const n=t[e];if(n&&n.length){const t=e.endsWith("users")?"remove_users":"remove_groups";d((0,ro.Uw)({[t]:n}))}}}}));break;case"users_state":case"users_state_changed":{let{type:e,...n}=t;const r="users_state_changed"==e?[n]:n.users;d((0,go._D)(r))}break;case"kick":switch(t.reason){case"login_from_other_device":d((0,Ti.sQ)()),(0,r.ZP)("kicked from the other device");break;case"delete_user":d((0,Ti.sQ)()),(0,r.ZP)("sorry, your account has been deleted")}break;case"related_groups":d(uo(t.groups));break;case"joined_group":d(co(t.group));break;case"group_changed":{const{gid:e,...n}=t;d(fo({id:e,...n}))}break;case"user_joined_group":{const{gid:e,uid:n}=t;d(fo({operation:"add_member",id:e,members:n}))}break;case"user_leaved_group":{const{gid:e,uid:r}=t;r.findIndex((e=>e==n))>-1?d(po(e)):d(fo({operation:"remove_member",id:e,members:r}))}break;case"kick_from_group":d(po(t.gid));break;case"pinned_message_updated":d(so(t));break;case"chat":nl(t,d,{ready:i,loginUid:n,readUsers:l,readChannels:u})}},onclose(){throw p=!1,new Cl},onerror(e){throw p=!1,e instanceof Sl||(m(),Dl&&clearTimeout(Dl),Dl=setTimeout((()=>{f=!1,g()}),2e3)),e}}),p=!1,h},m=()=>{h&&h.abort&&h.abort()};return(0,Ie.useEffect)((()=>(e&&(a?g():m()),()=>{m()})),[a,e]),{setStreamingReady:e=>{t(e)},startStreaming:g,stopStreaming:m}}var Al=__webpack_require__(2882);const Ol=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Nl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],a=i+1<e.length,o=a?e[i+1]:0,s=i+2<e.length,l=s?e[i+2]:0,u=t>>2,c=(3&t)<<4|o>>4;let d=(15&o)<<2|l>>6,f=63&l;s||(f=64,a||(d=64)),r.push(n[u],n[c],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ol(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){const a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const o=i<e.length?n[e.charAt(i)]:64;++i;const s=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==o||null==s)throw Error();const l=t<<2|a>>4;if(r.push(l),64!==o){const e=a<<4&240|o>>2;if(r.push(e),64!==s){const e=o<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Il=function(e){return function(e){const t=Ol(e);return Nl.encodeByteArray(t,!0)}(e).replace(/\./g,"")};class Rl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}function Pl(){return"object"===typeof indexedDB}function Ml(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}class Ll extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Ll.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bl.prototype.create)}}class Bl{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e){const t=(arguments.length<=1?void 0:arguments[1])||{},n=`${this.service}/${e}`,r=this.errors[e],i=r?function(e,t){return e.replace(jl,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(r,t):"Error",a=`${this.serviceName}: ${i} (${n}).`;return new Ll(n,a,t)}}const jl=/\{\$([^}]+)}/g;function ql(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],a=t[i];if(Ul(n)&&Ul(a)){if(!ql(n,a))return!1}else if(n!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ul(e){return null!==e&&"object"===typeof e}function Hl(e){return e&&e._delegate?e._delegate:e}class zl{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const $l="[DEFAULT]";class Gl{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Rl;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService({instanceIdentifier:$l})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$l;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$l;return this.instances.has(e)}getOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$l;return this.instancesOptions.get(e)||{}}initialize(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,a]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&a.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService(e){let{instanceIdentifier:t,options:n={}}=e,r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===$l?void 0:i),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch(a){}var i;return r||null}normalizeInstanceIdentifier(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$l;return this.component?this.component.multipleInstances?e:$l:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Vl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Gl(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}const Wl=[];var Kl;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Kl||(Kl={}));const Zl={debug:Kl.DEBUG,verbose:Kl.VERBOSE,info:Kl.INFO,warn:Kl.WARN,error:Kl.ERROR,silent:Kl.SILENT},Yl=Kl.INFO,Xl={[Kl.DEBUG]:"log",[Kl.VERBOSE]:"log",[Kl.INFO]:"info",[Kl.WARN]:"warn",[Kl.ERROR]:"error"},Ql=function(e,t){if(t<e.logLevel)return;(new Date).toISOString();const n=Xl[t];if(!n)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a]};let Jl,eu;const tu=new WeakMap,nu=new WeakMap,ru=new WeakMap,iu=new WeakMap,au=new WeakMap;let ou={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return nu.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ru.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return uu(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function su(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(eu||(eu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(cu(this),n),uu(tu.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return uu(e.apply(cu(this),n))}:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];const a=e.call(cu(this),t,...r);return ru.set(a,t.sort?t.sort():[t]),uu(a)}}function lu(e){return"function"===typeof e?su(e):(e instanceof IDBTransaction&&function(e){if(nu.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));nu.set(e,t)}(e),t=e,(Jl||(Jl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,ou):e);var t}function uu(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(uu(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&tu.set(t,e)})).catch((()=>{})),au.set(t,e),t}(e);if(iu.has(e))return iu.get(e);const t=lu(e);return t!==e&&(iu.set(e,t),au.set(t,e)),t}const cu=e=>au.get(e);function du(e,t){let{blocked:n,upgrade:r,blocking:i,terminated:a}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=indexedDB.open(e,t),s=uu(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(uu(o.result),e.oldVersion,e.newVersion,uu(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),s.then((e=>{a&&e.addEventListener("close",(()=>a())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),s}function fu(e){let{blocked:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",(()=>t())),uu(n).then((()=>{}))}const pu=["get","getKey","getAll","getAllKeys","count"],hu=["put","add","delete","clear"],gu=new Map;function mu(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(gu.get(t))return gu.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=hu.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!pu.includes(n))return;const a=async function(e){const t=this.transaction(e,i?"readwrite":"readonly");let a=t.store;for(var o=arguments.length,s=new Array(o>1?o-1:0),l=1;l<o;l++)s[l-1]=arguments[l];return r&&(a=a.index(s.shift())),(await Promise.all([a[n](...s),i&&t.done]))[0]};return gu.set(t,a),a}var _u;_u=e=>({...e,get:(t,n,r)=>mu(t,n)||e.get(t,n,r),has:(t,n)=>!!mu(t,n)||e.has(t,n)}),ou=_u(ou);class bu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const vu="@firebase/app",yu="0.7.24",Fu=new class{constructor(e){this.name=e,this._logLevel=Yl,this._logHandler=Ql,this._userLogHandler=null,Wl.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Kl))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?Zl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,Kl.DEBUG,...t),this._logHandler(this,Kl.DEBUG,...t)}log(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,Kl.VERBOSE,...t),this._logHandler(this,Kl.VERBOSE,...t)}info(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,Kl.INFO,...t),this._logHandler(this,Kl.INFO,...t)}warn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,Kl.WARN,...t),this._logHandler(this,Kl.WARN,...t)}error(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,Kl.ERROR,...t),this._logHandler(this,Kl.ERROR,...t)}}("@firebase/app"),Eu="[DEFAULT]",wu={[vu]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ku=new Map,xu=new Map;function Cu(e,t){try{e.container.addComponent(t)}catch(n){Fu.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Su(e){const t=e.name;if(xu.has(t))return Fu.debug(`There were multiple attempts to register component ${t}.`),!1;xu.set(t,e);for(const n of ku.values())Cu(n,e);return!0}function Du(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}const Tu=new Bl("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});class Au{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new zl("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tu.create("app-deleted",{appName:this._name})}}function Ou(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Eu;const t=ku.get(e);if(!t)throw Tu.create("no-app",{appName:e});return t}function Nu(e,t,n){var r;let i=null!==(r=wu[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const e=[`Unable to register library "${i}" with version "${t}":`];return a&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Fu.warn(e.join(" "))}Su(new zl(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}const Iu="firebase-heartbeat-store";let Ru=null;function Pu(){return Ru||(Ru=du("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Iu)}}).catch((e=>{throw Tu.create("storage-open",{originalErrorMessage:e.message})}))),Ru}async function Mu(e,t){try{const n=(await Pu()).transaction(Iu,"readwrite"),r=n.objectStore(Iu);return await r.put(t,Lu(e)),n.done}catch(n){throw Tu.create("storage-set",{originalErrorMessage:n.message})}}function Lu(e){return`${e.name}!${e.options.appId}`}const Bu=1024;class ju{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Uu(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=qu();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=qu(),{heartbeatsToSend:t,unsentEntries:n}=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Bu;const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Hu(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Hu(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Il(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function qu(){return(new Date).toISOString().substring(0,10)}class Uu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Pl()&&Ml().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{return(await Pu()).transaction(Iu).objectStore(Iu).get(Lu(e))}catch(t){throw Tu.create("storage-get",{originalErrorMessage:t.message})}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Mu(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Mu(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Hu(e){return Il(JSON.stringify({version:2,heartbeats:e})).length}var zu;zu="",Su(new zl("platform-logger",(e=>new bu(e)),"PRIVATE")),Su(new zl("heartbeat",(e=>new ju(e)),"PRIVATE")),Nu(vu,yu,zu),Nu(vu,yu,"esm2017"),Nu("fire-js","");Nu("firebase","9.8.1","app");const $u="@firebase/installations",Gu="0.5.9",Vu=1e4,Wu="w:0.5.9",Ku="FIS_v2",Zu=36e5,Yu=new Bl("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Xu(e){return e instanceof Ll&&e.code.includes("request-failed")}function Qu(e){let{projectId:t}=e;return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function Ju(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function ec(e,t){const n=(await t.json()).error;return Yu.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function tc(e){let{apiKey:t}=e;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function nc(e,t){let{refreshToken:n}=t;const r=tc(e);return r.append("Authorization",function(e){return`FIS_v2 ${e}`}(n)),r}async function rc(e){const t=await e();return t.status>=500&&t.status<600?e():t}function ic(e){return new Promise((t=>{setTimeout(t,e)}))}const ac=/^[cdef][\w-]{21}$/;function oc(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}(e);return ac.test(t)?t:""}catch(e){return""}}function sc(e){return`${e.appName}!${e.appId}`}const lc=new Map;function uc(e,t){const n=sc(e);cc(n,t),function(e,t){const n=fc();n&&n.postMessage({key:e,fid:t});pc()}(n,t)}function cc(e,t){const n=lc.get(e);if(n)for(const r of n)r(t)}let dc=null;function fc(){return!dc&&"BroadcastChannel"in self&&(dc=new BroadcastChannel("[Firebase] FID Change"),dc.onmessage=e=>{cc(e.data.key,e.data.fid)}),dc}function pc(){0===lc.size&&dc&&(dc.close(),dc=null)}const hc="firebase-installations-store";let gc=null;function mc(){return gc||(gc=du("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(hc)}})),gc}async function _c(e,t){const n=sc(e),r=(await mc()).transaction(hc,"readwrite"),i=r.objectStore(hc),a=await i.get(n);return await i.put(t,n),await r.done,a&&a.fid===t.fid||uc(e,t.fid),t}async function bc(e){const t=sc(e),n=(await mc()).transaction(hc,"readwrite");await n.objectStore(hc).delete(t),await n.done}async function vc(e,t){const n=sc(e),r=(await mc()).transaction(hc,"readwrite"),i=r.objectStore(hc),a=await i.get(n),o=t(a);return void 0===o?await i.delete(n):await i.put(o,n),await r.done,!o||a&&a.fid===o.fid||uc(e,o.fid),o}async function yc(e){let t;const n=await vc(e.appConfig,(n=>{const r=function(e){return wc(e||{fid:oc(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(Yu.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function(e,t){let{appConfig:n,heartbeatServiceProvider:r}=e,{fid:i}=t;const a=Qu(n),o=tc(n),s=r.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}const l={fid:i,authVersion:Ku,appId:n.appId,sdkVersion:Wu},u={method:"POST",headers:o,body:JSON.stringify(l)},c=await rc((()=>fetch(a,u)));if(c.ok){const e=await c.json();return{fid:e.fid||i,registrationStatus:2,refreshToken:e.refreshToken,authToken:Ju(e.authToken)}}throw await ec("Create Installation",c)}(e,t);return _c(e.appConfig,n)}catch(n){throw Xu(n)&&409===n.customData.serverCode?await bc(e.appConfig):await _c(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Fc(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Fc(e){let t=await Ec(e.appConfig);for(;1===t.registrationStatus;)await ic(100),t=await Ec(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await yc(e);return n||t}return t}function Ec(e){return vc(e,(e=>{if(!e)throw Yu.create("installation-not-found");return wc(e)}))}function wc(e){return 1===(t=e).registrationStatus&&t.registrationTime+Vu<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}async function kc(e,t){let{appConfig:n,heartbeatServiceProvider:r}=e;const i=function(e,t){let{fid:n}=t;return`${Qu(e)}/${n}/authTokens:generate`}(n,t),a=nc(n,t),o=r.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}const s={installation:{sdkVersion:Wu,appId:n.appId}},l={method:"POST",headers:a,body:JSON.stringify(s)},u=await rc((()=>fetch(i,l)));if(u.ok){return Ju(await u.json())}throw await ec("Generate Auth Token",u)}async function xc(e){let t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const r=await vc(e.appConfig,(r=>{if(!Tc(r))throw Yu.create("not-registered");const i=r.authToken;if(!n&&Ac(i))return r;if(1===i.requestStatus)return t=Cc(e,n),r;{if(!navigator.onLine)throw Yu.create("app-offline");const n=Oc(r);return t=Dc(e,n),n}})),i=t?await t:r.authToken;return i}async function Cc(e,t){let n=await Sc(e.appConfig);for(;1===n.authToken.requestStatus;)await ic(100),n=await Sc(e.appConfig);const r=n.authToken;return 0===r.requestStatus?xc(e,t):r}function Sc(e){return vc(e,(e=>{if(!Tc(e))throw Yu.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+Vu<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n}))}async function Dc(e,t){try{const n=await kc(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await _c(e.appConfig,r),n}catch(n){if(!Xu(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await _c(e.appConfig,n)}else await bc(e.appConfig);throw n}}function Tc(e){return void 0!==e&&2===e.registrationStatus}function Ac(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Zu}(e)}function Oc(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}async function Nc(e){const{registrationPromise:t}=await yc(e);t&&await t}function Ic(e){return Yu.create("missing-app-config-values",{valueName:e})}const Rc="installations",Pc=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Ic("App Configuration");if(!e.name)throw Ic("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ic(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Du(t,"heartbeat"),_delete:()=>Promise.resolve()}},Mc=e=>{const t=Du(e.getProvider("app").getImmediate(),Rc).getImmediate(),n={getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await yc(t);return r?r.catch(console.error):xc(t).catch(console.error),n.fid}(t),getToken:e=>async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=e;await Nc(n);return(await xc(n,t)).token}(t,e)};return n};Su(new zl(Rc,Pc,"PUBLIC")),Su(new zl("installations-internal",Mc,"PRIVATE")),Nu($u,Gu),Nu($u,Gu,"esm2017");const Lc="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Bc="google.c.a.c_id";var jc,qc;function Uc(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Hc(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length);for(let i=0;i<n.length;++i)r[i]=n.charCodeAt(i);return r}!function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"}(jc||(jc={})),function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(qc||(qc={}));const zc="fcm_token_details_db",$c="fcm_token_object_Store";const Gc="firebase-messaging-store";let Vc=null;function Wc(){return Vc||(Vc=du("firebase-messaging-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Gc)}})),Vc}async function Kc(e){const t=Yc(e),n=await Wc(),r=await n.transaction(Gc).objectStore(Gc).get(t);if(r)return r;{const t=await async function(e){if("databases"in indexedDB){const e=(await indexedDB.databases()).map((e=>e.name));if(!e.includes(zc))return null}let t=null;return(await du(zc,5,{upgrade:async(n,r,i,a)=>{var o;if(r<2)return;if(!n.objectStoreNames.contains($c))return;const s=a.objectStore($c),l=await s.index("fcmSenderId").get(e);if(await s.clear(),l)if(2===r){const e=l;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(o=e.createTime)&&void 0!==o?o:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"===typeof e.vapidKey?e.vapidKey:Uc(e.vapidKey)}}}else if(3===r){const e=l;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Uc(e.auth),p256dh:Uc(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Uc(e.vapidKey)}}}else if(4===r){const e=l;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Uc(e.auth),p256dh:Uc(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Uc(e.vapidKey)}}}}})).close(),await fu(zc),await fu("fcm_vapid_details_db"),await fu("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"===typeof e.createTime&&e.createTime>0&&"string"===typeof e.token&&e.token.length>0&&"string"===typeof t.auth&&t.auth.length>0&&"string"===typeof t.p256dh&&t.p256dh.length>0&&"string"===typeof t.endpoint&&t.endpoint.length>0&&"string"===typeof t.swScope&&t.swScope.length>0&&"string"===typeof t.vapidKey&&t.vapidKey.length>0}(t)?t:null}(e.appConfig.senderId);if(t)return await Zc(e,t),t}}async function Zc(e,t){const n=Yc(e),r=(await Wc()).transaction(Gc,"readwrite");return await r.objectStore(Gc).put(t,n),await r.done,t}function Yc(e){let{appConfig:t}=e;return t.appId}const Xc=new Bl("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});async function Qc(e,t){const n={method:"DELETE",headers:await ed(e)};try{const r=await fetch(`${Jc(e.appConfig)}/${t}`,n),i=await r.json();if(i.error){const e=i.error.message;throw Xc.create("token-unsubscribe-failed",{errorInfo:e})}}catch(r){throw Xc.create("token-unsubscribe-failed",{errorInfo:r})}}function Jc(e){let{projectId:t}=e;return`https://fcmregistrations.googleapis.com/v1/projects/${t}/registrations`}async function ed(e){let{appConfig:t,installations:n}=e;const r=await n.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${r}`})}function td(e){let{p256dh:t,auth:n,endpoint:r,vapidKey:i}=e;const a={web:{endpoint:r,auth:n,p256dh:t}};return i!==Lc&&(a.web.applicationPubKey=i),a}async function nd(e){const t=await async function(e,t){const n=await e.pushManager.getSubscription();if(n)return n;return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Hc(t)})}(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:Uc(t.getKey("auth")),p256dh:Uc(t.getKey("p256dh"))},r=await Kc(e.firebaseDependencies);if(r){if(function(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,i=t.auth===e.auth,a=t.p256dh===e.p256dh;return n&&r&&i&&a}(r.subscriptionOptions,n))return Date.now()>=r.createTime+6048e5?async function(e,t){try{const n=await async function(e,t){const n=await ed(e),r=td(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let a;try{const n=await fetch(`${Jc(e.appConfig)}/${t.token}`,i);a=await n.json()}catch(o){throw Xc.create("token-update-failed",{errorInfo:o})}if(a.error){const e=a.error.message;throw Xc.create("token-update-failed",{errorInfo:e})}if(!a.token)throw Xc.create("token-update-no-token");return a.token}(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Zc(e.firebaseDependencies,r),n}catch(n){throw await rd(e),n}}(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Qc(e.firebaseDependencies,r.token)}catch(i){}return id(e.firebaseDependencies,n)}return id(e.firebaseDependencies,n)}async function rd(e){const t=await Kc(e.firebaseDependencies);t&&(await Qc(e.firebaseDependencies,t.token),await async function(e){const t=Yc(e),n=(await Wc()).transaction(Gc,"readwrite");await n.objectStore(Gc).delete(t),await n.done}(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function id(e,t){const n=await async function(e,t){const n=await ed(e),r=td(t),i={method:"POST",headers:n,body:JSON.stringify(r)};let a;try{const t=await fetch(Jc(e.appConfig),i);a=await t.json()}catch(o){throw Xc.create("token-subscribe-failed",{errorInfo:o})}if(a.error){const e=a.error.message;throw Xc.create("token-subscribe-failed",{errorInfo:e})}if(!a.token)throw Xc.create("token-subscribe-no-token");return a.token}(e,t),r={token:n,createTime:Date.now(),subscriptionOptions:t};return await Zc(e,r),r.token}function ad(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const i=t.notification.image;i&&(e.notification.image=i)}(t,e),function(e,t){if(!t.data)return;e.data=t.data}(t,e),function(e,t){if(!t.fcmOptions)return;e.fcmOptions={};const n=t.fcmOptions.link;n&&(e.fcmOptions.link=n);const r=t.fcmOptions.analytics_label;r&&(e.fcmOptions.analyticsLabel=r)}(t,e),t}function od(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}function sd(e){return Xc.create("missing-app-config-values",{valueName:e})}od("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),od("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class ld{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=function(e){if(!e||!e.options)throw sd("App Configuration Object");if(!e.name)throw sd("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw sd(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:r,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}async function ud(e){try{e.swRegistration=await navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}),e.swRegistration.update().catch((()=>{}))}catch(t){throw Xc.create("failed-service-worker-registration",{browserErrorMessage:t.message})}}async function cd(e,t){if(!navigator)throw Xc.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw Xc.create("permission-blocked");return await async function(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Lc)}(e,null===t||void 0===t?void 0:t.vapidKey),await async function(e,t){if(t||e.swRegistration||await ud(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw Xc.create("invalid-sw-registration");e.swRegistration=t}}(e,null===t||void 0===t?void 0:t.serviceWorkerRegistration),nd(e)}async function dd(e,t,n){const r=function(e){switch(e){case qc.NOTIFICATION_CLICKED:return"notification_open";case qc.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n["google.c.a.c_id"],message_name:n["google.c.a.c_l"],message_time:n["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}async function fd(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===qc.PUSH_RECEIVED&&("function"===typeof e.onMessageHandler?e.onMessageHandler(ad(n)):e.onMessageHandler.next(ad(n)));const r=n.data;var i;"object"===typeof(i=r)&&i&&Bc in i&&"1"===r["google.c.a.e"]&&await dd(e,n.messageType,r)}const pd="@firebase/messaging",hd="0.9.13",gd=e=>{const t=new ld(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",(e=>fd(t,e))),t},md=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:e=>cd(t,e)}};async function _d(){try{await Ml()}catch(e){return!1}return"undefined"!==typeof window&&Pl()&&!("undefined"===typeof navigator||!navigator.cookieEnabled)&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}Su(new zl("messaging",gd,"PUBLIC")),Su(new zl("messaging-internal",md,"PRIVATE")),Nu(pd,hd),Nu(pd,hd,"esm2017");const bd=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ou();return _d().then((e=>{if(!e)throw Xc.create("unsupported-browser")}),(e=>{throw Xc.create("indexed-db-unsupported")})),Du(Hl(e),"messaging").getImmediate()}(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!==typeof t){t={name:t}}const n=Object.assign({name:Eu,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!==typeof r||!r)throw Tu.create("bad-app-name",{appName:String(r)});const i=ku.get(r);if(i){if(ql(e,i.options)&&ql(n,i.config))return i;throw Tu.create("duplicate-app",{appName:r})}const a=new Vl(r);for(const s of xu.values())a.addComponent(s);const o=new Au(e,n,a);return ku.set(r,o),o}(Oi.qe)),vd=e=>{const[t,n]=(0,Ie.useState)(null);return async function(e,t){return cd(e=Hl(e),t)}(bd,{vapidKey:e}).then((e=>{e&&n(e)})).catch((e=>{})),t},yd=()=>{const e=ii(),t=vd(Oi.um),[n]=(0,Di.Vd)();return(0,Ie.useEffect)((()=>{t&&n(t)}),[t]),(0,Ie.useEffect)((()=>{const t=t=>{const{newPath:n}=t.data;e(n)};return navigator.serviceWorker.addEventListener("message",t),()=>{navigator.serviceWorker.removeEventListener("message",t)}}),[]),null};var Fd,Ed=__webpack_require__(5114);function wd(){return wd=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wd.apply(this,arguments)}const kd=(e,t)=>{let{title:n,titleId:r,...i}=e;return Ie.createElement("svg",wd({width:14,height:15,viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?Ie.createElement("title",{id:r},n):null,Fd||(Fd=Ie.createElement("path",{d:"M7 6.7929L10.5355 3.25736C10.7308 3.0621 11.0474 3.0621 11.2426 3.25736C11.4379 3.45262 11.4379 3.76921 11.2426 3.96447L7.70711 7.5L11.2426 11.0355C11.4379 11.2308 11.4379 11.5474 11.2426 11.7426C11.0474 11.9379 10.7308 11.9379 10.5355 11.7426L7 8.20711L3.46447 11.7426C3.26921 11.9379 2.95262 11.9379 2.75736 11.7426C2.5621 11.5474 2.5621 11.2308 2.75736 11.0355L6.2929 7.5L2.75736 3.96447C2.5621 3.76921 2.5621 3.45262 2.75736 3.25736C2.95262 3.0621 3.26921 3.0621 3.46447 3.25736L7 6.7929Z",fill:"black",fillOpacity:.5})))},xd=(0,Ie.forwardRef)(kd),Cd=i.ZP.div`
  position: relative;
  margin-top: 15px;
  pointer-events: all;
  width: 406px;
  padding: 16px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 25px 50px rgba(31, 41, 55, 0.25);
  display: flex;
  flex-direction: column;
  gap: 12px;
  .tip {
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: #344054;
    .title {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }
    .desc {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }
  }
  .btns {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 16px;
  }
  .close {
    cursor: pointer;
    position: absolute;
    top: 16px;
    right: 16px;
  }
`;function Sd(e){let{handleInstall:t,closePrompt:n}=e;return(0,c.jsx)(Ed.Z,{mask:!1,children:(0,c.jsxs)(Cd,{children:[(0,c.jsx)(xd,{className:"close",onClick:n}),(0,c.jsxs)("div",{className:"tip",children:[(0,c.jsx)("h2",{className:"title",children:"Install web app on desktop?"}),(0,c.jsx)("p",{className:"desc",children:"Add to desktop for quick access to this app."})]}),(0,c.jsxs)("div",{className:"btns",children:[(0,c.jsx)(Ni.Z,{className:"ghost cancel small",onClick:n,children:"Cancel"}),(0,c.jsx)(Ni.Z,{className:"main small",onClick:t,children:"Install"})]})]})})}function Dd(){const{setCanneled:e,prompted:t}={setCanneled:()=>{localStorage.setItem(Oi.R1,!0)},prompted:!!localStorage.getItem(Oi.R1),resetPrompt:()=>{localStorage.removeItem(Oi.R1)}},n=(0,Ie.useRef)(null),[r,i]=(0,Ie.useState)(!1);(0,Ie.useEffect)((()=>{const e=e=>{e.preventDefault(),n.current=e,i(!0)},t=()=>{n.current=null,i(!1)};return window.addEventListener("beforeinstallprompt",e),window.addEventListener("appinstalled",t),()=>{window.removeEventListener("beforeinstallprompt",e),window.removeEventListener("appinstalled",t)}}),[]);return!r||t?null:(0,c.jsx)(Sd,{handleInstall:async()=>{if(i(!1),!n.current)return;n.current.prompt();const{outcome:e}=await n.current.userChoice;n.current=null},closePrompt:async()=>{e(),i(!1)}})}var Td;function Ad(){return Ad=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ad.apply(this,arguments)}const Od=(e,t)=>{let{title:n,titleId:r,...i}=e;return Ie.createElement("svg",Ad({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?Ie.createElement("title",{id:r},n):null,Td||(Td=Ie.createElement("path",{d:"M8.79053 19.3376C10.0779 20.3775 11.7161 21.0002 13.4999 21.0002C14.6315 21.0002 15.7064 20.7491 16.6701 20.299L20.1027 20.9856C20.3486 21.0348 20.6029 20.9579 20.7802 20.7806C20.9575 20.6032 21.0345 20.349 20.9853 20.1031L20.2988 16.6702C20.7488 15.7065 20.9999 14.6318 20.9999 13.5002C20.9999 11.7168 20.3774 10.0788 19.338 8.79163C19.4443 9.3448 19.4999 9.91599 19.4999 10.5002C19.4999 11.0652 19.4479 11.618 19.3483 12.1541C19.4475 12.5868 19.4999 13.0374 19.4999 13.5002C19.4999 14.4837 19.2638 15.41 18.8458 16.2274C18.7689 16.3779 18.745 16.5501 18.7782 16.7159L19.2938 19.2941L16.7159 18.7784C16.55 18.7452 16.3778 18.7691 16.2273 18.8461C15.4098 19.2641 14.4835 19.5002 13.4999 19.5002C13.037 19.5002 12.5864 19.4478 12.1537 19.3486C11.6176 19.4481 11.0648 19.5002 10.4999 19.5002C9.91613 19.5002 9.34454 19.4443 8.79053 19.3376ZM10.5 3C6.35788 3 3.00001 6.35786 3.00001 10.5C3.00001 11.6316 3.2511 12.7064 3.70112 13.6701L3.01458 17.103C2.9654 17.3489 3.04237 17.6031 3.2197 17.7804C3.39702 17.9577 3.65123 18.0347 3.89713 17.9855L7.32974 17.2988C8.29349 17.7489 9.36836 18 10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3Z",fill:"#344054"})))},Nd=(0,Ie.forwardRef)(Od);var Id;function Rd(){return Rd=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rd.apply(this,arguments)}const Pd=(e,t)=>{let{title:n,titleId:r,...i}=e;return Ie.createElement("svg",Rd({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?Ie.createElement("title",{id:r},n):null,Id||(Id=Ie.createElement("path",{d:"M17.7541 13.9999C18.9961 13.9999 20.0029 15.0068 20.0029 16.2488V17.1673C20.0029 17.7406 19.8237 18.2997 19.4903 18.7662C17.9445 20.9294 15.4202 22.0011 11.9999 22.0011C8.57891 22.0011 6.05595 20.9289 4.51379 18.7646C4.18182 18.2987 4.00342 17.7409 4.00342 17.1688V16.2488C4.00342 15.0068 5.01027 13.9999 6.25229 13.9999H17.7541ZM11.9999 2.00464C14.7613 2.00464 16.9999 4.24321 16.9999 7.00464C16.9999 9.76606 14.7613 12.0046 11.9999 12.0046C9.23845 12.0046 6.99988 9.76606 6.99988 7.00464C6.99988 4.24321 9.23845 2.00464 11.9999 2.00464Z",fill:"#344054"})))},Md=(0,Ie.forwardRef)(Pd);var Ld;function Bd(){return Bd=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bd.apply(this,arguments)}const jd=(e,t)=>{let{title:n,titleId:r,...i}=e;return Ie.createElement("svg",Bd({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?Ie.createElement("title",{id:r},n):null,Ld||(Ld=Ie.createElement("path",{d:"M5.99988 6.5C5.99988 5.11929 7.11917 4 8.49988 4H15.4999C16.8806 4 17.9999 5.11929 17.9999 6.5V19.5C17.9999 19.6881 17.8944 19.8602 17.7268 19.9456C17.5592 20.0309 17.3579 20.015 17.2058 19.9044L11.9999 16.1183L6.79396 19.9044C6.64187 20.015 6.44057 20.0309 6.27299 19.9456C6.1054 19.8602 5.99988 19.6881 5.99988 19.5V6.5Z",fill:"#344054"})))},qd=(0,Ie.forwardRef)(jd);var Ud;function Hd(){return Hd=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hd.apply(this,arguments)}const zd=(e,t)=>{let{title:n,titleId:r,...i}=e;return Ie.createElement("svg",Hd({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?Ie.createElement("title",{id:r},n):null,Ud||(Ud=Ie.createElement("path",{d:"M13.821 6.5H19.75C20.8867 6.5 21.8266 7.34297 21.9785 8.43788L21.9948 8.59595L22 8.75V17.75C22 18.9409 21.0748 19.9156 19.904 19.9948L19.75 20H4.25C3.05914 20 2.08436 19.0748 2.00519 17.904L2 17.75V10.499L8.20693 10.5L8.40335 10.4914C8.79396 10.4572 9.16896 10.3214 9.49094 10.0977L9.64734 9.9785L13.821 6.5ZM8.20693 4C8.66749 4 9.1153 4.14129 9.49094 4.40235L9.64734 4.5215L11.75 6.273L8.68706 8.82617L8.60221 8.88738C8.51363 8.94232 8.41452 8.9782 8.31129 8.9927L8.20693 9L2 8.999V6.25C2 5.05914 2.92516 4.08436 4.09595 4.00519L4.25 4H8.20693Z",fill:"#344054"})))},$d=(0,Ie.forwardRef)(zd);function Gd(){!function(){const e=new Al.Z;(0,Ie.useEffect)((()=>{e.isSupported()&&e.asyncSetBadge(2).catch((e=>{}))}),[]),e.isSupported()}();const e=ri("/"),t=ri("/chat"),{pathname:n}=ni(),{loginUid:r,ui:{ready:i,remeberedNavs:{chat:a,contact:o}}}=(0,ki.v9)((e=>({ui:e.ui,loginUid:e.authData.uid}))),{loading:s}=function(){const{rehydrate:e,rehydrated:t}=ys(),{loginUid:n,token:r}=(0,ki.v9)((e=>({loginUid:e.authData.uid,token:e.authData.token}))),{setStreamingReady:i}=Tl(),[a,{isLoading:o,isSuccess:s,isError:l,data:u}]=Is(),[c,{isLoading:d,isSuccess:f,isError:p,data:h}]=(0,Ws.Uk)(),[g,{isLoading:m,isSuccess:_,isError:b,data:v}]=Na();(0,Ie.useEffect)((()=>(Es(),e(),()=>{i(!1)})),[]),(0,Ie.useEffect)((()=>{t&&(c(),g(),a())}),[t]);const y=n&&t&&!!r;return(0,Ie.useEffect)((()=>{i(y)}),[y]),{loading:d||m||o||!t,error:p&&b&&l,success:f&&_&&s,data:{contacts:h,server:v,favorites:u}}}();if(s||!i)return(0,c.jsx)(Po,{});if(n.startsWith("/setting"))return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(yd,{}),(0,c.jsx)(ci,{})]});const l=t?"/chat":a||"/chat",u=o||"/contacts";return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(Dd,{}),(0,c.jsx)(yd,{}),(0,c.jsxs)(Ya,{children:[(0,c.jsxs)("div",{className:"col left",children:[(0,c.jsx)(Ja,{uid:r}),(0,c.jsxs)("nav",{className:"link_navs",children:[(0,c.jsx)(Fi,{className:"link "+(e?"active":""),to:l,children:(0,c.jsx)(Qo,{tip:"Chat",children:(0,c.jsx)(Nd,{})})}),(0,c.jsx)(Fi,{className:"link",to:u,children:(0,c.jsx)(Qo,{tip:"Members",children:(0,c.jsx)(Md,{})})}),(0,c.jsx)(Fi,{className:"link",to:"/favs",children:(0,c.jsx)(Qo,{tip:"Favorites",children:(0,c.jsx)(qd,{className:"fav"})})}),(0,c.jsx)(Fi,{className:"link",to:"/files",children:(0,c.jsx)(Qo,{tip:"Files",children:(0,c.jsx)($d,{})})})]}),(0,c.jsx)("div",{className:"divider"}),(0,c.jsx)(ts,{})]}),(0,c.jsx)("div",{className:"col right",children:(0,c.jsx)(ci,{})})]})]})}var Vd=__webpack_require__(9983);function Wd(e){return(0,Vd.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]})(e)}const Kd=i.ZP.div`
  display: flex;
  height: 100%;
  padding: 8px 48px 10px 0;
  > .left {
    background-color: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 268px;
    box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.05);
    height: 100%;
    overflow: auto;
    border-radius: 16px 0 0 16px;
    .list {
      margin: 12px 8px;
      &.dms {
        flex: 1;
      }
      .title {
        padding: 0 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 4px;
        cursor: pointer;
        > .txt {
          user-select: none;
          display: flex;
          align-items: center;
          gap: 5px;
          font-weight: bold;
          font-size: 12px;
          line-height: 20px;
          color: #78787c;
        }
        .icon {
          transition: transform 0.5s ease;
          transform-origin: center;
        }
        .add_icon {
          width: 18px;
          height: 18px;
        }
      }
      > .nav {
        display: flex;
        flex-direction: column;
        gap: 4px;
        a {
          text-decoration: none;
        }
        .session {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding: 4px 8px;
          border-radius: 4px;
          &:hover,
          &.active {
            background: rgba(116, 127, 141, 0.1);
          }

          .avatar {
            /* todo */
          }
          .details {
            display: flex;
            flex-direction: column;
            width: 100%;
            .up {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .name {
                font-weight: 600;
                font-size: 14px;
                line-height: 20px;
                color: #52525b;
                max-width: 112px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              time {
                white-space: nowrap;
                font-weight: 500;
                font-size: 12px;
                line-height: 18px;
                color: #78787c;
              }
            }
            .down {
              display: flex;
              justify-content: space-between;
              .msg {
                min-height: 18px;
                font-weight: normal;
                font-size: 12px;
                line-height: 18px;
                color: #78787c;
                white-space: nowrap;
                overflow: hidden;
                width: 140px;
                text-overflow: ellipsis;
              }
              > .badge {
                /* letter-spacing: -1px; */
                /* padding: 2px; */
                color: #fff;
                height: 20px;
                min-width: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 10px;
                background: #1fe1f9;
                font-weight: 900;
                font-size: 10px;
                line-height: 10px;
                &.dot {
                  min-width: unset;
                  width: 6px;
                  height: 6px;
                  padding: 0;
                }
                &.mute {
                  background: #bfbfbf;
                }
              }
            }
          }
        }
        /* drop files effect */
        .drop_over {
          box-shadow: inset 0 0 0 2px #52edff;
        }
      }
      &.collapse {
        .title .icon {
          transform: rotate(-90deg);
        }
        > .nav > .link:not(.active) {
          display: none;
        }
      }
    }
  }
  > .right {
    border-radius: 0 16px 16px 0;
    width: 100%;
    &.placeholder {
      background-color: #fff;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;var Zd;function Yd(){return Yd=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yd.apply(this,arguments)}const Xd=(e,t)=>{let{title:n,titleId:r,...i}=e;return Ie.createElement("svg",Yd({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?Ie.createElement("title",{id:r},n):null,Zd||(Zd=Ie.createElement("path",{d:"M12.75 4.125C12.75 3.50368 12.2463 3 11.625 3C11.0037 3 10.5 3.50368 10.5 4.125V10.5H4.125C3.50368 10.5 3 11.0037 3 11.625C3 12.2463 3.50368 12.75 4.125 12.75H10.5V19.125C10.5 19.7463 11.0037 20.25 11.625 20.25C12.2463 20.25 12.75 19.7463 12.75 19.125V12.75H19.125C19.7463 12.75 20.25 12.2463 20.25 11.625C20.25 11.0037 19.7463 10.5 19.125 10.5H12.75V4.125Z",fill:"#78787C"})))},Qd=(0,Ie.forwardRef)(Xd);var Jd;function ef(){return ef=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ef.apply(this,arguments)}const tf=(e,t)=>{let{title:n,titleId:r,...i}=e;return Ie.createElement("svg",ef({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?Ie.createElement("title",{id:r},n):null,Jd||(Jd=Ie.createElement("path",{d:"M6.48667 11.6667L6.83667 8.33333H3.325V6.66667H7L7.43333 2.5H9.10833L8.66667 6.66667H11.9833L12.4167 2.5H14.0917L13.65 6.66667H16.625V8.33333H13.4667L13.1167 11.6667H16.6167V13.3333H12.9333L12.4917 17.5H10.8083L11.2417 13.3333H7.91667L7.475 17.5H5.8L6.23333 13.3333H3.25V11.6667H6.4H6.48667ZM8.1625 11.6667H11.4875L11.8375 8.33333H8.5125L8.1625 11.6667Z",fill:"#616161"})))},nf=(0,Ie.forwardRef)(tf);var rf,af;function of(){return of=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},of.apply(this,arguments)}const sf=(e,t)=>{let{title:n,titleId:r,...i}=e;return Ie.createElement("svg",of({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?Ie.createElement("title",{id:r},n):null,rf||(rf=Ie.createElement("path",{d:"M6.83667 8.33333L6.48667 11.6667H6.4H3.25V13.3333H6.23333L5.8 17.5H7.475L7.91667 13.3333H11.2417L10.8083 17.5H12.4917L12.9333 13.3333H16.6167V11.6667H13.1167L13.2917 10H11.6625L11.4875 11.6667H8.1625L8.5125 8.33333H10.8334V6.66667H8.66667L9.10833 2.5H7.43333L7 6.66667H3.325V8.33333H6.83667Z",fill:"#616161"})),af||(af=Ie.createElement("path",{d:"M16.6875 4.16675V3.33341C16.6875 2.40008 15.875 1.66675 15 1.66675C14.125 1.66675 13.3333 2.40008 13.3333 3.33341V4.16675C12.8731 4.16675 12.5 4.53985 12.5 5.00008V7.50008C12.5 7.96031 12.8731 8.33341 13.3333 8.33341H15H16.6667C17.1269 8.33341 17.5 7.96031 17.5 7.50008V4.97925C17.5 4.53051 17.1362 4.16675 16.6875 4.16675ZM15.8333 4.16675H14.1667V3.33341C14.1667 2.85722 14.5556 2.50008 15 2.50008C15.4444 2.50008 15.8333 2.85722 15.8333 3.33341V4.16675Z",fill:"#616161"})))},lf=(0,Ie.forwardRef)(sf),uf=i.ZP.div`
  display: flex;
  &.muted path {
    fill: #d0d5dd;
  }
`;function cf(e){let{personal:t=!1,muted:n=!1,className:r}=e;return(0,c.jsx)(uf,{className:`${n?"muted":""} ${r}`,children:t?(0,c.jsx)(lf,{}):(0,c.jsx)(nf,{})})}var df,ff,pf;function hf(){return hf=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hf.apply(this,arguments)}const gf=(e,t)=>{let{title:n,titleId:r,...i}=e;return Ie.createElement("svg",hf({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?Ie.createElement("title",{id:r},n):null,df||(df=Ie.createElement("path",{d:"M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z",fill:"url(#paint0_linear_14171_23293)"})),ff||(ff=Ie.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.2431 5.96725C12.4162 5.86325 12.6357 5.87375 12.7982 5.99425C12.9602 6.11525 13.0342 6.32125 12.9857 6.51725L11.9857 10.5173C11.9297 10.7403 11.7297 10.8963 11.5002 10.8963H4.50018C4.27068 10.8963 4.07068 10.7397 4.01468 10.5173L3.01468 6.51725C2.96618 6.32125 3.04018 6.11525 3.20218 5.99425C3.36518 5.87425 3.58418 5.86375 3.75768 5.96725L5.84918 7.22225L7.58468 4.61875C7.59654 4.60096 7.61307 4.58921 7.62965 4.57743C7.63964 4.57033 7.64966 4.56321 7.65868 4.55475L7.17718 4.07275C7.08018 3.97575 7.08018 3.81625 7.17718 3.71925L7.82368 3.07275C7.92068 2.97575 8.08018 2.97575 8.17718 3.07275L8.82368 3.71925C8.92068 3.81625 8.92068 3.97575 8.82368 4.07275L8.34218 4.55475C8.3512 4.56338 8.3614 4.57062 8.37161 4.57787C8.38802 4.58951 8.40447 4.60119 8.41618 4.61875L10.1517 7.22225L12.2431 5.96725ZM4.00025 11.3962H12.0002V12.3963H4.00025V11.3962Z",fill:"#ECE9FE"})),pf||(pf=Ie.createElement("defs",null,Ie.createElement("linearGradient",{id:"paint0_linear_14171_23293",x1:0,y1:0,x2:16,y2:-1.66785e-9,gradientUnits:"userSpaceOnUse"},Ie.createElement("stop",{stopColor:"#7F56D9"}),Ie.createElement("stop",{offset:1,stopColor:"#9E77ED"})))))},mf=(0,Ie.forwardRef)(gf);var _f;function bf(){return bf=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bf.apply(this,arguments)}const vf=(e,t)=>{let{title:n,titleId:r,...i}=e;return Ie.createElement("svg",bf({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?Ie.createElement("title",{id:r},n):null,_f||(_f=Ie.createElement("path",{d:"M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.3596 22 8.77516 21.6039 7.35578 20.8583L3.06538 21.9753C2.6111 22.0937 2.1469 21.8213 2.02858 21.367C1.99199 21.2266 1.99198 21.0791 2.02855 20.9386L3.1449 16.6502C2.3972 15.2294 2 13.6428 2 12C2 6.47715 6.47715 2 12 2Z",fill:"#22CCEE"})))},yf=(0,Ie.forwardRef)(vf);var Ff;function Ef(){return Ef=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ef.apply(this,arguments)}const wf=(e,t)=>{let{title:n,titleId:r,...i}=e;return Ie.createElement("svg",Ef({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?Ie.createElement("title",{id:r},n):null,Ff||(Ff=Ie.createElement("path",{d:"M7.7716 2.43923L8.84819 2.09522C9.85701 1.77287 10.9349 2.29382 11.3669 3.31256L12.2266 5.33991C12.6013 6.22336 12.3934 7.26227 11.7126 7.9084L9.81832 9.70641C9.9352 10.7819 10.2967 11.8409 10.9029 12.8834C11.509 13.9259 12.266 14.7907 13.1739 15.4778L15.4491 14.7191C16.3115 14.4315 17.2507 14.762 17.7797 15.5392L19.0121 17.3498C19.627 18.2532 19.5164 19.4995 18.7534 20.2655L17.9356 21.0865C17.1217 21.9036 15.9592 22.2 14.8838 21.8645C12.3449 21.0726 10.0106 18.7214 7.88083 14.8109C5.74796 10.8947 4.99521 7.57214 5.62258 4.84313C5.88658 3.69482 6.70409 2.78033 7.7716 2.43923Z",fill:"#70707B"})))},kf=(0,Ie.forwardRef)(wf);var xf;function Cf(){return Cf=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cf.apply(this,arguments)}const Sf=(e,t)=>{let{title:n,titleId:r,...i}=e;return Ie.createElement("svg",Cf({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?Ie.createElement("title",{id:r},n):null,xf||(xf=Ie.createElement("path",{d:"M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12ZM18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z",fill:"#616161"})))},Df=(0,Ie.forwardRef)(Sf),Tf=i.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  width: 432px;
  gap: 4px;
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .name {
    user-select: text;
    font-weight: bold;
    font-size: 18px;
    line-height: 100%;
    color: #1c1c1e;
  }
  .email {
    user-select: text;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #98a2b3;
  }
  .intro {
    color: #344054;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  .icons {
    margin-top: 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    .icon {
      cursor: pointer;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #22ccee;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 4px;
      background: #f9fafb;
      border-radius: 8px;
      width: 128px;
      padding: 14px 0 12px 0;

      &:not(.disabled):hover {
        background: #f2f4f7;
      }
      &.call,
      &.more {
        svg path {
          fill: #22ccee;
        }
      }
      &.disabled {
        color: #667085;
        svg path {
          fill: #667085;
        }
      }
      .txt {
        user-select: none;
      }
    }
  }
  .line {
    width: 100%;
    height: 1px;
    border: none;
    background-color: rgba(0, 0, 0, 0.1);
  }
  &.card {
    padding: 16px;
    width: 280px;
    background: #ffffff;
    box-shadow: 0px 20px 25px 20px rgba(31, 41, 55, 0.1),
      0px 10px 10px rgba(31, 41, 55, 0.04);
    border-radius: 6px;
    .icons {
      padding-bottom: 2px;
    }
  }
`,Af=i.ZP.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 4px;
  background-color: #fff;
  box-shadow: 0px 20px 25px 20px rgba(31, 41, 55, 0.1),
    0px 10px 10px rgba(31, 41, 55, 0.04);
  border-radius: 12px;
  min-width: 200px;
  .item {
    position: relative;
    display: flex;
    align-items: center;
    gap: 14px;
    white-space: nowrap;
    cursor: pointer;
    border-radius: 6px;
    padding: 6px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #616161;
    .icon {
      width: 20px;
      height: 20px;
      path {
        fill: #475467;
      }
    }
    &.sb {
      justify-content: space-between;
    }
    &:hover {
      background-color: #22ccee;
      color: #fff;
      .icon {
        path {
          fill: #fff;
        }
      }
    }
    &.underline {
      margin-bottom: 9px;
      &:before {
        position: absolute;
        content: "";
        left: 6px;
        bottom: -4px;
        display: block;
        padding: 0 6px;
        box-sizing: border-box;
        width: calc(100% - 12px);
        height: 1px;
        background-color: #f2f4f7;
      }
    }
    &.danger {
      color: #a11043;
      &:hover {
        background-color: #b42318;
        color: #fff;
      }
    }
    &[data-disabled="true"] {
      color: #a4a8b3;
      .icon {
        path {
          fill: #a4a8b3;
        }
      }
    }
  }
`;function Of(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{l(r.next(e))}catch(t){a(t)}}function s(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}l((r=r.apply(e,t||[])).next())}))}function Nf(e){return Of(this,void 0,void 0,(function*(){const t=URL.createObjectURL(e),n=yield function(e){return Of(this,void 0,void 0,(function*(){return new Promise((function(t,n){const r=document.createElement("img");r.crossOrigin="anonymous",r.src=e,r.onload=function(e){const n=e.target;t(n)},r.onabort=n,r.onerror=n}))}))}(t);return yield function(e){return Of(this,void 0,void 0,(function*(){return new Promise((function(t,n){const r=document.createElement("canvas"),i=r.getContext("2d");if(i){const{width:a,height:o}=e;r.width=a,r.height=o,i.drawImage(e,0,0,a,o),r.toBlob((function(e){e?t(e):n("Cannot get blob from image element")}),"image/png",1)}}))}))}(n)}))}function If(e){return Of(this,void 0,void 0,(function*(){const t={[e.type]:e},n=new ClipboardItem(t);yield navigator.clipboard.write([n])}))}function Rf(e){return Of(this,void 0,void 0,(function*(){const t=yield function(e){return Of(this,void 0,void 0,(function*(){const t=yield fetch(`${e}`);return yield t.blob()}))}(e);if(function(e){return e.type.includes("jpeg")}(t)){const e=yield Nf(t);return yield If(e),t}if(function(e){return e.type.includes("png")}(t))return yield If(t),t;throw new Error("Cannot copy this type of image to clipboard")}))}const Pf=e=>{const{enableToast:t=!0}=e||{},[n,i]=(0,Ie.useState)(!1);(0,Ie.useEffect)((()=>{n&&t&&r.ZP.success("Copied!")}),[n]);const a=e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select();const r=document.execCommand("copy");return document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n)),r};return{copied:n,copy:function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=0;return n||(t?Rf(e).then((()=>{i(!0),r=setTimeout((()=>{i(!1)}),500)})):(i(a(e)),r=setTimeout((()=>{i(!1)}),500))),()=>{clearTimeout(r)}}}};function Mf(e){let{uid:t=null,type:n="embed",cid:i=null}=e;const a=ii(),[o,{isSuccess:s}]=(0,Ws.QQ)(),[l,{isSuccess:u}]=yl(),{copy:d}=Pf(),{data:f,channel:p,loginUid:h,isAdmin:g}=(0,ki.v9)((e=>{var n;return{data:e.contacts.byId[t],channel:e.channels.byId[i],loginUid:e.authData.uid,isAdmin:null===(n=e.contacts.byId[e.authData.uid])||void 0===n?void 0:n.is_admin}}));if((0,Ie.useEffect)((()=>{(u||s)&&(r.ZP.success("Remove Successfully"),s&&a("/contacts"))}),[u,s]),!f)return null;const{name:m,email:_,avatar:b}=f,v=e=>{let{from:t="channel",uid:n}=e;("channel"==t?l:o)("channel"==t?{id:+i,members:[+n]}:n),br()},y="card"==n&&h!=t,F="embed"==n&&g,E=i&&!(null!==p&&void 0!==p&&p.is_public)&&(g||(null===p||void 0===p?void 0:p.owner)==h)&&(null===p||void 0===p?void 0:p.owner)!=t,w=y||_||E||F;return(0,c.jsxs)(Tf,{className:n,children:[(0,c.jsx)(Xa.Z,{className:"avatar",url:b,name:m}),(0,c.jsx)("h2",{className:"name",children:m}),(0,c.jsx)("span",{className:"email",children:_}),(0,c.jsxs)("ul",{className:"icons",children:[(0,c.jsx)(Fi,{to:`/chat/dm/${t}`,children:(0,c.jsxs)("li",{className:"icon chat",children:[(0,c.jsx)(yf,{}),(0,c.jsx)("span",{className:"txt",children:"Message"})]})}),"embed"==n&&(0,c.jsxs)("li",{className:"icon call",onClick:()=>{r.ZP.success("cooming soon...")},children:[(0,c.jsx)(kf,{}),(0,c.jsx)("span",{className:"txt",children:"Call"})]}),(0,c.jsx)(Yo,{disabled:!w,interactive:!0,popperOptions:{strategy:"fixed"},placement:"bottom-start",trigger:"click",hideOnClick:!0,content:(0,c.jsxs)(Af,{children:[y&&(0,c.jsx)("li",{className:"item",children:"Call"}),_&&(0,c.jsx)("li",{className:"item",onClick:()=>{d(_),br()},children:"Copy Email"}),E&&(0,c.jsx)("li",{className:"item danger",onClick:v.bind(null,{uid:t}),children:"Remove from Channel"}),F&&(0,c.jsx)("li",{className:"item danger",onClick:v.bind(null,{from:"server",uid:t}),children:"Remove from Server"})]}),children:(0,c.jsxs)("li",{className:"icon more "+(w?"":"disabled"),children:[(0,c.jsx)(Df,{}),(0,c.jsx)("span",{className:"txt",children:"More"})]})})]})]})}const Lf=i.ZP.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
  user-select: none;
  &.compact {
    padding: 0;
  }
  &.interactive {
    &:hover,
    &.active {
      background: rgba(116, 127, 141, 0.1);
    }
  }
  .avatar {
    cursor: pointer;
    width: ${e=>{let{size:t}=e;return`${t}px`}};
    height: ${e=>{let{size:t}=e;return`${t}px`}};
    position: relative;
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
    .status {
      position: absolute;
      bottom: -2px;
      right: -4px;
      width: 10px;
      height: 10px;
      box-sizing: content-box;
      border-radius: 50%;
      border: 2px solid #fff;
      &.online {
        background-color: #22c55e;
      }
      &.offline {
        background-color: #a1a1aa;
      }
      &.alert {
        background-color: #dc2626;
      }
    }
  }
  .name {
    /* user-select: text; */
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #52525b;
  }
`;function Bf(e){let{cid:t=null,owner:n=!1,dm:r=!1,interactive:i=!0,uid:a="",popover:o=!1,compact:s=!1,avatarSize:l=32}=e;const u=ii(),d=(0,ki.v9)((e=>e.contacts.byId[a]));return d?(0,c.jsx)(Yo,{inertia:!0,interactive:!0,disabled:!o,placement:"left",trigger:"click",content:(0,c.jsx)(Mf,{uid:a,type:"card",cid:t}),children:(0,c.jsxs)(Lf,{size:l,onDoubleClick:r?()=>{u(`/chat/dm/${a}`)}:null,className:`${i?"interactive":""} ${s?"compact":""}`,children:[(0,c.jsxs)("div",{className:"avatar",children:[(0,c.jsx)(Xa.Z,{url:d.avatar,name:d.name,alt:"avatar"}),(0,c.jsx)("div",{className:"status "+(d.online?"online":"offline")})]}),!s&&(0,c.jsx)("span",{className:"name",children:null===d||void 0===d?void 0:d.name}),n&&(0,c.jsx)(mf,{})]})}):null}const jf=i.ZP.div`
  display: flex;
  max-height: 402px;
  background: #fff;
  box-shadow: 0px 25px 50px rgba(31, 41, 55, 0.25);
  border-radius: var(--br);
  transition: all 0.5s ease;
  .left {
    width: 260px;
    box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.1);
    .search {
      position: sticky;
      top: 0;
      z-index: 99;
      background: #fff;
      border-top-left-radius: var(--br);
      box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
      padding: 8px;
      width: calc(100% - 1px);
      input {
        outline: none;
        width: -webkit-fill-available;
        padding: 8px;
        font-size: 14px;
        line-height: 20px;
        border: none;
      }
    }
    .users {
      display: flex;
      flex-direction: column;
      height: calc(100% - 52px - 10px);
      overflow-y: scroll;
      .user {
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 0 16px;
        width: -webkit-fill-available;
        border-radius: 4px;
        &:hover {
          background: rgba(116, 127, 141, 0.1);
        }
        > div {
          width: 100%;
        }
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    box-sizing: border-box;
    &.private {
      width: 344px;
      .desc {
        text-align: center;
      }
    }
    > .title {
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: #374151;
      margin-bottom: 16px;
    }
    .desc {
      font-weight: normal;
      color: #6b7280;
      margin-bottom: 48px;
    }
    .name {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 8px;
      margin-bottom: 34px;
      .label {
        font-weight: 600;
        color: #6b7280;
      }
      .input {
        position: relative;
        input {
          width: -webkit-fill-available;
          border: 1px solid #e5e7eb;
          box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
          border-radius: 4px;
          padding: 8px;
          color: #78787c;
          padding-left: 36px;
        }
        .icon {
          position: absolute;
          left: 8px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
    .private {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 50px;
      .txt {
        font-weight: 600;
        color: #6b7280;
      }
      input {
        cursor: pointer;
      }
    }
    .btns {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 16px;
    }
    .normal {
      font-size: 14px;
      line-height: 20px;
    }
  }
`,qf=i.ZP.div`
  cursor: pointer;
  position: relative;
  width: 44px;
  height: 24px;
  background-color: #1fe1f9;
  border-radius: 12px;
  transition: all 0.2s ease-in;
  &:after {
    border-radius: 50%;
    background-color: #fff;
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 2px;
    right: 2px;
    transition: all 0.4s ease;
  }
  &[data-checked="false"] {
    background-color: #f2f4f7;
    &:after {
      transform: translateX(-100%);
    }
  }
  &[data-disabled="true"] {
    pointer-events: none;
  }
`,Uf=i.ZP.input`
  -webkit-appearance: none;
  /* Remove most all native input styles */
  appearance: none;
  /* Not removed via appearance */
  margin: 0;
  width: 20px;
  height: 20px;
  border: 1px solid #d0d5dd;
  border-radius: 6px;
  place-content: center;
  &::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    margin: 4px;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 10px 10px #1fe1f9;
  }
  &:checked {
    border-color: #1fe1f9;
    &:before {
      transform: scale(1);
    }
  }
  &:disabled {
    opacity: 0.4;
  }
  padding: 16px 0;
  .input {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    > .copy {
      position: absolute;
      right: 4px;
      top: 50%;
      transform: translateY(-50%);
      padding-right: 8px;
      background: none;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #22ccee;
      &:hover {
        color: #088ab2;
      }
    }
    input {
      padding-right: 80px;
      &.invite {
        padding-right: 50px;
      }
    }
  }
  > .invite {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 16px;
    /* position: relative; */
  }
  > .link {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 12px;
    /* position: relative; */
  }
  label {
    color: #6b7280;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
  > .tip {
    color: #344054;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    button {
      background: none;
      border: none;
      color: #22ccee;
    }
  }
`;function Wf(e){let{cid:t=null}=e;const[n,i]=(0,Ie.useState)(""),{enableSMTP:a,linkCopied:o,link:s,copyLink:l,generateNewLink:u,generating:d}=Gf(t);(0,Ie.useEffect)((()=>{o&&r.ZP.success("Invite Link Copied!")}),[o]);return(0,c.jsxs)(Vf,{children:[(0,c.jsxs)("div",{className:"invite",children:[(0,c.jsx)("label",{htmlFor:"",children:"Invite by Email"}),(0,c.jsxs)("div",{className:"input",children:[(0,c.jsx)(Qi.Z,{value:n,onChange:e=>{i(e.target.value)},disabled:!a,type:"email",placeholder:a?"Enter Email":"Enable SMTP First"}),(0,c.jsx)(Ni.Z,{disabled:!a||!n,className:"send",children:"Send"})]})]}),(0,c.jsxs)("div",{className:"link",children:[(0,c.jsx)("label",{htmlFor:"",children:"Or Send invite link to your friends"}),(0,c.jsxs)("div",{className:"input",children:[(0,c.jsx)(Qi.Z,{readOnly:!0,className:"invite",placeholder:"Generating",value:s}),(0,c.jsx)("button",{className:"copy",onClick:l,children:"Copy"})]})]}),(0,c.jsxs)("div",{className:"tip",children:["Invite link expires in 7 days."," ",(0,c.jsx)("button",{disabled:d,className:"new",onClick:u,children:"Generate New Link"})]})]})}const Kf=i.ZP.div`
  padding-top: 16px;
  > .filter {
    width: 376px;
    min-height: 40px;
    padding: 6px 8px;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
    border-radius: 4px;
    .selects {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 5px;
      width: 100%;
      overflow: scroll;

      /* white-space: nowrap; */
      &::-webkit-scrollbar {
        width: 0; /* Remove scrollbar space */
        height: 0; /* Remove scrollbar space */
        background: transparent; /* Optional: just make scrollbar invisible */
      }
        }