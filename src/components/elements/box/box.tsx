import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'b-box',
  styleUrls: ['box.scss'],
})
export class Box implements ComponentInterface {
  @Prop() class = '';

  render(): JSX.Element {
    return (
      <div class={`box ${this.class}`}>
        <slot />
      </div>
    );
  }
}
