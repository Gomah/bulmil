import { newSpecPage } from '@stencil/core/testing';
import { Card } from '../card';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Card],
    html: `<b-card>
             <p>Hello, I'm in a card</p>
           </b-card>`,
  });

  expect(page.root).toEqualHtml(`
    <b-card>
      <div class="card">
        <p>Hello, I'm in a card</p>
      </div>
    </b-card>
  `);
});
