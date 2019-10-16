import { newSpecPage } from '@stencil/core/testing';
import { Tabs } from '../tabs';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Tabs],
    html: `
      <bm-tabs>
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
      </bm-tabs>
    `,
  });

  expect(page.root).toEqualHtml(`
    <bm-tabs>
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
    </bm-tabs>
  `);
});
