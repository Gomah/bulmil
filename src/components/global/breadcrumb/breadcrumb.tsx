import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-breadcrumb',
  styleUrls: ['breadcrumb.scss'],
})
export class Breadcrumb implements ComponentInterface {
  @Prop() class: string = '';
  @Prop() isCentered: boolean = false;
  @Prop() isRight: boolean = false;
  @Prop() size: 'is-small' | 'is-medium' | 'is-large';
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
