import { boolean, select } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Elements|Notification',
  component: 'bm-notification',
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

export const Example = (): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-container>
        <bm-notification
          color=${select('Color', colors, null)}
          dismissable="${boolean('Dismissable', false)}"
        >
          <h2 class="subtitle">Notification</h2>
        </bm-notification>
      </bm-container>
    </bm-section>
  `;
};
