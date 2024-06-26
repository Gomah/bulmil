import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Components/Pagination',
  component: 'bm-pagination',
};

export const Example = (props): TemplateResult => {
  return html`
    <bm-section>
      <bm-container>
        <bm-pagination
          is-rounded="${props.isRounded}"
          alignment="${props.alignment}"
          size="${props.size}"
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

Example.args = { size: null, alignment: null, isRounded: false };

Example.argTypes = {
  size: {
    options: ['is-small', 'is-medium', 'is-large', null],
    control: {
      type: 'select',
    },
  },

  alignment: {
    options: ['is-centered', 'is-right', null],
    control: {
      type: 'select',
    },
  },

  isRounded: {
    control: {
      type: 'boolean',
    },
  },
};
