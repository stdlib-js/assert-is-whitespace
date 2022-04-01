// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return t({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,a=o.__lookupGetter__,f=o.__lookupSetter__;var l=function(r,t,e){var n,l,p,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(a.call(r,t)||f.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),p="get"in e,v="set"in e,l&&(p||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(r,t,e.get),v&&c&&c.call(r,t,e.set),r},p=n,v=l,s=e()?p:v;var y=function(r,t,e){s(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},b=y;var g=function(r){return"string"==typeof r};var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var _=function(){return j&&"symbol"==typeof Symbol.toStringTag},m=Object.prototype.toString,d=m;var O=function(r){return d.call(r)},w=Object.prototype.hasOwnProperty;var E=function(r,t){return null!=r&&w.call(r,t)},P="function"==typeof Symbol?Symbol.toStringTag:"",h=E,S=P,A=m;var T=O,F=function(r){var t,e,n;if(null==r)return A.call(r);e=r[S],t=h(r,S);try{r[S]=void 0}catch(t){return A.call(r)}return n=A.call(r),t?r[S]=e:delete r[S],n},R=_()?F:T,B=String.prototype.valueOf;var x=R,G=function(r){try{return B.call(r),!0}catch(r){return!1}},C=_();var V=function(r){return"object"==typeof r&&(r instanceof String||(C?G(r):"[object String]"===x(r)))},X=g,k=V;var M=b,L=function(r){return X(r)||k(r)},D=V;M(L,"isPrimitive",g),M(L,"isObject",D);var U=L,z=R;var I=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)},N=I;var $=function(r){return"object"==typeof r&&null!==r&&!N(r)},q=/./;var H=function(r){return"boolean"==typeof r},J=Boolean.prototype.toString;var K=R,Q=function(r){try{return J.call(r),!0}catch(r){return!1}},W=_();var Y=function(r){return"object"==typeof r&&(r instanceof Boolean||(W?Q(r):"[object Boolean]"===K(r)))},Z=H,rr=Y;var tr=b,er=function(r){return Z(r)||rr(r)},nr=Y;tr(er,"isPrimitive",H),tr(er,"isObject",nr);var or=er;var ur="object"==typeof self?self:null,ir="object"==typeof window?window:null,cr=or.isPrimitive,ar=function(){return new Function("return this;")()},fr=ur,lr=ir,pr=r(Object.freeze({__proto__:null}));var vr=function(r){if(arguments.length){if(!cr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return ar()}if(fr)return fr;if(lr)return lr;if(pr)return pr;throw new Error("unexpected error. Unable to resolve global object.")},sr=vr(),yr=sr.document&&sr.document.childNodes,br=Int8Array,gr=q,jr=yr,_r=br;var mr=function(){return"function"==typeof gr||"object"==typeof _r||"function"==typeof jr};var dr=function(){return/^\s*function\s*([^(]*)/i},Or=dr;b(Or,"REGEXP",dr());var wr=Or,Er=I;var Pr=function(r){return null!==r&&"object"==typeof r};b(Pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!Er(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Pr));var hr=Pr;var Sr=R,Ar=wr.REGEXP,Tr=function(r){return hr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Fr=function(r){var t,e,n;if(("Object"===(e=Sr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Ar.exec(n.toString()))return t[1]}return Tr(r)?"Buffer":e},Rr=Fr;var Br=Fr;var xr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?Rr(r).toLowerCase():t},Gr=function(r){return Br(r).toLowerCase()},Cr=mr()?Gr:xr;var Vr=function(r){return"function"===Cr(r)},Xr=Object.getPrototypeOf;var kr=function(r){return r.__proto__},Mr=R,Lr=kr;var Dr=function(r){var t=Lr(r);return t||null===t?t:"[object Function]"===Mr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Ur=Xr,zr=Dr,Ir=Vr(Object.getPrototypeOf)?Ur:zr;var Nr=$,$r=Vr,qr=function(r){return null==r?null:(r=Object(r),Ir(r))},Hr=E,Jr=R,Kr=Object.prototype;var Qr=function(r){var t;return!!Nr(r)&&(!(t=qr(r))||!Hr(r,"constructor")&&Hr(t,"constructor")&&$r(t.constructor)&&"[object Function]"===Jr(t.constructor)&&Hr(t,"isPrototypeOf")&&$r(t.isPrototypeOf)&&(t===Kr||function(r){var t;for(t in r)if(!Hr(r,t))return!1;return!0}(r)))},Wr=Qr,Yr=E,Zr=or.isPrimitive,rt=U.isPrimitive;var tt=function(r,t){return Wr(t)?Yr(t,"flags")&&(r.flags=t.flags,!rt(r.flags))?new TypeError("invalid option. `flags` option must be a string primitive. Option: `"+r.flags+"`."):Yr(t,"capture")&&(r.capture=t.capture,!Zr(r.capture))?new TypeError("invalid option. `capture` option must be a boolean primitive. Option: `"+r.capture+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+t+"`.")},et="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";var nt=function(r){var t,e;if(arguments.length>0){if(e=tt(t={},r))throw e;return t.capture?new RegExp("("+et+")",t.flags):new RegExp(et,t.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/},ot=b,ut=nt,it=nt({capture:!0});ot(ut,"REGEXP",nt()),ot(ut,"REGEXP_CAPTURE",it);var ct=U.isPrimitive,at=new RegExp("^"+ut.REGEXP.source+"+$");var ft=function(r){return!!ct(r)&&at.test(r)};export{ft as default};
//# sourceMappingURL=mod.js.map
