import { Component, Prop, h, JSX } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-radio',
  styleUrls: ['radio.scss'],
})
export class Radio {
  @Prop() class: string = '';
  @Prop() labelClass: string = '';
  @Prop() name: string;
  @Prop() checked: boolean = false;

  render(): JSX.Element {
    const labelClass = classNames('radio', this.labelClass);
    const radioClass = classNames(this.class);

    return (
      <label class={labelClass}>
        <input class={radioClass} type="radio" name={this.name} checked={this.checked} /> <slot />
      </label>
    );
  }
}
