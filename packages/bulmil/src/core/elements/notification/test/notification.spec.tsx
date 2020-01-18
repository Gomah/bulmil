import { newSpecPage } from '@stencil/core/testing';
import { Notification } from '../notification';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Notification],
    html: `<bm-notification color="is-primary">
             Lorem ipsum dolor sit amet, consectetur
           </bm-notification>`,
  });

  expect(page.root).toEqualHtml(`
    <bm-notification color="is-primary">
      <div class="notification is-primary">
        <button class="delete"></button>
        Lorem ipsum dolor sit amet, consectetur
      </div>
    </bm-notification>
  `);
});
