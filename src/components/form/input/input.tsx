import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-input',
  styleUrls: ['input.scss'],
})
export class Input implements ComponentInterface {
  @Prop() class: string = '';
  @Prop() controlClass: string = '';
  @Prop() value: string | number;
  @Prop() type: 'text' | 'number' | 'email' | 'password' = 'text';
  @Prop() color: 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
  @Prop() size: 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
  @Prop() state: 'is-hovered' | 'is-focused';
  @Prop() name: string = '';
  @Prop() required: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() readonly: boolean = false;
  @Prop() isRounded: boolean = false;
  @Prop() isLoading: boolean = false;
  @Prop() isStatic: boolean = false;

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
