import centered from '@storybook/addon-centered/html';
import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { select } from '@storybook/addon-knobs';
import { Section } from './section';

const sizes: { [key: string]: Section['size'] } = {
  medium: 'is-medium',
  large: 'is-large',
  none: null,
};

storiesOf('Layout|Section', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Sizes', () => {
    return `
      <b-section size="${select('Size', sizes, null)}">
        <div class="container">
          <h1 class="title">Section</h1>
          <h2 class="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like the one
            you're currently reading
          </h2>
        </div>
      </b-section>
    `;
  });
