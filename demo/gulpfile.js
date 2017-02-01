
const
    gulp        = require('gulp'),
    gutil       = require('gutil'),
    path        = require('path'),
    webpack     = require('webpack'),
    exec        = require('child_process').exec,
    eslint      = require('gulp-eslint');

const webpackConfig = {
    debug:   true,
    devtool: 'source-map',
    entry:   ['babel-polyfill', './js/index.jsx'],
    module:  {
        loaders: [{
            test:    /\.jsx?$/,
            exclude: /node_modules/,
            loader:  'babel',
        }, {
            test:   /\.json$/,
            loader: 'json',
        }],
    },
    output: {
        path:     path.join(__dirname, 'build'),
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.DefinePlugin({
            SERVER_ROOT: process.env.SERVER_ROOT,
        }),
    ],
};

const inputPaths = {
    javascript: [
        '.eslintrc.json',
        'gulpfile.js',
        'server.js',
        'js/**/*.js',
        'js/**/*.jsx',
        'test/**/*.js',
        'test/**/*.jsx',
    ],
};

/**
 * JS
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
        'js:test',
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

gulp.task('js:test', (done) => {
    const cmd = [
        'mocha',
        '--colors',
        '--reporter list',
        '--compilers js:babel-core/register',
        '--require ./test/_setup.js',
        '\'test/**/*.@(js|jsx)\'',
    ];
    exec(cmd.join(' '), (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
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

