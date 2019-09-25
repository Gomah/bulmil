import centered from '@storybook/addon-centered/html';
import { storiesOf } from '@storybook/html';
import { boolean, text, select } from '@storybook/addon-knobs';
import notes from './readme.md';

storiesOf('Form|Select', module)
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
            <b-select
              state="${select(
                'State',
                {
                  'is-hovered': 'is-hovered',
                  'is-focused': 'is-focused',
                  'Not set': null,
                },
                null
              )}"
              size="${select(
                'Size',
                {
                  'is-small': 'is-small',
                  'is-normal': 'is-normal',
                  'is-medium': 'is-medium',
                  'is-large': 'is-large',
                  'Not set': null,
                },
                null
              )}"
              color="${select(
                'Color',
                {
                  'is-primary': 'is-primary',
                  'is-info': 'is-info',
                  'is-success': 'is-success',
                  'is-warning': 'is-warning',
                  'is-danger': 'is-danger',
                  'Not set': null,
                },
                null
              )}"
              is-rounded="${boolean('Rounded', false)}"
              is-loading="${boolean('Loading', false)}"
              is-multiple="${boolean('Multiple', false)}"
              icon="${text('Icon', '')}"
              value="${text('Value', '')}"
            >
              <option value="dropdown">Select dropdown</option>
              <option value="options">With options</option>
            </b-select>

          </b-field>
        </b-container>
      </b-section>
    `;
  });
