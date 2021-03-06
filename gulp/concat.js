var gulp = require('gulp');
var concat = require('gulp-concat');


/* Concatenate js files into a file 'bundle.js',
 * which is placed in './public/bundle/'.
 */ 
gulp.task('concat:js', function() {
  return gulp.src(['./public/js/**/*.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./public/bundle/'));
});


/* Concatenate css files into a file 'bundle.css',
 * which is placed in './public/bundle/'.
 * If a sprite sheet has not been created,
 * create it first to generate the css so
 * it can be concatenated.
 */ 
gulp.task('concat:css', ['sprite'], function() {
  return gulp.src(['./public/css/**/*.css'])
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./public/bundle/'));
});
