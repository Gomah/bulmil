import { Component, h, JSX, ComponentInterface, Host } from '@stencil/core';

@Component({
  tag: 'bm-box',
  styleUrls: ['box.scss'],
})
export class Box implements ComponentInterface {
  render(): JSX.Element {
    return (
      <Host>
        <div
          class={{
            box: true,
          }}
        >
          <slot />
        </div>
      </Host>
    );
  }
}
