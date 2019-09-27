import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'b-card-footer',
})
export class CardFooter implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  render(): JSX.Element {
    return (
      <footer class="card-footer">
        <slot></slot>
      </footer>
    );
  }
}
