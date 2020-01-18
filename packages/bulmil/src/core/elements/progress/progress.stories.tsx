import { storiesOf } from '@storybook/html';
import { select, number } from '@storybook/addon-knobs';
import notes from './readme.md';

const colors = {
  'is-primary': 'is-primary',
  'is-link': 'is-link',
  'is-info': 'is-info',
  'is-success': 'is-success',
  'is-warning': 'is-warning',
  'is-danger': 'is-danger',
  none: null,
};

const sizes = {
  'is-small': 'is-small',
  'is-medium': 'is-medium',
  'is-large': 'is-large',
  none: null,
};

storiesOf('Elements|Progress', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <bm-section>
        <bm-container>
          <bm-progress
            color="${select('Color', colors, null)}"
            size="${select('Size', sizes, null)}"
            max="${number('Max', 100)}"
            value="${number('Value', null)}"
            >
            </bm-progress>
        </bm-container>
      </bm-section>
    `;
  });
