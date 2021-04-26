const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = ({ config }) => {
  config.plugins.push(new NodePolyfillPlugin());

  config.module.rules.push({
    test: /\.tsx$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
