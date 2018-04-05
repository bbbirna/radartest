module.exports = {
    entry: './index.js',
  
    output: {
      path: __dirname + '/build',
      filename: 'bundle.js',
      publicPath: '/build/'
    },
    // debug:npm true,
    devtool: "#eval-source-map",
    devServer:{
      historyApiFallback: true,
      contentBase: './',
      // contentBase: __dirname + "/dist",
      // compress: false,
      // port: 3000,
      
    },

  
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['babel-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          loaders: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
        }
      ]
    }
  }
  