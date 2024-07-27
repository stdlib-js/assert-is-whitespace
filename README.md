<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isWhitespace

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test whether a string contains only [white space][whitespace] characters.



<section class="usage">

## Usage

```javascript
import isWhitespace from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-whitespace@deno/mod.js';
```

#### isWhitespace( value )

Tests whether a string contains only [white space][whitespace] characters.

```javascript
var bool = isWhitespace( '             ' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A [white space][whitespace] character is defined as one of the 25 characters defined as a [white space][whitespace] ("WSpace=Y","WS") character in the Unicode 9.0 character database, as well as one related [white space][whitespace] character without the Unicode character property "WSpace=Y" (zero width non-breaking space which was deprecated as of Unicode 3.2).
-   For non-string values, the function returns `false`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import isWhitespace from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-whitespace@deno/mod.js';

var out = isWhitespace( '              ' );
// returns true

out = isWhitespace( '' );
// returns false

out = isWhitespace( '\\r\\n' );
// returns false

out = isWhitespace( 123 );
// returns false
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/regexp-whitespace`][@stdlib/regexp/whitespace]</span><span class="delimiter">: </span><span class="description">return a regular expression to match a white space character.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-whitespace.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-whitespace

[test-image]: https://github.com/stdlib-js/assert-is-whitespace/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/assert-is-whitespace/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-whitespace/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-whitespace?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-whitespace.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-whitespace/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/assert-is-whitespace#cli
[cli-url]: https://github.com/stdlib-js/assert-is-whitespace/tree/cli
[@stdlib/assert-is-whitespace]: https://github.com/stdlib-js/assert-is-whitespace/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-whitespace/tree/deno
[deno-readme]: https://github.com/stdlib-js/assert-is-whitespace/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/assert-is-whitespace/tree/umd
[umd-readme]: https://github.com/stdlib-js/assert-is-whitespace/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/assert-is-whitespace/tree/esm
[esm-readme]: https://github.com/stdlib-js/assert-is-whitespace/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/assert-is-whitespace/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-whitespace/main/LICENSE

[whitespace]: https://en.wikipedia.org/wiki/Whitespace_character

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/regexp/whitespace]: https://github.com/stdlib-js/regexp-whitespace/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
