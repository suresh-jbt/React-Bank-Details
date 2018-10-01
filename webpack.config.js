var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var config = {
    entry: ["./src/main.js"],

    output: {
        path: path.join(__dirname, '/', 'build'),
        filename: 'index.js',
    },
    devServer: {
        inline: true,
        publicPath: '/',
        historyApiFallback: true,
        port: process.env.PORT
    },
    resolve: {
        alias: {
            // Src: path.resolve(__dirname, 'src'),
            moment: 'moment/moment.js',
        } ,
        extensions: ['.js', '.jsx', '.css','.scss']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            { test: /\.(eot|woff)$/, loader: "file-loader" },
            {
                test: /\.css$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg$/,
                loaders: [
                  'babel-loader',
                  {
                    loader: 'react-svg-loader',
                    query: {
                      jsx: true
                    }
                  },
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            // {output}/to/file.txt
            { from: path.join(__dirname,'/index.html'), to: path.join(__dirname, '', 'build'), },

            // Copy directory contents to {output}/to/directory/
            { from: path.join(__dirname,'/src/assets'), to: path.join(__dirname, '', 'build/src/assets') },

        ]),
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'/index.html')
        })
    ]
}

module.exports = config;
