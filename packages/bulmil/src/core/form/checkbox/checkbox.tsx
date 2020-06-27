import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-checkbox',
  styleUrls: ['checkbox.scss'],
})
export class Checkbox implements ComponentInterface {
  /**
   * Input classes
   */
  @Prop() inputClass = '';

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
    return (
      <label
        class={{
          checkbox: true,
          [this.labelClass]: Boolean(this.labelClass),
        }}
      >
        <input
          type="checkbox"
          class={{
            [this.inputClass]: Boolean(this.inputClass),
          }}
          disabled={this.disabled}
          checked={this.checked}
        />
        <slot />
      </label>
    );
  }
}
