const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const autoprefixer = require("autoprefixer")

const browserConfig = {
    entry: "./src/browser/index.js",
    output: {
        path: __dirname,
        filename: "./public/bundle.js",
    },
    devtool: "cheap-module-source-map",
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "./public"
                        }
                    }
                ]        
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {presets: ["react-app"]}
            }
        ]
    }
}

const serverConfig = {
    entry: "./src/server/index.js",
    target: "node",
    output: {
        path: __dirname,
        filename: "server.js",
        libraryTarget: "commonjs2"
    },
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {presets: ["react-app"]}
            }, 
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "css-loader/locals"
                    }
                ]
            }
        ]
    }
}

module.exports = [browserConfig, serverConfig]