import { newSpecPage } from '@stencil/core/testing';
import { Buttons } from '../buttons';
import { Button } from '../../button/button';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Buttons, Button],
    html: `<bm-buttons>
             <bm-button>Hello</bm-button>
           </bm-buttons>`,
  });

  expect(page.root).toEqualHtml(`
    <bm-buttons>
      <div class="buttons">
        <bm-button>
          <button class="button">
            Hello
          </button>
        </bm-button>
      </div>
    </bm-buttons>
  `);
});
