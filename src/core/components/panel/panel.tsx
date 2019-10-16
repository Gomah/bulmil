import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-panel',
  styleUrls: ['panel.scss'],
})
export class Panel implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  render(): JSX.Element {
    return (
      <nav class="panel">
        <slot />
      </nav>
    );
  }
}
