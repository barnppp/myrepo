const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',

    plugins: [
        new CssMinimizerPlugin(),
    ],

    optimization: {
        minimizer: [
            new CssMinimizerPlugin()
        ],

        minimize: true,
    },
})