import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-button',
  styleUrls: ['button.scss'],
})
export class Button implements ComponentInterface {
  /**
   * Is disabled
   */
  @Prop() disabled = false;

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
    | 'is-text'
    | 'is-ghost';

  /**
   * Size
   */
  @Prop() size: 'is-small' | 'is-medium' | 'is-large' | 'is-normal';

  /**
   * Display the button in full-width
   * @default false
   */
  @Prop() isFullwidth = false;

  /**
   * Is outlined
   * @default false
   */
  @Prop() isOutlined = false;

  /**
   * Is light
   * @default false
   */
  @Prop() isLight = false;

  /**
   * Is inverted
   * @default false
   */
  @Prop() isInverted = false;

  /**
   * Rounded button
   * @default false
   */
  @Prop() isRounded = false;

  /**
   * Hovered state
   * @default false
   */
  @Prop() isHovered = false;

  /**
   * Focused state
   * @default false
   */
  @Prop() isFocused = false;

  /**
   * Active state
   * @default false
   */
  @Prop() isActive = false;

  /**
   * Static
   * @default false
   */
  @Prop() isStatic = false;

  /**
   * Loading state
   * @default false
   */
  @Prop() isLoading = false;

  render(): JSX.Element {
    return (
      <button
        class={{
          button: true,
          [this.color]: Boolean(this.color),
          [this.size]: Boolean(this.size),
          'is-fullwidth': this.isFullwidth,
          'is-active': this.isActive,
          'is-light': this.isLight,
          'is-focused': this.isFocused,
          'is-static': this.isStatic,
          'is-hovered': this.isHovered,
          'is-inverted': this.isInverted,
          'is-rounded': this.isRounded,
          'is-loading': this.isLoading,
          'is-outlined': this.isOutlined,
        }}
        disabled={this.disabled}
        aria-disabled={this.disabled ? 'true' : null}
      >
        <slot />
      </button>
    );
  }
}
