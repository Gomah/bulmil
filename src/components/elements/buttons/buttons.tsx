import { Component, ComponentInterface, Prop, Host, h, JSX } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-buttons',
  scoped: true,
})
export class Buttons implements ComponentInterface {
  /**
   * CSS classes
   */
  @Prop() class = '';

  /**
   * Buttons size
   */
  @Prop() public size: 'are-small' | 'are-medium' | 'are-large';

  render(): JSX.Element {
    const buttonsClass = classNames('buttons', this.size, this.class);
    return <Host class={buttonsClass} />;
  }
}
