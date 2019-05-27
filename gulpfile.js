var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Tasks
gulp.task('compiled', function() {
  gulp.src('sass/**/**/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))
    .pipe(gulp.dest('./css'))
});

// Watch
gulp.task('default', function() {
  gulp.watch('sass/**/**/**/*.scss', ['compiled']);
});