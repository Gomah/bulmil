import {
  Component,
  Prop,
  h,
  JSX,
  Listen,
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
  @Prop() disabled = false;
  @Prop() class: string;

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

  @Prop() size: 'is-small' | 'is-medium' | 'is-large' | 'is-normal';

  @Prop() fullWidth = false;

  @Prop() isOutlined = false;

  @Prop() isInverted = false;

  @Prop() isRounded = false;

  @Prop() isHovered = false;

  @Prop() isFocused = false;

  @Prop() isActive = false;

  @Prop() isStatic = false;

  @Prop() isLoading = false;

  @Event() clicked: EventEmitter;

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
      <button class={btnClass} disabled={this.disabled}>
        <slot />
      </button>
    );
  }
}
