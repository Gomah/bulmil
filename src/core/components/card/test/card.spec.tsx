import { newSpecPage } from '@stencil/core/testing';
import { Card } from '../card';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Card],
    html: `<bm-card>
             <p>Hello, I'm in a card</p>
           </bm-card>`,
  });

  expect(page.root).toEqualHtml(`
    <bm-card>
      <div class="card">
        <p>Hello, I'm in a card</p>
      </div>
    </bm-card>
  `);
});
