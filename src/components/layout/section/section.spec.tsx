import { newSpecPage } from '@stencil/core/testing';
import { Section } from './section';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Section],
    html: `<b-section size="is-large">
             <p>Hello, I'm in a section!</p>
           </b-sec>`,
  });

  expect(page.root).toEqualHtml(`
    <b-section size="is-large">
      <div class="section is-large">
        <p>Hello, I'm in a section!</p>
      </div>
    </b-section>
  `);
});
