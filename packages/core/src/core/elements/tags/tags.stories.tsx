import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Elements/Tags',
  component: 'bm-tags',
};

export const Example = (props): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-tags size="${props.size}" has-addons="${props.hasAddons}">
        <bm-tag color="is-primary"> Primary </bm-tag>
        <bm-tag color="is-dark"> Dark </bm-tag>
      </bm-tags>
    </bm-section>
  `;
};

Example.args = { size: null, hasAddons: false };

Example.argTypes = {
  size: {
    options: ['are-medium', 'are-large', null],
    control: {
      type: 'select',
    },
  },
  hasAddons: {
    control: {
      type: 'boolean',
    },
  },
};
