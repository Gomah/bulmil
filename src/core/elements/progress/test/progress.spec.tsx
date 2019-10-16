import { newSpecPage } from '@stencil/core/testing';
import { Progress } from '../progress';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Progress],
    html: `<bm-progress value="50"></bm-progress>`,
  });

  expect(page.root).toEqualHtml(`
    <bm-progress value="50">
      <progress class="progress" value="50" max="100">50%</progress>
    </bm-progress>
  `);
});
