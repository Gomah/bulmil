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
      <bm-section>
        <bm-container>
          <bm-checkbox
            checked="${boolean('Checked', false)}"
            disabled="${boolean('Disabled', false)}"
          >
            Remember me
          </bm-checkbox>
        </bm-container>
      </bm-section>
    `;
  })
  .add('With links', () => {
    return `
      <bm-section>
        <bm-container>
          <bm-checkbox
          checked="${boolean('Checked', false)}"
            disabled="${boolean('Disabled', false)}"
            >
            I agree to the <a href="#">terms and conditions</a>
          </bm-checkbox>
        </bm-container>
      </bm-section>
    `;
  });
