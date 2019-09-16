import { newSpecPage } from '@stencil/core/testing';
import { Tabs } from '../tabs';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Tabs],
    html: `<b-tabs>
           </b-tabs>`,
  });

  expect(page.root).toEqualHtml(`
    <b-tabs>
      <div class="tabs">
        <ul>
          <li class="is-active">
            <a>Pictures</a>
          </li>
          <li>
            <a>Music</a>
          </li>
          <li>
            <a>Videos</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
        </ul>
      </div>
    </b-tabs>
  `);
});
