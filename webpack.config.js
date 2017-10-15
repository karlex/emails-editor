module.exports = {
    context: __dirname + '/',
    entry: './app.ts',
    output: {
        path: __dirname + '/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        loaders: [
            { 
                test: /\.ts$/, 
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            { 
                test: /\.css$/, 
                exclude: /node_modules/,
                loader: "style-loader!css-loader" 
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader?exportAsEs6Default"
            },
            { test: /\.(png|otf|ttf)$/, loader: 'url-loader' }
        ]
    }
}