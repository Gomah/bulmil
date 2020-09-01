# bm-navbar



<!-- Auto Generated Below -->


## Usage

### Html

```html
<bm-navbar>
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
```



## Properties

| Property        | Attribute        | Description    | Type                                                                                                                                           | Default     |
| --------------- | ---------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `color`         | `color`          | Color          | `"is-black" \| "is-danger" \| "is-dark" \| "is-info" \| "is-light" \| "is-link" \| "is-primary" \| "is-success" \| "is-warning" \| "is-white"` | `undefined` |
| `fixedPosition` | `fixed-position` | Fixed position | `"is-fixed-bottom" \| "is-fixed-top"`                                                                                                          | `undefined` |
| `isSpaced`      | `is-spaced`      | Spaced         | `boolean`                                                                                                                                      | `false`     |
| `isTransparent` | `is-transparent` | Transparent    | `boolean`                                                                                                                                      | `false`     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
