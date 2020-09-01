import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-navbar',
  styleUrls: ['navbar.scss'],
})
export class Navbar implements ComponentInterface {
  /**
   * Transparent
   */
  @Prop() isTransparent = false;

  /**
   * Color
   */
  @Prop() color:
    | 'is-black'
    | 'is-dark'
    | 'is-light'
    | 'is-white'
    | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-warning'
    | 'is-danger';

  /**
   * Fixed position
   */
  @Prop() fixedPosition: 'is-fixed-top' | 'is-fixed-bottom';

  /**
   * Spaced
   */
  @Prop() isSpaced = false;

  render(): JSX.Element {
    return (
      <nav
        class={{
          navbar: true,
          'is-spaced': this.isSpaced,
          'is-transparent': this.isTransparent,
          [this.color]: Boolean(this.color),
          [this.fixedPosition]: Boolean(this.fixedPosition),
        }}
        role="navigation"
        aria-label="main navigation"
      >
        <slot />
      </nav>
    );
  }
}
