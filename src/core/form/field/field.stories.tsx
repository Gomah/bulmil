import { storiesOf } from '@storybook/html';
import notes from './readme.md';

storiesOf('Form|Field', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <b-section>
        <b-container>
          <b-field label="Name">
            <b-input placeholder="Text input" />
          </b-field>

          <b-field label="Username" message="This username is available">
            <b-input color="is-success" value="bulmil" >
            </b-input>
          </b-field>

          <b-field label="Email" message="This email is invalid">
            <b-input type="email" color="is-danger" value="hello@">
            </b-input>
          </b-field>

          <b-field label="Subject">
            <b-select>
              <option>Select dropdown</option>
              <option>With options</option>
            </b-select>
          </b-field>

          <b-field label="Message">
            <b-textarea></b-textarea>
          </b-field>

          <b-field>
            <b-checkbox>I agree to the <a href="#">terms and conditions</a></b-checkbox>
          </b-field>

          <b-field>
            <b-radio name="value">Yes</b-radio>
            <b-radio name="value">No</b-radio>
          </b-field>

          <b-field is-grouped>
            <div class="control">
              <b-button color="is-primary">Submit</b-button>
            </div>
            <div class="control">
              <b-button color="is-dark">Cancel</b-button>
            </div>
          </b-field>

        </b-container>
      </b-section>
    `;
  });
