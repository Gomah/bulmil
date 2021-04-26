module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [`${__dirname}/../packages/core/src/**/*.stories.*`],
  presets: ['@storybook/addon-docs/preset'],
  addons: [
    '@storybook/addon-a11y/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-actions/register',
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
