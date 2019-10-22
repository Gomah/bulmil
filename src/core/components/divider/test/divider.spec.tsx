import { newSpecPage } from '@stencil/core/testing';
import { Divider } from '../divider';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Divider],
    html: `<bm-divider content="OR">
           </bm-divider>`,
  });

  expect(page.root).toEqualHtml(`
    <bm-divider class="is-divider" content="OR" data-content="OR"></bm-divider>
  `);
});
