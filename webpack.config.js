const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry: {
        main: path.resolve(__dirname, "./src/app.js")
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "deploy"),
    },

    devServer: {
        static: {
            directory: './deploy',
          },
        open: true,
    },

    module: {
        defaultRules: [
            // '...',
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },

            {
                test: /\.(?:ico|png)$/i,
                type: 'asset/resource',
            },
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            title: "Text Editor",
            filename: "index.html",
            template: './src/textedit.html',
        }),
    ],
};

