// Less configuration
var gulp = require('gulp');
var less = require('gulp-less');
var minifyCss = require('gulp-csso');
var rename = require('gulp-rename');
gulp.task('less', function() {
    return gulp.src('less/main.less')
        .pipe(less({strictMath: 'on'}))
        .pipe(gulp.dest('css'))
});

gulp.task('css-minify', function() {
    return gulp.src('css/main.css')
        .pipe(minifyCss())
        .pipe(rename({
            suffix: '.min'
          }))
        .pipe(gulp.dest('css/min'))
});

gulp.task('default', ['less'], function() {
    gulp.watch('less/*.less', ['less']);
})

gulp.task('minify', ['css-minify'], function() {
    gulp.watch('css/main.css', ['minify']);
})