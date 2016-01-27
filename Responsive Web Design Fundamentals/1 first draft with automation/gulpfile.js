var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './'
        },
        injectChanges: true
    });

    gulp.watch('*.html').on('change', update);
    gulp.watch('*.css').on('change', update);
});

function update(file) {
    return gulp
        .src(file.path)
        .pipe(browserSync.stream());
}
