import { newSpecPage } from '@stencil/core/testing';
import { Table } from '../table';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Table],
    html: `<b-table is-striped></b-table>`,
  });

  expect(page.root).toEqualHtml(`
    <b-table is-striped>
      <table class="table is-striped">
        <thead>
          <tr>
            <th>Tr Head</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>Tr Body</th>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <th>Tr Foot</th>
          </tr>
        </tfoot>
      </table>
    </b-table>
  `);
});
