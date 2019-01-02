const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    // 缓存webpack固定生成的代码块，该代码块通常不变，用于维系各个代码块之间的关系
    runtimeChunk: {
        name: 'manifest'
    },
    // 指定分块的代码，和分块后的文件名
    splitChunks: {
        cacheGroups: {
            default: false,
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'all'
            }
        }
    },
    minimizer: [
        new UglifyJsPlugin({
            // 使用文件缓存，当js文件没有变化的时候就利用缓存
            cache: true,
            // 多线程加速压缩
            parallel: true,
            sourceMap: true
        }),
        // 压缩css
        new optimizeCssAssetsPlugin({
            // cssnano 用于优化css格式表，使得构建出来的css样式表文件变化
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                reduceIdents: false,
                autoprefixer: false
            }
        })
    ]
}