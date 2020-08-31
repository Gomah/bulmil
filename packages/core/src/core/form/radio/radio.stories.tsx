import { boolean } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Form/Radio',
  component: 'bm-radio',
};

export const Example = (): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-field>
        <bm-radio name="storybook"> Yes </bm-radio>

        <bm-radio name="storybook" checked="${boolean('Checked', false)}"> No </bm-radio>

        <bm-radio name="storybook" disabled="${boolean('Disabled', false)}"> Maybe </bm-radio>
      </bm-field>
    </bm-section>
  `;
};
