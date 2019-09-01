import { newSpecPage } from '@stencil/core/testing';
import { Icon } from '../icon';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Icon],
    html: `<b-icon size="is-large">
             <i class="fas fa-home"></i>
           </b-icon>`,
  });

  expect(page.root).toEqualHtml(`
    <b-icon size="is-large">
      <mock:shadow-root>
        <span class="icon is-large">
          <slot />
        </span>
      </mock:shadow-root>
      <i class="fas fa-home"></i>
    </b-icon>
  `);
});
