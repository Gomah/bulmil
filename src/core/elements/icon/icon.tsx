import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-icon',
  styleUrls: ['icon.scss'],
})
export class Icon implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Color
   */
  @Prop() color: 'has-text-info' | 'has-text-success' | 'has-text-warning' | 'has-text-danger';

  /**
   * Size
   */
  @Prop() size: 'is-small' | 'is-medium' | 'is-large';

  render(): JSX.Element {
    return (
      <span
        class={{
          icon: true,
          [this.color]: !!this.color,
          [this.size]: !!this.size,
          [this.class]: !!this.class,
        }}
      >
        <slot />
      </span>
    );
  }
}
