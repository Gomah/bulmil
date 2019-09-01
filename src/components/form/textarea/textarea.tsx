import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';

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
    const textareaClass = classNames(
      'textarea',
      this.color,
      { 'has-fixed-size': this.hasFixedSize },
      this.size,
      this.state,
      this.class
    );
    const controlClass = classNames('control', { 'is-loading': this.isLoading }, this.controlClass);

    return (
      <div class={controlClass}>
        <textarea class={textareaClass} disabled={this.disabled} readonly={this.readonly}>
          {this.value}
        </textarea>
      </div>
    );
  }
}
