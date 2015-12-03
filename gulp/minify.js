var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var minifyInline = require('gulp-minify-inline');


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


/* Minify html files and place in './public/bundle/'.
 */
gulp.task('minify:html', function() {
  var opts = {
    conditionals: true,
    empty: true
  };

  return gulp.src('./views/*.html')
    .pipe(minifyInline())
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./public/bundle/'));
});


/* Minify all js, css, html files in one step. */
gulp.task('minify:all', ['minify:js', 'minify:css', 'minify:html']);
