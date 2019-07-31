import { newSpecPage } from '@stencil/core/testing';
import { Field } from './field';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Field],
    html: `<b-field label="Hello">
             <input type="text">
           </b-field>`,
  });

  expect(page.root).toEqualHtml(`
    <b-field label="Hello">
      <div class="field">
        <label class="label">Hello</label>
        <div class="control">
          <input type="text">
        </div>
      </div>
    </b-field>
  `);
});

it('Should render properly (horizontal)', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Field],
    html: `<b-field is-horizontal label="Hello">
             <input type="text">
           </b-field>`,
  });

  expect(page.root).toEqualHtml(`
    <b-field is-horizontal label="Hello">
      <div class="field is-horizontal">
        <div class="field-label">
          <label class="label">Hello</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input type="text">
            </div>
          </div>
        </div>
      </div>
    </b-field>
  `);
});
