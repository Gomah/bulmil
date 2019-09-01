import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-footer',
  styleUrls: ['footer.scss'],
})
export class Section implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  render(): JSX.Element {
    const footerClass = classNames('footer', this.class);

    return (
      <footer class={footerClass}>
        <slot />
      </footer>
    );
  }
}
