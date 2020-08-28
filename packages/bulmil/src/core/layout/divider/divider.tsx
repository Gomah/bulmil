import { Component, Prop, h, JSX, ComponentInterface, Host } from '@stencil/core';

@Component({
  tag: 'bm-divider',
  styleUrls: ['divider.scss'],
})
export class Divider implements ComponentInterface {
  /**
   *
   * Alignment
   */
  @Prop() alignment: 'is-left' | 'is-right';

  /**
   *
   * Color
   */
  @Prop() color: 'is-info' | 'is-success' | 'is-warning' | 'is-danger';

  /**
   * IsLight
   */
  @Prop() isLight = false;

  /**
   * IsVertical
   */
  @Prop() isVertical = false;

  render(): JSX.Element {
    return (
      <Host
        class={{
          divider: true,
          'is-vertical': this.isVertical,
          'is-light': this.isLight,
          [this.color]: Boolean(this.color),
          [this.alignment]: Boolean(this.alignment),
        }}
      >
        <slot />
      </Host>
    );
  }
}
