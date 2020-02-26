import { select, text } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Layout|Divider',
  component: 'bm-divider',
};

const orientations = {
  horizontal: 'is-horizontal',
  vertical: 'is-vertical',
};

export const Example = (): TemplateResult => {
  return html`
    <bm-section>
      <bm-container>
        <bm-divider
          orientation="${select('Orientation', orientations, 'is-horizontal')}"
          content="${text('Content', '')}"
        >
        </bm-divider>
      </bm-container>
    </bm-section>
  `;
};
