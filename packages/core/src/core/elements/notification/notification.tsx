import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
@Component({
  tag: 'bm-notification',
  styleUrls: ['notification.scss'],
})
export class Notification implements ComponentInterface {
  /**
   * Color
   */
  @Prop() color: 'is-primary' | 'is-link' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';

  /**
   * Dismissable
   */
  @Prop() dismissable = true;

  render(): JSX.Element {
    return (
      <div
        class={{
          notification: true,
          [this.color]: Boolean(this.color),
        }}
      >
        {this.dismissable && <button class="delete"></button>}
        <slot />
      </div>
    );
  }
}
