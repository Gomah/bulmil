import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-modal',
  styleUrls: ['modal.scss'],
})
export class Modal implements ComponentInterface {
  /**
   * Is Active
   */
  @Prop({ mutable: true, reflect: true }) isActive = false;

  /**
   * Modal Card
   */
  @Prop() hasModalCard = false;

  private handleCloseButtonClick = (): void => {
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
