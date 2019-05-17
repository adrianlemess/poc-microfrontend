module.exports = {
    publicPath: 'http://localhost:8089/dist/',
    configureWebpack: {
        externals: {
            'vue': 'vue',
            'core-js': 'core-js'    
        }
    }
}