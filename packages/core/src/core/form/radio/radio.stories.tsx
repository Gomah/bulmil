import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Form/Radio',
  component: 'bm-radio',
};

export const Example = (props): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-field>
        <bm-radio name="storybook"> Yes </bm-radio>

        <bm-radio name="storybook" checked="${props.checked}"> No </bm-radio>

        <bm-radio name="storybook" disabled="${props.disabled}"> Maybe </bm-radio>
      </bm-field>
    </bm-section>
  `;
};

Example.args = { checked: false, disabled: false };

Example.argTypes = {
  checked: {
    control: {
      type: 'boolean',
    },
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
};
