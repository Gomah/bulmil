import { html, TemplateResult } from 'lit-html';
export default {
  title: 'Elements/Button',
  component: 'bm-button',
};

export const Example = (props): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-button
        size="${props.size}"
        color="${props.color}"
        is-light="${props.isLight}"
        is-outlined="${props.isOutlined}"
        disabled="${props.disabled}"
      >
        Button
      </bm-button>
    </bm-section>
  `;
};

Example.args = { size: null, color: null, isLight: false, isOutlined: false, disabled: false };

Example.argTypes = {
  size: {
    options: ['is-small', 'is-normal', 'is-medium', 'is-large', null],
    control: {
      type: 'select',
    },
  },

  color: {
    options: [
      'is-primary',
      'is-link',
      'is-info',
      'is-success',
      'is-danger',
      'is-warning',
      'is-white',
      'is-light',
      'is-dark',
      'is-black',
      'is-text',
      'is-ghost',
      null,
    ],
    control: {
      type: 'select',
    },
  },

  disabled: {
    control: {
      type: 'boolean',
    },
  },

  isLight: {
    control: {
      type: 'boolean',
    },
  },

  isOutlined: {
    control: {
      type: 'boolean',
    },
  },
};
