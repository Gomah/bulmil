import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-breadcrumb',
  styleUrls: ['breadcrumb.scss'],
})
export class Breadcrumb implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Aligned to the center
   */
  @Prop() isCentered = false;

  /**
   * Aligned to the right
   */
  @Prop() isRight = false;

  /**
   * Size
   */
  @Prop() size: 'is-small' | 'is-medium' | 'is-large';

  /**
   * Separator
   */
  @Prop() separator:
    | 'has-arrow-separator'
    | 'has-bullet-separator'
    | 'has-dot-separator'
    | 'has-succeeds-separator';

  render(): JSX.Element {
    const breadcrumbClass = classNames(
      'breadcrumb',
      this.size,
      this.separator,
      {
        'is-centered': this.isCentered,
        'is-right': this.isRight,
      },
      this.class
    );

    return (
      <nav class={breadcrumbClass} aria-label="breadcrumbs">
        <slot />
      </nav>
    );
  }
}
