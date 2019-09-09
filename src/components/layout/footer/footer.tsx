import { Component, Prop, h, JSX, Host, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-footer',
  styleUrls: ['footer.scss'],
})
export class Footer implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  render(): JSX.Element {
    const footerClass = classNames('footer', this.class);

    return (
      <Host>
        <footer class={footerClass}>
          <slot />
        </footer>
      </Host>
    );
  }
}
