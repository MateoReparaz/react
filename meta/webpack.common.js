module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/public/js/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  }
}
