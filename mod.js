// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){var r=t.default;if("function"==typeof r){var e=function(){return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(t){return!1}},n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,a=o.__lookupGetter__,f=o.__lookupSetter__;var l=function(t,r,e){var n,l,p,v;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(a.call(t,r)||f.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,v="set"in e,l&&(p||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),v&&c&&c.call(t,r,e.set),t},p=n,v=l,s=e()?p:v;var y=function(t,r,e){s(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},b=y;var g=function(t){return"string"==typeof t};var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var _=function(){return j&&"symbol"==typeof Symbol.toStringTag},m=Object.prototype.toString,d=m;var O=function(t){return d.call(t)},w=Object.prototype.hasOwnProperty;var E=function(t,r){return null!=t&&w.call(t,r)},P="function"==typeof Symbol?Symbol.toStringTag:"",h=E,S=P,A=m;var T=O,F=function(t){var r,e,n;if(null==t)return A.call(t);e=t[S],r=h(t,S);try{t[S]=void 0}catch(r){return A.call(t)}return n=A.call(t),r?t[S]=e:delete t[S],n},R=_()?F:T,B=String.prototype.valueOf;var x=R,G=function(t){try{return B.call(t),!0}catch(t){return!1}},C=_();var V=function(t){return"object"==typeof t&&(t instanceof String||(C?G(t):"[object String]"===x(t)))},X=g,k=V;var L=b,M=function(t){return X(t)||k(t)},D=V;L(M,"isPrimitive",g),L(M,"isObject",D);var U=M,z=R;var I=Array.isArray?Array.isArray:function(t){return"[object Array]"===z(t)},N=I;var $=function(t){return"object"==typeof t&&null!==t&&!N(t)},q=/./;var H=function(t){return"boolean"==typeof t},J=Boolean.prototype.toString;var K=R,Q=function(t){try{return J.call(t),!0}catch(t){return!1}},W=_();var Y=function(t){return"object"==typeof t&&(t instanceof Boolean||(W?Q(t):"[object Boolean]"===K(t)))},Z=H,tt=Y;var rt=b,et=function(t){return Z(t)||tt(t)},nt=Y;rt(et,"isPrimitive",H),rt(et,"isObject",nt);var ot=et;var ut="object"==typeof self?self:null,it="object"==typeof window?window:null,ct=ot.isPrimitive,at=function(){return new Function("return this;")()},ft=ut,lt=it,pt=t(Object.freeze({__proto__:null}));var vt=function(t){if(arguments.length){if(!ct(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return at()}if(ft)return ft;if(lt)return lt;if(pt)return pt;throw new Error("unexpected error. Unable to resolve global object.")},st=vt(),yt=st.document&&st.document.childNodes,bt=Int8Array,gt=q,jt=yt,_t=bt;var mt=function(){return"function"==typeof gt||"object"==typeof _t||"function"==typeof jt};var dt=function(){return/^\s*function\s*([^(]*)/i},Ot=dt;b(Ot,"REGEXP",dt());var wt=Ot,Et=I;var Pt=function(t){return null!==t&&"object"==typeof t};b(Pt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!Et(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(Pt));var ht=Pt;var St=R,At=wt.REGEXP,Tt=function(t){return ht(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var Ft=function(t){var r,e,n;if(("Object"===(e=St(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=At.exec(n.toString()))return r[1]}return Tt(t)?"Buffer":e},Rt=Ft;var Bt=Ft;var xt=function(t){var r;return null===t?"null":"object"===(r=typeof t)?Rt(t).toLowerCase():r},Gt=function(t){return Bt(t).toLowerCase()},Ct=mt()?Gt:xt;var Vt=function(t){return"function"===Ct(t)},Xt=Object.getPrototypeOf;var kt=function(t){return t.__proto__},Lt=R,Mt=kt;var Dt=function(t){var r=Mt(t);return r||null===r?r:"[object Function]"===Lt(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},Ut=Xt,zt=Dt,It=Vt(Object.getPrototypeOf)?Ut:zt;var Nt=$,$t=Vt,qt=function(t){return null==t?null:(t=Object(t),It(t))},Ht=E,Jt=R,Kt=Object.prototype;var Qt=function(t){var r;return!!Nt(t)&&(!(r=qt(t))||!Ht(t,"constructor")&&Ht(r,"constructor")&&$t(r.constructor)&&"[object Function]"===Jt(r.constructor)&&Ht(r,"isPrototypeOf")&&$t(r.isPrototypeOf)&&(r===Kt||function(t){var r;for(r in t)if(!Ht(t,r))return!1;return!0}(t)))},Wt=Qt,Yt=E,Zt=ot.isPrimitive,tr=U.isPrimitive;var rr=function(t,r){return Wt(r)?Yt(r,"flags")&&(t.flags=r.flags,!tr(t.flags))?new TypeError("invalid option. `flags` option must be a string primitive. Option: `"+t.flags+"`."):Yt(r,"capture")&&(t.capture=r.capture,!Zt(t.capture))?new TypeError("invalid option. `capture` option must be a boolean primitive. Option: `"+t.capture+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+r+"`.")},er="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";var nr=function(t){var r,e;if(arguments.length>0){if(e=rr(r={},t))throw e;return r.capture?new RegExp("("+er+")",r.flags):new RegExp(er,r.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/},or=b,ur=nr,ir=nr({capture:!0});or(ur,"REGEXP",nr()),or(ur,"REGEXP_CAPTURE",ir);var cr=U.isPrimitive,ar=new RegExp("^"+ur.REGEXP.source+"+$");var fr=function(t){return!!cr(t)&&ar.test(t)};export{fr as default};
//# sourceMappingURL=mod.js.map
