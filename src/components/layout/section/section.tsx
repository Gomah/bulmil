import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-section',
  styleUrls: ['section.scss'],
})
export class Section implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Section size
   */
  @Prop() size: 'is-medium' | 'is-large';

  render(): JSX.Element {
    const sectionClass = classNames('section', this.size, this.class);

    return (
      <div class={sectionClass}>
        <slot />
      </div>
    );
  }
}
