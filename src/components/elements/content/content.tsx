import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-content',
  styleUrls: ['content.scss'],
})
export class Content implements ComponentInterface {
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
