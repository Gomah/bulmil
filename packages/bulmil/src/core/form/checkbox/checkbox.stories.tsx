import { boolean } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Form|Checkbox',
  component: 'bm-checkbox',
};

export const Example = (): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-checkbox checked="${boolean('Checked', false)}" disabled="${boolean('Disabled', false)}">
        Remember me
      </bm-checkbox>
    </bm-section>
  `;
};

export const WithLinks = (): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-checkbox checked="${boolean('Checked', false)}" disabled="${boolean('Disabled', false)}">
        I agree to the <a href="#">terms and conditions</a>
      </bm-checkbox>
    </bm-section>
  `;
};
