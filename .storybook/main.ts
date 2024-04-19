import { StorybookConfig } from '@storybook/web-components-vite';
import { externalFileWatch } from './plugins/externalFileWatch';

const config: StorybookConfig = {
  stories: ['../packages/core/src/**/*.mdx', '../packages/core/src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y',],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,
  },
  staticDirs: [{ from: '../packages/core/www/build/', to: '/build' }],
  async viteFinal(config) {
    return {
      ...config,
      assetsInclude: [...(config.assetsInclude as [] ?? []), '/build/bulmil.esm.js', '/build/bulmil.css'],
      plugins: [...(config.plugins ?? []), externalFileWatch(['./dist/**/*.js'])],
    };
  },
};

export default config;
