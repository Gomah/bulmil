import { boolean, text, select } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Form/Select',
  component: 'bm-select',
};

export const Example = (): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-field>
        <bm-select
          state="${select(
            'State',
            {
              'is-hovered': 'is-hovered',
              'is-focused': 'is-focused',
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
          is-rounded="${boolean('Rounded', false)}"
          is-loading="${boolean('Loading', false)}"
          is-multiple="${boolean('Multiple', false)}"
          icon="${text('Icon', '')}"
          value="${text('Value', '')}"
        >
          <option value="dropdown">Select dropdown</option>
          <option value="options">With options</option>
        </bm-select>
      </bm-field>
    </bm-section>
  `;
};
