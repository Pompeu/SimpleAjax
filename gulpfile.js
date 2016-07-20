'use strict';

const gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'); 

gulp.task('js-prod', () => {
  return  gulp.src('src/js/lib/*.js')
    .pipe(concat('simpleajax.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));     
});

gulp.task('js-cp', () => {
  return  gulp.src('src/js/lib/*.js')
    .pipe(concat('simpleajax.js'))
    .pipe(gulp.dest('dist/js/')); 
});

gulp.task('default',['js-cp', 'js-prod']);
