import { Component, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-card-image',
})
export class CardImage implements ComponentInterface {
  render(): JSX.Element {
    return (
      <div class="card-image">
        <slot></slot>
      </div>
    );
  }
}
