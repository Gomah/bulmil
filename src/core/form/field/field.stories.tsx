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
      <bm-section>
        <bm-container>
          <bm-field label="Name">
            <bm-input placeholder="Text input" />
          </bm-field>

          <bm-field label="Username" message="This username is available">
            <bm-input color="is-success" value="bulmil" >
            </bm-input>
          </bm-field>

          <bm-field label="Email" message="This email is invalid">
            <bm-input type="email" color="is-danger" value="hello@">
            </bm-input>
          </bm-field>

          <bm-field label="Subject">
            <bm-select>
              <option>Select dropdown</option>
              <option>With options</option>
            </bm-select>
          </bm-field>

          <bm-field label="Message">
            <bm-textarea></bm-textarea>
          </bm-field>

          <bm-field>
            <bm-checkbox>I agree to the <a href="#">terms and conditions</a></bm-checkbox>
          </bm-field>

          <bm-field>
            <bm-radio name="value">Yes</bm-radio>
            <bm-radio name="value">No</bm-radio>
          </bm-field>

          <bm-field is-grouped>
            <div class="control">
              <bm-button color="is-primary">Submit</bm-button>
            </div>
            <div class="control">
              <bm-button color="is-dark">Cancel</bm-button>
            </div>
          </bm-field>

        </bm-container>
      </bm-section>
    `;
  });
