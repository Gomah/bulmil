import { Component, Prop, h, JSX, Listen, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'b-button',
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
    return (
      <button
        class={`button
        ${this.color || ''}
        ${this.class || ''}
        ${this.size || ''}
        ${this.fullWidth ? 'is-fullwidth' : ''}
        ${this.isActive ? 'is-active' : ''}
        ${this.isFocused ? 'is-focused' : ''}
        ${this.isStatic ? 'is-static' : ''}
        ${this.isFocused ? 'is-focused' : ''}
        ${this.isHovered ? 'is-hovered' : ''}
        ${this.isInverted ? 'is-inverted' : ''}
        ${this.isRounded ? 'is-rounded' : ''}
        ${this.isLoading ? 'is-loading' : ''}
        ${this.isOutlined ? 'is-outlined' : ''}`}
        disabled={this.disabled}
      >
        <slot />
      </button>
    );
  }
}
