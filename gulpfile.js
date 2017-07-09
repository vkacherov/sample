var gulp = require('gulp');
var replace = require('gulp-replace');
var htmlmin = require('gulp-htmlmin');
var clean = require('gulp-clean');

gulp.task('clean', function() {
    return gulp.src('build/', { read: false })
        .pipe(clean());
});

gulp.task('templates', function() {
    gulp.src(['src/index.html'])
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build/'));
});

gulp.task('js', function() {
    return gulp.src('src/js/**')
        .pipe(gulp.dest('build/js'))
});
gulp.task('css', function() {
    return gulp.src('src/css/**')
        .pipe(gulp.dest('build/css'))
});
gulp.task('fonts', function() {
    return gulp.src('src/fonts/**')
        .pipe(gulp.dest('build/fonts'))
});
gulp.task('images', function() {
    return gulp.src('src/images/**')
        .pipe(gulp.dest('build/images'))
});

gulp.task('default', ['templates', 'js', 'css', 'fonts', 'images']);