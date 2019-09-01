import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';

type Breakpoint = 'mobile' | 'tablet' | 'touch' | 'desktop' | 'widescreen' | 'fullhd';

@Component({
  tag: 'b-column',
})
export class Column implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  // TODO: Generate sizes, https://bulma.io/documentation/columns/sizes/
  /**
   * Sizes
   */
  @Prop() sizes;

  /**
   * Narrow column
   */
  @Prop() isNarrow: boolean | Breakpoint[] | null;

  render(): JSX.Element {
    const columnClass = classNames(
      'column',
      {
        'is-narrow': this.isNarrow && typeof this.isNarrow === 'boolean',
      },
      (): string[] | void => {
        if (this.isNarrow && Array.isArray(this.isNarrow)) {
          return this.isNarrow.map(breakpoint => `is-narrow-${breakpoint}`);
        }
      },
      this.class
    );

    return (
      <div class={columnClass}>
        <slot />
      </div>
    );
  }
}
