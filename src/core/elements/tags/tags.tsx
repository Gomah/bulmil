import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-tags',
  styleUrls: ['tags.scss'],
})
export class Tags implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class: string;

  /**
   * Size
   */
  @Prop() size: 'are-medium' | 'are-large';

  /**
   * Has addons
   */
  @Prop() hasAddons = false;

  render(): JSX.Element {
    return (
      <div
        class={{
          tags: true,
          'has-addons': this.hasAddons,
          [this.size]: !!this.size,
          [this.class]: !!this.class,
        }}
      >
        <slot />
      </div>
    );
  }
}
