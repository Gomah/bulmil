import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

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
  @Prop() isNarrow: boolean;

  /**
   * Narrow breakpoints
   */
  @Prop() narrowBreakpoints: string;

  private _narrowBreakpoints: Breakpoint[] = [];

  componentWillLoad() {
    if (this.narrowBreakpoints) {
      this._narrowBreakpoints = JSON.parse(this.narrowBreakpoints);
    }
  }

  render(): JSX.Element {
    return (
      <div
        class={{
          column: true,
          'is-narrow': this.isNarrow && typeof this.isNarrow === 'boolean',
          ...(this.isNarrow &&
            this._narrowBreakpoints.length > 0 &&
            ((): object => {
              return this._narrowBreakpoints.reduce((obj, breakpoint): object => {
                Object.assign(obj, {
                  [`is-narrow-${breakpoint}`]: true,
                });
                return obj;
              }, {});
            })()),
          [this.class]: !!this.class,
        }}
      >
        <slot />
      </div>
    );
  }
}
