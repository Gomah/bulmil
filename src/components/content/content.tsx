import { Component, Prop, h, JSX } from '@stencil/core';

@Component({
  tag: 'b-content',
})
export class Content {
  @Prop() class: string = '';
  @Prop() size: 'is-small' | 'is-medium' | 'is-large';

  render(): JSX.Element {
    return (
      <div class={`content ${this.class} ${this.size || ''}`}>
        <slot />
      </div>
    );
  }
}
