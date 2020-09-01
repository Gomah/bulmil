import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-panel',
  styleUrls: ['panel.scss'],
})
export class Panel implements ComponentInterface {
  /**
   * Panel color
   */
  @Prop() color: 'is-primary' | 'is-link' | 'is-info' | 'is-success' | 'is-danger' | 'is-warning';

  render(): JSX.Element {
    return (
      <nav
        class={{
          panel: true,
          [this.color]: Boolean(this.color),
        }}
      >
        <slot />
      </nav>
    );
  }
}
