import { Component, Prop, h, JSX } from '@stencil/core';

@Component({
  tag: 'b-progress',
})
export class Progress {
  @Prop() class: string;
  @Prop() value: number;
  @Prop() max: number = 100;
  @Prop() color: 'is-primary' | 'is-link' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
  @Prop() size: 'is-small' | 'is-medium' | 'is-large';

  render(): JSX.Element {
    return (
      <progress
        class={`progress
        ${this.color || ''}
        ${this.class || ''}
        ${this.size || ''}`}
        value={this.value}
        max={this.max}
      >
        {this.value && `${this.value}%`}
      </progress>
    );
  }
}
