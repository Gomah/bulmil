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
        <slot-fb name="pagination-previous">
          <a class="pagination-previous">Previous</a>
        </slot-fb>
        <slot-fb name="pagination-next">
          <a class="pagination-next">Next page</a>
        </slot-fb>

        <ul class="pagination-list">
          <li>
            <a class="pagination-link" aria-label="Goto page 1">
              1
            </a>
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 45">
              45
            </a>
          </li>
          <li>
            <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">
              46
            </a>
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 47">
              47
            </a>
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 86">
              86
            </a>
          </li>
        </ul>
      </nav>
    </b-pagination>
  `);
});
