'use-strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './src/js/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src/js')
        },
        {
            test: /\.css$/,
            loaders: ['style', 'css']
        },
        {
            test: /\.(png|jpg|gif)$/,
            loader: 'file-loader?name=img/img-[hash:6].[ext]'
        }
        ]
    }
};