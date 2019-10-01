import centered from '@storybook/addon-centered/html';
import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { boolean } from '@storybook/addon-knobs';

storiesOf('Components|Dropdown', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <div style="max-width:480px;">
        <b-dropdown
          is-active="${boolean('Active', false)}"
          is-hoverable="${boolean('Hoverable', false)}"
          is-right="${boolean('Right aligned', false)}"
          is-up="${boolean('Is UP?', false)}">

          <b-button slot="trigger" color="is-primary" size="is-medium">Dropdown button</b-button>

          <a href="#" class="dropdown-item">
            Dropdown item
          </a>
          <a class="dropdown-item">
            Other dropdown item
          </a>
          <a href="#" class="dropdown-item is-active">
            Active dropdown item
          </a>
          <a href="#" class="dropdown-item">
            Other dropdown item
          </a>
          <hr class="dropdown-divider" />
          <a href="#" class="dropdown-item">
            With a divider
          </a>
        </b-dropdown>
      </div>
    `;
  })
  .add('Content Type', () => {
    return `
      <div style="max-width:480px;">
        <b-dropdown
          is-active="${boolean('Active', false)}"
          is-hoverable="${boolean('Hoverable', false)}"
          is-right="${boolean('Right aligned', false)}"
          is-up="${boolean('Is UP?', false)}"
        >
          <b-button slot="trigger" color="is-primary" size="is-medium">Content</b-button>

          <div class="dropdown-item">
            <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
          </div>
          <hr class="dropdown-divider" />
          <div class="dropdown-item">
            <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
          </div>
          <hr class="dropdown-divider" />
          <a href="#" class="dropdown-item">
            This is a link
          </a>
        </b-dropdown>
      </div>
    `;
  });
