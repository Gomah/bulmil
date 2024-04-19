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

export const Example = (props): TemplateResult => {
  return html`
    <bm-container class="story-center" is-fluid=${props.isFluid} breakpoint=${props.breakpoint}>
      Hello Container 👋
    </bm-container>
  `;
};

Example.args = {
  isFluid: false,
  breakpoint: null,
};

Example.argTypes = {
  breakpoint: {
    options: ['is-widescreen', 'is-fullhd', null],
    control: {
      type: 'select',
    },
  },

  isFluid: {
    control: 'boolean',
  },
};
