import { newSpecPage } from '@stencil/core/testing';
import { Select } from '../select';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Select],
    html: `
      <bm-select>
        <option>Select dropdown</option>
        <option>With options</option>
      </bm-select>
    `,
  });

  expect(page.root).toEqualHtml(`
    <bm-select>
      <div class="control">
        <div class="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
    </bm-select>
  `);
});
