const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

// Common configuration shared between development and production
const commonConfig = {
  // Entry point of the application
  entry: "./src/index.tsx",
  // Module rules to handle TypeScript files
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // Plugins to enhance webpack functionality
  plugins: [
    // Plugin to analyze the bundle size
    new BundleAnalyzerPlugin({
      analyzerPort: 8888, // Port for the bundle analyzer UI
      openAnalyzer: false, // Set to true to open the analyzer UI in the browser
    }),
    // Plugin to generate the HTML file
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    // Plugin to copy files from 'public' directory to 'dist'
    new CopyPlugin({
      patterns: [{ from: "public", to: "dist" }],
    }),
  ],
  // Resolve file extensions
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  // Output configuration
  output: {
    filename: "bundle.js", // Output bundle filename
    path: path.resolve(__dirname, "dist"), // Output directory
  },
};

// Development-specific configuration
const developmentConfig = {
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Serve from the 'dist' directory
    },
    compress: true,
    port: 8080,
    open: true, // Open the default browser when starting the server
    historyApiFallback: true, // Enable support for client-side routing
  },
};

// Production-specific configuration
const productionConfig = {
  // Performance configuration to handle bundle size warnings
  performance: {
    hints: false,
    maxEntrypointSize: 512000, // Max size of the entry point bundle
    maxAssetSize: 512000, // Max size of individual assets
  },
  // Plugins for production build (HTML generation with minification)
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
  ],
};

// Export a function to dynamically determine the configuration based on the mode
module.exports = (env, argv) => {
  if (argv.mode === "development") {
    return merge(commonConfig, developmentConfig);
  }
  if (argv.mode === "production") {
    return merge(commonConfig, productionConfig);
  }
  return commonConfig; // Fallback to common configuration if mode is not specified
};
