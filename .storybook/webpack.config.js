const path = require('path');
const webpack = require('webpack');

module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.tsx$/,
      loader: ['awesome-typescript-loader'],
    },
    {
      test: /\.stories\.tsx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/addon-storysource/loader'),
          options: { parser: 'typescript' },
        },
      ],
      enforce: 'pre',
    }
  );

  return config;
};
