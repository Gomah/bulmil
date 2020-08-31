import { newSpecPage } from '@stencil/core/testing';
import { Dropdown } from '../dropdown';
import { Button } from '../../../elements/button/button';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Dropdown, Button],
    html: `
      <bm-dropdown>
        <bm-button slot="trigger">Trigger</bm-button>

        <a href="#" class="dropdown-item">
          Dropdown item
        </a>
      </bm-dropdown>
    `,
  });

  expect(page.root).toEqualHtml(`
    <bm-dropdown>
      <div class="dropdown">
        <div class="dropdown-trigger">
          <bm-button slot="trigger">
            <button class="button">
              Trigger
            </button>
          </bm-button>
        </div>

        <div class="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a href="#" class="dropdown-item">
              Dropdown item
            </a>
          </div>
        </div>
      </div>
    </bm-dropdown>
  `);
});
