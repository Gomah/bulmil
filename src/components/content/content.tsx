import { Component, Prop, h, JSX } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-content',
})
export class Content {
  @Prop() class: string = '';
  @Prop() size: 'is-small' | 'is-medium' | 'is-large';

  render(): JSX.Element {
    const contentClass = classNames('content', this.size, this.class);

    return (
      <div class={contentClass}>
        <slot />
      </div>
    );
  }
}
