import { newSpecPage } from '@stencil/core/testing';
import { Input } from '../input';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Input],
    html: `<bm-input type="email"></bm-input>`,
  });

  expect(page.root).toEqualHtml(`
    <bm-input type="email">
      <div class="control">
        <input class="input" type="email">
      </div>
    </bm-input>
  `);

  expect(page.root.type).toBe('email');
});
