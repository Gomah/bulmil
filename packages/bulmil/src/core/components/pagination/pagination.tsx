import { Component, Prop, h, JSX, ComponentInterface, Host } from '@stencil/core';

@Component({
  tag: 'bm-pagination',
  styleUrls: ['pagination.scss'],
})
export class Pagination implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Pagination size
   */
  @Prop() size: 'is-small' | 'is-medium' | 'is-large';

  /**
   * Alignment
   */
  @Prop() alignment: 'is-centered' | 'is-right';

  /**
   * Rounded
   */
  @Prop() isRounded = false;

  render(): JSX.Element {
    return (
      <Host>
        <nav
          class={{
            pagination: true,
            [this.size]: Boolean(this.size),
            [this.alignment]: Boolean(this.alignment),
            'is-rounded': this.isRounded,
            [this.class]: Boolean(this.class),
          }}
          role="navigation"
          aria-label="pagination"
        >
          <slot />
        </nav>
      </Host>
    );
  }
}
