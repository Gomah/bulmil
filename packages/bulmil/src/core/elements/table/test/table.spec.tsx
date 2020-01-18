import { newSpecPage } from '@stencil/core/testing';
import { Table } from '../table';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Table],
    html: `
      <bm-table is-striped></bm-table>
    `,
  });

  expect(page.root).toEqualHtml(`
    <bm-table is-striped>
      <table class="table is-striped"></table>
    </bm-table>
  `);
});
