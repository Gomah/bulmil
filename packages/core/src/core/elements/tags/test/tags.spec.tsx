import { newSpecPage } from '@stencil/core/testing';
import { Tags } from '../tags';
import { Tag } from '../../tag/tag';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Tags, Tag],
    html: `<bm-tags has-addons>
             <bm-tag>Hello</bm-tag>
             <bm-tag>World</bm-tag>
           </bm-tags>`,
  });

  expect(page.root).toEqualHtml(`
    <bm-tags has-addons>
      <div class="tags has-addons">
        <bm-tag>
          <span class="tag">Hello</span>
        </bm-tag>
        <bm-tag>
          <span class="tag">World</span>
        </bm-tag>
      </div>
    </bm-tags>
  `);
});
