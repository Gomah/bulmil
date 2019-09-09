import { Component, Prop, h, JSX, ComponentInterface, Host } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-content',
  styleUrls: ['content.scss'],
})
export class Content implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Content size
   */
  @Prop() size: 'is-small' | 'is-medium' | 'is-large';

  render(): JSX.Element {
    const contentClass = classNames('content', this.size, this.class);

    return (
      <Host>
        <div class={contentClass}>
          <slot />
        </div>
      </Host>
    );
  }
}
