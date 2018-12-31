const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('./utils')
const constants = require('./constants')
const { cacheLoader } = require('./rules/loaders')

module.exports = {
    entry: {
        app: path.join(__dirname, '../', 'src/index.tsx')
    },
    output: {
        path: path.join(__dirname, '../', 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                include: [resolve('src')],
                use: [
                    cacheLoader,
                    {
                        loader: 'thread-loader',
                        options: constants.APP_ENV === 'dev' ? { poolTimeout: Infinity } : {}
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            presets: [['@babel/preset-env'], '@babel/preset-typescript', '@babel/preset-react'],
                            plugins: [
                                ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }],
                                ['@babel/plugin-proposal-decorators', { legacy: true }],
                                ['@babel/plugin-proposal-class-properties', { loose: true }],
                                '@babel/plugin-syntax-dynamic-import',
                                'react-hot-loader/babel'
                            ]
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                // 只针对src下的.scss文件进行编译
                // include: [path.join(__dirname, '../', 'src')],
                use: [
                    'style-loader',
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
                           
                        }
                   }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: 'public/index.html'
        })
    ]
}