import { Component, Prop, h, JSX } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-tags',
})
export class Tags {
  @Prop() class: string;
  @Prop() hasAddons: boolean = false;

  render(): JSX.Element {
    const tagsClass = classNames('tags', { 'has-addons': this.hasAddons }, this.class);

    return (
      <div class={tagsClass}>
        <slot />
      </div>
    );
  }
}
