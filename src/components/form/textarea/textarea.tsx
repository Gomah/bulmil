import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-textarea',
  styleUrls: ['textarea.scss'],
})
export class Textarea implements ComponentInterface {
  @Prop() class = '';
  @Prop() controlClass = '';
  @Prop() value: string | number;
  @Prop() color: 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
  @Prop() size: 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
  @Prop() state: 'is-hovered' | 'is-focused';
  @Prop() readonly = false;
  @Prop() disabled = false;
  @Prop() isLoading = false;
  @Prop() hasFixedSize = false;
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
