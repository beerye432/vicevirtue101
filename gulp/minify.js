var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var minifyInline = require('gulp-minify-inline');
var replace = require('gulp-replace');


/* Minify 'bundle.js'. If it doesn't exist, create
 * it first using concat:js.
 */
gulp.task('minify:js', ['concat:js'], function() {
  return gulp.src('./public/bundle/bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/bundle/'))
});


/* Minify 'bundle.css'. If it doesn't exist, create
 * it first using concat:css.
 */
gulp.task('minify:css', ['concat:css'], function() {
  return gulp.src('./public/bundle/bundle.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/bundle/'))
});


/* Minify html files and place in './views/'.
 */
gulp.task('minify:html', function() {
  var opts = {
    comments: true,
    conditionals: true,
    empty: true
  };

  return gulp.src('./views/dev/*.html')
    .pipe(minifyInline())
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./views/'));
});


/* Change file references of the minified html files.
 * Comments out the references to unbundled css/js
 * and adds references to bundled css/js
 */
gulp.task('htmlref', ['minify:js', 'minify:css', 'minify:html'], function() {
  return gulp.src('./views/*.html')
    .pipe(replace(/<!----- development ----->.*<!----- end development ----->/g,
      '<link rel="stylesheet" href="/bundle/bundle.css"><script src="/bundle/bundle.js"></script>'))
    .pipe(gulp.dest('./views/'));
});


/* Minify all js, css, html files in one step.
 * Also change relevant file references in
 * the minified html
 */
gulp.task('build', ['htmlref']);

