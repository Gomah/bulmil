import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Form/Textarea',
  component: 'bm-textarea',
};

export const Example = (props): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-field>
        <bm-textarea
          state="${props.state}"
          color="${props.color}"
          size="${props.size}"
          value="${props.value}"
          control-class="${props.controlClass}"
          is-loading="${props.isLoading}"
          disabled="${props.disabled}"
          readonly="${props.readonly}"
          has-fixed-size="${props.hasFixedSize}"
        >
        </bm-textarea>
      </bm-field>
    </bm-section>
  `;
};

Example.args = {
  state: null,
  color: null,
  size: null,
  value: 'Textarea 🤘',
  controlClass: '',
  isLoading: false,
  disabled: false,
  readonly: false,
  hasFixedSize: false,
};

Example.argTypes = {
  state: {
    options: ['is-hovered', 'is-focused', null],
    control: {
      type: 'select',
    },
  },

  color: {
    options: ['is-primary', 'is-info', 'is-success', 'is-danger', 'is-warning', null],
    control: {
      type: 'select',
    },
  },

  size: {
    options: ['is-small', 'is-normal', 'is-medium', 'is-large', null],
    control: {
      type: 'select',
    },
  },

  value: {
    control: 'text',
  },

  controlClass: {
    control: 'text',
  },

  isLoading: {
    control: 'boolean',
  },

  disabled: {
    control: 'boolean',
  },

  readonly: {
    control: 'boolean',
  },

  hasFixedSize: {
    control: 'boolean',
  },
};
