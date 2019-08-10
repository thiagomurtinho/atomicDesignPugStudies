const { src } = require('gulp');
const gulp = require('gulp')
const pug = require('gulp-pug')

gulp.task('pug', () => {
    return src('*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('.'))
})

gulp.task('default', (done) => {
    console.log('Hello Gulp')
    done()
})

gulp.task('watch', () => {
    gulp.watch('*.pug', gulp.series('pug'))
})