import { newSpecPage } from '@stencil/core/testing';
import { Button } from '../button';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Button],
    html: `<bm-button>Hello</bm-button>`,
    supportsShadowDom: true,
  });

  expect(page.root).toEqualHtml(`
    <bm-button>
      <button class="button">
        Hello
      </button>
    </bm-button>
  `);

  expect(page.root.disabled).toBe(false);
});
