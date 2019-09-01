import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-input',
  styleUrls: ['input.scss'],
})
export class Input implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Control Classes
   */
  @Prop() controlClass = '';

  /**
   * Value
   */
  @Prop() value: string | number;

  /**
   * Type
   */
  @Prop() type: 'text' | 'number' | 'email' | 'password' = 'text';

  /**
   * Color
   */
  @Prop() color: 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';

  /**
   * Size
   */
  @Prop() size: 'is-small' | 'is-normal' | 'is-medium' | 'is-large';

  /**
   * State
   */
  @Prop() state: 'is-hovered' | 'is-focused';

  /**
   * Name
   */
  @Prop() name = '';

  /**
   * Required
   */
  @Prop() required = false;

  /**
   * Disabled state
   */
  @Prop() disabled = false;

  /**
   * The input will look similar to a normal one, but is not editable and has no shadow
   */
  @Prop() readonly = false;

  /**
   * Rounded
   */
  @Prop() isRounded = false;

  /**
   * Loading state
   */
  @Prop() isLoading = false;

  /**
   * Removes the background, border, shadow, and horizontal padding
   */
  @Prop() isStatic = false;

  render(): JSX.Element {
    const inputClass = classNames(
      'input',
      this.color,
      this.size,
      this.state,
      {
        'is-rounded': this.isRounded,
        'is-static': this.isStatic,
      },
      this.class
    );

    const controlClass = classNames('control', { 'is-loading': this.isLoading }, this.controlClass);

    return (
      <div class={controlClass}>
        <input
          class={inputClass}
          required={this.required}
          disabled={this.disabled}
          readonly={this.readonly}
          name={this.name}
          type={this.type}
          value={this.value}
        />
      </div>
    );
  }
}
