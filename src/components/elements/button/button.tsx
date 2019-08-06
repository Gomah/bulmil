import { Component, Prop, h, JSX, Listen, EventEmitter, Event } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-button',
  styleUrls: ['button.scss'],
})
export class Button {
  @Prop() disabled: boolean = false;
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

  @Prop() fullWidth: boolean = false;

  @Prop() isOutlined: boolean = false;

  @Prop() isInverted: boolean = false;

  @Prop() isRounded: boolean = false;

  @Prop() isHovered: boolean = false;

  @Prop() isFocused: boolean = false;

  @Prop() isActive: boolean = false;

  @Prop() isStatic: boolean = false;

  @Prop() isLoading: boolean = false;

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
