import { newSpecPage } from '@stencil/core/testing';
import { Notification } from '../notification';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Notification],
    html: `<b-notification color="is-primary">
             Lorem ipsum dolor sit amet, consectetur
           </b-notification>`,
  });

  expect(page.root).toEqualHtml(`
    <b-notification color="is-primary">
      <div class="notification is-primary">
        <button class="delete"></button>
        Lorem ipsum dolor sit amet, consectetur
      </div>
    </b-notification>
  `);
});
