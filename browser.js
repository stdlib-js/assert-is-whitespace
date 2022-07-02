// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).isWhitespace=r()}(this,(function(){"use strict";function t(t){var r=t.default;if("function"==typeof r){var e=function(){return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(t){return!1}},n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,a=o.__lookupGetter__,f=o.__lookupSetter__;var l=function(t,r,e){var n,l,p,s;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(a.call(t,r)||f.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,s="set"in e,l&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),s&&c&&c.call(t,r,e.set),t},p=n,s=l,y=e()?p:s;var v=function(t,r,e){y(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},b=v;var d=function(t){return"string"==typeof t};var g=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return g&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,m=_;var w=function(t){return m.call(t)},O=Object.prototype.hasOwnProperty;var E=function(t,r){return null!=t&&O.call(t,r)},h="function"==typeof Symbol?Symbol.toStringTag:"",P=E,S=h,A=_;var T=w,x=function(t){var r,e,n;if(null==t)return A.call(t);e=t[S],r=P(t,S);try{t[S]=void 0}catch(r){return A.call(t)}return n=A.call(t),r?t[S]=e:delete t[S],n},F=j()?x:T,R=String.prototype.valueOf;var B=F,G=function(t){try{return R.call(t),!0}catch(t){return!1}},C=j();var V=function(t){return"object"==typeof t&&(t instanceof String||(C?G(t):"[object String]"===B(t)))},X=d,k=V;var L=b,M=function(t){return X(t)||k(t)},D=V;L(M,"isPrimitive",d),L(M,"isObject",D);var U=M,z=F;var I=Array.isArray?Array.isArray:function(t){return"[object Array]"===z(t)},N=I;var W=function(t){return"object"==typeof t&&null!==t&&!N(t)},$=/./;var q=function(t){return"boolean"==typeof t},H=Boolean.prototype.toString;var J=F,K=function(t){try{return H.call(t),!0}catch(t){return!1}},Q=j();var Y=function(t){return"object"==typeof t&&(t instanceof Boolean||(Q?K(t):"[object Boolean]"===J(t)))},Z=q,tt=Y;var rt=b,et=function(t){return Z(t)||tt(t)},nt=Y;rt(et,"isPrimitive",q),rt(et,"isObject",nt);var ot=et;var ut=function(){return new Function("return this;")()},it="object"==typeof self?self:null,ct="object"==typeof window?window:null,at="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ft="object"==typeof at?at:null;module.exports=ft;var lt=ot.isPrimitive,pt=ut,st=it,yt=ct,vt=t(Object.freeze({__proto__:null}));var bt=function(t){if(arguments.length){if(!lt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return pt()}if(st)return st;if(yt)return yt;if(vt)return vt;throw new Error("unexpected error. Unable to resolve global object.")},dt=bt(),gt=dt.document&&dt.document.childNodes,jt=Int8Array,_t=$,mt=gt,wt=jt;var Ot=function(){return"function"==typeof _t||"object"==typeof wt||"function"==typeof mt};var Et=function(){return/^\s*function\s*([^(]*)/i},ht=Et;b(ht,"REGEXP",Et());var Pt=ht,St=I;var At=function(t){return null!==t&&"object"==typeof t};b(At,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!St(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(At));var Tt=At;var xt=F,Ft=Pt.REGEXP,Rt=function(t){return Tt(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var Bt=function(t){var r,e,n;if(("Object"===(e=xt(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=Ft.exec(n.toString()))return r[1]}return Rt(t)?"Buffer":e},Gt=Bt;var Ct=Bt;var Vt=function(t){var r;return null===t?"null":"object"===(r=typeof t)?Gt(t).toLowerCase():r},Xt=function(t){return Ct(t).toLowerCase()},kt=Ot()?Xt:Vt;var Lt=function(t){return"function"===kt(t)},Mt=Object.getPrototypeOf;var Dt=function(t){return t.__proto__},Ut=F,zt=Dt;var It=function(t){var r=zt(t);return r||null===r?r:"[object Function]"===Ut(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},Nt=Mt,Wt=It,$t=Lt(Object.getPrototypeOf)?Nt:Wt;var qt=W,Ht=Lt,Jt=function(t){return null==t?null:(t=Object(t),$t(t))},Kt=E,Qt=F,Yt=Object.prototype;var Zt=function(t){var r;return!!qt(t)&&(!(r=Jt(t))||!Kt(t,"constructor")&&Kt(r,"constructor")&&Ht(r.constructor)&&"[object Function]"===Qt(r.constructor)&&Kt(r,"isPrototypeOf")&&Ht(r.isPrototypeOf)&&(r===Yt||function(t){var r;for(r in t)if(!Kt(t,r))return!1;return!0}(t)))},tr=Zt,rr=E,er=ot.isPrimitive,nr=U.isPrimitive;var or=function(t,r){return tr(r)?rr(r,"flags")&&(t.flags=r.flags,!nr(t.flags))?new TypeError("invalid option. `flags` option must be a string primitive. Option: `"+t.flags+"`."):rr(r,"capture")&&(t.capture=r.capture,!er(t.capture))?new TypeError("invalid option. `capture` option must be a boolean primitive. Option: `"+t.capture+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+r+"`.")},ur="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";var ir=function(t){var r,e;if(arguments.length>0){if(e=or(r={},t))throw e;return r.capture?new RegExp("("+ur+")",r.flags):new RegExp(ur,r.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/},cr=b,ar=ir,fr=ir({capture:!0});cr(ar,"REGEXP",ir()),cr(ar,"REGEXP_CAPTURE",fr);var lr=new RegExp("^"+ar.REGEXP.source+"+$");return function(t){return!!U.isPrimitive(t)&&lr.test(t)}}));
//# sourceMappingURL=browser.js.map
