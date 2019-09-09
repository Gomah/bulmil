import { newSpecPage } from '@stencil/core/testing';
import { Container } from '../container';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Container],
    html: `<b-container is-fluid>
             <p>Hello, I'm in a container!</p>
           </b-container>`,
  });

  expect(page.root).toEqualHtml(`
    <b-container is-fluid>
      <div class="container is-fluid">
        <p>Hello, I'm in a container!</p>
      </div>
    </b-container>
  `);
});
