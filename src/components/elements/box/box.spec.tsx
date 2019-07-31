import { newSpecPage } from '@stencil/core/testing';
import { Box } from './box';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Box],
    html: `<b-box>
             <p>Hello, I'm in a box!</p>
           </b-box>`,
  });

  expect(page.root).toEqualHtml(`
    <b-box>
      <div class="box">
        <p>Hello, I'm in a box!</p>
      </div>
    </b-box>
  `);
});
