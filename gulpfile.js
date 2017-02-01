var gulp = require('gulp');
var jade = require('gulp-jade');
var less = require('gulp-less');
var scss = require('gulp-sass');
var coffee = require('gulp-coffee');
var concat = require ('gulp-concat');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload'); // automatically reload the browser. need LiveReload extension for goole chrome

gulp.task('default', ['watch']);


// Task to copy all files from Source folder to Target folder
gulp.task('copy-file',function(){
	return gulp.src('Source/*.*')
        .pipe(gulp.dest('Target/'));
});

//Task to convert jade file to html file.
gulp.task('jadeToHtml', function() {
	return gulp.src('Source/*.jade') // put your source file/directory path here 
		.pipe(jade())
		.pipe(gulp.dest('Target/')) // Put your destination directory here 
		.pipe(livereload())
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
		.pipe(uglify())          // to minify the file
        .pipe(gulp.dest('Target/'));
});

// this task checks any changes in jade files and runs "jadeToHtml" task
gulp.task('watch',function(){
	gulp.watch('Source/*.jade', ['jadeToHtml']);
});


gulp.task('scssToCss', function() {
	return gulp.src('Source/*.scss')
		.pipe(scss())
		.pipe(gulp.dest('Target/'))
});