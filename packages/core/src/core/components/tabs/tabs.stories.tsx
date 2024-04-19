import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Components/Tabs',
  component: 'bm-tabs',
};

export const Example = (props): TemplateResult => {
  return html`
    <bm-section>
      <bm-container>
        <bm-tabs
          is-rounded=${props.isRounded}
          is-fullwidth=${props.isFullWidth}
          tab-style=${props.tabStyle}
          alignment=${props.alignment}
          size=${props.size}
        >
          <ul>
            <li class="is-active">
              <a>Pictures</a>
            </li>
            <li>
              <a>Music</a>
            </li>
            <li>
              <a>Videos</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
          </ul>
        </bm-tabs>
      </bm-container>
    </bm-section>
  `;
};

Example.args = {
  size: null,
  isRounded: false,
  isFullWidth: false,
  alignment: null,
  tabStyle: null,
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

  tabStyle: {
    options: ['is-boxed', 'is-toggle', null],
    control: {
      type: 'select',
    },
  },

  isRounded: {
    control: {
      type: 'boolean',
    },
  },

  isFullWidth: {
    control: {
      type: 'boolean',
    },
  },
};
