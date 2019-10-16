import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-image',
  styleUrls: ['image.scss'],
})
export class Image implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Size
   */
  @Prop() size:
    | 'is-16x16'
    | 'is-24x24'
    | 'is-32x32'
    | 'is-48x48'
    | 'is-64x64'
    | 'is-96x96'
    | 'is-128x128';

  render(): JSX.Element {
    return (
      <figure
        class={{
          image: true,
          [this.size]: !!this.size,
          [this.class]: !!this.class,
        }}
      >
        <slot />
      </figure>
    );
  }
}
