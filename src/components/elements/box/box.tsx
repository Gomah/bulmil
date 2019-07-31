import { Component, Prop, h, JSX } from '@stencil/core';

@Component({
  tag: 'b-box',
})
export class Box {
  @Prop() class: string = '';

  render(): JSX.Element {
    return (
      <div class={`box ${this.class}`}>
        <slot />
      </div>
    );
  }
}
