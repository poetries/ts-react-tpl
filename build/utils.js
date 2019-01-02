const path = require('path')

const config = require('./config')

exports.assetsPath = function(_path) {
    return path.posix.join(config.assetsSubDirectory, _path)
}

// 路径指定根目录
exports.resolve = function(dir) {
    return path.join(__dirname, '../', dir)
}