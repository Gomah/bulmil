import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-select',
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

  /**
   * Icon
   */
  @Prop() icon: string;

  render(): JSX.Element {
    return (
      <div
        class={{
          control: true,
          'has-icons-left': !!this.icon,
          [this.controlClass]: !!this.controlClass,
        }}
      >
        <div
          class={{
            select: true,
            [this.color]: !!this.color,
            [this.size]: !!this.size,
            [this.class]: !!this.class,
            'is-multiple': this.isMultiple,
            'is-rounded': this.isRounded,
            'is-loading': this.isLoading,
          }}
        >
          <select
            multiple={this.isMultiple}
            class={{
              [this.state]: !!this.state,
            }}
          >
            <slot />
          </select>
        </div>
        {!!this.icon && (
          <span
            class={{
              icon: true,
              'is-left': true,
              [this.size]: !!this.size,
            }}
          >
            <i class={this.icon}></i>
          </span>
        )}
      </div>
    );
  }
}
