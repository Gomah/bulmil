import { Component, Prop, h, JSX, ComponentInterface, Host } from '@stencil/core';

@Component({
  tag: 'bm-box',
  styleUrls: ['box.scss'],
})
export class Box implements ComponentInterface {
  /**
   * CSS classes
   */
  @Prop() class = '';

  render(): JSX.Element {
    return (
      <Host>
        <div
          class={{
            box: true,
            [this.class]: !!this.class,
          }}
        >
          <slot />
        </div>
      </Host>
    );
  }
}
