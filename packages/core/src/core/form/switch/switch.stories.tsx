import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Form/Switch',
  component: 'bm-switch',
};

export const Example = (props): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-field>
        <bm-switch
          checked="${props.checked}"
          size="${props.size}"
          color="${props.color}"
          is-rounded="${props.isRounded}"
          is-thin="${props.isThin}"
          is-outlined="${props.isOutlined}"
          disabled="${props.disabled}"
          >Example</bm-switch
        >
      </bm-field>
    </bm-section>
  `;
};

Example.args = {
  checked: false,
  size: null,
  color: null,
  isRounded: false,
  isThin: false,
  isOutlined: false,
  disabled: false,
};

Example.argTypes = {
  size: {
    options: ['is-small', 'is-medium', 'is-large', null],
    control: {
      type: 'select',
    },
  },

  color: {
    options: ['is-info', 'is-success', 'is-danger', 'is-warning', null],
    control: {
      type: 'select',
    },
  },

  checked: {
    control: {
      type: 'boolean',
    },
  },

  isRounded: {
    control: {
      type: 'boolean',
    },
  },

  isThin: {
    control: {
      type: 'boolean',
    },
  },

  isOutlined: {
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
