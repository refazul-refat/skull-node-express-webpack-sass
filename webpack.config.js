const path = require('path');

// __app_build_js
module.exports = {
    entry: {
        'js/bundle': './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/', // very important!
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }
        ]
    },
    resolve: {
        alias: {}
    }
};
