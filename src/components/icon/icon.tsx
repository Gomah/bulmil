import { Component, Prop, h, JSX } from '@stencil/core';

@Component({
  tag: 'b-icon',
})
export class Icon {
  @Prop() class: string = '';
  @Prop() color: 'has-text-info' | 'has-text-success' | 'has-text-warning' | 'has-text-danger';
  @Prop() size: 'is-small' | 'is-medium' | 'is-large';

  render(): JSX.Element {
    return (
      <span class={`icon ${this.color || ''} ${this.class} ${this.size || ''}`}>
        <slot />
      </span>
    );
  }
}
