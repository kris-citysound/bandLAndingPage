var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var nested = require('postcss-nested');
var cssvars = require('postcss-simple-vars');

gulp.task('default', function() {
  console.log('default task');
});

gulp.task('html', function() {
  console.log('html running');
});

gulp.task('styles', function() {
return gulp.src('./app/assets/styles/styles.css')
.pipe(postcss([cssvars,nested,autoprefixer]))
.pipe(gulp.dest('./app/temp/styles'));
});



 gulp.task('watch', function(){
   watch('./app/index.html', function() {
     gulp.start('html');
   });
   watch('./app/assets/styles/**/*.css', function() {
     gulp.start('styles');
   });
 });
