const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = [
    new HtmlwebpackPlugin({
        template: 'public/index.html'
    })
]