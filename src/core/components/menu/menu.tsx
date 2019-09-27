import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'b-menu',
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
          [this.class]: !!this.class,
        }}
      >
        <slot />
      </aside>
    );
  }
}
