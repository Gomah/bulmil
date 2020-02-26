import { select, number } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Elements|Progress',
  component: 'bm-progress',
};

const colors = {
  'is-primary': 'is-primary',
  'is-link': 'is-link',
  'is-info': 'is-info',
  'is-success': 'is-success',
  'is-warning': 'is-warning',
  'is-danger': 'is-danger',
  none: null,
};

const sizes = {
  'is-small': 'is-small',
  'is-medium': 'is-medium',
  'is-large': 'is-large',
  none: null,
};

export const Example = (): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-container>
        <bm-progress
          color="${select('Color', colors, null)}"
          size="${select('Size', sizes, null)}"
          max="${number('Max', 100)}"
          value="${number('Value', null)}"
        >
        </bm-progress>
      </bm-container>
    </bm-section>
  `;
};
