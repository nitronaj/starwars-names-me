import path from 'path';

export default {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'starWarsNames',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'bower_components'),
        ],
        loader: 'babel-loader',
      },
      {
        test: /.json$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'json',
      },
    ],
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css'],
  },
  devtool: 'source-map',
  devServer: {
    publicPath: path.join('/dist/'),
  },
};
