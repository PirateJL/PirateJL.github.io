const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const sourceDir = path.resolve(__dirname, 'src');

const pages = [
    'index.html',
    'about.html',
    'skills.html',
    'portfolio.html',
    'showcase-project.html',
    'contact.html',
    '404.html',
];

const rewriteHtmlScripts = (content) => {
    let html = content.toString();

    html = html.replace(/\s*<script\s+type="module"\s+src="js\/utils\.js"><\/script>/g, '');
    html = html.replace(
        /\s*<script\s+type="module"\s+src="js\/app\.js"><\/script>/g,
        '\n    <script defer src="js/bundle.js"></script>'
    );

    return html;
};

module.exports = {
    entry: {
        bundle: path.resolve(sourceDir, 'js/app.js'),
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        hot: false,
        liveReload: true,
        port: 8000,
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                ...pages.map((page) => ({
                    from: path.resolve(sourceDir, page),
                    to: page,
                    transform: rewriteHtmlScripts,
                })),
                { from: path.resolve(sourceDir, 'css'), to: 'css' },
                { from: path.resolve(sourceDir, 'data'), to: 'data' },
                { from: path.resolve(sourceDir, 'lang'), to: 'lang' },
                { from: path.resolve(sourceDir, 'img'), to: 'img' },
                { from: path.resolve(sourceDir, 'js/tagcanvas.js'), to: 'js/tagcanvas.js' },
                { from: path.resolve(sourceDir, 'js/notifyMe.js'), to: 'js/notifyMe.js' },
            ],
        }),
    ],
};
