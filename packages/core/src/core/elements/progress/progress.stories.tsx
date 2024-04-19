import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Elements/Progress',
  component: 'bm-progress',
};

export const Example = (props): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-container>
        <bm-progress
          color="${props.color}"
          size="${props.size}"
          max="${props.max}"
          value="${props.value}"
        >
        </bm-progress>
      </bm-container>
    </bm-section>
  `;
};

Example.args = { color: null, size: null, max: 100, value: null };

Example.argTypes = {
  color: {
    options: ['is-primary', 'is-link', 'is-info', 'is-success', 'is-warning', 'is-danger', null],
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
  max: {
    control: {
      type: 'number',
    },
  },
  value: {
    control: {
      type: 'number',
    },
  },
};
