import { Component, Prop, h, JSX, Host, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-footer',
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
            [this.class]: Boolean(this.class),
          }}
        >
          <slot />
        </footer>
      </Host>
    );
  }
}
