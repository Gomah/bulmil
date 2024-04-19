import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Elements/Buttons',
  component: 'bm-buttons',
};

export const Example = (props): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-buttons size="${props.size}">
        <bm-button color="is-primary">Primary</bm-button>
        <bm-button color="is-danger">Danger</bm-button>
      </bm-buttons>
    </bm-section>
  `;
};

Example.args = { size: null };

Example.argTypes = {
  size: {
    options: ['are-small', 'are-medium', 'are-large', null],
    control: {
      type: 'select',
    },
  },
};
