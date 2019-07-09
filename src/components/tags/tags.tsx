import { Component, Prop, h, JSX } from '@stencil/core';

@Component({
  tag: 'b-tags',
})
export class Tags {
  @Prop() class: string;
  @Prop() hasAddons: boolean = false;

  render(): JSX.Element {
    return (
      <div class={`tags ${this.hasAddons ? 'has-addons' : ''} ${this.class || ''}`}>
        <slot />
      </div>
    );
  }
}
