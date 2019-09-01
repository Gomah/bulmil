import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-select',
  styleUrls: ['select.scss'],
})
export class Select implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Control classes
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
   * Allows multiple selection
   */
  @Prop() isMultiple = false;

  /**
   * Loading state
   */
  @Prop() isLoading = false;

  /**
   * Rounded
   */
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
