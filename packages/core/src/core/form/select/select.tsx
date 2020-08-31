import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-select',
  styleUrls: ['select.scss'],
})
export class Select implements ComponentInterface {
  /**
   * Control classes
   */
  @Prop() controlClass = '';

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
          'has-icons-left': Boolean(this.icon),
          [this.controlClass]: Boolean(this.controlClass),
        }}
      >
        <div
          class={{
            select: true,
            [this.color]: Boolean(this.color),
            [this.size]: Boolean(this.size),
            'is-multiple': this.isMultiple,
            'is-rounded': this.isRounded,
            'is-loading': this.isLoading,
          }}
        >
          <select
            multiple={this.isMultiple}
            class={{
              [this.state]: Boolean(this.state),
            }}
          >
            <slot />
          </select>
        </div>
        {Boolean(this.icon) && (
          <span
            class={{
              icon: true,
              'is-left': true,
              [this.size]: Boolean(this.size),
            }}
          >
            <i class={this.icon}></i>
          </span>
        )}
      </div>
    );
  }
}
