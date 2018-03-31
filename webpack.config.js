
module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public/js',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ]
    },
};