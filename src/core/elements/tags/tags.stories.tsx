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
      <bm-tags
        size="${select('Size', sizes, null)}"
        has-addons="${boolean('Has addons', false)}">
        <bm-tag color="is-primary" >
          Primary
        </bm-tag>
        <bm-tag color="is-dark" >
          Dark
        </bm-tag>
      </bm-tags>
    `;
  });
