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
      <b-section>
        <b-container>
          <b-field>
            <b-input placeholder="Text input"></b-input>
          </b-field>
        </b-container>
      </b-section>
    `;
  })
  .add('Colors', () => {
    return `
      <b-section>
        <b-container>
          <b-field>
            <b-input color="is-primary" placeholder="Primary input"></b-input>
          </b-field>
          <b-field>
            <b-input color="is-info" placeholder="Info input"></b-input>
          </b-field>
          <b-field>
            <b-input color="is-success" placeholder="Success input"></b-input>
          </b-field>
          <b-field>
            <b-input color="is-warning" placeholder="Warning input"></b-input>
          </b-field>
          <b-field>
            <b-input color="is-danger" placeholder="Danger input"></b-input>
          </b-field>
        </b-container>
      </b-section>
    `;
  })
  .add('Sizes', () => {
    return `
      <b-section>
        <b-container>
          <b-field>
            <b-input size="is-small" placeholder="Small input"></b-input>
          </b-field>

          <b-field>
            <b-input placeholder="Normal input"></b-input>
          </b-field>

          <b-field>
            <b-input size="is-medium" placeholder="Medium input"></b-input>
          </b-field>

          <b-field>
            <b-input size="is-large" placeholder="Large input"></b-input>
          </b-field>

        </b-container>
      </b-section>
    `;
  })
  .add('Rounded', () => {
    return `
      <b-section>
        <b-container>
          <b-field>
            <b-input is-rounded placeholder="Rounded input"></b-input>
          </b-field>

        </b-container>
      </b-section>
    `;
  })
  .add('States', () => {
    return `
      <b-section>
        <b-container>
          <b-field>
            <b-input placeholder="Normal input"></b-input>
          </b-field>

          <b-field>
            <b-input state="is-hovered" placeholder="Hovered input"></b-input>
          </b-field>

          <b-field>
            <b-input state="is-focused" placeholder="Focused input"></b-input>
          </b-field>

          <b-field>
            <b-input is-loading placeholder="Loading input"></b-input>
          </b-field>

        </b-container>
      </b-section>
    `;
  })
  .add('Disabled', () => {
    return `
      <b-section>
        <b-container>
          <b-field>
            <b-input disabled placeholder="Disabled input"></b-input>
          </b-field>

        </b-container>
      </b-section>
    `;
  })
  .add('Readonly and static inputs', () => {
    return `
      <b-section>
        <b-container>
          <b-field>
            <b-input readonly value="This text is readonly"></b-input>
          </b-field>

          <b-field>
            <b-input is-static placeholder="Static input"></b-input>
          </b-field>
        </b-container>
      </b-section>
    `;
  });
