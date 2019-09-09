import {
  Component,
  Prop,
  h,
  JSX,
  Listen,
  Host,
  EventEmitter,
  Event,
  ComponentInterface,
} from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-button',
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
  @Prop() fullWidth = false;

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

  /**
   * Clicked event
   */
  @Event() clicked: EventEmitter;

  /**
   * Click listener
   */
  @Listen('click', { capture: true })
  handleClick(e: MouseEvent) {
    this.clicked.emit(e);
  }

  render(): JSX.Element {
    const btnClass = classNames(
      'button',
      this.color,
      this.size,
      {
        'is-fullwidth': this.fullWidth,
        'is-active': this.isActive,
        'is-focused': this.isFocused,
        'is-static': this.isStatic,
        'is-hovered': this.isHovered,
        'is-inverted': this.isInverted,
        'is-rounded': this.isRounded,
        'is-loading': this.isLoading,
        'is-outlined': this.isOutlined,
      },
      this.class
    );

    return (
      <Host onClick={this.handleClick} aria-disabled={this.disabled ? 'true' : null}>
        <button class={btnClass} disabled={this.disabled}>
          <slot />
        </button>
      </Host>
    );
  }
}
