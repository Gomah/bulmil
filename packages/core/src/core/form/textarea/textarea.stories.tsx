import { boolean, text, select } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Form/Textarea',
  component: 'bm-textarea',
};

export const Example = (): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-field>
        <bm-textarea
          state="${select(
            'State',
            { 'is-hovered': 'is-hovered', 'is-focused': 'is-focused', 'Not set': null },
            null
          )}"
          color="${select(
            'Color',
            {
              'is-primary': 'is-primary',
              'is-info': 'is-info',
              'is-success': 'is-success',
              'is-warning': 'is-warning',
              'is-danger': 'is-danger',
              'Not set': null,
            },
            null
          )}"
          size="${select(
            'Size',
            {
              'is-small': 'is-small',
              'is-normal': 'is-normal',
              'is-medium': 'is-medium',
              'is-large': 'is-large',
              'Not set': null,
            },
            null
          )}"
          value="${text('Value', 'Textarea 🤘')}"
          control-class="${text('Control class', '')}"
          is-loading="${boolean('Loading', false)}"
          disabled="${boolean('Disabled', false)}"
          readonly="${boolean('Readonly', false)}"
          has-fixed-size="${boolean('Fixed size', false)}"
        >
        </bm-textarea>
      </bm-field>
    </bm-section>
  `;
};
