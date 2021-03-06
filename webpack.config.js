const path  = require('path');

module.exports = {
    entry: './src/app.js',

    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=stage-2&presets[]=react'
            },
            {
                test: /\.scss$/,
                loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]',
                }
            },
        ]
    }
}
