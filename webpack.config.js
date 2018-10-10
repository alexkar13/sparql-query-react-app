const path = require('path');

console.log(path.join(__dirname, 'public'));

module.exports = {
    mode:"development",
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {loader: 'babel-loader'}
                ],
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool:'cheap-module-eval-source-map',
    devServer: {
        contentBase: "public"
    }
};
