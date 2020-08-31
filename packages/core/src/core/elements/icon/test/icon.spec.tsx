import { newSpecPage } from '@stencil/core/testing';
import { Icon } from '../icon';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Icon],
    html: `<bm-icon size="is-large">
             <i class="fas fa-home"></i>
           </bm-icon>`,
  });

  expect(page.root).toEqualHtml(`
    <bm-icon size="is-large">
      <span class="icon is-large">
        <i class="fas fa-home"></i>
      </span>
    </bm-icon>
  `);
});
