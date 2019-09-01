import centered from '@storybook/addon-centered/html';
import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { boolean, select } from '@storybook/addon-knobs';
import { Container } from './container';

const breakpoints: { [key: string]: Container['breakpoint'] } = {
  widescreen: 'is-widescreen',
  fullhd: 'is-fullhd',
  none: null,
};

storiesOf('Layout|Container', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <b-container is-fluid=${boolean('Fluid', false)} breakpoint=${select(
      'Breakpoint',
      breakpoints,
      null
    )}>
        Hello Container 👋
      </b-container>
    `;
  });
