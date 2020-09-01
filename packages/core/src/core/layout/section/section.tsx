import { Component, Prop, h, JSX, ComponentInterface, Host } from '@stencil/core';

@Component({
  tag: 'bm-section',
  styleUrls: ['section.scss'],
})
export class Section implements ComponentInterface {
  /**
   * Section size
   */
  @Prop() size: 'is-medium' | 'is-large';

  render(): JSX.Element {
    return (
      <Host
        class={{
          section: true,
          [this.size]: Boolean(this.size),
        }}
      />
    );
  }
}
