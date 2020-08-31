import { Component, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-card',
  styleUrls: ['card.scss'],
})
export class Card implements ComponentInterface {
  render(): JSX.Element {
    return (
      <div
        class={{
          card: true,
        }}
      >
        <slot></slot>
      </div>
    );
  }
}
