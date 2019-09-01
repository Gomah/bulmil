import { newSpecPage } from '@stencil/core/testing';
import { Content } from '../content';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Content],
    html: `<b-content size="is-large">
             <h2>Hello</h2>
           </b-content>`,
  });

  expect(page.root).toEqualHtml(`
    <b-content size="is-large">
      <mock:shadow-root>
        <div class="content is-large">
          <slot />
        </div>
      </mock:shadow-root>
      <h2>Hello</h2>
    </b-content>
  `);
});
