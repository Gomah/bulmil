import { Component, Prop, h, JSX, Host, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'b-footer',
  styleUrls: ['footer.scss'],
})
export class Footer implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  render(): JSX.Element {
    return (
      <Host>
        <footer
          class={{
            footer: true,
            [this.class]: !!this.class,
          }}
        >
          <slot />
        </footer>
      </Host>
    );
  }
}
