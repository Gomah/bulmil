import {
  configure,
  addDecorator,
  setCustomElements,
  addParameters,
} from '@storybook/web-components';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { bulmilTheme } from './bulmil-theme';

import customElements from '../packages/bulmil/dist/docs/custom-elements.json';

setCustomElements(customElements);

addDecorator(withKnobs);
addDecorator(withA11y);

addParameters({
  docs: {
    inlineStories: false,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  options: {
    theme: bulmilTheme,
  },
});

const req = require.context('../packages/bulmil/src', true, /.stories.(tsx|mdx)$/);

configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
