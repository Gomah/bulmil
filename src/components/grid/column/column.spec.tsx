import { newSpecPage } from '@stencil/core/testing';
import { Column } from './column';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Column],
    html: `<b-column>
             Hello, I'm in a column!
           </b-column>`,
  });

  expect(page.root).toEqualHtml(`
    <b-column>
      <div class="column">
        Hello, I'm in a column!
      </div>
    </b-column>
  `);
});
