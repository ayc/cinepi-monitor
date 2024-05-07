const path = require('path');

mock_paths = {
    cr_rb : {
        get: { data: 'data'}, patch: { data: 'updated data'}
    },
    fps : {
        get: { data: 'data'}, patch: { data: 'updated data'}
    },
    shutter_s : {
        get: { data: 'data'}, patch: { data: 'updated data'}
    },
    shutter_a : {
        get: { data: 'data'}, patch: { data: 'updated data'}
    },
    height : {
        get: { data: 'data'}, patch: { data: 'updated data'}
    },
    width : {
        get: { data: 'data'}, patch: { data: 'updated data'}
    },
    ucm : {
        get: { data: 'data'}, patch: { data: 'updated data'}
    },
    iso : {
        get: { data: 'data'}, patch: { data: 'updated data'}
    },
    thumbnail : {
        get: { data: 'data'}, patch: { data: 'updated data'}
    },
    mic_gain : {
        get: { data: 'data'}, patch: { data: 'updated data'}
    },
    compress : {
        get: { data: 'data'}, patch: { data: 'updated data'}
    },
    log_level : {
        get: { data: 'data'}, patch: { data: 'updated data'}
    },
    web : {
        get: { data: 'data'}, patch: { data: 'updated data'}
    },
}

function setApp(app, path, getResponse, patchResponse) {
    app.get(path, function(req, res) {
        res.json(getResponse); // Mock response JSON
    });
    app.patch(path, function(req, res) {
        res.json(patchResponse); // Mock response JSON for PATCH request
    });
}

module.exports = {
    mode: 'development', // set mode to 'development' or 'production'
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/cinepi-monitor/',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets'
                    },

                }],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 8888,
        historyApiFallback: true,
        setupMiddlewares: function(middlewares, devServer) {
            if (!devServer) {
                throw new Error('webpack-dev-server is not defined');
            }
            for (const [key, value] of Object.entries(mock_paths)) {
                setApp(devServer.app, `/${key}`, value.get, value.patch);
            }
            return middlewares;
        },
    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? "warning" : false, // turn off performance hints for development mode
        maxEntrypointSize: 500000, // increase the maximum entrypoint size
        maxAssetSize: 300000, // increase the maximum asset size
    },
};
