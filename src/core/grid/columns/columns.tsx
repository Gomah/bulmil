import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-columns',
  styleUrls: ['columns.scss'],
})
export class Columns implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Centered
   */
  @Prop() isCentered = false;

  /**
   * Mobile
   */
  @Prop() isMobile = false;

  /**
   * Desktop
   */
  @Prop() isDesktop = false;

  /**
   * Multiline
   */
  @Prop() isMultiline = false;

  /**
   * Gapless
   */
  @Prop() isGapless = false;

  /**
   * Vertically centered
   */
  @Prop() isVcentered = false;

  /**
   * Columns gaps
   */
  @Prop() gaps: string;

  render(): JSX.Element {
    return (
      <div
        class={{
          columns: true,
          'is-centered': this.isCentered,
          'is-mobile': this.isMobile,
          'is-desktop': this.isDesktop,
          'is-multiline': this.isMultiline,
          'is-gapless': this.isGapless,
          'is-vcentered': this.isVcentered,
          'is-variable': !!this.gaps,
          [this.gaps]: !!this.gaps,
          [this.class]: !!this.class,
        }}
      >
        <slot />
      </div>
    );
  }
}
