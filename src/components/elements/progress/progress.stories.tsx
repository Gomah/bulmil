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
      <b-section>
        <b-container>
          <b-progress
            color="${select('Color', colors, null)}"
            size="${select('Size', sizes, null)}"
            number="${number('Max', 100)}"
            value="${number('Value', null)}"
            >
            </b-progress>
        </b-container>
      </b-section>
    `;
  });
