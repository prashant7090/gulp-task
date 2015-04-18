var gulp = require('gulp');
var jade = require('gulp-jade');
var less = require('gulp-less');
var coffee = require('gulp-coffee');
var concat = require ('gulp-concat');
var uglify = require('gulp-uglify');

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
	return gulp.src('Source/*.jade') // put your source file/directory path here 
		.pipe(jade({ pretty: true })) 
		.pipe(gulp.dest('Target/')) // Put your destination directory here 
});

gulp.task('lessToCss', function() {
	return gulp.src('Source/*.less')
		.pipe(less())
		.pipe(gulp.dest('Target/'))
});

gulp.task('coffeeToJs', function() {
	return gulp.src('Source/*.coffee')
		.pipe(coffee())
		.pipe(gulp.dest('Target/'))
});

//Concat Js files into all.js.
gulp.task('concat',function(){
	return gulp.src('Source/*.js')
		.pipe(concat('all.js'))	
		.pipe(uglify())
        .pipe(gulp.dest('Target/'));
});




