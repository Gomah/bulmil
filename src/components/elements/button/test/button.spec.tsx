import { newSpecPage } from '@stencil/core/testing';
import { Button } from '../button';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Button],
    html: `<b-button>Hello</b-button>`,
    supportsShadowDom: true,
  });

  expect(page.root).toEqualHtml(`
    <b-button>
      <mock:shadow-root>
        <button class="button">
          <slot/>
        </button>
      </mock:shadow-root>
      Hello
    </b-button>
  `);

  expect(page.root.disabled).toBe(false);
});
