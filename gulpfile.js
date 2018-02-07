var gulp = require('gulp'),
	less = require('gulp-less'),
	browserSync = require('browser-sync');

gulp.task('mytask', function () {
	console.log('Привет, я таск!');
})

gulp.task('less', function () {
  return gulp.src('app/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
	})
});

gulp.task('watch', ['browser-sync', 'less'], function() {
    gulp.watch('app/less/**/*.less', ['less']);
    gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('default', ['watch']);