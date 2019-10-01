import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'b-modal',
  styleUrls: ['modal.scss'],
})
export class Modal implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Is Active
   */
  @Prop({
    mutable: true,
    reflect: true,
  })
  isActive = false;

  /**
   * Modal Card
   */
  @Prop() hasModalCard = false;

  public handleCloseButtonClick = () => {
    this.isActive = false;
  };

  render(): JSX.Element {
    return (
      <div
        class={{
          modal: true,
          'is-active': this.isActive,
        }}
      >
        <div class="modal-background"></div>

        <div
          class={{
            'modal-content': !this.hasModalCard,
            'modal-card': this.hasModalCard,
          }}
        >
          <slot />
        </div>

        <button
          slot="close"
          class="modal-close is-large"
          aria-label="close"
          onClick={this.handleCloseButtonClick}
        ></button>
      </div>
    );
  }
}
