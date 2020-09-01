import { newSpecPage } from '@stencil/core/testing';
import { Divider } from '../divider';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Divider],
    html: `<bm-divider>OR</bm-divider>`,
  });

  expect(page.root).toEqualHtml(`
    <bm-divider class="divider">OR</bm-divider>
  `);
});
