import { newSpecPage } from '@stencil/core/testing';
import { Textarea } from '../textarea';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Textarea],
    html: `<bm-textarea value="Hello World"></bm-textarea>`,
  });

  expect(page.root).toEqualHtml(`
    <bm-textarea value="Hello World">
      <div class="control">
        <textarea class="textarea">Hello World</textarea>
      </div>
    </bm-textarea>
  `);
});
