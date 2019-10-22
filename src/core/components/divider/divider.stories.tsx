import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { select, text } from '@storybook/addon-knobs';

const orientations = {
  'horizontal': 'is-horizontal',
  'vertical': 'is-vertical',
};


storiesOf('Components|Divider', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <bm-section>
        <bm-container>
          <bm-divider
            orientation="${select('Orientation', orientations, 'is-horizontal')}"
            content="${text('Content', '')}"
          >
          </bm-divider>
        </bm-container>
      </bm-section>
    `;
  });
