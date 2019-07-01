import { Component, Prop, h, JSX, Listen, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'b-button',
  // shadow: true,
})
export class Button {
  @Prop() disabled: boolean = false;

  @Prop() type: 'is-primary' | '' = '';

  @Event() clicked: EventEmitter;

  @Listen('click', { capture: true })
  handleClick(e: MouseEvent) {
    this.clicked.emit(e);
  }

  render(): JSX.Element {
    return (
      <button class={`button ${this.type}`} disabled={this.disabled}>
        <slot />
      </button>
    );
  }
}
