var gulp = require('gulp'),
    babel = require('gulp-babel'),
    eslint = require('gulp-eslint');


gulp.task('eslint', function () {
  return gulp.src(['src/**/*.js'])
    .pipe(eslint({
      useEslintrc: true
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('babel', function () {
  return gulp.src('./src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./lib'));
});


gulp.task('default', ['babel']);
