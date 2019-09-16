import centered from '@storybook/addon-centered/html';
import { storiesOf } from '@storybook/html';
import notes from './readme.md';
import { boolean, select } from '@storybook/addon-knobs';

const sizes = {
  'is-medium': 'is-medium',
  'is-large': 'is-large',
  none: null,
};

storiesOf('Elements|Tags', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <b-tags
        size="${select('Size', sizes, null)}"
        has-addons="${boolean('Has addons', false)}">
        <b-tag color="is-primary" >
          Primary
        </b-tag>
        <b-tag color="is-dark" >
          Dark
        </b-tag>
      </b-tags>
    `;
  });
