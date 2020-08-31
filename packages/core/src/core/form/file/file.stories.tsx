import { text, select, boolean } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Form/File',
  component: 'bm-file',
};

export const Example = (): TemplateResult => {
  return html`
    <bm-section>
      <bm-container>
        <bm-field>
          <bm-file
            name="example"
            placeholder="${text('Placeholder', 'Choose a file...')}"
            color="${select(
              'Color',
              {
                'is-white': 'is-white',
                'is-black': 'is-black',
                'is-light': 'is-light',
                'is-dark': 'is-dark',
                'is-primary': 'is-primary',
                'is-link': 'is-link',
                'is-info': 'is-info',
                'is-success': 'is-success',
                'is-warning': 'is-warning',
                'is-danger': 'is-danger',
              },
              null
            )}"
            size="${select(
              'Size',
              {
                'is-small': 'is-small',
                'is-medium': 'is-medium',
                'is-large': 'is-large',
              },
              null
            )}"
            alignment="${select(
              'Alignment',
              {
                'is-centered': 'is-centered',
                'is-right': 'is-right',
              },
              null
            )}"
            is-right="${boolean('Move the CTA to the right side', false)}"
            is-fullwidth="${boolean('Expand the name to fill up the space', false)}"
            is-boxed="${boolean('Boxed block', false)}"
            has-name="${boolean('Has name', false)}"
          >
          </bm-file>
        </bm-field>
      </bm-container>
    </bm-section>
  `;
};
