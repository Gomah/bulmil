import { select } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Layout|Section',
  component: 'bm-section',
};

const sizes = {
  medium: 'is-medium',
  large: 'is-large',
  none: null,
};

export const Sizes = (): TemplateResult => {
  return html`
    <bm-section size="${select('Size', sizes, null)}">
      <div class="container">
        <h1 class="title">Section</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're
          currently reading
        </h2>
      </div>
    </bm-section>
  `;
};
