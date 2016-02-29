// Gulpfile.js
var gulp = require('gulp'),
 nodemon = require('gulp-nodemon'),
  jshint = require('gulp-jshint');

gulp.task('lint', function() {
  return gulp.src(['oauth2.js', 'server.js', 'gulpfile.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('develop', function () {
  nodemon({ script: 'server.js',
            ext: 'html js',
            ignore: ['ignored.js'],
            tasks: ['lint'] })
    .on('restart', function () {
      console.log('restarted!');
    });
});

gulp.task('default', ['develop', 'lint']);
