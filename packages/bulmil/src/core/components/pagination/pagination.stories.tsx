import { boolean, select } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Components/Pagination',
  component: 'bm-pagination',
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

export const Example = (): TemplateResult => {
  return html`
    <bm-section>
      <bm-container>
        <bm-pagination
          is-rounded=${boolean('Rounded', false)}
          alignment=${select('Alignment', alignments, null)}
          size=${select('Size', sizes, null)}
        >
          <a class="pagination-previous">Previous</a>
          <a class="pagination-next">Next page</a>
          <ul class="pagination-list">
            <li>
              <a class="pagination-link" aria-label="Goto page 1">1</a>
            </li>
            <li>
              <span class="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 45">45</a>
            </li>
            <li>
              <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 47">47</a>
            </li>
            <li>
              <span class="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 86">86</a>
            </li>
          </ul>
        </bm-pagination>
      </bm-container>
    </bm-section>
  `;
};
