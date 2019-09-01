import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-progress',
  styleUrls: ['progress.scss'],
})
export class Progress implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class: string;

  /**
   * Value
   */
  @Prop() value: number;

  /**
   * Maximum value
   */
  @Prop() max = 100;

  /**
   * Color
   */
  @Prop() color: 'is-primary' | 'is-link' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';

  /**
   * Size
   */
  @Prop() size: 'is-small' | 'is-medium' | 'is-large';

  render(): JSX.Element {
    const progressClass = classNames('progress', this.color, this.size, this.class);

    return (
      <progress class={progressClass} value={this.value} max={this.max}>
        {this.value && `${this.value}%`}
      </progress>
    );
  }
}
