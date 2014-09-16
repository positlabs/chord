Chord
=====

Chord is an [ES6] framework that uses [Traceur] to compile to ES5.


Getting Started
=====

`npm install`

`bower install`


Grunt Tasks
=====

`grunt server` starts a dev server at http://localhost:8888

`grunt watch` watches js / less files and compiles on the fly.

`grunt`, `grunt build` builds the whole project into `dist/`


ES6 compatibility
=====

Not all ES6 features have been implemented by Traceur!! See the [Traceur/ES6 compatibility table].


HTML Templating
=====

ES6 supports template strings. We can add alternative templating engines on a per-project basis.


Development roadmap
=====

- source maps! 
- backbone integration







[ES6]:http://tc39wiki.calculist.org/es6/
[Traceur]:https://github.com/google/traceur-compiler
[Traceur/ES6 compatibility table]:http://kangax.github.io/compat-table/es6/#tr
[Jade]:http://jade-lang.com/reference/
