// @AngularClass

var webpack = require('webpack');
var helpers = require('./helpers');

var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

var ENV = process.env.ENV = process.env.NODE_ENV = 'development';
var HMR = helpers.hasProcessFlag('hot');

var metadata = {
  title: 'AA MVP CodeGen',//'Angular2 Webpack Starter by @gdi2990 from @AngularClass',
  baseUrl: '/',
  host: 'localhost',
  port: 3000,
  ENV: ENV,
  HMR: HMR
};

// var bootstrapPath = path.join(
//     __dirname,
//     'node_modules/bootstrap/dist/css'
// );

 const autoprefixer = require('autoprefixer');

/*
 * Config
 * with default values at webpack.default.conf
 */
module.exports = {


  // static data for index.html
  metadata: metadata,
  devtool: 'source-map',
  // devtool: 'eval',
  debug: true,
  // devtool: 'eval' // for faster builds use 'eval'

  // our angular app
  entry: { 'polyfills': './src/polyfills.ts', 'main': './src/main.ts' },

  // resolve: {
  //   extensions: ['', '.ts', '.js']
  //   // extensions: ['', '.ts', '.webpack.js', '.web.js', '.js']
  // },

  // Config for our build files
  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

 resolve: {
   // ensure loader extensions match
   extensions: ['','.ts','.js','.json','.css','.scss','.html']//,
    //modulesDirectories: ['node_modules', bootstrapPath]

 },

  module: {
    preLoaders: [
      { test: /\.ts$/, loader: 'tslint-loader', exclude: [ helpers.root('node_modules') ] },
      // TODO(gdi2290): `exclude: [ helpers.root('node_modules/rxjs') ]` fixed with rxjs 5 beta.3 release
      { test: /\.js$/, loader: "source-map-loader", exclude: [ helpers.root('node_modules/rxjs') ] }
    ],
    loaders: [
      // Support for .ts files.
      { test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: [ /\.(spec|e2e)\.ts$/ ] },

      // Support for *.json files.
      { test: /\.json$/,  loader: 'json-loader', exclude: [ helpers.root('node_modules') ] },

      // Support for CSS as raw text
      { test: /\.css$/,   loader: 'raw-loader', exclude: [ helpers.root('node_modules') ] },

      // support for .html as raw text
      { test: /\.html$/,  loader: 'raw-loader', exclude: [ helpers.root('src/index.html'), helpers.root('node_modules') ] },


      // { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },

      { test: /\.scss$/, loaders: ['raw-loader','sass-loader'] },

      { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },

      // Bootstrap 4
      { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' }
    ]
  },

  plugins: [
    new ForkCheckerPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({ name: 'polyfills', filename: 'polyfills.bundle.js', minChunks: Infinity }),
    // static assets
    new CopyWebpackPlugin([ { from: 'src/assets', to: 'assets' } ]),
    // generating html
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    // replace
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(metadata.ENV),
        'NODE_ENV': JSON.stringify(metadata.ENV),
        'HMR': HMR
      }
    }),

    // require the plugin
    new ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery',
        "Tether": 'tether',
        "window.Tether": "tether"
    })
  ],

   postcss: [autoprefixer],

  // Other module loader config

  // our Webpack Development Server config
  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'src',
  },
  devServer: {
    port: metadata.port,
    host: metadata.host,
    contentBase: 'src/', // https://github.com/AngularClass/angular2-webpack-starter/commit/c6f50c8af6c236903ab094674f595252dbb20bff
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  node: {
    global: 'window',
    progress: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  },
};
