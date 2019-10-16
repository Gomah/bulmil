import { newSpecPage } from '@stencil/core/testing';
import { Tag } from '../tag';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Tag],
    html: `<bm-tag>Hello World.</bm-tag>`,
  });

  expect(page.root).toEqualHtml(`
    <bm-tag>
      <span class="tag">
        Hello World.
      </span>
    </bm-tag>
  `);
});
