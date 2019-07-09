import { Component, Prop, h, JSX } from '@stencil/core';

@Component({
  tag: 'b-notification',
})
export class Notification {
  @Prop() class: string = '';
  @Prop() color: 'is-primary' | 'is-link' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
  @Prop() dismissable: boolean = true;

  render(): JSX.Element {
    return (
      <div class={`notification ${this.color || ''} ${this.class}`}>
        {this.dismissable && <button class="delete"></button>}
        <slot />
      </div>
    );
  }
}
