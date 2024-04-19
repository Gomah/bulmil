import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Form/File',
  component: 'bm-file',
};

export const Example = (props): TemplateResult => {
  return html`
    <bm-section>
      <bm-container>
        <bm-field>
          <bm-file
            name="example"
            placeholder="${props.placeholder}"
            color="${props.color}"
            size="${props.size}"
            alignment="${props.alignment}"
            is-right="${props.isRight}"
            is-fullwidth="${props.isFullWidth}"
            is-boxed="${props.isBoxed}"
            has-name="${props.hasName}"
          >
          </bm-file>
        </bm-field>
      </bm-container>
    </bm-section>
  `;
};

Example.args = {
  placeholder: 'Choose a file...',
  alignment: null,
  size: null,
  color: null,
  isRight: false,
  isFullWidth: false,
  isBoxed: false,
  hasName: false,
};

Example.argTypes = {
  alignment: {
    options: ['is-centered', 'is-right', null],
    control: {
      type: 'select',
    },
  },
  size: {
    options: ['is-small', 'is-medium', 'is-large', null],
    control: {
      type: 'select',
    },
  },
  color: {
    options: [
      'is-white',
      'is-black',
      'is-light',
      'is-dark',
      'is-primary',
      'is-link',
      'is-info',
      'is-success',
      'is-warning',
      'is-danger',
      null,
    ],
    control: {
      type: 'select',
    },
  },

  placeholder: {
    control: 'text',
  },

  isRight: {
    control: {
      type: 'boolean',
    },
  },

  isFullWidth: {
    control: {
      type: 'boolean',
    },
  },

  isBoxed: {
    control: {
      type: 'boolean',
    },
  },

  hasName: {
    control: {
      type: 'boolean',
    },
  },
};
