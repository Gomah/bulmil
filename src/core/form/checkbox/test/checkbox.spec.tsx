import { newSpecPage } from '@stencil/core/testing';
import { Checkbox } from '../checkbox';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Checkbox],
    html: `<bm-checkbox checked></bm-checkbox>`,
  });

  expect(page.root).toEqualHtml(`
    <bm-checkbox checked>
      <label class="checkbox">
        <input type="checkbox" checked />
      </label>
    </bm-checkbox>
  `);
});
