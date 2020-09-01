import { Component, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-card-content',
})
export class CardContent implements ComponentInterface {
  render(): JSX.Element {
    return (
      <div class="card-content">
        <slot></slot>
      </div>
    );
  }
}
