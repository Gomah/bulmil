import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Components/Breadcrumb',
  component: 'bm-breadcrumb',
};

export const Example = (props): TemplateResult => {
  return html`
    <bm-section>
      <bm-container>
        <bm-breadcrumb
          alignment="${props.alignment}"
          separator="${props.separator}"
          size="${props.size}"
        >
          <ul>
            <li><a href="#">Bulmil</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Components</a></li>
            <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
          </ul>
        </bm-breadcrumb>
      </bm-container>
    </bm-section>
  `;
};

Example.args = { alignment: null, size: null, separator: null };

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
  separator: {
    options: [
      'has-arrow-separator',
      'has-bullet-separator',
      'has-dot-separator',
      'has-succeeds-separator',
      null,
    ],
    control: {
      type: 'select',
    },
  },
};
