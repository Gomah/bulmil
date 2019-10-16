// import centered from '@storybook/addon-centered/html';
import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { boolean, select } from '@storybook/addon-knobs';
import { Tabs } from './tabs';

const alignments: { [key: string]: Tabs['alignment'] } = {
  Centered: 'is-centered',
  Right: 'is-right',
  None: null,
};

const sizes = {
  Small: 'is-small',
  Medium: 'is-medium',
  Large: 'is-large',
  None: null,
};

const styles = {
  Boxed: 'is-boxed',
  Toggle: 'is-toggle',
  None: null,
};

storiesOf('Components|Tabs', module)
  // .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <bm-section>
        <bm-container>
          <bm-tabs
            is-rounded=${boolean('Rounded', false)}
            is-fullwidth=${boolean('Fullwidth', false)}
            tab-style=${select('Style', styles, null)}
            alignment=${select('Alignment', alignments, null)}
            size=${select('Size', sizes, null)}
          >
            <ul>
              <li class="is-active">
                <a>Pictures</a>
              </li>
              <li>
                <a>Music</a>
              </li>
              <li>
                <a>Videos</a>
              </li>
              <li>
                <a>Documents</a>
              </li>
            </ul>
          </bm-tabs>
        </bm-container>
      </bm-section>
    `;
  });
