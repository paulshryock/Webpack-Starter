const webpack = require('webpack');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production'

const compiler = webpack({
  mode: isProduction ? "production" : "development",
  entry: "./src/_assets/js/index.js",
  output: {
    path: path.resolve(__dirname, "build/js"),
    filename: "bundle.js",
    publicPath: "/js/",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
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
  compiler.run((err, stats) => { // Stats Object
    // ...
  });
};

const watch = () => {
  compiler.watch({
    // Example watchOptions
    aggregateTimeout: 300,
    poll: undefined
  }, (err, stats) => { // Stats Object
    // Print watch/build result here...
    console.log(stats);
  });
};

if (isProduction) {
  build();
} else {
  watch();
}
