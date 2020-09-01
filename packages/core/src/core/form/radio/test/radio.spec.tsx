import { newSpecPage } from '@stencil/core/testing';
import { Radio } from '../radio';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Radio],
    html: `<bm-radio name="accept" checked>Yes</bm-radio> `,
  });

  expect(page.root).toEqualHtml(`
    <bm-radio name="accept" checked>
       <label class="radio">
         <input type="radio" name="accept" checked /> Yes
       </label>
    </bm-radio>
  `);
});
