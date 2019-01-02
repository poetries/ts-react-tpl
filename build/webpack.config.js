const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const { resolve } = require('./utils')
const plugins = require('./plugins')
const jsRules = require('./rules/jsRules')
const styleRules = require('./rules/styleRules')

module.exports = {
    entry: {
        app: path.join(__dirname, '../', 'src/index.tsx')
    },
    output: {
        path: path.join(__dirname, '../', 'dist')
    },
    module: {
        rules: [...jsRules, ...styleRules]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@components': path.join(__dirname, '../', 'src/components')
        },
        plugins: [
            new TsconfigPathsPlugin({
                // 配置文件引入 tsconfig.json
                configFile: resolve('tsconfig.json')
            })
        ]
    },
    plugins: [ ...plugins]
}