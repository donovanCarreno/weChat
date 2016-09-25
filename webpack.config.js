module.exports = {
  entry: './client/src/App.jsx',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  output: {
    path: './client/public',
    filename: 'bundle.js'
  }
};
