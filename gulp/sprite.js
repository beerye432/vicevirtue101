var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');


/* Create a sprite sheet and CSS of target images.
 * The sprite sheet is placed in './public/img/'
 * The CSS is placed in './public/css/'.
 */
gulp.task('sprite', function() {
  var spriteData = gulp.src(['./public/img/*.jpg',
       './public/img/*.jpeg',
       './public/img/*.png']).
    pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css'
    }));

  spriteData.img.pipe(gulp.dest('./bundle/images/')); // output path for the sprite
  spriteData.css.pipe(gulp.dest('./public/css/')); // output path for the CSS
});
