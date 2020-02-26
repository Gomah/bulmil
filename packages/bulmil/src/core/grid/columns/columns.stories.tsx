import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Grid|Columns',
  component: 'bm-columns',
};

export const Basics = (): TemplateResult => {
  return html`
    <bm-container class="story-center">
      <bm-columns>
        <bm-column>
          First column
        </bm-column>
        <bm-column>
          Second column
        </bm-column>
        <bm-column>
          Third column
        </bm-column>
        <bm-column>
          Fourth column
        </bm-column>
      </bm-columns>
    </bm-container>
  `;
};
