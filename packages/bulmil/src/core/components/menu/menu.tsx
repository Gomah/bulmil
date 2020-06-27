import { Component, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-menu',
  styleUrls: ['menu.scss'],
})
export class Menu implements ComponentInterface {
  render(): JSX.Element {
    return (
      <aside
        class={{
          menu: true,
        }}
      >
        <slot />
      </aside>
    );
  }
}
