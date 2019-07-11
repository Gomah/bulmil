import { Component, Prop, h, JSX } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-icon',
})
export class Icon {
  @Prop() class: string = '';
  @Prop() color: 'has-text-info' | 'has-text-success' | 'has-text-warning' | 'has-text-danger';
  @Prop() size: 'is-small' | 'is-medium' | 'is-large';

  render(): JSX.Element {
    const iconClass = classNames('icon', this.color, this.size, this.class);

    return (
      <span class={iconClass}>
        <slot />
      </span>
    );
  }
}
