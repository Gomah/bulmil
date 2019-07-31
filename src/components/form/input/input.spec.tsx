import { newSpecPage } from '@stencil/core/testing';
import { Input } from './input';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Input],
    html: `<b-input type="email"></b-input>`,
  });

  expect(page.root).toEqualHtml(`
    <b-input type="email">
      <div class="control">
        <input class="input" type="email">
      </div>
    </b-input>
  `);

  expect(page.root.type).toBe('email');
});
