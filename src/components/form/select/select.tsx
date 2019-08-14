import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-select',
  styleUrls: ['select.scss'],
})
export class Select implements ComponentInterface {
  @Prop() class = '';
  @Prop() controlClass = '';
  @Prop() value: string | number;
  @Prop() color: 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
  @Prop() size: 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
  @Prop() state: 'is-hovered' | 'is-focused';
  @Prop() isMultiple = false;
  @Prop() isLoading = false;
  @Prop() isRounded = false;

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
