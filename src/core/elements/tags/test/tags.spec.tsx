import { newSpecPage } from '@stencil/core/testing';
import { Tags } from '../tags';
import { Tag } from '../../tag/tag';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Tags, Tag],
    html: `<b-tags has-addons>
             <b-tag>Hello</b-tag>
             <b-tag>World</b-tag>
           </b-tags>`,
  });

  expect(page.root).toEqualHtml(`
    <b-tags has-addons>
      <div class="tags has-addons">
        <b-tag>
          <span class="tag">Hello</span>
        </b-tag>
        <b-tag>
          <span class="tag">World</span>
        </b-tag>
      </div>
    </b-tags>
  `);
});
