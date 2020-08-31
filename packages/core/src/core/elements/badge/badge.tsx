import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-badge',
  styleUrls: ['badge.scss'],
})
export class Badge implements ComponentInterface {
  /**
   * Color
   */
  @Prop() color:
    | 'is-primary'
    | 'is-info'
    | 'is-success'
    | 'is-danger'
    | 'is-warning'
    | 'is-white'
    | 'is-dark'
    | 'is-black';

  /**
   * Position
   */
  @Prop() position:
    | 'is-top-left'
    | 'is-top'
    | 'is-top-right'
    | 'is-right'
    | 'is-bottom-right'
    | 'is-bottom'
    | 'is-bottom-left'
    | 'is-left';

  /**
   * Is outlined
   */
  @Prop() isOutlined = false;

  /**
   * Is light
   */
  @Prop() isLight = false;

  render(): JSX.Element {
    return (
      <span
        class={{
          badge: true,
          [this.color]: Boolean(this.color),
          [this.position]: Boolean(this.position),
          'is-light': this.isLight,
          'is-outlined': this.isOutlined,
        }}
      >
        <slot />
      </span>
    );
  }
}
