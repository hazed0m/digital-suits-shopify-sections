const gulp = require('gulp');
const concatCss = require('gulp-concat-css');
const cssNano = require('gulp-cssnano')
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const browsersync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function sassFunc(){
    return gulp.src('./src/styles/main.scss')
        .pipe(sass())
        .pipe(concatCss('custom.css'))
        .pipe(cssNano())
        .pipe(gulp.dest('./assets'))
});
gulp.task('js', function() {
    return gulp.src(['./src/scripts/slider/*.js', './src/scripts/main.js'])
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./assets'))
});

gulp.task("server", (done) => {
    browsersync.init({
        server: {
            "baseDir": "./",
            "routes": {
                "/node_modules": "node_modules"
            }
        },
        startPath: "index.html",
        directory: true
    });
    gulp.watch('./src/styles/**/*.scss', gulp.series('sass'), browsersync.reload);
    gulp.watch('./src/scripts/**/*.js', gulp.series('js'), browsersync.reload);
});