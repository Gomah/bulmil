import { newSpecPage } from '@stencil/core/testing';
import { Content } from '../content';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Content],
    html: `<bm-content size="is-large">
             <h2>Hello</h2>
           </bm-content>`,
  });

  expect(page.root).toEqualHtml(`
    <bm-content size="is-large">
      <div class="content is-large">
        <h2>Hello</h2>
      </div>
    </bm-content>
  `);
});
