import { newSpecPage } from '@stencil/core/testing';
import { Section } from './footer';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Section],
    html: `<b-footer>
             <p>Hello, I'm in a footer!</p>
           </b-sec>`,
  });

  expect(page.root).toEqualHtml(`
    <b-footer>
      <footer class="footer">
        <p>Hello, I'm in a footer!</p>
      </footer>
    </b-footer>
  `);
});
