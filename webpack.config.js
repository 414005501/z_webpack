const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack=require("webpack");
require("webpack-dev-server")
const handler = (percentage, message, ...args) => {
    // e.g. Output each progress message directly to the console:
    console.clear();
    console.info(`${Math.round(percentage*100)}%`, message, ...args);
  };
  
  
module.exports = {
    entry: {
        index:"./src/main.js"
    },
    output: {
        path: path.resolve(__dirname, "build"),
        chunkFilename:"./js/[name]_[hash:6].js",
        assetModuleFilename: "./images/[name]_[id]_[hash:6][ext]",
        environment: {
            arrowFunction: false,
            const: false,
        },
        clean: true,

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"],
                include: [path.resolve(__dirname, 'src')],
                type: "javascript/auto"
            },
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader',
                options: {
                  exposes: ['$', 'jQuery'],
                }
            },
            {
                test: /\.ts$/,
                use: ["ts-loader"],
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.css$/,
                use: ["css-loader"],
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.(jpg|gif|png)$/,
                type: "asset/resource",
                include: [path.resolve(__dirname, 'src')],
                generator: {
                    filename: 'assets/images/[name]_[id]_[hash:6][ext]'
                }
            },
            {
                test: /\.(mp3|mp4)$/,
                type: "asset",
                include: [path.resolve(__dirname, 'src')],
                generator: {
                    filename: 'assets/media/[name]_[id]_[hash:6][ext]'
                }
            }
        ]
    },
    plugins: [
        
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            title: "学习webpack",
            filename:"index.html",
            scriptLoading:"blocking"
            
        }),
        
        new webpack.DefinePlugin({
            $:require("jquery")
        }),
        // new CompressionPlugin(),
        // new webpack.ProgressPlugin(handler)
    ],
    devServer: {
        compress: true,
        open: true,
        hot: true
    }
}


  