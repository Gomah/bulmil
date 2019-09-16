import { newSpecPage } from '@stencil/core/testing';
import { Buttons } from '../buttons';
import { Button } from '../../button/button';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Buttons, Button],
    html: `<b-buttons>
             <b-button>Hello</b-button>
           </b-buttons>`,
  });

  expect(page.root).toEqualHtml(`
    <b-buttons>
      <div class="buttons">
        <b-button>
          <button class="button">
            Hello
          </button>
        </b-button>
      </div>
    </b-buttons>
  `);
});
