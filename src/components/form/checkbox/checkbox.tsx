import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-checkbox',
  styleUrls: ['checkbox.scss'],
})
export class Checkbox implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Label classes
   */
  @Prop() labelClass = '';

  /**
   * Checked
   */
  @Prop() checked = false;

  /**
   * Disabled
   */
  @Prop() disabled = false;

  render(): JSX.Element {
    const labelClass = classNames('checkbox', this.labelClass);
    const checkboxClass = classNames(this.class);

    return (
      <label class={labelClass}>
        <input
          type="checkbox"
          class={checkboxClass}
          disabled={this.disabled}
          checked={this.checked}
        />
      </label>
    );
  }
}
