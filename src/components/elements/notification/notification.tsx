import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'b-notification',
  styleUrls: ['notification.scss'],
})
export class Notification implements ComponentInterface {
  @Prop() class: string = '';
  @Prop() color: 'is-primary' | 'is-link' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
  @Prop() dismissable: boolean = true;

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
