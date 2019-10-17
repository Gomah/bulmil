import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-checkbox',
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
            [this.class]: Boolean(this.class),
          }}
          disabled={this.disabled}
          checked={this.checked}
        />
        <slot />
      </label>
    );
  }
}
