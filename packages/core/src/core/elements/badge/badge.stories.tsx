import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Elements/Badge',
  component: 'bm-badge',
};

export const Example = (props): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-button size="is-large">
        <bm-badge
          color="${props.color}"
          position="${props.position}"
          is-light=${props.isLight}
          is-outlined=${props.isOutlined}
        >
          3
        </bm-badge>
        Test
      </bm-button>
    </bm-section>
  `;
};

Example.args = { position: null, isLight: false, color: null, isOutlined: false };

Example.argTypes = {
  color: {
    options: [
      'is-primary',
      'is-info',
      'is-success',
      'is-danger',
      'is-warning',
      'is-white',
      'is-dark',
      'is-black',
      null,
    ],
    control: {
      type: 'select',
    },
  },

  position: {
    options: [
      'is-top-left',
      'is-top',
      'is-top-right',
      'is-right',
      'is-bottom-right',
      'is-bottom',
      'is-bottom-left',
      'is-left',
      null,
    ],
    control: {
      type: 'select',
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
