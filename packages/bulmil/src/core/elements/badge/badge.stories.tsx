import { select, boolean } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Elements|Badge',
  component: 'bm-badge',
};

const colors = {
  primary: 'is-primary',
  info: 'is-info',
  success: 'is-success',
  danger: 'is-danger',
  warning: 'is-warning',
  white: 'is-white',
  dark: 'is-dark',
  black: 'is-black',
  none: null,
};

const positions = {
  'is-top-left': 'is-top-left',
  'is-top': 'is-top',
  'is-top-right': 'is-top-right',
  'is-right': 'is-right',
  'is-bottom-right': 'is-bottom-right',
  'is-bottom': 'is-bottom',
  'is-bottom-left': 'is-bottom-left',
  'is-left': 'is-left',
  none: null,
};

export const Example = (): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-button size="is-large">
        <bm-badge
          color=${select('Color', colors, null)}
          position=${select('Position', positions, null)}
          is-light=${boolean('Is light', false)}
          is-outlined=${boolean('Is outlined', false)}
        >
          3
        </bm-badge>
        Test
      </bm-button>
    </bm-section>
  `;
};
