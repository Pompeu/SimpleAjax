'use strict';

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat'); 
const babel = require('gulp-babel');

gulp.task('js-prod', () => {
  return  gulp.src('src/js/lib/*.js')
    .pipe(babel())
    .pipe(concat('simpleajax.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('js-cp', () => {
  return  gulp.src('src/js/lib/*.js')
    .pipe(babel())
    .pipe(concat('simpleajax.js'))
    .pipe(gulp.dest('dist/js/')); 
});

gulp.task('default',['js-cp', 'js-prod']);
