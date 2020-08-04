import { newSpecPage } from '@stencil/core/testing';
import { Badge } from '../badge';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Badge],
    html: `<bm-badge>Hello</bm-badge>`,
    supportsShadowDom: true,
  });

  expect(page.root).toEqualHtml(`
    <bm-badge>
      <span class="badge">
        Hello
      </button>
    </bm-badge>
  `);
});
