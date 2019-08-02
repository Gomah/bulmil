import { newSpecPage } from '@stencil/core/testing';
import { Radio } from './radio';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Radio],
    html: `<b-radio name="accept" checked>Yes</b-radio> `,
  });

  expect(page.root).toEqualHtml(`
    <b-radio name="accept" checked>
       <label class="radio">
         <input type="radio" name="accept" checked /> Yes
       </label>
    </b-radio>
  `);
});
