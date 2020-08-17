import { boolean, select } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Layout/Container',
  component: 'bm-container',
};

const breakpoints = {
  widescreen: 'is-widescreen',
  fullhd: 'is-fullhd',
  none: null,
};

export const Example = (): TemplateResult => {
  return html`
    <bm-container
      class="story-center"
      is-fluid=${boolean('Fluid', false)}
      breakpoint=${select('Breakpoint', breakpoints, null)}
    >
      Hello Container 👋
    </bm-container>
  `;
};
