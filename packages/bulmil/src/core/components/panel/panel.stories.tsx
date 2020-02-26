import { html, TemplateResult } from 'lit-html';
import { select } from '@storybook/addon-knobs';

export default {
  title: 'Components|Panel',
  component: 'bm-panel',
};

// Knobs
const colors: { [key: string]: string } = {
  primary: 'is-primary',
  link: 'is-link',
  info: 'is-info',
  success: 'is-success',
  danger: 'is-danger',
  warning: 'is-warning',
  none: null,
};

export const Example = (): TemplateResult => {
  return html`
    <bm-section>
      <bm-container>
        <bm-panel color="${select('Color', colors, null)}">
          <p class="panel-heading">repositories</p>
          <div class="panel-block">
            <p class="control has-icons-left">
              <bm-input size="is-small" type="text" placeholder="search"></bm-input>
              <span class="icon is-small is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          <p class="panel-tabs">
            <a class="is-active">all</a>
            <a>public</a>
            <a>private</a>
            <a>sources</a>
            <a>forks</a>
          </p>
          <a class="panel-block is-active">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            bulma
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            marksheet
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            minireset.css
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            jgthms.github.io
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-code-branch" aria-hidden="true"></i>
            </span>
            daniellowtw/infboard
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-code-branch" aria-hidden="true"></i>
            </span>
            mojs
          </a>
          <label class="panel-block"> <bm-checkbox> remember me</bm-checkbox> </label>
          <div class="panel-block">
            <bm-button color="is-link" is-outlined is-fullwidth>reset all filters</bm-button>
          </div>
        </bm-panel>
      </bm-container>
    </bm-section>
  `;
};
