import { newSpecPage } from '@stencil/core/testing';
import { Section } from '../section';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Section],
    html: `<b-section size="is-large">
             <p>Hello, I'm in a section!</p>
           </b-sec>`,
  });

  expect(page.root).toEqualHtml(`
    <b-section size="is-large">
      <mock:shadow-root>
        <div class="section is-large">
          <slot />
        </div>
      </mock:shadow-root>
      <p>Hello, I'm in a section!</p>
    </b-section>
  `);
});
