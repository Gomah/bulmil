import { Component, Prop, h, JSX } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-select',
})
export class Select {
  @Prop() class: string = '';
  @Prop() controlClass: string = '';
  @Prop() value: string | number;
  @Prop() color: 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
  @Prop() size: 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
  @Prop() state: 'is-hovered' | 'is-focused';
  @Prop() isMultiple: boolean = false;
  @Prop() isLoading: boolean = false;
  @Prop() isRounded: boolean = false;

  render(): JSX.Element {
    const selectClass = classNames(
      'select',
      this.color,
      { 'is-multiple': this.isMultiple },
      { 'is-rounded': this.isRounded },
      { 'is-loading': this.isLoading },
      this.size,
      this.state,
      this.class
    );

    // TODO: Add icon

    const controlClass = classNames('control', this.controlClass);

    return (
      <div class={controlClass}>
        <div class={selectClass}>
          <select class={this.state || ''}>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
    );
  }
}
