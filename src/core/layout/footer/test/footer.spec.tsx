import { newSpecPage } from '@stencil/core/testing';
import { Footer } from '../footer';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Footer],
    html: `<bm-footer>
             <p>Hello, I'm in a footer!</p>
           </bm-sec>`,
  });

  expect(page.root).toEqualHtml(`
    <bm-footer>
      <footer class="footer">
        <p>Hello, I'm in a footer!</p>
      </footer>
    </bm-footer>
  `);
});
