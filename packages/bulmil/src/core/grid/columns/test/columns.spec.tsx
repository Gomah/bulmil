import { newSpecPage } from '@stencil/core/testing';
import { Columns } from '../columns';
import { Column } from '../../column/column';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Columns, Column],
    html: `<bm-columns>
             <bm-column>Hello, I'm in a column!</bm-column>
           </bm-columns>`,
  });

  expect(page.root).toEqualHtml(`
    <bm-columns class="columns">
      <bm-column  class="column">
        Hello, I'm in a column!
      </bm-column>
    </bm-columns>
  `);
});
