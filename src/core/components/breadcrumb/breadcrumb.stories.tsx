import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { boolean, select } from '@storybook/addon-knobs';

const separators = {
  'has-arrow-separator': 'has-arrow-separator',
  'has-bullet-separator': 'has-bullet-separator',
  'has-dot-separator': 'has-dot-separator',
  'has-succeeds-separator': 'has-succeeds-separator',
  None: null,
};

const sizes = {
  Small: 'is-small',
  Medium: 'is-medium',
  Large: 'is-large',
  None: null,
};

storiesOf('Components|Breadcrumb', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <b-section>
        <b-container>
          <b-breadcrumb
            is-centered=${boolean('Centered', false)}
            alignment=${select(
              'Alignment',
              { 'is-centered': 'is-centered', 'is-right': 'is-right', 'Not set': null },
              null
            )}
            separator=${select('Separator', separators, null)}
            size=${select('Size', sizes, null)}
          >
            <ul>
              <li><a href="#">Bulmil</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Components</a></li>
              <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
            </ul>
          </b-breadcrumb>
        </b-container>
      </b-section>
    `;
  });
