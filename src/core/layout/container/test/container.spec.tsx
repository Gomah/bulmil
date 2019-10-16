import { newSpecPage } from '@stencil/core/testing';
import { Container } from '../container';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Container],
    html: `<bm-container is-fluid>
             <p>Hello, I'm in a container!</p>
           </bm-container>`,
  });

  expect(page.root).toEqualHtml(`
    <bm-container is-fluid>
      <div class="container is-fluid">
        <p>Hello, I'm in a container!</p>
      </div>
    </bm-container>
  `);
});
