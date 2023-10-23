const path = require('path')

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'odometer-library.js',
        library: 'OdometerLibrary',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_mdules/,
                use: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use:['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    },
    externals: {
        react: 'react',
    }
}