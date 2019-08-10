const path = require("path");
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: {
        main: ["./src/http.js", "./src/index.js"]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            }

        }]
    }
};