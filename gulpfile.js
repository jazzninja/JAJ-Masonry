var gulp = require('gulp');

var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var cache = require('gulp-cache');
var runSequence = require('run-sequence');
var uncss = require('gulp-uncss');
var csso = require('gulp-csso');
var plumber = require('gulp-plumber');


gulp.task('sass', function(){
  return gulp.src('scss/**/*.scss')// Gets all files ending with .scss in app/scss and children dirs
  	.pipe(plumber())
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('useref', function(){
  return gulp.src('*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(plumber())
    .pipe(gulp.dest(''))
});

gulp.task('uncss', function () {
    return gulp.src('site.css')
        .pipe(uncss({
            html: ['index.html', '**/*.html']
        }))
        .pipe(plumber())
        .pipe(gulp.dest(''));
});

gulp.task('csso', function () {
    return gulp.src('css/main.css')
        .pipe(csso())
        .pipe(plumber())
        .pipe(gulp.dest('css'));
});

gulp.task('development', function () {
    return gulp.src('css/main.css')
        .pipe(csso({
            restructure: false,
            sourceMap: true,
            debug: true
        }))
        .pipe(plumber())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('scss/**/*.scss', ['sass']);

  // Other watchers
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('*.html', browserSync.reload); 
  gulp.watch('js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
});

gulp.task('build', function (callback) {
  runSequence( 
    ['sass', 'uncss', 'useref','csso', 'development'],
    callback
  )
  console.log('What’s the point of all this cleaning? Are we so vain?');
});

gulp.task('default', function (callback) {
  runSequence(
  	['sass', 'browserSync', 'watch'],
    callback
  )
  console.log('Marge, would you please tell Bart that I would just like to drink a glass of syrup like I do every morning?');
});