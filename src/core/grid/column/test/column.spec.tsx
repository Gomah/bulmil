import { newSpecPage } from '@stencil/core/testing';
import { Column } from '../column';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Column],
    html: `<bm-column>
             Hello, I'm in a column!
           </bm-column>`,
  });

  expect(page.root).toEqualHtml(`
    <bm-column class="column">
      Hello, I'm in a column!
    </bm-column>
  `);
});
