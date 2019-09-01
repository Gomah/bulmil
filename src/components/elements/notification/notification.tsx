import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'b-notification',
  styleUrls: ['notification.scss'],
})
export class Notification implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Color
   */
  @Prop() color: 'is-primary' | 'is-link' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';

  /**
   * Dismissable
   */
  @Prop() dismissable = true;

  render(): JSX.Element {
    const notificationClass = classNames('notification', this.color, this.class);

    return (
      <div class={notificationClass}>
        {this.dismissable && <button class="delete"></button>}
        <slot />
      </div>
    );
  }
}
