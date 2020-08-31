import { boolean } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Components/Dropdown',
  component: 'bm-dropdown',
};

export const Example = (): TemplateResult => {
  return html`
    <div class="story-center">
      <bm-dropdown
        is-active="${boolean('Active', false)}"
        is-hoverable="${boolean('Hoverable', false)}"
        is-right="${boolean('Right aligned', false)}"
        is-up="${boolean('Is UP?', false)}"
      >
        <bm-button slot="trigger" color="is-primary" size="is-medium">Dropdown button</bm-button>

        <a href="#" class="dropdown-item"> Dropdown item </a>
        <a class="dropdown-item"> Other dropdown item </a>
        <a href="#" class="dropdown-item is-active"> Active dropdown item </a>
        <a href="#" class="dropdown-item"> Other dropdown item </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item"> With a divider </a>
      </bm-dropdown>
    </div>
  `;
};

export const ContentType = (): TemplateResult => {
  return html`
    <div class="story-center">
      <bm-dropdown
        is-active="${boolean('Active', false)}"
        is-hoverable="${boolean('Hoverable', false)}"
        is-right="${boolean('Right aligned', false)}"
        is-up="${boolean('Is UP?', false)}"
      >
        <bm-button slot="trigger" color="is-primary" size="is-medium">Content</bm-button>

        <div class="dropdown-item">
          <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
        </div>
        <hr class="dropdown-divider" />
        <div class="dropdown-item">
          <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
        </div>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item"> This is a link </a>
      </bm-dropdown>
    </div>
  `;
};
