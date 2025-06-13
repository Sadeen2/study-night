import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('parcel', shell.task(['parcel index.html']));

gulp.task('test', shell.task(['mocha']));

gulp.task('cypress', shell.task(['npx cypress run']));

gulp.task('build', gulp.series('parcel', 'test', 'cypress'));

gulp.task('default', gulp.series('parcel'));

