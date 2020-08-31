import { boolean, select } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Form/Switch',
  component: 'bm-switch',
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
        <bm-switch
          checked="${boolean('Checked', false)}"
          size="${select('Size', sizes, null)}"
          color="${select('Color', colors, null)}"
          is-rounded="${boolean('Rounded', false)}"
          is-thin="${boolean('Thin', false)}"
          is-outlined="${boolean('Outlined', false)}"
          disabled="${boolean('Disabled', false)}"
          >Example</bm-switch
        >
      </bm-field>
    </bm-section>
  `;
};
