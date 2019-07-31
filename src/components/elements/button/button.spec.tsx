import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Button],
    html: `<b-button>Hello</b-button>`,
  });

  expect(page.root).toEqualHtml(`
    <b-button>
      <button class="button">Hello</button>
    </b-button>
  `);

  expect(page.root.disabled).toBe(false);
});
