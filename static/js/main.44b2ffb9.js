/*! For license information please see main.44b2ffb9.js.LICENSE.txt */
(()=>{var e={8926:e=>{function t(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(l){return void n(l)}s.done?t(u):Promise.resolve(u).then(r,i)}e.exports=function(e){return function(){var n=this,r=arguments;return new Promise((function(i,a){var o=e.apply(n,r);function s(e){t(o,i,a,s,u,"next",e)}function u(e){t(o,i,a,s,u,"throw",e)}s(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},4575:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},3913:e=>{function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},5318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},9591:(e,t,n)=>{var r=n(8).default;function i(){"use strict";e.exports=i=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},n=Object.prototype,a=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function d(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(A){d=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof p?t:p,a=Object.create(i.prototype),o=new C(r||[]);return a._invoke=function(e,t,n){var r="suspendedStart";return function(i,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw a;return S()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=w(o,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(e,n,o),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(A){return{type:"throw",arg:A}}}t.wrap=c;var h={};function p(){}function g(){}function _(){}var m={};d(m,s,(function(){return this}));var F=Object.getPrototypeOf,b=F&&F(F(x([])));b&&b!==n&&a.call(b,s)&&(m=b);var y=_.prototype=p.prototype=Object.create(m);function v(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function n(i,o,s,u){var l=f(e[i],e,o);if("throw"!==l.type){var d=l.arg,c=d.value;return c&&"object"==r(c)&&a.call(c,"__await")?t.resolve(c.__await).then((function(e){n("next",e,s,u)}),(function(e){n("throw",e,s,u)})):t.resolve(c).then((function(e){d.value=e,s(d)}),(function(e){return n("throw",e,s,u)}))}u(l.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=f(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,h;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function D(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function x(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:S}}function S(){return{value:void 0,done:!0}}return g.prototype=_,d(y,"constructor",_),d(_,"constructor",g),g.displayName=d(_,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,d(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},t.awrap=function(e){return{__await:e}},v(k.prototype),d(k.prototype,u,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,i,a){void 0===a&&(a=Promise);var o=new k(c(e,n,r,i),a);return t.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},v(y),d(y,l,"Generator"),d(y,s,(function(){return this})),d(y,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=x,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(D),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),D(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;D(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},8:e=>{function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7757:(e,t,n)=>{e.exports=n(9591)()},4118:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r,i=n(7313);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const o=(e,t)=>{let{title:n,titleId:o,...s}=e;return i.createElement("svg",a({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},s),n?i.createElement("title",{id:o},n):null,r||(r=i.createElement("path",{d:"M6.48667 11.6667L6.83667 8.33333H3.325V6.66667H7L7.43333 2.5H9.10833L8.66667 6.66667H11.9833L12.4167 2.5H14.0917L13.65 6.66667H16.625V8.33333H13.4667L13.1167 11.6667H16.6167V13.3333H12.9333L12.4917 17.5H10.8083L11.2417 13.3333H7.91667L7.475 17.5H5.8L6.23333 13.3333H3.25V11.6667H6.4H6.48667ZM8.1625 11.6667H11.4875L11.8375 8.33333H8.5125L8.1625 11.6667Z",fill:"#616161"})))},s=(0,i.forwardRef)(o)},9930:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r,i=n(7313);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const o=(e,t)=>{let{title:n,titleId:o,...s}=e;return i.createElement("svg",a({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},s),n?i.createElement("title",{id:o},n):null,r||(r=i.createElement("path",{d:"M8.11904 0C3.91105 0 0.5 3.41105 0.5 7.61905C0.5 11.827 3.91105 15.2381 8.11904 15.2381C12.3271 15.2381 15.7381 11.827 15.7381 7.61905C15.7381 3.41105 12.3263 0 8.11904 0ZM11.7053 10.128L10.628 11.2053L8.11904 8.69714L5.61009 11.2053L4.53277 10.128L7.04095 7.61905L4.532 5.1101L5.60934 4.03353L8.11829 6.54248L10.6272 4.03353L11.7045 5.1101L9.19638 7.61905L11.7053 10.128Z",fill:"#6C737F"})))},s=(0,i.forwardRef)(o)},5044:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r,i=n(7313);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const o=(e,t)=>{let{title:n,titleId:o,...s}=e;return i.createElement("svg",a({width:14,height:15,viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},s),n?i.createElement("title",{id:o},n):null,r||(r=i.createElement("path",{d:"M7 6.7929L10.5355 3.25736C10.7308 3.0621 11.0474 3.0621 11.2426 3.25736C11.4379 3.45262 11.4379 3.76921 11.2426 3.96447L7.70711 7.5L11.2426 11.0355C11.4379 11.2308 11.4379 11.5474 11.2426 11.7426C11.0474 11.9379 10.7308 11.9379 10.5355 11.7426L7 8.20711L3.46447 11.7426C3.26921 11.9379 2.95262 11.9379 2.75736 11.7426C2.5621 11.5474 2.5621 11.2308 2.75736 11.0355L6.2929 7.5L2.75736 3.96447C2.5621 3.76921 2.5621 3.45262 2.75736 3.25736C2.95262 3.0621 3.26921 3.0621 3.46447 3.25736L7 6.7929Z",fill:"black",fillOpacity:.5})))},s=(0,i.forwardRef)(o)},6544:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r,i=n(7313);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const o=(e,t)=>{let{title:n,titleId:o,...s}=e;return i.createElement("svg",a({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},s),n?i.createElement("title",{id:o},n):null,r||(r=i.createElement("path",{d:"M16.5303 11.7204L16.4462 11.6478C16.1526 11.4299 15.7359 11.4541 15.4697 11.7204L12.7503 14.4397L12.75 7.75003L12.7432 7.64826C12.6935 7.28218 12.3797 7.00003 12 7.00003L11.8982 7.00688C11.5322 7.05654 11.25 7.37033 11.25 7.75003L11.2503 14.4417L8.52961 11.7198L8.4455 11.6472C8.15193 11.4293 7.73527 11.4534 7.46895 11.7196C7.176 12.0124 7.17591 12.4873 7.46875 12.7803L11.4687 16.7818L11.5529 16.8544C11.8465 17.0724 12.2632 17.0482 12.5295 16.7819L16.5303 12.7811L16.6029 12.6969C16.8208 12.4033 16.7966 11.9867 16.5303 11.7204ZM6.25 3C4.45507 3 3 4.45507 3 6.25V17.75C3 19.5449 4.45507 21 6.25 21H17.75C19.5449 21 21 19.5449 21 17.75V6.25C21 4.45507 19.5449 3 17.75 3H6.25ZM4.5 6.25C4.5 5.2835 5.2835 4.5 6.25 4.5H17.75C18.7165 4.5 19.5 5.2835 19.5 6.25V17.75C19.5 18.7165 18.7165 19.5 17.75 19.5H6.25C5.2835 19.5 4.5 18.7165 4.5 17.75V6.25Z",fill:"#616161"})))},s=(0,i.forwardRef)(o)},7811:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r,i,a=n(7313);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const s=(e,t)=>{let{title:n,titleId:s,...u}=e;return a.createElement("svg",o({width:72,height:96,viewBox:"0 0 72 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},u),n?a.createElement("title",{id:s},n):null,r||(r=a.createElement("g",{clipPath:"url(#clip0_4011_27601)"},a.createElement("path",{d:"M72 29.3V89.6C72 91.84 72 92.96 71.56 93.82C71.18 94.56 70.56 95.18 69.82 95.56C68.96 96 67.84 96 65.6 96H6.4C4.16 96 3.04 96 2.18 95.56C1.44 95.18 0.82 94.56 0.44 93.82C0 92.96 0 91.84 0 89.6V6.4C0 4.16 0 3.04 0.44 2.18C0.82 1.44 1.44 0.82 2.18 0.44C3.04 0 4.16 0 6.4 0H42.7C44.66 0 45.64 0 46.56 0.22C47.06 0.34 47.54 0.5 48 0.72V17.6C48 19.84 48 20.96 48.44 21.82C48.82 22.56 49.44 23.18 50.18 23.56C51.04 24 52.16 24 54.4 24H71.28C71.5 24.46 71.66 24.94 71.78 25.44C72 26.36 72 27.34 72 29.3Z",fill:"#A5F3FC"}),a.createElement("path",{d:"M68.26 20.26C69.64 21.64 70.32 22.32 70.82 23.14C71 23.42 71.14 23.7 71.28 24H54.4C52.16 24 51.04 24 50.18 23.56C49.44 23.18 48.82 22.56 48.44 21.82C48 20.96 48 19.84 48 17.6V0.719971C48.3 0.859971 48.58 0.999971 48.86 1.17997C49.68 1.67997 50.36 2.35997 51.74 3.73997L68.26 20.26Z",fill:"#06B6D4"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.76 42.16C34.02 41.86 33.16 42.02 32.58 42.6L24 52H18C16.9 52 16 52.9 16 54V66C16 67.1 16.9 68 18 68H24L32.58 77.42C33.16 78 34.02 78.16 34.76 77.86C35.52 77.54 36 76.8 36 76V44C36 43.2 35.52 42.46 34.76 42.16ZM40 46V50C45.52 50 50 54.48 50 60C50 65.52 45.52 70 40 70V74C47.72 74 54 67.72 54 60C54 52.28 47.72 46 40 46ZM40 54C43.3 54 46 56.7 46 60C46 63.3 43.3 66 40 66V62C41.1 62 42 61.1 42 60C42 58.9 41.1 58 40 58V54Z",fill:"#0891B2"}))),i||(i=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_4011_27601"},a.createElement("rect",{width:72,height:96,fill:"white"})))))},u=(0,a.forwardRef)(s)},4012:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r,i,a=n(7313);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const s=(e,t)=>{let{title:n,titleId:s,...u}=e;return a.createElement("svg",o({width:72,height:96,viewBox:"0 0 72 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},u),n?a.createElement("title",{id:s},n):null,r||(r=a.createElement("g",{clipPath:"url(#clip0_4011_27600)"},a.createElement("path",{d:"M72 29.3V89.6C72 91.84 72 92.96 71.56 93.82C71.18 94.56 70.56 95.18 69.82 95.56C68.96 96 67.84 96 65.6 96H6.4C4.16 96 3.04 96 2.18 95.56C1.44 95.18 0.82 94.56 0.44 93.82C0 92.96 0 91.84 0 89.6V6.4C0 4.16 0 3.04 0.44 2.18C0.82 1.44 1.44 0.82 2.18 0.44C3.04 0 4.16 0 6.4 0H42.7C44.66 0 45.64 0 46.56 0.22C47.06 0.34 47.54 0.5 48 0.72V17.6C48 19.84 48 20.96 48.44 21.82C48.82 22.56 49.44 23.18 50.18 23.56C51.04 24 52.16 24 54.4 24H71.28C71.5 24.46 71.66 24.94 71.78 25.44C72 26.36 72 27.34 72 29.3Z",fill:"#A5F3FC"}),a.createElement("path",{d:"M68.26 20.26C69.64 21.64 70.32 22.32 70.82 23.14C71 23.42 71.14 23.7 71.28 24H54.4C52.16 24 51.04 24 50.18 23.56C49.44 23.18 48.82 22.56 48.44 21.82C48 20.96 48 19.84 48 17.6V0.719971C48.3 0.859971 48.58 0.999971 48.86 1.17997C49.68 1.67997 50.36 2.35997 51.74 3.73997L68.26 20.26Z",fill:"#06B6D4"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.7 40.46C24.36 40.18 25.02 40.08 25.68 40.04C26.3 40 27.06 40 27.94 40H28V44C27.04 44 26.42 44 25.96 44.02C25.5 44.06 25.32 44.1 25.24 44.14C24.76 44.34 24.36 44.74 24.16 45.22C24.12 45.32 24.08 45.48 24.04 45.94C24 46.42 24 47.04 24 48V54.06C24 54.94 24 55.7 23.96 56.32C23.9 56.98 23.82 57.64 23.54 58.3C23.28 58.94 22.9 59.5 22.44 60C22.9 60.5 23.28 61.06 23.54 61.7C23.82 62.36 23.92 63.02 23.96 63.68C24 64.3 24 65.06 24 65.94V72C24 72.96 24 73.58 24.02 74.04C24.06 74.5 24.1 74.68 24.14 74.76C24.34 75.24 24.74 75.64 25.22 75.84C25.32 75.88 25.48 75.92 25.94 75.96C26.42 76 27.04 76 28 76V80H27.94C27.06 80 26.3 80 25.68 79.96C25.02 79.9 24.36 79.82 23.7 79.54C22.24 78.94 21.06 77.78 20.46 76.3C20.18 75.64 20.08 74.98 20.04 74.32C20 73.7 20 72.94 20 72.06V66C20 65.04 20 64.42 19.98 63.96C19.94 63.5 19.9 63.32 19.86 63.24C19.66 62.76 19.26 62.36 18.78 62.16C18.68 62.12 18.52 62.08 18.06 62.04C17.58 62 16.96 62 16 62V58C16.96 58 17.58 58 18.04 57.98C18.5 57.94 18.68 57.9 18.76 57.86C19.24 57.66 19.64 57.28 19.84 56.78C19.88 56.68 19.92 56.52 19.96 56.06C20 55.58 20 54.96 20 54V47.94C20 47.06 20 46.3 20.04 45.68C20.1 45.02 20.18 44.36 20.46 43.7C21.06 42.24 22.22 41.06 23.7 40.46ZM53.22 57.84C53.32 57.88 53.48 57.92 53.94 57.96C54.42 58 55.04 58 56 58V62C55.04 62 54.42 62 53.96 62.02C53.5 62.06 53.32 62.1 53.24 62.14C52.76 62.34 52.36 62.74 52.16 63.22C52.12 63.32 52.08 63.48 52.04 63.94C52 64.42 52 65.04 52 66V72.06C52 72.94 52 73.7 51.96 74.32C51.9 74.98 51.82 75.64 51.54 76.3C50.94 77.76 49.76 78.94 48.3 79.54C47.64 79.82 46.98 79.92 46.32 79.96C45.7 80 44.94 80 44.06 80H44V76C44.96 76 45.58 76 46.04 75.98C46.5 75.94 46.68 75.9 46.76 75.86C47.24 75.66 47.64 75.28 47.84 74.78C47.88 74.68 47.92 74.52 47.96 74.06C48 73.58 48 72.96 48 72V65.94C48 65.06 48 64.3 48.04 63.68C48.1 63.02 48.2 62.36 48.46 61.7C48.72 61.06 49.1 60.5 49.56 60C49.1 59.5 48.72 58.94 48.46 58.3C48.18 57.64 48.08 56.98 48.04 56.32C48 55.7 48 54.94 48 54.06V48C48 47.04 48 46.42 47.98 45.96C47.94 45.5 47.9 45.32 47.86 45.24C47.66 44.76 47.26 44.36 46.78 44.16C46.68 44.12 46.52 44.08 46.06 44.04C45.58 44 44.96 44 44 44V40H44.06C44.94 40 45.7 40 46.32 40.04C46.98 40.1 47.64 40.18 48.3 40.46C49.76 41.06 50.94 42.22 51.54 43.7C51.82 44.36 51.92 45.02 51.96 45.68C52 46.3 52 47.06 52 47.94V54C52 54.96 52 55.58 52.02 56.04C52.06 56.5 52.1 56.68 52.14 56.76C52.34 57.24 52.74 57.64 53.22 57.84Z",fill:"#0891B2"}))),i||(i=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_4011_27600"},a.createElement("rect",{width:72,height:96,fill:"white"})))))},u=(0,a.forwardRef)(s)},6248:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r,i,a=n(7313);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const s=(e,t)=>{let{title:n,titleId:s,...u}=e;return a.createElement("svg",o({width:72,height:96,viewBox:"0 0 72 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},u),n?a.createElement("title",{id:s},n):null,r||(r=a.createElement("g",{clipPath:"url(#clip0_4011_27599)"},a.createElement("path",{d:"M72 29.3V89.6C72 91.84 72 92.96 71.56 93.82C71.18 94.56 70.56 95.18 69.82 95.56C68.96 96 67.84 96 65.6 96H6.4C4.16 96 3.04 96 2.18 95.56C1.44 95.18 0.82 94.56 0.44 93.82C0 92.96 0 91.84 0 89.6V6.4C0 4.16 0 3.04 0.44 2.18C0.82 1.44 1.44 0.82 2.18 0.44C3.04 0 4.16 0 6.4 0H42.7C44.66 0 45.64 0 46.56 0.22C47.06 0.34 47.54 0.5 48 0.72V17.6C48 19.84 48 20.96 48.44 21.82C48.82 22.56 49.44 23.18 50.18 23.56C51.04 24 52.16 24 54.4 24H71.28C71.5 24.46 71.66 24.94 71.78 25.44C72 26.36 72 27.34 72 29.3Z",fill:"#A5F3FC"}),a.createElement("path",{d:"M68.26 20.26C69.64 21.64 70.32 22.32 70.82 23.14C71 23.42 71.14 23.7 71.28 24H54.4C52.16 24 51.04 24 50.18 23.56C49.44 23.18 48.82 22.56 48.44 21.82C48 20.96 48 19.84 48 17.6V0.719971C48.3 0.859971 48.58 0.999971 48.86 1.17997C49.68 1.67997 50.36 2.35997 51.74 3.73997L68.26 20.26Z",fill:"#06B6D4"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M56 40H40V44H56V40ZM56 52H40V56H56V52ZM16 64H56V68H16V64ZM56 76H16V80H56V76ZM26 56H22V44H16V40H32V44H26V56Z",fill:"#0891B2"}))),i||(i=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_4011_27599"},a.createElement("rect",{width:72,height:96,fill:"white"})))))},u=(0,a.forwardRef)(s)},4716:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r,i,a=n(7313);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const s=(e,t)=>{let{title:n,titleId:s,...u}=e;return a.createElement("svg",o({width:72,height:96,viewBox:"0 0 72 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},u),n?a.createElement("title",{id:s},n):null,r||(r=a.createElement("g",{clipPath:"url(#clip0_4011_27602)"},a.createElement("path",{d:"M72 29.3V89.6C72 91.84 72 92.96 71.56 93.82C71.18 94.56 70.56 95.18 69.82 95.56C68.96 96 67.84 96 65.6 96H6.4C4.16 96 3.04 96 2.18 95.56C1.44 95.18 0.819999 94.56 0.44 93.82C-5.66244e-07 92.96 -3.89266e-07 91.84 7.33793e-10 89.6L1.45507e-05 6.4C1.49407e-05 4.16 1.51396e-05 3.04 0.440016 2.18C0.820016 1.44 1.44002 0.819999 2.18002 0.439999C3.04002 -5.96046e-07 4.16002 -3.89266e-07 6.40002 7.33824e-10L42.7 6.35073e-06C44.66 6.69073e-06 45.64 6.86944e-06 46.56 0.220007C47.06 0.340007 47.54 0.500007 48 0.720007V17.6C48 19.84 48 20.96 48.44 21.82C48.82 22.56 49.44 23.18 50.18 23.56C51.04 24 52.16 24 54.4 24H71.28C71.5 24.46 71.66 24.94 71.78 25.44C72 26.36 72 27.34 72 29.3Z",fill:"#A5F3FC"}),a.createElement("path",{d:"M68.26 20.26C69.64 21.64 70.32 22.32 70.82 23.14C71 23.42 71.14 23.7 71.28 24H54.4C52.16 24 51.04 24 50.18 23.56C49.44 23.18 48.82 22.56 48.44 21.82C48 20.96 48 19.84 48 17.6V0.719971C48.3 0.859971 48.58 0.999971 48.86 1.17997C49.68 1.67997 50.36 2.35997 51.74 3.73997L68.26 20.26Z",fill:"#06B6D4"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32 48C32 52.4183 28.4183 56 24 56C19.5817 56 16 52.4183 16 48C16 43.5817 19.5817 40 24 40C28.4183 40 32 43.5817 32 48ZM33.648 71.526L44 55.998L56 79.998H16L28 63.998L33.648 71.526Z",fill:"#0891B2"}))),i||(i=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_4011_27602"},a.createElement("rect",{width:72,height:96,fill:"white"})))))},u=(0,a.forwardRef)(s)},9926:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r,i,a=n(7313);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const s=(e,t)=>{let{title:n,titleId:s,...u}=e;return a.createElement("svg",o({width:72,height:96,viewBox:"0 0 72 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},u),n?a.createElement("title",{id:s},n):null,r||(r=a.createElement("g",{clipPath:"url(#clip0_4011_27603)"},a.createElement("path",{d:"M72 29.3V89.6C72 91.84 72 92.96 71.56 93.82C71.18 94.56 70.56 95.18 69.82 95.56C68.96 96 67.84 96 65.6 96H6.4C4.16 96 3.04 96 2.18 95.56C1.44 95.18 0.82 94.56 0.44 93.82C0 92.96 0 91.84 0 89.6V6.4C0 4.16 0 3.04 0.44 2.18C0.82 1.44 1.44 0.82 2.18 0.44C3.04 0 4.16 0 6.4 0H42.7C44.66 0 45.64 0 46.56 0.22C47.06 0.34 47.54 0.5 48 0.72V17.6C48 19.84 48 20.96 48.44 21.82C48.82 22.56 49.44 23.18 50.18 23.56C51.04 24 52.16 24 54.4 24H71.28C71.5 24.46 71.66 24.94 71.78 25.44C72 26.36 72 27.34 72 29.3Z",fill:"#A5F3FC"}),a.createElement("path",{d:"M68.26 20.26C69.64 21.64 70.32 22.32 70.82 23.14C71 23.42 71.14 23.7 71.28 24H54.4C52.16 24 51.04 24 50.18 23.56C49.44 23.18 48.82 22.56 48.44 21.82C48 20.96 48 19.84 48 17.6V0.719971C48.3 0.859971 48.58 0.999971 48.86 1.17997C49.68 1.67997 50.36 2.35997 51.74 3.73997L68.26 20.26Z",fill:"#06B6D4"}),a.createElement("path",{d:"M56.1014 65.0909C52.962 61.8909 44.4014 63.2 42.3389 63.4364C40.0756 61.2182 38.1408 58.7091 36.5528 55.9818C37.6845 52.8182 38.3233 49.5091 38.4876 46.1636C38.4876 43.2 37.2829 40 33.9061 40C32.7197 40.0364 31.6246 40.6545 31.004 41.6545C29.562 44.1455 30.1643 49.1091 32.4459 54.2C30.8762 58.8545 28.8867 63.3636 26.5321 67.6909C23.0275 69.1091 15.6717 72.4182 15.0694 75.9818C14.8321 77.0727 15.2154 78.1818 16.0368 78.9455C16.8946 79.6364 17.9533 80 19.0667 80C23.5386 80 27.8828 73.9636 30.8945 68.8727C34.326 67.7273 37.8305 66.8182 41.3897 66.1455C46.0989 70.1636 50.2058 70.7636 52.3779 70.7636C55.28 70.7636 56.357 69.5818 56.722 68.5091C57.2513 67.3636 57.0141 66 56.1014 65.0909ZM53.0897 67.1091C52.962 67.9455 51.885 68.7636 49.9503 68.2909C47.7052 67.7091 45.6061 66.6545 43.7991 65.2182C45.3688 64.9818 48.8734 64.6182 51.3922 65.0909C52.3596 65.3273 53.327 65.9091 53.0897 67.1091ZM32.9388 42.7273C33.1395 42.3818 33.5046 42.1636 33.9061 42.1273C34.9831 42.1273 35.2386 43.4364 35.2386 44.4909C35.1108 47 34.6363 49.4545 33.7966 51.8364C31.9714 47.1091 32.3364 43.7818 32.9388 42.7273ZM32.7015 65.6727C33.7419 63.5091 34.6728 61.3091 35.4759 59.0545C36.5893 60.8 37.8852 62.4182 39.3454 63.9091C39.3272 64.0182 35.5854 64.7273 32.7015 65.6727ZM25.5829 70.4182C22.8085 74.9091 19.9063 77.7636 18.3366 77.7636C18.0811 77.7455 17.8255 77.6545 17.6065 77.5273C17.2414 77.2909 17.0954 76.8545 17.2414 76.4545C17.6065 74.8 20.746 72.5455 25.5829 70.4182Z",fill:"#0891B2"}))),i||(i=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_4011_27603"},a.createElement("rect",{width:72,height:96,fill:"white"})))))},u=(0,a.forwardRef)(s)},5637:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r,i,a=n(7313);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const s=(e,t)=>{let{title:n,titleId:s,...u}=e;return a.createElement("svg",o({width:72,height:96,viewBox:"0 0 72 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},u),n?a.createElement("title",{id:s},n):null,r||(r=a.createElement("g",{clipPath:"url(#clip0_4158_31546)"},a.createElement("path",{d:"M72 29.3V89.6C72 91.84 72 92.96 71.56 93.82C71.18 94.56 70.56 95.18 69.82 95.56C68.96 96 67.84 96 65.6 96H6.4C4.16 96 3.04 96 2.18 95.56C1.44 95.18 0.82 94.56 0.44 93.82C0 92.96 0 91.84 0 89.6V6.4C0 4.16 0 3.04 0.44 2.18C0.82 1.44 1.44 0.82 2.18 0.44C3.04 0 4.16 0 6.4 0H42.7C44.66 0 45.64 0 46.56 0.22C47.06 0.34 47.54 0.5 48 0.72V17.6C48 19.84 48 20.96 48.44 21.82C48.82 22.56 49.44 23.18 50.18 23.56C51.04 24 52.16 24 54.4 24H71.28C71.5 24.46 71.66 24.94 71.78 25.44C72 26.36 72 27.34 72 29.3Z",fill:"#A5F3FC"}),a.createElement("path",{d:"M68.26 20.26C69.64 21.64 70.32 22.32 70.82 23.14C71 23.42 71.14 23.7 71.28 24H54.4C52.16 24 51.04 24 50.18 23.56C49.44 23.18 48.82 22.56 48.44 21.82C48 20.96 48 19.84 48 17.6V0.719971C48.3 0.859971 48.58 0.999971 48.86 1.17997C49.68 1.67997 50.36 2.35997 51.74 3.73997L68.26 20.26Z",fill:"#06B6D4"}))),i||(i=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_4158_31546"},a.createElement("rect",{width:72,height:96,fill:"white"})))))},u=(0,a.forwardRef)(s)},6863:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r,i,a=n(7313);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const s=(e,t)=>{let{title:n,titleId:s,...u}=e;return a.createElement("svg",o({width:72,height:96,viewBox:"0 0 72 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},u),n?a.createElement("title",{id:s},n):null,r||(r=a.createElement("g",{clipPath:"url(#clip0_4174_31563)"},a.createElement("path",{d:"M72 29.3V89.6C72 91.84 72 92.96 71.56 93.82C71.18 94.56 70.56 95.18 69.82 95.56C68.96 96 67.84 96 65.6 96H6.4C4.16 96 3.04 96 2.18 95.56C1.44 95.18 0.82 94.56 0.44 93.82C0 92.96 0 91.84 0 89.6V6.4C0 4.16 0 3.04 0.44 2.18C0.82 1.44 1.44 0.82 2.18 0.44C3.04 0 4.16 0 6.4 0H42.7C44.66 0 45.64 0 46.56 0.22C47.06 0.34 47.54 0.5 48 0.72V17.6C48 19.84 48 20.96 48.44 21.82C48.82 22.56 49.44 23.18 50.18 23.56C51.04 24 52.16 24 54.4 24H71.28C71.5 24.46 71.66 24.94 71.78 25.44C72 26.36 72 27.34 72 29.3V29.3Z",fill:"#A5F3FC"}),a.createElement("path",{d:"M68.26 20.26C69.64 21.64 70.32 22.32 70.82 23.14C71 23.42 71.14 23.7 71.28 24H54.4C52.16 24 51.04 24 50.18 23.56C49.44 23.18 48.82 22.56 48.44 21.82C48 20.96 48 19.84 48 17.6V0.719971C48.3 0.859971 48.58 0.999971 48.86 1.17997C49.68 1.67997 50.36 2.35997 51.74 3.73997L68.26 20.26Z",fill:"#06B6D4"}),a.createElement("path",{d:"M43 51.25C43 47.7982 40.2018 45 36.75 45H22.25C18.7982 45 16 47.7982 16 51.25V68.75C16 72.2018 18.7982 75 22.25 75H36.75C40.2018 75 43 72.2018 43 68.75V51.25ZM45 65.5316L51.9612 70.9681C53.6027 72.25 56 71.0804 56 68.9978V51.0027C56 48.92 53.6026 47.7505 51.9612 49.0324L45 54.469V65.5316Z",fill:"#0891B2"}))),i||(i=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_4174_31563"},a.createElement("rect",{width:72,height:96,fill:"white"})))))},u=(0,a.forwardRef)(s)},7275:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r,i=n(7313);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const o=(e,t)=>{let{title:n,titleId:o,...s}=e;return i.createElement("svg",a({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},s),n?i.createElement("title",{id:o},n):null,r||(r=i.createElement("path",{d:"M14.2958 16.2945C13.9055 16.6853 13.906 17.3184 14.2968 17.7087C14.6876 18.0989 15.3207 18.0985 15.711 17.7077L20.7076 12.7043C21.0976 12.3137 21.0974 11.681 20.7072 11.2906L15.7106 6.29297C15.3201 5.9024 14.6869 5.90234 14.2964 6.29282C13.9058 6.6833 13.9057 7.31647 14.2962 7.70703L17.589 11H11C6.66509 11 3.13546 14.4478 3.00381 18.7508L3 19C3 19.5523 3.44772 20 4 20C4.55228 20 5 19.5523 5 19C5 15.7616 7.56557 13.1224 10.7751 13.0041L11 13H17.586L14.2958 16.2945Z",fill:"#667085"})))},s=(0,i.forwardRef)(o)},8214:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r,i,a,o=n(7313);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}const u=(e,t)=>{let{title:n,titleId:u,...l}=e;return o.createElement("svg",s({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":u},l),n?o.createElement("title",{id:u},n):null,r||(r=o.createElement("path",{d:"M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z",fill:"url(#paint0_linear_14171_23293)"})),i||(i=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.2431 5.96725C12.4162 5.86325 12.6357 5.87375 12.7982 5.99425C12.9602 6.11525 13.0342 6.32125 12.9857 6.51725L11.9857 10.5173C11.9297 10.7403 11.7297 10.8963 11.5002 10.8963H4.50018C4.27068 10.8963 4.07068 10.7397 4.01468 10.5173L3.01468 6.51725C2.96618 6.32125 3.04018 6.11525 3.20218 5.99425C3.36518 5.87425 3.58418 5.86375 3.75768 5.96725L5.84918 7.22225L7.58468 4.61875C7.59654 4.60096 7.61307 4.58921 7.62965 4.57743C7.63964 4.57033 7.64966 4.56321 7.65868 4.55475L7.17718 4.07275C7.08018 3.97575 7.08018 3.81625 7.17718 3.71925L7.82368 3.07275C7.92068 2.97575 8.08018 2.97575 8.17718 3.07275L8.82368 3.71925C8.92068 3.81625 8.92068 3.97575 8.82368 4.07275L8.34218 4.55475C8.3512 4.56338 8.3614 4.57062 8.37161 4.57787C8.38802 4.58951 8.40447 4.60119 8.41618 4.61875L10.1517 7.22225L12.2431 5.96725ZM4.00025 11.3962H12.0002V12.3963H4.00025V11.3962Z",fill:"#ECE9FE"})),a||(a=o.createElement("defs",null,o.createElement("linearGradient",{id:"paint0_linear_14171_23293",x1:0,y1:0,x2:16,y2:-1.66785e-9,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#7F56D9"}),o.createElement("stop",{offset:1,stopColor:"#9E77ED"})))))},l=(0,o.forwardRef)(u)},2867:(e,t,n)=>{"use strict";n.d(t,{Ax:()=>m,Ie:()=>h,JE:()=>c,OP:()=>g,Pb:()=>l,R1:()=>_,Wv:()=>f,YM:()=>r,ZP:()=>b,bI:()=>o,bT:()=>i,f0:()=>d,kK:()=>p,kO:()=>F,qe:()=>a,rs:()=>u,um:()=>s});const r="0.2.17",i={text:"text/plain",markdown:"text/markdown",file:"rustchat/file",formData:"multipart/form-data",json:"application/json",archive:"rustchat/archive"},a={apiKey:"AIzaSyDyJ6B1Ouenoha_gdGkBwIkBNStlwhlbO0",authDomain:"rustchat-develop.firebaseapp.com",projectId:"rustchat-develop",storageBucket:"rustchat-develop.appspot.com",messagingSenderId:"418687074928",appId:"1:418687074928:web:753286adbf239f5af9eab5",measurementId:"G-XV476KEC8P"},o={channel:"#",user:"@"},s="BGXCn-5YRXSFw38Q9lUKJ5bibL212-yIQn1pCvthGhp6_KwA29FO1Ax_d_7if1vfC2a5wTSVO8AcZrc-Hm1aS0Y",u="X-API-Key",l=16e5,d=8e7,c="RUSTCHAT_TOKEN",f="RUSTCHAT_TOKEN_EXPIRE",h="RUSTCHAT_REFRESH_TOKEN",p="RUSTCHAT_CURR_UID",g="RUSTCHAT_DEVICE_KEY",_="RUSTCHAT_PWA_INSTALLED",m=["\ud83d\udc4d","\u2764\ufe0f","\ud83d\ude04","\ud83d\udc40","\ud83d\udc4e","\ud83c\udf89","\ud83d\ude41","\ud83d\ude80"],F={item:"item",grid:"grid"},b="https://dev.rustchat.com/api"},1864:(e,t,n)=>{"use strict";n.d(t,{CB:()=>p,I1:()=>f,Mn:()=>b,SO:()=>g,Vd:()=>h,Wm:()=>c,YA:()=>m,a3:()=>y,cZ:()=>d,iJ:()=>l,sT:()=>F,sZ:()=>_});var r=n(9438),i=n(2379),a=n(7538),o=n(1690),s=n(2867);const u=()=>{let e=localStorage.getItem(s.OP);return e||(e=`web:${(0,i.x0)()}`,localStorage.setItem(s.OP,e)),e},l=(0,r.LC)({reducerPath:"authApi",baseQuery:a.Z,endpoints:e=>({login:e.mutation({query:e=>({url:"token/login",method:"POST",body:{credential:e,device:u(),device_token:"test"}}),transformResponse:e=>{const{avatar_updated_at:t}=e.user;return e.user.avatar=0==t?"":`${s.ZP}/resource/avatar?uid=${e.user.uid}&t=${t}`,e},async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{const{data:e}=await r;e&&n((0,o.A3)(e))}catch{}}}),renew:e.mutation({query:e=>{let{token:t,refreshToken:n}=e;return{url:"/token/renew",method:"POST",body:{token:t,refresh_token:n}}},async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{const{data:e}=await r;n((0,o.jM)(e))}catch{n((0,o.sQ)())}}}),updateDeviceToken:e.mutation({query:e=>({url:"/token/device_token",method:"PUT",body:{device_token:e}})}),getOpenid:e.mutation({query:e=>{let{issuer:t,redirect_uri:n}=e;return{url:"/token/openid/authorize",method:"POST",body:{issuer:t,redirect_uri:n}}}}),checkInviteTokenValid:e.mutation({query:e=>({url:"user/check_invite_magic_token",method:"POST",body:{magic_token:e}})}),updatePassword:e.mutation({query:e=>{let{old_password:t,new_password:n}=e;return{url:"user/change_password",method:"POST",body:{old_password:t,new_password:n}}}}),sendMagicLink:e.mutation({query:e=>({url:"token/send_magic_link",method:"POST",body:{email:e}})}),getMetamaskNonce:e.query({query:e=>({url:`/token/metamask/nonce?public_address=${e}`})}),getCredentials:e.query({query:()=>({url:"/token/credentials"})}),logout:e.query({query:()=>({url:"token/logout"}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{await r,n((0,o.sQ)())}catch{}}}),getInitialized:e.query({query:()=>({url:"/admin/system/initialized"}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{const{data:e}=await r;n((0,o.R4)(e))}catch{}}})})}),{useGetInitializedQuery:d,useSendMagicLinkMutation:c,useGetCredentialsQuery:f,useUpdateDeviceTokenMutation:h,useGetOpenidMutation:p,useRenewMutation:g,useLazyGetMetamaskNonceQuery:_,useLoginMutation:m,useLazyLogoutQuery:F,useCheckInviteTokenValidMutation:b,useUpdatePasswordMutation:y}=l},7538:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(5008),i=n(3657),a=n(658),o=n.n(a),s=n(1690),u=n(2867);const l=["login","register","sendMagicLink","checkInviteTokenValid","getGoogleAuthConfig","getGithubAuthConfig","getSMTPStatus","getLoginConfig","getServerVersion","getServer","getOpenid","getMetamaskNonce","renew","getInitialized","createAdmin"],d=(0,r.ni)({baseUrl:u.ZP,prepareHeaders:(e,t)=>{let{getState:n,endpoint:r}=t;const{token:i}=n().authData;return i&&!l.includes(r)&&e.set(u.rs,i),e}});let c=null;const f=async(e,t,n)=>{var r;c&&await c;const{token:a,refreshToken:u,expireTime:f=+new Date}=t.getState().authData;let h=null;if(!l.includes(t.endpoint)&&o()().isAfter(new Date(f-2e4))?(c=d({url:"/token/renew",method:"POST",body:{token:a,refresh_token:u}},t,n),h=await c,c=null,h.data&&(t.dispatch((0,s.jM)(h.data)),h=await d(e,t,n))):h=await d(e,t,n),null!==(r=h)&&void 0!==r&&r.error)switch(h.error.originalStatus||h.error.status){case"FETCH_ERROR":i.ZP.error(`${t.endpoint}: Failed to fetch`);break;case 404:i.ZP.error("Request Not Found");break;case 500:i.ZP.error(h.error.data||"server error");break;case 401:"login"!==t.endpoint&&(t.dispatch((0,s.sQ)()),location.href="/#/login",i.ZP.error("API Not Authenticated"));break;case 403:i.ZP.error("Request Not Allowed")}return h}},5564:(e,t,n)=>{"use strict";n.d(t,{CU:()=>g,Cg:()=>D,Hj:()=>E,N2:()=>m,Pr:()=>h,R4:()=>w,VJ:()=>p,aw:()=>F,db:()=>k,kE:()=>y,kG:()=>C,tW:()=>b});var r=n(9438),i=n(7538),a=n(2867),o=n(332),s=n(5018),u=n(3247),l=n(445),d=n(9899),c=n(1894),f=n(2304);const h=(0,r.LC)({reducerPath:"channelApi",baseQuery:i.Z,refetchOnFocus:!0,endpoints:e=>({getChannels:e.query({query:()=>({url:"group"})}),getChannel:e.query({query:e=>({url:`group/${e}`})}),leaveChannel:e.query({query:e=>({url:`group/${e}/leave`}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{await r,n((0,o.OG)(e))}catch{}}}),createChannel:e.mutation({query:e=>({url:"group",method:"POST",body:e})}),updateChannel:e.mutation({query:e=>{let{id:t,...n}=e;return{url:`group/${t}`,method:"PUT",body:n}},async onQueryStarted(e,t){let{id:n,name:r,description:i}=e,{dispatch:a,queryFulfilled:s}=t;const u=a((0,o.pW)({id:n,name:r,description:i}));try{await s}catch{u.undo()}}}),getHistoryMessages:e.query({query:e=>{let{id:t,mid:n=null,limit:r=100}=e;return{url:n?`/group/${t}/history?before=${n}&limit=${r}`:`/group/${t}/history?limit=${r}`}},async onQueryStarted(e,t){let{dispatch:n,getState:r,queryFulfilled:i}=t;const{data:a}=await i;null!==a&&void 0!==a&&a.length&&a.forEach((e=>{(0,f.Z)(e,n,r())}))}}),createInviteLink:e.query({query:e=>({headers:{"content-type":"text/plain",accept:"text/plain"},url:`/group/${e}/create_invite_link`,responseHandler:e=>e.text()}),transformResponse:e=>{const t=new URL(e);return`${location.origin}${t.pathname}${t.search}${t.hash}`}}),removeChannel:e.query({query:e=>({url:`group/${e}`,method:"DELETE"}),async onQueryStarted(e,t){let{dispatch:n,getState:r,queryFulfilled:i}=t;const{channelMessage:a,ui:{remeberedNavs:{chat:o}}}=r();try{await i;const t=a[e];o==`/chat/channel/${e}`&&n((0,s.Cz)({path:null})),t&&(n((0,l.YZ)(e)),n((0,u.Gd)(t)),n((0,d.FM)(t)))}catch{}}}),sendChannelMsg:e.mutation({query:e=>{let{id:t,content:n,type:r="text",properties:i=""}=e;return{headers:{"content-type":a.bT[r],"X-Properties":i?btoa(unescape(encodeURIComponent(JSON.stringify(i)))):""},url:`group/${t}/send`,method:"POST",body:"file"==r?JSON.stringify(n):n}},async onQueryStarted(e,t){await c.s.call(this,e,t,"channel")}}),addMembers:e.mutation({query:e=>{let{id:t,members:n}=e;return{url:`group/${t}/members/add`,method:"POST",body:n}}}),removeMembers:e.mutation({query:e=>{let{id:t,members:n}=e;return{url:`group/${t}/members/remove`,method:"POST",body:n}}}),updateIcon:e.mutation({query:e=>{let{gid:t,image:n}=e;return{headers:{"content-type":"image/png"},url:`/group/${t}/avatar`,method:"POST",body:n}},async onQueryStarted(e,t){let{gid:n}=e,{dispatch:r,queryFulfilled:i}=t;try{await i,r((0,o.pW)({id:n,icon:`${a.ZP}/resource/group_avatar?gid=${n}&t=${+new Date}`}))}catch(s){}}})})}),{useLazyLeaveChannelQuery:p,useLazyCreateInviteLinkQuery:g,useCreateInviteLinkQuery:_,useLazyGetHistoryMessagesQuery:m,useGetChannelQuery:F,useUpdateChannelMutation:b,useLazyRemoveChannelQuery:y,useGetChannelsQuery:v,useCreateChannelMutation:k,useSendChannelMsgMutation:w,useAddMembersMutation:E,useRemoveMembersMutation:D,useUpdateIconMutation:C}=h},6432:(e,t,n)=>{"use strict";n.d(t,{C0:()=>m,N2:()=>f,QQ:()=>g,Uk:()=>b,bI:()=>p,bm:()=>y,eJ:()=>c,g$:()=>_,l4:()=>v,wv:()=>h});var r=n(9438),i=n(2867),a=n(7538),o=n(1690),s=n(4926),u=n(6565),l=n(1894),d=n(2304);const c=(0,r.LC)({reducerPath:"contactApi",baseQuery:a.Z,endpoints:e=>({getContacts:e.query({query:()=>({url:"user"}),transformResponse:e=>e.map((e=>{const t=0==e.avatar_updated_at?"":`${i.ZP}/resource/avatar?uid=${e.uid}&t=${e.avatar_updated_at}`;return e.avatar=t,e})),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;const a=localStorage.getItem(i.kK);try{const{data:e}=await r,t=e.find((e=>e.uid==a));if(t){const r=e.map((e=>e.uid==t.uid?{...e,online:!0}:e));n((0,o.fs)(t.uid)),n((0,u.g5)(r))}else n((0,o.sQ)())}catch{}}}),deleteContact:e.query({query:e=>({url:`/admin/user/${e}`,method:"DELETE"})}),updateContact:e.mutation({query:e=>{let{id:t,...n}=e;return{url:`/admin/user/${t}`,body:n,method:"PUT"}}}),updateMuteSetting:e.mutation({query:e=>({url:"/user/mute",method:"POST",body:e}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{await r,n((0,s.Uw)(e))}catch(i){}}}),updateAvatar:e.mutation({query:e=>({headers:{"content-type":"image/png"},url:"user/avatar",method:"POST",body:e})}),updateInfo:e.mutation({query:e=>({url:"user",method:"PUT",body:e})}),register:e.mutation({query:e=>({url:"user/register",method:"POST",body:e})}),sendMsg:e.mutation({query:e=>{let{id:t,content:n,type:r="text",properties:a=""}=e;return{headers:{"content-type":i.bT[r],"X-Properties":a?btoa(unescape(encodeURIComponent(JSON.stringify(a)))):""},url:`user/${t}/send`,method:"POST",body:"file"==r?JSON.stringify(n):n}},async onQueryStarted(e,t){await l.s.call(this,e,t,"user")}}),getHistoryMessages:e.query({query:e=>{let{id:t,mid:n=null,limit:r=100}=e;return{url:n?`/user/${t}/history?before=${n}&limit=${r}`:`/user/${t}/history?limit=${r}`}},async onQueryStarted(e,t){let{dispatch:n,getState:r,queryFulfilled:i}=t;const{data:a}=await i;null!==a&&void 0!==a&&a.length&&a.forEach((e=>{(0,d.Z)(e,n,r())}))}})})}),{useLazyGetHistoryMessagesQuery:f,useUpdateContactMutation:h,useUpdateMuteSettingMutation:p,useLazyDeleteContactQuery:g,useUpdateInfoMutation:_,useUpdateAvatarMutation:m,useGetContactsQuery:F,useLazyGetContactsQuery:b,useSendMsgMutation:y,useRegisterMutation:v}=c},1894:(e,t,n)=>{"use strict";n.d(t,{s:()=>l});var r=n(3657),i=n(3709),a=n(2867),o=n(445),s=n(5106),u=n(3247);const l=async function(e,t){var n;let{ignoreLocal:l=!1,id:d,content:c,type:f="text",from_uid:h,reply_mid:p=null,properties:g={local_id:+new Date}}=e,{dispatch:_,queryFulfilled:m}=t,F=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"channel";if("archive"==f)return;const b=null===(n=g.content_type)||void 0===n?void 0:n.startsWith("image"),y=g.local_id||+new Date,v={content:b?c.path:c,content_type:a.bT[f],created_at:y,properties:g,from_uid:h,reply_mid:p,sending:!0},k="channel"==F?o.p_:s.ZK,w="channel"==F?o.nF:s.Fs;l||(0,i.dC)((()=>{_((0,u.Hz)({mid:y,...v})),_(k({id:d,mid:y}))}));try{const{data:e}=await m;(0,i.dC)((()=>{_(w({id:d,mid:y})),_((0,u.Hz)({mid:e,...v})),_(k({id:d,mid:e}))})),setTimeout((()=>{_((0,u.Gd)(y))}),300)}catch{r.ZP.error("Send Message Failed"),_(w({id:d,mid:y})),_((0,u.Gd)(y))}}},5843:(e,t,n)=>{"use strict";n.d(t,{$_:()=>b,DJ:()=>c,OL:()=>g,Pq:()=>E,Yh:()=>y,c1:()=>d,hE:()=>C,jT:()=>f,mK:()=>p,o5:()=>D,qt:()=>w,rF:()=>h,rf:()=>F,uv:()=>_,wm:()=>v,xX:()=>k});var r=n(9438),i=n(2867),a=n(4926),o=n(7455),s=n(1894),u=n(4711),l=n(7538);const d=(0,r.LC)({reducerPath:"messageApi",baseQuery:l.Z,endpoints:e=>({editMessage:e.mutation({query:e=>{let{mid:t,content:n,type:r="text"}=e;return{headers:{"content-type":i.bT[r]},url:`/message/${t}/edit`,method:"PUT",body:n}}}),reactMessage:e.mutation({query:e=>{let{mid:t,action:n}=e;return{url:`/message/${t}/like`,method:"PUT",body:{action:n}}}}),deleteMessage:e.query({query:e=>({url:`/message/${e}`,method:"DELETE"})}),prepareUploadFile:e.mutation({query:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{url:"/resource/file/prepare",method:"POST",body:e}}}),createArchive:e.mutation({query:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{url:"/resource/archive",method:"POST",body:{mid_list:e}}}}),uploadFile:e.mutation({query:e=>({url:"/resource/file/upload",method:"POST",body:e}),transformResponse:e=>e||{}}),getOGInfo:e.query({query:e=>({url:`/resource/open_graphic_parse?url=${encodeURIComponent(e)}`})}),getArchiveMessage:e.query({query:e=>({url:`/resource/archive?file_path=${encodeURIComponent(e)}`})}),pinMessage:e.mutation({query:e=>{let{gid:t,mid:n}=e;return{url:`/group/${t}/pin`,method:"POST",body:{mid:n}}}}),unpinMessage:e.mutation({query:e=>{let{gid:t,mid:n}=e;return{url:`/group/${t}/unpin`,method:"POST",body:{mid:n}}}}),favoriteMessage:e.mutation({query:e=>({url:"/favorite",method:"POST",body:{mid_list:e}}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{const{data:e}=await r,{created_at:t,id:i}=e;n((0,o.a3)({id:i,created_at:t})),n(d.endpoints.getFavoriteDetails.initiate(i))}catch(i){}}}),removeFavorite:e.query({query:e=>({url:`/favorite/${e}`,method:"DELETE"}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{await r,n((0,o.r7)(e))}catch(i){}}}),getFavoriteDetails:e.query({query:e=>({url:`/favorite/${e}`}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r,getState:i}=t;try{const{data:t}=await r,a=i().authData.uid,s=(0,u.Hr)(t,e,a);n((0,o.qW)({id:e,messages:s}))}catch(a){}}}),getFavorites:e.query({query:()=>({url:"/favorite"}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{const{data:e}=await r;n((0,o.DA)(e));for(const t of e){const{id:e}=t;n(d.endpoints.getFavoriteDetails.initiate(e))}}catch(i){}}}),replyMessage:e.mutation({query:e=>{let{reply_mid:t,content:n,type:r="text"}=e;return{headers:{"content-type":i.bT[r]},url:`/message/${t}/reply`,method:"POST",body:n}},async onQueryStarted(e,t){await s.s.call(this,e,t,e.context)}}),readMessage:e.mutation({query:e=>({url:"/user/read-index",method:"POST",body:e}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;const{users:i=null,groups:o=null}=e;i&&n((0,a.RT)(i)),o&&n((0,a.TP)(o));try{await r}catch{}}})})}),{useLazyRemoveFavoriteQuery:c,useUnpinMessageMutation:f,useLazyGetFavoritesQuery:h,useFavoriteMessageMutation:p,usePinMessageMutation:g,useLazyGetArchiveMessageQuery:_,useGetArchiveMessageQuery:m,useLazyGetOGInfoQuery:F,usePrepareUploadFileMutation:b,useUploadFileMutation:y,useEditMessageMutation:v,useReactMessageMutation:k,useReplyMessageMutation:w,useLazyDeleteMessageQuery:E,useReadMessageMutation:D,useCreateArchiveMutation:C}=d},4695:(e,t,n)=>{"use strict";n.d(t,{$M:()=>S,BL:()=>I,CU:()=>B,D$:()=>g,FV:()=>_,I1:()=>u,Ke:()=>m,Ku:()=>c,QK:()=>R,QP:()=>k,Qg:()=>h,R:()=>d,WO:()=>E,bx:()=>F,e2:()=>A,eM:()=>f,gU:()=>N,jd:()=>T,kv:()=>y,n8:()=>p,p5:()=>l,rW:()=>b,vF:()=>D,ww:()=>v,z3:()=>C});var r=n(9438),i=n(2867),a=n(39),o=n(7538);const s=604800,u=(0,r.LC)({reducerPath:"serverApi",baseQuery:o.Z,endpoints:e=>({getServer:e.query({query:()=>({url:"admin/system/organization"}),transformResponse:e=>(e.logo=`${i.ZP}/resource/organization/logo?t=${+new Date}`,e),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{const{data:e}=await r;n((0,a.rn)(e))}catch{}}}),getThirdPartySecret:e.query({query:()=>({url:"/admin/system/third_party_secret",responseHandler:e=>e.text()}),keepUnusedDataFor:0}),updateThirdPartySecret:e.mutation({query:()=>({url:"/admin/system/third_party_secret",method:"POST",responseHandler:e=>e.text()})}),getMetrics:e.query({query:()=>({url:"/admin/system/metrics"})}),getServerVersion:e.query({query:()=>({headers:{accept:"text/plain"},url:"/admin/system/version",responseHandler:e=>e.text()})}),getFirebaseConfig:e.query({query:()=>({url:"admin/fcm/config"})}),getGoogleAuthConfig:e.query({query:()=>({url:"admin/google_auth/config"})}),updateGoogleAuthConfig:e.mutation({query:e=>({url:"admin/google_auth/config",method:"POST",body:e})}),getGithubAuthConfig:e.query({query:()=>({url:"admin/github_auth/config"})}),updateGithubAuthConfig:e.mutation({query:e=>({url:"admin/github_auth/config",method:"POST",body:e})}),sendTestEmail:e.mutation({query:e=>({url:"/admin/system/send_mail",method:"POST",body:e})}),updateFirebaseConfig:e.mutation({query:e=>({url:"admin/fcm/config",method:"POST",body:e})}),getAgoraConfig:e.query({query:()=>({url:"admin/agora/config"})}),updateAgoraConfig:e.mutation({query:e=>({url:"admin/agora/config",method:"POST",body:e})}),getSMTPConfig:e.query({query:()=>({url:"admin/smtp/config"})}),getSMTPStatus:e.query({query:()=>({url:"/admin/smtp/enabled"})}),updateSMTPConfig:e.mutation({query:e=>({url:"admin/smtp/config",method:"POST",body:e})}),getLoginConfig:e.query({query:()=>({url:"admin/login/config"})}),updateLoginConfig:e.mutation({query:e=>({url:"admin/login/config",method:"POST",body:e})}),updateLogo:e.mutation({query:e=>({headers:{"content-type":"image/png"},url:"admin/system/organization/logo",method:"POST",body:e}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r}=t;try{await r,n((0,a.rn)({logo:`${i.ZP}/resource/organization/logo?t=${+new Date}`}))}catch{}}}),createInviteLink:e.query({query:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;return{headers:{"content-type":"text/plain",accept:"text/plain"},url:`/admin/system/create_invite_link?expired_in=${e}`,responseHandler:e=>e.text()}},transformResponse:e=>{const t=new URL(e);return`${location.origin}${t.pathname}${t.search}${t.hash}`}}),updateServer:e.mutation({query:e=>({url:"admin/system/organization",method:"POST",body:e}),async onQueryStarted(e,t){let{dispatch:n,queryFulfilled:r,getState:i}=t;const{name:o,description:s}=i().server;n((0,a.rn)(e));try{await r}catch{n((0,a.rn)({name:o,description:s}))}}}),createAdmin:e.mutation({query:e=>({url:"/admin/system/create_admin",method:"POST",body:e})}),getInitialized:e.query({query:()=>({url:"/admin/system/initialized"})})})}),{useGetServerVersionQuery:l,useGetGithubAuthConfigQuery:d,useUpdateGithubAuthConfigMutation:c,useGetGoogleAuthConfigQuery:f,useUpdateGoogleAuthConfigMutation:h,useGetSMTPStatusQuery:p,useSendTestEmailMutation:g,useUpdateFirebaseConfigMutation:_,useLazyGetFirebaseConfigQuery:m,useLazyGetAgoraConfigQuery:F,useLazyGetSMTPConfigQuery:b,useLazyGetLoginConfigQuery:y,useGetLoginConfigQuery:v,useUpdateLoginConfigMutation:k,useGetSMTPConfigQuery:w,useUpdateSMTPConfigMutation:E,useUpdateAgoraConfigMutation:D,useGetServerQuery:C,useGetMetricsQuery:x,useLazyGetServerQuery:S,useUpdateServerMutation:A,useUpdateLogoMutation:T,useCreateInviteLinkQuery:O,useLazyCreateInviteLinkQuery:B,useGetThirdPartySecretQuery:I,useUpdateThirdPartySecretMutation:N,useCreateAdminMutation:R,useGetInitializedQuery:P}=u},1690:(e,t,n)=>{"use strict";n.d(t,{A3:()=>l,R4:()=>u,ZP:()=>h,fs:()=>c,jM:()=>f,sQ:()=>d});var r=n(2379),i=n(2867);const a={initialized:!0,uid:null,token:localStorage.getItem(i.JE),expireTime:localStorage.getItem(i.Wv)||+new Date,refreshToken:localStorage.getItem(i.Ie)},o={initialized:!0,uid:null,token:null,expireTime:+new Date,refreshToken:null},s=(0,r.oM)({name:"authData",initialState:a,reducers:{setAuthData(e,t){const{initialized:n=!0,user:{uid:r},token:a,refresh_token:o,expired_in:s=0}=t.payload;e.initialized=n,e.uid=r,e.token=a,e.refreshToken=o;const u=+new Date+1e3*Number(s);e.expireTime=u,localStorage.setItem(i.Wv,u),localStorage.setItem(i.JE,a),localStorage.setItem(i.Ie,o),localStorage.setItem(i.kK,r)},resetAuthData:()=>(localStorage.removeItem(i.Wv),localStorage.removeItem(i.JE),localStorage.removeItem(i.Ie),localStorage.removeItem(i.kK),localStorage.removeItem(i.R1),o),setUid(e,t){const n=t.payload;e.uid=n},updateInitialized(e,t){const n=t.payload;e.initialized=n},updateToken(e,t){const{token:n,refresh_token:r,expired_in:a}=t.payload;e.token=n;const o=+new Date+1e3*Number(a);e.expireTime=o,e.refreshToken=r,localStorage.setItem(i.Wv,o),localStorage.setItem(i.JE,n),localStorage.setItem(i.Ie,r)}}}),{updateInitialized:u,setAuthData:l,resetAuthData:d,setUid:c,updateToken:f}=s.actions,h=s.reducer},332:(e,t,n)=>{"use strict";n.d(t,{LT:()=>l,OG:()=>h,ZP:()=>p,ac:()=>u,fS:()=>d,mR:()=>c,pW:()=>f});var r=n(2379),i=n(2867),a=n(4711);const o={ids:[],byId:{}},s=(0,r.oM)({name:"channels",initialState:o,reducers:{resetChannels:()=>o,fullfillChannels(e,t){const n=t.payload||[];e.ids=n.map((e=>{let{gid:t}=e;return+t})),e.byId=Object.fromEntries(n.map((e=>{const{gid:t,avatar_updated_at:n}=e;return e.icon=0==n?"":`${i.ZP}/resource/group_avatar?gid=${t}&t=${n}`,[t,e]})))},addChannel(e,t){const n=t.payload,{gid:r,avatar_updated_at:a}=n;e.ids.includes(+r)||e.ids.push(+r),e.byId[r]={...n,icon:0==a?"":`${i.ZP}/resource/group_avatar?gid=${r}&t=${a}`}},updateChannel(e,t){const{id:n,operation:r,members:i=[],...o}=t.payload,s=e.byId[n];if(!(!s||s.is_public&&["add_member","remove_member"].includes(r)))switch(r){case"remove_member":{const t=e.byId[n].members.filter((e=>-1==i.findIndex((t=>t==e))));e.byId[n].members=t}break;case"add_member":{const t=e.byId[n].members,r=new Set([...t,...i]);e.byId[n].members=[...r]}break;default:e.byId[n]={...e.byId[n],...(0,a.lg)(o)}}},updatePinMessage(e,t){var n;const{gid:r,mid:i,msg:a}=t.payload;let o=null===(n=e.byId[r])||void 0===n?void 0:n.pinned_messages;if(o)if(a)if(o){const e=o.findIndex((e=>e.mid==i));e>-1&&o.splice(e,1),o.push(a)}else o=[a];else{const e=o.findIndex((e=>e.mid==i));e>-1&&o.splice(e,1)}},removeChannel(e,t){const n=t.payload,r=e.ids.findIndex((e=>e==n));r>-1&&(e.ids.splice(r,1),delete e.byId[n])}}}),{updatePinMessage:u,resetChannels:l,fullfillChannels:d,addChannel:c,updateChannel:f,removeChannel:h}=s.actions,p=s.reducer},6565:(e,t,n)=>{"use strict";n.d(t,{T9:()=>u,ZP:()=>f,_D:()=>c,g5:()=>l,ii:()=>d});var r=n(2379),i=n(4711),a=n(2867);const o={ids:[],byId:{}},s=(0,r.oM)({name:"contacts",initialState:o,reducers:{resetContacts:()=>o,fullfillContacts(e,t){const n=t.payload||[];e.ids=n.map((e=>{let{uid:t}=e;return t})),e.byId=Object.fromEntries(n.map((e=>{const{uid:t}=e;return[t,e]})))},removeContact(e,t){const n=t.payload;e.ids=e.ids.filter((e=>e!=n)),delete e.byId[n]},updateUsersByLogs(e,t){t.payload.forEach((t=>{let{action:n,uid:r,...o}=t;switch(n){case"update":{const t=(0,i.lg)(o);e.byId[r]&&Object.keys(t).forEach((n=>{e.byId[r][n]=t[n],"avatar_updated_at"==n&&(e.byId[r].avatar=`${a.ZP}/resource/avatar?uid=${r}&t=${t[n]}`)}))}break;case"create":e.byId[r]={uid:r,...o};-1==e.ids.findIndex((e=>e==r))&&e.ids.push(r);break;case"delete":{const t=e.ids.findIndex((e=>e==r));t>-1&&(e.ids.splice(t,1),delete e.byId[r])}}}))},updateUsersStatus(e,t){t.payload.forEach((t=>{const{uid:n,online:r=!1}=t;e.byId[n]&&(e.byId[n].online=r)}))}}}),{resetContacts:u,fullfillContacts:l,updateUsersByLogs:d,updateUsersStatus:c}=s.actions,f=s.reducer},7455:(e,t,n)=>{"use strict";n.d(t,{DA:()=>o,ZP:()=>u,a3:()=>i,qW:()=>s,r7:()=>a});const r=(0,n(2379).oM)({name:"favorites",initialState:[],reducers:{fullfillFavorites:(e,t)=>t.payload,addFavorite(e,t){e.push(t.payload)},deleteFavorite(e,t){const n=t.payload,r=e.findIndex((e=>e.id==n));r>-1&&e.splice(r,1)},populateFavorite(e,t){const{id:n,messages:r}=t.payload,i=e.findIndex((e=>e.id==n));i>-1&&(e[i].messages=r)}}}),{addFavorite:i,deleteFavorite:a,fullfillFavorites:o,populateFavorite:s}=r.actions,u=r.reducer},4926:(e,t,n)=>{"use strict";n.d(t,{$F:()=>o,GV:()=>s,PN:()=>u,RT:()=>c,TP:()=>d,Uw:()=>f,ZP:()=>h,uM:()=>l});var r=n(2379);const i={usersVersion:0,afterMid:0,readUsers:{},readChannels:{},muteUsers:{},muteChannels:{}},a=(0,r.oM)({name:"footprint",initialState:i,reducers:{resetFootprint:()=>i,fullfillFootprint(e,t){const{usersVersion:n=0,afterMid:r=0,readUsers:i={},readChannels:a={},muteUsers:o={},muteChannels:s={}}=t.payload;return{usersVersion:n,afterMid:r,readUsers:i,readChannels:a,muteUsers:o,muteChannels:s}},updateUsersVersion(e,t){const n=t.payload;e.usersVersion=n},updateAfterMid(e,t){const n=t.payload;e.afterMid=n},updateMute(e,t){const n=t.payload||{};Object.keys(n).forEach((t=>{switch(t){case"remove_users":n.remove_users.forEach((t=>{delete e.muteUsers[t]}));break;case"remove_groups":n.remove_groups.forEach((t=>{delete e.muteChannels[t]}));break;case"add_users":n.add_users.forEach((t=>{let{uid:n,expired_in:r=null}=t;e.muteUsers[n]={expired_in:r}}));break;case"add_groups":n.add_groups.forEach((t=>{let{gid:n,expired_in:r=null}=t;e.muteChannels[n]={expired_in:r}}))}}))},updateReadUsers(e,t){const n=t.payload||[];0!=n.length&&n.forEach((t=>{let{uid:n,mid:r}=t;e.readUsers[n]=r}))},updateReadChannels(e,t){const n=t.payload||[];0!=n.length&&n.forEach((t=>{let{gid:n,mid:r}=t;e.readChannels[n]=r}))}}}),{resetFootprint:o,fullfillFootprint:s,updateAfterMid:u,updateUsersVersion:l,updateReadChannels:d,updateReadUsers:c,updateMute:f}=a.actions,h=a.reducer},445:(e,t,n)=>{"use strict";n.d(t,{Ie:()=>u,XK:()=>s,YZ:()=>o,ZP:()=>f,nF:()=>d,p_:()=>l});var r=n(2379);const i={},a=(0,r.oM)({name:"channelMessage",initialState:i,reducers:{resetChannelMsg:()=>i,fullfillChannelMsg:(e,t)=>t.payload,addChannelMsg(e,t){const{id:n,mid:r,local_id:i=null}=t.payload;if(e[n]){const t=e[n].findIndex((e=>e==r))>-1,a=e[n].findIndex((e=>e==i))>-1;if(t||a)return;e[n].push(+r)}else e[n]=[+r]},removeChannelMsg(e,t){const{id:n,mid:r}=t.payload;if(e[n]){const t=e[n].findIndex((e=>e==r));t>-1&&e[n].splice(t,1)}},replaceChannelMsg(e,t){const{id:n,localMid:r,serverMid:i}=t.payload;if(e[n]){const t=e[n].findIndex((e=>e==r));t>-1&&i&&e[n].splice(t,1,i)}},removeChannelSession(e,t){(Array.isArray(t.payload)?t.payload:[t.payload]).forEach((t=>{delete e[t]}))}}}),{removeChannelSession:o,resetChannelMsg:s,fullfillChannelMsg:u,addChannelMsg:l,removeChannelMsg:d,replaceChannelMsg:c}=a.actions,f=a.reducer},8109:(e,t,n)=>{"use strict";n.d(t,{$k:()=>l,D$:()=>u,I6:()=>s,XD:()=>o,ZP:()=>d});var r=n(2379);const i=[],a=(0,r.oM)({name:"fileMessage",initialState:i,reducers:{resetFileMessage:()=>i,fullfillFileMessage:(e,t)=>t.payload||[],addFileMessage(e,t){const n=t.payload;-1==e.findIndex((e=>e==n))&&e.unshift(+n)},removeFileMessage(e,t){(Array.isArray(t.payload)?t.payload:[t.payload]).forEach((t=>{const n=e.findIndex((e=>e==t));n>-1&&e.splice(n,1)}))}}}),{removeFileMessage:o,resetFileMessage:s,fullfillFileMessage:u,addFileMessage:l}=a.actions,d=a.reducer},3247:(e,t,n)=>{"use strict";n.d(t,{Gd:()=>h,Hz:()=>f,MQ:()=>p,TB:()=>u,XS:()=>g,ZP:()=>_,Zl:()=>l,o6:()=>c});var r=n(2379),i=n(2867),a=n(4711);const o={replying:{}},s=(0,r.oM)({name:"message",initialState:o,reducers:{resetMessage:()=>o,fullfillMessage:(e,t)=>Object.assign({...o},t.payload),updateMessage(e,t){const{mid:n,...r}=t.payload;e[n]={...e[n],...r}},addMessage(e,t){const n=t.payload,{mid:r,sending:o,content_type:s,content:u,properties:l={}}=n;if(o&&e[r])return;const d=s==i.bT.file,c=null!==l&&void 0!==l?l:{},f=(0,a.Or)(c.content_type,c.size);d&&(o?f&&(n.thumbnail=u):(n.file_path=u,n.content=`${i.ZP}/resource/file?file_path=${encodeURIComponent(n.file_path)}`,n.download=`${i.ZP}/resource/file?file_path=${encodeURIComponent(n.file_path)}&download=true`,n.thumbnail=f?`${i.ZP}/resource/file?file_path=${encodeURIComponent(n.file_path)}&thumbnail=true`:"")),e[r]=n},removeMessage(e,t){(Array.isArray(t.payload)?t.payload:[t.payload]).forEach((t=>{delete e[t]}))},addReplyingMessage(e,t){const{key:n,mid:r}=t.payload;e.replying[n]=r},removeReplyingMessage(e,t){const n=t.payload;e.replying[n]&&delete e.replying[n]}}}),{resetMessage:u,fullfillMessage:l,setMessage:d,updateMessage:c,addMessage:f,removeMessage:h,addReplyingMessage:p,removeReplyingMessage:g}=s.actions,_=s.reducer},9899:(e,t,n)=>{"use strict";n.d(t,{FM:()=>o,ZP:()=>d,fr:()=>l,kh:()=>s,tG:()=>u});var r=n(2379);const i={},a=(0,r.oM)({name:"reactionMessage",initialState:i,reducers:{resetReactionMessage:()=>i,fullfillReactionMessage:(e,t)=>t.payload,removeReactionMessage(e,t){(Array.isArray(t.payload)?t.payload:[t.payload]).forEach((t=>{delete e[t]}))},toggleReactionMessage(e,t){const{from_uid:n,mid:r,rid:i,action:a}=t.payload;if(!(e[i]||!1)){if(e[r]||(e[r]={}),e[r][a]){const t=e[r][a],i=t.findIndex((e=>e==n));i>-1?(t.splice(i,1),0==t.length&&delete e[r][a]):t.push(n)}else e[r][a]=[n];e[i]=!0}}}}),{removeReactionMessage:o,resetReactionMessage:s,fullfillReactionMessage:u,toggleReactionMessage:l}=a.actions,d=a.reducer},5106:(e,t,n)=>{"use strict";n.d(t,{Fs:()=>d,Qc:()=>u,So:()=>o,ZK:()=>l,ZP:()=>f,af:()=>s});var r=n(2379);const i={ids:[],byId:{}},a=(0,r.oM)({name:"userMessage",initialState:i,reducers:{resetUserMsg:()=>i,fullfillUserMsg(e,t){e.ids=Object.keys(t.payload),e.byId=t.payload},addUserMsg(e,t){const{id:n,mid:r,local_id:i}=t.payload;if(e.byId[n]){const t=e.byId[n].findIndex((e=>e==r))>-1,a=e.byId[n].findIndex((e=>e==i))>-1;if(t||a)return;e.byId[n].push(+r),-1==e.ids.findIndex((e=>e==n))&&e.ids.push(+n)}else e.byId[n]=[+r],e.ids.push(+n)},removeUserMsg(e,t){const{id:n,mid:r}=t.payload;if(e.byId[n]){const t=e.byId[n].findIndex((e=>e==r));t>-1&&e.byId[n].splice(t,1)}},replaceUserMsg(e,t){const{id:n,localMid:r,serverMid:i}=t.payload;if(e.byId[n]){const t=e.byId[n].findIndex((e=>e==r));t>-1&&i&&e.byId[n].splice(t,1,i)}},removeUserSession(e,t){const n=Array.isArray(t.payload)?t.payload:[t.payload];e.ids=e.ids.filter((e=>-1==n.findIndex((t=>t==e))))}}}),{removeUserSession:o,resetUserMsg:s,fullfillUserMsg:u,addUserMsg:l,removeUserMsg:d,replaceUserMsg:c}=a.actions,f=a.reducer},39:(e,t,n)=>{"use strict";n.d(t,{EM:()=>u,ZP:()=>l,rn:()=>o});var r=n(2379);const i={name:"",description:"",logo:"",inviteLink:{link:"",expire:0}},a=(0,r.oM)({name:"server",initialState:i,reducers:{resetServer:()=>i,fullfillServer(e,t){const{inviteLink:n={link:"",expire:0},name:r="",description:i=""}=t.payload||{};return{name:r,description:i,inviteLink:n}},updateInfo(e,t){const n=t.payload||{};Object.keys(n).forEach((t=>{e[t]=n[t]}))}}}),{updateInfo:o,resetServer:s,fullfillServer:u}=a.actions,l=a.reducer},5018:(e,t,n)=>{"use strict";n.d(t,{$K:()=>_,Cz:()=>m,Gy:()=>h,In:()=>c,Uc:()=>s,Ul:()=>g,XH:()=>l,ZP:()=>F,o3:()=>u,tD:()=>f,u2:()=>o});var r=n(2379);const i={online:!0,ready:!1,userGuide:{visible:!1,step:1},inputMode:"text",menuExpand:!1,fileListView:n(2867).kO.grid,uploadFiles:{},selectMessages:{},draftMarkdown:{},draftMixedText:{},remeberedNavs:{chat:null,contact:null}},a=(0,r.oM)({name:"ui",initialState:i,reducers:{fullfillUI:(e,t)=>({...i,...t.payload}),setReady(e){e.ready=!0},updateOnline(e,t){e.online=t.payload},toggleMenuExpand(e){e.menuExpand=!e.menuExpand},updateInputMode(e,t){e.inputMode=t.payload},updateFileListView(e,t){e.fileListView=t.payload},updateRemeberedNavs(e,t){const{key:n="chat",path:r=null}=t.payload||{};e.remeberedNavs[n]=r},updateDraftMarkdown(e,t){const{key:n,value:r}=t.payload;e.draftMarkdown[n]=r},updateDraftMixedText(e,t){const{key:n,value:r}=t.payload;e.draftMixedText[n]=r},updateUserGuide(e,t){const n=t.payload||{};Object.keys(n).forEach((t=>{e.userGuide[t]=n[t]}))},updateUploadFiles(e,t){const{context:n="channel",id:r=null,operation:i="add",...a}=t.payload;if(!r||!n)return;const o=`${n}_${r}`;let s=e.uploadFiles[o];switch(i){case"add":{const{data:t}=a,n=Array.isArray(t);s?n?t.forEach((e=>{s.push(e)})):s.push(a):e.uploadFiles[o]=n?t:[t]}break;case"reset":e.uploadFiles[o]=[];break;case"remove":{const{index:e}=a,t=s[e];t&&(s.splice(e,1),URL.revokeObjectURL(t.url))}break;case"update":{const{index:e,name:t}=a,n=s[e];n&&(n.name=t)}}},updateSelectMessages(e,t){const{context:n="channel",id:r=null,operation:i="add",data:a=null}=t.payload;let o=e.selectMessages[`${n}_${r}`];switch(i){case"add":o=o?[...o,a]:[a];break;case"remove":o=o.filter((e=>e!=a));break;case"reset":o=null}e.selectMessages[`${n}_${r}`]=o}}}),{fullfillUI:o,setReady:s,updateOnline:u,updateInputMode:l,toggleMenuExpand:d,updateFileListView:c,updateUploadFiles:f,updateSelectMessages:h,updateUserGuide:p,updateDraftMarkdown:g,updateDraftMixedText:_,updateRemeberedNavs:m}=a.actions,F=a.reducer},7364:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r,i=n(7313),a=n(9184),o=n(9784);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}const u=(e,t)=>{let{title:n,titleId:a,...o}=e;return i.createElement("svg",s({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},o),n?i.createElement("title",{id:a},n):null,r||(r=i.createElement("path",{d:"M11.0004 17.5C11.0004 16.2111 11.3755 15.0098 12.0226 13.9993L4.25278 13.9999C3.01076 13.9999 2.00391 15.0068 2.00391 16.2488V17.1688C2.00391 17.7409 2.18231 18.2987 2.51427 18.7646C4.05643 20.9289 6.5794 22.0011 10.0004 22.0011C10.9317 22.0011 11.7966 21.9216 12.5921 21.7615C11.6006 20.6205 11.0004 19.1303 11.0004 17.5ZM15.0004 7.00464C15.0004 4.24321 12.7618 2.00464 10.0004 2.00464C7.23894 2.00464 5.00036 4.24321 5.00036 7.00464C5.00036 9.76606 7.23894 12.0046 10.0004 12.0046C12.7618 12.0046 15.0004 9.76606 15.0004 7.00464ZM23.0004 17.5C23.0004 14.4624 20.5379 12 17.5004 12C14.4628 12 12.0004 14.4624 12.0004 17.5C12.0004 20.5376 14.4628 23 17.5004 23C20.5379 23 23.0004 20.5376 23.0004 17.5ZM17.4105 14.008L17.5004 14L17.5902 14.008C17.7943 14.0451 17.9553 14.206 17.9923 14.4101L18.0004 14.5L17.9994 17H20.5043L20.5942 17.0081C20.7982 17.0451 20.9592 17.206 20.9962 17.4101L21.0043 17.5L20.9962 17.5899C20.9592 17.794 20.7982 17.9549 20.5942 17.9919L20.5043 18H17.9994L18.0004 20.5L17.9923 20.5899C17.9553 20.794 17.7943 20.9549 17.5902 20.9919L17.5004 21L17.4105 20.9919C17.2064 20.9549 17.0455 20.794 17.0084 20.5899L17.0004 20.5L16.9994 18H14.5043L14.4144 17.9919C14.2103 17.9549 14.0494 17.794 14.0123 17.5899L14.0043 17.5L14.0123 17.4101C14.0494 17.206 14.2103 17.0451 14.4144 17.0081L14.5043 17H16.9994L17.0004 14.5L17.0084 14.4101C17.0455 14.206 17.2064 14.0451 17.4105 14.008Z",fill:"#70707B"})))},l=(0,i.forwardRef)(u);var d;function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}const f=(e,t)=>{let{title:n,titleId:r,...a}=e;return i.createElement("svg",c({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?i.createElement("title",{id:r},n):null,d||(d=i.createElement("path",{d:"M10 1.75C14.5563 1.75 18.25 5.44365 18.25 10C18.25 12.8269 17.0262 14.75 15 14.75C13.7958 14.75 12.8751 14.0708 12.3262 12.9264C11.6738 13.7512 10.7016 14.25 9.5 14.25C7.20741 14.25 5.75 12.4342 5.75 10C5.75 7.53639 7.16021 5.75 9.5 5.75C10.3964 5.75 11.1564 6.01222 11.753 6.47429C11.7643 6.07167 12.0946 5.75 12.5 5.75C12.8797 5.75 13.1935 6.03215 13.2432 6.39823L13.25 6.5V10C13.25 12.1017 13.9808 13.25 15 13.25C16.0192 13.25 16.75 12.1017 16.75 10C16.75 6.27208 13.7279 3.25 10 3.25C6.27208 3.25 3.25 6.27208 3.25 10C3.25 13.7279 6.27208 16.75 10 16.75C10.794 16.75 11.5682 16.6132 12.2981 16.3489C12.6876 16.2079 13.1176 16.4093 13.2587 16.7988C13.3997 17.1883 13.1982 17.6183 12.8088 17.7593C11.9157 18.0827 10.9688 18.25 10 18.25C5.44365 18.25 1.75 14.5563 1.75 10C1.75 5.44365 5.44365 1.75 10 1.75ZM9.5 7.25C8.07681 7.25 7.25 8.29737 7.25 10C7.25 11.6694 8.11734 12.75 9.5 12.75C10.8827 12.75 11.75 11.6694 11.75 10C11.75 8.29737 10.9232 7.25 9.5 7.25Z",fill:"#475467"})))},h=(0,i.forwardRef)(f);var p=n(9269),g=n(4801),_=n(5123),m=n(4851),F=n(6417);const b=a.ZP.ul`
  z-index: 999;
  user-select: none;
  box-shadow: 0px 24px 48px -12px rgba(16, 24, 40, 0.18);
  border-radius: 12px;
  color: #616161;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 4px;
  .item {
    border-radius: 3px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    padding: 10px 8px;
    &:hover {
      background: rgba(116, 127, 141, 0.2);
    }
    .icon {
      width: 20px;
      height: 20px;
      path {
        fill: #475467;
      }
    }
  }
`;function y(){const[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)(!1),[a,s]=(0,i.useState)(!1),[u,d]=(0,i.useState)(!1),c=()=>{r((e=>(e||(0,o.Bn)(),!e)))},f=()=>{d((e=>(e||(0,o.Bn)(),!e)))};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(b,{children:[(0,F.jsxs)("li",{className:"item",onClick:(e=>{t(e),s(!0),(0,o.Bn)()}).bind(null,!0),children:[(0,F.jsx)(p.Z,{personal:!0,className:"icon"}),"New Private Channel"]}),(0,F.jsxs)("li",{className:"item",onClick:f,children:[(0,F.jsx)(h,{className:"icon"}),"New Message"]}),(0,F.jsxs)("li",{className:"item",onClick:c,children:[(0,F.jsx)(l,{className:"icon"}),"Invite People"]})]}),a&&(0,F.jsx)(g.Z,{personal:e,closeModal:()=>{s(!1)}}),u&&(0,F.jsx)(_.Z,{closeModal:f}),n&&(0,F.jsx)(m.Z,{closeModal:c})]})}},5536:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(7313),i=n(4711),a=n(6417);const o=e=>{let{url:t="",name:n="unkonw name",type:o="user",...s}=e;const[u,l]=(0,r.useState)("");return(0,r.useEffect)((()=>{if(t)l(t);else{const e=(0,i.eD)({initials:(0,i.Qm)(n),background:"channel"==o?"#EAECF0":void 0,foreground:"channel"==o?"#475467":void 0});l(e)}}),[t,n]),u?(0,a.jsx)("img",{src:u,onError:e=>{const t=(0,i.eD)({initials:(0,i.Qm)(n),background:"channel"==o?"#EAECF0":void 0,foreground:"channel"==o?"#475467":void 0});l(t)},...s}):null},s=(0,r.memo)(o,((e,t)=>e.url==t.url))},4075:(e,t,n)=>{"use strict";n.d(t,{Z:()=>B});var r,i,a=n(7313),o=n(9184),s=n(4801),u=n(4851);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const d=(e,t)=>{let{title:n,titleId:o,...s}=e;return a.createElement("svg",l({width:40,height:41,viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},s),n?a.createElement("title",{id:o},n):null,r||(r=a.createElement("path",{d:"M0 20.5C0 9.45431 8.95431 0.5 20 0.5C31.0457 0.5 40 9.45431 40 20.5C40 31.5457 31.0457 40.5 20 40.5C8.95431 40.5 0 31.5457 0 20.5Z",fill:"#BDB4FE"})),i||(i=a.createElement("path",{d:"M30 20.5C30 14.9772 25.5228 10.5 20 10.5C14.4772 10.5 10 14.9772 10 20.5C10 22.1428 10.3972 23.7294 11.1449 25.1502L10.0285 29.4386C9.99198 29.5791 9.99199 29.7266 10.0286 29.867C10.1469 30.3213 10.6111 30.5937 11.0654 30.4753L15.3558 29.3583C16.7752 30.1039 18.3596 30.5 20 30.5C25.5228 30.5 30 26.0228 30 20.5ZM20 16.5C21.1046 16.5 22 17.3954 22 18.5V22.5C22 23.6046 21.1046 24.5 20 24.5H17C15.8954 24.5 15 23.6046 15 22.5V18.5C15 17.3954 15.8954 16.5 17 16.5H20ZM23 21.6619V19.3382L24.7344 17.6963C25.2125 17.2437 26 17.5826 26 18.2409V22.7591C26 23.4174 25.2125 23.7563 24.7344 23.3037L23 21.6619Z",fill:"white"})))},c=(0,a.forwardRef)(d);var f,h;function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}const g=(e,t)=>{let{title:n,titleId:r,...i}=e;return a.createElement("svg",p({width:40,height:41,viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,f||(f=a.createElement("path",{d:"M0 20.5C0 9.45431 8.95431 0.5 20 0.5C31.0457 0.5 40 9.45431 40 20.5C40 31.5457 31.0457 40.5 20 40.5C8.95431 40.5 0 31.5457 0 20.5Z",fill:"#ACDC79"})),h||(h=a.createElement("path",{d:"M20 10.5C25.523 10.5 30 14.978 30 20.5C30 26.022 25.523 30.5 20 30.5C14.477 30.5 10 26.022 10 20.5C10 14.978 14.477 10.5 20 10.5ZM20 24C19.4477 24 19 24.4477 19 25C19 25.5523 19.4477 26 20 26C20.5523 26 21 25.5523 21 25C21 24.4477 20.5523 24 20 24ZM20 15.25C18.4812 15.25 17.25 16.4812 17.25 18C17.25 18.4142 17.5858 18.75 18 18.75C18.3797 18.75 18.6935 18.4678 18.7432 18.1018L18.75 18C18.75 17.3096 19.3096 16.75 20 16.75C20.6904 16.75 21.25 17.3096 21.25 18C21.25 18.5388 21.115 18.8053 20.6051 19.3322L20.4697 19.4697C19.5916 20.3478 19.25 20.9171 19.25 22C19.25 22.4142 19.5858 22.75 20 22.75C20.4142 22.75 20.75 22.4142 20.75 22C20.75 21.4612 20.885 21.1947 21.3949 20.6678L21.5303 20.5303C22.4084 19.6522 22.75 19.0829 22.75 18C22.75 16.4812 21.5188 15.25 20 15.25Z",fill:"white"})))},_=(0,a.forwardRef)(g);var m,F;function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}const y=(e,t)=>{let{title:n,titleId:r,...i}=e;return a.createElement("svg",b({width:40,height:41,viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,m||(m=a.createElement("path",{d:"M0 20.5C0 9.45431 8.95431 0.5 20 0.5C31.0457 0.5 40 9.45431 40 20.5C40 31.5457 31.0457 40.5 20 40.5C8.95431 40.5 0 31.5457 0 20.5Z",fill:"#FDE272"})),F||(F=a.createElement("path",{d:"M25.5 20.5C28.5376 20.5 31 22.9624 31 26C31 29.0376 28.5376 31.5 25.5 31.5C22.4624 31.5 20 29.0376 20 26C20 22.9624 22.4624 20.5 25.5 20.5ZM12 21.499L20.8094 21.5002C19.6887 22.6681 19 24.2536 19 26C19 27.0874 19.267 28.1124 19.739 29.013C18.6887 29.363 17.5306 29.5 16.5 29.5C13.7779 29.5 10.1647 28.544 10.0055 25.2296L10 25V23.499C10 22.395 10.896 21.499 12 21.499ZM25.5 22.5016L25.4101 22.5096C25.206 22.5467 25.0451 22.7076 25.0081 22.9117L25 23.0016V25.4996L22.5 25.5L22.4101 25.5081C22.206 25.5451 22.0451 25.706 22.0081 25.9101L22 26L22.0081 26.0899C22.0451 26.294 22.206 26.4549 22.4101 26.4919L22.5 26.5L25 26.4996V29L25.0081 29.0899C25.0451 29.294 25.206 29.4549 25.4101 29.4919L25.5 29.5L25.5899 29.4919C25.794 29.4549 25.9549 29.294 25.9919 29.0899L26 29V26.4996L28.5 26.5L28.5899 26.4919C28.794 26.4549 28.9549 26.294 28.9919 26.0899L29 26L28.9919 25.9101C28.9549 25.706 28.794 25.5451 28.5899 25.5081L28.5 25.5L26 25.4996V23.0016L25.9919 22.9117C25.9549 22.7076 25.794 22.5467 25.5899 22.5096L25.5 22.5016ZM16.5 10.5C18.985 10.5 21 12.515 21 15C21 17.485 18.985 19.5 16.5 19.5C14.015 19.5 12 17.485 12 15C12 12.515 14.015 10.5 16.5 10.5ZM25.5 12.5C27.433 12.5 29 14.067 29 16C29 17.933 27.433 19.5 25.5 19.5C23.567 19.5 22 17.933 22 16C22 14.067 23.567 12.5 25.5 12.5Z",fill:"white"})))},v=(0,a.forwardRef)(y);var k,w;function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}const D=(e,t)=>{let{title:n,titleId:r,...i}=e;return a.createElement("svg",E({width:40,height:41,viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,k||(k=a.createElement("path",{d:"M0 20.5C0 9.45431 8.95431 0.5 20 0.5C31.0457 0.5 40 9.45431 40 20.5C40 31.5457 31.0457 40.5 20 40.5C8.95431 40.5 0 31.5457 0 20.5Z",fill:"#FF9C66"})),w||(w=a.createElement("path",{d:"M16.2554 17.4999C17.2219 17.4999 18.0054 18.2834 18.0054 19.2499V28.75C18.0054 29.7165 17.2219 30.5 16.2554 30.5H11.751C10.7845 30.5 10.001 29.7165 10.001 28.75V19.2499C10.001 18.2834 10.7845 17.4999 11.751 17.4999H16.2554ZM14.2532 26.9952H13.7532L13.6514 27.002C13.2853 27.0517 13.0032 27.3655 13.0032 27.7452C13.0032 28.1249 13.2853 28.4387 13.6514 28.4883L13.7532 28.4952H14.2532L14.355 28.4883C14.721 28.4387 15.0032 28.1249 15.0032 27.7452C15.0032 27.3655 14.721 27.0517 14.355 27.002L14.2532 26.9952ZM27.7504 10.5C28.9412 10.5 29.916 11.4252 29.9952 12.596L30.0004 12.75V21.75C30.0004 22.9409 29.0752 23.9156 27.9044 23.9948L27.7504 24H24.0044V26H25.2504C25.6646 26 26.0004 26.3358 26.0004 26.75C26.0004 27.1297 25.7182 27.4435 25.3521 27.4932L25.2504 27.5H19.0004V26H22.5044V24H19.0004V19C19.0004 17.6745 17.9688 16.59 16.6647 16.5053L16.5004 16.5H12.0004V12.75C12.0004 11.5591 12.9255 10.5844 14.0963 10.5052L14.2504 10.5H27.7504Z",fill:"white"})))},C=(0,a.forwardRef)(D);var x=n(9466),S=n(5123),A=n(3709),T=n(6417);const O=o.ZP.div`
  margin-top: -50px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  .head {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    .title {
      font-weight: 700;
      font-size: 30px;
      line-height: 38px;
      color: #344054;
    }
    .desc {
      text-align: center;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #98a2b3;
      max-width: 424px;
    }
  }
  .boxes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 24px;
    .box {
      cursor: pointer;
      width: 200px;
      height: 200px;
      background: #f9fafb;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
      .icon {
        width: 40px;
        height: 40px;
      }
      .txt {
        padding: 0 21px;
        text-align: center;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: #475467;
      }
    }
  }
`;function B(e){let{type:t="chat"}=e;const n=(0,A.v9)((e=>e.server)),[r,i]=(0,a.useState)(!1),[o,l]=(0,a.useState)(!1),[d,f]=(0,a.useState)(!1),h=()=>{l((e=>!e))},p=()=>{f((e=>!e))},g=()=>{i((e=>!e))},m="chat"==t?"Create a Channel to Start a Conversation":"Send a Direct Message",F="chat"==t?h:p;return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(O,{children:[(0,T.jsxs)("div",{className:"head",children:[(0,T.jsxs)("h2",{className:"title",children:["Welcome to ",n.name," server"]}),(0,T.jsx)("p",{className:"desc",children:"Here are some steps to help you get started. For more, check out our Getting Started guide"})]}),(0,T.jsxs)("div",{className:"boxes",children:[(0,T.jsxs)("div",{className:"box",onClick:g,children:[(0,T.jsx)(v,{className:"icon"}),(0,T.jsx)("div",{className:"txt",children:"Invite your friends or teammates"})]}),(0,T.jsxs)("div",{className:"box",onClick:F,children:[(0,T.jsx)(c,{className:"icon"}),(0,T.jsx)("div",{className:"txt",children:m})]}),(0,T.jsxs)("a",{className:"box",href:"#",children:[(0,T.jsx)(C,{className:"icon"}),(0,T.jsx)("div",{className:"txt",children:"Download PC and Mobile apps"})]}),(0,T.jsxs)(x.OL,{to:"#",className:"box",children:[(0,T.jsx)(_,{className:"icon"}),(0,T.jsx)("div",{className:"txt",children:"Got quesions? Visit our help center "})]})]})]}),o&&(0,T.jsx)(s.Z,{personal:!0,closeModal:h}),d&&(0,T.jsx)(S.Z,{closeModal:p}),r&&(0,T.jsx)(u.Z,{closeModal:g})]})}},9269:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r,i,a=n(4118),o=n(7313);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}const u=(e,t)=>{let{title:n,titleId:a,...u}=e;return o.createElement("svg",s({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},u),n?o.createElement("title",{id:a},n):null,r||(r=o.createElement("path",{d:"M6.83667 8.33333L6.48667 11.6667H6.4H3.25V13.3333H6.23333L5.8 17.5H7.475L7.91667 13.3333H11.2417L10.8083 17.5H12.4917L12.9333 13.3333H16.6167V11.6667H13.1167L13.2917 10H11.6625L11.4875 11.6667H8.1625L8.5125 8.33333H10.8334V6.66667H8.66667L9.10833 2.5H7.43333L7 6.66667H3.325V8.33333H6.83667Z",fill:"#616161"})),i||(i=o.createElement("path",{d:"M16.6875 4.16675V3.33341C16.6875 2.40008 15.875 1.66675 15 1.66675C14.125 1.66675 13.3333 2.40008 13.3333 3.33341V4.16675C12.8731 4.16675 12.5 4.53985 12.5 5.00008V7.50008C12.5 7.96031 12.8731 8.33341 13.3333 8.33341H15H16.6667C17.1269 8.33341 17.5 7.96031 17.5 7.50008V4.97925C17.5 4.53051 17.1362 4.16675 16.6875 4.16675ZM15.8333 4.16675H14.1667V3.33341C14.1667 2.85722 14.5556 2.50008 15 2.50008C15.4444 2.50008 15.8333 2.85722 15.8333 3.33341V4.16675Z",fill:"#616161"})))},l=(0,o.forwardRef)(u);var d=n(9184),c=n(6417);const f=d.ZP.div`
  display: flex;
  &.muted path {
    fill: #d0d5dd;
  }
`;function h(e){let{personal:t=!1,muted:n=!1,className:r}=e;return(0,c.jsx)(f,{className:`${n?"muted":""} ${r}`,children:t?(0,c.jsx)(l,{}):(0,c.jsx)(a.Z,{})})}},4801:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var r=n(7313),i=n(3657),a=n(7890),o=n(3709),s=n(5607),u=n(1296),l=n(9269),d=n(4527);const c=n(9184).ZP.div`
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
      justify-content: space-evenly;
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
`;var f=n(6284),h=n(8501),p=n(5564),g=n(6417);function _(e){let{personal:t=!1,closeModal:n}=e;const{conactsData:_,loginUid:m}=(0,o.v9)((e=>({conactsData:e.contacts.byId,loginUid:e.authData.uid}))),F=(0,a.s0)(),[b,y]=(0,r.useState)({name:"",dsecription:"",members:[m],is_public:!t}),{contacts:v,input:k,updateInput:w}=(0,h.Z)(),[E,{isSuccess:D,isError:C,isLoading:x,data:S}]=(0,p.db)();(0,r.useEffect)((()=>{C&&i.ZP.error("create new channel failed")}),[C]),(0,r.useEffect)((()=>{D&&(i.ZP.success("create new channel success"),n(),F(`/chat/channel/${S}`))}),[D,S]);const A=e=>{let{currentTarget:t}=e;const{members:n}=b,{uid:r}=t.dataset;let i=n.includes(+r)?n.filter((e=>e!=r)):[...n,+r];y((e=>({...e,members:i})))};if(!_[m])return null;const{name:T,members:O,is_public:B}=b;return(0,g.jsx)(s.Z,{children:(0,g.jsxs)(c,{children:[!B&&(0,g.jsxs)("div",{className:"left",children:[(0,g.jsx)("div",{className:"search",children:(0,g.jsx)("input",{value:k,onChange:e=>{w(e.target.value)},placeholder:"Type Username to search"})}),v&&(0,g.jsx)("ul",{className:"users",children:v.map((e=>{const{uid:t}=e,n=O.includes(t);return(0,g.jsxs)("li",{"data-uid":t,className:"user",onClick:m==t?null:A,children:[(0,g.jsx)(f.Z,{disabled:m==t,readOnly:!0,checked:n,name:"cb",id:"cb"}),(0,g.jsx)(d.Z,{uid:t,interactive:!1})]},t)}))})]}),(0,g.jsxs)("div",{className:"right "+(B?"":"private"),children:[(0,g.jsx)("h3",{className:"title",children:"Create New Channel"}),(0,g.jsx)("p",{className:"desc normal",children:B?"This is a public channel, everyone in this team can see it.":"This is a private channel, only select members will be able to join."}),(0,g.jsxs)("div",{className:"name",children:[(0,g.jsx)("span",{className:"label normal",children:"Channel Name"}),(0,g.jsxs)("div",{className:"input",children:[(0,g.jsx)("input",{onChange:e=>{y((t=>({...t,name:e.target.value})))},value:T,placeholder:"new channel"}),(0,g.jsx)(l.Z,{personal:!B,className:"icon"})]})]}),(0,g.jsxs)("div",{className:"btns",children:[(0,g.jsx)(u.Z,{onClick:n,className:"normal cancel",children:"Cancel"}),(0,g.jsx)(u.Z,{disabled:x,onClick:()=>{b.name?(b.is_public&&delete b.members,E(b)):(0,i.ZP)("please input channel name")},className:"normal",children:"Create"})]})]})]})})}},4527:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(3709),i=n(7890),a=n(2963),o=n(8214),s=n(5536),u=n(1902),l=n(7054),d=n(2648),c=n(6417);function f(e){let{enable:t=!1,uid:n,cid:r,visible:i,hide:o,children:s}=e;const{canCall:u,call:f,copyEmail:h,canCopyEmail:p,startChat:g,canRemove:_,canRemoveFromChannel:m,removeFromChannel:F,removeUser:b}=(0,l.Z)({uid:n,cid:r});return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a.ZP,{disabled:!t,visible:i,followCursor:"initial",interactive:!0,placement:"right-start",popperOptions:{strategy:"fixed"},onClickOutside:o,content:(0,c.jsx)(d.Z,{hideMenu:o,items:[{title:"Message",handler:g},u&&{title:"Call",handler:f},p&&{title:"Copy Email",handler:h},m&&{danger:!0,title:"Remove From Channel",handler:F},_&&{danger:!0,title:"Remove From Server",handler:b}]}),children:s},n)})}const h=n(9184).ZP.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
  user-select: none;

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
      object-fit: cover;
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
    .status {
      position: absolute;
      bottom: -2px;
      right: -6px;
      width: 12px;
      height: 12px;
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
  /* session nav */
  &.compact {
    padding: 0;
    .avatar .status {
      width: 15px;
      height: 15px;
    }
  }
`;var p=n(3561);function g(e){let{cid:t=null,owner:n=!1,dm:l=!1,interactive:d=!0,uid:g="",popover:_=!1,compact:m=!1,avatarSize:F=32,enableContextMenu:b=!1}=e;const y=(0,i.s0)(),{visible:v,handleContextMenuEvent:k,hideContextMenu:w}=(0,p.Z)(),E=(0,r.v9)((e=>e.contacts.byId[g]));return E?(0,c.jsx)(f,{cid:t,uid:g,enable:b,visible:v,hide:w,children:(0,c.jsx)(a.ZP,{inertia:!0,interactive:!0,disabled:!_,placement:"left",trigger:"click",content:(0,c.jsx)(u.Z,{uid:g,type:"card",cid:t}),children:(0,c.jsxs)(h,{onContextMenu:b?k:null,size:F,onDoubleClick:l?()=>{y(`/chat/dm/${g}`)}:null,className:`${d?"interactive":""} ${m?"compact":""}`,children:[(0,c.jsxs)("div",{className:"avatar",children:[(0,c.jsx)(s.Z,{url:E.avatar,name:E.name,alt:"avatar"}),(0,c.jsx)("div",{className:"status "+(E.online?"online":"offline")})]}),!m&&(0,c.jsx)("span",{className:"name",children:null===E||void 0===E?void 0:E.name}),n&&(0,c.jsx)(o.Z,{})]})})}):null}},5123:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(7313),i=n(9184),a=n(9466),o=n(8570),s=n(8501),u=n(4527),l=n(5607),d=n(6417);const c=i.ZP.div`
  display: flex;
  flex-direction: column;
  width: 440px;
  max-height: 402px;
  background: #fff;
  box-shadow: 0px 25px 50px rgba(31, 41, 55, 0.25);
  border-radius: 8px;
  transition: all 0.5s ease;
  /* overflow-y: scroll; */
  .search {
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
    padding: 8px;
    width: -webkit-fill-available;
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
    height: 260px;
    padding: 16px 0;
    overflow-y: scroll;
    .user {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 0 8px;
      width: -webkit-fill-available;
      &:hover {
        background: rgba(116, 127, 141, 0.1);
      }
      > a {
        width: 100%;
      }
    }
  }
`;function f(e){let{closeModal:t}=e;const n=(0,r.useRef)(),{contacts:i,updateInput:f,input:h}=(0,s.Z)();(0,o.O)(n,t);return(0,d.jsx)(l.Z,{children:(0,d.jsxs)(c,{ref:n,children:[(0,d.jsx)("div",{className:"search",children:(0,d.jsx)("input",{value:h,onChange:e=>{f(e.target.value)},placeholder:"Type Username to search"})}),i&&(0,d.jsx)("ul",{className:"users",children:i.map((e=>{const{uid:n}=e;return(0,d.jsx)("li",{className:"user",children:(0,d.jsx)(a.OL,{onClick:t,to:`/chat/dm/${n}`,children:(0,d.jsx)(u.Z,{uid:n,interactive:!1})})},n)}))})]})})}},2648:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(8198),i=n(6417);function a(e){let{items:t=[],hideMenu:n=null}=e;return(0,i.jsx)(r.Z,{children:t.map((e=>{if(!e)return null;const{title:t,icon:r=null,handler:a=(e=>{e.preventDefault(),n&&n()}),underline:o=!1,danger:s=!1}=e;return(0,i.jsxs)("li",{className:`item ${o?"underline":""} ${s?"danger":""}`,onClick:e=>{e.stopPropagation(),e.preventDefault(),a(e),n&&n()},children:[r,t]},t)}))})}},3487:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(7313),i=n(9184),a=n(8570),o=n(5290),s=n(2812),u=n(5607),l=n(6417);const d=i.F4`
from{
background: transparent;
}
to{
  background: rgba(1, 1, 1, 0.9);
}
`,c=i.ZP.div`
  /* todo */
  transition: all 0.5s ease;
  width: 100vw;
  height: 100vh;
  /* background-color: rgba(1, 1, 1, 0.9); */
  animation: ${d} 0.3s ease-in-out forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  .box {
    position: relative;
    transition: all 0.2s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    > .loading {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translateX(-50%);
    }
    > .image {
      overflow: auto;
      img {
        max-width: 70vw;
        max-height: 80vh;
        /* width: 100%;
        height: 100%;
        object-fit: contain; */
      }
    }
    &.loading .image img {
      filter: blur(2px);
    }
    .origin {
      font-weight: bold;
      font-size: 14px;
      color: #aaa;
      &:hover {
        text-decoration: underline;
        color: #fff;
      }
    }
  }
`;function f(e){let{download:t=!0,data:n,closeModal:i}=e;const[d,f]=(0,r.useState)(null===n||void 0===n?void 0:n.thumbnail),[h,p]=(0,r.useState)(!0),g=(0,r.useRef)();if((0,a.O)(g,i),(0,o.z)("Escape",(()=>{i()}),{eventTypes:["keyup"]}),(0,r.useEffect)((()=>{if(n){const{originUrl:e}=n;e||p(!1);const t=new Image;t.src=e,t.onload=()=>{f(e),p(!1)},t.onerror=()=>{p(!1)}}}),[n]),!n)return null;const{originUrl:_,downloadLink:m,name:F,type:b}=n;return(0,l.jsx)(u.Z,{children:(0,l.jsx)(c,{children:(0,l.jsxs)("div",{className:"box "+(h?"loading":""),ref:g,children:[(0,l.jsx)("div",{className:"image",children:(0,l.jsx)("img",{src:d,alt:"preview",className:"animate__animated animate__fadeIn animate__faster"})}),t&&(0,l.jsx)("a",{className:"origin",download:F,type:b,href:m||_,rel:"noreferrer",children:"Download original"}),h&&(0,l.jsx)("div",{className:"loading",children:(0,l.jsx)(s.Z,{})})]})})})}},4851:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var r=n(9184),i=n(3709),a=n(7313),o=n(3657),s=n(5120),u=n(1296),l=n(3067),d=n(6417);const c=r.ZP.div`
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
`;function f(e){let{cid:t=null}=e;const[n,r]=(0,a.useState)(""),{enableSMTP:i,linkCopied:f,link:h,copyLink:p,generateNewLink:g,generating:_}=(0,s.Z)(t);(0,a.useEffect)((()=>{f&&o.ZP.success("Invite Link Copied!")}),[f]);return(0,d.jsxs)(c,{children:[(0,d.jsxs)("div",{className:"invite",children:[(0,d.jsx)("label",{htmlFor:"",children:"Invite by Email"}),(0,d.jsxs)("div",{className:"input",children:[(0,d.jsx)(l.Z,{value:n,onChange:e=>{r(e.target.value)},disabled:!i,type:"email",placeholder:i?"Enter Email":"Enable SMTP First"}),(0,d.jsx)(u.Z,{disabled:!i||!n,className:"send",children:"Send"})]})]}),(0,d.jsxs)("div",{className:"link",children:[(0,d.jsx)("label",{htmlFor:"",children:"Or Send invite link to your friends"}),(0,d.jsxs)("div",{className:"input",children:[(0,d.jsx)(l.Z,{readOnly:!0,className:"invite",placeholder:"Generating",value:h}),(0,d.jsx)("button",{className:"copy",onClick:p,children:"Copy"})]})]}),(0,d.jsxs)("div",{className:"tip",children:["Invite link expires in 7 days."," ",(0,d.jsx)("button",{disabled:_,className:"new",onClick:g,children:"Generate New Link"})]})]})}var h=n(4527),p=n(6284),g=n(5564),_=n(5044),m=n(8501);const F=r.ZP.div`
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
      .select {
        padding: 4px 6px;
        background: #52edff;
        border-radius: 4px;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
        .close {
          cursor: pointer;
          width: 12px;
          height: 12px;
          path {
            fill: #fff;
            fill-opacity: 1;
          }
          /* filter: invert(1); */
        }
      }
      .input {
        width: fit-content;
      }
    }
  }
  .users {
    display: flex;
    flex-direction: column;
    /* height: 260px; */
    padding-bottom: 20px;
    max-height: 364px;
    overflow: scroll;
    .user {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 4px 8px;
      /* margin: 0 4px; */
      width: -webkit-fill-available;
      border-radius: 8px;
      &:hover {
        background: rgba(116, 127, 141, 0.1);
      }
      > div {
        width: 100%;
      }
    }
  }
  > .btn {
    width: 100%;
    margin-top: 16px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
`;function b(e){let{cid:t=null,closeModal:n}=e;const[r,{isLoading:s,isSuccess:c}]=(0,g.Hj)(),[f,b]=(0,a.useState)([]),{channel:y,contactData:v}=(0,i.v9)((e=>({channel:e.channels.byId[t],contactData:e.contacts.byId})));(0,a.useEffect)((()=>{c&&(o.ZP.success("Add members successfully!"),n())}),[c]);const{input:k,updateInput:w,contacts:E=[]}=(0,m.Z)(),D=e=>{let{currentTarget:t}=e;const{uid:n}=t.dataset;f.includes(+n)?b((e=>e.filter((e=>e!=n)))):b([...f,+n])};if(!y)return null;const{members:C}=y,x=E.map((e=>{let{uid:t}=e;return t}));return(0,d.jsxs)(F,{children:[(0,d.jsx)("div",{className:"filter",children:(0,d.jsxs)("ul",{className:"selects",children:[f.map((e=>(0,d.jsxs)("li",{className:"select",children:[v[e].name,(0,d.jsx)(_.Z,{"data-uid":e,onClick:D,className:"close"})]},e))),(0,d.jsx)(l.Z,{autoFocus:!0,type:"text",className:"input none",value:k,onChange:e=>{w(e.target.value)}})]})}),(0,d.jsx)("ul",{className:"users",children:x.map((e=>{const t=C.includes(e);return(0,d.jsxs)("li",{"data-uid":e,className:"user",onClick:t?null:D,children:[(0,d.jsx)(p.Z,{disabled:t,readOnly:!0,checked:t||f.includes(e),name:"cb",id:"cb"}),(0,d.jsx)(h.Z,{uid:e,interactive:!1})]},e)}))}),(0,d.jsxs)(u.Z,{disabled:0==f.length||s,className:"btn",onClick:()=>{r({id:t,members:f})},children:[s?"Adding":"Add"," to #",y.name]})]})}var y=n(5607);const v=r.ZP.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0px 25px 50px rgba(31, 41, 55, 0.25);
  border-radius: var(--br);
  padding: 16px;
  min-width: 408px;
  > .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #374151;
    .close {
      cursor: pointer;
    }
  }
`;function k(e){let{type:t="server",cid:n=null,title:r="",closeModal:a}=e;const{channel:o,server:s}=(0,i.v9)((e=>({channel:e.channels.byId[n],server:e.server}))),u="server"==t?s.name:`#${r||(null===o||void 0===o?void 0:o.name)}`;return(0,d.jsx)(y.Z,{children:(0,d.jsxs)(v,{children:[(0,d.jsxs)("h2",{className:"title",children:["Add friends to ",u,(0,d.jsx)(_.Z,{className:"close",onClick:a})]}),!(null!==o&&void 0!==o&&o.is_public)&&(0,d.jsx)(b,{cid:n,closeModal:a}),(0,d.jsx)(f,{cid:null!==o&&void 0!==o&&o.is_public?null:n})]})})}},4379:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(7313),i=n(9184),a=n(7323),o=n(9890),s=n(5536),u=n(5664),l=n(6417);const d=i.ZP.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--br);
  background-color: #f4f4f5;
`,c=e=>{let{id:t}=e;const{favorites:n}=(0,u.Z)({}),[i,c]=(0,r.useState)(null);return(0,r.useEffect)((()=>{const e=n.find((e=>e.id==t)),{messages:r}=e||{};if(r){const e=r.map((e=>{let{from_mid:t}=e;return t}))||[];c((0,l.jsx)(d,{"data-favorite-mids":e.join(","),className:"favorite",children:(0,l.jsx)("div",{className:"list",children:r.map(((e,t)=>{const{user:n={},download:r,content:i,content_type:u,properties:d,thumbnail:c}=e;return(0,l.jsxs)(a.Z,{className:"archive",children:[n&&(0,l.jsx)("div",{className:"avatar",children:(0,l.jsx)(s.Z,{url:n.avatar,name:n.name})}),(0,l.jsxs)("div",{className:"details",children:[(0,l.jsx)("div",{className:"up",children:(0,l.jsx)("span",{className:"name",children:null===n||void 0===n?void 0:n.name})}),(0,l.jsx)("div",{className:"down",children:(0,o.Z)({download:r,content:i,content_type:u,properties:d,thumbnail:c})})]})]},t)}))})}))}}),[n,t]),t?i:null}},780:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(3709),i=n(2963),a=n(1902),o=n(9184),s=n(6417);const u=o.ZP.span`
  padding: 0 2px;
  color: #1fe1f9;
  &.clickable {
    cursor: pointer;
  }
`;function l(e){let{uid:t,popover:n=!0,cid:o,textOnly:l=!1}=e;const d=(0,r.v9)((e=>e.contacts.byId))[t];return d?l?`@${d.name}`:(0,s.jsx)(i.ZP,{disabled:!n,interactive:!0,placement:"top",trigger:"click",content:(0,s.jsx)(a.Z,{uid:t,type:"card",cid:o}),children:(0,s.jsx)(u,{className:n?"clickable":"",children:`@${d.name}`})}):null}},9890:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Z});var r=n(7313),i=n(4385),a=n(658),o=n.n(a),s=n(2867),u=n(780),l=n(9184),d=n(7323),c=n(5536),f=n(7275),h=n(4711),p=n(5843);var g=n(6417);const _=l.ZP.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--br);
  background-color: #f4f4f5;
  > .tip {
    padding: 8px 8px 0 8px;
    display: flex;
    align-items: center;
    gap: 4px;
    .icon {
      width: 16px;
      height: 16px;
      path {
        fill: #98a2b3;
      }
    }
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #98a2b3;
  }
`,m=e=>{let{context:t,to:n,from_uid:i,id:a}=e;const{normalizeMessage:o,messages:s}=function(){const[e,t]=(0,r.useState)(null),[n,i]=(0,r.useState)(null),[a,{data:o,isError:s,isLoading:u,isSuccess:l}]=(0,p.uv)();return(0,r.useEffect)((()=>{if(o&&l){const t=(0,h.Hr)(o,e);i(t)}}),[o,l,e]),(0,r.useEffect)((()=>{e&&a(e)}),[e]),{normalizeMessage:e=>{t(e)},messages:n,isError:s,isLoading:u,isSuccess:l}}(),[u,l]=(0,r.useState)(null);return(0,r.useEffect)((()=>{a&&o(a)}),[a]),(0,r.useEffect)((()=>{if(s){const e=s.map((e=>{let{from_mid:t}=e;return t}))||[];l((0,g.jsxs)(_,{"data-forwarded-mids":e.join(","),children:[(0,g.jsxs)("h4",{className:"tip",children:[(0,g.jsx)(f.Z,{className:"icon"}),"Forwarded"]}),(0,g.jsx)("div",{className:"list",children:s.map(((e,r)=>{const{user:a={},download:o,content:s,content_type:u,properties:l,thumbnail:f}=e;return(0,g.jsxs)(d.Z,{className:"archive",children:[a&&(0,g.jsx)("div",{className:"avatar",children:(0,g.jsx)(c.Z,{url:a.avatar,name:a.name})}),(0,g.jsxs)("div",{className:"details",children:[(0,g.jsx)("div",{className:"up",children:(0,g.jsx)("span",{className:"name",children:null===a||void 0===a?void 0:a.name})}),(0,g.jsx)("div",{className:"down",children:Z({download:o,context:t,to:n,from_uid:i,content:s,content_type:u,properties:l,thumbnail:f})})]})]},r)}))})]}))}}),[s,t,n,i]),a?u:null};var F=n(9083),b=n(9694),y=n.n(b),v=n(3709);const k=l.ZP.div`
  background: #f3f4f6;
  border: 1px solid #d4d4d4;
  box-sizing: border-box;
  border-radius: 6px;
  width: 370px;
  height: 66px;
  /* height: fit-content; */
  &.sending {
    /* opacity: 0.9; */
  }
  * {
    user-select: text;
  }
  .basic {
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    .icon {
      width: 36px;
      height: 48px;
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;
      overflow: hidden;
      .name {
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #1c1c1e;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .details {
        white-space: nowrap;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #616161;
        display: flex;
        gap: 16px;
        .from strong {
          font-weight: bold;
        }
      }
    }
    .download {
      white-space: nowrap;
    }
    .cancel {
      cursor: pointer;
    }
  }
`;var w=function(e,t){return w=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},w(e,t)};function E(e){var t=e.className,n=e.counterClockwise,i=e.dashRatio,a=e.pathRadius,o=e.strokeWidth,s=e.style;return(0,r.createElement)("path",{className:t,style:Object.assign({},s,C({pathRadius:a,dashRatio:i,counterClockwise:n})),d:D({pathRadius:a,counterClockwise:n}),strokeWidth:o,fillOpacity:0})}function D(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function C(e){var t=e.counterClockwise,n=e.dashRatio,r=e.pathRadius,i=2*Math.PI*r,a=(1-n)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(t?-a:a)+"px"}}var x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}w(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,n),r)-n)/(r-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,i=e.classes,a=e.counterClockwise,o=e.styles,s=e.strokeWidth,u=e.text,l=this.getPathRadius(),d=this.getPathRatio();return(0,r.createElement)("svg",{className:i.root+" "+n,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:i.background,style:o.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(E,{className:i.trail,counterClockwise:a,dashRatio:t,pathRadius:l,strokeWidth:s,style:o.trail}),(0,r.createElement)(E,{className:i.path,counterClockwise:a,dashRatio:d*t,pathRadius:l,strokeWidth:s,style:o.path}),u?(0,r.createElement)("text",{className:i.text,style:o.text,x:50,y:50},u):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component);function S(e){var t=e.rotation,n=e.strokeLinecap,r=e.textColor,i=e.textSize,a=e.pathColor,o=e.pathTransition,s=e.pathTransitionDuration,u=e.trailColor,l=e.backgroundColor,d=null==t?void 0:"rotate("+t+"turn)",c=null==t?void 0:"center center";return{root:{},path:A({stroke:a,strokeLinecap:n,transform:d,transformOrigin:c,transition:o,transitionDuration:null==s?void 0:s+"s"}),trail:A({stroke:u,strokeLinecap:n,transform:d,transformOrigin:c}),text:A({fill:r,fontSize:i}),background:A({fill:l})}}function A(e){return Object.keys(e).forEach((function(t){null==e[t]&&delete e[t]})),e}const T=l.ZP.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  > img {
    max-width: 480px;
    cursor: zoom-in;
    object-fit: cover;
  }
  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    .progress {
      width: 15px;
      height: 15px;
      .CircularProgressbar-path {
        stroke: #444;
      }
    }
  }
`;function O(e){let{uploading:t,progress:n,thumbnail:i,download:a,content:o,properties:s={}}=e;const[u,l]=(0,r.useState)(i),{width:d=0,height:c=0}=(0,h.CW)(s);return(0,r.useEffect)((()=>{const e=i,t=new Image;t.onload=()=>{l(e)},t.onerror=()=>{l("")},t.src=e}),[i]),(0,g.jsxs)(T,{children:[t&&(0,g.jsx)("div",{className:"overlay",children:(0,g.jsx)("div",{className:"progress",children:(0,g.jsx)(x,{value:n,strokeWidth:50,styles:S({storke:"#000",strokeLinecap:"butt"})})})}),(0,g.jsx)("img",{className:"img preview",style:{width:d?`${d}px`:"",height:c?`${c}px`:""},"data-meta":JSON.stringify(s),"data-origin":o,"data-download":a,src:u})]})}var B=n(3247),I=n(445),N=n(5106);var R=n(1808),P=n(6475);const j=l.ZP.div`
  background: #ecfdff;
  border-radius: 4px;
  height: 8px;
  overflow: hidden;
  .progress {
    transition: all 0.25s ease;
    height: 8px;
    background: #088ab2;
    border-radius: 4px;
  }
`;function L(e){let{value:t,width:n="100%"}=e;return(0,g.jsx)(j,{style:{width:n},children:(0,g.jsx)("div",{className:"progress",style:{width:`${t}%`}})})}var M=n(6544),q=n(9930);o().extend(y());const z=e=>e&&"string"==typeof e&&e.startsWith("blob:");function U(e){let{context:t="",to:n=null,created_at:i,from_uid:a=null,content:s="",download:u="",thumbnail:l="",properties:d={local_id:0,name:"",size:0,content_type:""}}=e;const[c,f]=(0,r.useState)(null),[p,_]=(0,r.useState)(!1),m=function(e){let{context:t="user",id:n=0}=e;const r=(0,v.I0)(),i="channel"==t?I.nF:N.Fs;return e=>{r(i({id:n,mid:e})),r((0,B.Gd)(e))}}({context:t,id:n}),{sendMessage:F,isSuccess:b,isSending:y}=(0,P.Z)({context:t,from:a,to:n}),{stopUploading:w,data:E,uploadFile:D,progress:C,isSuccess:x}=(0,R.Z)(),S=(0,v.v9)((e=>e.contacts.byId[a])),{size:A,name:T,content_type:j}=null!==d&&void 0!==d?d:{};(0,r.useEffect)((()=>{z(s)&&(async e=>{let{url:t,name:n,type:r}=e;try{if(_(!0),r.startsWith("image")){const e=await(0,h.Ad)(t);f(e)}let e=await fetch(t).then((e=>e.blob())).then((e=>new File([e],n,{type:r})));await D(e),_(!1)}catch(i){_(!1)}})({url:s,name:T,type:j})}),[s,T,j]),(0,r.useEffect)((()=>{const e=null!==d&&void 0!==d?d:{},t=c?{...e,...c}:e;if(x&&z(s)){const{path:e}=E;F({ignoreLocal:!0,type:"file",content:{path:e},properties:t})}}),[x,E,d,s]),(0,r.useEffect)((()=>{b&&URL.revokeObjectURL(s)}),[b,s]);if(!d)return null;const U=(0,h.LP)(j,T);if(!s||!T)return null;const H=p||y;return(0,h.Or)(j,A)?(0,g.jsx)(O,{uploading:H,progress:C,properties:{...c,...d},size:A,content:s,download:u,thumbnail:l},null===d||void 0===d?void 0:d.local_id):(0,g.jsx)(k,{className:"file_message "+(H?"sending":""),children:(0,g.jsxs)("div",{className:"basic",children:[U,(0,g.jsxs)("div",{className:"info",children:[(0,g.jsx)("span",{className:"name",children:T}),(0,g.jsx)("span",{className:"details",children:H?(0,g.jsx)(L,{value:C,width:"80%"}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("i",{className:"size",children:(0,h.td)(A)}),(0,g.jsx)("i",{className:"time",children:o()(i).fromNow()}),S&&(0,g.jsxs)("i",{className:"from",children:["by ",(0,g.jsx)("strong",{children:S.name})]})]})})]}),H?(0,g.jsx)(q.Z,{className:"cancel",onClick:()=>{w(),URL.revokeObjectURL(s),m(d.local_id)}}):(0,g.jsx)("a",{className:"download",download:T,href:`${s}&download=true`,children:(0,g.jsx)(M.Z,{})})]})})}const H=l.ZP.a`
  background: #f3f4f6;
  border: 1px solid #d4d4d4;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 12px 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 380px;
  .favicon {
    display: flex;
    width: 48px;
    height: 48px;
    border-radius: 4px;
    img {
      /* width: 100%;
      height: 100%; */
      object-fit: contain;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #1c1c1e;
    }
    .desc {
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      color: #616161;
    }
    .link {
      font-weight: 400;
      font-size: 10px;
      line-height: 18px;
      color: #616161;
    }
    .dots {
      width: 288px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`,$=l.ZP.a`
  width: 380px;
  padding: 12px;
  background: #f3f4f6;
  border: 1px solid #d4d4d4;
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  .title {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #06aed4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .desc {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #616161;
    margin-bottom: 8px;
    width: 356px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .image {
    width: 100%;
    height: 180px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;function W(e){let{url:t=""}=e;const[n,i]=(0,r.useState)(""),[a]=(0,p.rf)(),[o,s]=(0,r.useState)(null);(0,r.useEffect)((()=>{(async e=>{var t;const{data:n}=await a(e),r=n.title||n.site_name,o=n.description,u=(null===(t=n.images.find((e=>!!e.url)))||void 0===t?void 0:t.url)||"",l=n.favicon_url||`${new URL(e).origin}/favicon.ico`;i(l),s({title:r,description:o,ogImage:u})})(t)}),[t]);if(!t||!o||!o.title)return null;const{title:u,description:l,ogImage:d}=o;return d?(0,g.jsxs)($,{href:t,target:"_blank",children:[(0,g.jsx)("h3",{className:"title",children:u}),(0,g.jsx)("p",{className:"desc dots",children:l}),(0,g.jsx)("div",{className:"image",children:(0,g.jsx)("img",{src:d,alt:"og image"})})]}):(0,g.jsxs)(H,{href:t,target:"_blank",children:[n&&(0,g.jsx)("div",{className:"favicon",children:(0,g.jsx)("img",{onError:()=>{i("")},src:n,alt:"favicon"})}),(0,g.jsxs)("div",{className:"info",children:[(0,g.jsx)("h3",{className:"title",children:u}),(0,g.jsx)("p",{className:"desc dots",children:l}),(0,g.jsx)("span",{className:"link dots",children:t})]})]})}var V=n(7560),G=n.n(V);const Z=e=>{let{context:t=null,to:n=null,from_uid:a,created_at:l,properties:d,content_type:c,content:f,download:h,thumbnail:p,edited:_=!1}=e,b=null;switch(c){case s.bT.text:b=(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i.Z,{componentDecorator:(e,t,n)=>(0,g.jsxs)(r.Fragment,{children:[(0,g.jsx)("a",{className:"link",target:"_blank",href:e,rel:"noreferrer",children:t},n),!e.startsWith("mailto")&&(0,g.jsx)(W,{url:e})]},n),children:G()(f,/(\s{1}@[0-9]+\s{1})/g,((e,t)=>{const r=e.trim().slice(1);return(0,g.jsx)(u.Z,{uid:r,cid:n},t)}))}),_&&(0,g.jsx)("span",{className:"edited",title:o()(_).format("YYYY-MM-DD h:mm:ss A"),children:"(edited)"})]});break;case s.bT.markdown:b=(0,g.jsx)(F.Z,{content:f});break;case s.bT.file:b=(0,g.jsx)(U,{properties:d,context:t,to:n,download:h,thumbnail:p,from_uid:a,created_at:l,content:f});break;case s.bT.archive:b=(0,g.jsx)(m,{properties:d,context:t,to:n,from_uid:a,created_at:l,id:f,thumbnail:p})}return b}},7323:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n(9184).ZP.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 4px 8px;
  margin: 8px 0;
  border-radius: 8px;
  /* content-visibility: auto;
  contain-intrinsic-size: auto 150px; */
  /* &.in_view {
    content-visibility: visible;
  } */
  &[data-highlight="true"] {
    background: #f5f6f7;
  }
  &.pinned {
    background: #ecfdff;
  }
  &:hover,
  &.contextVisible,
  &.preview {
    /* content-visibility: inherit;
    contain-intrinsic-size: inherit; */
    background: #f5f6f7;
    .cmds {
      visibility: visible;
    }
  }
  &.readonly:hover {
    background: none;
  }
  > .avatar {
    flex-shrink: 0;
    cursor: pointer;
    width: 40px;
    height: 40px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  > .details {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    .up {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 500;
      .name {
        color: #06b6d4;
        font-style: normal;
        font-size: 14px;
        line-height: 20px;
      }
      .time {
        color: #bfbfbf;
        font-size: 12px;
        line-height: 18px;
      }
    }
    .down {
      user-select: text;
      color: #374151;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      word-break: break-all;
      white-space: pre-wrap;
      .edited {
        margin-left: 5px;
        color: #999;
        font-size: 10px;
      }
      &.sending {
        opacity: 0.9;
      }
      > .link {
        text-decoration: none;
        border-radius: 2px;
        /* background-color: #f5feff; */
        padding: 2px;
        color: #1fe1f9;
      }
    }
  }
  &.archive {
    gap: 8px;
    .avatar {
      width: 24px;
      height: 24px;
    }
    > .details {
      gap: 0;
      .up .name {
        font-weight: 600;
        color: #475467;
      }
      .down {
        color: #475467;
      }
    }
  }
  &.pinned {
    padding-top: 26px;
    > .details {
      position: relative;
      &:before {
        position: absolute;
        left: 0;
        top: -4px;
        transform: translateY(-100%);
        content: attr(data-pin-tip);
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #98a2b3;
      }
    }
  }
`},5607:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(7313),i=n(1168);function a(e){let{id:t="root-modal",mask:n=!0,children:a}=e;const[o,s]=(0,r.useState)(null);return(0,r.useEffect)((()=>{const e=document.getElementById(t);n&&e.classList.add("mask");const r=document.createElement("div");return r.classList.add("wrapper"),e.appendChild(r),s(r),()=>{e.removeChild(r)}}),[t,n]),o?(0,i.createPortal)(a,o):null}},9083:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(7313),i=(n(6081),n(5185),n(4334)),a=n.n(i),o=n(7072),s=n(9184),u=n(3487),l=n(6417);const d=s.ZP.div`
  * {
    user-select: text;
  }
  .toastui-editor-contents {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;function c(e){let{content:t}=e;const n=(0,r.useRef)(void 0),[i,s]=(0,r.useState)(null);(0,r.useEffect)((()=>{const e=null===n||void 0===n?void 0:n.current;e&&e.addEventListener("click",(e=>{e.stopPropagation();const{target:t}=e;if("IMG"==t.nodeName){const e=new URL(t.src),n=`${e.origin}${e.pathname}?file_path=${e.searchParams.get("file_path")}`;s({originUrl:n})}}),!0)}),[]);return(0,l.jsxs)(l.Fragment,{children:[i&&(0,l.jsx)(u.Z,{download:!1,data:i,closeModal:()=>{s(null)}}),(0,l.jsx)(d,{ref:n,children:(0,l.jsx)(o.A,{initialValue:t,plugins:[a()]})})]})}},1902:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r,i=n(3709),a=n(9466),o=n(2963),s=n(7313);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}const l=(e,t)=>{let{title:n,titleId:i,...a}=e;return s.createElement("svg",u({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},a),n?s.createElement("title",{id:i},n):null,r||(r=s.createElement("path",{d:"M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.3596 22 8.77516 21.6039 7.35578 20.8583L3.06538 21.9753C2.6111 22.0937 2.1469 21.8213 2.02858 21.367C1.99199 21.2266 1.99198 21.0791 2.02855 20.9386L3.1449 16.6502C2.3972 15.2294 2 13.6428 2 12C2 6.47715 6.47715 2 12 2Z",fill:"#22CCEE"})))},d=(0,s.forwardRef)(l);var c;function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}const h=(e,t)=>{let{title:n,titleId:r,...i}=e;return s.createElement("svg",f({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?s.createElement("title",{id:r},n):null,c||(c=s.createElement("path",{d:"M7.7716 2.43923L8.84819 2.09522C9.85701 1.77287 10.9349 2.29382 11.3669 3.31256L12.2266 5.33991C12.6013 6.22336 12.3934 7.26227 11.7126 7.9084L9.81832 9.70641C9.9352 10.7819 10.2967 11.8409 10.9029 12.8834C11.509 13.9259 12.266 14.7907 13.1739 15.4778L15.4491 14.7191C16.3115 14.4315 17.2507 14.762 17.7797 15.5392L19.0121 17.3498C19.627 18.2532 19.5164 19.4995 18.7534 20.2655L17.9356 21.0865C17.1217 21.9036 15.9592 22.2 14.8838 21.8645C12.3449 21.0726 10.0106 18.7214 7.88083 14.8109C5.74796 10.8947 4.99521 7.57214 5.62258 4.84313C5.88658 3.69482 6.70409 2.78033 7.7716 2.43923Z",fill:"#70707B"})))},p=(0,s.forwardRef)(h);var g;function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}const m=(e,t)=>{let{title:n,titleId:r,...i}=e;return s.createElement("svg",_({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?s.createElement("title",{id:r},n):null,g||(g=s.createElement("path",{d:"M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12ZM18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z",fill:"#616161"})))},F=(0,s.forwardRef)(m);var b=n(5536);const y=n(9184).ZP.div`
  z-index: 9999;
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
    object-fit: cover;
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
    box-shadow: 0px 20px 25px 20px rgba(31, 41, 55, 0.1), 0px 10px 10px rgba(31, 41, 55, 0.04);
    border-radius: 6px;
    .icons {
      padding-bottom: 2px;
    }
  }
`;var v=n(8198),k=n(7054),w=n(6417);function E(e){let{uid:t=null,type:n="embed",cid:r=null}=e;const{canCall:s,call:u,canCopyEmail:l,copyEmail:c,removeFromChannel:f,canRemoveFromChannel:h,canRemove:g,removeUser:_}=(0,k.Z)({uid:t,cid:r}),{data:m}=(0,i.v9)((e=>({data:e.contacts.byId[t]})));if(!m)return null;const{name:E,email:D,avatar:C}=m,x="card"==n&&s,S="embed"==n&&g,A=x||D||h||S;return(0,w.jsxs)(y,{className:n,children:[(0,w.jsx)(b.Z,{className:"avatar",url:C,name:E}),(0,w.jsx)("h2",{className:"name",children:E}),(0,w.jsx)("span",{className:"email",children:D}),(0,w.jsxs)("ul",{className:"icons",children:[(0,w.jsx)(a.OL,{to:`/chat/dm/${t}`,children:(0,w.jsxs)("li",{className:"icon chat",children:[(0,w.jsx)(d,{}),(0,w.jsx)("span",{className:"txt",children:"Message"})]})}),x&&(0,w.jsxs)("li",{className:"icon call",onClick:u,children:[(0,w.jsx)(p,{}),(0,w.jsx)("span",{className:"txt",children:"Call"})]}),(0,w.jsx)(o.ZP,{disabled:!A,interactive:!0,popperOptions:{strategy:"fixed"},placement:"bottom-start",trigger:"click",hideOnClick:!0,content:(0,w.jsxs)(v.Z,{children:[x&&(0,w.jsx)("li",{className:"item",onClick:u,children:"Call"}),l&&(0,w.jsx)("li",{className:"item",onClick:c,children:"Copy Email"}),h&&(0,w.jsx)("li",{className:"item danger",onClick:f,children:"Remove from Channel"}),S&&(0,w.jsx)("li",{className:"item danger",onClick:_,children:"Remove from Server"})]}),children:(0,w.jsxs)("li",{className:"icon more "+(A?"":"disabled"),children:[(0,w.jsx)(F,{}),(0,w.jsx)("span",{className:"txt",children:"More"})]})})]})]})}},4796:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(2963),i=n(9184),a=n(6417);const o=i.ZP.div`
  position: relative;
  background: #fff;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #1d2939;
  border-radius: var(--br);
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
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
`;function s(e){let{tip:t="",placement:n="right",delay:i=null,children:s,...u}=e;return(0,a.jsx)(r.ZP,{offset:[0,18],duration:i?[300,250]:0,delay:null!==i&&void 0!==i?i:[150,0],placement:n,content:(0,a.jsx)(o,{className:n,children:t}),...u,children:s})}},1296:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n(9184).ZP.button`
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
`},6284:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(9184),i=n(6417);const a=r.ZP.input`
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
`;function o(e){return(0,i.jsx)(a,{readOnly:!0,...e,type:"checkbox"})}},3067:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(7313),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(i),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function u(e){return e&&e.map((function(e,t){return r.createElement(e.tag,o({key:t},e.attr),u(e.child))}))}function l(e){return function(t){return r.createElement(d,o({attr:o({},e.attr)},t),u(e.child))}}function d(e){var t=function(t){var n,i=e.attr,a=e.size,u=e.title,l=s(e,["attr","size","title"]),d=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,l,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(i)}function c(e){return l({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",clipRule:"evenodd"}},{tag:"path",attr:{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"}}]})(e)}function f(e){return l({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}},{tag:"path",attr:{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"}}]})(e)}var h=n(9184),p=n(6417);const g=h.ZP.div`
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
`,_=h.ZP.input`
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
`;function m(e){let{type:t="text",prefix:n="",className:i,...a}=e;const[o,s]=(0,r.useState)(t);return"password"==t?(0,p.jsxs)(g,{className:i,children:[(0,p.jsx)(_,{type:o,className:`inner ${i}`,...a}),(0,p.jsx)("div",{className:"view",onClick:()=>{s((e=>"password"==e?"text":"password"))},children:"password"==o?(0,p.jsx)(c,{color:"#78787c"}):(0,p.jsx)(f,{color:"#78787c"})})]}):n?(0,p.jsxs)(g,{className:i,children:[(0,p.jsx)("span",{className:"prefix",children:n}),(0,p.jsx)(_,{className:`inner ${i}`,type:o,...a})]}):(0,p.jsx)(_,{type:o,className:i,...a})}},8198:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n(9184).ZP.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 4px;
  background-color: #fff;
  box-shadow: 0px 20px 25px 20px rgba(31, 41, 55, 0.1), 0px 10px 10px rgba(31, 41, 55, 0.04);
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
`},5845:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(9184),i=n(6417);const a=r.ZP.div`
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
`;var ft=n(9466),ht=n(7890),pt=n(3709);const gt=a.ZP.div`
  display: flex;
`;function _t(){return(0,c.jsx)(gt,{children:"404 page"})}var mt=n(1864);function Ft(e){let{children:t,redirectTo:n="/login"}=e;const{isLoading:r}=(0,mt.cZ)(),{token:i,initialized:a}=(0,pt.v9)((e=>e.authData));return r?null:a?i?t:(0,c.jsx)(ht.Fg,{to:n,replace:!0}):(0,c.jsx)(ht.Fg,{to:"/onboarding",replace:!0})}function bt(e){let{children:t,redirectTo:n="/"}=e;const{isLoading:r}=(0,mt.cZ)(),{token:i,initialized:a}=(0,pt.v9)((e=>e.authData));return r?null:a?i?(0,c.jsx)(ht.Fg,{to:n,replace:!0}):t:(0,c.jsx)(ht.Fg,{to:"/onboarding",replace:!0})}var yt=n(182),vt=n(2867),kt=n(4695);function wt(){const{data:e,isSuccess:t}=(0,kt.z3)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(yt.q,{children:[(0,c.jsx)("link",{rel:"icon",href:`${vt.ZP}/resource/organization/logo`}),t&&(0,c.jsxs)("title",{children:[e.name," Web App"]})]})})}const Et=a.ZP.div`
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
      padding: 24px 12px;
      .link {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        padding: 8px 12px;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #4b5563;
        border-radius: 8px;
        &:hover {
          background-color: rgba(0, 0, 0, 0.08);
        }
        &.active {
          background-color: #55c7ec;
          svg path {
            fill: #fff;
          }
        }
      }
    }
  }
`;var Dt=n(5536);const Ct=a.ZP.div`
  padding: 10px 12px;
  .avatar {
    width: 32px;
    height: 32px;
    img {
      object-fit: cover;
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }
`;function xt(e){let{uid:t=null}=e;const{pathname:n}=(0,ht.TH)(),r=(0,pt.v9)((e=>e.contacts.byId[t]));return r?(0,c.jsx)(Ct,{children:(0,c.jsx)(ft.OL,{to:`/setting?nav=my_account&f=${n}`,children:(0,c.jsx)("div",{className:"avatar",children:(0,c.jsx)(Dt.Z,{url:r.avatar,name:r.name})})})}):null}var St=n(2812),At=n(1296),Tt=n(3637);const Ot=a.F4`
from{
opacity: 0;
}
to{
opacity: 1;
}
`,Bt=a.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  &.fullscreen {
    width: 100vw;
    height: 100vh;
  }
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .reload {
    opacity: 0;
    &.visible {
      animation: ${Ot} 1s forwards;
      animation-delay: 30s;
    }
  }
`;function It(e){let{reload:t=!1,fullscreen:n=!1}=e;const{clearLocalData:r}=(0,Tt.Z)();return(0,c.jsxs)(Bt,{className:n?"fullscreen":"",children:[(0,c.jsx)(St.Z,{className:"loading",size:40,lineWeight:5,speed:2,color:"black"}),(0,c.jsx)(At.Z,{className:"reload danger "+(t?"visible":""),onClick:()=>{r(),location.reload(!0)},children:"Reload"})]})}var Nt=n(4796);const Rt=n.p+"static/media/setting.3cfa5bc4fac01d78f3a0.svg",Pt=a.ZP.ul`
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
`;function jt(){const{pathname:e}=(0,ht.TH)();return(0,c.jsx)(Pt,{children:(0,c.jsx)("li",{className:"menu link_navs",children:(0,c.jsx)(ft.OL,{className:"link",to:`/setting?f=${e}`,children:(0,c.jsx)(Nt.Z,{placement:"right",tip:"Settings",children:(0,c.jsx)("img",{src:Rt,alt:"setting icon",className:"icon"})})})})})}var Lt=n(738),Mt=n.n(Lt),qt=n(9899),zt=n(39),Ut=n(3247),Ht=n(445),$t=n(5106),Wt=n(332),Vt=n(6565),Gt=n(4926),Zt=n(8109),Kt=n(5018);const Yt=()=>{const[e,t]=(0,Ne.useState)(!1),n=(0,pt.I0)();return{rehydrate:async()=>{const e={channels:[],contacts:[],fileMessage:{},channelMessage:{},userMessage:{},reactionMessage:{},message:{replying:{}},footprint:{},ui:{},server:{}},r=Object.keys(window.CACHE);await Promise.all(r.map((t=>window.CACHE[t].iterate(((n,r)=>{switch(t){case"channels":n&&e.channels.push(n);break;case"contacts":n&&e.contacts.push(n);break;case"footprint":e.footprint[r]=n;break;case"ui":e.ui[r]=n;break;case"messageChannel":e.channelMessage[r]=n;break;case"messageFile":e.fileMessage[r]=n||[];break;case"messageDM":e.userMessage[r]=n;break;case"messageReaction":e.reactionMessage[r]=n;break;case"message":e.message[r]=n;break;case"server":e.server[r]=n}})))));(0,pt.dC)((()=>{n((0,Vt.g5)(e.contacts)),n((0,zt.EM)(e.server)),n((0,Wt.fS)(e.channels)),n((0,Zt.D$)(e.fileMessage.list)),n((0,Ht.Ie)(e.channelMessage)),n((0,$t.Qc)(e.userMessage)),n((0,Ut.Zl)(e.message)),n((0,Gt.GV)(e.footprint)),n((0,Kt.u2)(e.ui)),n((0,qt.tG)(e.reactionMessage))})),t(!0)},rehydrated:e}},Xt=[{storeName:"channels",description:"store channel list"},{storeName:"contacts",description:"store contact list"},{storeName:"messageDM",description:"store DM message with IDs"},{storeName:"messageChannel",description:"store channel message with IDs"},{storeName:"message",description:"store message with key-val full data"},{storeName:"messageFile",description:"store file message list refs"},{storeName:"messageReaction",description:"store message reaction with key-val full data"},{storeName:"footprint",description:"store user visit data"},{storeName:"server",description:"store server data"},{storeName:"ui",description:"store UI state"}],Qt=()=>{const e=`local_db_${localStorage.getItem(vt.kK)||""}_v_${vt.YM.split(".").join("_")}`;window.CACHE={},Xt.forEach((t=>{let{storeName:n,description:r}=t;window.CACHE[n]=Mt().createInstance({name:e,storeName:n,description:r})}))};var Jt=n(5843),en=n(6432);function tn(e){let t,n,r,i=!1;return function(a){void 0===t?(t=a,n=0,r=-1):t=function(e,t){const n=new Uint8Array(e.length+t.length);return n.set(e),n.set(t,e.length),n}(t,a);const o=t.length;let s=0;for(;n<o;){i&&(10===t[n]&&(s=++n),i=!1);let a=-1;for(;n<o&&-1===a;++n)switch(t[n]){case 58:-1===r&&(r=n-s);break;case 13:i=!0;case 10:a=n}if(-1===a)break;e(t.subarray(s,a),r),s=n,r=-1}s===o?t=void 0:0!==s&&(t=t.subarray(s),n-=s)}}var nn=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};const rn="text/event-stream",an="last-event-id";function on(e,t){var{signal:n,headers:r,onopen:i,onmessage:a,onclose:o,onerror:s,openWhenHidden:u,fetch:l}=t,d=nn(t,["signal","headers","onopen","onmessage","onclose","onerror","openWhenHidden","fetch"]);return new Promise(((t,c)=>{const f=Object.assign({},r);let h;function p(){h.abort(),document.hidden||y()}f.accept||(f.accept=rn),u||document.addEventListener("visibilitychange",p);let g=1e3,_=0;function m(){document.removeEventListener("visibilitychange",p),window.clearTimeout(_),h.abort()}null===n||void 0===n||n.addEventListener("abort",(()=>{m(),t()}));const F=null!==l&&void 0!==l?l:window.fetch,b=null!==i&&void 0!==i?i:sn;async function y(){var n;h=new AbortController;try{const n=await F(e,Object.assign(Object.assign({},d),{headers:f,signal:h.signal}));await b(n),await async function(e,t){const n=e.getReader();let r;for(;!(r=await n.read()).done;)t(r.value)}(n.body,tn(function(e,t,n){let r={data:"",event:"",id:"",retry:void 0};const i=new TextDecoder;return function(a,o){if(0===a.length)null===n||void 0===n||n(r),r={data:"",event:"",id:"",retry:void 0};else if(o>0){const n=i.decode(a.subarray(0,o)),s=o+(32===a[o+1]?2:1),u=i.decode(a.subarray(s));switch(n){case"data":r.data=r.data?r.data+"\n"+u:u;break;case"event":r.event=u;break;case"id":e(r.id=u);break;case"retry":const n=parseInt(u,10);isNaN(n)||t(r.retry=n)}}}}((e=>{e?f[an]=e:delete f[an]}),(e=>{g=e}),a))),null===o||void 0===o||o(),m(),t()}catch(r){if(!h.signal.aborted)try{const e=null!==(n=null===s||void 0===s?void 0:s(r))&&void 0!==n?n:g;window.clearTimeout(_),_=window.setTimeout(y,e)}catch(i){m(),c(i)}}}y()}))}function sn(e){const t=e.headers.get("content-type");if(!(null===t||void 0===t?void 0:t.startsWith(rn)))throw new Error(`Expected content-type to be text/event-stream, Actual: ${t}`)}var un=n(658),ln=n.n(un),dn=n(1690),cn=n(2304),fn=n(2379),hn=n(5008);const pn=async e=>{const t=window.CACHE[e];t&&await t.iterate(((e,n)=>{t.removeItem(n)}))};const gn=["__rtkq","channels","channelMessage","contacts","userMessage","reactionMessage","fileMessage","message","ui","footprint","server"],_n=(0,fn.e)();_n.startListening({predicate:e=>{const{type:t=""}=e,[n]=t.split("/");return gn.includes(n)},effect:async(e,t)=>{const{type:n="",payload:r}=e,[i,a]=n.split("/");if(!window.CACHE&&"__rtkq"!==i)return;const o=t.getState()[i];switch(i){case"__rtkq":!async function(e){let{dispatch:t,operation:n}=e;switch(n){case"offline":t((0,Kt.o3)(!1));break;case"online":t((0,Kt.o3)(!0))}}({operation:a,payload:r,dispatch:t.dispatch});break;case"channels":await async function(e){let{operation:t,data:n,payload:r}=e;const i=window.CACHE.channels;if(t.startsWith("reset"))pn("channels");else switch(t){case"fullfillChannels":{const e=r;await Promise.all(e.map((e=>{let{gid:t,...n}=e;return i.setItem(t+"",{gid:t,...n})})))}break;case"addChannel":{const{gid:e}=r;await i.setItem(e+"",r)}break;case"removeChannel":{const e=r;await i.removeItem(e+"")}break;case"updateChannel":{const{id:e}=r;await i.setItem(e+"",n.byId[e])}}}({operation:a,payload:r,data:o});break;case"contacts":await async function(e){let{operation:t,data:n,payload:r}=e;const i=window.CACHE.contacts;if(t.startsWith("reset"))pn("contacts");else switch(t){case"fullfillContacts":{const e=r;await Promise.all(e.map((e=>{let{uid:t,...n}=e;return i.setItem(t+"",{uid:t,...n})})))}break;case"updateUsersByLogs":{const e=r;await Promise.all(e.map((async e=>{let{action:t,uid:r}=e;switch(t){case"update":case"create":await i.setItem(r+"",n.byId[r]);break;case"delete":await i.removeItem(r+"")}})))}break;case"addContact":{const{uid:e}=r;await i.setItem(e+"",r)}break;case"removeContact":{const e=r;await i.removeItem(e+"")}}}({operation:a,payload:r,data:o});break;case"channelMessage":await async function(e){let{operation:t,data:n={},payload:r}=e;const i=window.CACHE.messageChannel;if(t.startsWith("reset"))pn("messageChannel");else switch(t){case"addChannelMsg":case"removeChannelMsg":{const{id:e}=r;await i.setItem(e+"",n[e])}break;case"removeChannelSession":{const e=Array.isArray(r)?r:[r];await Promise.all(e.map((async e=>{await i.removeItem(e+"")})))}}}({operation:a,payload:r,data:o});break;case"userMessage":await async function(e){let{operation:t,data:n={},payload:r}=e;const i=window.CACHE.messageDM;if(t.startsWith("reset"))pn("messageDM");else switch(t){case"addUserMsg":case"removeUserMsg":{const{id:e}=r;await i.setItem(e+"",n.byId[e])}break;case"removeUserSession":{const e=Array.isArray(r)?r:[r];await Promise.all(e.map((async e=>{await i.removeItem(e+"")})))}}}({operation:a,payload:r,data:o});break;case"fileMessage":await async function(e){let{operation:t,data:n={}}=e;const r=window.CACHE.messageFile;if(t.startsWith("reset"))pn("messageFile");else switch(t){case"addFileMessage":case"removeFileMessage":await r.setItem("list",n)}}({operation:a,data:o});break;case"message":await async function(e){let{operation:t,data:n={},payload:r}=e;const i=window.CACHE.message;if(t.startsWith("reset"))pn("message");else switch(t){case"addMessage":case"updateMessage":{const{mid:e}=r;await i.setItem(e+"",n[e])}break;case"removeMessage":{const e=Array.isArray(r)?r:[r];await Promise.all(e.map((async e=>{await i.removeItem(e+"")})))}}}({operation:a,payload:r,data:o});break;case"reactionMessage":await async function(e){let{operation:t,data:n={},payload:r}=e;const i=window.CACHE.messageReaction;if(t.startsWith("reset"))pn("messageReaction");else switch(t){case"toggleReactionMessage":{const{mid:e,rid:t}=r;await i.setItem(e+"",n[e]),await i.setItem(t+"",n[t])}break;case"removeReactionMessage":{const e=Array.isArray(r)?r:[r];await Promise.all(e.map((async e=>{await i.removeItem(e+"")})))}}}({operation:a,payload:r,data:o});break;case"footprint":await async function(e){let{operation:t,data:n={},payload:r}=e;const i=window.CACHE.footprint;if(t.startsWith("reset"))pn("footprint");else switch(t){case"updateUsersVersion":{const e=r;await i.setItem("usersVersion",e)}break;case"updateAfterMid":{const e=r;await i.setItem("afterMid",e)}break;case"updateMute":await i.setItem("muteUsers",n.muteUsers||{}),await i.setItem("muteChannels",n.muteChannels||{});break;case"updateReadChannels":await i.setItem("readChannels",n.readChannels);break;case"updateReadUsers":await i.setItem("readUsers",n.readUsers)}}({operation:a,payload:r,data:o});break;case"ui":await async function(e){let{operation:t,data:n={}}=e;const r=window.CACHE.ui;if(t.startsWith("reset"))pn("ui");else switch(t){case"toggleMenuExpand":await r.setItem("menuExpand",n.menuExpand);break;case"updateInputMode":await r.setItem("inputMode",n.inputMode);break;case"updateFileListView":await r.setItem("fileListView",n.fileListView)}}({operation:a,payload:r,data:o});break;case"server":await async function(e){let{operation:t,payload:n}=e;const r=window.CACHE.server;if(t.startsWith("reset"))pn("server");else if("updateInfo"===t){const e=n;await Promise.all(Object.entries(e).map((e=>{let[t,n]=e;return r.setItem(t,n)})))}}({operation:a,payload:r,data:o})}}});const mn=_n;var Fn=n(7455),bn=n(5564);const yn=(0,f.UY)({authData:dn.ZP,ui:Kt.ZP,footprint:Gt.ZP,server:zt.ZP,favorites:Fn.ZP,contacts:Vt.ZP,channels:Wt.ZP,reactionMessage:qt.ZP,userMessage:$t.ZP,channelMessage:Ht.ZP,fileMessage:Zt.ZP,message:Ut.ZP,[mt.iJ.reducerPath]:mt.iJ.reducer,[Jt.c1.reducerPath]:Jt.c1.reducer,[en.eJ.reducerPath]:en.eJ.reducer,[bn.Pr.reducerPath]:bn.Pr.reducer,[kt.I1.reducerPath]:kt.I1.reducer}),vn=(0,fn.xC)({reducer:yn,middleware:e=>e().concat(mt.iJ.middleware,en.eJ.middleware,bn.Pr.middleware,kt.I1.middleware,Jt.c1.middleware).prepend(mn.middleware)});let kn=!1;(0,hn.sj)(vn.dispatch,((e,t)=>{let{onOnline:n,onOffline:r,onFocus:i,onFocusLost:a}=t;const o=()=>e(i()),s=()=>e(n()),u=()=>e(r()),l=()=>{"visible"===window.document.visibilityState?o():e(a())};kn||"undefined"!==typeof window&&window.addEventListener&&(window.addEventListener("visibilitychange",l,!1),window.addEventListener("focus",o,!1),window.addEventListener("online",s,!1),window.addEventListener("offline",u,!1),kn=!0);return()=>{window.removeEventListener("focus",o),window.removeEventListener("visibilitychange",l),window.removeEventListener("online",s),window.removeEventListener("offline",u),kn=!1}}));const wn=vn;class En extends Error{}class Dn extends Error{}let Cn=null;function xn(){const[e,t]=(0,Ne.useState)(!1),{authData:{uid:n},ui:{ready:r,online:a},footprint:{afterMid:o,usersVersion:s,readUsers:u,readChannels:l}}=(0,pt.v9)((e=>e)),[d]=(0,mt.SO)(),c=(0,pt.I0)();let f=!1,h=!1,p=new AbortController;const g=async()=>{if(f||h)return;const{authData:{token:e,expireTime:t=+new Date,refreshToken:a}}=wn.getState();let m=e;if(ln()().isAfter(new Date(t-2e4))){const{data:{token:t},isError:n}=await d({token:e,refreshToken:a});if(n)return;m=t}return h=!0,await on(`${vt.ZP}/user/events?${function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=new URLSearchParams;return Object.entries(e).forEach((e=>{let[n,r]=e;r&&t.append(n,r)})),t.toString()}({"api-key":m,users_version:s,after_mid:o})}`,{openWhenHidden:!0,signal:p.signal,async onopen(e){if(h=!1,!e.ok||e.headers.get("content-type")!==rn)throw e.status>=400&&e.status<500&&429!==e.status?new Dn:new En;f=!0},onmessage(e){if(h=!1,"FatalError"===e.event)throw new Dn(e.data);const t=JSON.parse(e.data),{type:a}=t;switch(a){case"heartbeat":default:break;case"ready":c((0,Kt.Uc)());break;case"users_snapshot":{const{version:e}=t;c((0,Gt.uM)(e))}break;case"users_log":{const{logs:e}=t;c((0,Vt.ii)(e))}break;case"user_settings":case"user_settings_changed":Object.keys(t).forEach((e=>{switch(e){case"read_index_groups":c((0,Gt.TP)(t[e]));break;case"read_index_users":c((0,Gt.RT)(t[e]));break;case"add_mute_users":case"mute_users":case"add_mute_groups":case"mute_groups":{const n=t[e];if(n&&n.length){const t=e.endsWith("users")?"add_users":"add_groups";c((0,Gt.Uw)({[t]:n}))}}break;case"remove_mute_users":case"remove_mute_groups":{const n=t[e];if(n&&n.length){const t=e.endsWith("users")?"remove_users":"remove_groups";c((0,Gt.Uw)({[t]:n}))}}}}));break;case"users_state":case"users_state_changed":{let{type:e,...n}=t;const r="users_state_changed"==e?[n]:n.users;c((0,Vt._D)(r))}break;case"kick":switch(t.reason){case"login_from_other_device":c((0,dn.sQ)()),(0,i.ZP)("kicked from the other device");break;case"delete_user":c((0,dn.sQ)()),(0,i.ZP)("sorry, your account has been deleted")}break;case"related_groups":c((0,Wt.fS)(t.groups));break;case"joined_group":c((0,Wt.mR)(t.group));break;case"group_changed":{const{gid:e,...n}=t;c((0,Wt.pW)({id:e,...n}))}break;case"user_joined_group":{const{gid:e,uid:n}=t;c((0,Wt.pW)({operation:"add_member",id:e,members:n}))}break;case"user_leaved_group":{const{gid:e,uid:r}=t;r.findIndex((e=>e==n))>-1?c((0,Wt.OG)(e)):c((0,Wt.pW)({operation:"remove_member",id:e,members:r}))}break;case"kick_from_group":c((0,Wt.OG)(t.gid));break;case"pinned_message_updated":c((0,Wt.ac)(t));break;case"chat":(0,cn.Z)(t,c,{ready:r,loginUid:n,readUsers:u,readChannels:l})}},onclose(){throw h=!1,new En},onerror(e){throw h=!1,e instanceof Dn||(_(),Cn&&clearTimeout(Cn),Cn=setTimeout((()=>{f=!1,g()}),2e3)),e}}),h=!1,p},_=()=>{p&&p.abort&&p.abort()};return(0,Ne.useEffect)((()=>(e&&(a?g():_()),()=>{_()})),[a,e]),{setStreamingReady:e=>{t(e)},startStreaming:g,stopStreaming:_}}var Sn=n(7471);const An=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Tn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],a=i+1<e.length,o=a?e[i+1]:0,s=i+2<e.length,u=s?e[i+2]:0,l=t>>2,d=(3&t)<<4|o>>4;let c=(15&o)<<2|u>>6,f=63&u;s||(f=64,a||(c=64)),r.push(n[l],n[d],n[c],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(An(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){const a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const o=i<e.length?n[e.charAt(i)]:64;++i;const s=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==o||null==s)throw Error();const u=t<<2|a>>4;if(r.push(u),64!==o){const e=a<<4&240|o>>2;if(r.push(e),64!==s){const e=o<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},On=function(e){return function(e){const t=An(e);return Tn.encodeByteArray(t,!0)}(e).replace(/\./g,"")};class Bn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}function In(){return"object"===typeof indexedDB}function Nn(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}class Rn extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pn.prototype.create)}}class Pn{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e){const t=(arguments.length<=1?void 0:arguments[1])||{},n=`${this.service}/${e}`,r=this.errors[e],i=r?function(e,t){return e.replace(jn,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(r,t):"Error",a=`${this.serviceName}: ${i} (${n}).`;return new Rn(n,a,t)}}const jn=/\{\$([^}]+)}/g;function Ln(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],a=t[i];if(Mn(n)&&Mn(a)){if(!Ln(n,a))return!1}else if(n!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Mn(e){return null!==e&&"object"===typeof e}function qn(e){return e&&e._delegate?e._delegate:e}class zn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const Un="[DEFAULT]";class Hn{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Bn;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(Lu){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(Lu){if(r)return null;throw Lu}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService({instanceIdentifier:Un})}catch(Lu){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(Lu){}}}}clearInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Un;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Un;return this.instances.has(e)}getOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Un;return this.instancesOptions.get(e)||{}}initialize(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,a]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&a.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService(e){let{instanceIdentifier:t,options:n={}}=e,r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===Un?void 0:i),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch(a){}var i;return r||null}normalizeInstanceIdentifier(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Un;return this.component?this.component.multipleInstances?e:Un:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class $n{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Hn(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}const Wn=[];var Vn;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Vn||(Vn={}));const Gn={debug:Vn.DEBUG,verbose:Vn.VERBOSE,info:Vn.INFO,warn:Vn.WARN,error:Vn.ERROR,silent:Vn.SILENT},Zn=Vn.INFO,Kn={[Vn.DEBUG]:"log",[Vn.VERBOSE]:"log",[Vn.INFO]:"info",[Vn.WARN]:"warn",[Vn.ERROR]:"error"},Yn=function(e,t){if(t<e.logLevel)return;(new Date).toISOString();const n=Kn[t];if(!n)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a]};let Xn,Qn;const Jn=new WeakMap,er=new WeakMap,tr=new WeakMap,nr=new WeakMap,rr=new WeakMap;let ir={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return er.get(e);if("objectStoreNames"===t)return e.objectStoreNames||tr.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ar(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Qn||(Qn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(ur(this),n),sr(Jn.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return sr(e.apply(ur(this),n))}:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];const a=e.call(ur(this),t,...r);return tr.set(a,t.sort?t.sort():[t]),sr(a)}}function or(e){return"function"===typeof e?ar(e):(e instanceof IDBTransaction&&function(e){if(er.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));er.set(e,t)}(e),t=e,(Xn||(Xn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,ir):e);var t}function sr(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(sr(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&Jn.set(t,e)})).catch((()=>{})),rr.set(t,e),t}(e);if(nr.has(e))return nr.get(e);const t=or(e);return t!==e&&(nr.set(e,t),rr.set(t,e)),t}const ur=e=>rr.get(e);function lr(e,t){let{blocked:n,upgrade:r,blocking:i,terminated:a}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=indexedDB.open(e,t),s=sr(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(sr(o.result),e.oldVersion,e.newVersion,sr(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),s.then((e=>{a&&e.addEventListener("close",(()=>a())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),s}function dr(e){let{blocked:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",(()=>t())),sr(n).then((()=>{}))}const cr=["get","getKey","getAll","getAllKeys","count"],fr=["put","add","delete","clear"],hr=new Map;function pr(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(hr.get(t))return hr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=fr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!cr.includes(n))return;const a=async function(e){const t=this.transaction(e,i?"readwrite":"readonly");let a=t.store;for(var o=arguments.length,s=new Array(o>1?o-1:0),u=1;u<o;u++)s[u-1]=arguments[u];return r&&(a=a.index(s.shift())),(await Promise.all([a[n](...s),i&&t.done]))[0]};return hr.set(t,a),a}ir=(e=>({...e,get:(t,n,r)=>pr(t,n)||e.get(t,n,r),has:(t,n)=>!!pr(t,n)||e.has(t,n)}))(ir);class gr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const _r="@firebase/app",mr="0.7.26",Fr=new class{constructor(e){this.name=e,this._logLevel=Zn,this._logHandler=Yn,this._userLogHandler=null,Wn.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Vn))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?Gn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,Vn.DEBUG,...t),this._logHandler(this,Vn.DEBUG,...t)}log(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,Vn.VERBOSE,...t),this._logHandler(this,Vn.VERBOSE,...t)}info(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,Vn.INFO,...t),this._logHandler(this,Vn.INFO,...t)}warn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,Vn.WARN,...t),this._logHandler(this,Vn.WARN,...t)}error(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,Vn.ERROR,...t),this._logHandler(this,Vn.ERROR,...t)}}("@firebase/app"),br="[DEFAULT]",yr={[_r]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},vr=new Map,kr=new Map;function wr(e,t){try{e.container.addComponent(t)}catch(Lu){Fr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,Lu)}}function Er(e){const t=e.name;if(kr.has(t))return Fr.debug(`There were multiple attempts to register component ${t}.`),!1;kr.set(t,e);for(const n of vr.values())wr(n,e);return!0}function Dr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}const Cr=new Pn("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});class xr{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new zn("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cr.create("app-deleted",{appName:this._name})}}function Sr(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:br;const t=vr.get(e);if(!t)throw Cr.create("no-app",{appName:e});return t}function Ar(e,t,n){var r;let i=null!==(r=yr[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const e=[`Unable to register library "${i}" with version "${t}":`];return a&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Fr.warn(e.join(" "))}Er(new zn(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}const Tr="firebase-heartbeat-store";let Or=null;function Br(){return Or||(Or=lr("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Tr)}}).catch((e=>{throw Cr.create("storage-open",{originalErrorMessage:e.message})}))),Or}async function Ir(e,t){var n;try{const n=(await Br()).transaction(Tr,"readwrite"),r=n.objectStore(Tr);return await r.put(t,Nr(e)),n.done}catch(Lu){throw Cr.create("storage-set",{originalErrorMessage:null===(n=Lu)||void 0===n?void 0:n.message})}}function Nr(e){return`${e.name}!${e.options.appId}`}const Rr=1024;class Pr{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Lr(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=jr();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=jr(),{heartbeatsToSend:t,unsentEntries:n}=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Rr;const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Mr(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mr(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=On(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function jr(){return(new Date).toISOString().substring(0,10)}class Lr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!In()&&Nn().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){var t;try{return(await Br()).transaction(Tr).objectStore(Tr).get(Nr(e))}catch(Lu){throw Cr.create("storage-get",{originalErrorMessage:null===(t=Lu)||void 0===t?void 0:t.message})}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ir(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ir(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Mr(e){return On(JSON.stringify({version:2,heartbeats:e})).length}var qr;qr="",Er(new zn("platform-logger",(e=>new gr(e)),"PRIVATE")),Er(new zn("heartbeat",(e=>new Pr(e)),"PRIVATE")),Ar(_r,mr,qr),Ar(_r,mr,"esm2017"),Ar("fire-js","");Ar("firebase","9.8.3","app");const zr="@firebase/installations",Ur="0.5.10",Hr=1e4,$r="w:0.5.10",Wr="FIS_v2",Vr=36e5,Gr=new Pn("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Zr(e){return e instanceof Rn&&e.code.includes("request-failed")}function Kr(e){let{projectId:t}=e;return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function Yr(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function Xr(e,t){const n=(await t.json()).error;return Gr.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Qr(e){let{apiKey:t}=e;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Jr(e,t){let{refreshToken:n}=t;const r=Qr(e);return r.append("Authorization",function(e){return`FIS_v2 ${e}`}(n)),r}async function ei(e){const t=await e();return t.status>=500&&t.status<600?e():t}function ti(e){return new Promise((t=>{setTimeout(t,e)}))}const ni=/^[cdef][\w-]{21}$/;function ri(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}(e);return ni.test(t)?t:""}catch(e){return""}}function ii(e){return`${e.appName}!${e.appId}`}const ai=new Map;function oi(e,t){const n=ii(e);si(n,t),function(e,t){const n=li();n&&n.postMessage({key:e,fid:t});di()}(n,t)}function si(e,t){const n=ai.get(e);if(n)for(const r of n)r(t)}let ui=null;function li(){return!ui&&"BroadcastChannel"in self&&(ui=new BroadcastChannel("[Firebase] FID Change"),ui.onmessage=e=>{si(e.data.key,e.data.fid)}),ui}function di(){0===ai.size&&ui&&(ui.close(),ui=null)}const ci="firebase-installations-store";let fi=null;function hi(){return fi||(fi=lr("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(ci)}})),fi}async function pi(e,t){const n=ii(e),r=(await hi()).transaction(ci,"readwrite"),i=r.objectStore(ci),a=await i.get(n);return await i.put(t,n),await r.done,a&&a.fid===t.fid||oi(e,t.fid),t}async function gi(e){const t=ii(e),n=(await hi()).transaction(ci,"readwrite");await n.objectStore(ci).delete(t),await n.done}async function _i(e,t){const n=ii(e),r=(await hi()).transaction(ci,"readwrite"),i=r.objectStore(ci),a=await i.get(n),o=t(a);return void 0===o?await i.delete(n):await i.put(o,n),await r.done,!o||a&&a.fid===o.fid||oi(e,o.fid),o}async function mi(e){let t;const n=await _i(e.appConfig,(n=>{const r=function(e){return yi(e||{fid:ri(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(Gr.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function(e,t){let{appConfig:n,heartbeatServiceProvider:r}=e,{fid:i}=t;const a=Kr(n),o=Qr(n),s=r.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}const u={fid:i,authVersion:Wr,appId:n.appId,sdkVersion:$r},l={method:"POST",headers:o,body:JSON.stringify(u)},d=await ei((()=>fetch(a,l)));if(d.ok){const e=await d.json();return{fid:e.fid||i,registrationStatus:2,refreshToken:e.refreshToken,authToken:Yr(e.authToken)}}throw await Xr("Create Installation",d)}(e,t);return pi(e.appConfig,n)}catch(Lu){throw Zr(Lu)&&409===Lu.customData.serverCode?await gi(e.appConfig):await pi(e.appConfig,{fid:t.fid,registrationStatus:0}),Lu}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Fi(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Fi(e){let t=await bi(e.appConfig);for(;1===t.registrationStatus;)await ti(100),t=await bi(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await mi(e);return n||t}return t}function bi(e){return _i(e,(e=>{if(!e)throw Gr.create("installation-not-found");return yi(e)}))}function yi(e){return 1===(t=e).registrationStatus&&t.registrationTime+Hr<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}async function vi(e,t){let{appConfig:n,heartbeatServiceProvider:r}=e;const i=function(e,t){let{fid:n}=t;return`${Kr(e)}/${n}/authTokens:generate`}(n,t),a=Jr(n,t),o=r.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&a.append("x-firebase-client",e)}const s={installation:{sdkVersion:$r,appId:n.appId}},u={method:"POST",headers:a,body:JSON.stringify(s)},l=await ei((()=>fetch(i,u)));if(l.ok){return Yr(await l.json())}throw await Xr("Generate Auth Token",l)}async function ki(e){let t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const r=await _i(e.appConfig,(r=>{if(!Ci(r))throw Gr.create("not-registered");const i=r.authToken;if(!n&&xi(i))return r;if(1===i.requestStatus)return t=wi(e,n),r;{if(!navigator.onLine)throw Gr.create("app-offline");const n=Si(r);return t=Di(e,n),n}})),i=t?await t:r.authToken;return i}async function wi(e,t){let n=await Ei(e.appConfig);for(;1===n.authToken.requestStatus;)await ti(100),n=await Ei(e.appConfig);const r=n.authToken;return 0===r.requestStatus?ki(e,t):r}function Ei(e){return _i(e,(e=>{if(!Ci(e))throw Gr.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+Hr<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n}))}async function Di(e,t){try{const n=await vi(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await pi(e.appConfig,r),n}catch(Lu){if(!Zr(Lu)||401!==Lu.customData.serverCode&&404!==Lu.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await pi(e.appConfig,n)}else await gi(e.appConfig);throw Lu}}function Ci(e){return void 0!==e&&2===e.registrationStatus}function xi(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Vr}(e)}function Si(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}async function Ai(e){const{registrationPromise:t}=await mi(e);t&&await t}function Ti(e){return Gr.create("missing-app-config-values",{valueName:e})}const Oi="installations",Bi=e=>{const t=Dr(e.getProvider("app").getImmediate(),Oi).getImmediate(),n={getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await mi(t);return r?r.catch(console.error):ki(t).catch(console.error),n.fid}(t),getToken:e=>async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=e;await Ai(n);return(await ki(n,t)).token}(t,e)};return n};Er(new zn(Oi,(e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Ti("App Configuration");if(!e.name)throw Ti("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ti(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Dr(t,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),Er(new zn("installations-internal",Bi,"PRIVATE")),Ar(zr,Ur),Ar(zr,Ur,"esm2017");const Ii="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Ni="google.c.a.c_id";var Ri,Pi;function ji(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Li(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length);for(let i=0;i<n.length;++i)r[i]=n.charCodeAt(i);return r}!function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"}(Ri||(Ri={})),function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(Pi||(Pi={}));const Mi="fcm_token_details_db",qi="fcm_token_object_Store";const zi="firebase-messaging-store";let Ui=null;function Hi(){return Ui||(Ui=lr("firebase-messaging-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(zi)}})),Ui}async function $i(e){const t=Vi(e),n=await Hi(),r=await n.transaction(zi).objectStore(zi).get(t);if(r)return r;{const t=await async function(e){if("databases"in indexedDB){const e=(await indexedDB.databases()).map((e=>e.name));if(!e.includes(Mi))return null}let t=null;return(await lr(Mi,5,{upgrade:async(n,r,i,a)=>{var o;if(r<2)return;if(!n.objectStoreNames.contains(qi))return;const s=a.objectStore(qi),u=await s.index("fcmSenderId").get(e);if(await s.clear(),u)if(2===r){const e=u;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(o=e.createTime)&&void 0!==o?o:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"===typeof e.vapidKey?e.vapidKey:ji(e.vapidKey)}}}else if(3===r){const e=u;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:ji(e.auth),p256dh:ji(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:ji(e.vapidKey)}}}else if(4===r){const e=u;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:ji(e.auth),p256dh:ji(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:ji(e.vapidKey)}}}}})).close(),await dr(Mi),await dr("fcm_vapid_details_db"),await dr("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"===typeof e.createTime&&e.createTime>0&&"string"===typeof e.token&&e.token.length>0&&"string"===typeof t.auth&&t.auth.length>0&&"string"===typeof t.p256dh&&t.p256dh.length>0&&"string"===typeof t.endpoint&&t.endpoint.length>0&&"string"===typeof t.swScope&&t.swScope.length>0&&"string"===typeof t.vapidKey&&t.vapidKey.length>0}(t)?t:null}(e.appConfig.senderId);if(t)return await Wi(e,t),t}}async function Wi(e,t){const n=Vi(e),r=(await Hi()).transaction(zi,"readwrite");return await r.objectStore(zi).put(t,n),await r.done,t}function Vi(e){let{appConfig:t}=e;return t.appId}const Gi=new Pn("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});async function Zi(e,t){const n={method:"DELETE",headers:await Yi(e)};try{const r=await fetch(`${Ki(e.appConfig)}/${t}`,n),i=await r.json();if(i.error){const e=i.error.message;throw Gi.create("token-unsubscribe-failed",{errorInfo:e})}}catch(r){throw Gi.create("token-unsubscribe-failed",{errorInfo:r})}}function Ki(e){let{projectId:t}=e;return`https://fcmregistrations.googleapis.com/v1/projects/${t}/registrations`}async function Yi(e){let{appConfig:t,installations:n}=e;const r=await n.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${r}`})}function Xi(e){let{p256dh:t,auth:n,endpoint:r,vapidKey:i}=e;const a={web:{endpoint:r,auth:n,p256dh:t}};return i!==Ii&&(a.web.applicationPubKey=i),a}async function Qi(e){const t=await async function(e,t){const n=await e.pushManager.getSubscription();if(n)return n;return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Li(t)})}(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:ji(t.getKey("auth")),p256dh:ji(t.getKey("p256dh"))},r=await $i(e.firebaseDependencies);if(r){if(function(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,i=t.auth===e.auth,a=t.p256dh===e.p256dh;return n&&r&&i&&a}(r.subscriptionOptions,n))return Date.now()>=r.createTime+6048e5?async function(e,t){try{const n=await async function(e,t){const n=await Yi(e),r=Xi(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let a;try{const n=await fetch(`${Ki(e.appConfig)}/${t.token}`,i);a=await n.json()}catch(o){throw Gi.create("token-update-failed",{errorInfo:o})}if(a.error){const e=a.error.message;throw Gi.create("token-update-failed",{errorInfo:e})}if(!a.token)throw Gi.create("token-update-no-token");return a.token}(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Wi(e.firebaseDependencies,r),n}catch(Lu){throw await Ji(e),Lu}}(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Zi(e.firebaseDependencies,r.token)}catch(Lu){}return ea(e.firebaseDependencies,n)}return ea(e.firebaseDependencies,n)}async function Ji(e){const t=await $i(e.firebaseDependencies);t&&(await Zi(e.firebaseDependencies,t.token),await async function(e){const t=Vi(e),n=(await Hi()).transaction(zi,"readwrite");await n.objectStore(zi).delete(t),await n.done}(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function ea(e,t){const n=await async function(e,t){const n=await Yi(e),r=Xi(t),i={method:"POST",headers:n,body:JSON.stringify(r)};let a;try{const t=await fetch(Ki(e.appConfig),i);a=await t.json()}catch(o){throw Gi.create("token-subscribe-failed",{errorInfo:o})}if(a.error){const e=a.error.message;throw Gi.create("token-subscribe-failed",{errorInfo:e})}if(!a.token)throw Gi.create("token-subscribe-no-token");return a.token}(e,t),r={token:n,createTime:Date.now(),subscriptionOptions:t};return await Wi(e,r),r.token}function ta(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const i=t.notification.image;i&&(e.notification.image=i)}(t,e),function(e,t){if(!t.data)return;e.data=t.data}(t,e),function(e,t){var n,r,i,a,o;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};const s=null!==(i=null===(r=t.fcmOptions)||void 0===r?void 0:r.link)&&void 0!==i?i:null===(a=t.notification)||void 0===a?void 0:a.click_action;s&&(e.fcmOptions.link=s);const u=null===(o=t.fcmOptions)||void 0===o?void 0:o.analytics_label;u&&(e.fcmOptions.analyticsLabel=u)}(t,e),t}function na(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}function ra(e){return Gi.create("missing-app-config-values",{valueName:e})}na("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),na("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class ia{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=function(e){if(!e||!e.options)throw ra("App Configuration Object");if(!e.name)throw ra("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw ra(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:r,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}async function aa(e){var t;try{e.swRegistration=await navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}),e.swRegistration.update().catch((()=>{}))}catch(Lu){throw Gi.create("failed-service-worker-registration",{browserErrorMessage:null===(t=Lu)||void 0===t?void 0:t.message})}}async function oa(e,t){if(!navigator)throw Gi.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw Gi.create("permission-blocked");return await async function(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Ii)}(e,null===t||void 0===t?void 0:t.vapidKey),await async function(e,t){if(t||e.swRegistration||await aa(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw Gi.create("invalid-sw-registration");e.swRegistration=t}}(e,null===t||void 0===t?void 0:t.serviceWorkerRegistration),Qi(e)}async function sa(e,t,n){const r=function(e){switch(e){case Pi.NOTIFICATION_CLICKED:return"notification_open";case Pi.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n["google.c.a.c_id"],message_name:n["google.c.a.c_l"],message_time:n["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}async function ua(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===Pi.PUSH_RECEIVED&&("function"===typeof e.onMessageHandler?e.onMessageHandler(ta(n)):e.onMessageHandler.next(ta(n)));const r=n.data;var i;"object"===typeof(i=r)&&i&&Ni in i&&"1"===r["google.c.a.e"]&&await sa(e,n.messageType,r)}const la="@firebase/messaging",da="0.9.14",ca=e=>{const t=new ia(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",(e=>ua(t,e))),t},fa=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:e=>oa(t,e)}};async function ha(){try{await Nn()}catch(Lu){return!1}return"undefined"!==typeof window&&In()&&!("undefined"===typeof navigator||!navigator.cookieEnabled)&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}Er(new zn("messaging",ca,"PUBLIC")),Er(new zn("messaging-internal",fa,"PRIVATE")),Ar(la,da),Ar(la,da,"esm2017");const pa=e=>{const[t,n]=(0,Ne.useState)(null);if(navigator.serviceWorker){const t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Sr();return ha().then((e=>{if(!e)throw Gi.create("unsupported-browser")}),(e=>{throw Gi.create("indexed-db-unsupported")})),Dr(qn(e),"messaging").getImmediate()}(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"object"!==typeof t&&(t={name:t});const n=Object.assign({name:br,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!==typeof r||!r)throw Cr.create("bad-app-name",{appName:String(r)});const i=vr.get(r);if(i){if(Ln(e,i.options)&&Ln(n,i.config))return i;throw Cr.create("duplicate-app",{appName:r})}const a=new $n(r);for(const s of kr.values())a.addComponent(s);const o=new xr(e,n,a);return vr.set(r,o),o}(vt.qe));(async function(e,t){return oa(e=qn(e),t)})(t,{vapidKey:e}).then((e=>{e&&n(e)})).catch((e=>{}))}return t},ga=()=>{const e=(0,ht.s0)(),t=pa(vt.um),[n]=(0,mt.Vd)();return(0,Ne.useEffect)((()=>{t&&n(t)}),[t]),(0,Ne.useEffect)((()=>{var t;const n=t=>{const{newPath:n}=t.data;e(n)};return null===(t=navigator.serviceWorker)||void 0===t||t.addEventListener("message",n),()=>{var e;null===(e=navigator.serviceWorker)||void 0===e||e.removeEventListener("message",n)}}),[]),null};var _a=n(5607),ma=n(5044);const Fa=a.ZP.div`
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
`;function ba(e){let{handleInstall:t,closePrompt:n}=e;return(0,c.jsx)(_a.Z,{mask:!1,children:(0,c.jsxs)(Fa,{children:[(0,c.jsx)(ma.Z,{className:"close",onClick:n}),(0,c.jsxs)("div",{className:"tip",children:[(0,c.jsx)("h2",{className:"title",children:"Install web app on desktop?"}),(0,c.jsx)("p",{className:"desc",children:"Add to desktop for quick access to this app."})]}),(0,c.jsxs)("div",{className:"btns",children:[(0,c.jsx)(At.Z,{className:"ghost cancel small",onClick:n,children:"Cancel"}),(0,c.jsx)(At.Z,{className:"main small",onClick:t,children:"Install"})]})]})})}function ya(){const{setCanneled:e,prompted:t}={setCanneled:()=>{localStorage.setItem(vt.R1,!0)},prompted:!!localStorage.getItem(vt.R1),resetPrompt:()=>{localStorage.removeItem(vt.R1)}},n=(0,Ne.useRef)(null),[r,i]=(0,Ne.useState)(!1);(0,Ne.useEffect)((()=>{const e=e=>{e.preventDefault(),n.current=e,i(!0)},t=()=>{n.current=null,i(!1)};return window.addEventListener("beforeinstallprompt",e),window.addEventListener("appinstalled",t),()=>{window.removeEventListener("beforeinstallprompt",e),window.removeEventListener("appinstalled",t)}}),[]);return!r||t?null:(0,c.jsx)(ba,{handleInstall:async()=>{if(i(!1),!n.current)return;n.current.prompt();const{outcome:e}=await n.current.userChoice;n.current=null},closePrompt:async()=>{e(),i(!1)}})}var va;function ka(){return ka=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ka.apply(this,arguments)}const wa=(e,t)=>{let{title:n,titleId:r,...i}=e;return Ne.createElement("svg",ka({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?Ne.createElement("title",{id:r},n):null,va||(va=Ne.createElement("path",{d:"M8.79053 19.3376C10.0779 20.3775 11.7161 21.0002 13.4999 21.0002C14.6315 21.0002 15.7064 20.7491 16.6701 20.299L20.1027 20.9856C20.3486 21.0348 20.6029 20.9579 20.7802 20.7806C20.9575 20.6032 21.0345 20.349 20.9853 20.1031L20.2988 16.6702C20.7488 15.7065 20.9999 14.6318 20.9999 13.5002C20.9999 11.7168 20.3774 10.0788 19.338 8.79163C19.4443 9.3448 19.4999 9.91599 19.4999 10.5002C19.4999 11.0652 19.4479 11.618 19.3483 12.1541C19.4475 12.5868 19.4999 13.0374 19.4999 13.5002C19.4999 14.4837 19.2638 15.41 18.8458 16.2274C18.7689 16.3779 18.745 16.5501 18.7782 16.7159L19.2938 19.2941L16.7159 18.7784C16.55 18.7452 16.3778 18.7691 16.2273 18.8461C15.4098 19.2641 14.4835 19.5002 13.4999 19.5002C13.037 19.5002 12.5864 19.4478 12.1537 19.3486C11.6176 19.4481 11.0648 19.5002 10.4999 19.5002C9.91613 19.5002 9.34454 19.4443 8.79053 19.3376ZM10.5 3C6.35788 3 3.00001 6.35786 3.00001 10.5C3.00001 11.6316 3.2511 12.7064 3.70112 13.6701L3.01458 17.103C2.9654 17.3489 3.04237 17.6031 3.2197 17.7804C3.39702 17.9577 3.65123 18.0347 3.89713 17.9855L7.32974 17.2988C8.29349 17.7489 9.36836 18 10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3Z",fill:"#70707B"})))},Ea=(0,Ne.forwardRef)(wa);var Da;function Ca(){return Ca=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ca.apply(this,arguments)}const xa=(e,t)=>{let{title:n,titleId:r,...i}=e;return Ne.createElement("svg",Ca({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?Ne.createElement("title",{id:r},n):null,Da||(Da=Ne.createElement("path",{d:"M17.7541 13.9999C18.9961 13.9999 20.0029 15.0068 20.0029 16.2488V17.1673C20.0029 17.7406 19.8237 18.2997 19.4903 18.7662C17.9445 20.9294 15.4202 22.0011 11.9999 22.0011C8.57891 22.0011 6.05595 20.9289 4.51379 18.7646C4.18182 18.2987 4.00342 17.7409 4.00342 17.1688V16.2488C4.00342 15.0068 5.01027 13.9999 6.25229 13.9999H17.7541ZM11.9999 2.00464C14.7613 2.00464 16.9999 4.24321 16.9999 7.00464C16.9999 9.76606 14.7613 12.0046 11.9999 12.0046C9.23845 12.0046 6.99988 9.76606 6.99988 7.00464C6.99988 4.24321 9.23845 2.00464 11.9999 2.00464Z",fill:"#70707B"})))},Sa=(0,Ne.forwardRef)(xa);var Aa;function Ta(){return Ta=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ta.apply(this,arguments)}const Oa=(e,t)=>{let{title:n,titleId:r,...i}=e;return Ne.createElement("svg",Ta({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?Ne.createElement("title",{id:r},n):null,Aa||(Aa=Ne.createElement("path",{d:"M5.99988 6.5C5.99988 5.11929 7.11917 4 8.49988 4H15.4999C16.8806 4 17.9999 5.11929 17.9999 6.5V19.5C17.9999 19.6881 17.8944 19.8602 17.7268 19.9456C17.5592 20.0309 17.3579 20.015 17.2058 19.9044L11.9999 16.1183L6.79396 19.9044C6.64187 20.015 6.44057 20.0309 6.27299 19.9456C6.1054 19.8602 5.99988 19.6881 5.99988 19.5V6.5Z",fill:"#70707B"})))},Ba=(0,Ne.forwardRef)(Oa);var Ia;function Na(){return Na=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Na.apply(this,arguments)}const Ra=(e,t)=>{let{title:n,titleId:r,...i}=e;return Ne.createElement("svg",Na({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?Ne.createElement("title",{id:r},n):null,Ia||(Ia=Ne.createElement("path",{d:"M13.821 6.5H19.75C20.8867 6.5 21.8266 7.34297 21.9785 8.43788L21.9948 8.59595L22 8.75V17.75C22 18.9409 21.0748 19.9156 19.904 19.9948L19.75 20H4.25C3.05914 20 2.08436 19.0748 2.00519 17.904L2 17.75V10.499L8.20693 10.5L8.40335 10.4914C8.79396 10.4572 9.16896 10.3214 9.49094 10.0977L9.64734 9.9785L13.821 6.5ZM8.20693 4C8.66749 4 9.1153 4.14129 9.49094 4.40235L9.64734 4.5215L11.75 6.273L8.68706 8.82617L8.60221 8.88738C8.51363 8.94232 8.41452 8.9782 8.31129 8.9927L8.20693 9L2 8.999V6.25C2 5.05914 2.92516 4.08436 4.09595 4.00519L4.25 4H8.20693Z",fill:"#70707B"})))},Pa=(0,Ne.forwardRef)(Ra);function ja(){!function(){const e=new Sn.Z;(0,Ne.useEffect)((()=>{e.isSupported()&&e.asyncSetBadge(2).catch((e=>{}))}),[]),e.isSupported()}();const e=(0,ht.bS)("/"),t=(0,ht.bS)("/chat"),{pathname:n}=(0,ht.TH)(),{loginUid:r,ui:{ready:i,remeberedNavs:{chat:a,contact:o}}}=(0,pt.v9)((e=>({ui:e.ui,loginUid:e.authData.uid}))),{loading:s}=function(){const{rehydrate:e,rehydrated:t}=Yt(),{loginUid:n,token:r}=(0,pt.v9)((e=>({loginUid:e.authData.uid,token:e.authData.token}))),{setStreamingReady:i}=xn(),[a,{isLoading:o,isSuccess:s,isError:u,data:l}]=(0,Jt.rF)(),[d,{isLoading:c,isSuccess:f,isError:h,data:p}]=(0,en.Uk)(),[g,{isLoading:_,isSuccess:m,isError:F,data:b}]=(0,kt.$M)();(0,Ne.useEffect)((()=>(Qt(),e(),()=>{i(!1)})),[]),(0,Ne.useEffect)((()=>{t&&(d(),g(),a())}),[t]);const y=n&&t&&!!r;return(0,Ne.useEffect)((()=>{i(y)}),[y]),{loading:c||_||o||!t,error:h&&F&&u,success:f&&m&&s,data:{contacts:p,server:b,favorites:l}}}();if(s||!i)return(0,c.jsx)(It,{reload:!0,fullscreen:!0});const u=n.startsWith("/setting"),l=e||n.startsWith("/chat");if(u)return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(ga,{}),(0,c.jsx)(ht.j3,{})]});const d=t?"/chat":a||"/chat",f=o||"/contacts";return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(ya,{}),(0,c.jsx)(ga,{}),(0,c.jsxs)(Et,{children:[(0,c.jsxs)("div",{className:"col left",children:[(0,c.jsx)(xt,{uid:r}),(0,c.jsxs)("nav",{className:"link_navs",children:[(0,c.jsx)(ft.OL,{className:()=>"link "+(l?"active":""),to:d,children:(0,c.jsx)(Nt.Z,{tip:"Chat",children:(0,c.jsx)(Ea,{})})}),(0,c.jsx)(ft.OL,{className:"link",to:f,children:(0,c.jsx)(Nt.Z,{tip:"Members",children:(0,c.jsx)(Sa,{})})}),(0,c.jsx)(ft.OL,{className:"link",to:"/favs",children:(0,c.jsx)(Nt.Z,{tip:"Saved Items",children:(0,c.jsx)(Ba,{})})}),(0,c.jsx)(ft.OL,{className:"link",to:"/files",children:(0,c.jsx)(Nt.Z,{tip:"Files",children:(0,c.jsx)(Pa,{})})})]}),(0,c.jsx)(jt,{})]}),(0,c.jsx)("div",{className:"col right",children:(0,c.jsx)(ht.j3,{})})]})]})}const La=a.ZP.div`
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
`;var Ma=n(4075),qa=n(2963),za=n(5953),Ua=n(7364);const Ha=a.ZP.div`
  min-height: 56px;
  position: relative;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  /* margin-bottom: 10px; */
  .server {
    display: flex;
    align-items: center;
    gap: 8px;
    .logo {
      width: 32px;
      height: 32px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 4px;
      .name {
        font-weight: 700;
        font-size: 14px;
        line-height: 100%;
        color: #374151;
      }
      .desc {
        font-weight: 400;
        font-size: 12px;
        line-height: 100%;
        color: #78787c;
      }
    }
  }
  .add {
    cursor: pointer;
  }
`;function $a(){const{pathname:e}=(0,ht.TH)(),{server:t,userCount:n}=(0,pt.v9)((e=>({userCount:e.contacts.ids.length,server:e.server}))),{name:r,description:i,logo:a}=t;return(0,c.jsxs)(Ha,{children:[(0,c.jsx)(ft.OL,{to:`/setting?f=${e}`,children:(0,c.jsxs)("div",{className:"server",children:[(0,c.jsx)("div",{className:"logo",children:(0,c.jsx)("img",{src:a})}),(0,c.jsxs)("div",{className:"info",children:[(0,c.jsx)("h3",{className:"name",title:i,children:r}),(0,c.jsxs)("span",{className:"desc",children:[n," members"]})]})]})}),(0,c.jsx)(Nt.Z,{tip:"More",placement:"bottom",children:(0,c.jsx)(qa.ZP,{interactive:!0,placement:"bottom-end",trigger:"click",content:(0,c.jsx)(Ua.Z,{}),children:(0,c.jsx)("img",{src:za,alt:"add icon",className:"add"})})})]})}const Wa=n.p+"static/media/sound.on.b52a5b656fded2ead800.svg",Va=n.p+"static/media/mic.on.ce4d7bc6e790710d7c3b.svg";var Ga=n(4263);const Za=a.ZP.div`
  background-color: #f4f4f5;
  position: sticky;
  bottom: 16px;
  margin: 8px;
  width: 94%;
  width: -webkit-fill-available;
  border-radius: 25px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .profile {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
    }
    .toggle {
    }
    .info {
      display: flex;
      flex-direction: column;
      .name {
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
        color: #27272a;
      }
      .id {
        padding: 0 2px;
        font-size: 12px;
        line-height: 18px;
        color: #52525b;
      }
    }
  }
  .settings {
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon {
      cursor: pointer;
      width: 24px;
      height: 24px;
    }
  }
`;function Ka(){const{values:e}=(0,Ga.Z)("agora"),t=(0,pt.v9)((e=>e.contacts.byId[e.authData.uid]));if(!t)return null;const{uid:n,name:r,avatar:i}=t;return(0,c.jsxs)(Za,{children:[(0,c.jsxs)("div",{className:"profile",children:[(0,c.jsx)(Dt.Z,{url:i,name:r,alt:"user avatar",className:"avatar"}),(0,c.jsxs)("div",{className:"info",children:[(0,c.jsx)("span",{className:"name",children:r}),(0,c.jsxs)("span",{className:"id",children:["#",n]})]})]}),e.enabled&&(0,c.jsxs)("div",{className:"settings",children:[(0,c.jsx)("img",{src:Wa,className:"icon",alt:"mic icon"}),(0,c.jsx)("img",{src:Va,className:"icon",alt:"sound icon"})]})]})}var Ya=n(936),Xa=n.n(Ya);function Qa(e,t,n){var r=(0,Ne.useCallback)((function(e){return Xa()(e,t,n)}),[t,n]),i=(0,Ne.useRef)(r(e));return(0,Ne.useEffect)((function(){i.current=r(e)}),[e,r]),i.current}function Ja(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;const[t,n]=(0,Ne.useState)([]),{channel:r,loginUser:i}=(0,pt.v9)((t=>({channel:t.channels.byId[e],loginUser:t.contacts.byId[t.authData.uid]}))),[a,{isError:o,isLoading:s,isSuccess:u}]=(0,Jt.OL)(),[l,{isError:d,isLoading:c,isSuccess:f}]=(0,Jt.jT)(),h=t=>{t&&e&&a({mid:t,gid:+e})},p=t=>{t&&e&&l({mid:t,gid:+e})},g=t=>{if(!e||!r)return;const n=r.pinned_messages;if(!n||0==n.length)return;const i=n.find((e=>e.mid==t));return i};return(0,Ne.useEffect)((()=>{r&&n(r.pinned_messages)}),[r]),{getPinInfo:g,channel:r,pins:t,canPin:i.is_admin||(null===r||void 0===r?void 0:r.owner)==i.uid,pinMessage:h,unpinMessage:p,isError:o,isPining:s,isSuccess:u,isUnpinError:d,isUnpining:c,isUnpinSuccess:f}}var eo,to=n(9890),no=n(7323);function ro(e){let{mid:t=0}=e;const{msg:n,contactsData:r}=(0,pt.v9)((e=>({msg:e.message[t],contactsData:e.contacts.byId})));if(!n)return null;const{from_uid:i,created_at:a,content_type:o,content:s,thumbnail:u,properties:l}=n,{name:d,avatar:f}=r[i];return(0,c.jsxs)(no.Z,{className:"preview",children:[(0,c.jsx)("div",{className:"avatar",children:(0,c.jsx)(Dt.Z,{url:f,name:d})}),(0,c.jsxs)("div",{className:"details",children:[(0,c.jsxs)("div",{className:"up",children:[(0,c.jsx)("span",{className:"name",children:d}),(0,c.jsx)("i",{className:"time",children:ln()(a).format("YYYY-MM-DD h:mm:ss A")})]}),(0,c.jsx)("div",{className:"down",children:(0,to.Z)({content_type:o,content:s,thumbnail:u,from_uid:i,properties:l})})]})]})}function io(){return io=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},io.apply(this,arguments)}const ao=(e,t)=>{let{title:n,titleId:r,...i}=e;return Ne.createElement("svg",io({width:160,height:160,viewBox:"0 0 160 160",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?Ne.createElement("title",{id:r},n):null,eo||(eo=Ne.createElement("path",{d:"M79.9997 13.3642C116.819 13.3642 146.666 43.2118 146.666 80.0308C146.666 116.85 116.819 146.698 79.9997 146.698C43.1807 146.698 13.333 116.85 13.333 80.0308C13.333 43.2118 43.1807 13.3642 79.9997 13.3642ZM79.9997 23.3642C48.7035 23.3642 23.333 48.7347 23.333 80.0308C23.333 111.327 48.7035 136.698 79.9997 136.698C111.296 136.698 136.666 111.327 136.666 80.0308C136.666 48.7347 111.296 23.3642 79.9997 23.3642ZM79.9997 86.6667C88.284 86.6667 94.9997 93.3824 94.9997 101.667C94.9997 109.951 88.284 116.667 79.9997 116.667C71.7154 116.667 64.9997 109.951 64.9997 101.667C64.9997 93.3824 71.7154 86.6667 79.9997 86.6667ZM60.0027 58.3411C64.6024 58.3411 68.3313 62.0699 68.3313 66.6697C68.3313 71.2694 64.6024 74.9983 60.0027 74.9983C55.4029 74.9983 51.6741 71.2694 51.6741 66.6697C51.6741 62.0699 55.4029 58.3411 60.0027 58.3411ZM100.003 58.3411C104.602 58.3411 108.331 62.0699 108.331 66.6697C108.331 71.2694 104.602 74.9983 100.003 74.9983C95.4029 74.9983 91.6741 71.2694 91.6741 66.6697C91.6741 62.0699 95.4029 58.3411 100.003 58.3411Z",fill:"#D0D5DD"})))},oo=(0,Ne.forwardRef)(ao),so=a.ZP.div`
  padding: 16px;
  background: #f9fafb;
  filter: drop-shadow(0px 25px 50px rgba(31, 41, 55, 0.25));
  border-radius: 12px;
  width: 406px;
  > .head {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #344054;
    margin-bottom: 16px;
  }
  > .none {
    padding: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    .tip {
      width: 240px;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #475467;
    }
  }
  > .list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    .pin {
      position: relative;
      border: 1px solid #f2f4f7;
      border-radius: var(--br);
      > .preview {
        background: none;
        .down img {
          width: 100% !important;
          height: auto !important;
        }
      }
      > .opts {
        visibility: hidden;
        display: flex;
        align-items: center;
        gap: 4px;
        position: absolute;
        top: 4px;
        right: 4px;
        padding: 4px;
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 6px;
        .btn {
          display: flex;
          background: none;
          border: none;
          svg {
            width: 16px;
            height: 16px;
            path {
              fill-opacity: 1;
              fill: #667085;
            }
          }
        }
      }
      &:hover .opts {
        visibility: visible;
      }
    }
  }
`;function uo(e){let{id:t}=e;const{pins:n,unpinMessage:r,canPin:i}=Ja(t),a=e=>{const{mid:t}=e.currentTarget.dataset;r(+t)},o=0==n.length;return(0,c.jsxs)(so,{children:[(0,c.jsxs)("h4",{className:"head",children:["Pinned Message(",n.length,")"]}),o?(0,c.jsxs)("div",{className:"none",children:[(0,c.jsx)(oo,{}),(0,c.jsx)("div",{className:"tip",children:"This channel doesn\u2019t have any pinned message yet."})]}):(0,c.jsx)("ul",{className:"list",children:n.map((e=>{let{mid:t}=e;return(0,c.jsxs)("li",{className:"pin",children:[(0,c.jsx)(ro,{mid:t}),(0,c.jsx)("div",{className:"opts",children:i&&(0,c.jsx)("button",{className:"btn","data-mid":t,onClick:a,children:(0,c.jsx)(ma.Z,{})})})]},t)}))})]})}var lo=n(4379),co=n(5664);const fo=a.ZP.div`
  padding: 16px;
  background: #f9fafb;
  filter: drop-shadow(0px 25px 50px rgba(31, 41, 55, 0.25));
  border-radius: 12px;
  min-width: 500px;
  max-height: 500px;
  overflow: auto;
  > .head {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #344054;
    margin-bottom: 16px;
  }
  > .none {
    padding: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    .tip {
      width: 240px;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #475467;
    }
  }
  > .list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    .fav {
      position: relative;
      border: 1px solid #f2f4f7;
      .favorite {