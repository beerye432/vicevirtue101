var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function() {
  var spriteData = gulp.src(['./public/img/*.jpg',
       './public/img/*.jpeg',
       './public/img/*.png']).
    pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css'
    }));
  return spriteData.pipe(gulp.dest('./bundle/'));
});
