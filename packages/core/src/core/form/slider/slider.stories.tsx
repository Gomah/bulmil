import { boolean, select, number } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Form/Slider',
  component: 'bm-slider',
};

const sizes = {
  small: 'is-small',
  medium: 'is-medium',
  large: 'is-large',
  none: null,
};

const colors = {
  success: 'is-success',
  warning: 'is-warning',
  danger: 'is-danger',
  info: 'is-info',
  none: null,
};

export const Example = (): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-field>
        <bm-slider
          size="${select('Size', sizes, null)}"
          step="${number('Step', 1)}"
          min="${number('Min', 0)}"
          max="${number('Max', 100)}"
          value="${number('Value', 50)}"
          color="${select('Color', colors, null)}"
          is-circle="${boolean('Circle', false)}"
          disabled="${boolean('Disabled', false)}"
        />
      </bm-field>
    </bm-section>
  `;
};
