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
    <b-buttons class="buttons">
      <b-button>
        <mock:shadow-root>
          <button class="button">
            <slot />
          </button>
        </mock:shadow-root>
        Hello
      </b-button>
    </b-buttons>
  `);
});
