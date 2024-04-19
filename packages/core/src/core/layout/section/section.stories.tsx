import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Layout/Section',
  component: 'bm-section',
};

const sizes = {
  medium: 'is-medium',
  large: 'is-large',
  none: null,
};

export const Sizes = (props): TemplateResult => {
  return html`
    <bm-section size="${props.size}">
      <bm-container>
        <h1 class="title">Section</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're
          currently reading
        </h2>
      </bm-container>
    </bm-section>
  `;
};

Sizes.args = { size: null };

Sizes.argTypes = {
  size: {
    options: ['is-medium', 'is-large', null],
    control: {
      type: 'select',
    },
  },
};
