const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),

  // Output configuration
  output: {
    path: path.resolve(__dirname, '../dist'), // Place the build output in ../dist
    filename: 'bundle.js',
    publicPath: '/', // Necessary for React Router (if used)
    clean: true, // Cleans the output directory before building
  },

  // Development server configuration
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 3000, // Development server will run on localhost:3000
    hot: true, // Enable hot module replacement
    historyApiFallback: true, // For React Router support
  },

  resolve: {
    extensions: ['.js', '.jsx'], // Allow importing .jsx files without specifying the extension
  },  

  // Module rules
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transpile JavaScript and JSX files
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, // Process CSS and TailwindCSS
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, // Load images
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/, // Load fonts
        type: 'asset/inline',
      },
      {
        test: /\.html$/, 
        use: 'html-loader',
      }
    ],
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],

  // Environment mode
  mode: process.env.NODE_ENV || 'development',
};
