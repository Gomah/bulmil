import { newSpecPage } from '@stencil/core/testing';
import { Textarea } from './textarea';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Textarea],
    html: `<b-textarea value="Hello World"></b-textarea>`,
  });

  expect(page.root).toEqualHtml(`
    <b-textarea value="Hello World">
      <div class="control">
        <textarea class="textarea">Hello World</textarea>
      </div>
    </b-input>
  `);
});
