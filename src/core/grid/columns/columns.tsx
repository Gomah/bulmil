import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'b-columns',
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

  // TODO: Generate gap possibilities, e.g: is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd
  // @Prop() gaps: ['is-0' | 'is-1' | 'is-2' | 'is-3' | 'is-4' | 'is-5' | 'is-6' | 'is-7' | 'is-8'];

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
