import centered from '@storybook/addon-centered/html';
import { storiesOf } from '@storybook/html';
import { boolean } from '@storybook/addon-knobs';
import notes from './readme.md';

storiesOf('Form|Radio', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <b-section>
        <b-container>
          <b-field>
            <b-radio name="storybook">
              Yes
            </b-radio>

            <b-radio name="storybook" checked="${boolean('Checked', false)}">
              No
            </b-radio>

            <b-radio name="storybook" disabled="${boolean('Disabled', false)}">
              Maybe
            </b-radio>
          </b-field>
        </b-container>
      </b-section>
    `;
  });
