import { newSpecPage } from '@stencil/core/testing';
import { Tag } from '../tag';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Tag],
    html: `<b-tag>Hello World.</b-tag>`,
  });

  expect(page.root).toEqualHtml(`
    <b-tag>
      <span class="tag">
        Hello World.
      </span>
    </b-tag>
  `);
});
