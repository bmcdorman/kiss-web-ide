import * as webpack from 'webpack';

import projectPaths from './project-paths';
import * as fs from 'fs';
import * as path from 'path';

const MonacoEditorWebpackPlugin = require('monaco-editor-webpack-plugin');

export default {
  mode: 'development',
  context: projectPaths.client,
  entry: './src/index.tsx',
  output: {
    path: projectPaths.build,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [ '@babel/preset-env' ]
        }
      }, {
        loader: 'ts-loader'
      }],
      exclude: /node_modules/
    }, {
      test: /.less$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'less-loader'
      }]
    }, {
      test: /.css$/,
      use: [{
        loader: 'css-loader'
      }, {
        loader: 'less-loader'
      }]
    }]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  
  plugins: [
    new MonacoEditorWebpackPlugin()
  ]
} as webpack.Configuration;