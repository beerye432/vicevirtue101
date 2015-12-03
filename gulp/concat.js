var gulp = require('gulp');
var concat = require('gulp-concat');


/* Concatenate js files into a file 'bundle.js',
 * which is placed in './bundle/'.
 */ 
gulp.task('concat:js', function() {
  return gulp.src(['./public/js/**/*.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./bundle/'));
});


/* Concatenate css files into a file 'bundle.css',
 * which is placed in 'bundle'.
 * If a sprite sheet has not been created,
 * create it to generate the css so it can be concatenated.
 */ 
gulp.task('concat:css', ['sprite'], function() {
  return gulp.src(['./public/css/**/*.css'])
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./bundle/'));
});
