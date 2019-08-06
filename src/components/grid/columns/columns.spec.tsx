import { newSpecPage } from '@stencil/core/testing';
import { Columns } from './columns';
import { Column } from '../column/column';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Columns, Column],
    html: `<b-columns>
             <b-column>Hello, I'm in a column!</b-column>
           </b-columns>`,
  });

  expect(page.root).toEqualHtml(`
    <b-columns>
      <div class="columns">
        <b-column>
          <div class="column">
            Hello, I'm in a column!
          </div>
        </b-column>
      </div>
    </b-columns>
  `);
});
