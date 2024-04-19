import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Elements/Image',
  component: 'bm-image',
};

export const Sizes = (props): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-image size="${props.size}">
        <img src="https://bulma.io/images/placeholders/128x128.png" />
      </bm-image>
    </bm-section>
  `;
};

Sizes.args = { size: null };

Sizes.argTypes = {
  size: {
    options: [
      'is-16x16',
      'is-24x24',
      'is-32x32',
      'is-48x48',
      'is-64x64',
      'is-96x96',
      'is-128x128',
      null,
    ],
    control: {
      type: 'select',
    },
  },
};
