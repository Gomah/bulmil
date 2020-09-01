import { select } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Elements/Buttons',
  component: 'bm-buttons',
};

const sizes = {
  small: 'are-small',
  medium: 'are-medium',
  large: 'are-large',
  none: null,
};

export const Example = (): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-buttons size=${select('Size', sizes, null)}>
        <bm-button color="is-primary">Primary</bm-button>
        <bm-button color="is-danger">Danger</bm-button>
      </bm-buttons>
    </bm-section>
  `;
};
