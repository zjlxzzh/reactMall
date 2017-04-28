const Clean = require('clean-webpack-plugin')
    , path = require('path')
    , ExtractTextPlugin = require("extract-text-webpack-plugin")
    , HtmlWebpackPlugin = require('html-webpack-plugin')
    , webpack = require('webpack')
    , ProgressBarPlugin = require('progress-bar-webpack-plugin');

    module.exports = {
        entry: {
            main:[
                "webpack-dev-server/client?http://localhost:9090",
                "webpack/hot/only-dev-server",
                path.resolve(__dirname, 'main.js')
            ],
            vendor: ['react', 'react-dom', 'moment','antd','react-router'],
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[hash:8].js',
        },
        module: {
            loaders: [
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    loaders: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015']
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    loader: 'url-loader?limit=0'
                },
                {   test: /\.css$/,
                    loader: 'style-loader!css-loader?sourceMap'
                },
                {
                    test: /\.scss$/,
                    loader: 'style-loader!css-loader!sass-loader?sourceMap'
                },
                {
                    test: /\.(ttf|eot|svg|woff|woff2)$/,
                    loader: "file-loader"
                }
            ]
        },
        devServer: {
            contentBase: '../',
            port: 9090,
            inline: true,
            historyApiFallback:true,
            hot:true
        },
        plugins: [
            new ProgressBarPlugin(),
            new ExtractTextPlugin("style.[chunkHash:8].css"),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'index-template.html'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor', 'manifest']
            })
        ]
}







