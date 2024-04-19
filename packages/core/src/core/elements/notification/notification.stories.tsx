import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Elements/Notification',
  component: 'bm-notification',
};

export const Example = (props): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-container>
        <bm-notification color="${props.color}" dismissable="${props.dismissable}">
          <h2 class="subtitle">Notification</h2>
        </bm-notification>
      </bm-container>
    </bm-section>
  `;
};

Example.args = { color: null, dismissable: false };

Example.argTypes = {
  color: {
    options: ['is-primary', 'is-link', 'is-info', 'is-success', 'is-warning', 'is-danger', null],
    control: {
      type: 'select',
    },
  },
  dismissable: {
    control: {
      type: 'boolean',
    },
  },
};
