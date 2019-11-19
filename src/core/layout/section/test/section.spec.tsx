import { newSpecPage } from '@stencil/core/testing';
import { Section } from '../section';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Section],
    html: `<bm-section size="is-large">
             <p>Hello, I'm in a section!</p>
           </bm-sec>`,
  });

  expect(page.root).toEqualHtml(`
    <bm-section size="is-large" class="section is-large">
      <p>Hello, I'm in a section!</p>
    </bm-section>
  `);
});
