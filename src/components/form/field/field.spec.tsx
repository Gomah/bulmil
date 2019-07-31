import { newSpecPage } from '@stencil/core/testing';
import { Field } from './field';
import { Input } from '../input/input';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Field, Input],
    html: `<b-field label="Hello">
             <b-input></b-input>
           </b-field>`,
  });

  expect(page.root).toEqualHtml(`
    <b-field label="Hello">
      <div class="field">
        <label class="label">Hello</label>
        <b-input>
          <div class="control">
            <input class="input" type="text">
          </div>
        </b-input>
      </div>
    </b-field>
  `);
});

it('Should render properly (horizontal)', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Field],
    html: `<b-field is-horizontal label="Hello">
             <b-input>
               <div class="control">
                 <input class="input" type="text">
               </div>
             </b-input>
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
            <b-input>
              <div class="control">
                <input class="input" type="text">
              </div>
            </b-input>
          </div>
        </div>
      </div>
    </b-field>
  `);
});
