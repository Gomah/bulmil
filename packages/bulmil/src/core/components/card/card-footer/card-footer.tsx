import { Component, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-card-footer',
})
export class CardFooter implements ComponentInterface {
  render(): JSX.Element {
    return (
      <footer class="card-footer">
        <slot></slot>
      </footer>
    );
  }
}
