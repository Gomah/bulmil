import { Component, Prop, h, JSX, ComponentInterface, Host } from '@stencil/core';

@Component({
  tag: 'bm-columns',
  styleUrls: ['columns.scss'],
})
export class Columns implements ComponentInterface {
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
      <Host
        class={{
          columns: true,
          'is-centered': this.isCentered,
          'is-mobile': this.isMobile,
          'is-desktop': this.isDesktop,
          'is-multiline': this.isMultiline,
          'is-gapless': this.isGapless,
          'is-vcentered': this.isVcentered,
          'is-variable': Boolean(this.gaps),
          [this.gaps]: Boolean(this.gaps),
        }}
      />
    );
  }
}
