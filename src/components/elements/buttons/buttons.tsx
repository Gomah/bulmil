import { Component, Prop, h, JSX } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-buttons',
})
export class Buttons {
  @Prop() class: string = '';
  @Prop() size: 'are-small' | 'are-medium' | 'are-large';

  render(): JSX.Element {
    const buttonsClass = classNames('buttons', this.size, this.class);
    return (
      <div class={buttonsClass}>
        <slot />
      </div>
    );
  }
}
