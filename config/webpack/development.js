const environment = require('./environment');
const config = environment.toWebpackConfig();
const webpack = require('webpack');

config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('development'),
      'GOOGLE_MAPS': JSON.stringify('AIzaSyCOB2Z-ufRlo4n2jxfu35KdbuFr_MIyEJM')
    }
  })
]);

module.exports = config;
