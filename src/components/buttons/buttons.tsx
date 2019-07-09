import { Component, Prop, h, JSX } from '@stencil/core';

@Component({
  tag: 'b-buttons',
})
export class Buttons {
  @Prop() class: string = '';
  @Prop() size: 'are-small' | 'are-medium' | 'are-large';

  render(): JSX.Element {
    return (
      <div class={`buttons ${this.class} ${this.size || ''}`}>
        <slot />
      </div>
    );
  }
}
