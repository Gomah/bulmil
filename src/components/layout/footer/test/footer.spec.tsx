import { newSpecPage } from '@stencil/core/testing';
import { Footer } from '../footer';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Footer],
    html: `<b-footer>
             <p>Hello, I'm in a footer!</p>
           </b-sec>`,
  });

  expect(page.root).toEqualHtml(`
    <b-footer>
      <mock:shadow-root>
        <footer class="footer">
          <slot />
        </footer>
      </mock:shadow-root>
      <p>Hello, I'm in a footer!</p>
    </b-footer>
  `);
});
