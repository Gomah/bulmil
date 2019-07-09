import { newSpecPage } from '@stencil/core/testing';
import { Image } from './image';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Image],
    html: `<b-image size="is-32x32">
             <img src="" />
           </b-image>`,
  });

  expect(page.root).toEqualHtml(`
    <b-image size="is-32x32">
      <figure class="image is-32x32">
        <img src="" />
      </figure>
    </b-image>
  `);
});
