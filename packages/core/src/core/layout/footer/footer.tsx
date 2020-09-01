import { Component, h, JSX, Host, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-footer',
  styleUrls: ['footer.scss'],
})
export class Footer implements ComponentInterface {
  render(): JSX.Element {
    return (
      <Host>
        <footer
          class={{
            footer: true,
          }}
        >
          <slot />
        </footer>
      </Host>
    );
  }
}
