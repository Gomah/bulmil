import { boolean, select } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Components|Tabs',
  component: 'bm-tabs',
};

// Knobs
const alignments = {
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

export const Example = (): TemplateResult => {
  return html`
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
};
