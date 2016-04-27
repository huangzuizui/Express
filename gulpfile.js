const gulp = require('gulp');
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");
const WebpackDevServer = require('webpack-dev-server');
const compass = require('gulp-compass');
const connect = require('gulp-connect');
const notify = require('gulp-notify');

gulp.task("js", function() {
    console.log('webpack started!!!');
    var myConfig = Object.create(webpackConfig);
    //var compiler = webpack(myConfig);
    webpack(
        // configuration
        myConfig
        , function(err, stats) {
            // if(err) throw new gutil.PluginError("webpack", err);
            // gutil.log("[webpack]", stats.toString({
            //	 // output options
            // }));
            console.log('webpack ok!!!');

            gulp.src('').pipe(connect.reload())
        });

    //new WebpackDevServer(compiler, {
    //    //stats: { colors: true },
    //     //hot: true,
    //    //historyApiFallback: false,
    //    //contentBase: './src/',
    //    publicPath: '/public/javascripts/',
    //    // quiet: false,
    //    // noInfo: false,
    //    //inline: true,
    //    //lazy: false,
    //    //proxy: {
    //    //    '*': 'http://localhost:3000'
    //    //},
    //}).listen(3040, 'localhost', function(err) {
    //
    //});
});

gulp.task('compass', function() {
    console.log('compass task is running!!');
    gulp.src('./src/sass/**/*.scss')
        .pipe(compass({
            config_file: './compass_config_dev.rb',
            css: 'public/stylesheets',
            sass: 'src/sass'
        }))
        .pipe(connect.reload())
});

gulp.task('connect', function () {
    connect.server({
        root: './',
        livereload: true
    });
});

gulp.task('default', function () {
    gulp.run('js', 'compass', 'connect');
    gulp.watch('src/sass/**/*.scss', ['compass']);
    gulp.watch('src/**/*.js', ['js']);
})