/*! For license information please see main-309f7e27.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkrestlater=self.webpackChunkrestlater||[]).push([[421],{1404:(t,n,e)=>{e.d(n,{e:()=>d,m:()=>f});var r=e(1617),o=e(7801),i=e(3814),a=e(8787),c=e(9999);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(){l=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{c({},"")}catch(t){c=function(t,n,e){return t[n]=e}}function u(t,n,e,r){var o=n&&n.prototype instanceof f?n:f,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===d)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var s=h(t,n,e);if("normal"===s.type){if(r=e.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(r="completed",e.method="throw",e.arg=s.arg)}}}(t,e,a),i}function h(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d={};function f(){}function p(){}function v(){}var y={};c(y,o,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(O([])));b&&b!==n&&e.call(b,o)&&(y=b);var g=v.prototype=f.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(n){c(t,n,(function(t){return this._invoke(n,t)}))}))}function k(t,n){function r(o,i,a,c){var l=h(t[o],t,i);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==s(d)&&e.call(d,"__await")?n.resolve(d.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):n.resolve(d).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(l.arg)}var o;this._invoke=function(t,e){function i(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(i,i):i()}}function L(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,L(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=h(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,d;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,d):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function x(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function E(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=v,c(g,"constructor",v),c(v,"constructor",p),p.displayName=c(v,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===p||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(k.prototype),c(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new k(u(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),c(g,a,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),s=e.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),d},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),d}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:O(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),d}},t}function u(t,n,e,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void e(t)}c.done?n(s):Promise.resolve(s).then(r,o)}function h(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function a(t){u(i,r,o,a,c,"next",t)}function c(t){u(i,r,o,a,c,"throw",t)}a(void 0)}))}}var d=function(t,n,e){var r={slots:t,price:n,initial:e};sessionStorage.setItem("detail",JSON.stringify(r)),window.location.hash="#/payment"},f={render:function(){return document.title="Restlater | Payment","\n      <section id='payment-container'>\n        <h1>PAYMENT CONFIRMATION</h1>\n        <div id='payment-profile'></div>\n        <div id='payment-reservation'></div>\n        <div id='payment-confirm'></div>\n      </section>\n    "},afterRender:function(){return h(l().mark((function t(){var n,e,r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=JSON.parse(sessionStorage.getItem("detail")),e=(0,o.Z)(),r=JSON.parse(sessionStorage.getItem("user")),p(r),v(n.initial,n.slots,e),y(n.price,n.slots,e,r.uid,n.initial);case 6:case"end":return t.stop()}}),t)})))()}},p=function(t){$("#payment-profile").append("\n      <h3>Profile</h3>\n      <div class='payment-profile-content'>\n        <div class='payment-profile-item'>\n          <h4>Full Name</h4>\n          <p>".concat(t.displayName,"</p>\n        </div>\n        <div class='payment-profile-item'>\n          <h4>Email</h4>\n          <p>").concat(t.email,"</p>\n        </div>\n        <div class='payment-profile-item'>\n          <h4>Phone</h4>\n          <p>").concat(t.phone?t.phone:"-","</p>\n        </div>\n        <div class='payment-profile-item'>\n          <h4>Address</h4>\n          <p>").concat(t.address?t.address:"-","</p>\n        </div>\n      </div>\n      <button id='payment-profile-edit'>Edit Profile</button>\n    ")),$("#payment-profile-edit").on("click",(function(){i.Z.popupRender()}))},v=function(t,n,e){$("#payment-reservation").append("\n    <div class='payment-reservation-content'>\n      <h3>Reservation</h3>\n      <p>".concat(e,"</p>\n      <h4>BLOK ").concat(t,"</h4>\n      <h5>").concat((0,a.Z)(n),"</h5>\n      <div></div>\n    </div>\n    "))},y=function(t,n,e,o,i){$("#payment-confirm").append("\n    <div class='payment-confirm-content'>\n      <h2>TOTAL PRICE</h2>\n      <h3>".concat(t,"</h3>\n      <button id='confirm-button'>CONFIRM PAYMENT</button>\n    </div>\n  ")),$("#confirm-button").css({cursor:"pointer","background-color":"#FFB830"}),$("#confirm-button").prop("disabled",!1),$("#confirm-button").click(h(l().mark((function a(){var s,u,h;return l().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.Z.getTransaction();case 2:s=a.sent,u=s.length,h={uid:o,date:e,slots:n,total:t},c.Z.setTransaction(h,u),c.Z.setslots(n,i),r.Z.popupRender();case 8:case"end":return a.stop()}}),a)}))))}},6638:(t,n,e)=>{e.d(n,{Z:()=>m});var r=e(9999),o=e(3497),i=e(8508),a=e(8787),c=e(3814);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(){l=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{c({},"")}catch(t){c=function(t,n,e){return t[n]=e}}function u(t,n,e,r){var o=n&&n.prototype instanceof f?n:f,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===d)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var s=h(t,n,e);if("normal"===s.type){if(r=e.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(r="completed",e.method="throw",e.arg=s.arg)}}}(t,e,a),i}function h(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d={};function f(){}function p(){}function v(){}var y={};c(y,o,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(O([])));b&&b!==n&&e.call(b,o)&&(y=b);var g=v.prototype=f.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(n){c(t,n,(function(t){return this._invoke(n,t)}))}))}function k(t,n){function r(o,i,a,c){var l=h(t[o],t,i);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==s(d)&&e.call(d,"__await")?n.resolve(d.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):n.resolve(d).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(l.arg)}var o;this._invoke=function(t,e){function i(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(i,i):i()}}function L(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,L(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=h(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,d;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,d):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function x(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function E(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=v,c(g,"constructor",v),c(v,"constructor",p),p.displayName=c(v,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===p||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(k.prototype),c(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new k(u(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),c(g,a,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),s=e.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),d},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),d}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:O(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),d}},t}function u(t,n,e,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void e(t)}c.done?n(s):Promise.resolve(s).then(r,o)}function h(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function a(t){u(i,r,o,a,c,"next",t)}function c(t){u(i,r,o,a,c,"throw",t)}a(void 0)}))}}var d={render:function(){return"\n      <section id='profile-container'>\n        <h1>USER PROFILE</h1>\n        <div id='profile-lack' hidden></div>\n        <div id='user-profile'>\n          <img src='./images/user.svg' alt='user profile' height='200px'>\n          <div id='user-profile-content'></div>\n        </div>\n        <div id='user-transaction'></div>\n        <button id='logout'>Logout</button>\n      </section>\n    "},afterRender:function(){return h(l().mark((function t(){var n,e,o;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.Z.parseActiveUrlWithoutCombiner(),e=n.id,t.next=4,v(e);case 4:return o=t.sent,f(o),y(),t.t0=p,t.t1=o.uid,t.next=11,r.Z.getTransaction();case 11:t.t2=t.sent,(0,t.t0)(t.t1,t.t2);case 13:case"end":return t.stop()}}),t)})))()}},f=function(t){$("#user-profile-content").append("\n    <h2>USER ID: <span>".concat(t.uid,"</span></h2>\n    <h3>").concat(t.displayName,"</h3>\n    <h4>").concat(t.email,"</h4>\n    <h5>").concat(t.phone?t.phone:"-","</h5>\n    <h5>").concat(t.address?t.address:"-","</h5>\n    <button id=\"payment-profile-edit\" class='profile-edit-button'>Edit Profile</button>\n  ")),sessionStorage.setItem("user",JSON.stringify(t)),$("#payment-profile-edit").on("click",(function(){c.Z.popupRender()}))},p=function(t,n){n.filter((function(n){return null!==n&&n.uid===t})).forEach((function(t){$("#user-transaction").append("\n    <div class='payment-reservation-content profile-transaction'>\n      <h3>Reservation</h3>\n      <p>".concat(t.date,"</p>\n      <h4>BLOK ").concat(t.slots[0].split("")[0],"</h4>\n      <h5>").concat((0,a.Z)(t.slots),"</h5>\n      <h6>").concat(t.total,"</h6>\n      <div></div>\n    </div>\n    "))}))},v=function(){var t=h(l().mark((function t(n){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===sessionStorage.getItem("user")){t.next=2;break}return t.abrupt("return",JSON.parse(sessionStorage.getItem("user")));case 2:return t.next=4,o.Z.getUserById(n);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),y=function(){$("#profile-lack").hide(),"-"!==$("#user-profile-content > h5:nth-child(4)").text()&&"-"!==$("#user-profile-content > h5:nth-child(5)").text()||($("#profile-lack").show(),$("#profile-lack").append('\n      Please fill in your phone number and address to complete your profile in "Edit Profile" button.\n    ')),$("#profile-lack").hide()};const m=d},6194:(t,n,e)=>{e.d(n,{Aw:()=>r,BK:()=>s,DL:()=>c,Sc:()=>i,Sq:()=>o,sK:()=>a});var r=function(){return"\n    <div id='dashboard-container'>\n        <section class=\"sidebar\">\n        <div class=\"sidebar-menu\">\n            <ul>\n            <li>\n                <div class=\"active\">\n                <span class=\"las la-igloo\"></span>\n                <span>Dashboard</span>\n                </div>\n            </li>\n\n            <li class='menu' id='dashboard-user'>\n                <div><span class=\"las la-users\"></span><span>Users</span></div>\n            </li>\n\n            <li class=\"dropdown1 menu\">\n                <div>\n                <span class=\"las la-book\"></span>\n                Graves\n                <span id=\"sub1\" class=\"las la-caret-down\"></span>\n                </div>\n            </li>\n            <ul class=\"submenu\">\n                <li id='dashboard-blokA' class='blok-submenu'><div>Blok A</div></li>\n                <li id='dashboard-blokB' class='blok-submenu'><div>Blok B</div></li>\n                <li id='dashboard-blokC' class='blok-submenu'><div>Blok C</div></li>\n                <li id='dashboard-blokD' class='blok-submenu'><div>Blok D</div></li>\n                <li id='dashboard-blokE' class='blok-submenu'><div>Blok E</d></li>\n            </ul>\n\n            <li class='menu' id='dashboard-transaction'>\n            <div>\n                <span class=\"las la-shopping-bag\">\n                </span>\n                Transactions\n            </div>\n            </li>\n            </ul>\n        </div>\n        </section>\n\n        <section id=\"dashboard-main\">\n        </section>\n\n    </div>\n"},o=function(){$("#dashboard-main").append('\n        <div class="search">\n        <div class="search-wrapper">\n        <span class="las la-search"></span>\n        <input type="search" id=\'search-input\' placeholder="Search here">\n        </div>\n        </div>\n\n        <div class="filter">\n            <span>Filter</span><i id="sub2" class="las la-caret-down"></i>\n        </div>\n\n        <div id="data-container"><div id="list_table" class="list_table"></div></div>\n      ')},i=function(){return"\n<h2 class='table-title'>List Users</h2>\n<table id=\"userListTable\" class='table-data'>\n    <tr>\n        <th>User ID</th>\n        <th>Name</th>\n        <th>Email</th>\n        <th>Phone</th>\n        <th>Address</th>\n        <th>Action</th>\n    </tr>\n</table>\n"},a=function(){return"\n<h2 class='table-title'>List Transactions</h2>\n<table id=\"transactionListTable\" class='table-data'>\n<tr>\n    <th>Transaction ID</th>\n    <th>User Name</th>\n    <th>Booked Graves</th>\n    <th>Total Price</th>\n    <th>Date</th>\n    <th>Action</th>\n</tr>\n</table>\n"},c=function(){return"\n    <h2 class='table-title'>Booked Slots</h2>\n    <table id=\"graveListTable\" class='table-data'>\n        <tr id=\"blokA\">\n            <th class='blok-th'>Blok A</th>\n            <td id='blokA-data'></td>\n        </tr>\n        <tr id=\"blokB\">\n            <th class='blok-th'>Blok B</th>\n            <td id='blokB-data'></td>\n        </tr>\n        <tr id=\"blokC\">\n            <th class='blok-th'>Blok C</th>\n            <td id='blokC-data'></td>\n        </tr>\n        <tr id=\"blokD\">\n            <th class='blok-th'>Blok D</th>\n            <td id='blokD-data'></td>\n        </tr>\n        <tr id=\"blokE\">\n            <th class='blok-th'>Blok E</th>\n            <td id='blokE-data'></td>\n        </tr>\n    </table>\n"},s=function(t){return"\n    <h2 class='table-title'>Blok ".concat(t,'</h2>\n    <table id="blokListTable" class="table-data">\n        <tr>\n            <th>ID</th>\n            <th>Available</th>\n            <th>Action</th>\n        </tr>\n    </table>\n')}}}]);