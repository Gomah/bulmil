import { newSpecPage } from '@stencil/core/testing';
import { Field } from '../field';
import { Input } from '../../input/input';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Field, Input],
    html: `<bm-field label="Hello">
             <bm-input></bm-input>
           </bm-field>`,
  });

  expect(page.root).toEqualHtml(`
    <bm-field label="Hello">
      <div class="field">
        <label class="label">Hello</label>
        <bm-input>
          <div class="control">
            <input class="input" type="text">
          </div>
        </bm-input>
      </div>
    </bm-field>
  `);
});

it('Should render properly (horizontal)', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Field],
    html: `<bm-field is-horizontal label="Hello">
             <bm-input>
               <div class="control">
                 <input class="input" type="text">
               </div>
             </bm-input>
           </bm-field>`,
  });

  expect(page.root).toEqualHtml(`
    <bm-field is-horizontal label="Hello">
      <div class="field is-horizontal">
        <div class="field-label">
          <label class="label">Hello</label>
        </div>
        <div class="field-body">
          <div class="field">
            <bm-input>
              <div class="control">
                <input class="input" type="text">
              </div>
            </bm-input>
          </div>
        </div>
      </div>
    </bm-field>
  `);
});
