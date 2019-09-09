import { Component, Prop, h, JSX, ComponentInterface, Host } from '@stencil/core';

@Component({
  tag: 'b-box',
  styleUrls: ['box.scss'],
})
export class Box implements ComponentInterface {
  /**
   * CSS classes
   */
  @Prop() class = '';

  render(): JSX.Element {
    return (
      <Host>
        <div class={`box ${this.class}`}>
          <slot />
        </div>
      </Host>
    );
  }
}
