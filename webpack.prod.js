const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
    assetModuleFilename: 'images/image.[hash:8][ext][query]',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: {
                  autoprefixer: '',
                },
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:8].css',
      chunkFilename: 'css/[name].[chunkhash:8].chunk.js',
    }),
    new WebpackPwaManifest({
      id: 'kalapps-lite-pwa-1',
      publicPath: '/',
      name: 'KalApps Lite',
      filename: 'app.webmanifest',
      start_url: './index.html',
      short_name: 'KalApps',
      description: 'Find the best restaurants only on the best websites',
      background_color: '#ffffff',
      theme_color: '#d9a404',
      crossorigin: 'use-credentials',
      fingerprints: false,
      icons: [
        {
          src: path.resolve('src/public/icon.png'),
          sizes: [72, 96, 128, 144, 152, 192, 384, 512], // multiple sizes
          destination: 'icons',
        },
      ],
    }),
    new GenerateSW({
      swDest: './sw.bundle.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: /https:\/\/restaurant-api.dicoding.dev\/list/,
          handler: 'StaleWhileRevalidate',
        },
        {
          urlPattern: /https:\/\/restaurant-api.dicoding.dev\/detail\//,
          handler: 'NetworkFirst',
        },
        {
          urlPattern: /https:\/\/restaurant-api.dicoding.dev\/images\//,
          handler: 'StaleWhileRevalidate',
        },
        {
          urlPattern: /https:\/\/ui-avatars.com\/api\//,
          handler: 'StaleWhileRevalidate',
        },
      ],
    }),
  ],
});
