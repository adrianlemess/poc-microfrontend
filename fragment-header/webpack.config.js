const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    mode: 'production',
    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        'prop-types': 'prop-types',
        'classnames': 'classnames',
        'proppy': 'proppy',
        'proppy-react': 'proppy-react'
    },
    output: {
        path: __dirname + '/public',
        publicPath: 'http://localhost:8089/public/',
        filename: 'bundleReact.js',
        libraryTarget: 'amd'
    },
    plugins:[
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
}