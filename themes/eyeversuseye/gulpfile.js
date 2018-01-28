var gulp   = require('gulp');
var sass   = require('gulp-sass');
var csso   = require('gulp-csso');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

const PATH = {
  CSS : {
    src : 'static/scss/**/*.scss',
    dest: 'static/css'
  }
};

gulp.task('css', function() {
  return gulp.src(PATH.CSS.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix('last 4 version'))
    .pipe(gulp.dest(PATH.CSS.dest));
});

gulp.task('min', function() {
  return gulp.src(PATH.CSS.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix('last 4 version'))
    .pipe(gulp.dest(PATH.CSS.dest))
    .pipe(csso())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(PATH.CSS.dest));
});

gulp.task( 'default', [ 'css' ], function () {
  gulp.watch( "static/scss/**/*.scss", [ 'css' ] );
});