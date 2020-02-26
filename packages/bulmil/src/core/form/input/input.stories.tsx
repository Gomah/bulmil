import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Form|Input',
  component: 'bm-input',
};

export const Example = (): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-container>
        <bm-field>
          <bm-input placeholder="Text input"></bm-input>
        </bm-field>
      </bm-container>
    </bm-section>
  `;
};

export const Colors = (): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-container>
        <bm-field>
          <bm-input color="is-primary" placeholder="Primary input"></bm-input>
        </bm-field>
        <bm-field>
          <bm-input color="is-info" placeholder="Info input"></bm-input>
        </bm-field>
        <bm-field>
          <bm-input color="is-success" placeholder="Success input"></bm-input>
        </bm-field>
        <bm-field>
          <bm-input color="is-warning" placeholder="Warning input"></bm-input>
        </bm-field>
        <bm-field>
          <bm-input color="is-danger" placeholder="Danger input"></bm-input>
        </bm-field>
      </bm-container>
    </bm-section>
  `;
};

export const Sizes = (): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-container>
        <bm-field>
          <bm-input size="is-small" placeholder="Small input"></bm-input>
        </bm-field>

        <bm-field>
          <bm-input placeholder="Normal input"></bm-input>
        </bm-field>

        <bm-field>
          <bm-input size="is-medium" placeholder="Medium input"></bm-input>
        </bm-field>

        <bm-field>
          <bm-input size="is-large" placeholder="Large input"></bm-input>
        </bm-field>
      </bm-container>
    </bm-section>
  `;
};

export const Rounded = (): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-container>
        <bm-field>
          <bm-input is-rounded placeholder="Rounded input"></bm-input>
        </bm-field>
      </bm-container>
    </bm-section>
  `;
};

export const States = (): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-container>
        <bm-field>
          <bm-input placeholder="Normal input"></bm-input>
        </bm-field>

        <bm-field>
          <bm-input state="is-hovered" placeholder="Hovered input"></bm-input>
        </bm-field>

        <bm-field>
          <bm-input state="is-focused" placeholder="Focused input"></bm-input>
        </bm-field>

        <bm-field>
          <bm-input is-loading placeholder="Loading input"></bm-input>
        </bm-field>
      </bm-container>
    </bm-section>
  `;
};

export const Disabled = (): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-container>
        <bm-field>
          <bm-input disabled placeholder="Disabled input"></bm-input>
        </bm-field>
      </bm-container>
    </bm-section>
  `;
};

export const ReadonlyAndStaticInputs = (): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-container>
        <bm-field>
          <bm-input readonly value="This text is readonly"></bm-input>
        </bm-field>

        <bm-field>
          <bm-input is-static placeholder="Static input"></bm-input>
        </bm-field>
      </bm-container>
    </bm-section>
  `;
};
