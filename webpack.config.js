require("dotenv").config();

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const devServerPort = process.env.DEV_SERVER_PORT || 8080;
const devBundleReportPort = process.env.DEV_REPORT_PORT || 8081;

// Common configuration shared between development and production
const commonConfig = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          outputPath: "images",
        },
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerPort: devBundleReportPort, // Port for the bundle analyzer UI
      openAnalyzer: false, // Set to true to open the analyzer UI in the browser
    }),
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
    new CopyPlugin({
      patterns: [{ from: "public", to: "dist" }],
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@contexts": path.resolve(__dirname, "src/contexts/"),
      "@layouts": path.resolve(__dirname, "src/layouts/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@routes": path.resolve(__dirname, "src/routes/")
    },
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};

const developmentConfig = {
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: false,
    port: devServerPort,
    open: true,
    historyApiFallback: true,
  },
};

const productionConfig = {
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
