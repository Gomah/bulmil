import centered from '@storybook/addon-centered/html';
import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { select, boolean } from '@storybook/addon-knobs';
import { Button } from './button';

const sizes: { [key: string]: Button['size'] } = {
  small: 'is-small',
  normal: 'is-normal',
  medium: 'is-medium',
  large: 'is-large',
  none: null,
};

const colors: { [key: string]: Button['color'] } = {
  primary: 'is-primary',
  link: 'is-link',
  info: 'is-info',
  success: 'is-success',
  danger: 'is-danger',
  warning: 'is-warning',
  white: 'is-white',
  light: 'is-light',
  dark: 'is-dark',
  black: 'is-black',
  text: 'is-text',
  none: null,
};

storiesOf('Elements|Button', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <bm-button
        size=${select('Size', sizes, null)}
        color=${select('Color', colors, null)}
        disabled=${boolean('Disabled', false)}
      >
        Button
      </bm-button>
    `;
  });
