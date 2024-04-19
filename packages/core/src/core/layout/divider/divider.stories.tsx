import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Layout/Divider',
  component: 'bm-divider',
};

export const Example = (props): TemplateResult => {
  return html`
    <bm-section>
      <bm-container>
        <bm-divider
          alignment="${props.alignment}"
          color="${props.color}"
          is-light="${props.isLight}"
          is-vertical="${props.isVertical}"
        >
          ${props.slot}
        </bm-divider>
      </bm-container>
    </bm-section>
  `;
};

Example.args = { alignment: null, color: null, isLight: false, isVertical: false, slot: 'OR' };

Example.argTypes = {
  alignment: {
    options: ['is-left', 'is-right', null],
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

  isLight: {
    control: {
      type: 'boolean',
    },
  },

  isVertical: {
    control: {
      type: 'boolean',
    },
  },

  slot: {
    control: 'text',
  },
};
