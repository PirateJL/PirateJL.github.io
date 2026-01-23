const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: path.join(__dirname, '../src/index.js'),
        tagcanvas: path.join(__dirname, '../js/tagcanvas.js')
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/index.html'),
            filename: 'index.html',
            scriptLoading: 'defer',
            minify: true,
            // chunks: ['app', 'tagcanvas']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/404.html'),
            filename: '404.html',
            scriptLoading: 'defer',
            minify: true,
            // chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/about.html'),
            filename: 'about.html',
            scriptLoading: 'defer',
            minify: true,
            // chunks: ['app', 'tagcanvas']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/contact.html'),
            filename: 'contact.html',
            scriptLoading: 'defer',
            minify: true,
            // chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/portfolio.html'),
            filename: 'portfolio.html',
            scriptLoading: 'defer',
            minify: true,
            // chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/showcase-project.html'),
            filename: 'showcase-project.html',
            scriptLoading: 'defer',
            minify: true,
            // chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/skills.html'),
            filename: 'skills.html',
            scriptLoading: 'defer',
            minify: true,
            // chunks: ['app']
        })
    ],
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            '@': path.join(__dirname, '../src')
        }
    },
    module: {
        rules: [
            // HTML
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },
            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            // TS
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            // CSS
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // SCSS
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            // Images
            {
                test: /\.(jpeg|jpg|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/images/'
                        }
                    }
                ]
            },
            // Fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            // Models
            {
                test: /\.(glb|gltf|fbx|obj)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/models/'
                        }
                    }
                ]
            },
            // MP3
            {
                test: /\.(mp3)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/audios/'
                        }
                    }
                ]
            },
            // Shaders
            {
                test: /\.(glsl|vs|fs|vert|frag)$/,
                exclude: /node_modules/,
                use: ['raw-loader']
            }
        ]
    }
}