import { Component, Prop, h, JSX, ComponentInterface, Host } from '@stencil/core';

@Component({
  tag: 'bm-content',
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
    return (
      <Host>
        <div
          class={{
            content: true,
            [this.size]: !!this.size,
            [this.class]: !!this.class,
          }}
        >
          <slot />
        </div>
      </Host>
    );
  }
}
