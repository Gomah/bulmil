import centered from '@storybook/addon-centered/html';
import { storiesOf } from '@storybook/html';
import notes from './readme.md';
import { text, select, boolean } from '@storybook/addon-knobs';

storiesOf('Form|File', module)
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
            <b-file
              name="example"
              placeholder="${text('Placeholder', 'Choose a file...')}"
              color="${select(
                'Color',
                {
                  'is-white': 'is-white',
                  'is-black': 'is-black',
                  'is-light': 'is-light',
                  'is-dark': 'is-dark',
                  'is-primary': 'is-primary',
                  'is-link': 'is-link',
                  'is-info': 'is-info',
                  'is-success': 'is-success',
                  'is-warning': 'is-warning',
                  'is-danger': 'is-danger',
                },
                null
              )}"
              size="${select(
                'Size',
                {
                  'is-small': 'is-small',
                  'is-medium': 'is-medium',
                  'is-large': 'is-large',
                },
                null
              )}"
              alignment="${select(
                'Alignment',
                {
                  'is-centered': 'is-centered',
                  'is-right': 'is-right',
                },
                null
              )}"
              is-right="${boolean('Move the CTA to the right side', false)}"
              is-fullwidth="${boolean('Expand the name to fill up the space', false)}"
              is-boxed="${boolean('Boxed block', false)}"
              has-name="${boolean('Has name', false)}"
              >
            </b-file>
          </b-field>
        </b-container>
      </b-section>
    `;
  });
