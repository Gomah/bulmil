import { configure, addDecorator, addParameters } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withNotes } from '@storybook/addon-notes';
import { bulmilTheme } from './bulmil-theme';

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withNotes);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  options: {
    theme: bulmilTheme,
  },
});

const req = require.context('../src', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
