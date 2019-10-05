const webpack = require('webpack');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production'

const compiler = webpack({
  // Webpack configuration
  mode: isProduction ? "production" : "development",
  entry: {
    bundle: "./src/_assets/js/index.js"
  },
  output: {
    path: path.resolve(__dirname, "build/js"),
    filename: "[name].js",
    publicPath: "/js/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
});

const build = () => {
  compiler.run((err, stats) => {
    // ...
  });
};

const watch = () => {
  compiler.watch({
    // watchOptions
  }, (err, stats) => {
    // Print watch/build result here...
    console.log(stats);
  });
};

if (isProduction) {
  build();
} else {
  watch();
}
