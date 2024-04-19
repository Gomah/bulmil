import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Form/Checkbox',
  component: 'bm-checkbox',
};

export const Example = (props): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-checkbox checked="${props.checked}" disabled="${props.disabled}">
        Remember me
      </bm-checkbox>
    </bm-section>
  `;
};

export const WithLinks = (props): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-checkbox checked="${props.checked}" disabled="${props.disabled}">
        I agree to the <a href="#">terms and conditions</a>
      </bm-checkbox>
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

WithLinks.args = { checked: false, disabled: false };

WithLinks.argTypes = {
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
