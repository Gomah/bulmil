import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-columns',
  styleUrls: ['columns.scss'],
})
export class Columns implements ComponentInterface {
  @Prop() class: string = '';
  @Prop() isCentered: boolean = false;
  @Prop() isMobile: boolean = false;
  @Prop() isDesktop: boolean = false;
  @Prop() isMultiline: boolean = false;
  @Prop() isGapless: boolean = false;
  @Prop() isVcentered: boolean = false;

  // TODO: Generate gap possibilities, e.g: is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd
  @Prop() gaps: ['is-0' | 'is-1' | 'is-2' | 'is-3' | 'is-4' | 'is-5' | 'is-6' | 'is-7' | 'is-8'];

  render(): JSX.Element {
    const columnsClass = classNames(
      'columns',
      {
        'is-centered': this.isCentered,
        'is-mobile': this.isMobile,
        'is-desktop': this.isDesktop,
        'is-multiline': this.isMultiline,
        'is-gapless': this.isGapless,
        'is-vcentered': this.isVcentered,
        'is-variable': !!this.gaps,
      },
      this.gaps,
      this.class
    );

    return (
      <div class={columnsClass}>
        <slot />
      </div>
    );
  }
}
