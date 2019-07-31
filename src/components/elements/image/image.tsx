import { Component, Prop, h, JSX } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-image',
})
export class Image {
  @Prop() class: string = '';
  @Prop() size:
    | 'is-16x16'
    | 'is-24x24'
    | 'is-32x32'
    | 'is-48x48'
    | 'is-64x64'
    | 'is-96x96'
    | 'is-128x128';

  render(): JSX.Element {
    const imageClass = classNames('image', this.size, this.class);

    return (
      <figure class={imageClass}>
        <slot />
      </figure>
    );
  }
}
