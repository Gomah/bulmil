import { html, TemplateResult } from 'lit-html';
import { boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'Components|Breadcrumb',
  component: 'bm-breadcrumb',
};

export const Example = (): TemplateResult => {
  const separators = {
    'has-arrow-separator': 'has-arrow-separator',
    'has-bullet-separator': 'has-bullet-separator',
    'has-dot-separator': 'has-dot-separator',
    'has-succeeds-separator': 'has-succeeds-separator',
    None: null,
  };

  const sizes = {
    Small: 'is-small',
    Medium: 'is-medium',
    Large: 'is-large',
    None: null,
  };
  return html`
    <bm-section>
      <bm-container>
        <bm-breadcrumb
          is-centered=${boolean('Centered', false)}
          alignment=${select(
            'Alignment',
            { 'is-centered': 'is-centered', 'is-right': 'is-right', 'Not set': null },
            null
          )}
          separator=${select('Separator', separators, null)}
          size=${select('Size', sizes, null)}
        >
          <ul>
            <li><a href="#">Bulmil</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Components</a></li>
            <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
          </ul>
        </bm-breadcrumb>
      </bm-container>
    </bm-section>
  `;
};
