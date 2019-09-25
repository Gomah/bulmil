import { newSpecPage } from '@stencil/core/testing';
import { Dropdown } from '../dropdown';
import { Button } from '../../../elements/button/button';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Dropdown, Button],
    html: `
      <b-dropdown>
        <b-button slot="trigger">Trigger</b-button>

        <a href="#" class="dropdown-item">
          Dropdown item
        </a>
      </b-dropdown>
    `,
  });

  expect(page.root).toEqualHtml(`
    <b-dropdown>
      <div class="dropdown">
        <div class="dropdown-trigger">
          <b-button slot="trigger">
            <button class="button">
              Trigger
            </button>
          </b-button>
        </div>

        <div class="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a href="#" class="dropdown-item">
              Dropdown item
            </a>
          </div>
        </div>
      </div>
    </b-dropdown>
  `);
});
