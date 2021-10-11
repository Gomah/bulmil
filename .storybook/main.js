module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [`${__dirname}/../packages/core/src/**/*.stories.*`],
  presets: ['@storybook/addon-docs/preset'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-actions',
    'storybook-addon-turbo-build',
    {
      name: 'storybook-addon-turbo-build',
      options: {
        // Please refer below tables for available options
        optimizationLevel: 2,
      },
    },
  ],
};
