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
    rename = require('gulp-rename');

// ///////////////////////////////////////////////////////////////////
//  Scripts Task
// ///////////////////////////////////////////////////////////////////

gulp.task('scripts',function(){
    console.log('scipts gulp task running');
    gulp.src(['app/js/**/*.js','!app/js/**/*.min.js'])
        .pipe(concat('app.js'))
        .pipe(gulpPaths.dist + '/js')
        .pipe(rename({suffix: '.min'}))
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulpPaths.dist + '/js');
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
            gulpPaths.bc + 'angular-ui-router-anim-in-out/anim-in-out.js',
            gulpPaths.bc + 'angularjs-toaster/toaster.js',
            gulpPaths.bc + 'angular-bootstrap/ui-bootstrap-tpls.min.js',
            gulpPaths.bc + 'angular-aria/angular-aria.js',
            gulpPaths.bc + 'angular-animate/angular-animate.js',
            gulpPaths.bc + 'angular-material-icons/angular-material-icons.js',
            gulpPaths.bc + 'angular-ui-router/release/angular-ui-router.js',
            gulpPaths.bc + 'angular-smart-table/dist/smart-table.min.js',
            gulpPaths.bc + 'angular-ui-select/dist/select.min.js',

        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(gulpPaths.dist + '/js'))
        .pipe(rename('vendor.min.js'))
        .pipe(debug())
        .pipe(uglify({ output: { ascii_only: true } }))
        .pipe(gulp.dest(gulpPaths.dist + '/js'));
});



// ///////////////////////////////////////////////////////////////////
//  Watch Task
// ///////////////////////////////////////////////////////////////////

gulp.task('watch',function(){
    gulp.watch('app/js/**/*.js',['scripts']);
});


// ///////////////////////////////////////////////////////////////////
//  Default Task
// ///////////////////////////////////////////////////////////////////

gulp.task('default',['vendor','scripts']);