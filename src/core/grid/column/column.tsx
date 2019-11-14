import { Component, Prop, h, JSX, ComponentInterface, Host } from '@stencil/core';

@Component({
  tag: 'bm-column',
})
export class Column implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Sizes
   */
  @Prop() sizes: string;

  /**
   * Narrow column
   */
  @Prop() isNarrow: boolean;

  render(): JSX.Element {
    return (
      <Host
        class={{
          column: true,
          'is-narrow': this.isNarrow && typeof this.isNarrow === 'boolean',
          [this.sizes]: Boolean(this.sizes),
          [this.class]: Boolean(this.class),
        }}
      />
    );
  }
}
