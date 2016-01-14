var gulpPaths = {
    "bc": "./bower_components/",
    "src": "./src/",
    "dist": "./dist/",
    "css": "./css/"
};


// ///////////////////////////////////////////////////////////////////
//  Required
// ///////////////////////////////////////////////////////////////////

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    compass = require('gulp-compass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    concat = require('gulp-concat');

// ///////////////////////////////////////////////////////////////////
//  Scripts Task
// ///////////////////////////////////////////////////////////////////

gulp.task('scripts',function(){
    console.log('scipts gulp task running');
    gulp.src(['app/js/**/*.js','!app/js/**/*.min.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest(gulpPaths.dist + 'js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest(gulpPaths.dist + '/js'))
        .pipe(reload({stream:true}));
});


// ///////////////////////////////////////////////////////////////////
//  Vendor Task
// ///////////////////////////////////////////////////////////////////

gulp.task('vendor', function () {
    console.log('vendor gulp task running');
    gulp.src([
            gulpPaths.bc + 'jquery/dist/jquery.js',
            gulpPaths.bc + 'angular/angular.js',
            gulpPaths.bc + 'bootstrap/dist/js/bootstrap.min.js',
            gulpPaths.bc + 'angularjs-toaster/toaster.js',
            gulpPaths.bc + 'angular-bootstrap/ui-bootstrap-tpls.min.js',
            gulpPaths.bc + 'angular-aria/angular-aria.js',
            gulpPaths.bc + 'angular-material-icons/angular-material-icons.js',
            gulpPaths.bc + 'angular-ui-router/release/angular-ui-router.js'
        ])
        .pipe(plumber())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(gulpPaths.dist + '/js'))
        .pipe(rename('vendor.min.js'))
        .pipe(uglify({ output: { ascii_only: true } }))
        .pipe(gulp.dest(gulpPaths.dist + '/js'));
});

// ///////////////////////////////////////////////////////////////////
//  Compass/Sass Task
// ///////////////////////////////////////////////////////////////////
gulp.task('compass',function(){
    gulp.src(['app/scss/**/*.scss,app/scss/*.scss'])
        .pipe(plumber())
        .pipe(compass({
            config_file: './config.rb',
            css: 'dist/css',
            sass: 'app/scss',
            require: ['susy']
        }))
        .pipe(gulp.dest(gulpPaths.dist + '/css'))
        .pipe(reload({stream:true}));
});


// ///////////////////////////////////////////////////////////////////
//  HTML Task
// ///////////////////////////////////////////////////////////////////

gulp.task('html',function(){
        gulp.src('dist/**/*.html')
            .pipe(reload({stream:true}));
});

// ///////////////////////////////////////////////////////////////////
//  Browser Sync Task
// ///////////////////////////////////////////////////////////////////

gulp.task('browser-sync',function(){
   browserSync({
       server:{
           baseDir: "./dist/"
       }
   })
});


// ///////////////////////////////////////////////////////////////////
//  Watch Task
// ///////////////////////////////////////////////////////////////////

gulp.task('watch',function(){
    gulp.watch(['app/js/**/*.js',
        'app/scss/**/*.scss',
        'dist/css/**/*.css',
        'dist/**/*.html'],['scripts','compass','html']);
});


// ///////////////////////////////////////////////////////////////////
//  Default Task
// ///////////////////////////////////////////////////////////////////

gulp.task('default',['scripts','compass','html','browser-sync','watch']);