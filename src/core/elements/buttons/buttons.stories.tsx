import centered from '@storybook/addon-centered/html';
import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { select } from '@storybook/addon-knobs';
import { Buttons } from './buttons';

const sizes: { [key: string]: Buttons['size'] } = {
  small: 'are-small',
  medium: 'are-medium',
  large: 'are-large',
  none: null,
};

storiesOf('Elements|Buttons', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <bm-buttons size=${select('Size', sizes, null)}>
        <bm-button color="is-primary">Primary</bm-button>
        <bm-button color="is-danger">Danger</bm-button>
      </bm-buttons>
    `;
  });
