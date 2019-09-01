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

storiesOf('Components|Buttons', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <b-buttons size=${select('Size', sizes, null, 'test')}>
        <b-button color="is-primary">Primary</b-button>
        <b-button color="is-danger">Danger</b-button>
      </b-buttons>
    `;
  });
