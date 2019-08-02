import { newSpecPage } from '@stencil/core/testing';
import { Checkbox } from './checkbox';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Checkbox],
    html: `<b-checkbox checked></b-checkbox>`,
  });

  expect(page.root).toEqualHtml(`
    <b-checkbox checked>
      <label class="checkbox">
        <input type="checkbox" checked />
      </label>
    </b-checkbox>
  `);
});
