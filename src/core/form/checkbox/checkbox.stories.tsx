import centered from '@storybook/addon-centered/html';
import { storiesOf } from '@storybook/html';
import { boolean } from '@storybook/addon-knobs';
import notes from './readme.md';

storiesOf('Form|Checkbox', module)
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
          <b-checkbox
            checked="${boolean('Checked', false)}"
            disabled="${boolean('Disabled', false)}"
          >
            Remember me
          </b-checkbox>
        </b-container>
      </b-section>
    `;
  })
  .add('With links', () => {
    return `
      <b-section>
        <b-container>
          <b-checkbox
          checked="${boolean('Checked', false)}"
            disabled="${boolean('Disabled', false)}"
            >
            I agree to the <a href="#">terms and conditions</a>
          </b-checkbox>
        </b-container>
      </b-section>
    `;
  });
