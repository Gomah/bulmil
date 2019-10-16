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
      <bm-section>
        <bm-container>
          <bm-field>
            <bm-radio name="storybook">
              Yes
            </bm-radio>

            <bm-radio name="storybook" checked="${boolean('Checked', false)}">
              No
            </bm-radio>

            <bm-radio name="storybook" disabled="${boolean('Disabled', false)}">
              Maybe
            </bm-radio>
          </bm-field>
        </bm-container>
      </bm-section>
    `;
  });
