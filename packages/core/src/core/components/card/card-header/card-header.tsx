import { Component, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-card-header',
})
export class CardHeader implements ComponentInterface {
  render(): JSX.Element {
    return (
      <header class="card-header">
        <slot></slot>
      </header>
    );
  }
}
