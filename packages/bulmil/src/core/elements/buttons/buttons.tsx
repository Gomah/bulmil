import { Component, ComponentInterface, Prop, Host, h, JSX } from '@stencil/core';

@Component({
  tag: 'bm-buttons',
  styleUrls: ['buttons.scss'],
})
export class Buttons implements ComponentInterface {
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
          }}
        >
          <slot />
        </div>
      </Host>
    );
  }
}
