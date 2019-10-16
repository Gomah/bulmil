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
      <bm-columns>
        <bm-column>
          First column
        </bm-column>
        <bm-column>
          Second column
        </bm-column>
        <bm-column>
          Third column
        </bm-column>
        <bm-column>
          Fourth column
        </bm-column>
      </bm-columns>
    `;
  });
