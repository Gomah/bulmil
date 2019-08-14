import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-container',
  styleUrls: ['container.scss'],
})
export class Container implements ComponentInterface {
  @Prop() class = '';
  @Prop() breakpoint: 'is-widescreen' | 'is-fullhd';
  @Prop() isFluid = false;

  render(): JSX.Element {
    const containerClass = classNames(
      'container',
      {
        'is-fluid': this.isFluid,
      },
      this.breakpoint,
      this.class
    );

    return (
      <div class={containerClass}>
        <slot />
      </div>
    );
  }
}
