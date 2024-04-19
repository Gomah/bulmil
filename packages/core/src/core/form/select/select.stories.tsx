import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Form/Select',
  component: 'bm-select',
};

export const Example = (props): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-field>
        <bm-select
          state="${props.state}"
          size="${props.size}"
          color="${props.color}"
          is-rounded="${props.isRounded}"
          is-loading="${props.isLoading}"
          is-multiple="${props.isMultiple}"
          icon="${props.icon}"
          value="${props.value}"
        >
          <option value="dropdown">Select dropdown</option>
          <option value="options">With options</option>
        </bm-select>
      </bm-field>
    </bm-section>
  `;
};

Example.args = {
  value: '',
  icon: '',
  isMultiple: false,
  isLoading: false,
  isRounded: false,
  state: null,
  size: null,
  color: null,
};

Example.argTypes = {
  size: {
    options: ['is-small', 'is-normal', 'is-medium', 'is-large', null],
    control: {
      type: 'select',
    },
  },

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

  isMultiple: {
    control: {
      type: 'boolean',
    },
  },

  isLoading: {
    control: {
      type: 'boolean',
    },
  },

  isRounded: {
    control: {
      type: 'boolean',
    },
  },

  value: {
    control: 'text',
  },
  icon: {
    control: 'text',
  },
};
