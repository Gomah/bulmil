import { create } from '@storybook/theming';

export const bulmilTheme = create({
  base: 'light',

  colorPrimary: '#16161d',
  colorSecondary: '#5851ff',

  // UI
  appBg: '#f8f8fc',
  appContentBg: '#f8f8fc',
  appBorderColor: '#5851ff',
  appBorderRadius: 4,

  // Typography
  fontBase:
    '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
  fontCode: 'monospace',

  // Text colors
  textColor: '#16161d',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#16161d',
  barSelectedColor: '#5851ff',
  barBg: '#ffffff',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: '#16161d',
  inputBorderRadius: 4,

  brandTitle: 'Bulmil',
  brandUrl: 'https://bulmil.netlify.com',
  // brandImage: ''
});
