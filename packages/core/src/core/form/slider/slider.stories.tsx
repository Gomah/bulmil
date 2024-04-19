import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Form/Slider',
  component: 'bm-slider',
};

export const Example = (props): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-field>
        <bm-slider
          size="${props.size}"
          step="${props.step}"
          min="${props.min}"
          max="${props.max}"
          value="${props.value}"
          color="${props.color}"
          is-circle="${props.isCircle}"
          disabled="${props.disabled}"
        />
      </bm-field>
    </bm-section>
  `;
};

Example.args = {
  size: null,
  color: null,
  isCircle: false,
  disabled: false,
  step: 1,
  min: 0,
  max: 100,
  value: 50,
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

  isCircle: {
    control: {
      type: 'boolean',
    },
  },

  disabled: {
    control: {
      type: 'boolean',
    },
  },

  step: {
    control: 'number',
  },

  min: {
    control: 'number',
  },
  max: {
    control: 'number',
  },
  value: {
    control: 'number',
  },
};
