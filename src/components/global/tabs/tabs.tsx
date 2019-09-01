import { Component, Prop, h, JSX, ComponentInterface, Host } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-tabs',
  styleUrls: ['tabs.scss'],
})
export class Tabs implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

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
    const tabsClass = classNames(
      'tabs',
      this.size,
      this.alignment,
      this.tabStyle,
      { 'is-fullwidth': this.isFullwidth },
      { 'is-toggle-rounded': this.isRounded && this.tabStyle === 'is-toggle' },
      this.class
    );

    return (
      <Host>
        <div class={tabsClass}>
          <ul>
            <li class="is-active">
              <a>Pictures</a>
            </li>
            <li>
              <a>Music</a>
            </li>
            <li>
              <a>Videos</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
          </ul>
        </div>
      </Host>
    );
  }
}
