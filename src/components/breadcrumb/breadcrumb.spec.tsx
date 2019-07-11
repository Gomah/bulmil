import { newSpecPage } from '@stencil/core/testing';
import { Breadcrumb } from './breadcrumb';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Breadcrumb],
    html: `<b-breadcrumb>
             <p>Hello, I'm in a breadcrumb!</p>
           </b-br>`,
  });

  expect(page.root).toEqualHtml(`
    <b-breadcrumb>
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <p>Hello, I'm in a breadcrumb!</p>
      </nav>
    </b-breadcrumb>
  `);
});
