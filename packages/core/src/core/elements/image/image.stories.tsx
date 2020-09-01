import { select } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Elements/Image',
  component: 'bm-image',
};

const sizes = {
  '16x16': 'is-16x16',
  '24x24': 'is-24x24',
  '32x32': 'is-32x32',
  '48x48': 'is-48x48',
  '64x64': 'is-64x64',
  '96x96': 'is-96x96',
  '128x128': 'is-128x128',
  none: null,
};

export const Sizes = (): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-image size="${select('Size', sizes, 'is-128x128')}">
        <img src="https://bulma.io/images/placeholders/128x128.png" />
      </bm-image>
    </bm-section>
  `;
};
