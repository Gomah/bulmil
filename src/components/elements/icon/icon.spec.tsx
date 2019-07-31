import { newSpecPage } from '@stencil/core/testing';
import { Icon } from './icon';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Icon],
    html: `<b-icon size="is-large">
             <i class="fas fa-home"></i>
           </b-icon>`,
  });

  expect(page.root).toEqualHtml(`
    <b-icon size="is-large">
      <span class="icon is-large">
        <i class="fas fa-home"></i>
      </span>
    </b-icon>
  `);
});
