var gulpPaths = {
    "bc": "./bower_components/",
    "src": "./src/",
    "dist": "./dist/",
    "css": "./css/",
    "app": "./app/"
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
    concat = require('gulp-concat'),
    concatCSS = require('gulp-concat-css'),
    minifyCSS = require('gulp-minify-css'),
    del = require('del');

// ///////////////////////////////////////////////////////////////////
//  Scripts Task
// ///////////////////////////////////////////////////////////////////

gulp.task('scripts',function(){
    console.log('scipts gulp task running');
    gulp.src(['app/js/Controllers/*.js','app/js/Directives/*.js','app/src/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest(gulpPaths.app + 'js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest(gulpPaths.app + '/js'))
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
            gulpPaths.bc + 'bootstrap/dist/js/bootstrap.js',
            gulpPaths.bc + 'angularjs-toaster/toaster.js',
            //gulpPaths.bc + 'angular-bootstrap/ui-bootstrap-tpls.min.js',
            gulpPaths.bc + 'angular-aria/angular-aria.js',
            gulpPaths.bc + 'angular-material-icons/angular-material-icons.js',
            gulpPaths.bc + 'angular-ui-router/release/angular-ui-router.js',
            gulpPaths.bc + 'angular-loading-bar/build/loading-bar.js',
            gulpPaths.bc + 'angular-animate/angular-animate.js',
            gulpPaths.bc + 'imageviewer/dist/viewer.js',
            gulpPaths.bc + 'wow/dist/wow.js'
        ])
        .pipe(plumber())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(gulpPaths.app + '/js'))
        .pipe(rename('vendor.min.js'))
        .pipe(uglify({ output: { ascii_only: true } }))
        .pipe(gulp.dest(gulpPaths.app + '/js'));

    // Vendor CSS files concatenation
    gulp.src([
            gulpPaths.bc + 'angular-loading-bar/build/loading-bar.css',
            gulpPaths.bc + 'font-awesome/css/font-awesome.min.css',
            gulpPaths.bc + 'bootstrap/dist/css/bootstrap.css',
            gulpPaths.bc + 'imageviewer/dist/viewer.css',
            gulpPaths.bc + 'wow/css/libs/animate.css'
        ])
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest(gulpPaths.app + '/css'))
        .pipe(rename('vendor.min.css'))
        .pipe(minifyCSS({processImport: false}))
        .pipe(gulp.dest(gulpPaths.app + '/css'));
});

// ///////////////////////////////////////////////////////////////////
//  Compass/Sass Task
// ///////////////////////////////////////////////////////////////////
gulp.task('compass',function(){
    gulp.src(['app/scss/**/*.scss,app/scss/*.scss,app/src/**/*.scss'])
        .pipe(plumber())
        .pipe(compass({
            config_file: './config.rb',
            css: 'app/css',
            sass: 'app/scss',
            require: ['susy']
        }))
        .pipe(gulp.dest(gulpPaths.app + '/css'))
        .pipe(reload({stream:true}));
});



///////////////////////////////////////////////////////////////////
// HTML Task
///////////////////////////////////////////////////////////////////

gulp.task('html',function(){
    gulp.src('app/**/*.html')
        .pipe(reload({stream:true}));
});

// ///////////////////////////////////////////////////////////////////
//  Build Task
// ///////////////////////////////////////////////////////////////////

gulp.task('build:cleanfolder',function(cb){
    return del([
        'build/**'
    ],cb);
});


gulp.task('build:copy',['build:cleanfolder'],function(){
    return gulp.src('app/**/*')
        .pipe(gulp.dest('build/'));
});

//before building check index.html for reference to app.js
gulp.task('build:remove',['build:copy'],function(cb){
    del([
        'build/scss/',
        'build/js/**/!(*.min.js)',
        'build/src/**/*.js'
    ],cb);
});



// Run the build task to create production build
gulp.task('build',['build:cleanfolder','build:copy','build:remove']);


// ///////////////////////////////////////////////////////////////////
//  Browser Sync Task
// ///////////////////////////////////////////////////////////////////

gulp.task('browser-sync',function(){
    browserSync({
        server:{
            baseDir: "./app/"
        }
    })
});

gulp.task('build:server',function(){
    browserSync({
        server:{
            baseDir: "./build/"
        }
    })
});

gulp.task('bs-reload', function() {
    browserSync.reload();
});

// ///////////////////////////////////////////////////////////////////
//  Watch Task
// ///////////////////////////////////////////////////////////////////

gulp.task('watch',function(){
    gulp.watch(['app/js/Controllers/*.js',
        'app/js/Directives/*.js',
        'app/src/**/*.js',
        'app/scss/**/*.scss',
        'app/src/**/*.scss',
        //'app/css/**/*.css',
    ],['compass','scripts','html','bs-reload']);
});


// ///////////////////////////////////////////////////////////////////
//  Default Task
// ///////////////////////////////////////////////////////////////////

gulp.task('default',['compass','scripts','browser-sync','watch','html'],function(){
    gulp.watch('app/src/**/*.scss', function(file) {
        if (file.type === "changed") {
            reload(file.path);
        }
    });
    gulp.watch(['app/src/**/*.html'], ['bs-reload']);

});