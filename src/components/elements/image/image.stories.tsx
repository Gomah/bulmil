import centered from '@storybook/addon-centered/html';
import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { select } from '@storybook/addon-knobs';
import { Image } from './image';

const sizes: { [key: string]: Image['size'] } = {
  '16x16': 'is-16x16',
  '24x24': 'is-24x24',
  '32x32': 'is-32x32',
  '48x48': 'is-48x48',
  '64x64': 'is-64x64',
  '96x96': 'is-96x96',
  '128x128': 'is-128x128',
  none: null,
};

storiesOf('Elements|Image', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Sizes', () => {
    return `
      <b-image size="${select('Size', sizes, 'is-128x128')}">
        <img src="https://bulma.io/images/placeholders/128x128.png" />
      </b-image>
    `;
  });
