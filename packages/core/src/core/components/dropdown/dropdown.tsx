import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-dropdown',
  styleUrls: ['dropdown.scss'],
})
export class Dropdown implements ComponentInterface {
  /**
   * The dropdown visibility
   */
  @Prop({ mutable: true, reflect: true }) isActive = false;

  /**
   * Align the dropdown to the right
   */
  @Prop() isRight = false;

  /**
   * Dropdown menu that appears above the dropdown button
   */
  @Prop() isUp = false;

  /**
   * The dropdown will show up when hovering the dropdown-trigger
   */
  @Prop() isHoverable = false;

  /**
   * Handle Trigger click action
   */
  private handleTriggerClick = (): void => {
    this.isActive = !this.isActive;
  };

  render(): JSX.Element {
    return (
      <div
        class={{
          dropdown: true,
          'is-active': this.isActive,
          'is-right': this.isRight,
          'is-up': this.isUp,
          'is-hoverable': this.isHoverable,
        }}
      >
        <div onClick={this.handleTriggerClick} class="dropdown-trigger">
          <slot name="trigger" aria-haspopup="true" />
        </div>

        <div class="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
