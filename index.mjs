// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-whitespace@esm/index.mjs";var t=new RegExp("^"+s.REGEXP.source+"+$");function r(s){return!!e(s)&&t.test(s)}export{r as default};
//# sourceMappingURL=index.mjs.map
