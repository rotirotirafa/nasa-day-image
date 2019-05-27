const gulp = require('gulp')
const concat = require('gulp-concat')

gulp.task('js', function(){
    return gulp.src('src/app.js')
        .pipe(gulp.dest('dist/'))
})

gulp.task('angular', function(){
    return gulp.src('node_modules/angular/angular.min.js')
        .pipe(gulp.dest('dist/angular'))
})

gulp.task('angular-resource', function(){
    return gulp.src('node_modules/angular-resource/angular-resource.min.js')
        .pipe(gulp.dest('dist/angular'))     
})

gulp.task('css', function(){
    return gulp.src('main.css')
        .pipe(gulp.dest('dist/css'))
})

gulp.task('bulma', function(){
    return gulp.src('node_modules/bulma/css/bulma.min.css')
        .pipe(gulp.dest('dist/css/bulma'))
})