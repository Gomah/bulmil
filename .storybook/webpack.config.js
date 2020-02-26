module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.tsx$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
      ],
    },
  );

  return config;
};
