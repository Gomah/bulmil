import { Component, Prop, h, JSX, ComponentInterface, Host } from '@stencil/core';

@Component({
  tag: 'bm-container',
  styleUrls: ['container.scss'],
})
export class Container implements ComponentInterface {
  /**
   * Container breakpoint
   */
  @Prop() breakpoint: 'is-widescreen' | 'is-fullhd';

  /**
   * Fluid container
   */
  @Prop() isFluid = false;

  render(): JSX.Element {
    return (
      <Host
        class={{
          container: true,
          'is-fluid': this.isFluid,
          [this.breakpoint]: Boolean(this.breakpoint),
        }}
      />
    );
  }
}
