var gulp = require('gulp');
//var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task('default', function () {

    gulp.src('./ng-storage.js')
        .pipe(rename('ng-storage.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./'));

});
