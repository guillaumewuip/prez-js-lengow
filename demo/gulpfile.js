
const
    gulp    = require('gulp'),
    gutil   = require('gutil'),
    path    = require('path'),
    webpack = require('webpack'),
    eslint  = require('gulp-eslint');

const webpackConfig = {
    debug: true,
    devtool: 'source-map',
    entry: './js/index.jsx',
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
        }],
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
    },
};

const inputPaths = {
    javascript: [
        '.eslintrc.json',
        'gulpfile.js',
        'index.js',
        'js/**/*.js',
        'js/**/*.jsx',
        'test/**/*.js',
        'test/**/*.jsx',
    ],
};

/**
 * JS ES6
 */

gulp.task('js:lint', () => {
    // http://eslint.org/docs/rules
    let task = gulp
        .src(inputPaths.javascript)
        .pipe(eslint())
        .pipe(eslint.format());

    if (process.env.CI) {
        task = task.pipe(eslint.failAfterError());
    }

    return task;
});

gulp.task('js:watch', () => {
    gulp.watch(inputPaths.javascript, [
        'js:lint',
        'js:build',
    ]);
});

gulp.task('js:build', (done) => {
    webpack(webpackConfig)
        .run((err, stats) => {
            if (err) {
                throw new gutil.PluginError('webpack', err);
            }

            gutil.log('[webpack]', stats.toString({
                chunks: false,
                colors: true,
            }));
            done();
        });
});

/**
 * Main tasks
 */

gulp.task('watch', ['js:watch']);
gulp.task('lint', ['js:lint']);
gulp.task('build', ['lint', 'js:build']);
gulp.task('default', ['build', 'watch']);

