import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-card',
  styleUrls: ['card.scss'],
})
export class Card implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  render(): JSX.Element {
    return (
      <div
        class={{
          card: true,
          [this.class]: !!this.class,
        }}
      >
        <slot></slot>
      </div>
    );
  }
}
