import { Component, Prop, h, JSX, ComponentInterface, Host } from '@stencil/core';

@Component({
  tag: 'bm-slider',
  styleUrls: ['slider.scss'],
})
export class Slider implements ComponentInterface {
  /**
   * Step
   */
  @Prop() step = 1;

  /**
   * Min
   */
  @Prop() min = 0;

  /**
   * CSS Classes
   */
  @Prop() max = 100;

  /**
   * Value
   */
  @Prop({ reflect: true }) value: number;

  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Color
   */
  @Prop() color: 'is-success' | 'is-warning' | 'is-danger' | 'is-info';

  /**
   * Size
   */
  @Prop() size: 'is-small' | 'is-medium' | 'is-large';

  /**
   * Circle
   */
  @Prop() isCircle = false;

  /**
   * Disabled
   */
  @Prop() disabled = false;

  private handleInputChange = (event): void => {
    this.value = event.target.value;
  };

  render(): JSX.Element {
    return (
      <Host>
        <input
          type="range"
          onChange={this.handleInputChange}
          class={{
            slider: true,
            'is-fullwidth': true,
            [this.color]: Boolean(this.color),
            [this.size]: Boolean(this.size),
            'is-circle': this.isCircle,
          }}
          step={this.step}
          min={this.min}
          max={this.max}
          value={this.value}
          disabled={this.disabled}
        />
      </Host>
    );
  }
}
