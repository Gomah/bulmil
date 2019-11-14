import centered from '@storybook/addon-centered/html';
import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { boolean, select } from '@storybook/addon-knobs';


const sizes = {
  small: 'is-small',
  medium: 'is-medium',
  large: 'is-large',
  none: null,
};

const colors = {
  success: 'is-success',
  warning: 'is-warning',
  danger: 'is-danger',
  info: 'is-info',
  none: null,
};

storiesOf('Form|Switch', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <bm-sections>
        <bm-container>
          <bm-field>
            <bm-switch
              checked="${boolean('Checked', false)}"
              size="${select('Size', sizes, null)}"
              color="${select('Color', colors, null)}"
              is-rounded="${boolean('Rounded', false)}"
              is-thin="${boolean('Thin', false)}"
              is-outlined="${boolean('Outlined', false)}"
              disabled="${boolean('Disabled', false)}"
            >Example</bm-switch>
          </bm-field>
        </bm-container>
      </bm-sections>
  `;
  });
