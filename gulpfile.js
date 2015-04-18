var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('default', function() {
  // place code for your default task here
});


// Task to copy all files from Source folder to Target folder
gulp.task('copy-file',function(){
	return gulp.src('Source/*.*')
        .pipe(gulp.dest('Target/'));
});

//Task to convert jade file to html file.
gulp.task('jadeToHtml', function() {
	return gulp.src('Source/*.jade')
		.pipe(jade({ pretty: true }))
		.pipe(gulp.dest('Target/'))
});




