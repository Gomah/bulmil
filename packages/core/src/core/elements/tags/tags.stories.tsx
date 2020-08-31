import { boolean, select } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Elements/Tags',
  component: 'bm-tags',
};

const sizes = {
  'are-medium': 'are-medium',
  'are-large': 'are-large',
  none: null,
};

export const Example = (): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-tags size="${select('Size', sizes, null)}" has-addons="${boolean('Has addons', false)}">
        <bm-tag color="is-primary"> Primary </bm-tag>
        <bm-tag color="is-dark"> Dark </bm-tag>
      </bm-tags>
    </bm-section>
  `;
};
