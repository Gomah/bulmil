import { storiesOf } from '@storybook/html';
import notes from './readme.md';
import { boolean, select } from '@storybook/addon-knobs';

const colors = {
  'is-primary': 'is-primary',
  'is-link': 'is-link',
  'is-info': 'is-info',
  'is-success': 'is-success',
  'is-warning': 'is-warning',
  'is-danger': 'is-danger',
  none: null,
};

storiesOf('Elements|Notification', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <b-section>
        <b-container>
          <b-notification
            color=${select('Color', colors, null)}
            dismissable="${boolean('Dismissable', false)}"
          >
            <h2 class="subtitle">Notification</h2>
          </b-notification>
        </b-container>
      </b-section>
    `;
  });
