import { Component, Prop, h, JSX } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-container',
  styleUrls: ['container.scss'],
})
export class Container {
  @Prop() class: string = '';
  @Prop() breakpoint: 'is-widescreen' | 'is-fullhd';
  @Prop() isFluid: boolean = false;

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
