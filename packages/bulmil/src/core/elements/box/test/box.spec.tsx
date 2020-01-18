import { newSpecPage } from '@stencil/core/testing';
import { Box } from '../box';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Box],
    html: `
      <bm-box>
        <p>Hello, I'm in a box!</p>
      </bm-box>
    `,
  });

  expect(page.root).toEqualHtml(`
    <bm-box>
      <div class="box">
        <p>Hello, I'm in a box!</p>
      </div>
    </bm-box>
  `);
});
