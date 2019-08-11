import { Component, ComponentInterface, Prop, Host, h, JSX } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-buttons',
  scoped: true,
})
export class Buttons implements ComponentInterface {
  @Prop() class: string = '';
  @Prop() size: 'are-small' | 'are-medium' | 'are-large';

  render(): JSX.Element {
    const buttonsClass = classNames('buttons', this.size, this.class);
    return <Host class={buttonsClass} />;
  }
}
