import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'b-container',
  styleUrls: ['container.scss'],
})
export class Container implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

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
      <div
        class={{
          container: true,
          'is-fluid': this.isFluid,
          [this.breakpoint]: !!this.breakpoint,
          [this.class]: !!this.class,
        }}
      >
        <slot />
      </div>
    );
  }
}
