import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-menu',
  styleUrls: ['menu.scss'],
})
export class Menu implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  render(): JSX.Element {
    return (
      <aside
        class={{
          menu: true,
          [this.class]: Boolean(this.class),
        }}
      >
        <slot />
      </aside>
    );
  }
}
