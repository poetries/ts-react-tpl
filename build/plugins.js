const HtmlwebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {assetsPath} = require('./utils')

module.exports = [
    new HtmlwebpackPlugin({
        template: 'public/index.html',
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
        }
    }),
    new MiniCssExtractPlugin({
        filename: assetsPath('css/[name].css')
    })
]