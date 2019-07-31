import { Component, Prop, h, JSX } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-textarea',
})
export class Textarea {
  @Prop() class: string = '';
  @Prop() controlClass: string = '';
  @Prop() value: string | number;
  @Prop() color: 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
  @Prop() size: 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
  @Prop() state: 'is-hovered' | 'is-focused';
  @Prop() readonly: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() isLoading: boolean = false;
  @Prop() hasFixedSize: boolean = false;
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
