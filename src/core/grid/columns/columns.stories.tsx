import centered from '@storybook/addon-centered/html';
import notes from './readme.md';
import { storiesOf } from '@storybook/html';

storiesOf('Grid|Columns', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Basics', () => {
    return `
      <b-columns>
        <b-column>
          First column
        </b-column>
        <b-column>
          Second column
        </b-column>
        <b-column>
          Third column
        </b-column>
        <b-column>
          Fourth column
        </b-column>
      </b-columns>
    `;
  });
