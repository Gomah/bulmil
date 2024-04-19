import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Components/Navbar',
  component: 'bm-navbar',
};

export const Example = (props): TemplateResult => {
  return html`
    <bm-navbar
      color="${props.color}"
      is-spaced="${props.isSpaced}"
      is-transparent="${props.isTransparent}"
      fixed-position="${props.fixedPosition}"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item"> Home </a>

          <a class="navbar-item"> Documentation </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> More </a>

            <div class="navbar-dropdown">
              <a class="navbar-item"> About </a>
              <a class="navbar-item"> Jobs </a>
              <a class="navbar-item"> Contact </a>
              <hr class="navbar-divider" />
              <a class="navbar-item"> Report an issue </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <bm-buttons>
              <bm-button color="is-primary">
                <strong>Sign up</strong>
              </bm-button>
              <bm-button color="is-light"> Log in </bm-button>
            </bm-buttons>
          </div>
        </div>
      </div>
    </bm-navbar>
  `;
};

// 'is-black': 'is-black',
// 'is-dark': 'is-dark',
// 'is-light': 'is-light',
// 'is-white': 'is-white',
// 'is-primary': 'is-primary',
// 'is-link': 'is-link',
// 'is-info': 'is-info',
// 'is-success': 'is-success',
// 'is-warning': 'is-warning',
// 'is-danger': 'is-danger',

Example.args = { color: false, isSpaced: false, isTransparent: false, fixedPosition: null };

Example.argTypes = {
  color: {
    options: [
      'is-black',
      'is-dark',
      'is-light',
      'is-white',
      'is-primary',
      'is-link',
      'is-info',
      'is-success',
      'is-warning',
      'is-danger',
    ],
    control: {
      type: 'select',
    },
  },

  isSpaced: {
    control: {
      type: 'boolean',
    },
  },

  isTransparent: {
    control: {
      type: 'boolean',
    },
  },

  fixedPosition: {
    options: ['is-fixed-top', 'is-fixed-bottom', null],
    control: {
      type: 'select',
    },
  },
};
