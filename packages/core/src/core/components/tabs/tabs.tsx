import { Component, Prop, h, JSX, ComponentInterface, Host } from '@stencil/core';

@Component({
  tag: 'bm-tabs',
  styleUrls: ['tabs.scss'],
})
export class Tabs implements ComponentInterface {
  /**
   * Pagination size
   */
  @Prop() size: 'is-small' | 'is-medium' | 'is-large';

  /**
   * Alignment
   */
  @Prop() alignment: 'is-centered' | 'is-right';

  /**
   * Style
   */
  @Prop() tabStyle: 'is-boxed' | 'is-toggle';

  /**
   * Rounded
   */
  @Prop() isRounded = false;

  /**
   * Full width
   */
  @Prop() isFullwidth = false;

  render(): JSX.Element {
    return (
      <Host>
        <div
          class={{
            tabs: true,
            [this.size]: Boolean(this.size),
            [this.alignment]: Boolean(this.alignment),
            [this.tabStyle]: Boolean(this.tabStyle),
            'is-fullwidth': this.isFullwidth,
            'is-toggle-rounded': this.isRounded && this.tabStyle === 'is-toggle',
          }}
        >
          <slot />
        </div>
      </Host>
    );
  }
}
