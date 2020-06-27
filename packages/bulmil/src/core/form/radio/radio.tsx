import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-radio',
  styleUrls: ['radio.scss'],
})
export class Radio implements ComponentInterface {
  /**
   * Input class
   */
  @Prop() inputClass = '';

  /**
   * Label Classes
   */
  @Prop() labelClass = '';

  /**
   * Name
   */
  @Prop() name: string;

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
          radio: true,
          [this.labelClass]: Boolean(this.labelClass),
        }}
      >
        <input
          class={{
            [this.inputClass]: Boolean(this.inputClass),
          }}
          type="radio"
          name={this.name}
          disabled={this.disabled}
          checked={this.checked}
        />
        <slot />
      </label>
    );
  }
}
