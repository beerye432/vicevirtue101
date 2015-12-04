var gulp = require('gulp');
var del = require('del');

/* Removes the generated './public/bundle' folder.
 * Note: The generated sprite sheet
 * and related CSS file are not removed.
 */
gulp.task('clean', function(cb) {
  del(['./public/bundle/'], cb);
});
