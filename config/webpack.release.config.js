const Clean = require('clean-webpack-plugin')
    , path = require('path')
    , ExtractTextPlugin = require("extract-text-webpack-plugin")
    , HtmlWebpackPlugin = require('html-webpack-plugin')
    , webpack = require('webpack')
    , ProgressBarPlugin = require('progress-bar-webpack-plugin');

    module.exports = {
        entry: {
            main: path.resolve(__dirname, 'main.js'),
            vendor: ['react', 'react-dom', 'moment','antd','react-router'],
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[chunkHash:8].js',
        },
        module: {
            loaders: [
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015','react']
                    }
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
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: "css-loader!sass-loader"
                    })
                },
                {
                    test: /\.(ttf|eot|svg|woff|woff2)$/,
                    loader: "file-loader"
                }
            ]
        },
        plugins: [
            new Clean(['build']),
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







