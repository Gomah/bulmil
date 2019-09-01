import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'b-tag',
  styleUrls: ['tag.scss'],
})
export class Tag implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class: string;

  /**
   * Color
   */
  @Prop() color:
    | 'is-black'
    | 'is-dark'
    | 'is-light'
    | 'is-white'
    | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-warning'
    | 'is-danger';

  /**
   * Size
   */
  @Prop() size: 'is-normal' | 'is-medium' | 'is-large';

  /**
   * Modifier
   */
  @Prop() modifier: 'is-rounded' | 'is-delete';

  render(): JSX.Element {
    const tagClass = classNames('tag', this.color, this.size, this.modifier, this.class);

    return (
      <span class={tagClass}>
        <slot />
      </span>
    );
  }
}
