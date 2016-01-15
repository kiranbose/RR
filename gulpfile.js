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
    del = require('del');

// ///////////////////////////////////////////////////////////////////
//  Scripts Task
// ///////////////////////////////////////////////////////////////////

gulp.task('scripts',function(){
    console.log('scipts gulp task running');
    gulp.src(['app/js/**/*.js','!app/js/**/*.min.js'])
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
            gulpPaths.bc + 'bootstrap/dist/js/bootstrap.min.js',
            gulpPaths.bc + 'angularjs-toaster/toaster.js',
            gulpPaths.bc + 'angular-bootstrap/ui-bootstrap-tpls.min.js',
            gulpPaths.bc + 'angular-aria/angular-aria.js',
            gulpPaths.bc + 'angular-material-icons/angular-material-icons.js',
            gulpPaths.bc + 'angular-ui-router/release/angular-ui-router.js'
        ])
        .pipe(plumber())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(gulpPaths.app + '/js'))
        .pipe(rename('vendor.min.js'))
        .pipe(uglify({ output: { ascii_only: true } }))
        .pipe(gulp.dest(gulpPaths.app + '/js'));
});

// ///////////////////////////////////////////////////////////////////
//  Compass/Sass Task
// ///////////////////////////////////////////////////////////////////
gulp.task('compass',function(){
    gulp.src(['app/scss/**/*.scss,app/scss/*.scss'])
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


// ///////////////////////////////////////////////////////////////////
//  HTML Task
// ///////////////////////////////////////////////////////////////////

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

gulp.task('build:remove',['build:copy'],function(cb){
    del([
        'build/scss/',
        'build/js/**/!(*.min.js)',
        'build/src/'
    ],cb);
});

// Run the build task to create production build
gulp.task('build',['build:copy','build:remove']);


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



// ///////////////////////////////////////////////////////////////////
//  Watch Task
// ///////////////////////////////////////////////////////////////////

gulp.task('watch',function(){
    gulp.watch(['app/js/**/*.js',
        'app/scss/**/*.scss',
        'app/css/**/*.css',
        'app/**/*.html'],['scripts','compass','html']);
});


// ///////////////////////////////////////////////////////////////////
//  Default Task
// ///////////////////////////////////////////////////////////////////

gulp.task('default',['scripts','compass','html','browser-sync','watch']);