import { Component, Prop, h, JSX } from '@stencil/core';

@Component({
  tag: 'b-breadcrumb',
})
export class Breadcrumb {
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
    return (
      <nav
        class={`breadcrumb
        ${this.isCentered ? 'is-centered' : ''}
        ${this.isRight ? 'is-right' : ''}
        ${this.size ? this.size : ''}
        ${this.separator ? this.separator : ''}
        ${this.class}`}
        aria-label="breadcrumbs"
      >
        <slot />
      </nav>
    );
  }
}
