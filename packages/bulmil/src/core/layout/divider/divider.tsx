import { Component, Prop, h, JSX, ComponentInterface, Host } from '@stencil/core';

@Component({
  tag: 'bm-divider',
  styleUrls: ['divider.scss'],
})
export class Divider implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() content = '';

  /**
   * Orientation
   */
  @Prop() orientation: 'is-horizontal' | 'is-vertical' = 'is-horizontal';

  render(): JSX.Element {
    return (
      <Host
        class={{
          'is-divider': this.orientation === 'is-horizontal',
          'is-divider-vertical': this.orientation === 'is-vertical',
        }}
        data-content={this.content}
      />
    );
  }
}
