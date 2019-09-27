import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'b-card-header',
})
export class CardHeader implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  render(): JSX.Element {
    return (
      <header class="card-header">
        <slot></slot>
      </header>
    );
  }
}
