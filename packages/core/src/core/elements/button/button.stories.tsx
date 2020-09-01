import { select, boolean } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Elements/Button',
  component: 'bm-button',
};

// Knobs
const sizes = {
  small: 'is-small',
  normal: 'is-normal',
  medium: 'is-medium',
  large: 'is-large',
  none: null,
};

const colors = {
  primary: 'is-primary',
  link: 'is-link',
  info: 'is-info',
  success: 'is-success',
  danger: 'is-danger',
  warning: 'is-warning',
  white: 'is-white',
  light: 'is-light',
  dark: 'is-dark',
  black: 'is-black',
  text: 'is-text',
  none: null,
};

export const Example = (): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-button
        size=${select('Size', sizes, null)}
        color=${select('Color', colors, null)}
        is-light=${boolean('Is light', false)}
        is-outlined=${boolean('Is outlined', false)}
        disabled=${boolean('Disabled', false)}
      >
        Button
      </bm-button>
    </bm-section>
  `;
};
