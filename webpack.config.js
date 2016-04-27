var path = require('path')
var webpack = require('webpack')

console.log(path.join(__dirname, 'dist'))
module.exports = {
    entry: [
        //'webpack-hot-middleware/client',
        './src/client/index.js'
    ],
    output: {
        //path: path.join(__dirname, 'dist'),
        path: 'public/javascripts/',
        filename: 'bundle.js',
        //publicPath: 'http://localhost:8080/public/javascripts/'

    },
    //plugins: [
    //    new webpack.optimize.OccurenceOrderPlugin(),
    //    new webpack.HotModuleReplacementPlugin()
    //],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: __dirname,
                query: {
                    presets: [ 'react-hmre' ]
                }
            }
        ]
    }
}
