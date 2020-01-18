import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-breadcrumb',
  styleUrls: ['breadcrumb.scss'],
})
export class Breadcrumb implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Breadcrumb alignment
   */
  @Prop() alignment: 'is-centered' | 'is-right';

  /**
   * Size
   */
  @Prop() size: 'is-small' | 'is-medium' | 'is-large';

  /**
   * Separator
   */
  @Prop() separator:
    | 'has-arrow-separator'
    | 'has-bullet-separator'
    | 'has-dot-separator'
    | 'has-succeeds-separator';

  render(): JSX.Element {
    return (
      <nav
        class={{
          breadcrumb: true,
          [this.size]: Boolean(this.size),
          [this.separator]: Boolean(this.separator),
          [this.alignment]: Boolean(this.alignment),
          [this.class]: Boolean(this.class),
        }}
        aria-label="breadcrumbs"
      >
        <slot />
      </nav>
    );
  }
}
