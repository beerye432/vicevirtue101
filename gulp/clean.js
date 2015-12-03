var gulp = require('gulp');
var del = require('del');

/* Removes the generated './public/bundle' folder.
 * Also removes the generated sprite sheet
 * and related CSS file.
 */
gulp.task('clean', function(cb) {
  del(['./public/bundle/',
      './public/css/sprite.css',
      './public/img/sprite.png'], cb);
});
