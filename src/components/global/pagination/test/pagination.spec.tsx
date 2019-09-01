import { newSpecPage } from '@stencil/core/testing';
import { Pagination } from '../pagination';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Pagination],
    html: `<b-pagination>
           </b-pagination>`,
  });

  expect(page.root).toEqualHtml(`
    <b-pagination>
      <nav class="pagination" role="navigation" aria-label="pagination">
        <slot-fb name="pagination-navigation">
          <a class="pagination-previous">Previous</a>
          <a class="pagination-next">Next page</a>
        </slot-fb>
      </nav>
    </b-pagination>
  `);
});
