import centered from '@storybook/addon-centered/html';
import { storiesOf } from '@storybook/html';
import { boolean, text, select } from '@storybook/addon-knobs';
import notes from './readme.md';

storiesOf('Form|Textarea', module)
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
            <b-textarea
              state="${select(
                'State',
                { 'is-hovered': 'is-hovered', 'is-focused': 'is-focused', 'Not set': null },
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
              value="${text('Value', "I'm a textarea 🤘")}"
              control-class="${text('Control class', '')}"
              is-loading="${boolean('Loading', false)}"
              disabled="${boolean('Disabled', false)}"
              readonly="${boolean('Readonly', false)}"
              has-fixed-size="${boolean('Fixed size', false)}"
            >
            </b-textarea>
          </b-field>
        </b-container>
      </b-section>
    `;
  });
