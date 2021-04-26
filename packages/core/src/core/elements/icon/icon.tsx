import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-icon',
  styleUrls: ['icon.scss'],
})
export class Icon implements ComponentInterface {
  /**
   * Color
   */
  @Prop() color: 'has-text-info' | 'has-text-success' | 'has-text-warning' | 'has-text-danger';

  /**
   * Size
   */
  @Prop() size: 'is-small' | 'is-medium' | 'is-large';

  /**
   * Icon text
   */
  @Prop() withText = false;

  render(): JSX.Element {
    return (
      <span
        class={{
          icon: !this.withText,
          [this.color]: Boolean(this.color),
          [this.size]: Boolean(this.size),
          'icon-text': this.withText,
        }}
      >
        <slot />
      </span>
    );
  }
}
