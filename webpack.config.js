var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
    new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery'
    }),
    new ExtractTextPlugin("styles.css")
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: ['node_modules', 'app'],
        extensions: [' ', '.js', '.jsx', 'css', 'scss'],
        alias: {
            appSCSS: path.resolve(__dirname, 'app/styles/app.scss'),
            Home: path.resolve(__dirname, 'app/components/Home.jsx'),
            Layout: path.resolve(__dirname, 'app/components/Layout.jsx'),
            Nav: path.resolve(__dirname, 'app/components/Nav.jsx')
        }
    },
    module: {
        loaders: [
        {
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules | bower_components)/
        },
        // {
        //         test: /\.css$/,
        //         loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        //     },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({fallback:'style-loader', use:'css-loader'})
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
