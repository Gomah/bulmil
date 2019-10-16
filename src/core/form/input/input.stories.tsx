import centered from '@storybook/addon-centered/html';
import { storiesOf } from '@storybook/html';
import notes from './readme.md';

storiesOf('Form|Input', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <bm-section>
        <bm-container>
          <bm-field>
            <bm-input placeholder="Text input"></bm-input>
          </bm-field>
        </bm-container>
      </bm-section>
    `;
  })
  .add('Colors', () => {
    return `
      <bm-section>
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
  })
  .add('Sizes', () => {
    return `
      <bm-section>
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
  })
  .add('Rounded', () => {
    return `
      <bm-section>
        <bm-container>
          <bm-field>
            <bm-input is-rounded placeholder="Rounded input"></bm-input>
          </bm-field>

        </bm-container>
      </bm-section>
    `;
  })
  .add('States', () => {
    return `
      <bm-section>
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
  })
  .add('Disabled', () => {
    return `
      <bm-section>
        <bm-container>
          <bm-field>
            <bm-input disabled placeholder="Disabled input"></bm-input>
          </bm-field>

        </bm-container>
      </bm-section>
    `;
  })
  .add('Readonly and static inputs', () => {
    return `
      <bm-section>
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
  });
