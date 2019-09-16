import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'b-textarea',
  styleUrls: ['textarea.scss'],
})
export class Textarea implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Control class
   */
  @Prop() controlClass = '';

  /**
   * Value
   */
  @Prop() value: string | number;

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
   * Readonly state
   */
  @Prop() readonly = false;

  /**
   * Disabled state
   */
  @Prop() disabled = false;

  /**
   * Loading state
   */
  @Prop() isLoading = false;

  /**
   * Fixed size
   */
  @Prop() hasFixedSize = false;

  /**
   * Rows
   */
  @Prop() rows: number;

  render(): JSX.Element {
    return (
      <div
        class={{
          control: true,
          'is-loading': this.isLoading,
          [this.controlClass]: !!this.controlClass,
        }}
      >
        <textarea
          class={{
            textarea: true,
            'has-fixed-size': this.hasFixedSize,
            [this.color]: !!this.color,
            [this.size]: !!this.size,
            [this.state]: !!this.state,
            [this.class]: !!this.class,
          }}
          disabled={this.disabled}
          readonly={this.readonly}
        >
          {this.value}
        </textarea>
      </div>
    );
  }
}
