const {resolve} = require('../utils')
const theme = require('../../src/theme')
const constants = require('../constants')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = [
    {
        test: /\.less$/,
        // 只针对node_modules里面的less文件进行编译
        include: [resolve('node_modules')],
        use: [
            constants.APP_ENV == 'dev'? 'style-loader':MiniCssExtractPlugin.loader,
            'css-loader',
            {
                loader: 'less-loader',
                options: {
                    // 禁用内联js代码，这个功能用于禁用在样式里面写js代码
                    javascriptEnabled: true,
                    // 根据ant官网进行修改
                    modifyVars: theme
                }
            }
        ]
    },
    {
        test: /\.scss$/,
        // 只针对src下的.scss文件进行编译
        // include: [path.join(__dirname, '../', 'src')],
        use: [
            constants.APP_ENV == 'dev'?'style-loader': MiniCssExtractPlugin.loader,
            {
                loader: 'cache-loader',
                options: {
                    cacheDirectory: resolve('.cache-loader')
                }
            },
           {
               loader: 'typings-for-css-modules-loader',
               options: {
                modules: true,
                namedExport: true,
                camelCase: true,
                sass: true
             }
           },
           {
                loader: 'sass-loader',
                options: {
                   includePaths: [resolve('src/styles')]
                }
           }
        ]
    }
]