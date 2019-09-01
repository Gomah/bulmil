import { newSpecPage } from '@stencil/core/testing';
import { Select } from '../select';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Select],
    html: `<b-select></b-select>`,
  });

  expect(page.root).toEqualHtml(`
    <b-select>
      <div class="control">
        <div class="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
    </b-select>
  `);
});
