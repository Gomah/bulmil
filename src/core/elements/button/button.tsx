import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-button',
  styleUrls: ['button.scss'],
})
export class Button implements ComponentInterface {
  /**
   * Is disabled?
   */
  @Prop() disabled = false;

  /**
   * CSS classes
   */
  @Prop() class: string;

  /**
   * Color
   */
  @Prop() color:
    | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-danger'
    | 'is-warning'
    | 'is-white'
    | 'is-light'
    | 'is-dark'
    | 'is-black'
    | 'is-text';

  /**
   * Size
   */
  @Prop() size: 'is-small' | 'is-medium' | 'is-large' | 'is-normal';

  /**
   * Display the button in full-width
   */
  @Prop() isFullwidth = false;

  /**
   * Is outlined
   */
  @Prop() isOutlined = false;

  /**
   * Is inverted
   */
  @Prop() isInverted = false;

  /**
   * Rounded button
   */
  @Prop() isRounded = false;

  /**
   * Hovered state
   */
  @Prop() isHovered = false;

  /**
   * Focused state
   */
  @Prop() isFocused = false;

  /**
   * Active state
   */
  @Prop() isActive = false;

  /**
   * Static
   */
  @Prop() isStatic = false;

  /**
   * Loading state
   */
  @Prop() isLoading = false;

  render(): JSX.Element {
    return (
      <button
        class={{
          button: true,
          [this.color]: !!this.color,
          [this.size]: !!this.size,
          'is-fullwidth': this.isFullwidth,
          'is-active': this.isActive,
          'is-focused': this.isFocused,
          'is-static': this.isStatic,
          'is-hovered': this.isHovered,
          'is-inverted': this.isInverted,
          'is-rounded': this.isRounded,
          'is-loading': this.isLoading,
          'is-outlined': this.isOutlined,
          [this.class]: !!this.class,
        }}
        disabled={this.disabled}
        aria-disabled={this.disabled ? 'true' : null}
      >
        <slot />
      </button>
    );
  }
}
