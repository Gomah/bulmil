import { Component, Prop, h, JSX } from '@stencil/core';

@Component({
  tag: 'b-input',
  // styleUrl: 'input.scss',
})
export class Input {
  @Prop() value: string | number;
  @Prop() type: string = 'text';
  @Prop() name: string;
  @Prop() required: boolean = false;

  render(): JSX.Element {
    return <input required={this.required} name={this.name} type={this.type} value={this.value} />;
  }
}
