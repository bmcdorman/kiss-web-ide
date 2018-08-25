import * as webpack from 'webpack';

import * as path from 'path';

const ROOT_DIR = path.join(__dirname, '..', '..');
const BUILD_DIR = path.join(__dirname, 'build');
const CLIENT_DIR = path.join(ROOT_DIR, 'client');
const SERVER_DIR = path.join(ROOT_DIR, 'server');
const STATIC_DIR = path.join(ROOT_DIR, 'static');

const CLIENT_SRC_DIR = path.join(CLIENT_DIR, 'src');

export default {
  mode: 'development',
  context: CLIENT_SRC_DIR,
  entry: 'index.tsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [{
        loader: 'ts-loader'
      }]
    }]
  },
  plugins: [
    
  ]
} as webpack.Configuration;