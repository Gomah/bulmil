import { newSpecPage } from '@stencil/core/testing';
import { Breadcrumb } from '../breadcrumb';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Breadcrumb],
    html: `<bm-breadcrumb>
             <p>Hello, I'm in a breadcrumb!</p>
           </bm-br>`,
  });

  expect(page.root).toEqualHtml(`
    <bm-breadcrumb>
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <p>Hello, I'm in a breadcrumb!</p>
      </nav>
    </bm-breadcrumb>
  `);
});
