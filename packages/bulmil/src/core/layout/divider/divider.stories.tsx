import { boolean, select, text } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Layout/Divider',
  component: 'bm-divider',
};

const alignments = {
  left: 'is-left',
  right: 'is-right',
  none: null,
};

const colors = {
  info: 'is-info',
  success: 'is-success',
  warning: 'is-warning',
  danger: 'is-danger',
  none: null,
};

export const Example = (): TemplateResult => {
  return html`
    <bm-section>
      <bm-container>
        <bm-divider
          alignment="${select('Alignment', alignments, null)}"
          color="${select('Color', colors, null)}"
          is-light="${boolean('Is Light', false)}"
          is-vertical="${boolean('Is vertical', false)}"
        >
          ${text('Slot', 'OR')}
        </bm-divider>
      </bm-container>
    </bm-section>
  `;
};
