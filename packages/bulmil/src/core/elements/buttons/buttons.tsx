import { Component, ComponentInterface, Prop, Host, h, JSX } from '@stencil/core';

@Component({
  tag: 'bm-buttons',
  styleUrls: ['buttons.scss'],
})
export class Buttons implements ComponentInterface {
  /**
   * CSS classes
   */
  @Prop() class = '';

  /**
   * Buttons size
   */
  @Prop() public size: 'are-small' | 'are-medium' | 'are-large';

  render(): JSX.Element {
    return (
      <Host>
        <div
          class={{
            buttons: true,
            [this.size]: Boolean(this.size),
            [this.class]: Boolean(this.class),
          }}
        >
          <slot />
        </div>
      </Host>
    );
  }
}
