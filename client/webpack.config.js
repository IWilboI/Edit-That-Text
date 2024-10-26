const path = require('path');

module.exports = {
    mode: 'development', // or 'production'
    entry: './src/index.js', // Your entry point
    output: {
        filename: 'main.js', // Output bundle name
        path: path.resolve(__dirname, 'dist'), // Output directory
        clean: true, // Clean the output directory before each build
    },
    devtool: 'inline-source-map', // Source maps for debugging
    devServer: {
        static: './public', // Serve static files from public directory
        port: 8080, // Port for the dev server
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Transpile JS files
                exclude: /node_modules/, // Exclude node_modules
                use: {
                    loader: 'babel-loader', // Use Babel loader for JS
                    options: {
                        presets: ['@babel/preset-env'], // Babel presets
                    },
                },
            },
            {
                test: /\.css$/, // Rule for CSS files
                use: ['style-loader', 'css-loader'], // Loaders for CSS
            },
            // Add other rules as needed
        ],
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'], // Resolve modules from src
    },
};
