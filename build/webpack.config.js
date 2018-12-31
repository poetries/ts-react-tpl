const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')

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
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
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